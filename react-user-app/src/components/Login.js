import React from "react";
import UserService from "../services/UserService";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
  return (
    <center>
      <div>
        <p style={{ paddingTop: "20%" }} className="lead">
          Please authenticate yourself!
        </p>
        <p>
          <BottomNavigationAction
            label="Buchungen"
            icon={
              <LoginIcon
                fontSize="large"
                onClick={() => UserService.doLogin()}
              />
            }
          />
        </p>
      </div>
    </center>
  );
};

export default Login;