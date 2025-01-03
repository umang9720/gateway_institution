import React from "react";
import homestyles from "./home.module.scss";
import image_1 from "assets/images/Group 1171280705.png";
import image_2 from "assets/images/Group 1171280706 .png";
import image_3 from "assets/images/Group 1171280701.png";
import image_4 from "assets/images/Group 1171280704.png";
import bars from "assets/images/bars.png";
const Section2: React.FC = () => {
  return (
    <div className={homestyles["section-2-container"]}>
      <div className={homestyles["section-2-content"]}>
        <h2> Why choose us ?</h2>
        <div className={homestyles["box-container"]}>
          <div className={homestyles["box-content"]}>
            <div className={homestyles["box"]}>
              <img src={image_1} alt="logo" />
              <h3>Personalized Learning</h3>
              <p>
                Our AI-driven platform tailors educational experiences to
                individual student needs, promoting engagement......
              </p>
            </div>
            <img src={bars} alt="logo" />
          </div>
          <div className={homestyles["box-content"]}>
            <div className={homestyles["box"]}>
              <img src={image_2} alt="logo" />
              <h3>Enhanced Student Engagement</h3>
              <p>
              Through AI-assisted personalized learning tools, students experience increased engagement and improved academic performance......
              </p>
            </div>
            <img src={bars} alt="logo" />
          </div>
          
        </div>
        {/*  */}
        <div className={homestyles["box-container"]}>
          <div className={homestyles["box-content"]}>
            <div className={homestyles["box"]}>
              <img src={image_3} alt="logo" />
              <h3>Streamlined Administration</h3>
              <p>
              Automate routine administrative tasks, allowing staff to focus on more meaningful interactions......
              </p>
            </div>
            <img src={bars} alt="logo" />
          </div>
          <div className={homestyles["box-content"]}>
            <div className={homestyles["box"]}>
              <img src={image_4} alt="logo" />
              <h3>Data-Driven Insights</h3>
              <p>
              Leverage analytics to gain insights into student 
              behavior and institutional processes......
              </p>
            </div>
            <img src={bars} alt="logo" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Section2;
