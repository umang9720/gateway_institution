import { ROUTES_ENUM, appRoutes } from 'constants/routes';

export enum SideBarOptionsEnum {
  LOGIN = 'LOGIN',
  RESET_PASSWORD = 'RESET_PASSWORD',
  SET_PASSWORD = 'SET_PASSWORD',
}

export const SideNavRoutes = {
  [SideBarOptionsEnum.LOGIN]: appRoutes[ROUTES_ENUM.LOGIN],
//   [SideBarOptionsEnum.RESET_PASSWORD]: Routes[ROUTES_ENUM.RESET_PASSWORD],
//   [SideBarOptionsEnum.SET_PASSWORD]: Routes[ROUTES_ENUM.SET_PASSWORD],
};