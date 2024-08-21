import { HomePageWithSideNav } from "../components/HomePageWithSideNav";

export function HomePage() {

function LeftPanel(){
  return <h1>Left Panel</h1>
}

function RightPanel(){
  return <h1>Right Panel</h1>
}

  return (
    <>
      <HomePageWithSideNav left={LeftPanel} right={RightPanel} />
    </>
  );
}
