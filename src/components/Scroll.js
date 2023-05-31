import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Main from "./Main";

export default function Scroll() {
  const url = (name, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`;
  const parallax = useRef(null);
  return (
    <div>
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{
          backgroundImage: url("stars", true),
          backgroundSize: "cover",
          ilter: "brightness(0)",
        }}
      />
      <ParallaxLayer speed={0.8} style={{ opacity: 0.1 }}>
        <img
          src={url("cloud")}
          style={{
            display: "block",
            width: "20%",
            marginLeft: "55%",
            marginTop: "1%",
          }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "15%" }}
        />
      </ParallaxLayer>
    </div>
  );
}
