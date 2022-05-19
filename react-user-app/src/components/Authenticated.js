import UserService from "../services/UserService";

const Authenticated = ({ children }) => (UserService.isLoggedIn()) ? children : null;
export default Authenticated