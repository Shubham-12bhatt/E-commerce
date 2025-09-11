import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="group cursor-pointer">
      <Link to={`/product/${props.category}/${props.id}`}>
      <div className="relative overflow-hidden rounded-lg mb-3">
        
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-[320px] object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
        />
       
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        </Link>
      <h3 className="text-gray-800 font-medium text-lg mb-2 transition-colors duration-200">
        {props.name}
      </h3>
      <div className="flex items-center gap-3">
        <span className="text-red-500 font-semibold text-lg">
          ${props.new_price}
        </span>
        <span className="text-gray-500 line-through text-sm">
          ${props.old_price}
        </span>
      </div>
    </div>
  );
};

export default Item;
