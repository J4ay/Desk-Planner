import * as React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HttpService from "../services/HttpService";


var options_floors = [];

//fills options_floors with the floors of the selected building
async function fillOptions(props) {
  //console.log("fillOptions");
  if(props.type === "floor") {
    //console.log("fillOptions Floor");
    const floors = await HttpService.getFloorsByBuilding(props.buildingId);
    console.dir(floors);
    options_floors = [];
    floors.map((floor) => {
      options_floors.push(floor.floorName);
    });
    //console.dir(floors);
  }
} 



const ITEM_HEIGHT = 48;


const Dropdown_Floors = (props) => {
  fillOptions(props);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    fillOptions({"buildingId": 2});
  };

  return (
    <div>
      <Button
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {props.title}
      </Button>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options_floors.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
            //onSelected={}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Dropdown_Floors;
