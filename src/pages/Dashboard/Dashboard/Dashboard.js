import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { Link, Outlet } from "react-router-dom";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import useAuth from "../../../Hooks/useAuth";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const drawerWidth = 240;

export default function Dashboard() {
  const { logOut, user, admin } = useAuth();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            TRAVEL AGENCY
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItem>
            </Link>
            {admin ? (
              ""
            ) : (
              <Box>
                <Link
                  to="/dashboard/addExperience"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <PostAddIcon />
                    </ListItemIcon>
                    <ListItemText>Add Experience</ListItemText>
                  </ListItem>
                </Link>
                <Link
                  to="/dashboard/myExperience"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <DepartureBoardIcon />
                    </ListItemIcon>
                    <ListItemText>My Experience</ListItemText>
                  </ListItem>
                </Link>
              </Box>
            )}
            {user.email && admin && (
              <Box>
                <Link
                  to="/dashboard/allBlogPosts"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <DynamicFeedIcon />
                    </ListItemIcon>
                    <ListItemText>All Blog Posts</ListItemText>
                  </ListItem>
                </Link>
                <Link
                  to="/dashboard/createBlogPost"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <PostAddIcon />
                    </ListItemIcon>
                    <ListItemText>Create Blog Posts</ListItemText>
                  </ListItem>
                </Link>
                <Link
                  to="/dashboard/makeAdmin"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <AddTaskIcon />
                    </ListItemIcon>
                    <ListItemText>Make Admin</ListItemText>
                  </ListItem>
                </Link>
              </Box>
            )}
            <ListItem button onClick={logOut}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText>LogOut</ListItemText>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
