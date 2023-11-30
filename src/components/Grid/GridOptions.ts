import { GridOptions } from "ag-grid-community";
import { INeoGridData } from "./Gridinterfaces";
import { columnDefs } from "./ColumnDefs";
import data from "../../near-earth-asteroids.json";

export const gridOptions: GridOptions<INeoGridData> = {
    rowData: data,
    columnDefs: columnDefs,
    rowGroupPanelShow: "always",
    enableRangeSelection: true,
    copyHeadersToClipboard: true,
    sideBar: "filters",
    onGridReady: (params) => {
      params.api.getToolPanelInstance("filters")!.expandFilters();
    },
  };