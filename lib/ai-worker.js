import { pipeline, env } from '@huggingface/transformers';

// Configure for browser-only usage
env.allowLocalModels = false;
env.useBrowserCache = true;

// Disable Node.js backends that aren't available in a web worker
env.backends.onnx.wasm.proxy = false;

class TextClassifier {
    static task = 'text-classification';
    static model = 'Xenova/distilbert-base-uncased-finetuned-sst-2-english';
    static instance = null;

    static async getInstance(progress_callback = null) {
        if (this.instance === null) {
            this.instance = await pipeline(this.task, this.model, {
                progress_callback,
                // Use the default WASM backend for browser
                device: 'wasm',
            });
        }
        return this.instance;
    }
}

self.addEventListener('message', async (event) => {
    const { type, text } = event.data;

    if (type === 'load') {
        try {
            await TextClassifier.getInstance((progress) => {
                // Forward progress updates to main thread
                self.postMessage({ status: 'progress', progress });
            });
            self.postMessage({ status: 'ready' });
        } catch (e) {
            console.error('Model load error:', e);
            self.postMessage({ status: 'error', error: e.message });
        }
    } else if (type === 'classify') {
        try {
            const classifier = await TextClassifier.getInstance();
            const output = await classifier(text);
            self.postMessage({ status: 'complete', output });
        } catch (e) {
            self.postMessage({ status: 'error', error: e.message });
        }
    }
});
