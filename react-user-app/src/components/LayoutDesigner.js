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
            <Container sx={{ marginTop: "64px", marginBottom: "64px"}}>
                    {/* Hier sind die Buttons zum Einfügen von Elementen*/}
                    <Box tableIcon
                        sx={{ float: "right", display: "flex", alignItems: "left", border: "2px solid black" }}
                    >
                        <Button>
                            Tisch
                        </Button>
                    </Box>
                    <Box wallIcon
                        sx={{ float: "right", display: "flex", border: "2px solid black" }}
                    >
                        <Button>
                            Wand
                        </Button>
                    </Box>
                    <Box doorIcon
                        sx={{ float: "right", display: "flex", border: "2px solid black" }}
                    >
                        <Button>
                            Tür
                        </Button>
                    </Box>
                <Container>
                    <Grid container
                        sx={{ border: "2px solid black", marginLeft: "12px", bgcolor: "#f4f4f4" }}
                    >

                    {/* Hier ist der eigentliche Designer*/}
                    Test Container
                    </Grid>
                </Container>
                    {/* Hier ist der Button zum Speichern*/}
                <Button
                    size="small"
                    sx={{ marginLeft: "auto", marginRight: "0", zIndex: "1" }}
                >
                    Speichern
                </Button>
                <BottomNavBar />
            </Container>
        );
    };
};

export default LayoutDesigner;