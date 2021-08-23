import { useEffect, useState } from "react";
import useForm from "../../../hooks/useForm";
import firebase from "firebase";
import { db } from "../../../firebase/firebase-config";

function AddProduct() {
  const initialForm = {
    producto: "",
    descripcion: "",
    cantidad: 0,
    categoria: "",
    precio: 0,
  };

  const [categories, setCategories] = useState([]);
  const [formValues, handleInputChange, reset] = useForm(initialForm);
  const { producto, descripcion, cantidad, precio, categoria } = formValues;
  const [picture, setPicture] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("productos").add({
      producto: producto,
      descripcion: descripcion,
      cantidad: cantidad,
      precio: precio,
      categoria: categoria,
      imagen: picture,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    reset(initialForm);
    setPicture(null);
  };

  const handleCancel = () => {
    reset(initialForm);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref(`/imagenes/${file.name}`);
    storageRef.put(file).on(
      "state_changed",
      (snapshot) => {},
      (err) => {},
      async () => {
        const url = await storageRef.getDownloadURL();
        setPicture(url);
      }
    );
  };

  useEffect(() => {
    db.collection("categorias").onSnapshot((snapshot) =>
      setCategories(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      )
    );
  }, []);

  console.log(categoria);

  return (
    <div className=" w-1/2 ml-auto mr-auto mt-28  ">
      <div className="bg-white p-9 rounded-lg">
        <form className="flex flex-col space-y-3 " onSubmit={handleSubmit}>
          <h2 className="text-xl text-gray-600 text-center mb-2">
            Formulario de producto
          </h2>
          <label htmlFor="" className="text-sm uppercase">
            Nombre del producto
          </label>
          <input
            type="text"
            placeholder="Ingresa el producto..."
            className="outline-none border-b border-gray-200 p-1"
            name="producto"
            value={producto}
            onChange={handleInputChange}
          />

          <label htmlFor="" className="text-sm uppercase">
            Imagen del producto
          </label>
          <input
            type="file"
            className="outline-none border-b border-gray-200 p-1"
            onChange={handleUpload}
          />
          <img src={picture} alt="" width="100" className="rounded-md" />

          <label htmlFor="">Cantidad disponible</label>
          <input
            type="number"
            name="cantidad"
            className="outline-none border-b border-gray-200 p-1"
            placeholder="Piezas disponibles..."
            value={cantidad}
            onChange={handleInputChange}
          />
          <label htmlFor="">Precio del producto</label>
          <input
            type="number"
            name="precio"
            className="outline-none border-b border-gray-200 p-1"
            placeholder="Precio..."
            value={precio}
            onChange={handleInputChange}
          />

          <label htmlFor="">Categoria</label>
          <select
            name="categoria"
            className="outline-none border-b border-gray-200 p-1"
            value={categoria}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecciona categoria</option>
            {categories.map((category) => (
              <option key={category.id} value={category.data.categoryName}>
                {category.data.categoryName}
              </option>
            ))}
          </select>

          <label htmlFor="" className="text-sm uppercase">
            Descripcion del producto
          </label>
          <textarea
            name="descripcion"
            placeholder="Ingresa la descripcion"
            className="outline-none border-b border-gray-200 p-1"
            value={descripcion}
            onChange={handleInputChange}
          ></textarea>
          <div className="flex space-x-2">
            <button
              onClick={handleSubmit}
              type="submit"
              className="flex-1 text-white  bg-space py-2 shadow-md rounded-md hover:shadow-xl transition duration-150 outline-none"
            >
              Registrar
            </button>
            <button
              type="submit"
              className="flex-1 text-white  bg-red-500 py-2 shadow-md rounded-md hover:shadow-xl transition duration-150 outline-none"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
