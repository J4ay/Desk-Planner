import React from "react";
import BookingCard from "./BookingCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const BookingsPlacehold = () => {
  return (
    <Container
      sx={{ marginTop: "64px", marginRight: "12px", marginBottom: "64px", bgcolor: "#f4f4f4" }}
    >
      <Grid
        container
        rowSpacing={4}
        sx={{ marginLeft: "12px", bgcolor: "#f4f4f4" }}
      >
        <Grid item>
          <BookingCard
            room="Raum 1 EG"
            date="Dienstag, 14. Januar 2020"
            duration="14:00 Uhr - 16:00 Uhr"
          >
          </BookingCard>
        </Grid>
        <Grid item>
        <BookingCard
            room="Raum 3 2. OG"
            date="Donnerstag, 15. Januar 2020"
            duration="9:30 Uhr - 17:30 Uhr"
          >
          </BookingCard>
        </Grid>
        <Grid item>
        <BookingCard
            room="Raum 37 3. OG"
            date="Freitag, 16. Januar 2020"
            duration="8:00 Uhr - 10:00 Uhr"
          >
          </BookingCard>
        </Grid>
        <Grid item>
        <BookingCard
            room="Raum 17 3. OG"
            date="Freitag, 16. Januar 2020"
            duration="11:00 Uhr - 17:00 Uhr"
          >
          </BookingCard>
        </Grid>
        <Grid item>
        <BookingCard
            room="Raum 4 EG"
            date="Montag, 19. Januar 2020"
            duration="9:00 Uhr - 17:00 Uhr"
          >
          </BookingCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookingsPlacehold;
