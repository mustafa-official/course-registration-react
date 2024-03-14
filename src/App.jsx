import { useState } from "react";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Carts from "./components/Carts/Carts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const totalCredit = 15;
function App() {
  const [bookmark, setBookmark] = useState([]);
  const [hours, setHours] = useState(0);
  const [prices, setPrices] = useState(0);
  
  const saveToBookmark = (cartInfo) => {
    

    const duplicateName = bookmark.find((b) => b.id === cartInfo.id);
    if (!duplicateName) {
      const newBookmark = [...bookmark, cartInfo];
      setBookmark(newBookmark);
      toast("Success");
    } else {
      toast.warn("Already selected");
    }
    if (hours + cartInfo.credit > totalCredit) {
      return alert`dkdkk`;
    }
  };

  const totalHours = (getHours, getPrice) => {
    setHours(hours + getHours);
    setPrices(prices + getPrice);
  };
  // console.log(hours);
  return (
    <>
      <div className="container mx-auto px-4 box-border">
        <h2 className="text-center text-3xl font-bold mt-5">
          Course Registration
        </h2>
        <div className="flex lg:flex-row flex-col">
          <Carts
            
            saveToBookmark={saveToBookmark}
            totalHours={totalHours}
          ></Carts>
          <Bookmarks
            bookmark={bookmark}
            prices={prices}
            hours={hours}
          ></Bookmarks>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
