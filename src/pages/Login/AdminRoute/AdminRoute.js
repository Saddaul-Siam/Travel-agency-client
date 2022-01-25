import { Redirect, Route } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { CircularProgress } from '@mui/material';
import { Box } from "@mui/system";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();

  // let { url } = useRouteMatch();
  if (isLoading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>
  }
  else if (!admin) {
    return <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              // pathname: `${url}`,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default AdminRoute;