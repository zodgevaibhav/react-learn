import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { LeftPanel } from "./components/LeftPanel";
import logoSrc from "./assets/appLogo.png"
import {LeftPanelAntD} from "./components/LeftPanelAntD";

import { HomeOutlined, InfoCircleOutlined, MailOutlined } from "@ant-design/icons";


const items = [
  { name: "Home", route: "/home", icon: HomeOutlined },
  { name: "About", route: "/about", icon: InfoCircleOutlined },
  { name: "Contact", route: "/contact", icon: MailOutlined },
];

function App() {
  return (
    <>
      {/* <LeftPanel items={items} logoSrc={logoSrc}/> */}
      <LeftPanel items={items} logoSrc={logoSrc}/> 
    </>
  );
}
export default App;
