import { Box, Typography } from "@mui/material";
import { Image } from "mui-image";
import React from "react";

function About() {
  return (
    <>
      <Image
        src="https://images.pexels.com/photos/2407783/pexels-photo-2407783.jpeg?auto=compress&cs=tinysrgb&w=1000"
        style={{
          height: "400px",
          width: "100vw",

          marginTop: "70px",
        }}
      />
      <Box
        sx={{
          backgroundColor: "lightblue",
        }}
      >
        <Box
          sx={{
            display: "flex",
            margin: "50px",
          }}
        >
          <Box>
            <Image
              src="https://media.istockphoto.com/id/1443409611/photo/man-on-stone-on-the-hill-and-beautiful-mountains-in-haze-at-colorful-sunset-in-autumn.jpg?b=1&s=612x612&w=0&k=20&c=reHq-c7BUpDsp5f-CG3IVi3NeOWwEZQS93O7Mrh-xIg="
              style={{
                height: 300,
                width: 400,
                float: "left",
              }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                width: "700px",
                marginLeft: "100px",
                fontSize: "20px",
                textAlign: "left",
                backgroundColor: "lightblue",
                padding: "20px",
              }}
            >
              Queenstown and the Southern Lakes region is a great place to
              explore and the interactive map below allows you to get a feel for
              the region before you arrive. If you’re travelling by road use the
              map to see how far your destination is from your current location.
              There is also our Queenstown activities map that shows you all the
              great experiences around the region and where you can find them.
              Or explore the local wine, biking and walking maps which can be
              downloaded to help you plan your Queenstown adventure and check
              out the official Queenstown visitor guide for itinerary ideas,
              local tips and seasonal information.{" "}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", margin: "50px" }}>
          <Box>
            <Image
              src="https://images.pexels.com/photos/831910/pexels-photo-831910.jpeg?auto=compress&cs=tinysrgb&w=600"
              style={{ height: 300, width: 400, float: "left" }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                width: "700px",
                marginLeft: "100px",
                fontSize: "20px",
                textAlign: "left",
              }}
            >
              Queenstown and the Southern Lakes region is a great place to
              explore and the interactive map below allows you to get a feel for
              the region before you arrive. If you’re travelling by road use the
              map to see how far your destination is from your current location.
              There is also our Queenstown activities map that shows you all the
              great experiences around the region and where you can find them.
              Or explore the local wine, biking and walking maps which can be
              downloaded to help you plan your Queenstown adventure and check
              out the official Queenstown visitor guide for itinerary ideas,
              local tips and seasonal information.{" "}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", margin: "50px" }}>
          <Box>
            <Image
              src="https://media.istockphoto.com/id/1343234215/photo/young-asian-couple-celebrating-success-at-roys-peak-lake-wanaka-new-zealand.jpg?s=1024x1024&w=is&k=20&c=QuLfydeUNsv3R75lwIemszHSwrBOI7wbqsCH8Cirla4="
              style={{ height: 300, width: 400, float: "left" }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                width: "700px",
                marginLeft: "100px",
                fontSize: "20px",
                textAlign: "left",
              }}
            >
              Queenstown and the Southern Lakes region is a great place to
              explore and the interactive map below allows you to get a feel for
              the region before you arrive. If you’re travelling by road use the
              map to see how far your destination is from your current location.
              There is also our Queenstown activities map that shows you all the
              great experiences around the region and where you can find them.
              Or explore the local wine, biking and walking maps which can be
              downloaded to help you plan your Queenstown adventure and check
              out the official Queenstown visitor guide for itinerary ideas,
              local tips and seasonal information.{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default About;
