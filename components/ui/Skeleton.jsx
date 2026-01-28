import { motion } from 'framer-motion';

/**
 * Skeleton loader component with shimmer effect
 * Variants: card, text, image, circle, bar
 */
export function Skeleton({ variant = 'text', className = '', width, height }) {
    const baseClasses = 'bg-gray-200 dark:bg-gray-700 rounded animate-pulse relative overflow-hidden';

    const shimmer = (
        <motion.div
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent"
            animate={{ translateX: ['−100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
    );

    const variants = {
        text: 'h-4 w-full rounded',
        card: 'h-64 w-full rounded-2xl',
        image: 'h-48 w-full rounded-lg',
        circle: 'h-12 w-12 rounded-full',
        bar: 'h-2 rounded-full',
    };

    const style = {};
    if (width) style.width = width;
    if (height) style.height = height;

    return (
        <div
            className={`${baseClasses} ${variants[variant]} ${className}`}
            style={style}
        >
            {shimmer}
        </div>
    );
}

/**
 * Project card skeleton
 */
export function ProjectCardSkeleton() {
    return (
        <div className="glass rounded-2xl overflow-hidden shadow-md">
            <Skeleton variant="image" />
            <div className="p-6 space-y-3">
                <Skeleton variant="text" width="70%" />
                <Skeleton variant="text" />
                <Skeleton variant="text" width="40%" />
            </div>
        </div>
    );
}

/**
 * Publication card skeleton
 */
export function PublicationCardSkeleton() {
    return (
        <div className="glass rounded-2xl overflow-hidden shadow-md">
            <Skeleton variant="image" height="160px" />
            <div className="p-6 space-y-3">
                <Skeleton variant="text" width="85%" />
                <Skeleton variant="text" />
                <Skeleton variant="text" width="60%" />
            </div>
        </div>
    );
}

export default Skeleton;
