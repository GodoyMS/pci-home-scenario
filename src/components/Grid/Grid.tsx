import { AgGridReact } from "ag-grid-react";
import {
  ColDef,
  ITextFilterParams,
  ValueFormatterParams,
} from "ag-grid-community";
import data from "../../near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { INeoGridData } from "./Gridinterfaces";
import { format } from "date-fns";


var designationFiterParams: ITextFilterParams = {
  filterOptions: [
    "contains",
    "notContains",
    "equals",
    "endsWith",
    "empty",
    "startsWith",
    "notContains",
  ],
  debounceMs: 200,
  maxNumConditions: 1,
};

function dateFormatter(params: ValueFormatterParams) {
  return format(new Date(params.value), "dd MMMM, yyyy - hh:mm a");
}

function potentiallyHazardousFormatter(params: ValueFormatterParams) {
  return params.value === "Y"
    ? "Yes"
    : params.value === "N"
    ? "No"
    : params.value;
}

const columnDefs: ColDef[] = [
  {
    field: "designation",
    headerName: "Designation",
    sortable: true,
    filter: "agTextColumnFilter",

    filterParams: designationFiterParams,
  },
  {
    field: "discovery_date",
    headerName: "Discovery Date",
    minWidth: 250,
    filter: false,
    valueFormatter: dateFormatter,
  },
  {
    field: "h_mag",
    headerName: "H (mag)",
    filter: "agNumberColumnFilter",
  },
  { field: "moid_au", headerName: "MOID (au)", filter: "agNumberColumnFilter" },
  { field: "q_au_1", headerName: "q (au)", filter: "agNumberColumnFilter" },
  { field: "q_au_2", headerName: "Q (au)", filter: "agNumberColumnFilter" },
  {
    field: "period_yr",
    headerName: "Period (yr)",
    filter: "agNumberColumnFilter",
  },
  {
    field: "i_deg",
    headerName: "Inclination (deg)",
    filter: "agNumberColumnFilter",
  },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
    filter: "agTextColumnFilter",
    valueFormatter: potentiallyHazardousFormatter,
  },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
    enableRowGroup: true,
    filter: "agTextColumnFilter",
  },
];

const NeoGrid = (): JSX.Element => {
  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
      <AgGridReact<INeoGridData>
        rowData={data}
        columnDefs={columnDefs}
        rowGroupPanelShow={"always"}
      
      />
    </div>
  );
};

export default NeoGrid;
