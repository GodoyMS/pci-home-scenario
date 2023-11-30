import { ValueFormatterParams } from "ag-grid-community";
import { format } from "date-fns";

export function dateFormatter(params: ValueFormatterParams) {
    return format(new Date(params.value), "dd MMMM, yyyy - hh:mm a");
  }
  



export function potentiallyHazardousFormatter(params: ValueFormatterParams) {
    return params.value === "Y"
      ? "Yes"
      : params.value === "N"
      ? "No"
      : params.value;
  }