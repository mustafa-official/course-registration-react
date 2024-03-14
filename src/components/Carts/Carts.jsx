import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Carts = ({ saveToBookmark, totalHours }) => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  return (
    <div className="w-full lg:w-[80%]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5">
        {carts.map((cart) => (
          <Cart
            allCart={cart}
            key={cart.id}
            saveToBookmark={saveToBookmark}
            totalHours={totalHours}
            
          ></Cart>
        ))}
      </div>
    </div>
  );
};

Carts.propTypes = {
  Carts: PropTypes.func,
  saveToBookmark: PropTypes.func,
  totalHours: PropTypes.func,
};

export default Carts;
