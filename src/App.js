import logo from "./logo.svg";
import "./App.css";
import { useState, useRef, useEffect } from "react";
import mountain_3 from "./images/mountain-3.svg";
import mountain_2 from "./images/mountain-2.svg";
import mountain_1 from "./images/mountain-1.svg";
import sun_ from "./images/sun.svg";
import clouds_Bottom from "./images/clouds-bottom.svg";
import clouds_Left from "./images/clouds-left.svg";
import clouds_Right from "./images/clouds-right.svg";
import stars_ from "./images/stars.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function App() {
  const [background, setBackground] = useState(20);

  const parallaxRef = useRef(null);
  const mountain3 = useRef(null);
  const mountain2 = useRef(null);
  const mountain1 = useRef(null);
  const cloudsBottom = useRef(null);
  const cloudsLeft = useRef(null);
  const cloudsRight = useRef(null);
  const stars = useRef(null);
  const sun = useRef(null);
  const copy = useRef(null);
  const btn = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 5 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "5000 bottom",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });
      tl.to(
        mountain3.current,
        {
          y: "-=10",
        },
        0
      );
      tl.to(
        mountain2.current,
        {
          y: "-=30",
        },
        0
      );
      tl.to(
        mountain1.current,
        {
          y: "+=50",
        },
        0
      );
      tl.to(
        stars.current,
        {
          top: 0,
          x:"+=200"
        },
        0.5
      );
      tl.to(
        cloudsBottom.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        0
      );
      tl.to(
        cloudsLeft.current,
        {
          x: "-20%",
          opacity: 0,
        },
        0
      );
      tl.to(
        cloudsRight.current,
        {
          x: "20%",
          opacity: 0,
        },
        0
      );
      tl.to(
        sun.current,
        {
          y: "+=210",
          x: "+=100"
        },
        0
      );
      tl.to(
        copy.current,
        {
          y: "25%",
          opacity: 1,
        },
        0
      );
      tl.to(
        btn.current,
        {
          opacity: 1,
        },
        1.5
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="parallax-outer">
      <div
        ref={parallaxRef}
        className="parallax"
        style={{
          background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67, #EDFC54 )`,
        }}
      >
        <img ref={mountain1} className="mountain-1" src={mountain_1} />
        <img ref={mountain2} className="mountain-2" src={mountain_2} />
        <img ref={mountain3} className="mountain-3" src={mountain_3} />
        <img ref={sun} className="sun" src={sun_} />
        <img ref={cloudsBottom} className="clouds-bottom" src={clouds_Bottom} />
        <img ref={cloudsLeft} className="clouds-left" src={clouds_Left} />
        <img ref={cloudsRight} className="clouds-right" src={clouds_Right} />
        <img ref={stars} className="stars" src={stars_} />
        <div ref={copy} className="copy">
          <h1>Journey</h1>
          <span ref={btn}>Discover more</span>
        </div>
      </div>
      <div className="about">
        <h2>Lorem ipsum</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </div>
  );
}

export default App;
