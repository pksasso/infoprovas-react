import {
  ROUTER_CONTACT,
  ROUTER_EXAMS,
  ROUTER_HELP,
  ROUTER_HOME,
} from "./router";

export const HORIZONTAL_NAVIGATION_MENU = [
  { path: ROUTER_HOME, name: "Início" },
  { path: ROUTER_EXAMS, name: "Enviar Prova" },
  { path: ROUTER_HELP, name: "Ajuda" },
  { path: ROUTER_CONTACT, name: "Contato" },
];
