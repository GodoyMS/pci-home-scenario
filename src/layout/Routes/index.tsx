import {useRoutes } from "react-router-dom";
import Home from "../../pages/Home/Home";

const Routes :React.FC = () => {
    const routes = useRoutes([
        { path: '/', element: <Home /> }
        
    ]);

    return routes;
};

export default Routes;