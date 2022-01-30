const api = {
  obtenerProductos: "http://backend-neneca.glitch.me/api/v1/producto/obtener",
  agregarProducto: "http://backend-neneca.glitch.me/api/v1/producto/agregar", // (POST)
  actualizarProducto:
    "http://backend-neneca.glitch.me/api/v1/producto/actualizar/", //:id (PUT)
  eliminarProducto: "http://backend-neneca.glitch.me/api/v1/producto/eliminar/", //:id (DELETE)
  obtenerOrdenes: "http://backend-neneca.glitch.me/api/v1/orden/obtener", // (GET)
  actualizarOrden: "http://backend-neneca.glitch.me/api/v1/orden/actualizar/", //:id (PUT)
  eliminarOrden: "http://backend-neneca.glitch.me/api/v1/orden/eliminar/", //:id (DELETE)
  agregarVariacion: "http://backend-neneca.glitch.me/api/v1/variacion/agregar/", //id producto padre (POST)
  actualizarVariacion:
    "http://backend-neneca.glitch.me/api/v1/variacion/actualizar/", //:id producto padre (PUT)
  eliminarVariacion:
    "http://backend-neneca.glitch.me/api/v1/variacion/eliminar/", //:id producto padre (DELETE)
};

const getHeaders = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "x-access-token": `${token}`,
    "Access-Control-Allow-Headers": "*",
  };
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
        error = e;
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
        error = e;
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
        error = e;
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
        error = e;
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
        error = e;
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
        error = e;
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
        error = e;
      });
  }

  if (type === "agregarVariacion") {
    req = await fetch(`${api.agregarVariacion}${queryParams.id}`, {
      method: "POST",
      headers: getHeaders(),
      body,
    })
      .then(checkStatus)
      .then((res) => res.json())
      .catch((e) => {
        error = e;
      });
  }

  if (type === "actualizarVariacion") {
    req = await fetch(`${api.actualizarVariacion}${queryParams.id}`, {
      method: "PUT",
      headers: getHeaders(),
      body,
    })
      .then(checkStatus)
      .then((res) => res.json())
      .catch((e) => {
        error = e;
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
        error = e;
      });
  }

  if (error) return { req, error };
  else return req;
};

export default helperRequest;
