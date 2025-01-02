import Footer from "components/Layout/Footer";
import React from "react";
import HomeStyles from "./home.module.scss";
import image1 from 'assets/images/image.png';
import image2 from 'assets/images/moro.png';
import Button from "@mui/material/Button";
import bars from 'assets/images/Group 1171280735.png';
import image3 from 'assets/images/DERTYU 1.png';
import image4 from 'assets/images/en 1.png';
import image5 from 'assets/images/ENHK 1.png';
import image6 from 'assets/images/dd 1.png';
import Testimonials from "containers/Testimonials/main";
import FAQ from "containers/FAQ";
import Navbar from "components/Layout/Navbar";
const Home: React.FC = () => {
  return (
    <>
      <div className={HomeStyles["home-container"]}>
        {/* ------------------------------------------------ homepage navbar---------------------------------------------------------------- */}
        <nav className={HomeStyles['navbar']}>
         <Navbar />
        </nav>
        {/* -------------------------------------------------------main-------------------------------------------------------------------------- */}
        <main >
          {/* ------------------------------------------------ first hero section---------------------------------------------------------------- */}

          <section>
            <div className={HomeStyles["hero-content"]}>
              <div className={HomeStyles["hero-text"]}>
                <p className={HomeStyles["hero-welcome-text"]}>Welcome to Xombus</p>
                <h1 className={HomeStyles['hero-welcome-sub-text']}>Empowering Higher Education with AI-Driven Personalized Learning</h1>
                <Button className={HomeStyles["hero-btn"]}>Know more</Button>
              </div>
              <div className={HomeStyles["hero-image"]}>
                <svg width="400" height="430" viewBox="0 0 430 430" fill="none" xmlns="http://www.w3.org/2000/svg" className={HomeStyles['dashed-circle']}>
                  <circle cx="214.57" cy="215.377" r="209" stroke="#C7BBCC" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="22 25" />
                </svg>

                <img src={image1} alt="Center" className={HomeStyles["center-image"]} />
              </div>
            </div>
            <div className={HomeStyles["hero-content"]}>
              <div className={HomeStyles["hero-image"]}>
                <svg width="400" height="430" viewBox="0 0 430 430" fill="none" xmlns="http://www.w3.org/2000/svg" className={HomeStyles['dashed-circle']}>
                  <circle cx="214.57" cy="215.377" r="209" stroke="#C7BBCC" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="22 25" />
                </svg>

                <img src={image2} alt="Center" className={HomeStyles["center-image-2"]} />
              </div>
              <div className={HomeStyles["hero-text-2"]}>
                <p className={HomeStyles["hero-welcome-text-2"]}>Transforming Education with AI Innovation</p>
                <img src={bars} alt="bars" />
                <h1 className={HomeStyles['hero-welcome-sub-text-2']}>Xombus offers a next-generation platform for higher education institutions to unlock limitless possibilities in managing and imparting education. Designed with cutting-edge AI, our platform empowers institutions to streamline operations, enhance teaching methodologies, and redefine the learning experience.</h1>
                <Button className={HomeStyles["hero-btn"]}>Know more</Button>
              </div>
            </div>
          </section>
          {/* ------------------------------------------------second hero section---------------------------------------------------------------- */}
          <section className={HomeStyles['hero-container-2']}>
            <h3 className={HomeStyles['hero-container-2-title']}>Why choose us?</h3>
            {/* ------------------------------------------------box-contianer-------------------------------------------------------------------- */}
            <div className={HomeStyles['box-container']}>
              {/* ------------------------------------------------box-1---------------------------------------------------------------------------*/}
              <div className={HomeStyles["hero-content-3"]}>
                <div className={HomeStyles["hero-content-3-box"]}>
                  <div className={HomeStyles["hero-box-image"]}>
                    <svg width="196" height="196" viewBox="0 0 196 196" fill="none" xmlns="http://www.w3.org/2000/svg" className={HomeStyles['outer-circle']}>
                      <circle cx="98" cy="98" r="94.5" fill="#98D1FF" stroke="#5F2579" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="22 25" />
                    </svg>
                    <img src={image3} alt="Students walking on campus" className={HomeStyles['inner-image']} />
                  </div>
                  <h3 className={HomeStyles['hero-box-text']}>Personalized <br />Learning</h3>
                  <p className={HomeStyles['hero-box-sub-title']}>Our AI-driven platform tailors educational experiences to<br />individual student needs, promoting engagement and<br />success. By analyzing student data, we create adaptive<br />learning pathways that address <br />each learner’s strengths and areas for<br />improvement.</p>
                </div>
                <img src={bars} alt="bars" />
              </div>
              {/* ---------------------------------------------------box-2----------------------------------------------------------------------- */}
              <div className={HomeStyles["hero-content-3"]}>
                <div className={HomeStyles["hero-content-3-box"]}>
                  <div className={HomeStyles["hero-box-image"]}>
                  <svg width="196" height="196" viewBox="0 0 196 196" fill="none" xmlns="http://www.w3.org/2000/svg" className={HomeStyles['outer-circle']}>
                      <circle cx="98" cy="98" r="94.5" fill="#E2C565" stroke="#5F2579" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="22 25" />
                    </svg>
                    <img src={image4} alt="Students walking on campus" className={HomeStyles['inner-image']} />
                  </div>
                  <h3 className={HomeStyles['hero-box-text']}>Enhanced Student <br />Engagement</h3>
                  <p className={HomeStyles['hero-box-sub-title']}>Through AI-assisted personalized learning tools, students<br />experience increased engagement and improved academic<br />performance. Studies have<br />shown a 45% increase in student engagement and a 30%<br />improvement in academic performance among students using<br />AI-assisted personalized learning tools.</p>
                </div>
                <img src={bars} alt="bars" />
              </div>
            </div>
            {/* -------------------------------------------------box-container-2 -----------------------------------------------------------------*/}
            <div className={HomeStyles['box-container']}>
              {/*--------------------------------------------------- box-3 -----------------------------------------------------------------------*/}
              <div className={HomeStyles["hero-content-3"]}>
                <div className={HomeStyles["hero-content-3-box"]}>
                  <div className={HomeStyles["hero-box-image"]}>
                  <svg width="196" height="196" viewBox="0 0 196 196" fill="none" xmlns="http://www.w3.org/2000/svg" className={HomeStyles['outer-circle']}>
                      <circle cx="98" cy="98" r="94.5" fill="#ff9191" stroke="#5F2579" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="22 25" />
                    </svg>
                    <img src={image5} alt="Students walking on campus" className={HomeStyles['inner-image']} />
                  </div>
                  <h3 className={HomeStyles['hero-box-text']}>Streamlined  <br />Administration</h3>
                  <p className={HomeStyles['hero-box-sub-title']}>Automate routine administrative tasks, allowing staff to focus<br />on more meaningful interactions and decision making.</p>
                </div>
                <img src={bars} alt="bars" />
              </div>
              {/* ---------------------------------------------------box-4------------------------------------------------------------------------*/}
              <div className={HomeStyles["hero-content-3"]}>
                <div className={HomeStyles["hero-content-3-box"]}>
                  <div className={HomeStyles["hero-box-image"]}>
                  <svg width="196" height="196" viewBox="0 0 196 196" fill="none" xmlns="http://www.w3.org/2000/svg" className={HomeStyles['outer-circle']}>
                      <circle cx="98" cy="98" r="94.5" fill="  #A2A3B8" stroke="#5F2579" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="22 25" />
                    </svg>
                    <img src={image6} alt="Students walking on campus" className={HomeStyles['inner-image']} />
                  </div>
                  <h3 className={HomeStyles['hero-box-text']}>Data-Driven <br />
                    Insights</h3>
                  <p className={HomeStyles['hero-box-sub-title']}>Leverage analytics to gain insights into student<br />behavior and institutional processes, facilitating<br />informed decision-making.</p>
                </div>
                <img src={bars} alt="bars" />
              </div>
            </div>
          </section>
          {/* ----------------------------------------------------third hero section------------------------------------------------------------- */}
          <section>

            <Testimonials />

          </section>
          <section>
            <FAQ />
          </section>
        </main>
      </div>
      {/* <Testimonials /> */}
      {/* ----------------------------------------------------------homepage-footer---------------------------------------------------------------*/}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
