import { Button } from '@headlessui/react';
import clsx from 'clsx';

type ButtonProps = {
    text: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    variant: 'primary' | 'secondary';
    link?: string;
};

function getVariantClassName(variant: 'primary' | 'secondary') {
    switch (variant) {
        case 'primary':
            return 'bg-blue-500 hover:bg-blue-600 text-white';
        case 'secondary':
            return 'bg-gray-200 hover:bg-gray-300 text-gray-800';
        default:
            return '';
    }
}

export default function ButtonComponent({
    text,
    onClick,
    className,
    disabled,
    loading,
    variant,
    link
}: ButtonProps) {
    const variantClasses = getVariantClassName(variant);

    const buttonElement = (
        <Button
            className={clsx(
                'inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium focus:outline-none',
                variantClasses,
                {
                    'opacity-50 cursor-not-allowed': disabled,
                    'animate-pulse': loading
                },
                className
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </Button>
    );

    // If `link` is provided, wrap the button in an anchor
    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer">
                {buttonElement}
            </a>
        );
    }

    return buttonElement;
}
