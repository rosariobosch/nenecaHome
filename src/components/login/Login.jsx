import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleValidation = (event) => {
    let url = "https://backend-neneca.glitch.me/api/v1/usuario/login";
    let data = { username, password };
    let body = JSON.stringify(data);

    console.log(body);

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
      .then((response) => console.log("Success:", response))
      .catch((error) => console.error("Error:", error));

    return;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <label>Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese su usuario"
                  onChange={(event) => setUser(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
