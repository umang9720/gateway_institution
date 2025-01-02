export enum ROUTES_ENUM {
    LOGIN = 'LOGIN',
    SIGNUP = 'SIGNUP',
    SERVICES='SERVICES',
    CONTACT='CONTACT',
    ABOUT_US='ABOUT-US',
    DASHBOARD='DASHBOARD',
    HOME='HOME',
    STUDENTS='STUDENTS',
  }
  
  export const appRoutes = {
    [ROUTES_ENUM.LOGIN]: '/login',
    [ROUTES_ENUM.SIGNUP]: '/signup',
    [ROUTES_ENUM.SERVICES]: '/services',
    [ROUTES_ENUM.CONTACT]: '/contact',
    [ROUTES_ENUM.ABOUT_US]: '/about',
    [ROUTES_ENUM.DASHBOARD]: '/dashboard',
    [ROUTES_ENUM.HOME]: '/home',
    [ROUTES_ENUM.STUDENTS]: '/benefits/students',

  };