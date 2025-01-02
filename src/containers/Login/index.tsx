import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import MainLogo from 'assets/images/logo.png'
import image1 from 'assets/images/outdoor.png';
import image2 from 'assets/images/building.png';
import image3 from 'assets/images/classroom.png';
import { Button, TextField } from '@mui/material';
import Divider from '@mui/material/Divider';
import clsx from 'clsx';

const images = [
  { 
    src: image1, 
    text: 'Redefining learning with GatewayGPT', 
    subText: 'Your AI partner in education excellence, bridging knowledge, innovation, and AI-powered insights to create smarter campus and drive better learning outcomes for the future.' 
  },
  { 
    src: image2, 
    text: 'Revolutionizing Campus Life', 
    subText: 'AI-Driven Insights for Collaborative Growth and Seamless Learning.' 
  },
  { 
    src: image3, 
    text: 'Unlock the Power of Knowledge', 
    subText: 'Your AI Companion for Education, Innovation, and Excellence' 
  },
];


const LoginPage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'test@mail.com' && password === 'password') {
      navigate('/home');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.carousel}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentImage ? styles.active : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 99, 90, 0.26),rgba(0, 99, 90, 0.26)), url(${image.src})`,
            }}
          >
            <div className={styles.textOverlaycontainer}>
            <div className={styles.textOverlay}>
              <div className={styles.textcontainer}>
              <h1 className={styles.text}>{image.text}</h1>
              <p className={styles.subtext}>{image.subText}</p>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.overlay}>
        <div className={styles.loginWrapper}>
      <div className={styles.logoContainer}>
        <img src={MainLogo} className={styles.logoImg} alt='logo' />
      </div>
      <div className={styles.loginContainer}>
        <h6 className={styles.loginTitle}>{`Let's Login`}</h6>
        <form className={styles.formWrapper}>
          <div className={clsx(styles.inputContainer, styles.userField)}>
            <TextField
              placeholder='Username/email'
              variant='outlined'
              name='username'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <TextField
              type='password'
              placeholder='Password'
              variant='outlined'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a href='/' className={styles.forgotPassword}>
            Forgot password?
          </a>
          <Divider className={styles.divider} />
          <Button variant='contained' className={styles.loginButton} onClick={handleSubmit}>
            Login
          </Button>
        </form>
      </div>
      <div className={styles.createAccountContainer}>
        <p className={styles.createAccountHelperText}>If you don’t have account please create here</p>
        
          <Button className={styles.createAccountBtn} variant='outlined'>
            Create Account
          </Button>
    
      </div>
    </div>
      </div>
    </div>
  );
};

export default LoginPage;
