import { ITextFilterParams } from "ag-grid-community";

export var designationFiterParams: ITextFilterParams = {
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
