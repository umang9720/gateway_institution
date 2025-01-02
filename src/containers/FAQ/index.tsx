import React from 'react';
import image from 'assets/images/fqs 1.png';
import bars from 'assets/images/Group 1171280735.png'
import faqstyles from './faq.module.scss';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'How does the platform personalize -learning?',
      answer: 'By analyzing individual student interactions and data, our AI tailors responses and resources to meet specific learning needs, creating adaptive learning pathways for each student. ',
      image: image
    },
    {
      question: 'Is the platform available in multiple languages?',
      answer: 'Yes, our solution supports multiple languages to cater to diverse student populations.',
      image: image
    },
    {
      question: 'How is data privacy maintained?',
      answer: 'We implement strict data security measures, including encryption, access controls, and compliance with relevant data protection regulations, to safeguard your institution’s data.',
      image: image
    },
    {
      question: 'Can the platform integrate with existing campus systems?',
      answer: 'Absolutely, our solution is designed to seamlessly integrate with your institution’s existing platforms and databases, ensuring a smooth implementation process.',
      image: image
    },
  ];

  return (
    <div className={faqstyles['faqContainer']}>
      <h1>Frequently Asked Questions(FAQ)</h1>
      <img src={bars} alt="bars" />
      {faqs.map((faq, index) => (
        <div key={index} className={faqstyles['faqItem']}>
            <div className={faqstyles['faqImage']}>
            <img src={faq.image} alt={faq.question} />
          </div>
          <div className={faqstyles['faqContent']}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default FAQ;
