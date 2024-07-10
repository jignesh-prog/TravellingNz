import { Box, Container, Typography } from "@mui/material";

import { Image } from "mui-image";
import { Link } from "react-router-dom";
import React from "react";
function Home() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          marginTop: "70px",
          backgroundImage: `url(
          "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=600"
        )`,
          height: "88vh",
          width: "100vw",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            display: "block",
            padding: "25px",
            marginLeft: "20px",
            alignContent: "center",
            width: "600px",
            fontFamily: "sans-serif",
            color: "white",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              position: "relative",

              margin: "25px 0",
              fontSize: "50px",
            }}
          >
            Travelling to New zealand?
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
            We have professional drivers and guides who can drive you aound the
            different places of NZ whether north or south island.
          </Typography>

          <Typography
            sx={{ display: "flex", alignItems: "center", fontSize: "20px" }}
          >
            Checkout our services
            <Typography sx={{ pl: "10px", fontSize: "25px" }}>
              <Link to="/About">here</Link>
            </Typography>
          </Typography>
          <Typography
            sx={{
              mt: "30px",
              fontSize: "30px",
            }}
          >
            <Link to="/Contact">Get in touch with us</Link>
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          fontSize: "45px",
          fontFamily: "sans-serif",
          mt: "50px",
          marginLeft: "70px",
          color: "cadetblue",
        }}
      >
        Driving is one of the best ways to see New Zealand
      </Typography>
      <Typography
        sx={{ fontSize: "25px", ml: "70px", color: "purple", mb: "50px" }}
      >
        Find out more information below
      </Typography>
      <Box
        sx={{
          display: "grid",
          textAlign: "left",
          mx: "70px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "sticky",
            top: 0,
            height: "300px",
            width: "50%",
            flexWrap: "no-wrap",

            justifyContent: "center",
            margin: "auto",
            mb: "50px",
          }}
        >
          <Image
            src="https://images.pexels.com/photos/170286/pexels-photo-170286.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Volcanic valley"
          />
        </Box>
        <Typography sx={{ fontSize: "20px", mb: "50px", color: "cadetblue" }}>
          New Zealand's stunning scenery makes for remarkable road trips and
          traveling by car is convenient and flexible, especially for visiting
          attractions away from main arterial routes. Many of the best-known
          national parks are remote, so you'll need a car to explore them.
          Driving around New Zealand is reasonably straightforward and traffic
          is relatively light outside of the major cities. People drive on the
          left-hand side of the road and visitors are usually allowed to drive
          on their home driver’s license for up to a year.
        </Typography>
        <Box
          sx={{
            display: "flex",
            position: "sticky",
            top: 0,
            height: "300px",
            width: "50%",
            flexWrap: "no-wrap",
            justifyContent: "center",
            margin: "auto",
            mb: "50px",
          }}
        >
          <Image
            src="https://images.pexels.com/photos/163992/pexels-photo-163992.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Volcanic valley"
          />
        </Box>
        <Typography sx={{ fontSize: "20px", mb: "50px", color: "cadetblue" }}>
          Keep in mind that car rentals aren’t always cheap and can be expensive
          for drivers under 25. If you’re traveling between the islands,
          double-check whether your rental is allowed on the Interislander or
          Bluebridge ferries across the Cook Strait.{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            position: "sticky",
            top: 0,
            height: "300px",
            width: "50%",
            flexWrap: "no-wrap",
            margin: "auto",
            mb: "50px",
          }}
        >
          <Image src="https://images.pexels.com/photos/421927/pexels-photo-421927.jpeg?auto=compress&cs=tinysrgb&w=1000" />
        </Box>
        <Typography sx={{ fontSize: "20px", mb: "50px", color: "cadetblue" }}>
          You’ll also need to book your vehicle on the ferry in advance. In more
          remote areas, there can be long stretches between gas stations, so be
          sure to fill up your vehicle before leaving a town. Also, be aware
          that some roads are gravel or dirt, especially in rural areas, with
          windy and narrow stretches and tight mountain passes. One-way bridges
          are incredibly common, particularly on the South Island.{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            position: "sticky",
            top: 0,
            height: "300px",
            width: "50%",
            flexWrap: "no-wrap",
            margin: "auto",
            mb: "50px",
          }}
        >
          <Image src="https://images.pexels.com/photos/24827280/pexels-photo-24827280/free-photo-of-cape-reinga-lighthouse-on-sea-coast-in-new-zealand.jpeg?auto=compress&cs=tinysrgb&w=1000" />
        </Box>
        <Typography sx={{ mb: "50px", fontSize: "20px", color: "cadetblue" }}>
          Distances are deceptive and being caught behind a slow-moving
          campervan on single-lane roads can add hours to your journey. It’s not
          unusual to encounter construction and “slips” (the Kiwi word for
          landslides) caused by weather events (such as 2023’s Cyclone
          Gabrielle) on your travels. Check Waka Kotahi’s journey planner before
          you hit the road. If you’re driving through the South Island’s
          mountainous passes in winter, having snow chains on hand isn’t just
          advisable – it’s mandatory in some areas, including along the Milford
          Road. Road signs will advise if and when you’re required to put them
          on, so make sure you know how to properly fit your chains when needed.
          Car rental agencies offer chain rentals and can show you how to use
          them.
        </Typography>
      </Box>
    </>
  );
}

export default Home;
