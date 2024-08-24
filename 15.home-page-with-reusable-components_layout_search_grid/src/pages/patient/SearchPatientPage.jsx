import TextBox from "../../components/TextBox";
import Button from "../../components/Button";
import "./SearchPatientPage.css";

function SearchPatientPage() {
  return (
    <>
      <div className="form-container ">
        <div className="input-group">
          <TextBox placeholder="Patient Name" />
          <TextBox placeholder="Gender" />
          <TextBox placeholder="Recent Case" />
          <Button>Search</Button>
        </div>
      </div>
    </>
  );
}

export default SearchPatientPage;
