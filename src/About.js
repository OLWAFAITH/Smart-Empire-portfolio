import React from "react";
import "./About.css";
import aboutImg from "./img/bg2.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              I Aluko Faith.T studied Software-Engineering at SQI-COLLEGE OF ICT.”
              </p>
              <p className="about__text p__color">
              “I am a Well Perfected Web-Developer with 3 years of experience Learning as a Software-Engineer.He has been a Developer  since 2020. Most recently, I am responsible for solely building A Block-Chain app. My main focus is creating content that not only inspires others but also functions as a powerful marketing tool to increase sales.”
              </p>
              <p className="about__text p__color">
              “I believe that creativity in the workplace is the key to success⁠—a concept I live out through interests in board games, exercise, playing the Football With Friends And Video-Games.”
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download Resume</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
