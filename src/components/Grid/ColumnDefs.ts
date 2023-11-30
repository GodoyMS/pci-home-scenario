import { ColDef } from "ag-grid-community";
import {
  dateFormatter,
  potentiallyHazardousFormatter,
} from "../../helpers/formatterHelpers";
import { designationFiterParams } from "./FilterParams";

export const columnDefs: ColDef[] = [
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
