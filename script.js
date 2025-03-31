// Ralsei sprite sheet data
// title: [index, frames, fps]
const RALSEI = {
  all: [0, 61, 12],
  normal: [0, 5, 9],
  shy: [5, 9, 9],
  jump: [14, 2, 8],
  spin: [16, 4, 15],
  fall: [20, 3, 12],
  land: [23, 4, 8],
  getGun: [27, 8, 12],
  shooting: [35, 6, 12],
  dropGun: [41, 20, 12],
};

const THEME = {
  black: {
    ralsei: 0,
    background: "#282a36",
    buttonText: "black",
    themeButton: "white",
    buttonBorder: "black",
    themeButtonText: "black",
    themeButtonShadow: "#ffffff33",
    allAnimationsButton: "#ff72cb",
    animationButton: "#4ba085",
    allAnimationButtonHover:"#ff9ddb",
    animationButtonHover:"#68ccac",
    allAnimationButtonFocus:"#ff9ddb",
    animationButtonFocus:"#68ccac",
    box: "#44475aef",
    boxBorder: "#8be9fd#bd93f9",
    divBorder: "#8be9fd",
  },
  white: {
    ralsei: -47,
    background: "#f9e2ff",
    buttonText: "white",
    themeButton: "black",
    themeButtonText: "white",
    buttonBorder: "black",
    themeButtonShadow: "#0000004d",
    allAnimationsButton: "#ff3eb7",
    animationButton: "#38705e",
    allAnimationButtonHover:"#ff72cb",
    animationButtonHover:"#4ba085",
    allAnimationButtonFocus:"#ff72cb",
    animationButtonFocus:"#4ba085",
    box: "#ffffffd7",
    boxBorder: "#ffffff",
    divBorder: "#f0c0fd",
  },
};

function changeTheme() {
  theme = theme === THEME.black ? THEME.white : THEME.black;
  for (const [key, value] of Object.entries(theme)) {
    document.documentElement.style.setProperty(`--${key}`, value);
  }; 
  document.querySelector("link[rel='icon']").href = `./image/${theme.ralsei}-favicon.ico`;
}

window.onload = () => {
  theme = THEME.white;
  changeTheme()
}

const ELEMENT = document.querySelector("#spriteSheet");
let animation = RALSEI.normal;
let frame = 0;
let intervalId; 

const startAnimation = () => {
  if (intervalId) clearInterval(intervalId);

  intervalId = setInterval(() => {
    ELEMENT.style.objectPosition = `${(frame + animation[0]) * -49}px ${theme.ralsei}px`;
    frame = (frame + 1) % animation[1];
  }, 1000 / animation[2]);
};


const ralseiAnimation = (frames) => {
  animation = RALSEI[frames];
  frame = 0; 
  startAnimation(); 
};


window.onload = () => {
  theme = THEME.white;
  changeTheme();
  startAnimation(); 
};
