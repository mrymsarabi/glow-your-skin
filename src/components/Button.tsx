import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  type?: "button" | "submit" | "reset";
  buttonClassName?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  text = "",
  type = "button",
  buttonClassName = "",
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
