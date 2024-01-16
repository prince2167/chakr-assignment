import { products } from "@/constants/data";
import ProductCard from "./ProductCard";

const CartList = () => {
  return (
    <div>
      <div className="relative mt-4 border border-gray-200">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            size={product.size}
            seller={product.seller}
            mrp={product.mrp}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <div className=" w-[330px] sm:w-[600px] lg:w-[900px] h-[100px] sticky bottom-0 bg-white  flex items-end flex-col justify-center border border-gray-200 border-y-0 shadow-2xl ">
        <button className="text-white bg-[#fa651b] w-[230px] h-[50px] mr-10 rounded-sm font-[600]">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default CartList;
