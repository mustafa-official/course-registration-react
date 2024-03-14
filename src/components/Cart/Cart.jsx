import PropTypes from "prop-types";
import { BsBookHalf } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
const Cart = ({ allCart, saveToBookmark, totalHours }) => {
  const { name, description, photo, price, credit } = allCart;
  return (
    <div className="space-y-4">
      <img className="w-full" src={photo} alt="" />
      <h2 className="text-xl font-bold">{name}</h2>
      <h2>{description}</h2>
      <div className="flex items-center gap-3">
        <p className="flex items-center gap-1">
          <FiDollarSign className="text-xl"></FiDollarSign> Price: {price}
        </p>
        <p className="flex items-center gap-1">
          <BsBookHalf className="text-xl"></BsBookHalf> Credit: {credit}
        </p>
      </div>
      <button
        onClick={() => {
          saveToBookmark(allCart);
          totalHours(credit, price);
        }}
        className="px-5 py-1 rounded-md w-full bg-purple-600 text-white"
      >
        Select
      </button>
    </div>
  );
};

Cart.propTypes = {
  Cart: PropTypes.func,
  allCart: PropTypes.object,
  saveToBookmark: PropTypes.func,
  totalHours: PropTypes.func,
};

export default Cart;
