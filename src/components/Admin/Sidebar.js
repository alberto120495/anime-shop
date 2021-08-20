import { HomeIcon, PlusCircleIcon, EyeIcon } from "@heroicons/react/outline";
import { useState } from "react";
import AddProduct from "./AddProduct";
import SeeProducts from "./SeeProducts";

function Sidebar() {
  const [addProduct, setAddProduct] = useState(false);
  const [seeProducts, setSeeProducts] = useState(false);

  const productsScreen = () => {
    setAddProduct(false);
    setSeeProducts(true);
  };
  const addProductScreen = () => {
    setSeeProducts(false);
    setAddProduct(true);
  };
  return (
    <div className="flex min-h-screen bg-gray-400">
      <div className="bg-gray-700 w-48 p-4">
        <ul className="space-y-5">
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-900 transition ease-in rounded-md cursor-pointer">
            <HomeIcon className="h-5 w-5 text-white" />
            <p className="text-white">DashBoard</p>
          </li>
          <li
            className="flex items-center space-x-2 p-2 hover:bg-gray-900 transition ease-in  rounded-md cursor-pointer"
            onClick={() => setAddProduct(addProductScreen)}
          >
            <PlusCircleIcon className="h-5 w-5 text-white" />
            <p className="text-white">Agregar productos</p>
          </li>
          <li
            className="flex items-center space-x-2 p-2 hover:bg-gray-900 transition ease-in  rounded-md cursor-pointer"
            onClick={() => {
              setSeeProducts(productsScreen);
            }}
          >
            <EyeIcon className="h-5 w-5 text-white" />
            <p className="text-white">Ver productos</p>
          </li>
        </ul>
      </div>
      {addProduct && <AddProduct />}
      {seeProducts && <SeeProducts />}
    </div>
  );
}

export default Sidebar;
