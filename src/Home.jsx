import * as React from "react";
import "./Home.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Intro from "./Pages/Intro";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";

function Home() {
  return (
    <Parallax pages={3} style={{ top: "0", left: "0" }}>
      <ParallaxLayer
        offset={0}
        speed={2.5}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Intro />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={2.5}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Experience />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={2.5}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Projects />
      </ParallaxLayer>
    </Parallax>
  );
}

export default Home;
