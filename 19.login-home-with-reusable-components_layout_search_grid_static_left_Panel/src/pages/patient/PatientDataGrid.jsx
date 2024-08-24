import { DataGrid } from "../../components/DataGrid";

function PatiendDataGrid() {
  const rowData = [
    {patientNameEnglish: "Vaibhav Zodge", patientGender: "M", recentCaseNo: "1234"},
    {patientNameEnglish: "Aarav Patel", patientGender: "M", recentCaseNo: "5678"},
    {patientNameEnglish: "Maya Rao", patientGender: "F", recentCaseNo: "9101"},
    {patientNameEnglish: "Riya Shah", patientGender: "F", recentCaseNo: "1121"},
    {patientNameEnglish: "Karan Mehta", patientGender: "M", recentCaseNo: "3141"},
    {patientNameEnglish: "Anjali Singh", patientGender: "F", recentCaseNo: "5161"},
    {patientNameEnglish: "Govinda Deshmukh", patientGender: "M", recentCaseNo: "7181"},
    {patientNameEnglish: "Saurabh Kulkarni", patientGender: "M", recentCaseNo: "9201"}
];


  const columnDefs = [
    {
      headerName: "Patient",
      field: "patientNameEnglish",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Gender",
      field: "patientGender",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Case Number",
      field: "recentCaseNo",
      sortable: true,
      filter: true,
    },
  ];

  // Column definition
  const defaultColDef = {
    flex: 1,
    minWidth: 150,
    resizable: false,
  };

  return (
    <>
      <DataGrid
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColumnDefs={defaultColDef}
      />
    </>
  );
}

export default PatiendDataGrid;
