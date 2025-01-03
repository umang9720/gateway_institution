import React from "react";
import HomeStyles from "./testimonials.module.scss";
import Button from "@mui/material/Button";
import bars from "assets/images/Group 1171280735.png";
import image1 from "assets/images/student.png";
import image2 from "assets/images/prof.png";
import image3 from "assets/images/face.png";
import { useNavigate } from "react-router-dom";
import image4 from 'assets/images/hacker.png';
import bg_image from 'assets/images/brain.png';
import image5 from 'assets/images/abbbio 1.png';

const Testimonials: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => { navigate('/benefits/students'); };
  return (
    <div className={HomeStyles["hero-content"]}>
      <h3 className={HomeStyles["hero-content-title"]}>Benefits</h3>
      <img src={bars} alt="bars" />
      <h3 className={HomeStyles["hero-content-sub-title"]}>For Students</h3>
      <p className={HomeStyles["hero-content-sub-text"]}>
        Experience personalized learning paths, immediate feedback, and 24/7
        access to resources,
        <br />
        enhancing academic performance and satisfaction. AI can adapt to
        individual learning approaches,
        <br />
        providing tailored support that meets each student’s unique needs.
      </p>
      {/* ----------------------------------------------box-contianer-------------------------------------------------------------------- */}
      {/* ------------------------------------------------box-1---------------------------------------------------------------------------*/}
      <div className={HomeStyles["hero-content-1-box"]}>
        <div className={HomeStyles["hero-content-1-box-content"]}>
          <h3 className={HomeStyles["hero-1-box-text"]}>
            Aditi Mishra <br />
            <p>A First-Year Engineering Student – NIT Warangal, India </p>
          </h3>
          <p className={HomeStyles["hero-1-box-sub-title"]}>
            "As a first-year student at an engineering college, the transition
            from school to college <br />
            was tough. Xo became my lifeline. When I struggled with
            thermodynamics, I’d ask Xo for <br />
            help, and it explained the concepts in simple terms. It also
            recommended lecture notes <br />
            and practice problems from my professors’ repository. Before exams,
            Xo’s tailored <br />
            quizzes helped me focus on topics where I was weak. It feels like
            having a personal tutor <br />
            that’s always available to guide me."
          </p>
          <Button className={HomeStyles["hero-box-btn"]} onClick={handleClick}>Know more</Button>
        </div>
        <div className={HomeStyles["hero-box-image-1"]}>
          <img src={image1} alt="Students walking on campus" />
        </div>
      </div>
      {/* ------------------------------------------------box-2---------------------------------------------------------------------------*/}

      <h3 className={HomeStyles["hero-content-2-sub-title"]}>For Administration</h3>
      <p className={HomeStyles["hero-content-2-sub-text"]}>Benefit from automated processes, efficient communication channels, and data-driven insights, proving operational efficiency.
      </p>
      <div className={HomeStyles["hero-content-2-box"]}>
        <div className={HomeStyles["hero-box-image-2"]}>
          <img src={image2} alt="Students walking on campus" />
        </div>
        <div className={HomeStyles["hero-content-2-box-content"]}>
          <h3 className={HomeStyles["hero-2-box-text"]}>Andrue John</h3>
          <p className={HomeStyles["hero-2-box-sub-title"]}>
            Andrue, the Dean of a mid-sized college, faced challenges with
            resource allocation and <br /> student engagement. Implementing
            Xombus’s platform allowed the administration to <br />
            automate routine tasks and gain valuable insights into student
            needs. This led to more <br />
            informed decision-making, optimized resource distribution, and a
            noticeable increase in <br />
            overall student satisfaction.
          </p>
          <Button className={HomeStyles["hero-box-2-btn"]}> Know more </Button>
        </div>
      </div>
      {/* ------------------------------------------------box-3---------------------------------------------------------------------------*/}
      <h3 className={HomeStyles["hero-content-2-sub-title"]}>For Faculty</h3>
      <p className={HomeStyles["hero-content-2-sub-text"]}>Access tools that support teaching, provide immediate feedback to students, and streamline administrative responsibilities, allowing more focus on instruction.
      </p>
      <div className={HomeStyles["hero-content-3-box"]}>
        <div className={HomeStyles["hero-content-3-box-content"]}>
          <h3 className={HomeStyles["hero-3-box-text"]}>Jaxon Ellis</h3>
          <p className={HomeStyles["hero-3-box-sub-title"]}>
            Professor Jaxon, teaching introductory physics, found it challenging
            to address the diverse <br />
            learning paces of her students. With Xombus’s AI tools, she could
            monitor individual progress <br />
            and provide personalized feedback efficiently. This enabled her to{" "}
            <br />
            dedicate more time to interactive teaching, resulting in improved
            student comprehension and engagement.
          </p>
          <Button className={HomeStyles["hero-box-btn"]}>Know more</Button>
        </div>
        <div className={HomeStyles["hero-box-image-3"]}>
          <img src={image3} alt="Students walking on campus" />
        </div>
      </div>
      {/* ------------------------------------------------box-4---------------------------------------------------------------------------*/}

      <div className={HomeStyles['hero-content-4']}>
        <div className={HomeStyles['hero-content-4-text']}>
          <h3 >Fortified Data Security</h3>
          <img src={bars} alt="bars" />
          <div className={HomeStyles["text-box"]}>
            <p>We prioritize the security and privacy of your institution’s data. Our platform adheres to industry best practices, including</p>
            <p>Data Encryption: Implementing encryption for data both in transit and at rest to safeguard information as it moves within our platform.</p>
            <p>Access Controls: Enforcing strong, centralized authentication to ensure that only authorized users access sensitive information.</p>
            <p >Regular Security Assessments: Conducting continuous evaluations to identify and mitigate potential vulnerabilities, ensuring the ongoing protection of your data.</p>
          </div>
        </div>
        <div className={HomeStyles["hero-image"]}>
          <svg width="400" height="420" viewBox="0 0 430 430" fill="none" xmlns="http://www.w3.org/2000/svg" className={HomeStyles['dashed-circle']}>
            <circle cx="214.57" cy="215.377" r="209" stroke="#C7BBCC" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="22 25" />
          </svg>

          <img src={image4} alt="Center" className={HomeStyles["center-image"]} />
        </div>
      </div>
       {/* ------------------------------------------------box-5------e---------------------------------------------------------------------*/}

       <div className={HomeStyles['hero-content-5']}>
       <div className={HomeStyles['image-container']}>
  <img src={bg_image} alt="hxh" />
</div>

       </div>

        {/* ------------------------------------------------box-6---------------------------------------------------------------------------*/}

      <div className={HomeStyles['hero-content-6']}>
      <div className={HomeStyles["hero-image"]}>
          <img src={image5} alt="Center" />
        </div>
          
          <div className={HomeStyles["text-box"]}>
          <h3 >About Us</h3>
          <img src={bars} alt="bars" />
            <p>At Xombus, we specialize in AI-powered SaaS solutions designed to revolutionize higher education. Our platform seamlessly integrates into college environments, enhancing interactions among students, administration, and faculty.</p>
          </div>
        </div>
    </div>
  );
};

export default Testimonials;
