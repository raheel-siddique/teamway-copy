export const BASE_URL = "https://teamway.holodeck.xyz";

export const setUser = (name, email, avatar, token) => {
  sessionStorage.setItem("name", btoa(name));
  sessionStorage.setItem("email", btoa(email));
  sessionStorage.setItem("avatar", btoa(avatar));
  sessionStorage.setItem("token", token);
};

export const getUser = () => {
  const name = atob(sessionStorage.getItem("name"));
  const email = atob(sessionStorage.getItem("email"));
  const avatar = atob(sessionStorage.getItem("avatar"));
  const token = sessionStorage.getItem("token");

  const userData = {
    name,
    email,
    avatar,
    token,
  };

  return userData;
};

export const removeUser = () => {
  sessionStorage.removeItem("name");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("avatar");
  sessionStorage.removeItem("token");
};
