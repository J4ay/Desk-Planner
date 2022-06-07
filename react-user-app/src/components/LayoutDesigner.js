import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
import BottomNavBar from "./BottomNavBar";

class LayoutDesigner extends React.Component{

    render(){
        return(
            <Container sx={{ marginTop: "64px", marginBottom: "64px", padding: "12px"}}>
                    {/* Hier sind die Buttons zum Einfügen von Elementen*/}
                    <Box tableIcon
                        sx={{ float: "right", marginRight: "8px", display: "flex" }}
                    >
                        <Button sx={{border: "2px solid black"}}>
                            Tisch
                        </Button>
                    </Box>
                    <Box wallIcon
                        sx={{ float: "right", marginRight: "8px", display: "flex" }}
                    >
                        <Button sx={{border: "2px solid black"}}>
                            Wand
                        </Button>
                    </Box>
                    <Box doorIcon
                        sx={{ float: "right", marginRight: "8px", display: "flex", }}
                    >
                        <Button sx={{border: "2px solid black"}}>
                            Tür
                        </Button>
                    </Box>
                <Container>
                    <Grid container>

                    {/* Hier ist der eigentliche Designer*/}
                    <Box
                    sx={{ border: "2px solid black", 
                    marginLeft: "12px", 
                    marginTop: "12px", 
                    marginBottom: "12px",
                    bgcolor: "#f4f4f4",
                    minHeight: "70%",
                    height: "65vh",
                    minWidth: "90%",
                    width: "100%", 
                    padding: "12px"}}
                    >
                    </Box>
                    </Grid>
                </Container>
                    {/* Hier ist der Button zum Speichern*/}
                <Button
                    size="small"
                    sx={{ float: "right", marginBottom: "88px", marginRight: "8px", zIndex: "1", border: "2px solid black" }}
                >
                    Speichern
                </Button>
                <BottomNavBar />
            </Container>
        );
    };
};

export default LayoutDesigner;