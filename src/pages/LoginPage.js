import React from "react";
import { Link } from "react-router-dom";
import LoginInput from "../component/LoginInput";
import { login } from "../utils/network-data";
import PropTypes from "prop-types";

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <h2>Yuk login yuk</h2>
      <LoginInput valueState={onLogin} />
      <p>
        Belum punya akun? <Link to="/register">Daftar disini</Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
