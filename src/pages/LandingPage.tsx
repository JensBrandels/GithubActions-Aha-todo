import "./LandingPage.css";
import AhaLogo from "../assets/Aha!.svg";
import SmileyLogo from "../assets/char.png";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/todos");
  };

  return (
    <>
      <div className="mainContainer" onClick={() => handleClick()}>
        <div className="boxsize"></div>
        <div className="boxsize AhaBox">
          <img src={AhaLogo} alt="" />
          <p>A Todo App</p>
        </div>
        <div className="boxsize smileyBox">
          <img src={SmileyLogo} alt="" />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
