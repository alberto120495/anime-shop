function Product({
  producto,
  descripcion,
  cantidad,
  precio,
  imagen,
  categoria,
  timestamp,
}) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div className="bg-white shadow-lg rounded-md  mb-5 w-52 cursor-pointer ">
      <div className="p-4  ">
        <div className="flex justify-center ">
          <img src={imagen} alt="" className="w-36 rounded-md " />
        </div>
        <div className="text-center h-32">
          <h2 className="uppercase font-semibold tracking-widest ">
            {producto}
          </h2>
          <p className="text-sm ">{truncate(descripcion, 40)}</p>
          <p className="font-semibold">
            Stock: <span className="font-normal"> {cantidad} </span>
          </p>
          <p className="text-xs font-medium">{categoria}</p>
          <p className="text-space text-xl font-semibold"> ${precio}</p>
        </div>
      </div>

      <div className="bg-space flex-grow  bottom-0  rounded-b-md  text-center  p-2 hover:bg-yellow-500 cursor-pointer ease-in duration-150">
        <p className="text-white tracking-widest text-sm">ADD TO CART</p>
      </div>
    </div>
  );
}

export default Product;
