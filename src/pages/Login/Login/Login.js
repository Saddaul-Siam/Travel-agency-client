import { Button } from "@mui/material";
import React from "react";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div>
      <Button onClick={signInWithGoogle}>Login with Google</Button>
    </div>
  );
};

export default Login;
