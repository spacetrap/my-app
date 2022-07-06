import Link from "../Shared/Link";
import Image from "../Shared/Image";

import logo from "../../logo.svg"; 
import './styles.css';

const Header = () => (
  <header className="App-header">
    <Image
      src={logo}
      alt="logo"
    />
    <h3 className="App-header-text">our users</h3>
  </header>
)

export default Header;