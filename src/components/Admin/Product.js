function Product({ producto, descripcion, cantidad, imagen, timestamp }) {
  return (
    <div>
      <h2>{producto}</h2>
      <p>{descripcion}</p>
      <p>{cantidad}</p>
      <img src={imagen} alt="" />
    </div>
  );
}

export default Product;
