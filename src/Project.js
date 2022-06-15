import React from "react";
import "./Project.css";
import Project1 from './img/weather.PNG';
import Project2 from './img/todo.PNG';
import Project3 from './img/logistics.PNG';
import Project4 from './img/tic.jfif';
import Project5 from './img/github.png';
import Project6 from './img/block.PNG';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
        This Are Personal Work And Payed Services
        </p>
        <p className="heading p__color">
         Please Take A Look..........
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Weather-App</h5>
                     <h4 className="project__text">Deal With The Weather With This</h4>
                     <a href="https://smart-empire-weather-app.netlify.app/" className="project__btn">Check The Weather</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Todo-App</h5>
                     <h4 className="project__text">Set Your Todo's With S.E Today</h4>
                     <a href="https://smart-empire-todo-app.netlify.app/" className="project__btn">Set Your Todo's</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Logistics</h5>
                     <h4 className="project__text">All About Logistics.........</h4>
                     <a href="https://logistics-se.netlify.app/" className="project__btn">Logistics</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">TIC-TAC-TOE</h5>
                     <h4 className="project__text">Let's Play A Game</h4>
                     <a href="https://tic-tac-toe-se.netlify.app/" className="project__btn">Play Game</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">My-GitHub-Account</h5>
                     <h4 className="project__text">Feel Free To Check My Repositories</h4>
                     <a href="https://github.com/OLWAFAITH" className="project__btn">View Git-Hub Account</a>
                     </div>
                 </div>
             </div>


            <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="https://block-chain-se.netlify.app/" className="project__btn">Trade Your Coins</a>
                     </div>
                 </div>
             </div> 
             
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">   
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;
