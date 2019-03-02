import ReactDOM from "react-dom";
import "./portal.css";

export default function Portal({ children }) {
  return ReactDOM.createPortal(children, document.getElementById("portal"));
}
