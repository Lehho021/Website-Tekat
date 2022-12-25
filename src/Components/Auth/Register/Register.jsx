import React, { useState } from "react";
import "./register.css";
import { UserAuth } from "../../Context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <section className="register container section">
      <div className="secContainer">
        <div className="secIntro">
          <h1 className="secTitle">Selamat Datang Di Tekat-APP</h1>
        </div>

        <div className="mainContent grid">
          <div className="singleLogin">
            <div className="halaman-login">
              <h1>Sign up for a free account</h1>
              <p>
                Already have an account yet ?{" "}
                <a href="/login" className="tombol-register">
                  {" "}
                  Sign in.
                </a>
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="email">
            <label>Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" />
          </div>
          <div className="password">
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <button className="tombol-login">Sign Up</button>
        </form>
      </div>
    </section>
  );
};

export default Register;
