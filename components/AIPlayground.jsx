import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Sparkles, Brain, CheckCircle, AlertTriangle } from 'lucide-react';

const MODEL_NAME = 'Xenova/distilbert-base-uncased-finetuned-sst-2-english';
const MODEL_LOAD_TIMEOUT_MS = 90_000; // 90 seconds

export default function AIPlayground() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);
    const [error, setError] = useState(null);
    const [progressPct, setProgressPct] = useState(null);
    const classifierRef = useRef(null);
    const readyRef = useRef(false);

    // Load the model directly (no web worker)
    useEffect(() => {
        let cancelled = false;
        let timeoutId = null;

        const loadModel = async () => {
            try {
                // Dynamically import to keep the bundle small for other pages
                const { pipeline } = await import('@huggingface/transformers');

                if (cancelled) return;

                // Set a timeout so users aren't left hanging
                timeoutId = setTimeout(() => {
                    if (!readyRef.current && !cancelled) {
                        setError('Model loading timed out. This may be due to a slow connection. Try refreshing.');
                        setLoading(false);
                    }
                }, MODEL_LOAD_TIMEOUT_MS);

                const classifier = await pipeline('text-classification', MODEL_NAME, {
                    device: 'wasm',
                    progress_callback: (progress) => {
                        if (cancelled) return;
                        if (progress?.progress != null) {
                            setProgressPct(Math.round(progress.progress));
                        }
                    },
                });

                if (cancelled) return;

                classifierRef.current = classifier;
                readyRef.current = true;
                setReady(true);
                setProgressPct(null);
                setError(null);
                clearTimeout(timeoutId);
            } catch (e) {
                if (cancelled) return;
                console.error('Failed to load AI model:', e);
                setError(`Failed to load model: ${e.message}`);
                clearTimeout(timeoutId);
            }
        };

        loadModel();

        return () => {
            cancelled = true;
            clearTimeout(timeoutId);
        };
    }, []);

    const analyze = useCallback(async () => {
        if (!input.trim() || !classifierRef.current) return;
        setLoading(true);
        setResult(null);
        try {
            const output = await classifierRef.current(input);
            setResult(output);
        } catch (e) {
            console.error('Classification error:', e);
            setError(`Analysis failed: ${e.message}`);
        } finally {
            setLoading(false);
        }
    }, [input]);

    const getStatusIndicator = () => {
        if (error) {
            return (
                <span className="text-xs text-amber-600 dark:text-amber-400 flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{error}</span>
                </span>
            );
        }
        if (ready) {
            return (
                <span className="text-xs text-green-600 dark:text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-3 h-3" /> Model Ready
                </span>
            );
        }
        const label = progressPct != null
            ? `Downloading... ${progressPct}%`
            : 'Loading Model...';
        return (
            <span className="text-xs text-slate-500 flex items-center gap-2">
                <Loader2 className="w-3 h-3 animate-spin" /> {label}
            </span>
        );
    };

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center p-3 mb-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
                        <Brain className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                        Live AI Playground
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Experience real-time AI running directly in your browser. No server, no latency.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white/50 dark:bg-slate-800/30 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-2xl"
                >
                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                            Try Sentiment Analysis
                        </label>
                        <div className="relative">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type something here (e.g., 'I absolutely loved this project, it was amazing!')"
                                className="w-full h-32 p-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-[#0071e3] transition-all resize-none text-slate-900 dark:text-white placeholder:text-slate-400"
                            />
                            <div className="absolute bottom-4 right-4 max-w-[60%] text-right">
                                {getStatusIndicator()}
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                onClick={analyze}
                                disabled={!ready || loading || !input.trim()}
                                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0071e3] to-[#5856d6] text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-2"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                                Run Analysis
                            </button>
                        </div>

                        <AnimatePresence>
                            {result && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className={`mt-6 p-6 rounded-2xl border ${result[0].label === 'POSITIVE'
                                        ? 'bg-green-50/50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                                        : 'bg-red-50/50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                                        }`}>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${result[0].label === 'POSITIVE' ? 'bg-green-100 dark:bg-green-800' : 'bg-red-100 dark:bg-red-800'
                                                }`}>
                                                {result[0].label === 'POSITIVE' ? '😄' : '😔'}
                                            </div>
                                            <div>
                                                <h4 className={`text-lg font-bold ${result[0].label === 'POSITIVE' ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'
                                                    }`}>
                                                    {result[0].label === 'POSITIVE' ? 'Positive Sentiment' : 'Negative Sentiment'}
                                                </h4>
                                                <p className="text-slate-600 dark:text-slate-400">
                                                    Confidence Score: <span className="font-mono font-bold">{(result[0].score * 100).toFixed(1)}%</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
