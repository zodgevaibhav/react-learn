import { useState, useEffect } from "react";
import { fetchWithToken } from "../common/RestUtil";
import { DataGrid } from "../components/DataGrid";

function PatientListGrid() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const fetchedRowData = await fetchWithToken(
          "http://localhost:8082/patient/api/v1/getPatients?fromDate=2023-08-23&toDate=2024-08-22", {method:"GET", contentType:"application/json"}
        );
        setRowData(fetchedRowData); // Assuming `fetchedRowData.data` is the array of rows
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

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

export default PatientListGrid;
