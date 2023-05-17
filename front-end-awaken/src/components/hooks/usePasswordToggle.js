import React, { useState } from "react";

const usePasswordToggle = () => {
  const [visible, setVisibility] = useState(false);
  const eye = (
    <i
      className="bi bi-eye-fill"
      onClick={() => setVisibility((visible) => !visible)}
    ></i>
  );
  const eye_slash = (
    <i
      className="bi bi-eye-slash-fill"
      onClick={() => setVisibility((visible) => !visible)}
    ></i>
  );

  const Icon = visible ? eye : eye_slash;

  const InputType = visible ? "text" : "password";
  return [InputType, Icon];
};

export default usePasswordToggle;
