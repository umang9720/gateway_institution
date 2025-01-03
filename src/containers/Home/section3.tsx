import React from "react";
import homestyles from "./home.module.scss";
import bars from "assets/images/bars.png";
import student from "assets/images/student.png";
import teacher from 'assets/images/teacher.png';
import face from 'assets/images/face.png'

const Section3: React.FC = () => {
  return (
    <div className={homestyles["section-3-container"]}>
      <div className={homestyles["section-3-content"]}>
        <h1>Benefits</h1>
        <img src={bars} alt="logo" />
        <div className={homestyles["box-container"]}>
          <div className={homestyles["box-content"]}>
            <h2>For Students</h2>
            <p>
              Experience personalized learning paths, immediate feedback, and
              24/7 access to resources, enhancing academic performance and
              satisfaction. AI can adapt to individual learning approaches,
              providing tailored support that meets each student’s unique needs.
            </p>
          </div>
          <div className={homestyles["box"]}>
            <div className={homestyles["text"]}>
              <h3>
                Aditi Mishra <br />
                <span>
                  A First-Year Engineering Student – NIT Warangal, India
                </span>
              </h3>
              <p className={homestyles["sub-text"]}>
                "As a first-year student at an engineering college, the
                transition from school to college was tough. Xo became my
                lifeline. When I struggled with thermodynamics, I’d ask Xo for
                help, and it explained the concepts in simple terms. It also
                recommended lecture notes and practice problems from my
                professors’ repository. Before exams, Xo’s tailored quizzes
                helped me focus on topics where I was weak. It feels like having
                a personal tutor that’s always available to guide me."{" "}
              </p>

              <button className={homestyles["btn"]}> <h3>Know more</h3> </button>
            </div>
            <div className={homestyles["image"]}>
              <img src={student} alt="student-image" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className={homestyles["box-container"]}>
          <div className={homestyles["box-content"]}>
            <h2>For Administration</h2>
            <p>
              Benefit from automated processes, efficient communication
              channels, and data-driven insights, proving operational
              efficiency.
            </p>
          </div>
          <div className={homestyles["box-2"]}>
          <div className={homestyles["image"]}>
              <img src={teacher} alt="student-image" />
            </div>
            <div className={homestyles["text"]}>
              <h3>Andrue John</h3>
              <p>
                Andrue, the Dean of a mid-sized college, faced challenges with
                resource allocation and student engagement. Implementing
                Xombus’s platform allowed the administration to automate routine
                tasks and gain valuable insights into student needs. This led to
                more informed decision-making, optimized resource distribution,
                and a noticeable increase in overall student satisfaction.
              </p>

              <button className={homestyles["btn"]}> <h3>Know more</h3> </button>
            </div>
           
          </div>
        </div>
        {/*
         */}
        <div className={homestyles["box-container"]}>
          <div className={homestyles["box-content"]}>
            <h2>For Faculty</h2>
            <p>
              Access tools that support teaching, provide immediate feedback to
              students, and streamline administrative responsibilities, allowing
              more focus on instruction.
            </p>
          </div>
          <div className={homestyles["box-3"]}>
            <div className={homestyles["text"]}>
              <h3>Jaxon Ellis</h3>
              <p>
                Professor Jaxon, teaching introductory physics, found it
                challenging to address the diverse learning paces of her
                students. With Xombus’s AI tools, she could monitor individual
                progress and provide personalized feedback efficiently. This
                enabled her to dedicate more time to interactive teaching,
                resulting in improved student comprehension and engagement.
              </p>

              <button className={homestyles["btn"]}>Know more</button>
            </div>
            <div className={homestyles["image"]}>
              <img src={face} alt="student-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
