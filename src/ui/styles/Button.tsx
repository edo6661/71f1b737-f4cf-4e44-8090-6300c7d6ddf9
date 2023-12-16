import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const buttonStyled = cva("button disabled:cursor-not-allowed disabled:opacity-50", {
    variants: {
        intent: {
            primary: [
                "bg-button",
                "text-white",
                "hovered",
            ],
            secondary: [
                "bg-tertiary",
                "text-white",
                "hovered",
            ],
        },
        size: {
            sm: ["text-base", "py-1", "px-3", "rounded-lg"],
            base: ["text-lg", "py-2", "px-4", ""],
        },
    },
    compoundVariants: [{
        intent: "primary", size: "base",
        // class: "uppercase"
    }],
    defaultVariants: {
        intent: "primary",
        size: "base",
    },
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyled> { }

const Button: React.FC<ButtonProps> = ({
    className,
    intent,
    size,
    ...props
}) => <button className={buttonStyled({ intent, size, className })} {...props} />;

export default Button