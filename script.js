// Ralsei sprite sheet data
// title: [index, frames, fps]
const RALSEI = {
  all: [0, 61, 12],
  normal: [0, 5, 9],
  shy: [5, 9, 9],
  jump: [13, 4, 8],
  spin: [16, 4, 15],
  fall: [20, 3, 12],
  land: [22, 5, 8],
  getGun: [27, 8, 12],
  shooting: [35, 6, 12],
  dropGun: [41, 20, 12],
};

const LANGUAGE = {
  ptBR: {
    theme: "Mudar Tema",
    dark: "Escuro",
    light: "Claro",
  },
}

function changeTheme() {
  theme = theme == "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", theme);
  document.querySelector("link[rel='icon']").href = `./image/${theme}Favicon.ico`;
}

let animation = RALSEI.normal;
let frame = 0;
let intervalId; 

const startAnimation = () => {
  if (intervalId) clearInterval(intervalId);
  
  intervalId = setInterval(() => {
    document.documentElement.style.setProperty("--animation", `${(frame + animation[0]) * -49}px`);
    frame = (frame + 1) % animation[1];
  }, 1000 / animation[2]);
};


const ralseiAnimation = (frames) => {
  animation = RALSEI[frames];
  frame = 0; 
  startAnimation(); 
};


window.onload = () => {
  theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.querySelector("link[rel='icon']").href = `./image/${theme}Favicon.ico`   
  startAnimation(); 
};
