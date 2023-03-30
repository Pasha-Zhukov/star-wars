import BannerComplete from "../../images/BannerComplete.png";
import { Link } from "react-router-dom";

import "./BodyHome.scss";

export const BodyHome = () => {
  return (
    <div className="container-body">
      <div className="block-text">
        <h1 className="h1">
          <span>Find</span> all your favorite character
        </h1>
        <p>
          You can find out all the information about your favorite characters
        </p>
        <Link to="/Characters">
          <div className="button">
            <button>See more...</button>
          </div>
        </Link>
      </div>
      <div className="img">
        <img
          className="BannerComplete"
          src={BannerComplete}
          alt="BannerComplete"
        />
      </div>
    </div>
  );
};
