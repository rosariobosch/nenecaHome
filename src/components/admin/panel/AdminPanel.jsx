import React, { useEffect } from "react";
import helperRequest from "../../../services/api";

export default function AdminPanel({ onTokenExpired }) {
  const handleTokenExpired = () => {
    onTokenExpired();
  };

  const checkError = (response) => {
    if (response.error) {
      if (
        response.error.body.msg === "No se envio un token para validar" ||
        response.error.body.error.message == "jwt expired"
      )
        handleTokenExpired();
    }
  };

  const deleteTest = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const idProducto = e.target.idProducto.value;
    const response = await helperRequest(
      {
        id: idProducto,
      },
      "eliminarProducto"
    );
    console.log(response);
    checkError(response);
  };

  const submitProduct = async (e) => {
    e.preventDefault();

    const query = {
      nombre: e.target.nombre.value,
      descripcion: e.target.descripcion.value,
      categoria: e.target.categoria.value,
      tags: e.target.tags.value,
    };
    try {
      const response = await helperRequest(query, "agregarProducto");
      checkError(response);
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleGetProducs = () => {
    helperRequest({}, "obtenerProductos").then((res) => {
      console.log(res);
    });
  };

  //   ACTIALIZAR ORDEN
  //   {
  //     estado: queryParams.estado,
  //     nombreComprador: queryParams.nombreComprador,
  //     direccionEnvio: queryParams.direccionEnvio,
  //     emailComprador: queryParams.emailComprador,
  //     pedidos: queryParams.pedidos,
  //   },

  //   AGREGAR VARIACION
  //   body: {
  //     nombre: queryParams.nombre,
  //     precio: queryParams.precio,
  //     image: queryParams.image,
  //     stock: queryParams.stock,
  //   },

  //   ACTUALIZAR VARIACION
  //   body: {
  //     nombre: queryParams.nombre,
  //     precio: queryParams.precio,
  //     image: queryParams.image,
  //     stock: queryParams.stock,
  //   },

  //   ACTUALIZAR PRODUCTO
  //   body: {
  //     nombre: queryParams.nombre,
  //     descripcion: queryParams.descripcion,
  //     categoria: queryParams.categoria,
  //     tags: queryParams.tags,
  //   },

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Panel de admintración</h1>
      <br />

      <form onSubmit={submitProduct}>
        <h3>Agregar Producto</h3>
        <div className="form-group">
          <label className="mb-1">nombre</label>
          <input type="text" className="form-control" name="nombre" />
        </div>
        <div className="form-group mt-3 mb-4">
          <label className="mb-1">Descripcion</label>
          <input name="descripcion" className="form-control" />
        </div>
        <div className="form-group mt-3 mb-4">
          <label className="mb-1">Categoria</label>
          <input name="categoria" className="form-control" />
        </div>
        <div className="form-group mt-3 mb-4">
          <label className="mb-1">Tags</label>
          <input name="tags" className="form-control" />
        </div>
        <button type="sumbite">Enviar</button>
      </form>

      <button onClick={handleGetProducs}>Get Productos</button>
      <form action="" onSubmit={deleteTest}>
        <input type="text" name="idProducto" />
        <button type="submit">Delete prueba</button>
      </form>
    </div>
  );
}
