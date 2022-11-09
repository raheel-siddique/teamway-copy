import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // to navigate to other page
import { Input } from "antd"; // ant design input
import { FaArrowRight } from "react-icons/fa"; // react-icons icon

import { BASE_URL, setUser } from "../../global"; //Global EndPoint

import { LoginStyle } from "./Login.style";
import axios from "axios";
import { useEffect } from "react";

function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState("");

  const URL = `${BASE_URL}/apiauth/local`;
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (validate == true) {
  //     setTimeout(() => {
  //       navigate("/");
  //     }, 2000);
  //   }
  // }, [validate]);

  const handleInput = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(URL, {
        username: login.username,
        password: login.password,
      })
      .then((res) => {
        if (res.data.error == "Invalid username or password") {
          setError("Invalid username or password");
        } else {
          setUser(
            res.data.user.screen_name,
            res.data.user.email,
            res.data.user.profile_pic,
            res.data.user.token
          );

          setLoading(true);

          setValidate(res.data.validated);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <LoginStyle>
      <article className="login-container">
        <article className="site-logo">
          <h1 className="logo">Teamway</h1>
        </article>
        <form onSubmit={handleSubmit}>
          <article className="login-form">
            <p className="error">{error}</p>

            <article className="form-content">
              <label className="form-title">Username</label>
              <input
                type="text"
                className="username"
                placeholder="Username"
                name="username"
                value={login.username}
                onChange={handleInput}
                required
              />
            </article>

            <article className="form-content">
              <label className="form-title">Password</label>
              <Input.Password
                placeholder="Password"
                name="password"
                value={login.password}
                onChange={handleInput}
                required
              />
            </article>
<NavLink to='/'>
<button className="login-button">
              {loading ? (
                "loading..."
              ) : (
                <>
                  Login
                  <span className="icon">
                    <FaArrowRight />
                  </span>
                </>
              )}
            </button>
</NavLink>
            
          </article>
        </form>
      </article>
    </LoginStyle>
  );
}

export default Login;
