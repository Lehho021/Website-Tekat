import React from "react";
import "./login.css";

const Login = () => {
  return (
    <section className="login container section">
      <div className="secContainer">
        <div className="secIntro">
          <h1 className="secTitle">Selamat Datang Di Tekat-APP</h1>
        </div>

        <div className="mainContent grid">
          <div className="singleLogin">
            <div className="halaman-login">
              <h1>Sign in to your account</h1>
              <p>
                Don't have an account yet ?{" "}
                <a href="/register" className="tombol-register">
                  {" "}
                  Sign up.
                </a>
              </p>
            </div>
          </div>
        </div>

        <form>
          <div className="email">
            <label>Email Address</label>
            <input type="email" />
          </div>
          <div className="password">
            <label>Password</label>
            <input type="password" />
          </div>
          <button className="tombol-login">Sign In</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
