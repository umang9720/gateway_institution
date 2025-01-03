import React from 'react'
import homestyles from "./home.module.scss";
import bars from "assets/images/bars.png";
import hacker from 'assets/images/hacker.png';
import brain from 'assets/images/brain.png';
import laptop from 'assets/images/abbbio 1.png';
const Section4: React.FC = () => {
    return (
        <div className={homestyles["section-4-container"]}>
            <div className={homestyles["section-4-content"]}>
                <div className={homestyles['box']}>
                    <div className={homestyles['text-container']}>
                        <h3>Fortified Data Security</h3>
                        <img src={bars} alt="logo" />
                        <p>We prioritize the security and privacy of your institution’s data. Our platform adheres to industry best practices, including</p>
                        <p>Data Encryption: Implementing encryption for data both in transit and at rest to safeguard information as it moves within our platform.</p>
                        <p>Access Controls: Enforcing strong, centralized authentication to ensure that only authorized users access sensitive information.</p>
                        <p>Regular Security Assessments: Conducting continuous evaluations to identify and mitigate potential vulnerabilities, ensuring the ongoing protection of your data.</p>
                    </div>
                    <img src={hacker} alt="pic" />
                </div>
                <div className={homestyles['box-2']}>
                    <div className={homestyles['image-container']}>
                        <img src={brain} alt="brain" />
                        <div className={homestyles['text-overlay']}>
                            <div className={homestyles['text-container']}>
                                <h3>Experience the Future of Higher Education</h3>
                                <p>Join the growing number of institutions transforming their educational environment with AI-driven solutions. Contact us today to schedule a demo and discover how Xombus can enhance your campus experience.</p>
                                <button className={homestyles['btn']}>
                                    <span>Explore More</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={homestyles['box-3']}>
          <img src={laptop} alt="Center" />
          <div className={homestyles["text-box"]}>
          <h3 >About Us</h3>
          <img src={bars} alt="bars" />
            <p>At Xombus, we specialize in AI-powered SaaS solutions designed to revolutionize higher education. Our platform seamlessly integrates into college environments, enhancing interactions among students, administration, and faculty.</p>
          </div>
        </div>
            </div>
        </div>
    )
}

export default Section4
