import { pipeline, env } from '@xenova/transformers';

// Skip local model checks
env.allowLocalModels = false;
env.useBrowserCache = true;

class TextClassifier {
    static task = 'text-classification';
    static model = 'Xenova/distilbert-base-uncased-finetuned-sst-2-english';
    static instance = null;

    static async getInstance(progress_callback = null) {
        if (this.instance === null) {
            this.instance = await pipeline(this.task, this.model, { progress_callback });
        }
        return this.instance;
    }
}

self.addEventListener('message', async (event) => {
    const { type, text } = event.data;

    if (type === 'load') {
        try {
            await TextClassifier.getInstance();
            self.postMessage({ status: 'ready' });
        } catch (e) {
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
