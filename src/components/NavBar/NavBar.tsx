import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDialog } from "../CustomDialog";
import { FavoriteTable } from ".";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };
  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jufa React TEST
          </Typography>
          <Button variant="contained" onClick={handleClick}>
            Open Favorite
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
