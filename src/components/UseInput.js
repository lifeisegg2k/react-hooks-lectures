import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    } 
  };
  return { value, onChange };
};

const UseInput = () => {
  const maxLen = value => value.length <= 10;
  // const maxLen = value => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <h2>Hello UseInput</h2>
      <input placeholder="Name" value={name.value} onChange={name.onChange}/>
      <input placeholder="Name2" {...name} />
    </div>
  );
};

export default UseInput;
