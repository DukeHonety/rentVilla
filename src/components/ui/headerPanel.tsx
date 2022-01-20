import * as React from "react";
import {Link} from 'react-router-dom';

import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Menu, {MenuProps} from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { getHomes, getLists } from "../routes/route";
import { common } from "@mui/material/colors";

const StyledMenu = styled((props : MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const HeaderPanel:React.FC = () => {
    let homes = getHomes();
    let lists = getLists();
    const [anchorElHome, setAnchorElHome] = React.useState<null | HTMLElement>(null);
    const openH = Boolean(anchorElHome);
    const [anchorElList, setAnchorElList] = React.useState<null | HTMLElement>(null);
    const openL = Boolean(anchorElList);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      let clickMenuId: string = event.currentTarget.id;
      if ( clickMenuId === "home-menu-btn" )
        setAnchorElHome(event.currentTarget);
      if ( clickMenuId === "list-menu-btn" )
        setAnchorElList(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorElHome(null);
      setAnchorElList(null);
    };
    const test = () =>{
      console.log("asd");
    }
    function eachDropItem(val: {url: string, title: string}, i: number) {
      return (
      <div>
        <MenuItem disableRipple>
          <Link to={val.url}>{val.title}</Link>
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
      </div>
      );
    }
    return (
      <Stack direction="row" spacing={2}>
        <Button
          id="home-menu-btn"
          aria-controls={openH ? 'home-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={openH ? 'true' : undefined}
          variant="outlined"
          disableElevation
          onMouseOver={handleClick}
          color = "error"
          endIcon={<KeyboardArrowDownIcon />}
        >
          Home
        </Button>
        <Button
          id="list-menu-btn"
          aria-controls={openL ? 'list-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={openL ? 'true' : undefined}
          variant="outlined"
          disableElevation
          onMouseOver={handleClick}
          //onMouseLeave={handleClose}
          color = "error"
          endIcon={<KeyboardArrowDownIcon />}
        >
          Listings
        </Button>
        <StyledMenu
          id="home-menu"
          MenuListProps={{
            'aria-labelledby': 'home-menu-btn',
          }}
          anchorEl={anchorElHome}
          open={openH}
          onClose={handleClose}
        >
          {
            homes.map(eachDropItem)
          }
        </StyledMenu>
        <StyledMenu
          id="list-menu"
          MenuListProps={{
            'aria-labelledby': 'list-menu-btn',
          }}
          anchorEl={anchorElList}
          open={openL}
          onClose={handleClose}
        >
          {
            lists.map(eachDropItem)
          }
        </StyledMenu>

      </Stack>
    );
}

export default HeaderPanel;