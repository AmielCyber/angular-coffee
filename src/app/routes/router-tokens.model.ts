export enum ROUTER_TOKENS {
  HOME = "",
  MENU = "menu",
  SIGN_IN = "auth/sign-in",
  SIGN_UP = "auth/sign-up",
}

export enum LINK_TOKENS {
  HOME = `/${ROUTER_TOKENS.HOME}`,
  MENU = `/${ROUTER_TOKENS.MENU}`,
  SIGN_IN = `/${ROUTER_TOKENS.SIGN_IN}`,
  SIGN_UP = `/${ROUTER_TOKENS.SIGN_UP}`,
}
