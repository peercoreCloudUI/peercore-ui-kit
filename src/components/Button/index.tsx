import React from "react";
import "../../assets/styles/global.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button 
      className="tw-bg-blue-500 tw-text-white tw-py-2 tw-px-4 tw-rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
