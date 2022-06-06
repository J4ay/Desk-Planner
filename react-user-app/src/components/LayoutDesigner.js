import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";


class LayoutDesigner extends React.Component{


    render(){
        return(
            <Container sx={{ marginTop: "64px"}}>
                    <Box tableIcon
                        sx={{ display: "flex", border: "2px solid black" }}
                    >
                        <Button>
                            Tisch
                        </Button>
                    </Box>
                    <Box wallIcon
                        sx={{ display: "flex", border: "2px solid black" }}
                    >
                        <Button>
                            Wand
                        </Button>
                    </Box>
                    <Box doorIcon
                        sx={{ display: "flex", border: "2px solid black" }}
                    >
                        <Button>
                            Tür
                        </Button>
                    </Box>
                <Container>
                    
                </Container>
                <Button
                    size="small"
                    sx={{ marginLeft: "auto", marginRight: "0", zIndex: "1" }}
                >
                    Speichern
                </Button>
            </Container>
        );
    };
};

export default LayoutDesigner;