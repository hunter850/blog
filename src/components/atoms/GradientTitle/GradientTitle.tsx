interface GradientTitleProps {
    children: React.ReactNode;
    className?: string;
}

function GradientTitle({ children, className = "text-4xl" }: GradientTitleProps) {
    return (
        <h2
            className={`bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-center font-bold text-transparent [-webkit-background-clip:text] dark:from-blue-400 dark:to-cyan-400 ${className}`}
        >
            {children}
        </h2>
    );
}

export default GradientTitle;
