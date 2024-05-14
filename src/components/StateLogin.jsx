import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  //   const [enteredValues, setEnteredValues] = useState({
  //     email: "",
  //     password: "",
  //   });
  //   const [didEdit, setDidEdit] = useState({
  //     email: false,
  //     password: false,
  //   });
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });
  //   const emailIsInvalid =
  //     didEdit.email &&
  //     !isEmail(enteredValues.email) &&
  //     !isNotEmpty(enteredValues.email);

  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValues.password, 6);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(enteredValues);
    setEnteredValues({
      email: "",
      password: "",
    });
  }

  //   function handleInputChange(identifier, value) {
  //     setEnteredValues((prevValues) => ({
  //       ...prevValues,
  //       [identifier]: value,
  //     }));
  //     setDidEdit((prevEdit) => ({
  //       ...prevEdit,
  //       [identifier]: false,
  //     }));
  //   }

  //   function handleInputBlur(identifier) {
  //     setDidEdit((prevEdit) => ({
  //       ...prevEdit,
  //       [identifier]: true,
  //     }));
  //   }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email"}
        />
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/* <button type="button" className="button" onClick={handleSubmit}> */}
        <button className="button">Login</button>
      </p>
    </form>
  );
}
