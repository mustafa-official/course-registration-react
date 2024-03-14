import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmark, hours, prices }) => {
 const totalCredit = 15 
  return (
    <div className="w-full lg:w-[20%] space-y-3 p-3">
      <h3 className="text-center mt-4 pb-2 font-bold text-purple-600">
        Credit Hour Remaining {totalCredit - hours} hr
      </h3>
      <h3 className="text-center font-bold text-xl">Course Name:</h3>
      <hr />
      {bookmark.map((info) => (
        <Bookmark key={info.id}  bookmark={bookmark} title={info}></Bookmark>
      ))}
      <hr />
      
      <h3 className="text-center font-bold">Total Credit Hour: {hours}</h3>
      <hr />
      <h3 className="text-center font-bold">Total Price : {prices} USD</h3>
    </div>
  );
};

Bookmarks.propTypes = {
  Bookmarks: PropTypes.func,
  bookmark: PropTypes.array,
  hours: PropTypes.number,
  prices: PropTypes.number,
};

export default Bookmarks;
