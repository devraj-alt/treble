import React from "react";
import { Navbar } from "../components/Navbar";
import { Announcement } from "../components/Announcement";
import { Banner } from "../components/Banner";
import { Categories } from "../components/Categories";

import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Announcement />
      <Navbar />
      <Banner />
      <Categories />

      <Footer />
    </div>
  );
};
