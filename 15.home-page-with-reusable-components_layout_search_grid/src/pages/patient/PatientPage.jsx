import { LeftRightSplitLayout } from "../../layouts/LeftRightSplitLayout";
import { TopBottomSplitLayout } from "../../layouts/TopBottomSplitLayout";
import PatiendDataGrid from "./PatientDataGrid";
import { LeftPanelPage } from "../LeftPanelPage";
import SearchPatientPage from "./SearchPatientPage";

const getPatientScreenBody = () => {
  return (
    <>
      <TopBottomSplitLayout
        topContent={<SearchPatientPage />}
        bottomContent={<PatiendDataGrid />}
      />
    </>
  );
};

function PatientPage() {
  return (
    <>
      <LeftRightSplitLayout left={LeftPanelPage} right={getPatientScreenBody} />
    </>
  );
}

export default PatientPage;
