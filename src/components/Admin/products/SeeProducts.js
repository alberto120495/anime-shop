import { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase-config";
import Product from "./Product";

function SeeProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("productos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);
  return (
    <div className="flex flex-wrap  justify-around h-full m-3 space-x-3  ">
      {products.map((product) => (
        <Product
          key={product.id}
          producto={product.data.producto}
          descripcion={product.data.descripcion}
          cantidad={product.data.cantidad}
          precio={product.data.precio}
          categoria={product.data.categoria}
          imagen={product.data.imagen}
          timestamp={product.data.timestamp}
        />
      ))}
    </div>
  );
}

export default SeeProducts;
