import UserService from "../services/UserService";

const Anonymous = ({ children }) => (!UserService.isLoggedIn()) ? children : null;
export default Anonymous