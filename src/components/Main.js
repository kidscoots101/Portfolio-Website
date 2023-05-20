import React, { useState, useEffect, useRef } from "react";
import "./main.css";
import { FaAngleDown } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import TypeWriterEffect from "react-typewriter-effect";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Home from "./Intro";

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

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const nextSectionOffset = scrollRef.current.offsetTop;

    if (scrollPosition + windowHeight >= nextSectionOffset) {
      scrollToNextSection();
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Parallax pages={5}>
      <ParallaxLayer offset={0}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 150,
            }}
          >
            <div>
              <div
                style={{
                  color: "white",
                  fontSize: 60,
                  fontWeight: "bold",
                }}
              ></div>
              <div
                style={{
                  color: "white",
                  fontSize: 60,
                  fontWeight: "bold",
                }}
              >
                <text
                  className="name"
                  style={{
                    color: "#FFD700",
                    animation: "glowing 2s infinite",
                    fontSize: 75,
                    // textDecoration: "underline",
                  }}
                >
                  CALEB HAN
                </text>
                <text
                  className="head"
                  style={{ color: "#E1E3FF", fontSize: 35 }}
                >
                  ASPIRING FRONT-END
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
                  cursorColor="#3F3D56"
                  text={"There'll be a day..."}
                  typeSpeed={140}
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
                marginLeft: 80,
              }}
            />
            <div className="arrow-down" onScroll={scrollToNextSection}>
              <FaAngleDown style={{ color: "white" }} />
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
        <Home />
      </ParallaxLayer>
    </Parallax>
  );
}
