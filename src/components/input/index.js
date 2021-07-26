import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  createRef,
} from "react";

import { MdPerson } from "react-icons/md";
import { Container } from "./styles.js";

const Input = forwardRef((props, ref) => {
  const [error, setError] = useState(false);
  const [focus, setFocus] = useState(false);
  const inputRef = createRef();

  useImperativeHandle(ref, () => ({
    focusOnError() {
      setError(true);
      inputRef.current.focus();
    },
    resetError() {
      setError(false);
    },
  }));

  const onFocus = () => {
    setFocus(!focus);
  };

  const onBlur = () => {
    setFocus(!focus);
  };

  return (
    <Container error={error} focus={focus}>
      <div className="containerLabel">
        <label style={{ color: props.colorLabel, fontWeight: "bold" }}>
          {props.label}
        </label>
      </div>
      <div className="containerInput">
        <input
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
          ref={inputRef}
          placeholderpColor={"#7B8794"}
          {...props}
        />
        <MdPerson
          size={20}
          color={error ? "#e91e63" : "#444"}
          className="icon"
        />
      </div>
    </Container>
  );
});

export default Input;
