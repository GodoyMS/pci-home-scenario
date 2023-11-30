import NeoGrid from "../../components/Grid/Grid";
const Home = (): JSX.Element => {
  return (
    <div>
      
      <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
        <NeoGrid />
      </div>
    </div>
  );
};

export default Home;
