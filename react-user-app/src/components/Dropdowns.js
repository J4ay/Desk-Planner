import * as React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HttpService from "../services/HttpService";


var options_buildings = [];
var options_floors = [];
var options_rooms = [];


async function fillBuildings(props) {
  const buildings = await HttpService.getBuildings();
  options_buildings = [];
	buildings.map((building) => {
	options_buildings.push({buildingName: building.buildingName, buildingId: building.buildingId});
	});
} 

async function fillFloors(props) {
  if(props.buildingId != null) {
    const floors = await HttpService.getFloorsByBuilding(props.buildingId);
    options_floors = [];
    floors.map((floor) => {
    options_floors.push({floorName: floor.floorName, floorId: floor.floorId});
    });
  }
} 

async function fillRooms(props) {
  if(props.floorId != null) {
    const rooms = await HttpService.getRoomsByFloorId(props.floorId);
    options_rooms = [];
    rooms.map((room) => {
    options_rooms.push({roomName: room.roomName, roomId: room.roomId});
    });
  }
} 


const ITEM_HEIGHT = 48;


const Dropdowns = (props) => {
  const {room, floor, building, getLayout} = props;

  fillBuildings();

  //states for each dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selected_building, setSelectedBuilding] = React.useState(null);
  const open = Boolean(anchorEl);

  const [anchorFloor, setAnchorFloor] = React.useState(null);
  const [selected_floor, setSelectedFloor] = React.useState(null);
  const openFloor = Boolean(anchorFloor);

  const [anchorRoom, setAnchorRoom] = React.useState(null);
  const [selected_room, setSelectedRoom] = React.useState(null);
  const openRoom = Boolean(anchorRoom);

  //handles for click events for each dropdown menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickFloor = (event) => {
    setAnchorFloor(event.currentTarget);
  };
  const handleClickRoom = (event) => {
    setAnchorRoom(event.currentTarget);
  };

  //handles for closing the dropdown menus
  const handleClose = (event) => {
    building(event.currentTarget.value);
    setSelectedBuilding(event.currentTarget.value);
    options_floors = [];    //reset the floor options
    options_rooms = [];     //reset the room options
    fillFloors({"buildingId": event.currentTarget.value});
    setAnchorEl(null);
  };
  const handleCloseFloor = (event) => {
    floor(event.currentTarget.value);
    setSelectedFloor(event.currentTarget.value);
    options_rooms = [];   //reset the room options
    fillRooms({"floorId": event.currentTarget.value});
    setAnchorFloor(null);
  };
  const handleCloseRoom = async (event) => {
    room(event.currentTarget.value);
    setSelectedRoom(event.currentTarget.value);
    fillRooms({"roomId": event.currentTarget.value});
    setAnchorRoom(null);
    getLayout(event.currentTarget.value);
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
        Gebäude
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
        {options_buildings.map((option,i) => (
          <MenuItem
            key={i}
            value={option.buildingId}
            selected={option.buildingName === "Pyxis"}
            onClick={handleClose}
          >
            {option.buildingName}
          </MenuItem>
        ))}
      </Menu>

      <Button
        aria-label="more"
        id="long-button"
        aria-controls={openFloor ? "long-menu" : undefined}
        aria-expanded={openFloor ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClickFloor}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Etage
      </Button>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorFloor}
        open={openFloor}
        onClose={handleCloseFloor}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options_floors.map((option,i) => (
          <MenuItem
            key={i}
            value={option.floorId}
            selected={option.floorName === "Pyxis"}
            onClick={handleCloseFloor}
          >
            {option.floorName}
          </MenuItem>
        ))}
      </Menu>

      <Button
        aria-label="more"
        id="long-button"
        aria-controls={openRoom ? "long-menu" : undefined}
        aria-expanded={openRoom ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClickRoom}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Raum
      </Button>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorRoom}
        open={openRoom}
        onClose={handleCloseRoom}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options_rooms.map((option,i) => (
          <MenuItem
            key={i}
            value={option.roomId}
            selected={option.roomName === "Pyxis"}
            onClick={handleCloseRoom}
          >
            {option.roomName}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Dropdowns;
