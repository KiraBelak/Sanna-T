import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { BookOpenIcon, HeartIcon, LightningBoltIcon, UserIcon } from "@heroicons/react/outline";
import MainLayout from "@/components/layouts/MainLayout";


const Menu = () => {

  return (
    <MainLayout>
      <List component="nav" className="h-full mx-10 my-10">
        <ListItem button>
          <ListItemIcon>
            <LightningBoltIcon className="h-6 w-6" />
          </ListItemIcon>
          <ListItemText primary="Relajación" className="" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HeartIcon className="h-6 w-6" />
          </ListItemIcon>
          <ListItemText primary="Agradecimiento" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <UserIcon className="h-6 w-6" />
          </ListItemIcon>
          <ListItemText primary="Pensamiento" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BookOpenIcon className="h-6 w-6" />
          </ListItemIcon>
          <ListItemText primary="Diario" />
        </ListItem>
      </List>
    </MainLayout>
  );
};

export default Menu;
