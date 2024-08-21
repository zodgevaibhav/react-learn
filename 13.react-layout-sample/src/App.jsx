
import './App.css'
import { Layout } from "./Layout";

function App() {
  function LeftPanel() {
    return <h1>Left Panel</h1>;
  }
  
  function RightPanel() {
    return <h1>Right Panel</h1>;
  }

  return (
    <Layout left={LeftPanel} right={RightPanel} />
  );
}

export default App
