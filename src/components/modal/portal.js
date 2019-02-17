import ReactDOM from "react-dom";

export default function Portal({ children }) {
  ReactDOM.createPortal(children), document.getElementById("portal");
}
