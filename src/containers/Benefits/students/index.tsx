import React from 'react';
import studentstyles from './students.module.scss';
import bars from 'assets/images/Group 1171280735.png'
import student1 from 'assets/images/wer 1.png'

const Students: React.FC = () => {
  return (
    <div className={studentstyles['students-container']}>
      <h5>Benefits <span> &gt; for students</span></h5>
      <h1>Features and value additition</h1>
      <img src={bars} alt="bars" />
      <section>
      <div className={studentstyles['image_text_container']}>
<div className={studentstyles['container-1']}>
    <div className={studentstyles['text-box']}>
        <h2>Tailored Learning Paths </h2>
        <h5>Xo identifies each student’s strengths and weaknesses to create customized study plans, addressing individual needs effectively.
        </h5>
    
    <div className={studentstyles['image-box']}>
        <img src={student1} alt="student" />
    </div>
    </div>
</div>
        
        </div>
      </section>
     
    </div>
  );
};

export default Students;
