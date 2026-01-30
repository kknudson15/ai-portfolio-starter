import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-red-50 dark:bg-red-900/10 text-slate-900 dark:text-white">
                    <h1 className="text-3xl font-bold mb-4">Something went wrong.</h1>
                    <p className="mb-6 text-lg max-w-2xl">
                        We're sorry, but the application encountered an unexpected error.
                    </p>
                    <div className="bg-white/80 dark:bg-black/50 p-4 rounded-lg text-left overflow-auto max-w-4xl w-full mb-6 font-mono text-sm border border-red-200 dark:border-red-800">
                        <p className="text-red-600 dark:text-red-400 font-bold">{this.state.error && this.state.error.toString()}</p>
                        <br />
                        <pre className="text-slate-600 dark:text-slate-400 whitespace-pre-wrap">
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </pre>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
