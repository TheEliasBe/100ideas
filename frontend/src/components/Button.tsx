import React from 'react';


interface ButtonProps {
    label: string;
    onClick?: () => void; // Optional click handler
    className?: string; // Optional additional classes
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className = '' }) => {
    return (
        <button
            className={` inline-flex items-center justify-center gap-1.5 rounded-lg px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring ${className}`}
            type="button"
            onClick={onClick}
        >
            <span className="text-sm font-medium">{label}</span>
        </button>
    );
};

export default Button;