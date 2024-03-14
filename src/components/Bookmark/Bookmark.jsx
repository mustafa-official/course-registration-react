import PropTypes from "prop-types";

const Bookmark = ({ title }) => {
  const { name } = title;
  return (
    
    <ol className="">
      <li className="text-center">{name}</li>
    </ol>
  );
};

Bookmark.propTypes = {
  Bookmark: PropTypes.func,
  title: PropTypes.object,
};

export default Bookmark;
