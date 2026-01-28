import { motion } from 'framer-motion';

export default function Avatar({ size = "lg", className = "" }) {
    const sizes = {
        sm: "w-12 h-12",
        md: "w-32 h-32",
        lg: "w-48 h-48",
        xl: "w-64 h-64"
    };

    return (
        <div className={`relative ${sizes[size]} ${className} group cursor-pointer perspective-1000`}>
            {/* Glow Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* 3D Container */}
            <motion.div
                className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 bg-gradient-to-br from-blue-100 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50"
                whileHover={{
                    rotateY: 10,
                    rotateX: -5,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Placeholder Avatar Art (Geometric/Abstract Memoji style) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Face Shape */}
                    <div className="w-[60%] h-[70%] bg-[#ffdbac] rounded-[2.5rem] relative top-4 shadow-inner">
                        {/* Hair */}
                        <div className="absolute -top-4 -left-2 w-[110%] h-[40%] bg-gray-800 rounded-t-[3rem] rounded-b-[1rem]" />

                        {/* Glasses (Data Engineer vibe) */}
                        <div className="absolute top-[35%] left-[10%] w-[80%] h-[20%] flex gap-1">
                            <div className="w-[45%] h-full border-4 border-gray-900 rounded-full bg-white/10 backdrop-blur-sm" />
                            <div className="w-[10%] h-[20%] border-t-4 border-gray-900 mt-2" />
                            <div className="w-[45%] h-full border-4 border-gray-900 rounded-full bg-white/10 backdrop-blur-sm" />
                        </div>

                        {/* Smile */}
                        <div className="absolute bottom-[20%] left-[30%] w-[40%] h-[10%] border-b-4 border-gray-800 rounded-full opacity-60" />

                        {/* Hoodie */}
                        <div className="absolute -bottom-10 -left-[20%] w-[140%] h-[40%] bg-[#0071e3] rounded-t-[50%]" />
                    </div>
                </div>

                {/* Reflection/Shine */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/30 to-transparent pointer-events-none rounded-full" />
            </motion.div>

            {/* Status Dot */}
            <motion.div
                className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white dark:border-gray-900 rounded-full shadow-lg z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </div>
    );
}
