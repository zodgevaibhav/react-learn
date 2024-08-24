import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css'; // Import the grid's CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Import the grid's theme
//import 'ag-grid-community/styles/ag-theme-alpine.css'; 

// eslint-disable-next-line react/prop-types
export const DataGrid = ({columnDefs, rowData, defaultColumnDefs,handleCellClicked }) =>{

  return (
    <div
      className="ag-theme-quartz"
      style={{
        height: '500px',
        width: '100%',
      }}
    >

    <AgGridReact
      columnDefs={columnDefs}
      rowData={rowData}
      pagination={true}
      paginationPageSize={100}
      defaultColDef={defaultColumnDefs}
      onRowClicked={handleCellClicked}
    ></AgGridReact>
    </div>
  );
}
