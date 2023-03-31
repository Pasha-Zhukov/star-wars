import fourHundredFour from "../../images/fourHundredFour.png";
import { Link } from "react-router-dom";

import "./FourHundredFour.scss";

export function FourHundredFour() {
  return (
    <div className="container-404">
      <img className="img-404" src={fourHundredFour} alt="404" />
      <Link to="/star-wars">
        <div>
          <button className="button-404">Return</button>
        </div>
      </Link>
    </div>
  );
}
