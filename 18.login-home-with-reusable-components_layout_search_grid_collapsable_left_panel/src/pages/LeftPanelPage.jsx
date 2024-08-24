import {LeftPanel} from '../components/LeftPanel';
import logoSrc from "../assets/appLogo.png"
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const items = [
    { name: "Home", route: "/home", icon: HomeIcon },
    { name: "About", route: "/about", icon: InfoIcon },
    { name: "Contact", route: "/contact", icon: ContactMailIcon },
  ];

export function LeftPanelPage() {
    return (
        <>
        <LeftPanel items={items} logoSrc={logoSrc}/> 
        </>
    );
}