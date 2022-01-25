import React from "react";
import { Button } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div>
      <Button onClick={signInWithGoogle}>Login with Google</Button>
    </div>
  );
};

export default Register;
