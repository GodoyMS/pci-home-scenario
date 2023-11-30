import NeoGrid from "../../components/Grid/Grid";
import "./Home.css";
const Home = (): JSX.Element => {
  return (
    <div>
      <div>
        <h1 className=" title">Near-Earth Object Overview</h1>
      </div>
      <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
        <NeoGrid />
      </div>
    </div>
  );
};

export default Home;
