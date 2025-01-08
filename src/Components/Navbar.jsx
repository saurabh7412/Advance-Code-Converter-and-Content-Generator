import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/code-convertor.jpeg";

export const Navbar = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/home')
  };
  return (
    <div style={{ display: "flex"}}>
      <div style={{ width: "10%" }} onClick={goToHomePage}>
        <img style={{ width: "40%", borderRadius:"50%", marginLeft:"60%", cursor:"pointer" }} src={logo} alt="code-convertor" />
      </div>
      <div className="linker" style={{ width:"80%"}}>
        <div>
          <Link to={"/home"}>Home</Link>
        </div>
        <div>
          <Link to={"/code-convertor"}>Code Convertor</Link>
        </div>
        <div>
          <Link to={"/content-generator"}>Content Generator</Link>
        </div>
      </div>
    </div>
  );
};
