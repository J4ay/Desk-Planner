import * as React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HttpService from "../services/HttpService";


var options = [];

var options_buildings = [
  /* "1",
  "2",
  "3A",
  "3B",
  "4",
  "Headquater",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "12",
  "13", */
];

var options_floors = [];

var options_rooms = [];


async function fillOptions(props) {
  console.log("fillOptions");
  if(props.type === "building") {
  console.log("fillOptions Building");
  const buildings = await HttpService.getBuildings();
  options_buildings = [];
  buildings.map((building) => {
    options_buildings.push(building.buildingName);
  });
  options = options_buildings;
  console.dir(buildings);
  } else if(props.type === "floor") {
    console.log("fillOptions Floor");
    const floors = await HttpService.getFloors(props.building);
    options_floors = [];
    floors.map((floor) => {
      options_floors.push(floor.floorName);
    });
    options = options_floors;
    console.dir(floors);
  } /* else if(props.type === "room") {
    console.log("fillOptions");
    const rooms = await HttpService.getRooms(props.building, props.floor);
    options_rooms = [];
    rooms.map((room) => {
      options_rooms.push(room.room);
    });
    options = options_rooms;
    console.dir(rooms);
  } */
} 


const ITEM_HEIGHT = 48;


const Dropdowns = (props) => {
  fillOptions(props);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        {options_buildings.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Dropdowns;
