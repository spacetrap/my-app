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
  </header>
)

export default Header;