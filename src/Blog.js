import React from "react";
import "./Blog.css";
import Blog1 from './img/trackloaded.jpeg';
import Blog2 from './img/news.PNG';
import Blog3 from './img/musics.PNG';

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">Latest News</h1>
        <p className="heading p__color">
          Join Trackloaded To Know More About The World.
        </p>
        <p className="heading p__color">
          Enjoy.........
        </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Enjoy And See All Updates In Town</h5>
                         <h4 className="project__text">Trackloaded.com.ng</h4>
                         <a href="https://trackloaded.com.ng/" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Trackloaded.com.ng/Category/News/</h5>
                         <h4 className="project__text">Catch The Latest News In Town</h4>
                         <a href="https://trackloaded.com.ng/category/news/" className="blog project__btn btn">View Today News</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Trackloaded.com.ng/Category/Music/</h5>
                         <h4 className="project__text">Get The Latest Jamms In Town </h4>
                         <a href="https://trackloaded.com.ng/category/music/" className="blog project__btn btn">Read More</a>
                       </div>
                       
                 </div>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Blog;
