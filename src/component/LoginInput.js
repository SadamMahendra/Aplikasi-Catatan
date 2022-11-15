import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

function LoginInput({ valueState }) {
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();

  function onSubmitHandler() {
    valueState({ email, password });
  }

  return (
    <div className="input-login">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
      />
      <button type="button" onClick={onSubmitHandler}>
        login
      </button>
    </div>
  );
}

LoginInput.propTypes = {
  valueState: PropTypes.func.isRequired,
};
export default LoginInput;
