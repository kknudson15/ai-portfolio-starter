export function Button({ children, onClick, variant = 'default', size = 'md', className = '' }) {
    const base = 'rounded-lg font-medium transition-colors duration-200 focus:outline-none';
    const variants = {
      default: 'bg-blue-600 hover:bg-blue-700 text-white',
      ghost: 'bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200',
    };
    const sizes = {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };
  
    return (
      <button onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
        {children}
      </button>
    );
  }