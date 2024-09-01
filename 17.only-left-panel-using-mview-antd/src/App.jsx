import  LeftPanel  from "./components/LeftPanel";
import logoSrc from "./assets/appLogo.png"
import logoSmallSrc from "./assets/appLogo_small.png"
import {LeftPanelAntD} from "./components/LeftPanelAntD";

import { Home as HomeIcon, Info as InfoIcon, Settings as SettingsIcon } from '@mui/icons-material';

const items = [
  { icon: <HomeIcon />, route: "/home", text: 'Home' },
  { icon: <InfoIcon />, route: "/about",text: 'About' },
  { icon: <SettingsIcon />, route: "/contact",text: 'Settings' },
];


function App() {
  return (
    <>
      {/* <LeftPanel items={items} logoSrc={logoSrc}/> */}
      <LeftPanel items={items} logoSrc={logoSrc} logoSrcSmall={logoSmallSrc}/> 
    </>
  );
}
export default App;
