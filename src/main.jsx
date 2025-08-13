import ReactDOM from "react-dom/client";
import "./index.css";
import "./app.scss";
import styles from "./app.module.css";
// import foto from "public/foto.jpg";
import foto from "../public/foto.jpg";

const Main = () => {
  return (
    <div>
      <h1 className="title1">123</h1>
      <h1 className="title2">123</h1>
      <h1 className={styles.title3}>123</h1>
      <img style={{ width: "200px", height: "200px" }} src={foto} alt="foto" />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
