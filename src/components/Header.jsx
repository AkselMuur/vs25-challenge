import { useContext } from "react";
import { CartContext } from "../store/CartContext.jsx";
import Button from './UI/Button.jsx';
import logo from "../assets/logo.jpg";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.items.length;

  return (
    <header id="main-header">
      <div id="title">
        <img alt="Logo" src={logo} />
        <h1>React Food Order App</h1>
      </div>
      <nav>
        <Button textOnly={true}>Cart ({totalItems})</Button>
      </nav>
    </header>
  );
};

export default Header;

