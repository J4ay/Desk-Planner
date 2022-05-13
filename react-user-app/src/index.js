import ReactDOM from "react-dom";
import Welcome from "./components/Welcome";
import HttpService from "./services/HttpService";
import UserService from "./services/UserService";

const renderApp = () => ReactDOM.render(<Welcome/>, document.getElementById("app"));

UserService.initKeycloak(renderApp);
HttpService.configure();