import { useCallback, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import Button from "../Button/Button";
import { gridOptions } from "./GridOptions";
import { INeoGridData } from "./Gridinterfaces";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import "./Grid.css";

const NeoGrid = (): JSX.Element => {
  const gridRef = useRef<AgGridReact<INeoGridData>>(null);

  const onClick = useCallback(() => {
    gridRef.current?.api.setFilterModel(null);
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
      <div className=" header-grid">
        <h1 className=" title">Near-Earth Object Overview</h1>
        <Button
          label="Reset filters and sorters"
          handleClick={() => onClick()}
          disabled={false}
        />
      </div>
      <AgGridReact<INeoGridData> ref={gridRef} gridOptions={gridOptions} />
    </div>
  );
};

export default NeoGrid;
