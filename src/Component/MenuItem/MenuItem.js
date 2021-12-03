import "./MenuItem.scss";
import { useNavigate } from "react-router-dom";

function MenuItem({ title, imageUrl, size, linkUrl }) {
  const navigate = useNavigate();

  const handleOnClick = (linkUrl) => {
    navigate(`${linkUrl}`);
  };

  return (
    <div
      className={` menu-item ${size} `}
      onClick={() => handleOnClick(linkUrl)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
