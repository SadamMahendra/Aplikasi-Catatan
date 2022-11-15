import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

function RegisterInput({ stateValue }) {
  const [name, onNameChange] = useInput();
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();
  const [confirmPassword, onConfirmPasswordChange] = useInput();

  function onRegisHandler() {
    if (password === confirmPassword) {
      stateValue({ name, email, password });
    } else {
      alert("password tidak sama");
      return;
    }
  }

  return (
    <div className="input-register">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={onNameChange} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
      />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
      />
      <button type="button" onClick={onRegisHandler}>
        Register
      </button>
    </div>
  );
}

RegisterInput.propTypes = {
  stateValue: PropTypes.func.isRequired,
};

export default RegisterInput;
