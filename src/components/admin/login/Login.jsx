import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminPanel from "../panel/AdminPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.scss";

export default function Login() {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    }
  }, []);

  const handleValidation = (event) => {
    setIsLoading(true);
    let url = "https://backend-neneca.glitch.me/api/v1/usuario/login";
    let data = { username, password };
    let body = JSON.stringify(data);

    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body,
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.token) {
          localStorage.setItem("token", JSON.stringify(response.token));
          setIsLoading(false);
          setIsLogged(true);
        }
      })
      .catch((error) => console.error("Error:", error));

    return;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  const handleTokenExpired = () => {
    console.log("Token expiro");
    setIsLogged(false);
  };

  return (
    <div id="login">
      <div className="container">
        {!isLogged && (
          <form id="loginform" onSubmit={loginSubmit}>
            <div className="form-group">
              <label className="mb-1">Usuario</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                aria-describedby="emailHelp"
                onChange={(event) => setUser(event.target.value)}
              />
            </div>
            <div className="form-group mt-3 mb-4">
              <label className="mb-1">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {!isLoading && (
              <button type="submit" className="btn btn-primary btn-login">
                Ingresar
              </button>
            )}

            {isLoading && (
              <div
                className="spinner-border text-primary m-auto"
                role="status"
              ></div>
            )}
          </form>
        )}

        {isLogged && <AdminPanel onTokenExpired={handleTokenExpired} />}
      </div>
    </div>
  );
}
