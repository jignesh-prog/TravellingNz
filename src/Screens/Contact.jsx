import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ControlledOpenSpeedDial from "../Components/SpeedDial";
function Contact() {
  return (
    <Container
      sx={{
        height: "90vh",
        width: "90vw",
        display: "flex",
        backgroundColor: "aliceblue",
        pb: "30px",
        pt: "100px",
      }}
    >
      <Box
        sx={{
          display: "fex",
          border: 2,
          borderColor: "blue",
          height: "300px",
          width: "500px",
          margin: "0px",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.8999035066004!2d174.67556867499405!3d-36.916657583300676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4159f087297d%3A0xa5ff71d3d645398f!2sGardner%20Avenue%2C%20New%20Lynn%2C%20Auckland%200600!5e0!3m2!1sen!2snz!4v1720599814469!5m2!1sen!2snz"
          width="500"
          height="300"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Box sx={{ display: "block", px: "70px" }}>
          <Typography sx={{ fontSize: "30px" }}>
            You can contact us to make your next trip memorable.
          </Typography>
          <Box sx={{ pt: "20px" }}>
            <Typography sx={{ fontSize: "20px" }}>
              Sanjay Patel -: +64 210329500
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Jignesh -: +64 2040453821
            </Typography>
          </Box>
          <Box>
            <Typography>
              You can email us on
              <a href="https://gmail.com"> dr.jigs21@gmail.com </a>
            </Typography>
          </Box>
        </Box>
      </Box>
      <ControlledOpenSpeedDial />
    </Container>
  );
}

export default Contact;
