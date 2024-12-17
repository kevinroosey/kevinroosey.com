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
            return 'bg-gradient-to-t from-blue-600 to-blue-500 border-2 border-blue-400 hover:to-blue-600 shadow-md hover:shadow-sm text-neutral-50';
        case 'secondary':
            return 'bg-transparent border-2 border-neutral-300 text-neutral-400 hover:bg-gradient-to-t hover:from-neutral-100 hover:to-neutral-100 hover:border-neutral-400 hover:text-neutral-600 hover:border-neutral-600';
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
                'inline-flex items-center justify-center px-4 py-2 h-10 rounded-md text-sm font-medium focus:outline-none',
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
