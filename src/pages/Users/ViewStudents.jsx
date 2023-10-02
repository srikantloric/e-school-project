import React from "react";
import PageContainer from "../../components/Utils/PageContainer";
import Navbar from "../../components/Navbar/Navbar";
import LSPage from "../../components/Utils/LSPage";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Styles from "./ViewStudents.module.scss";
import {
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import { IconSquareRoundedCheck } from "@tabler/icons-react";

function ViewStudents() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <PageContainer>
      <Navbar />
      <LSPage>
        <Paper
          sx={{ padding: "5px 10px" }}
          className={Styles.viewStudentHeader}
        >
          <h4>View Student</h4>
          <FormControl variant="outlined" sx={{ m: 0,minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Class
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Class"
        
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Paper>
        <br />
        <Paper>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </Paper>
      </LSPage>
    </PageContainer>
  );
}

export default ViewStudents;
