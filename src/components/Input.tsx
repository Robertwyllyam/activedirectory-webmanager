import React from "react";

const Input = ({
  name,
  label,
  state,
  setState,
  type = "text",
}: {
  name: string;
  label: string;
  state: string;
  setState: (value: string) => void;
  type?: string;
}) => {
  return (
    <div className="input-container">
      <label>{label || name}</label>
      <input
        type={type}
        value={state}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const {
            target: { value },
          } = event;
          setState(value);
        }}
      ></input>
    </div>
  );
};

export default Input;
