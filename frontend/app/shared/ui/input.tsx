import React from "react";

type Props = {
  value: string;
  changeValue: (value: string) => void;
  placeholder: string;
  type?: string;
};

export default function Input({
  placeholder,
  value,
  changeValue,
  type,
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-md  bg-neutral-50 hover:bg-neutral-100 duration-100"
      value={value}
      onChange={(e) => changeValue(e.target.value)}
    />
  );
}
