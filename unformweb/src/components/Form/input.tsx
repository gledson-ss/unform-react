import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

interface InputProps {
  name: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <input ref={inputRef} {...rest} defaultValue={defaultValue} />;
      {error && <span style={{ color: "#044" }}>{error}</span>}
    </div>
  );
};

export default Input;
