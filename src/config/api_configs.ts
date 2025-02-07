export const apiDomain = process.env.NODE_ENV === "development" ? `http://localhost:3300` : `https://srv.hlkw.me`;
export const apiPrefix = `${apiDomain}/api`;

export const line_login_api = `${apiPrefix}/line_login`;
export const ms_login_api = `${apiPrefix}/ms_login`;
