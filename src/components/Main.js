import React, { useState, useEffect, useRef } from "react";
import "./main.css";
import { FaAngleDown } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import TypeWriterEffect from "react-typewriter-effect";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Home from "./Home";
import Scroll from "./Scroll";
import Skills from "./Skills";
import Education from "./Education";

export default function Main() {
  const scrollRef = useRef(null);

  const scrollToNextSection = () => {
    if (scrollRef.current) {
      const nextSection = scrollRef.current.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // const handleScroll = () => {
  //   const windowHeight = window.innerHeight;
  //   const scrollPosition = window.scrollY;
  //   const nextSectionOffset = scrollRef.current.offsetTop;

  //   if (scrollPosition + windowHeight >= nextSectionOffset) {
  //     scrollToNextSection();
  //   }
  // };

  // React.useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const url = (name, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`;
  const parallax = useRef(null);

  return (
    <Parallax pages={3} ref={parallax}>
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{ backgroundColor: "#343543", opacity: 1 }}
      />
      <Scroll />
      <ParallaxLayer offset={0}>
        <div
          id="body"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: '100vh'
          }}
        >
          <div
          className="stacked"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: 'center',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 60,
                  fontWeight: "bold",
                }}
              >
                <text
                  className="calebhan"
                >
                  Caleb Han <br />
                </text>
                <text
                  className="head"
                  // style={{ color: "#E1E3FF", fontSize: 35 }}
                >
                  I'M A FULL-STACK
                  <br style={{ margin: "-10px 0" }} />
                  <span className="developer">DEVELOPER</span>
                </text>
                <TypeWriterEffect
                  textStyle={{
                    fontWeight: 500,
                    fontSize: "0.4em",
                    color: "#9BA4B5",
                    marginTop: 10,
                  }}
                  cursorColor="#E1E3FF"
                  text={"// i live and breath code..."}
                  typeSpeed={120}
                />
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  marginTop: 25,
                  borderRadius: 20,
                  width: 210,
                  justifyContent: "center",
                }}
              >
                <a
                  href={"https://linkedin.com/in/caleb-han-792349235"}
                  target="_blank"
                >
                  <img
                    src={require("../assets/linkedin2.png")}
                    style={{
                      height: 45,
                      width: 45,
                      marginLeft: 20,
                      justifySelf: "center",
                      marginTop: 5,
                    }}
                  />
                </a>
                <a href={"https://github.com/kidscoots101"} target="_blank">
                  <img
                    src={require("../assets/github.png")}
                    style={{
                      height: 45,
                      width: 45,
                      marginLeft: 15,
                      marginBottom: 3,
                    }}
                  />
                </a>{" "}
                <a href={"https://twitter.com/caleb_han_"} target="_blank">
                  <img
                    src={require("../assets/twitter.png")}
                    style={{
                      height: 45,
                      width: 45,
                      marginLeft: 15,
                      marginBottom: 1,
                    }}
                  />
                </a>
              </div>
            </div>
            <img
              src={require("../assets/SF.jpeg")}
              // className="avatar-image"
              style={{
                width: "30%",
                height: "30%",
                borderRadius: "50%",
                // marginLeft: 80,
              }}
            />
            {/* <div className="arrow-down" onScroll={scrollToNextSection}>
              <FaAngleDown style={{ color: "white" }} />
            </div> */}
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        // style={{ backgroundColor: "white" }}
        speed={0.3}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => parallax.current.scrollTo(2)}
      >
        <Home />
      </ParallaxLayer>
      <ParallaxLayer offset={2}>
        <Education />
      </ParallaxLayer>
    </Parallax>
  );
}
