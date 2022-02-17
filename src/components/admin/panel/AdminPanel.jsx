import React, { useEffect } from "react";
import helperRequest from "../../../services/api";
import "./admin-panel.scss";
import { Button, Form } from "react-bootstrap";

export default function AdminPanel({ onTokenExpired }) {
  const handleTokenExpired = () => {
    onTokenExpired();
  };

  const checkError = (response) => {
    console.log(response);
    if (response.error) {
      if (
        response.error === "No se envio un token para validar" ||
        response.error === "jwt expired" ||
        response.error.body?.error?.message == "jwt expired" ||
        response.error?.body?.msg === "No se envio un token para validar"
      ) {
        console.log("Llego aca");
        handleTokenExpired();
      }
    }
  };

  const deleteProducto = async (e) => {
    e.preventDefault();
    const idProducto = e.target.idProducto.value;
    const response = await helperRequest(
      {
        id: idProducto,
      },
      "eliminarProducto"
    );
    checkError(response);
  };

  const deleteVariacion = async (e) => {
    e.preventDefault();
    const idVariacion = e.target.idVariacion.value;
    const response = await helperRequest(
      {
        id: idVariacion,
      },
      "eliminarVariacion"
    );
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
      // if(response.msg === "Producto agregado"){

      // }
    } catch (error) {
      console.log("error", error);
    }
  };

  // const getBase64 = (file) => {
  //   console.log(file);
  //   return new Promise((resolve) => {
  //     let fileInfo;
  //     let baseURL = "";
  //     let reader = new FileReader();

  //     reader.readAsDataURL(file);

  //     reader.onload = () => {
  //       baseURL = reader.result;
  //       resolve(baseURL);
  //     };
  //     console.log(fileInfo);
  //   });
  // };

  const submitVariacion = async (e) => {
    e.preventDefault();

    // const imgBase64 = await getBase64(e.target.image.files[0]);
    const data = new FormData();
    data.append("file", e.target.image.files[0]);
    data.append("nombre", e.target.nombre.value);
    data.append("precio", e.target.precio.value);
    data.append("stock", e.target.stock.value);
    data.append("id", e.target.id.value);

    const response = await helperRequest(data, "agregarVariacion");
    console.log("response en Admin", response);
    checkError(response);
  };

  const handleGetProducs = () => {
    console.log("entro a get");
    helperRequest({}, "obtenerProductos").then((res) => {
      console.log(res);
    });
  };

  const handleGetOrdenes = () => {
    helperRequest({}, "obtenerOrdenes").then((res) => {
      console.log(res);
    });
  };

  const displayToggle = (e) => {
    e.preventDefault();
    const divs = document.querySelectorAll(".data > div");
    const formtype = e.target.id;
    divs.forEach((div) => {
      if (div.className.includes(formtype)) {
        div.classList.remove("hidden");
      } else {
        if (!div.className.includes("hidden")) {
          div.classList.add("hidden");
        }
      }
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
      className="adminPanel"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Panel de admintración</h1>
      <br />

      <div className="Buttons">
        <Button
          variant="outline-primary"
          onClick={(e) => {
            displayToggle(e);
            handleGetProducs();
          }}
          id="productos"
        >
          Productos
        </Button>
        <Button
          variant="outline-primary"
          onClick={displayToggle}
          id="agregarProducto"
        >
          Agregar productos
        </Button>
        <Button
          variant="outline-primary"
          onClick={displayToggle}
          id="agregarVariacion"
        >
          Agregar variaciones
        </Button>
        <Button
          variant="outline-primary"
          onClick={displayToggle}
          id="verOrdenes"
        >
          Ver Ordenes
        </Button>
        <Button
          variant="outline-primary"
          onClick={displayToggle}
          id="actualizarOrdenes"
        >
          Actualizar ordenes
        </Button>
      </div>

      <div className="data">
        <div className="productos hidden"></div>

        <div className="agregarProducto hidden">
          <form onSubmit={submitProduct}>
            <h3 className="mb-4">Agregar Producto</h3>
            <div className="form-group">
              <label className="mb-1">Nombre</label>
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
            <Button type="sumbit">Enviar</Button>
          </form>
        </div>

        <div className="agregarVariacion hidden">
          <form onSubmit={submitVariacion}>
            <h3 className="mb-4">Agregar Variacion</h3>
            <div className="form-group">
              <label className="mb-1">Id Producto</label>
              <input type="text" className="form-control" name="id" />
            </div>
            <div className="form-group mt-3 mb-4">
              <label className="mb-1">Nombre</label>
              <input type="text" className="form-control" name="nombre" />
            </div>
            <div className="form-group mt-3 mb-4">
              <label className="mb-1">Precio</label>
              <input name="precio" className="form-control" />
            </div>
            <div className="form-group mt-3 mb-4">
              <label className="mb-1">Stock</label>
              <input name="stock" className="form-control" />
            </div>
            <div className="form-group mt-3 mb-4">
              <label className="mb-1">Imagen</label>
              <input type="file" name="image" className="form-control" />
            </div>
            <Button type="sumbite">Enviar</Button>
          </form>
        </div>

        <form action="" onSubmit={deleteProducto}>
          <input type="text" name="idProducto" />
          <Button type="submit">Delete Producto</Button>
        </form>

        <form action="" onSubmit={deleteVariacion}>
          <input type="text" name="idVariacion" />
          <Button type="submit">Delete Variacion</Button>
        </form>
      </div>
    </div>
  );
}
