import { useEffect, useState } from "react";
import Product from "../admin/products/Product";
import { db } from "../../firebase/firebase-config";
import Header from "../header/Header";

function Home() {
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
    <div className="bg-black h-full">
      <Header />
      <div className="flex flex-wrap justify-evenly p-5  space-x-5">
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
    </div>
  );
}

export default Home;
