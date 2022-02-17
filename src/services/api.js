import axios from "axios";

const api = {
  obtenerProductos: "http://backend-neneca.glitch.me/api/v1/producto/obtener",
  agregarProducto: "http://backend-neneca.glitch.me/api/v1/producto/agregar", // (POST)
  actualizarProducto:
    "http://backend-neneca.glitch.me/api/v1/producto/actualizar/", //:id (PUT)
  eliminarProducto: "http://backend-neneca.glitch.me/api/v1/producto/eliminar/", //:id (DELETE)
  obtenerOrdenes: "http://backend-neneca.glitch.me/api/v1/orden/obtener", // (GET)
  obtenerOrden: "https://backend-neneca.glitch.me/api/v1/orden/obtener/", //:id (GET),
  actualizarOrden: "http://backend-neneca.glitch.me/api/v1/orden/actualizar/", //:id (PUT)
  eliminarOrden: "http://backend-neneca.glitch.me/api/v1/orden/eliminar/", //:id (DELETE)
  agregarVariacion: "http://backend-neneca.glitch.me/api/v1/variacion/agregar/", //id producto padre (POST)
  actualizarVariacion:
    "http://backend-neneca.glitch.me/api/v1/variacion/actualizar/", //:id producto padre (PUT)
  eliminarVariacion:
    "http://backend-neneca.glitch.me/api/v1/variacion/eliminar/", //:id producto padre (DELETE)
};

const getHeaders = (type = "") => {
  const token = JSON.parse(localStorage.getItem("token"));
  let headers = {};
  if (type === "variation") {
    headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "x-access-token": `${token}`,
      "Access-Control-Allow-Headers": "*",
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "x-access-token": `${token}`,
      "Access-Control-Allow-Headers": "*",
    };
  }
  return headers;
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return response.json().then((json) => {
    return Promise.reject({
      status: response.status,
      ok: false,
      statusText: response.statusText,
      body: json,
    });
  });
};

//Ver si hacerlo como objeto. Ver como implementarlo con async si se hace como objeto

const helperRequest = async function (queryParams, type) {
  let req = new Promise(function (resolve, reject) {});
  let body = JSON.stringify(queryParams);
  let error;

  if (type === "obtenerProductos") {
    req = await fetch(api.obtenerProductos, {
      headers: getHeaders(),
    })
      .then(checkStatus)
      .then((res) => res.json())
      .catch((e) => {
        e.body?.error?.message
          ? (error = e.body.error.message)
          : (error = e.response.data.msg);
      });
  }

  if (type === "agregarProducto") {
    req = await fetch(api.agregarProducto, {
      method: "post",
      headers: getHeaders(),
      body,
    })
      .then(checkStatus)
      .then((res) => res.json())
      .catch((e) => {
        e.body?.error?.message
          ? (error = e.body.error.message)
          : (error = e.response.data.msg);
      });
  }

  if (type === "actualizarProducto") {
    req = await fetch(`${api.actualizarProducto}${queryParams.id}`, {
      method: "PUT",
      headers: getHeaders(),
      body,
    })
      .then(checkStatus)
      .then((res) => res.json())
      .catch((e) => {
        e.body?.error?.message
          ? (error = e.body.error.message)
          : (error = e.response.data.msg);
      });
  }

  if (type === "eliminarProducto") {
    console.log("Entro aca y es", queryParams);
    req = await fetch(`${api.eliminarProducto}${queryParams.id}`, {
      method: "delete",
      headers: getHeaders(),
    })
      .then(checkStatus)
      .then((res) => res.json())
      .catch((e) => {
        e.body?.error?.message
          ? (error = e.body.error.message)
          : (error = e.response.data.msg);
      });
  }

  if (type === "obtenerOrdenes") {
    req = await fetch(api.obtenerOrdenes, {
      method: "GET",
      headers: getHeaders(),
    })
      .then(checkStatus)
      .then((res) => res.json())
      .catch((e) => {
        e.body?.error?.message
          ? (error = e.body.error.message)
          : (error = e.response.data.msg);
      });
  }

  if (type === "obtenerOrden") {
    req = await fetch(`${api.obtenerOrden}${queryParams.id}`)
      .then(checkStatus)
      .then((res) => res.json())
      .catch((e) => {
        e.body?.error?.message
          ? (error = e.body.error.message)
          : (error = e.response.data.msg);
      });
  }

  if (type === "actualizarOrden") {
    req = await fetch(`${api.actualizarOrden}${queryParams.id}`, {
      method: "PUT",
      headers: getHeaders(),
      body,
    })
      .then(checkStatus)
      .then((res) => res.json())
      .catch((e) => {
        e.body?.error?.message
          ? (error = e.body.error.message)
          : (error = e.response.data.msg);
      });
  }

  if (type === "eliminarOrden") {
    req = await fetch(`${api.eliminarOrden}${queryParams.id}`, {
      method: "DELETE",
      headers: getHeaders(),
    })
      .then(checkStatus)
      .then((res) => res.json())
      .catch((e) => {
        e.body?.error?.message
          ? (error = e.body.error.message)
          : (error = e.response.data.msg);
      });
  }

  if (type === "agregarVariacion") {
    console.log(queryParams);
    console.log(getHeaders("variation"));
    req = await axios
      .post(`${api.agregarVariacion}${queryParams.get("id")}`, queryParams, {
        headers: getHeaders("variation"),
      })
      .then((res) => {
        console.log(res.status);
      })
      .then(checkStatus)
      .then((res) => res.json())
      .catch((e) => {
        console.log("error en api", e.response);
        if (e.body?.error?.message) error = e.body.error.message;
        else if (e.response?.data?.msg) error = e.response?.data?.msg;
        else if (e.response?.data?.error.message)
          error = e.response.data.error.message;
      });
  }

  if (type === "actualizarVariacion") {
    req = await axios
      .post(`${api.agregarVariacion}${queryParams.get("id")}`, queryParams, {
        headers: getHeaders("variation"),
      })
      .then(checkStatus)
      .then((res) => res.json())
      .catch((e) => {
        e.body?.error?.message
          ? (error = e.body.error.message)
          : (error = e.response.data.msg);
      });
  }

  if (type === "eliminarVariacion") {
    req = await fetch(`${api.eliminarVariacion}${queryParams.id}`, {
      method: "DELETE",
      headers: getHeaders(),
    })
      .then(checkStatus)
      .then((res) => res.json())
      .catch((e) => {
        console.log(e.body.error.message);
        e.body?.error?.message
          ? (error = e.body.error.message)
          : (error = e.response.data.msg);
      });
  }

  if (error) return { req, error };
  else return req;
};

export default helperRequest;
