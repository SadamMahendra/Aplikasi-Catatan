import React from "react";
import RegisterInput from "../component/RegisterInput";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="register-page">
      <h2>Isi form untuk mendaftarkan akun</h2>
      <RegisterInput stateValue={onRegisterHandler} />
    </section>
  );
}

export default RegisterPage;
