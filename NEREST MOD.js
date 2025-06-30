// ==UserScript==
// @name         NEREST MOD V22 FINAL
// @match        *://*.moomoo.io/*
// @run-at       document_idle
// @grant        none
// @icon         https://png.pngtree.com/png-clipart/20240120/original/pngtree-black-heart-png-image_14138963.png
// @namespace    nice
// @version      22
// @description  Fearful
// @author       NEREST PROJECT
// ==/UserScript==

(function() {
    'use strict';

    const TOKENS_URL = 'https://mrnegotiv1.github.io/tokens/tokes/tokens.json?';

    async function checkToken() {
        try {

            const response = await fetch(TOKENS_URL);
            if (!response.ok) {
                alert('Failed to load token list. Try again later.');
                return;
            }
            const tokens = await response.json();
            const today = new Date();
            let entry;

            do {
                const input = prompt('Enter your token:');
                if (!input) {
                    alert('Token is required to continue.');
                    continue;
                }
                entry = tokens.find(item => item.token === input.trim());

                if (!entry) {
                    alert('Token not found. Please check and try again.');
                    entry = null;
                    continue;
                }
                if (!entry.active) {
                    alert('Token is not active. Contact the administrator.');
                    entry = null;
                    continue;
                }
                if (new Date(entry.expiry_date) < today) {
                    alert('Token expired: ' + entry.expiry_date);
                    entry = null;
                    continue;
                }

            } while (!entry);

            console.log('Token verified:', entry.user);
        } catch (e) {
            console.error('Error checking token:', e);
            alert('Error checking token.');
        }
    }

    checkToken();
})();

/*
  // CHANGE LOG:
  Added perfect Anti-insta
  ADD Perfect replacer
  Added anti-Push
  Added skinSelector
  Minor upgrade heal predictions
  Added sync for serveral occ(asians)
*/

let freakbobo = 3;
let pls = console.log;

pls("why are you reading the console?");

let whereverifybutton = document.querySelector("#altcha_checkbox")
function clicktheverify() {
    if (whereverifybutton) {
        whereverifybutton.click()
    }
}

setInterval(clicktheverify, 10);
document.getElementById("gameName").innerHTML = "nerest_mod_"
setTimeout( () => {
    document.getElementById("gameName").innerHTML = "NEREST_+"
    setTimeout( () => {
        document.getElementById("gameName").innerHTML = "NEREST_+OD"
        setTimeout( () => {
            document.getElementById("gameName").innerHTML = "NERE_+OD"
            setTimeout( () => {
                document.getElementById("gameName").innerHTML = "NERESR_+TOP"
                setTimeout( () => {
                    document.getElementById("gameName").innerHTML = "NERES_+_OD"
                    setTimeout( () => {
                        document.getElementById("gameName").innerHTML = "NERE_+_MOD"
                        setTimeout( () => {
                            document.getElementById("gameName").innerHTML = "NER_+T_MOD"
                            setTimeout( () => {
                                document.getElementById("gameName").innerHTML = "NE_+ST"
                                setTimeout( () => {
                                    document.getElementById("gameName").innerHTML = "N_+EST_MOD"
                                    setTimeout( () => {
                                        document.getElementById("gameName").innerHTML = "_+RE_+MOD"
                                        setTimeout( () => {
                                            document.getElementById("gameName").innerHTML = "NEREST_MOD"
                                            setTimeout( () => {
                                                document.getElementById("gameName").style.color = "#D8DEE7";
                                                setTimeout( () => {
                                                }, 200);
                                            }, 200);
                                        }, 200);
                                    }, 200);
                                }, 200);
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }, 200);
        }, 200);
    }, 200);
}, 200 + freakbobo);

const guideCard = document.getElementById('guideCard');

// Add event listener for hover to add the 'moved' class
guideCard.addEventListener('mouseenter', () => {
  guideCard.classList.add('moved'); // Add 'moved' class on hover
});
$("#enterGame").click(() => {
    selectSkinColor("10")
});
setTimeout(() => {
}, 20);
let editMainMenu = `
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap" rel="stylesheet">
<style>
#menuContainer {
    width: 100%;
    white-space: nowrap;
    text-align: center;
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    background-image: url("https://usagif.com/wp-content/uploads/2022/4hv9xm/tokyo-ghoul-acegif-48.gif");
    background-size: cover;
    background-position: center;
}
body {
    font-family: 'Orbitron', sans-serif;
    background-color: #0f0f0f;
}

.menuClass, .menuB {
    font-family: 'Orbitron', sans-serif;
}

.menuB, .checkB {
    transition: all 0.3s ease;
}

.menuB {
    background: linear-gradient(145deg, #222, #111);
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 16px;
    border: none;
}

.menuB:hover {
    background: linear-gradient(145deg, #333, #222);
    box-shadow: 0 0 10px cyan;
    transform: scale(1.05);
}

#menuDiv {
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0, 191, 255, 0.2);
}

/* Стили для меню #setupCard */
#setupCard {
  border-radius: 10px;
  position: absolute;
  left: 590px;
  top: 1px;
  background: #1a1919;
  box-shadow: 0px 0px 5px #fff;
  transition: box-shadow 0.3s ease;
}

#setupCard:hover,
#setupCard:active {
  box-shadow: 0px 0px 10px #ffffff;
}

/* Стили для меню #guideCard */
#guideCard {
  border-radius: 10px;
  position: absolute;
  left: 590px;
  top: 1px;
  background: #1a1919;
  box-shadow: 0px 0px 5px #ffffff;
  opacity: 1; /* Make sure it's visible initially */
  transition: box-shadow 0.3s ease, transform 0.3s ease, opacity 0.3s ease; /* Add transition for opacity */
}

/* When the card is hovered or active, it will fade out and move 358px to the right */
#guideCard:hover,
#guideCard:active {
  box-shadow: 0px 0px 10px #ffffff;
  opacity: 0; /* Fade out */
  transform: translateX(358px); /* Moves the card 346px to the right */
}

/* New class to keep the card in its moved position and reappear */
#guideCard.moved {
  opacity: 1; /* Reappear fully */
  transform: translateX(358px); /* Keeps it 358px to the right */
}

/* Прочие стили остаются без изменений */
#nameInput::selection {
  background: #1a1919;
}

#guideCard::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background-color: rgba(0, 0, 0, 0);
}

#mainMenu {
    background-image: url("https://cojo.ru/wp-content/uploads/2024/01/cherno-belye-gifki-anime-1.gif");
    background-size: cover;
}

.menuCard {
  background: #1a1919;
  text-align: center;
  box-shadow: inset 0px 0px 0px black;
}
/.snowflake {
  /color: #3b0f10;
  /font-size: 3em;
  /font-family: Arial, sans-serif;
  /text-shadow: 0 0 6px #fff;
  /position: fixed;
  /top: -10%;
  /z-index: 9999;
  /user-select: none;
  /cursor: default;
  /animation: snowflakes-fall 10s linear infinite, snowflakes-shake 3s ease-in-out infinite;
/}

@keyframes snowflakes-fall {
  0% { top: -10%; }
  100% { top: 100%; }
}

@keyframes snowflakes-shake {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(80px); }
}

/* Прочие стили остаются без изменений */
#nameInput::selection {
  background: #828282;
}



.menuCard {
  background: #1a1919;
  text-align: center;
  box-shadow: inset 0px 0px 0px black;
}
</style>
</head>
<body>



<div id="snowContainer"></div>

<script>
(function() {
  const amount = 22;
  const container = document.getElementById("snowContainer");

  for(let i = 0; i < amount; i++){
      createSnowflake();
  }

  function createSnowflake(){
      const txt = ["☿","♂","♃","♄","⛢","⯉","♆","🜨","☿"]
      let snow = document.createElement("div");
      snow.innerText = txt[+(Math.random() > 5)];
      container.appendChild(snow);
      snow.classList.add('snowflake');
      snow.style.left = Math.random() * 100 + "%";
      let d = ~~(Math.random() * 20);
      snow.style.animationDelay = d + 's, ' + d + 's';
  }

})();
</script>

</style>


`;
$("#mainMenu").append(editMainMenu);
document.getElementById("partyButton").remove();
document.getElementById("joinPartyButton").remove();
document.getElementById("linksContainer2").remove();
document.getElementById("gameName").style.font = "120px  zamruds";
document.getElementById("gameName").style.textShadow = "0px 0px 10px rgba(0, 191, 255, 0.5)"; // Используем rgba для задания прозрачного голубого цвета
document.getElementById("gameName").style.marginTop = "-200px";
document.getElementById("gameName").innerHTML = "cow game";
let founda = false;
let antiSp = false;
let testMode = window.location.hostname == "127.0.0.1";
let scriptTags = document.getElementsByTagName("script");
for(let i = 0; i < scriptTags.length; i++) {
    if(scriptTags[i].src.includes("index-f3a4c1ad.js") && !founda) {
        scriptTags[i].remove();
        founda = true;
        break;
    }
}
document.addEventListener("keydown", function(event) {
    if(event.keyCode === 192) {
        const chatHolder = document.getElementById("gameUI");
        if(chatHolder) {
            const currentDisplay = chatHolder.style.display;
            chatHolder.style.display = currentDisplay === "none" ? "block" : "none";
        }
    }
});
var styleItem = document.createElement("style");
styleItem.type = "text/css";
styleItem.appendChild(document.createTextNode(`
#suggestBox {
  width: 355px;
  border-radius: 3px;
  background-color: rgba(0,0,0,0.5);
  margin: auto;
  text-align: left;
  z-index: 49;
  pointer-events: auto;
  position: relative;
  bottom: 3.5px;
  overflow-y: auto;
}
#suggestBox div {
  background-color: rgba(255,255,255,0);
  color: rgba(255,255,255,1);
  transition: background-color 0.3s, color 0.3s;
}
#suggestBox div:hover {
  background-color: rgba(255,255,255,0.2);
  color: rgba(0,0,0,1);
}
.suggestBoxHard {
  color: rgba(255,255,255,1);
  font-size: 18px;
}
.suggestBoxLight {
  color: rgba(255,255,255,0.7);
  font-size: 18px;
}
`));
document.head.appendChild(styleItem);
window.addEventListener("load", function() {
    var allianceButton = document.getElementById("allianceButton");
    var storeButton = document.getElementById("storeButton");
    if(storeButton) {
        storeButton.style.right = "26px";
        storeButton.style.top = "420px";
    }
    if(allianceButton) {
        allianceButton.style.right = "26px";
        allianceButton.style.top = "479px";
    }
});

function getEl(id) {
    return document.getElementById(id);
}
let newFont = document.createElement("link");
newFont.rel = "stylesheet";
newFont.href = "https://fonts.googleapis.com/css?family=Ubuntu:700";
newFont.type = "text/css";
document.body.append(newFont);
let min = document.createElement("script");
min.src = "https://rawgit.com/kawanet/msgpack-lite/master/dist/msgpack.min.js";
document.body.append(min);
window.oncontextmenu = function() {
    return false;
};
let config = window.config;
// CLIENT:
config.clientSendRate = 9; // Aim Packet Send Rate
config.serverUpdateRate = 9;
// UI:
config.deathFadeout = 0;
config.playerCapacity = 9999;
// CHECK IN SANDBOX:
config.isSandbox = window.location.hostname == "sandbox.moomoo.io";
// CUSTOMIZATION:
config.skinColors = ["#bf8f54", "#cbb091", "#896c4b",
                     "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3",
                     "#8bc373", "#91b2db"
                    ];
config.weaponVariants = [{
    id: 0,
    src: "",
    xp: 0,
    val: 1,
}, {
    id: 1,
    src: "_g",
    xp: 3000,
    val: 1.1,
}, {
    id: 2,
    src: "_d",
    xp: 7000,
    val: 1.18,
}, {
    id: 3,
    src: "_r",
    poison: true,
    xp: 12000,
    val: 1.18,
}, {
    id: 4,
    src: "_e",
    poison: true,
    heal: true,
    xp: 24000,
    val: 1.18,
}, ];
// VISUAL:
config.anotherVisual = true;
config.useWebGl = false;
config.resetRender = true;

function waitTime(timeout) {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, timeout);
    });
}
let botSkts = [];
// STORAGE:
let canStore;
if(typeof Storage !== "undefined") {
    canStore = true;
}

function saveVal(name, val) {
    if(canStore) localStorage.setItem(name, val);
}

function deleteVal(name) {
    if(canStore) localStorage.removeItem(name);
}

function getSavedVal(name) {
    if(canStore) return localStorage.getItem(name);
    return null;
}
// CONFIGS:
let gC = function(a, b) {
    try {
        let res = JSON.parse(getSavedVal(a));
        if(typeof res === "object") {
            return b;
        } else {
            return res;
        }
    } catch(e) {
        alert("dieskid");
        return b;
    }
};

function setCommands() {
    return {
        help: {
            desc: "Show Commands",
            action: function(message) {
                for(let cmds in commands) {
                    addMenuChText("/" + cmds, commands[cmds].desc, "lime", 1);
                }
            },
        },
        clear: {
            desc: "Clear Chats",
            action: function(message) {
                resetMenuChText();
            },
        },
        debug: {
            desc: "Debug Mod For Development",
            action: function(message) {
                addDeadPlayer(player);
                addMenuChText("Debug", "Done", "#99ee99", 1);
            },
        },
        /*        "play": {
          desc: "Play Music ( /play [link] )",
          action: function(message) {
              let link = message.split(" ");
              if (link[1]) {
                  let audio = new Audio(link[1]);
                  audio.play();
              } else {
                  addMenuChText("Warn", "Enter Link ( /play [link] )", "#99ee99", 1);
              }
          }
      },*/
        bye: {
            desc: "Leave Game",
            action: function(message) {
                window.leave();
            },
        },
    };
}

function setConfigs() {
    return {
        killChat: false,
        spikeBreak: true,
        autoBuy: true,
        autoBuyEquip: true,
        autoPush: true,
        revTick: true,
        spikeTick: true,
        predictTick: true,
        autoPlace: true,
        autoReplace: true,
        antiTrap: true,
        slowOT: false,
        attackDir: false,
        showDir: false,
        autoRespawn: false,
        samuraiInsat: true,
    };
}
let commands = setCommands();
let configs = setConfigs();
window.removeConfigs = function() {
    for(let cF in configs) {
        deleteVal(cF, configs[cF]);
    }
};
for(let cF in configs) {
    configs[cF] = gC(cF, configs[cF]);
}
// MENU FUNCTIONS:
window.changeMenu = function() {};
window.debug = function() {};
window.wasdMode = function() {};
// PAGE 1:
window.startGrind = function() {};
// PAGE 3:
window.connectFillBots = function() {};
window.destroyFillBots = function() {};
window.tryConnectBots = function() {};
window.destroyBots = function() {};
window.resBuild = function() {};
window.toggleBotsCircle = function() {};
window.toggleVisual = function() {};
// SOME FUNCTIONS:
window.prepareUI = function() {};
window.leave = function() {};
class deadfuturechickenmodrevival {
    constructor(flarez, lore) {
        this.inGame = false;
        this.lover = flarez + lore;
        this.baby = "ae86";
        this.isBlack = 0;
        this.webSocket = undefined;
        this.checkBaby = function() {
            this.baby !== "ae86" ? this.isBlack++ : this.isBlack--;
            if(this.isBlack >= 1) return "bl4cky";
            return "noting for you";
        };
        this.x2 = 0;
        this.y2 = 0;
        this.chat = "Imagine playing this badass game XDDDDD";
        this.summon = function(tmpObj) {
            this.x2 = tmpObj.x;
            this.y2 = tmpObj.y;
            this.chat = tmpObj.name + " ur so bad XDDDD";
        };
        this.commands = function(cmd) {
            cmd == "rv3link" && window.open("https://florr.io/");
            cmd == "woah" && window.open("https://www.youtube.com/watch?v=MO0AGukzj6M");
            return cmd;
        };
        this.dayte = "11yearold";
        this.memeganoob = "69yearold";
        this.startDayteSpawn = function(tmpObj) {
            let ratio = setInterval(() => {
                this.x2 = tmpObj.x + 20;
                this.y2 = tmpObj.y - 20;
                this.chat = "UR SO BAD LOL";
                if(tmpObj.name == "ae86") {
                    this.chat = "omg ae86 go run";
                    setTimeout(() => {
                        this.inGame = false;
                        clearInterval(ratio);
                    }, 1000);
                }
            }, 1234);
        };
        this.AntiChickenModV69420 = function(tmpObj) {
            return "!c!dc user " + tmpObj.name;
        };
    }
}
class HtmlAction {
    constructor(element) {
        this.element = element;
    }
    add(code) {
        if(!this.element) return undefined;
        this.element.innerHTML += code;
    }
    newLine(amount) {
        let result = `<br>`;
        if(amount > 0) {
            result = ``;
            for(let i = 0; i < amount; i++) {
                result += `<br>`;
            }
        }
        this.add(result);
    }
    checkBox(setting) {
        let newCheck = `<input type = "checkbox"`;
        setting.id && (newCheck += ` id = ${setting.id}`);
        setting.style && (newCheck += ` style = ${setting.style.replaceAll(" ", "")}`);
        setting.class && (newCheck += ` class = ${setting.class}`);
        setting.checked && (newCheck += ` checked`);
        setting.onclick && (newCheck += ` onclick = ${setting.onclick}`);
        newCheck += `>`;
        this.add(newCheck);
    }
    text(setting) {
        let newText = `<input type = "text"`;
        setting.id && (newText += ` id = ${setting.id}`);
        setting.style && (newText += ` style = ${setting.style.replaceAll(" ", "")}`);
        setting.class && (newText += ` class = ${setting.class}`);
        setting.size && (newText += ` size = ${setting.size}`);
        setting.maxLength && (newText += ` maxLength = ${setting.maxLength}`);
        setting.value && (newText += ` value = ${setting.value}`);
        setting.placeHolder && (newText += ` placeHolder = ${setting.placeHolder.replaceAll(
            " ",
            "&nbsp;"
        )}`);
        newText += `>`;
        this.add(newText);
    }
    select(setting) {
        let newSelect = `<select`;
        setting.id && (newSelect += ` id = ${setting.id}`);
        setting.style && (newSelect += ` style = ${setting.style.replaceAll(" ", "")}`);
        setting.class && (newSelect += ` class = ${setting.class}`);
        newSelect += `>`;
        for(let options in setting.option) {
            newSelect += `<option value = ${setting.option[options].id}`;
            setting.option[options].selected && (newSelect += ` selected`);
            newSelect += `>${options}</option>`;
        }
        newSelect += `</select>`;
        this.add(newSelect);
    }
    button(setting) {
        let newButton = `<button`;
        setting.id && (newButton += ` id = ${setting.id}`);
        setting.style && (newButton += ` style = ${setting.style.replaceAll(" ", "")}`);
        setting.class && (newButton += ` class = ${setting.class}`);
        setting.onclick && (newButton += ` onclick = ${setting.onclick}`);
        newButton += `>`;
        setting.innerHTML && (newButton += setting.innerHTML);
        newButton += `</button>`;
        this.add(newButton);
    }
    selectMenu(setting) {
        let newSelect = `<select`;
        if(!setting.id) {
            alert("please put id skid");
            return;
        }
        window[setting.id + "Func"] = function() {};
        setting.id && (newSelect += ` id = ${setting.id}`);
        setting.style && (newSelect += ` style = ${setting.style.replaceAll(" ", "")}`);
        setting.class && (newSelect += ` class = ${setting.class}`);
        newSelect += ` onchange = window.${setting.id + "Func"}()`;
        newSelect += `>`;
        let last;
        let i = 0;
        for(let options in setting.menu) {
            newSelect += `<option value = ${"option_" + options} id = ${
      "O_" + options
        }`;
            setting.menu[options] && (newSelect += ` checked`);
            newSelect += ` style = "color: ${
      setting.menu[options] ? "#000" : "#fff"
        }; background: ${
      setting.menu[options] ? "#8ecc51" : "#cc5151"
        };">${options}</option>`;
            i++;
        }
        newSelect += `</select>`;
        this.add(newSelect);
        i = 0;
        for(let options in setting.menu) {
            window[options + "Func"] = function() {
                setting.menu[options] = getEl("check_" + options).checked ? true : false;
                saveVal(options, setting.menu[options]);
                getEl("O_" + options).style.color = setting.menu[options] ? "#000" : "#fff";
                getEl("O_" + options).style.background = setting.menu[options] ? "#8ecc51" : "#cc5151";
                //getEl(setting.id).style.color = setting.menu[options] ? "#8ecc51" : "#cc5151";
            };
            this.checkBox({
                id: "check_" + options,
                style: `display: ${i == 0 ? "inline-block" : "none"};`,
                class: "checkB",
                onclick: `window.${options + "Func"}()`,
                checked: setting.menu[options],
            });
            i++;
        }
        last = "check_" + getEl(setting.id).value.split("_")[1];
        window[setting.id + "Func"] = function() {
            getEl(last).style.display = "none";
            last = "check_" + getEl(setting.id).value.split("_")[1];
            getEl(last).style.display = "inline-block";
            //getEl(setting.id).style.color = setting.menu[last.split("_")[1]] ? "#8ecc51" : "#fff";
        };
    }
}
class Html {
    constructor() {
        this.element = null;
        this.action = null;
        this.divElement = null;
        this.startDiv = function(setting, func) {
            let newDiv = document.createElement("div");
            setting.id && (newDiv.id = setting.id);
            setting.style && (newDiv.style = setting.style);
            setting.class && (newDiv.className = setting.class);
            this.element.appendChild(newDiv);
            this.divElement = newDiv;
            let addRes = new HtmlAction(newDiv);
            typeof func == "function" && func(addRes);
        };
        this.addDiv = function(setting, func) {
            let newDiv = document.createElement("div");
            setting.id && (newDiv.id = setting.id);
            setting.style && (newDiv.style = setting.style);
            setting.class && (newDiv.className = setting.class);
            setting.appendID && getEl(setting.appendID).appendChild(newDiv);
            this.divElement = newDiv;
            let addRes = new HtmlAction(newDiv);
            typeof func == "function" && func(addRes);
        };
    }
    set(id) {
        this.element = getEl(id);
        this.action = new HtmlAction(this.element);
    }
    resetHTML(text) {
        if(text) {
            this.element.innerHTML = ``;
        } else {
            this.element.innerHTML = ``;
        }
    }
    setStyle(style) {
        this.element.style = style;
    }
    setCSS(style) {
        this.action.add(`<style>` + style + `</style>`);
    }
}
let HTML = new Html();
let menuDiv = document.createElement("div");
menuDiv.id = "menuDiv";
menuDiv.draggable = true;
menuDiv.addEventListener("dragstart", function(e) {
    e.dataTransfer.setData("text/plain", "");
});
document.addEventListener("dragover", function(e) {
    menuDiv.style.left = e.clientX - menuDiv.offsetWidth / 2 + "px";
    menuDiv.style.top = e.clientY - menuDiv.offsetHeight / 2 + "px";
});
document.body.appendChild(menuDiv);
HTML.set("menuDiv");
HTML.setStyle(`
          position: absolute;
          left: 20px;
          top: 20px;
          `);
HTML.resetHTML();
HTML.setCSS(`
         body {
    background-color: #1a1a1a;
    color: #fff;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-image: url('https://i.gifer.com/72j.gif');
}

                .menuClass{
                color: #fff;
                font-size: 31px;
                text-align: left;
                padding: 10px;
                padding-top: 7px;
                padding-bottom: 5px;
                width: 600px;
                background-image: url("https://media1.tenor.com/m/VUBW8cgfiVIAAAAd/emo.gif");
    background-size: cover;      /* Картинка растянется по ширине/высоте */
    background-position: center;  /* Центрирование */
    background-repeat: no-repeat; /* Чтобы не дублировалась */
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                border-radius: 4px;
            }
            .menuC {
                display: none;
                font-family: "HammerSmith One";
                font-size: 12px;
                max-height: 180px;
                overflow-y: scroll;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            .menuB {
                text-align: center;
                background-color: rgb(25, 25, 25);
                color: #fff;
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                border-radius: 4px;
                border: 2px solid #000;
                cursor: pointer;
            }
            .menuB:hover {
                border: 2px solid #fff;
            }
            .menuB:active {
                color: rgb(25, 25, 25);
                background-color: rgb(200, 200, 200);
            }
            .customText {
                color: #000;
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                border-radius: 4px;
                border: 2px solid #000;
            }
            .customText:focus {
                background-color: yellow;
            }
            .checkB {
                position: relative;
                top: 2px;
                accent-color: #888;
                cursor: pointer;
            }
            .Cselect {
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                border-radius: 4px;
                background-color: rgb(75, 75, 75);
                color: #fff;
                border: 1px solid #000;
            }
            #menuChanger {
                position: absolute;
                right: 10px;
                top: 10px;
                background-color: rgba(0, 0, 0, 0);
                color: #fff;
                border: none;
                cursor: pointer;
            }
            #menuChanger:hover {
                color: #000;
            }
            ::-webkit-scrollbar {
                width: 10px;
            }
            ::-webkit-scrollbar-track {
                opacity: 0;
            }
            ::-webkit-scrollbar-thumb {
                background-color: rgb(25, 25, 25);
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                border-radius: 4px;
            }
            ::-webkit-scrollbar-thumb:active {
                background-color: rgb(230, 230, 230);
            }

`);
HTML.startDiv({
    id: "menuHeadLine",
    class: "menuClass",
}, (html) => {
    html.add(`NEREST_MOD V22`);
    html.button({
        id: "menuChanger",
        class: "material-icons",
        innerHTML: `sync`,
        onclick: "window.changeMenu()",
    });
    HTML.addDiv({
        id: "menuButtons",
        style: "display: block; overflow-y: visible;",
        class: "menuC",
        appendID: "menuHeadLine",
    }, (html) => {
        html.button({
            class: "menuB",
            innerHTML: "Debug",
            onclick: "window.debug()",
        });
    });
    HTML.addDiv({
        id: "menuMain",
        style: "display: block",
        class: "menuC",
        appendID: "menuHeadLine",
    });
    html.newLine();
    html.add(`Auto-Grinder: `);
    html.checkBox({
        id: "weaponGrind",
        class: "checkB",
        onclick: "window.startGrind()",
    });
    html.newLine();
    html.add(`instaTicky: `);
    html.checkBox({id: "instaTicky", class: "checkB", checked: false});
    html.newLine(2);
    html.add(`SyncType: `);
    html.select({
        id: "syncType",
        class: "Cselect",
        option: {
            "InstaSync": {
                id: "s1",
            },
            "ShootSync": {
                id: "s2",
                selected: true
            }
        }
    });
    html.newLine();
    html.add("Sync: ");
    html.checkBox({
        id: "musketSync",
        class: "checkB",
        checked: true
    });
    html.newLine(2);
    HTML.addDiv({
        style: "font-size: 30px; color: #4f4f4f;",
        appendID: "menuMain",
    }, (html) => {
        html.add(`_______________`);
    });
    html.add(`Anti-Push: `);
    html.checkBox({
        id: "antiPush",
        class: "checkB",
        checked: true,
    });
    html.newLine();
    html.add(`Avoid-Spike: `);
    html.checkBox({
        id: "avoidspike",
        class: "checkB",
        checked: true
    });
    html.newLine();
    html.add(`Anti-Insta: `);
    html.checkBox({
        id: "antiInsta",
        class: "checkB",
        checked: true,
    });
    html.newLine();
});
HTML.addDiv({
    id: "menuConfig",
    class: "menuC",
    appendID: "menuHeadLine",
}, (html) => {
    html.add(`AutoPlacer Placement Tick: `);
    html.text({
        id: "autoPlaceTick",
        class: "customText",
        value: "1",
        size: "2em",
        maxLength: "1",
    });
    html.newLine();
    html.add("Zoom: ");
    html.select({
        id: "vision",
        class: "Cselect",
        option: {
            x1: {
                id: "1",
            },
            "x1.2": {
                id: "1.2",
            },
            "x1.4": {
                id: "1.4",
            },
            "x1.5": {
                id: "1.5",
                selected: true,
            },
            "x1.6": {
                id: "1.6",
            },
            "x1.8": {
                id: "1.8",
            },
            x2: {
                id: "2",
            },
        },
    });
    html.newLine();
    html.add(`Configs: `);
    html.selectMenu({
        id: "configsChanger",
        class: "Cselect",
        menu: configs,
    });
    html.newLine();
    html.add(`InstaKill Type: `);
    html.select({
        id: "instaType",
        class: "Cselect",
        option: {
            OneShot: {
                id: "oneShot",
                selected: true,
            },
            Spammer: {
                id: "spammer",
            },
        },
    });
    html.newLine();
    html.add(`AntiBull Type: `);
    html.select({
        id: "antiBullType",
        class: "Cselect",
        option: {
            "Disable AntiBull": {
                id: "noab",
                selected: true,
            },
            "When Reloaded": {
                id: "abreload",
            },
            "Primary Reloaded": {
                id: "abalway",
            },
        },
    });
    html.newLine();
    html.add(`AutoPlaceType: `);
    html.select({
        id: "autoPlacetype",
        class: "Cselect",
        option: {
            Smart: {
                id: "smart",
                selected: true
            },
            MagicPlace: {
                id: "magicplace",
            },
            AiPlace: {
                id: "aiplace",
            },
            Spamtrap: {
                id: "spamtrap",
            },
            Spamtrap2: {
                id: "spamtrap2",
            },
            Honor: {
                id: "ramdomplc",
            }
        }
    });
    html.newLine();
    html.add(`Backup Nobull Insta: `);
    html.checkBox({
        id: "backupNobull",
        class: "checkB",
        checked: true,
    });
    html.newLine();
    html.add(`Turret Gear Combat Assistance: `);
    html.checkBox({
        id: "turretCombat",
        class: "checkB",
        checked: true,
    });
    html.newLine();
    html.add(`Safe AntiSpikeTick: `);
    html.checkBox({
        id: "safeAntiSpikeTick",
        class: "checkB",
        checked: true,
    });
    html.newLine();
});
HTML.addDiv({
    id: "menuOther",
    class: "menuC",
    appendID: "menuHeadLine",
}, (html) => {
    html.button({
        class: "menuB",
        innerHTML: "Connect Bots",
        onclick: "window.tryConnectBots()",
    });
    html.button({
        class: "menuB",
        innerHTML: "Disconnect Bots",
        onclick: "window.destroyBots()",
    });
    html.newLine();
    html.button({
        class: "menuB",
        innerHTML: "Connect FBots",
        onclick: "window.connectFillBots()",
    });
    html.button({
        class: "menuB",
        innerHTML: "Disconnect FBots",
        onclick: "window.destroyFillBots()",
    });
    html.newLine();
    html.button({
        class: "menuB",
        innerHTML: "Reset Break Objects",
        onclick: "window.resBuild()",
    });
    html.newLine();
    html.add(`Break Objects Range: `);
    html.text({
        id: "breakRange",
        class: "customText",
        value: "700",
        size: "3em",
        maxLength: "4",
    });
    html.newLine();
    html.add(`Predict Movement Type: `);
    html.select({
        id: "predictType",
        class: "Cselect",
        option: {
            "Disable Render": {
                id: "disableRender",
                selected: true,
            },
            "X/Y and 2": {
                id: "pre2",
            },
            "X/Y and 3": {
                id: "pre3",
            },
        },
    });
    html.newLine();
    html.add(`Render Placers: `);
    html.checkBox({
        id: "placeVis",
        class: "checkB",
    });
    html.newLine();
    html.add(`Bot Mode: `);
    html.select({
        id: "mode",
        class: "Cselect",
        option: {
            "Clear Building": {
                id: "clear",
                selected: true,
            },
            Sync: {
                id: "zync",
            },
            Search: {
                id: "zearch",
            },
            "Clear Everything": {
                id: "fuckemup",
            },
            Flex: {
                id: "flex",
            },
        },
    });
    html.newLine(2);
    html.button({
        class: "menuB",
        innerHTML: "Toggle Fbots Circle",
        onclick: "window.toggleBotsCircle()",
    });
    html.newLine();
    html.add(`Circle Rad: `);
    html.text({
        id: "circleRad",
        class: "customText",
        value: "200",
        size: "3em",
        maxLength: "4",
    });
    html.newLine();
    html.add(`Rad Speed: `);
    html.text({
        id: "radSpeed",
        class: "customText",
        value: "0.1",
        size: "2em",
        maxLength: "3",
    });
    html.newLine();
    html.add(`Bot Zetup Type: `);
    html.select({
        id: "setup",
        class: "Cselect",
        option: {
            "Dagger Musket": {
                id: "dm",
            },
            "Katana Hammer": {
                id: "kh",
                selected: true,
            },
            "Dagger Repeater-Crossbow": {
                id: "dr",
            },
            "Zhort-Zword Muzket": {
                id: "zd",
            },
        },
    });
    html.newLine(2);
    html.add(`Cross World: `);
    html.checkBox({
        id: "funni",
        class: "checkB",
    });
    html.newLine();
    html.button({
        class: "menuB",
        innerHTML: "Toggle Another Visual",
        onclick: "window.toggleVisual()",
    });
    html.newLine();
});
let menuChatDiv = document.createElement("div");
menuChatDiv.id = "menuChatDiv";
document.body.appendChild(menuChatDiv);
HTML.set("menuChatDiv");
HTML.setStyle(`
          position: absolute;
          display: none;
          left: 0px;
          top: 25px;
        //  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.65);
          `);
HTML.resetHTML();
HTML.setCSS(`
                  #mapDisplay{
        left: 950px;
        top: 15px;
    }

.chMainDiv.faded {
  opacity: 0;
}
    .chDiv{
    left: 1100px;
    top: 45px;
        color: #fff;
        padding: 6px;
        padding-bottom: 10px;
        width: 340px;
        height: 280px;
        background-color: rgba(0, 0, 0, 0);
        transition: background-color 0.65s ease;
        border-radius: 4px;
        transition: 0.5s;
        position: relative;
    }
    .chMainDiv::-webkit-scrollbar {
        display: none;
    }
    .chMainDiv{
        font: 16px Ubuntu;
        max-height: 236px;
        padding-left: 2px;
        overflow-y: scroll;
        scroll-behavior: smooth;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transition: 0.5s;
        position: absolute;
        bottom: 50px;
        left: 5px;
        width: 95%;
    }
    .chMainBox{
        position: absolute;
        padding: 2px;
        padding-left: 5px;
        bottom: 10px;
        width: 330px;
        height: 30px;
        background-color: rgb(128, 128, 128, 0.35);
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        color: #fff;
        font-family: "Ubuntu";
        font-size: 15px;
        text-shadow: rgb(0, 0, 0) -1.1px -1.1px 0px, rgb(0, 0, 0) 1.1px -1.1px 0px, rgb(0, 0, 0) -1.1px 1.1px 0px, rgb(0, 0, 0) 1.1px 1.1px 0px;
        border: none;
        outline: none;
    }
          `);
HTML.startDiv({
    id: "mChDiv",
    class: "chDiv",
}, (html) => {
    HTML.addDiv({
        id: "mChMain",
        class: "chMainDiv",
        appendID: "mChDiv",
    }, (html) => {});
    html.text({
        id: "mChBox",
        class: "chMainBox",
        //  placeHolder: `To chat click here or press "Enter" key`
    });
});
let menuChats = getEl("mChMain");
let menuChatBox = getEl("mChBox");
let menuCBFocus = false;
let menuChCounts = 0;
menuChatBox.value = "";
menuChatBox.addEventListener("focus", () => {
    menuCBFocus = true;
});
menuChatBox.addEventListener("blur", () => {
    menuCBFocus = false;
});

function addMenuChText(name, message, color, noTimer) {
    HTML.set("menuChatDiv");
    color = color || "white";
    let time = new Date();
    let min = time.getMinutes();
    let hour = time.getHours();
    let text = ``;
    if(!noTimer) text += `${(hour < 10 ? "0" : "") + hour}:${(min < 10 ? "0" : "") + min}`;
    if(name) text += `${(!noTimer ? " - " : "") + name}`;
    if(message) text += `${(name ? ": " : !noTimer ? " - " : "") + message}\n`;
    HTML.addDiv({
        id: "menuChDisp",
        style: `color: ${color}`,
        appendID: "mChMain"
    }, (html) => {
        html.add(text);
    });
    menuChats.scrollTop = menuChats.scrollHeight;
    menuChCounts++;
}

function chch(name, message, color, noTimer) {
    HTML.set("menuChatDiv");
    color = color || "white";
    let time = new Date();
    let text = ``;
    // if (name) text += `${(!noTimer ? " - " : "") + name}`;
    if(message) text += `${(name ? ": " : !noTimer ? "" : "") + message}\n`;
    HTML.addDiv({
        id: "menuChDisp",
        style: `color: ${color}`,
        appendID: "mChMain"
    }, (html) => {
        html.add(text);
    });
    menuChats.scrollTop = menuChats.scrollHeight;
    menuChCounts++;
}

function resetMenuChText() {
    menuChats.innerHTML = ``;
    menuChCounts = 0;
    addMenuChText(null, "Chat '/help' for a list of chat commands.", "white", 1);
}
resetMenuChText();
let menuIndex = 0;
let menus = ["menuMain", "menuConfig", "menuOther"];
window.changeMenu = function() {
    getEl(menus[menuIndex % menus.length]).style.display = "none";
    menuIndex++;
    getEl(menus[menuIndex % menus.length]).style.display = "block";
};
let mStatus = document.createElement("div");
mStatus.id = "status";
getEl("gameUI").appendChild(mStatus);
HTML.set("status");
HTML.setStyle(`
          display: block;
          position: absolute;
          color: #ddd;
          font: 15px Hammersmith One;
          bottom: 215px;
          left: 20px;
          `);
HTML.resetHTML();
HTML.setCSS(`
          .sizing {
              font-size: 15px;
          }
          .mod {
              font-size: 15px;
              display: inline-block;
          }
          `);
HTML.startDiv({
    id: "uehmod",
    class: "sizing",
}, (html) => {
    html.add(`Ping: `);
    HTML.addDiv({
        id: "pingFps",
        class: "mod",
        appendID: "uehmod",
    }, (html) => {
        html.add("None");
    });
    html.newLine();
    html.add(`Packet Loss: `);
    HTML.addDiv({
        id: "packetStatus",
        class: "mod",
        appendID: "uehmod",
    }, (html) => {
        html.add("None");
    });
});
/*function modLog() {
              let logs = [];
              for (let i = 0; i < arguments.length; i++) {
                  logs.push(arguments[i]);
              }
              getEl("modLog").innerHTML = logs;
          }*/
let openMenu = false;
let WS = undefined;
let socketID = undefined;
let useWasd = false;
let secPacket = 0;
let secMax = 120;
let secTime = 1000;
let firstSend = {
    sec: false,
};
let game = {
    tick: 0,
    tickQueue: [],
    tickBase: function(set, tick) {
        if(this.tickQueue[this.tick + tick]) {
            this.tickQueue[this.tick + tick].push(set);
        } else {
            this.tickQueue[this.tick + tick] = [set];
        }
    },
    tickRate: 1000 / config.serverUpdateRate,
    tickSpeed: 0,
    lastTick: performance.now(),
};
let modConsole = [];
let dontSend = false;
let fpsTimer = {
    last: 0,
    time: 0,
    ltime: 0,
};
let lastMoveDir = undefined;
let lastsp = ["cc", 1, "__proto__"];
WebSocket.prototype.nsend = WebSocket.prototype.send;
WebSocket.prototype.send = function(message) {
    if(!WS) {
        WS = this;
        WS.addEventListener("message", function(msg) {
            getMessage(msg);
        });
        WS.addEventListener("close", (event) => {
            if(event.code == 4001) {
                window.location.reload();
            }
        });
    }
    if(WS == this) {
        dontSend = false;
        // EXTRACT DATA ARRAY:
        let data = new Uint8Array(message);
        let parsed = window.msgpack.decode(data);
        let type = parsed[0];
        data = parsed[1];
        // SEND MESSAGE:
        if(type == "6") {
            if(data[0]) {
                // ANTI PROFANITY:
                let profanity = ["cunt", "whore", "fuck", "shit", "faggot", "nigger", "nigga", "dick", "vagina", "minge", "cock", "rape", "cum", "sex", "tits", "penis", "clit", "pussy", "meatcurtain", "jizz", "prune", "douche", "wanker", "damn", "bitch", "dick", "fag", "bastard", ];
                let tmpString;
                profanity.forEach((profany) => {
                    if(data[0].indexOf(profany) > -1) {
                        tmpString = "";
                        for(let i = 0; i < profany.length; ++i) {
                            if(i == 1) {
                                tmpString += String.fromCharCode(0);
                            }
                            tmpString += profany[i];
                        }
                        let re = new RegExp(profany, "g");
                        data[0] = data[0].replace(re, tmpString);
                    }
                });
                // FIX CHAT:
                data[0] = data[0].slice(0, 30);
            }
        } else if(type == "L") {
            // MAKE SAME CLAN:
            data[0] = data[0] + String.fromCharCode(0).repeat(7);
            data[0] = data[0].slice(0, 7);
        } else if(type == "M") {
            // APPLY CYAN COLOR:
            data[0].name = data[0].name == "" ? "unknown" : data[0].name;
            data[0].moofoll = true;
            data[0].skin = data[0].skin == 10 ? "__proto__" : data[0].skin;
            lastsp = [data[0].name, data[0].moofoll, data[0].skin];
        } else if(type == "D") {
            if(my.lastDir == data[0] || [null, undefined].includes(data[0])) {
                dontSend = true;
            } else {
                my.lastDir = data[0];
            }
        } else if(type == "F") {
            if(!data[2]) {
                dontSend = true;
            } else {
                if(![null, undefined].includes(data[1])) {
                    my.lastDir = data[1];
                }
            }
        } else if(type == "K") {
            if(!data[1]) {
                dontSend = true;
            }
        } else if(type == "S") {
            instaC.wait = !instaC.wait;
            dontSend = true;
        } else if(type == "9") {
            if(data[1]) {
                if(player.moveDir == data[0]) {
                    dontSend = true;
                }
                player.moveDir = data[0];
            } else {
                dontSend = true;
            }
        }
        if(!dontSend) {
            let binary = window.msgpack.encode([type, data]);
            this.nsend(binary);
            // START COUNT:
            if(!firstSend.sec) {
                firstSend.sec = true;
                setTimeout(() => {
                    firstSend.sec = false;
                    secPacket = 0;
                }, secTime);
            }
            secPacket++;
        }
    } else {
        this.nsend(message);
    }
};

function packet(type) {
    // EXTRACT DATA ARRAY:
    let data = Array.prototype.slice.call(arguments, 1);
    // SEND MESSAGE:
    let binary = window.msgpack.encode([type, data]);
    WS.send(binary);
}

function origPacket(type) {
    // EXTRACT DATA ARRAY:
    let data = Array.prototype.slice.call(arguments, 1);
    // SEND MESSAGE:
    let binary = window.msgpack.encode([type, data]);
    WS.nsend(binary);
}
window.leave = function() {
    origPacket("kys", {
        "frvr is so bad": true,
        "sidney is too good": true,
        "dev are too weak": true,
    });
};
//...lol
let io = {
    send: packet,
};

function getMessage(message) {
    let data = new Uint8Array(message.data);
    let parsed = window.msgpack.decode(data);
    let type = parsed[0];
    data = parsed[1];
    let events = {
        A: setInitData, // id: setInitData,
        //B: disconnect,
        C: setupGame, // 1: setupGame,
        D: addPlayer, // 2: addPlayer,
        E: removePlayer, // 4: removePlayer,
        a: updatePlayers, // 33: updatePlayers,
        G: updateLeaderboard, // 5: updateLeaderboard,here
        H: loadGameObject, // 6: loadGameObject,
        I: loadAI, // a: loadAI,
        J: animateAI, // aa: animateAI,
        K: gatherAnimation, // 7: gatherAnimation,
        L: wiggleGameObject, // 8: wiggleGameObject,
        M: shootTurret, // sp: shootTurret,
        N: updatePlayerValue, // 9: updatePlayerValue,
        O: updateHealth, // h: updateHealth,//here
        P: killPlayer, // 11: killPlayer,
        Q: killObject, // 12: killObject,
        R: killObjects, // 13: killObjects,
        S: updateItemCounts, // 14: updateItemCounts,
        T: updateAge, // 15: updateAge,
        U: updateUpgrades, // 16: updateUpgrades,
        V: updateItems, // 17: updateItems,
        X: addProjectile, // 18: addProjectile,
        // Y: remProjectile, // 19: remProjectile,
        //Z: serverShutdownNotice,
        //0: addAlliance,
        //1: deleteAlliance,
        2: allianceNotification, // an: allianceNotification,
        3: setPlayerTeam, // st: setPlayerTeam,
        4: setAlliancePlayers, // sa: setAlliancePlayers,
        5: updateStoreItems, // us: updateStoreItems,
        6: receiveChat, // ch: receiveChat,
        7: updateMinimap, // mm: updateMinimap,
        8: showText, // t: showText,
        9: pingMap, // p: pingMap,
        0: pingSocketResponse,
    };
    if(type == "io-init") {
        socketID = data[0];
    } else {
        if(events[type]) {
            events[type].apply(undefined, data);
        }
    }
}
// MATHS:
Math.lerpAngle = function(value1, value2, amount) {
    let difference = Math.abs(value2 - value1);
    if(difference > Math.PI) {
        if(value1 > value2) {
            value2 += Math.PI * 2;
        } else {
            value1 += Math.PI * 2;
        }
    }
    let value = value2 + (value1 - value2) * amount;
    if(value >= 0 && value <= Math.PI * 2) return value;
    return value % (Math.PI * 2);
};
// REOUNDED RECTANGLE:
CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
    if(w < 2 * r) r = w / 2;
    if(h < 2 * r) r = h / 2;
    if(r < 0) r = 0;
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
    return this;
};
// GLOBAL VALUES:
function resetMoveDir() {
    keys = {};
    io.send("e");
}

function zoomVision() {
    if(maxScreenWidth != config.maxScreenWidth * 1.5 || maxScreenHeight != config.maxScreenHeight * 1.5) {
        maxScreenWidth = config.maxScreenWidth * 1.5;
        maxScreenHeight = config.maxScreenHeight * 1.5;
        resize();
        let targetCamX = player.x + 1920 / 2 / 30;
        let targetCamY = player.y + 1920 / 2 / 30;
        camX = lerp(camX, targetCamX, 0.015);
        camY = lerp(camY, targetCamY, 0.015);
    }
}

function resetZoom() {
    if(maxScreenWidth != config.maxScreenWidth * parseFloat(getEl("vision").value) || maxScreenHeight != config.maxScreenHeight * parseFloat(getEl("vision").value)) {
        maxScreenWidth = config.maxScreenWidth * parseFloat(getEl("vision").value);
        maxScreenHeight = config.maxScreenHeight * parseFloat(getEl("vision").value);
        resize();
        let targetCamX = player.x + 1920 / 2 / 30;
        let targetCamY = player.y + 1920 / 2 / 30;
        camX = lerp(camX, targetCamX, 0.015);
        camY = lerp(camY, targetCamY, 0.015);
    }
}
getEl("vision").onchange = function() {
    resetZoom();
};
let allChats = [];
let ticks = {
    tick: 0,
    delay: 0,
    time: [],
    manage: [],
};
var canAB = false;
let ais = [];
let players = [];
let alliances = [];
let alliancePlayers = [];
let allianceNotifications = [];
let gameObjects = [];
let liztobj = [];
let projectiles = [];
let deadPlayers = [];
let breakObjects = [];
let player;
let playerSID;
let tmpObj;
let enemy = [];
let nears = [];
let near = [];
let my = {
    reloaded: false,
    waitHit: 0,
    autoAim: false,
    revAim: false,
    ageInsta: true,
    reSync: false,
    bullTick: 0,
    anti0Tick: 0,
    antiSync: false,
    safePrimary: function(tmpObj) {
        return [0, 8].includes(tmpObj.primaryIndex);
    },
    safeSecondary: function(tmpObj) {
        return [10, 11, 14].includes(tmpObj.secondaryIndex);
    },
    lastDir: 0,
    autoPush: false,
    pushData: {},
};
// FIND OBJECTS BY ID/SID:
// FIND OBJECTS BY ID/SID:
function findID(tmpObj, tmp) {
    return tmpObj.find((THIS) => THIS.id == tmp);
}

function findSID(tmpObj, tmp) {
    return tmpObj.find((THIS) => THIS.sid == tmp);
}

function findPlayerByID(id) {
    return findID(players, id);
}

function findPlayerBySID(sid) {
    return findSID(players, sid);
}

function findAIBySID(sid) {
    return findSID(ais, sid);
}

function findObjectBySid(sid) {
    return findSID(gameObjects, sid);
}

function findProjectileBySid(sid) {
    return findSID(gameObjects, sid);
}

let adCard = getEl("adCard");
adCard.remove();
let promoImageHolder = getEl("promoImgHolder");
promoImageHolder.remove();

let chatButton = getEl("chatButton");
chatButton.remove();
let gameCanvas = getEl("gameCanvas");
let mainContext = gameCanvas.getContext("2d");
let mapDisplay = getEl("mapDisplay");
let mapContext = mapDisplay.getContext("2d");
mapDisplay.width = 300;
mapDisplay.height = 300;
let storeMenu = getEl("storeMenu");
let storeHolder = getEl("storeHolder");
let upgradeHolder = getEl("upgradeHolder");
let upgradeCounter = getEl("upgradeCounter");
let chatBox = getEl("chatBox");
chatBox.autocomplete = "off";
chatBox.style.textAlign = "center";
chatBox.style.width = "18em";
let chatHolder = getEl("chatHolder");
let actionBar = getEl("actionBar");
let leaderboardData = getEl("leaderboardData");
let itemInfoHolder = getEl("itemInfoHolder");
let menuCardHolder = getEl("menuCardHolder");
let mainMenu = getEl("mainMenu");
let diedText = getEl("diedText");
let screenWidth;
let screenHeight;
let maxScreenWidth = config.maxScreenWidth;
let maxScreenHeight = config.maxScreenHeight;
let pixelDensity = 1;
let delta;
let now;
let lastUpdate = performance.now();
let camX;
let camY;
let tmpDir;
let mouseX = 0;
let mouseY = 0;
let allianceMenu = getEl("allianceMenu");
let waterMult = 1;
let waterPlus = 0;

let outlineColor = "#525252";
let darkOutlineColor = "#3d3f42";
let outlineWidth = 5.5;

let firstSetup = true;
let keys = {};
let moveKeys = {
    87: [0, -1],
    38: [0, -1],
    83: [0, 1],
    40: [0, 1],
    65: [-1, 0],
    37: [-1, 0],
    68: [1, 0],
    39: [1, 0],
};
let attackState = 0;
let inGame = false;

let macro = {};
let mills = {
    place: 0,
    placeSpawnPads: 0
};
let lastDir;

let lastLeaderboardData = [];
// ON LOAD:
let inWindow = true;
window.onblur = function() {
    inWindow = false;
};
window.onfocus = function() {
    inWindow = true;
    if(player && player.alive) {
        // resetMoveDir();
    }
};
let ms = {
    avg: 0,
    max: 0,
    min: 0,
    delay: 0,
};

function pingSocketResponse() {
    let pingTime = window.pingTime;
    const pingDisplay = document.getElementById("pingDisplay");
    pingDisplay.innerText = "";
    if(pingTime > ms.max || isNaN(ms.max)) {
        ms.max = pingTime;
    }
    if(pingTime < ms.min || isNaN(ms.min)) {
        ms.min = pingTime;
    }
    if(pingTime >= 90) {
        let doAutoQ = true;
        healer();
    } else {
        if(player.shameCount < 5) {
            let doAutoQ = false;
        }
    }
}
let placeVisible = [];
/** CLASS CODES */
class Utils {
    constructor() {
        // MATH UTILS:
        let mathABS = Math.abs,
            mathCOS = Math.cos,
            mathSIN = Math.sin,
            mathPOW = Math.pow,
            mathSQRT = Math.sqrt,
            mathATAN2 = Math.atan2,
            mathPI = Math.PI;
        let _this = this;
        // GLOBAL UTILS:
        this.round = function(n, v) {
            return Math.round(n * v) / v;
        };
        this.toRad = function(angle) {
            return angle * (mathPI / 180);
        };
        this.toAng = function(radian) {
            return radian / (mathPI / 180);
        };
        this.randInt = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        this.randFloat = function(min, max) {
            return Math.random() * (max - min + 1) + min;
        };
        this.lerp = function(value1, value2, amount) {
            return value1 + (value2 - value1) * amount;
        };
        this.decel = function(val, cel) {
            if(val > 0) val = Math.max(0, val - cel);
            else if(val < 0) val = Math.min(0, val + cel);
            return val;
        };
        this.getDistance = function(x1, y1, x2, y2) {
            return mathSQRT((x2 -= x1) * x2 + (y2 -= y1) * y2);
        };
        this.getDist = function(tmp1, tmp2, type1, type2) {
            let tmpXY1 = {
                x: type1 == 0 ? tmp1.x : type1 == 1 ? tmp1.x1 : type1 == 2 ? tmp1.x2 : type1 == 3 && tmp1.x3,
                y: type1 == 0 ? tmp1.y : type1 == 1 ? tmp1.y1 : type1 == 2 ? tmp1.y2 : type1 == 3 && tmp1.y3,
            };
            let tmpXY2 = {
                x: type2 == 0 ? tmp2.x : type2 == 1 ? tmp2.x1 : type2 == 2 ? tmp2.x2 : type2 == 3 && tmp2.x3,
                y: type2 == 0 ? tmp2.y : type2 == 1 ? tmp2.y1 : type2 == 2 ? tmp2.y2 : type2 == 3 && tmp2.y3,
            };
            return mathSQRT(
                (tmpXY2.x -= tmpXY1.x) * tmpXY2.x + (tmpXY2.y -= tmpXY1.y) * tmpXY2.y);
        };
        this.getDirection = function(x1, y1, x2, y2) {
            return mathATAN2(y1 - y2, x1 - x2);
        };
        this.getDirect = function(tmp1, tmp2, type1, type2) {
            let tmpXY1 = {
                x: type1 == 0 ? tmp1.x : type1 == 1 ? tmp1.x1 : type1 == 2 ? tmp1.x2 : type1 == 3 && tmp1.x3,
                y: type1 == 0 ? tmp1.y : type1 == 1 ? tmp1.y1 : type1 == 2 ? tmp1.y2 : type1 == 3 && tmp1.y3,
            };
            let tmpXY2 = {
                x: type2 == 0 ? tmp2.x : type2 == 1 ? tmp2.x1 : type2 == 2 ? tmp2.x2 : type2 == 3 && tmp2.x3,
                y: type2 == 0 ? tmp2.y : type2 == 1 ? tmp2.y1 : type2 == 2 ? tmp2.y2 : type2 == 3 && tmp2.y3,
            };
            return mathATAN2(tmpXY1.y - tmpXY2.y, tmpXY1.x - tmpXY2.x);
        };
        this.getAngleDist = function(a, b) {
            let p = mathABS(b - a) % (mathPI * 2);
            return p > mathPI ? mathPI * 2 - p : p;
        };
        this.isNumber = function(n) {
            return typeof n == "number" && !isNaN(n) && isFinite(n);
        };
        this.isString = function(s) {
            return s && typeof s == "string";
        };
        this.kFormat = function(num) {
            return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
        };
        this.sFormat = function(num) {
            let fixs = [{
                num: 1e3,
                string: "k",
            }, {
                num: 1e6,
                string: "m",
            }, {
                num: 1e9,
                string: "b",
            }, {
                num: 1e12,
                string: "q",
            }, ].reverse();
            let sp = fixs.find((v) => num >= v.num);
            if(!sp) return num;
            return(num / sp.num).toFixed(1) + sp.string;
        };
        this.capitalizeFirst = function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
        this.fixTo = function(n, v) {
            return parseFloat(n.toFixed(v));
        };
        this.sortByPoints = function(a, b) {
            return parseFloat(b.points) - parseFloat(a.points);
        };
        this.lineInRect = function(recX, recY, recX2, recY2, x1, y1, x2, y2) {
            let minX = x1;
            let maxX = x2;
            if(x1 > x2) {
                minX = x2;
                maxX = x1;
            }
            if(maxX > recX2) maxX = recX2;
            if(minX < recX) minX = recX;
            if(minX > maxX) return false;
            let minY = y1;
            let maxY = y2;
            let dx = x2 - x1;
            if(Math.abs(dx) > 0.0000001) {
                let a = (y2 - y1) / dx;
                let b = y1 - a * x1;
                minY = a * minX + b;
                maxY = a * maxX + b;
            }
            if(minY > maxY) {
                let tmp = maxY;
                maxY = minY;
                minY = tmp;
            }
            if(maxY > recY2) maxY = recY2;
            if(minY < recY) minY = recY;
            if(minY > maxY) return false;
            return true;
        };
        this.containsPoint = function(element, x, y) {
            let bounds = element.getBoundingClientRect();
            let left = bounds.left + window.scrollX;
            let top = bounds.top + window.scrollY;
            let width = bounds.width;
            let height = bounds.height;
            let insideHorizontal = x > left && x < left + width;
            let insideVertical = y > top && y < top + height;
            return insideHorizontal && insideVertical;
        };
        this.mousifyTouchEvent = function(event) {
            let touch = event.changedTouches[0];
            event.screenX = touch.screenX;
            event.screenY = touch.screenY;
            event.clientX = touch.clientX;
            event.clientY = touch.clientY;
            event.pageX = touch.pageX;
            event.pageY = touch.pageY;
        };
        this.hookTouchEvents = function(element, skipPrevent) {
            let preventDefault = !skipPrevent;
            let isHovering = false;
            // let passive = window.Modernizr.passiveeventlisteners ? {passive: true} : false;
            let passive = false;
            element.addEventListener("touchstart", this.checkTrusted(touchStart), passive);
            element.addEventListener("touchmove", this.checkTrusted(touchMove), passive);
            element.addEventListener("touchend", this.checkTrusted(touchEnd), passive);
            element.addEventListener("touchcancel", this.checkTrusted(touchEnd), passive);
            element.addEventListener("touchleave", this.checkTrusted(touchEnd), passive);

            function touchStart(e) {
                _this.mousifyTouchEvent(e);
                window.setUsingTouch(true);
                if(preventDefault) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                if(element.onmouseover) element.onmouseover(e);
                isHovering = true;
            }

            function touchMove(e) {
                _this.mousifyTouchEvent(e);
                window.setUsingTouch(true);
                if(preventDefault) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                if(_this.containsPoint(element, e.pageX, e.pageY)) {
                    if(!isHovering) {
                        if(element.onmouseover) element.onmouseover(e);
                        isHovering = true;
                    }
                } else {
                    if(isHovering) {
                        if(element.onmouseout) element.onmouseout(e);
                        isHovering = false;
                    }
                }
            }

            function touchEnd(e) {
                _this.mousifyTouchEvent(e);
                window.setUsingTouch(true);
                if(preventDefault) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                if(isHovering) {
                    if(element.onclick) element.onclick(e);
                    if(element.onmouseout) element.onmouseout(e);
                    isHovering = false;
                }
            }
        };
        this.removeAllChildren = function(element) {
            while(element.hasChildNodes()) {
                element.removeChild(element.lastChild);
            }
        };
        this.generateElement = function(config) {
            let element = document.createElement(config.tag || "div");

            function bind(configValue, elementValue) {
                if(config[configValue]) element[elementValue] = config[configValue];
            }
            bind("text", "textContent");
            bind("html", "innerHTML");
            bind("class", "className");
            for(let key in config) {
                switch(key) {
                    case "tag":
                    case "text":
                    case "html":
                    case "class":
                    case "style":
                    case "hookTouch":
                    case "parent":
                    case "children":
                        continue;
                    default:
                        break;
                }
                element[key] = config[key];
            }
            if(element.onclick) element.onclick = this.checkTrusted(element.onclick);
            if(element.onmouseover) element.onmouseover = this.checkTrusted(element.onmouseover);
            if(element.onmouseout) element.onmouseout = this.checkTrusted(element.onmouseout);
            if(config.style) {
                element.style.cssText = config.style;
            }
            if(config.hookTouch) {
                this.hookTouchEvents(element);
            }
            if(config.parent) {
                config.parent.appendChild(element);
            }
            if(config.children) {
                for(let i = 0; i < config.children.length; i++) {
                    element.appendChild(config.children[i]);
                }
            }
            return element;
        };
        this.checkTrusted = function(callback) {
            return function(ev) {
                if(ev && ev instanceof Event && (ev && typeof ev.isTrusted == "boolean" ? ev.isTrusted : true)) {
                    callback(ev);
                } else {
                    //console.error("Event is not trusted.", ev);
                }
            };
        };
        this.randomString = function(length) {
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for(let i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        };
        this.countInArray = function(array, val) {
            let count = 0;
            for(let i = 0; i < array.length; i++) {
                if(array[i] === val) count++;
            }
            return count;
        };
        this.hexToRgb = function(hex) {
            return hex.slice(1).match(/.{1,2}/g).map((g) => parseInt(g, 16));
        };
        this.getRgb = function(r, g, b) {
            return [r / 255, g / 255, b / 255].join(", ");
        };
    }
}
class Animtext {
    // ANIMATED TEXT:
    constructor() {
        // INIT:
        this.init = function(x, y, scale, speed, life, text, color) {
            (this.x = x), (this.y = y), (this.color = color), (this.scale = scale * 3.5), (this.weight = 50);
            (this.startScale = this.scale * 1.2), (this.maxScale = 1.5 * scale), (this.minScale = 0.5 * scale), (this.scaleSpeed = 0.3), (this.speed = speed), (this.speedMax = speed), (this.life = life), (this.maxLife = life), (this.text = text), (this.movSpeed = speed);
        };
        // UPDATE:
        this.update = function(delta) {
            if(this.life) {
                this.life -= delta;
                if(this.scaleSpeed != -0.35) {
                    this.y -= this.speed * delta;
                    // (this.x += this.speed * delta);
                } else {
                    this.y -= this.speed * delta;
                }
                this.scale -= 0.8;
                // this.scale > 0.35 && (this.scale = Math.max(this.scale, this.startScale));
                // this.speed < this.speedMax && (this.speed -= this.speedMax * .0075);
                if(this.scale >= this.maxScale) {
                    this.scale = this.maxScale;
                    this.scaleSpeed *= -0.5;
                    this.speed = this.speed * 0.75;
                }
                this.life <= 0 && (this.life = 0);
            }
        };
        // RENDER:
        this.render = function(ctxt, xOff, yOff) {
            ctxt.lineWidth = 10;
            ctxt.strokeStyle = darkOutlineColor; //"black";
            ctxt.fillStyle = this.color;
            ctxt.globalAlpha = 1;
            ctxt.font = this.scale + "px Hammersmith One";
            ctxt.strokeText(this.text, this.x - xOff, this.y - yOff);
            ctxt.fillText(this.text, this.x - xOff, this.y - yOff);
            ctxt.globalAlpha = 1;
        };
    }
}
class Textmanager {
    // TEXT MANAGER:
    constructor() {
        this.texts = [];
        this.stack = [];
        // UPDATE:
        this.update = function(delta, ctxt, xOff, yOff) {
            ctxt.textBaseline = "middle";
            ctxt.textAlign = "center";
            for(let i = 0; i < this.texts.length; ++i) {
                if(this.texts[i].life) {
                    this.texts[i].update(delta);
                    this.texts[i].render(ctxt, xOff, yOff);
                }
            }
        };
        // SHOW TEXT:
        this.showText = function(x, y, scale, speed, life, text, color) {
            let tmpText;
            for(let i = 0; i < this.texts.length; ++i) {
                if(!this.texts[i].life) {
                    tmpText = this.texts[i];
                    break;
                }
            }
            if(!tmpText) {
                tmpText = new Animtext();
                this.texts.push(tmpText);
            }
            tmpText.init(x, y, scale, speed, life, text, color);
        };
    }
}
class GameObject {
    constructor(sid) {
        this.sid = sid;
        // INIT:
        this.init = function(x, y, dir, scale, type, data, owner) {
            data = data || {};
            this.sentTo = {};
            this.gridLocations = [];
            this.active = true;
            this.render = true;
            this.doUpdate = data.doUpdate;
            this.x = x;
            this.y = y;
            this.dir = dir;
            this.lastDir = dir;
            this.xWiggle = 0;
            this.yWiggle = 0;
            this.visScale = scale;
            this.scale = scale;
            this.type = type;
            this.id = data.id;
            this.owner = owner;
            this.name = data.name;
            this.isItem = this.id != undefined;
            this.group = data.group;
            this.maxHealth = data.health;
            this.health = this.maxHealth;
            this.layer = 2;
            if(this.group != undefined) {
                this.layer = this.group.layer;
            } else if(this.type == 0) {
                this.layer = 3;
            } else if(this.type == 2) {
                this.layer = 0;
            } else if(this.type == 4) {
                this.layer = -1;
            }
            this.colDiv = data.colDiv || 1;
            this.blocker = data.blocker;
            this.ignoreCollision = data.ignoreCollision;
            this.dontGather = data.dontGather;
            this.hideFromEnemy = data.hideFromEnemy;
            this.friction = data.friction;
            this.projDmg = data.projDmg;
            this.dmg = data.dmg;
            this.pDmg = data.pDmg;
            this.pps = data.pps;
            this.zIndex = data.zIndex || 0;
            this.turnSpeed = data.turnSpeed;
            this.req = data.req;
            this.trap = data.trap;
            this.healCol = data.healCol;
            this.teleport = data.teleport;
            this.boostSpeed = data.boostSpeed;
            this.projectile = data.projectile;
            this.shootRange = data.shootRange;
            this.shootRate = data.shootRate;
            this.shootCount = this.shootRate;
            this.spawnPoint = data.spawnPoint;
            this.onNear = 0;
            this.breakObj = false;
            this.alpha = data.alpha || 1;
            this.maxAlpha = data.alpha || 1;
            this.damaged = 0;
        };
        // GET HIT:
        this.changeHealth = function(amount, doer) {
            this.health += amount;
            return this.health <= 0;
        };
        // GET SCALE:
        this.getScale = function(sM, ig) {
            sM = sM || 1;
            return(this.scale * (this.isItem || this.type == 2 || this.type == 3 || this.type == 4 ? 1 : 0.6 * sM) * (ig ? 1 : this.colDiv));
        };
        // VISIBLE TO PLAYER:
        this.visibleToPlayer = function(player) {
            return(!this.hideFromEnemy || (this.owner && (this.owner == player || (this.owner.team && player.team == this.owner.team))));
        };
        // UPDATE:
        this.update = function(delta) {
            if(this.active) {
                if(this.xWiggle) {
                    this.xWiggle *= Math.pow(0.99, delta);
                }
                if(this.yWiggle) {
                    this.yWiggle *= Math.pow(0.99, delta);
                }
                let d2 = UTILS.getAngleDist(this.lastDir, this.dir);
                if(d2 > 0.01) {
                    this.dir += d2 / 5;
                } else {
                    this.dir = this.lastDir;
                }
            } else {
                if(this.alive) {
                    this.alpha -= delta / (200 / this.maxAlpha);
                    this.visScale += delta / (this.scale / 2.5);
                    if(this.alpha <= 0) {
                        this.alpha = 0;
                        this.alive = false;
                    }
                }
            }
        };
        // CHECK TEAM:
        this.isTeamObject = function(tmpObj) {
            return this.owner == null ? true : (this.owner && tmpObj.sid == this.owner.sid) || tmpObj.findAllianceBySid(this.owner.sid);
        };
    }
}
class Items {
    constructor() {
        // ITEM GROUPS:
        this.groups = [{
            id: 0,
            name: "food",
            layer: 0,
        }, {
            id: 1,
            name: "walls",
            place: true,
            limit: 30,
            layer: 0,
        }, {
            id: 2,
            name: "spikes",
            place: true,
            limit: 15,
            layer: 0,
        }, {
            id: 3,
            name: "mill",
            place: true,
            limit: 7,
            layer: 1,
        }, {
            id: 4,
            name: "mine",
            place: true,
            limit: 1,
            layer: 0,
        }, {
            id: 5,
            name: "trap",
            place: true,
            limit: 6,
            layer: -1,
        }, {
            id: 6,
            name: "booster",
            place: true,
            limit: 12,
            layer: -1,
        }, {
            id: 7,
            name: "turret",
            place: true,
            limit: 2,
            layer: 1,
        }, {
            id: 8,
            name: "watchtower",
            place: true,
            limit: 12,
            layer: 1,
        }, {
            id: 9,
            name: "buff",
            place: true,
            limit: 4,
            layer: -1,
        }, {
            id: 10,
            name: "spawn",
            place: true,
            limit: 1,
            layer: -1,
        }, {
            id: 11,
            name: "sapling",
            place: true,
            limit: 2,
            layer: 0,
        }, {
            id: 12,
            name: "blocker",
            place: true,
            limit: 3,
            layer: -1,
        }, {
            id: 13,
            name: "teleporter",
            place: true,
            limit: 2,
            layer: -1,
        }, ];
        // PROJECTILES:
        this.projectiles = [{
            indx: 0,
            layer: 0,
            src: "arrow_1",
            dmg: 25,
            speed: 1.6,
            scale: 103,
            range: 1000,
        }, {
            indx: 1,
            layer: 1,
            dmg: 25,
            scale: 20,
        }, {
            indx: 0,
            layer: 0,
            src: "arrow_1",
            dmg: 35,
            speed: 2.5,
            scale: 103,
            range: 1200,
        }, {
            indx: 0,
            layer: 0,
            src: "arrow_1",
            dmg: 30,
            speed: 2,
            scale: 103,
            range: 1200,
        }, {
            indx: 1,
            layer: 1,
            dmg: 16,
            scale: 20,
        }, {
            indx: 0,
            layer: 0,
            src: "bullet_1",
            dmg: 50,
            speed: 3.6,
            scale: 160,
            range: 1400,
        }, ];
        // WEAPONS:
        this.weapons = [{
            id: 0,
            type: 0,
            name: "tool hammer",
            desc: "tool for gathering all resources",
            src: "hammer_1",
            length: 140,
            width: 140,
            xOff: -3,
            yOff: 18,
            dmg: 25,
            range: 65,
            gather: 1,
            speed: 300,
        }, {
            id: 1,
            type: 0,
            age: 2,
            name: "hand axe",
            desc: "gathers resources at a higher rate",
            src: "axe_1",
            length: 140,
            width: 140,
            xOff: 3,
            yOff: 24,
            dmg: 30,
            spdMult: 1,
            range: 70,
            gather: 2,
            speed: 400,
        }, {
            id: 2,
            type: 0,
            age: 8,
            pre: 1,
            name: "great axe",
            desc: "deal more damage and gather more resources",
            src: "great_axe_1",
            length: 140,
            width: 140,
            xOff: -8,
            yOff: 25,
            dmg: 35,
            spdMult: 1,
            range: 75,
            gather: 4,
            speed: 400,
        }, {
            id: 3,
            type: 0,
            age: 2,
            name: "short sword",
            desc: "increased attack power but slower move speed",
            src: "sword_1",
            iPad: 1.3,
            length: 130,
            width: 210,
            xOff: -8,
            yOff: 46,
            dmg: 35,
            spdMult: 0.85,
            range: 110,
            gather: 1,
            speed: 300,
        }, {
            id: 4,
            type: 0,
            age: 8,
            pre: 3,
            name: "katana",
            desc: "greater range and damage",
            src: "samurai_1",
            iPad: 1.3,
            length: 130,
            width: 210,
            xOff: -8,
            yOff: 59,
            dmg: 40,
            spdMult: 0.8,
            range: 118,
            gather: 1,
            speed: 300,
        }, {
            id: 5,
            type: 0,
            age: 2,
            name: "polearm",
            desc: "long range melee weapon",
            src: "spear_1",
            iPad: 1.3,
            length: 130,
            width: 210,
            xOff: -8,
            yOff: 53,
            dmg: 45,
            knock: 0.2,
            spdMult: 0.82,
            range: 142,
            gather: 1,
            speed: 700,
        }, {
            id: 6,
            type: 0,
            age: 2,
            name: "bat",
            desc: "fast long range melee weapon",
            src: "bat_1",
            iPad: 1.3,
            length: 110,
            width: 180,
            xOff: -8,
            yOff: 53,
            dmg: 20,
            knock: 0.7,
            range: 110,
            gather: 1,
            speed: 300,
        }, {
            id: 7,
            type: 0,
            age: 2,
            name: "daggers",
            desc: "really fast short range weapon",
            src: "dagger_1",
            iPad: 0.8,
            length: 110,
            width: 110,
            xOff: 18,
            yOff: 0,
            dmg: 20,
            knock: 0.1,
            range: 65,
            gather: 1,
            hitSlow: 0.1,
            spdMult: 1.13,
            speed: 100,
        }, {
            id: 8,
            type: 0,
            age: 2,
            name: "stick",
            desc: "great for gathering but very weak",
            src: "stick_1",
            length: 140,
            width: 140,
            xOff: 3,
            yOff: 24,
            dmg: 1,
            spdMult: 1,
            range: 70,
            gather: 7,
            speed: 400,
        }, {
            id: 9,
            type: 1,
            age: 6,
            name: "hunting bow",
            desc: "bow used for ranged combat and hunting",
            src: "bow_1",
            req: ["wood", 4],
            length: 120,
            width: 120,
            xOff: -6,
            yOff: 0,
            Pdmg: 25,
            projectile: 0,
            spdMult: 0.75,
            speed: 600,
        }, {
            id: 10,
            type: 1,
            age: 6,
            name: "great hammer",
            desc: "hammer used for destroying structures",
            src: "great_hammer_1",
            length: 140,
            width: 140,
            xOff: -9,
            yOff: 25,
            dmg: 10,
            Pdmg: 10,
            spdMult: 0.88,
            range: 75,
            sDmg: 7.5,
            gather: 1,
            speed: 400,
        }, {
            id: 11,
            type: 1,
            age: 6,
            name: "wooden shield",
            desc: "blocks projectiles and reduces melee damage",
            src: "shield_1",
            length: 120,
            width: 120,
            shield: 0.2,
            xOff: 6,
            yOff: 0,
            Pdmg: 0,
            spdMult: 0.7,
        }, {
            id: 12,
            type: 1,
            age: 8,
            pre: 9,
            name: "crossbow",
            desc: "deals more damage and has greater range",
            src: "crossbow_1",
            req: ["wood", 5],
            aboveHand: true,
            armS: 0.75,
            length: 120,
            width: 120,
            xOff: -4,
            yOff: 0,
            Pdmg: 35,
            projectile: 2,
            spdMult: 0.7,
            speed: 700,
        }, {
            id: 13,
            type: 1,
            age: 9,
            pre: 12,
            name: "repeater crossbow",
            desc: "high firerate crossbow with reduced damage",
            src: "crossbow_2",
            req: ["wood", 10],
            aboveHand: true,
            armS: 0.75,
            length: 120,
            width: 120,
            xOff: -4,
            yOff: 0,
            Pdmg: 30,
            projectile: 3,
            spdMult: 0.7,
            speed: 230,
        }, {
            id: 14,
            type: 1,
            age: 6,
            name: "mc grabby",
            desc: "steals resources from enemies",
            src: "grab_1",
            length: 130,
            width: 210,
            xOff: -8,
            yOff: 53,
            dmg: 0,
            Pdmg: 0,
            steal: 250,
            knock: 0.2,
            spdMult: 1.05,
            range: 125,
            gather: 0,
            speed: 700,
        }, {
            id: 15,
            type: 1,
            age: 9,
            pre: 12,
            name: "musket",
            desc: "slow firerate but high damage and range",
            src: "musket_1",
            req: ["stone", 10],
            aboveHand: true,
            rec: 0.35,
            armS: 0.6,
            hndS: 0.3,
            hndD: 1.6,
            length: 205,
            width: 205,
            xOff: 25,
            yOff: 0,
            Pdmg: 50,
            projectile: 5,
            hideProjectile: true,
            spdMult: 0.6,
            speed: 1500,
        }, ];
        // ITEMS:
        this.list = [{
            group: this.groups[0],
            name: "apple",
            desc: "restores 20 health when consumed",
            req: ["food", 10],
            consume: function(doer) {
                return doer.changeHealth(20, doer);
            },
            scale: 22,
            holdOffset: 15,
            healing: 20,
            itemID: 0,
            itemAID: 16,
        }, {
            age: 3,
            group: this.groups[0],
            name: "cookie",
            desc: "restores 40 health when consumed",
            req: ["food", 15],
            consume: function(doer) {
                return doer.changeHealth(40, doer);
            },
            scale: 27,
            holdOffset: 15,
            healing: 40,
            itemID: 1,
            itemAID: 17,
        }, {
            age: 7,
            group: this.groups[0],
            name: "cheese",
            desc: "restores 30 health and another 50 over 5 seconds",
            req: ["food", 25],
            consume: function(doer) {
                if(doer.changeHealth(30, doer) || doer.health < 100) {
                    doer.dmgOverTime.dmg = -10;
                    doer.dmgOverTime.doer = doer;
                    doer.dmgOverTime.time = 5;
                    return true;
                }
                return false;
            },
            scale: 27,
            holdOffset: 15,
            healing: 30,
            itemID: 2,
            itemAID: 18,
        }, {
            group: this.groups[1],
            name: "wood wall",
            desc: "provides protection for your village",
            req: ["wood", 10],
            projDmg: true,
            health: 380,
            scale: 50,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 3,
            itemAID: 19,
        }, {
            age: 3,
            group: this.groups[1],
            name: "stone wall",
            desc: "provides improved protection for your village",
            req: ["stone", 25],
            health: 900,
            scale: 50,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 4,
            itemAID: 20,
        }, {
            age: 7,
            group: this.groups[1],
            name: "castle wall",
            desc: "provides powerful protection for your village",
            req: ["stone", 35],
            health: 1500,
            scale: 52,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 5,
            itemAID: 21,
        }, {
            group: this.groups[2],
            name: "spikes",
            desc: "damages enemies when they touch them",
            req: ["wood", 20, "stone", 5],
            health: 400,
            dmg: 20,
            scale: 49,
            spritePadding: -23,
            holdOffset: 8,
            placeOffset: -5,
            itemID: 6,
            itemAID: 22,
            shadow: {
                offsetX: 5, // Adjust the shadow's X offset as needed
                offsetY: 5, // Adjust the shadow's Y offset as needed
                blur: 20, // Adjust the shadow's blur as needed
                color: "rgba(0, 0, 0, 0.5)", // Adjust the shadow's color and transparency as needed
            },
        }, {
            age: 5,
            group: this.groups[2],
            name: "greater spikes",
            desc: "damages enemies when they touch them",
            req: ["wood", 30, "stone", 10],
            health: 500,
            dmg: 35,
            scale: 52,
            spritePadding: -23,
            holdOffset: 8,
            placeOffset: -5,
            itemID: 7,
            itemAID: 23,
        }, {
            age: 9,
            group: this.groups[2],
            name: "poison spikes",
            desc: "poisons enemies when they touch them",
            req: ["wood", 35, "stone", 15],
            health: 600,
            dmg: 30,
            pDmg: 5,
            scale: 52,
            spritePadding: -23,
            holdOffset: 8,
            placeOffset: -5,
            itemID: 8,
            itemAID: 24,
        }, {
            age: 9,
            group: this.groups[2],
            name: "spinning spikes",
            desc: "damages enemies when they touch them",
            req: ["wood", 30, "stone", 20],
            health: 500,
            dmg: 45,
            turnSpeed: 0.003,
            scale: 52,
            spritePadding: -23,
            holdOffset: 8,
            placeOffset: -5,
            itemID: 9,
            itemAID: 25,
        }, {
            group: this.groups[3],
            name: "windmill",
            desc: "generates gold over time",
            req: ["wood", 50, "stone", 10],
            health: 400,
            pps: 1,
            turnSpeed: 0.0016,
            spritePadding: 25,
            iconLineMult: 12,
            scale: 45,
            holdOffset: 20,
            placeOffset: 5,
            itemID: 10,
            itemAID: 26,
        }, {
            age: 5,
            group: this.groups[3],
            name: "faster windmill",
            desc: "generates more gold over time",
            req: ["wood", 60, "stone", 20],
            health: 500,
            pps: 1.5,
            turnSpeed: 0.0025,
            spritePadding: 25,
            iconLineMult: 12,
            scale: 47,
            holdOffset: 20,
            placeOffset: 5,
            itemID: 11,
            itemAID: 27,
        }, {
            age: 8,
            group: this.groups[3],
            name: "power mill",
            desc: "generates more gold over time",
            req: ["wood", 100, "stone", 50],
            health: 800,
            pps: 2,
            turnSpeed: 0.005,
            spritePadding: 25,
            iconLineMult: 12,
            scale: 47,
            holdOffset: 20,
            placeOffset: 5,
            itemID: 12,
            itemAID: 28,
        }, {
            age: 5,
            group: this.groups[4],
            type: 2,
            name: "mine",
            desc: "allows you to mine stone",
            req: ["wood", 20, "stone", 100],
            iconLineMult: 12,
            scale: 65,
            holdOffset: 20,
            placeOffset: 0,
            itemID: 13,
            itemAID: 29,
        }, {
            age: 5,
            group: this.groups[11],
            type: 0,
            name: "sapling",
            desc: "allows you to farm wood",
            req: ["wood", 150],
            iconLineMult: 12,
            colDiv: 0.5,
            scale: 110,
            holdOffset: 50,
            placeOffset: -15,
            itemID: 14,
            itemAID: 30,
        }, {
            age: 4,
            group: this.groups[5],
            name: "pit trap",
            desc: "pit that traps enemies if they walk over it",
            req: ["wood", 30, "stone", 30],
            trap: true,
            ignoreCollision: true,
            hideFromEnemy: true,
            health: 500,
            colDiv: 0.2,
            scale: 50,
            holdOffset: 20,
            placeOffset: -5,
            alpha: 0.6,
            itemID: 15,
            itemAID: 31,
        }, {
            age: 4,
            group: this.groups[6],
            name: "boost pad",
            desc: "provides boost when stepped on",
            req: ["stone", 20, "wood", 5],
            ignoreCollision: true,
            boostSpeed: 1.5,
            health: 150,
            colDiv: 0.7,
            scale: 45,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 16,
            itemAID: 32,
        }, {
            age: 7,
            group: this.groups[7],
            doUpdate: true,
            name: "turret",
            desc: "defensive structure that shoots at enemies",
            req: ["wood", 200, "stone", 150],
            health: 800,
            projectile: 1,
            shootRange: 700,
            shootRate: 2200,
            scale: 43,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 17,
            itemAID: 33,
        }, {
            age: 7,
            group: this.groups[8],
            name: "platform",
            desc: "platform to shoot over walls and cross over water",
            req: ["wood", 20],
            ignoreCollision: true,
            zIndex: 1,
            health: 300,
            scale: 43,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 18,
            itemAID: 34,
        }, {
            age: 7,
            group: this.groups[9],
            name: "healing pad",
            desc: "standing on it will slowly heal you",
            req: ["wood", 30, "food", 10],
            ignoreCollision: true,
            healCol: 15,
            health: 400,
            colDiv: 0.7,
            scale: 45,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 19,
            itemAID: 35,
        }, {
            age: 9,
            group: this.groups[10],
            name: "spawn pad",
            desc: "you will spawn here when you die but it will dissapear",
            req: ["wood", 100, "stone", 100],
            health: 400,
            ignoreCollision: true,
            spawnPoint: true,
            scale: 45,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 20,
            itemAID: 36,
        }, {
            age: 7,
            group: this.groups[12],
            name: "blocker",
            desc: "blocks building in radius",
            req: ["wood", 30, "stone", 25],
            ignoreCollision: true,
            blocker: 300,
            health: 400,
            colDiv: 0.7,
            scale: 45,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 21,
            itemAID: 37,
        }, {
            age: 7,
            group: this.groups[13],
            name: "teleporter",
            desc: "teleports you to a random point on the map",
            req: ["wood", 60, "stone", 60],
            ignoreCollision: true,
            teleport: true,
            health: 200,
            colDiv: 0.7,
            scale: 45,
            holdOffset: 20,
            placeOffset: -5,
            itemID: 22,
            itemAID: 38,
        }, ];
        // CHECK ITEM ID:
        this.checkItem = {
            index: function(id, myItems) {
                return [0, 1, 2].includes(id) ? 0 : [3, 4, 5].includes(id) ? 1 : [6, 7, 8, 9].includes(id) ? 2 : [10, 11, 12].includes(id) ? 3 : [13, 14].includes(id) ? 5 : [15, 16].includes(id) ? 4 : [17, 18, 19, 21, 22].includes(id) ? [13, 14].includes(myItems) ? 6 : 5 : id == 20 ? [13, 14].includes(myItems) ? 7 : 6 : undefined;
            },
        };
        // ASSIGN IDS:
        for(let i = 0; i < this.list.length; ++i) {
            this.list[i].id = i;
            if(this.list[i].pre) this.list[i].pre = i - this.list[i].pre;
        }
        // TROLOLOLOL:
        if(typeof window !== "undefined") {
            function shuffle(a) {
                for(let i = a.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [a[i], a[j]] = [a[j], a[i]];
                }
                return a;
            }
            //shuffle(this.list);
        }
    }
}
class Objectmanager {
    constructor(GameObject, liztobj, UTILS, config, players, server) {
        let mathFloor = Math.floor,
            mathABS = Math.abs,
            mathCOS = Math.cos,
            mathSIN = Math.sin,
            mathPOW = Math.pow,
            mathSQRT = Math.sqrt;
        this.ignoreAdd = false;
        this.hitObj = [];
        // DISABLE OBJ:
        this.disableObj = function(obj) {
            obj.active = false;
        };
        // ADD NEW:
        let tmpObj;
        this.add = function(sid, x, y, dir, s, type, data, setSID, owner) {
            tmpObj = findObjectBySid(sid);
            if(!tmpObj) {
                tmpObj = gameObjects.find((tmp) => !tmp.active);
                if(!tmpObj) {
                    tmpObj = new GameObject(sid);
                    gameObjects.push(tmpObj);
                }
            }
            if(setSID) {
                tmpObj.sid = sid;
            }
            tmpObj.init(x, y, dir, s, type, data, owner);
        };
        // DISABLE BY SID:
        this.disableBySid = function(sid) {
            let find = findObjectBySid(sid);
            if(find) {
                this.disableObj(find);
            }
        };
        // REMOVE ALL FROM PLAYER:
        this.removeAllItems = function(sid, server) {
            gameObjects.filter((tmp) => tmp.active && tmp.owner && tmp.owner.sid == sid).forEach((tmp) => this.disableObj(tmp));
        };
        // CHECK IF PLACABLE:
        this.checkItemLocation = function(x, y, s, sM, indx, ignoreWater, placer) {
            let cantPlace = liztobj.find((tmp) => tmp.active && UTILS.getDistance(x, y, tmp.x, tmp.y) < s + (tmp.blocker ? tmp.blocker : tmp.getScale(sM, tmp.isItem)));
            if(cantPlace) return false;
            if(!ignoreWater && indx != 18 && y >= config.mapScale / 2 - config.riverWidth / 2 && y <= config.mapScale / 2 + config.riverWidth / 2) return false;
            return true;
        };
    }
}
class Projectile {
    constructor(players, ais, objectManager, items, config, UTILS, server) {
        // INIT:
        this.init = function(indx, x, y, dir, spd, dmg, rng, scl, owner) {
            this.active = true;
            this.tickActive = true;
            this.indx = indx;
            this.x = x;
            this.y = y;
            this.x2 = x;
            this.y2 = y;
            this.dir = dir;
            this.skipMov = true;
            this.speed = spd;
            this.dmg = dmg;
            this.scale = scl;
            this.range = rng;
            this.r2 = rng;
            this.owner = owner;
        };
        // UPDATE:
        this.update = function(delta) {
            if(this.active) {
                let tmpSpeed = this.speed * delta;
                if(!this.skipMov) {
                    this.x += tmpSpeed * Math.cos(this.dir);
                    this.y += tmpSpeed * Math.sin(this.dir);
                    this.range -= tmpSpeed;
                    if(this.range <= 0) {
                        this.x += this.range * Math.cos(this.dir);
                        this.y += this.range * Math.sin(this.dir);
                        tmpSpeed = 1;
                        this.range = 0;
                        this.active = false;
                    }
                } else {
                    this.skipMov = false;
                }
            }
        };
        this.tickUpdate = function(delta) {
            if(this.tickActive) {
                let tmpSpeed = this.speed * delta;
                if(!this.skipMov) {
                    this.x2 += tmpSpeed * Math.cos(this.dir);
                    this.y2 += tmpSpeed * Math.sin(this.dir);
                    this.r2 -= tmpSpeed;
                    if(this.r2 <= 0) {
                        this.x2 += this.r2 * Math.cos(this.dir);
                        this.y2 += this.r2 * Math.sin(this.dir);
                        tmpSpeed = 1;
                        this.r2 = 0;
                        this.tickActive = false;
                    }
                } else {
                    this.skipMov = false;
                }
            }
        };
    }
}
class Store {
    constructor() {
        // STORE HATS:
        this.hats = [{
            id: 45,
            name: "Shame!",
            dontSell: true,
            price: 0,
            scale: 120,
            desc: "hacks are for winners",
        }, {
            id: 51,
            name: "Moo Cap",
            price: 0,
            scale: 120,
            desc: "coolest mooer around",
        }, {
            id: 50,
            name: "Apple Cap",
            price: 0,
            scale: 120,
            desc: "apple farms remembers",
        }, {
            id: 28,
            name: "Moo Head",
            price: 0,
            scale: 120,
            desc: "no effect",
        }, {
            id: 29,
            name: "Pig Head",
            price: 0,
            scale: 120,
            desc: "no effect",
        }, {
            id: 30,
            name: "Fluff Head",
            price: 0,
            scale: 120,
            desc: "no effect",
        }, {
            id: 36,
            name: "Pandou Head",
            price: 0,
            scale: 120,
            desc: "no effect",
        }, {
            id: 37,
            name: "Bear Head",
            price: 0,
            scale: 120,
            desc: "no effect",
        }, {
            id: 38,
            name: "Monkey Head",
            price: 0,
            scale: 120,
            desc: "no effect",
        }, {
            id: 44,
            name: "Polar Head",
            price: 0,
            scale: 120,
            desc: "no effect",
        }, {
            id: 35,
            name: "Fez Hat",
            price: 0,
            scale: 120,
            desc: "no effect",
        }, {
            id: 42,
            name: "Enigma Hat",
            price: 0,
            scale: 120,
            desc: "join the enigma army",
        }, {
            id: 43,
            name: "Blitz Hat",
            price: 0,
            scale: 120,
            desc: "hey everybody i'm blitz",
        }, {
            id: 49,
            name: "Bob XIII Hat",
            price: 0,
            scale: 120,
            desc: "like and subscribe",
        }, {
            id: 57,
            name: "Pumpkin",
            price: 50,
            scale: 120,
            desc: "Spooooky",
        }, {
            id: 8,
            name: "Bummle Hat",
            price: 100,
            scale: 120,
            desc: "no effect",
        }, {
            id: 2,
            name: "Straw Hat",
            price: 500,
            scale: 120,
            desc: "no effect",
        }, {
            id: 15,
            name: "Winter Cap",
            price: 600,
            scale: 120,
            desc: "allows you to move at normal speed in snow",
            coldM: 1,
        }, {
            id: 5,
            name: "Cowboy Hat",
            price: 1000,
            scale: 120,
            desc: "no effect",
        }, {
            id: 4,
            name: "Ranger Hat",
            price: 2000,
            scale: 120,
            desc: "no effect",
        }, {
            id: 18,
            name: "Explorer Hat",
            price: 2000,
            scale: 120,
            desc: "no effect",
        }, {
            id: 31,
            name: "Flipper Hat",
            price: 2500,
            scale: 120,
            desc: "have more control while in water",
            watrImm: true,
        }, {
            id: 1,
            name: "Marksman Cap",
            price: 3000,
            scale: 120,
            desc: "increases arrow speed and range",
            aMlt: 1.3,
        }, {
            id: 10,
            name: "Bush Gear",
            price: 3000,
            scale: 160,
            desc: "allows you to disguise yourself as a bush",
        }, {
            id: 48,
            name: "Halo",
            price: 3000,
            scale: 120,
            desc: "no effect",
        }, {
            id: 6,
            name: "Soldier Helmet",
            price: 4000,
            scale: 120,
            desc: "reduces damage taken but slows movement",
            spdMult: 0.94,
            dmgMult: 0.75,
        }, {
            id: 23,
            name: "Anti Venom Gear",
            price: 4000,
            scale: 120,
            desc: "makes you immune to poison",
            poisonRes: 1,
        }, {
            id: 13,
            name: "Medic Gear",
            price: 5000,
            scale: 110,
            desc: "slowly regenerates health over time",
            healthRegen: 3,
        }, {
            id: 9,
            name: "Miners Helmet",
            price: 5000,
            scale: 120,
            desc: "earn 1 extra gold per resource",
            extraGold: 1,
        }, {
            id: 32,
            name: "Musketeer Hat",
            price: 5000,
            scale: 120,
            desc: "reduces cost of projectiles",
            projCost: 0.5,
        }, {
            id: 7,
            name: "Bull Helmet",
            price: 6000,
            scale: 120,
            desc: "increases damage done but drains health",
            healthRegen: -5,
            dmgMultO: 1.5,
            spdMult: 0.96,
        }, {
            id: 22,
            name: "Emp Helmet",
            price: 6000,
            scale: 120,
            desc: "turrets won't attack but you move slower",
            antiTurret: 1,
            spdMult: 0.7,
        }, {
            id: 12,
            name: "Booster Hat",
            price: 6000,
            scale: 120,
            desc: "increases your movement speed",
            spdMult: 1.16,
        }, {
            id: 26,
            name: "Barbarian Armor",
            price: 8000,
            scale: 120,
            desc: "knocks back enemies that attack you",
            dmgK: 0.6,
        }, {
            id: 21,
            name: "Plague Mask",
            price: 10000,
            scale: 120,
            desc: "melee attacks deal poison damage",
            poisonDmg: 5,
            poisonTime: 6,
        }, {
            id: 46,
            name: "Bull Mask",
            price: 10000,
            scale: 120,
            desc: "bulls won't target you unless you attack them",
            bullRepel: 1,
        }, {
            id: 14,
            name: "Windmill Hat",
            topSprite: true,
            price: 10000,
            scale: 120,
            desc: "generates points while worn",
            pps: 1.5,
        }, {
            id: 11,
            name: "Spike Gear",
            topSprite: true,
            price: 10000,
            scale: 120,
            desc: "deal damage to players that damage you",
            dmg: 0.45,
        }, {
            id: 53,
            name: "Turret Gear",
            topSprite: true,
            price: 10000,
            scale: 120,
            desc: "you become a walking turret",
            turret: {
                proj: 1,
                range: 700,
                rate: 2500,
            },
            spdMult: 0.7,
        }, {
            id: 20,
            name: "Samurai Armor",
            price: 12000,
            scale: 120,
            desc: "increased attack speed and fire rate",
            atkSpd: 0.78,
        }, {
            id: 58,
            name: "Dark Knight",
            price: 12000,
            scale: 120,
            desc: "restores health when you deal damage",
            healD: 0.4,
        }, {
            id: 27,
            name: "Scavenger Gear",
            price: 15000,
            scale: 120,
            desc: "earn double points for each kill",
            kScrM: 2,
        }, {
            id: 40,
            name: "Tank Gear",
            price: 15000,
            scale: 120,
            desc: "increased damage to buildings but slower movement",
            spdMult: 0.3,
            bDmg: 3.3,
        }, {
            id: 52,
            name: "Thief Gear",
            price: 15000,
            scale: 120,
            desc: "steal half of a players gold when you kill them",
            goldSteal: 0.5,
        }, {
            id: 55,
            name: "Bloodthirster",
            price: 20000,
            scale: 120,
            desc: "Restore Health when dealing damage. And increased damage",
            healD: 0.25,
            dmgMultO: 1.2,
        }, {
            id: 56,
            name: "Assassin Gear",
            price: 20000,
            scale: 120,
            desc: "Go invisible when not moving. Can't eat. Increased speed",
            noEat: true,
            spdMult: 1.1,
            invisTimer: 1000,
        }, ];
        // STORE ACCESSORIES:
        this.accessories = [{
            id: 12,
            name: "Snowball",
            price: 1000,
            scale: 105,
            xOff: 18,
            desc: "no effect",
        }, {
            id: 9,
            name: "Tree Cape",
            price: 1000,
            scale: 90,
            desc: "no effect",
        }, {
            id: 10,
            name: "Stone Cape",
            price: 1000,
            scale: 90,
            desc: "no effect",
        }, {
            id: 3,
            name: "Cookie Cape",
            price: 1500,
            scale: 90,
            desc: "no effect",
        }, {
            id: 8,
            name: "Cow Cape",
            price: 2000,
            scale: 90,
            desc: "no effect",
        }, {
            id: 11,
            name: "Monkey Tail",
            price: 2000,
            scale: 97,
            xOff: 25,
            desc: "Super speed but reduced damage",
            spdMult: 1.35,
            dmgMultO: 0.2,
        }, {
            id: 17,
            name: "Apple Basket",
            price: 3000,
            scale: 80,
            xOff: 12,
            desc: "slowly regenerates health over time",
            healthRegen: 1,
        }, {
            id: 6,
            name: "Winter Cape",
            price: 3000,
            scale: 90,
            desc: "no effect",
        }, {
            id: 4,
            name: "Skull Cape",
            price: 4000,
            scale: 90,
            desc: "no effect",
        }, {
            id: 5,
            name: "Dash Cape",
            price: 5000,
            scale: 90,
            desc: "no effect",
        }, {
            id: 2,
            name: "Dragon Cape",
            price: 6000,
            scale: 90,
            desc: "no effect",
        }, {
            id: 1,
            name: "Super Cape",
            price: 8000,
            scale: 90,
            desc: "no effect",
        }, {
            id: 7,
            name: "Troll Cape",
            price: 8000,
            scale: 90,
            desc: "no effect",
        }, {
            id: 14,
            name: "Thorns",
            price: 10000,
            scale: 115,
            xOff: 20,
            desc: "no effect",
        }, {
            id: 15,
            name: "Blockades",
            price: 10000,
            scale: 95,
            xOff: 15,
            desc: "no effect",
        }, {
            id: 20,
            name: "Devils Tail",
            price: 10000,
            scale: 95,
            xOff: 20,
            desc: "no effect",
        }, {
            id: 16,
            name: "Sawblade",
            price: 12000,
            scale: 90,
            spin: true,
            xOff: 0,
            desc: "deal damage to players that damage you",
            dmg: 0.15,
        }, {
            id: 13,
            name: "Angel Wings",
            price: 15000,
            scale: 138,
            xOff: 22,
            desc: "slowly regenerates health over time",
            healthRegen: 3,
        }, {
            id: 19,
            name: "Shadow Wings",
            price: 15000,
            scale: 138,
            xOff: 22,
            desc: "increased movement speed",
            spdMult: 1.1,
        }, {
            id: 18,
            name: "Blood Wings",
            price: 20000,
            scale: 178,
            xOff: 26,
            desc: "restores health when you deal damage",
            healD: 0.2,
        }, {
            id: 21,
            name: "Corrupt X Wings",
            price: 20000,
            scale: 178,
            xOff: 26,
            desc: "deal damage to players that damage you",
            dmg: 0.25,
        }, ];
    }
}
class ProjectileManager {
    constructor(Projectile, projectiles, players, ais, objectManager, items, config, UTILS, server) {
        this.addProjectile = function(x, y, dir, range, speed, indx, owner, ignoreObj, layer, inWindow) {
            let tmpData = items.projectiles[indx];
            let tmpProj;
            for(let i = 0; i < projectiles.length; ++i) {
                if(!projectiles[i].active) {
                    tmpProj = projectiles[i];
                    break;
                }
            }
            if(!tmpProj) {
                tmpProj = new Projectile(players, ais, objectManager, items, config, UTILS, server);
                tmpProj.sid = projectiles.length;
                projectiles.push(tmpProj);
            }
            tmpProj.init(indx, x, y, dir, speed, tmpData.dmg, range, tmpData.scale, owner);
            tmpProj.ignoreObj = ignoreObj;
            tmpProj.layer = layer || tmpData.layer;
            tmpProj.inWindow = inWindow;
            tmpProj.src = tmpData.src;
            return tmpProj;
        };
    }
}
class AiManager {
    // AI MANAGER:
    constructor(ais, AI, players, items, objectManager, config, UTILS, scoreCallback, server) {
        // AI TYPES:
        this.aiTypes = [{
            id: 0,
            src: "cow_1",
            killScore: 150,
            health: 500,
            weightM: 0.8,
            speed: 0.00095,
            turnSpeed: 0.001,
            scale: 72,
            drop: ["food", 50]
        }, {
            id: 1,
            src: "pig_1",
            killScore: 200,
            health: 800,
            weightM: 0.6,
            speed: 0.00085,
            turnSpeed: 0.001,
            scale: 72,
            drop: ["food", 80]
        }, {
            id: 2,
            name: "Bull",
            src: "bull_2",
            hostile: true,
            dmg: 20,
            killScore: 1000,
            health: 1800,
            weightM: 0.5,
            speed: 0.00094,
            turnSpeed: 0.00074,
            scale: 78,
            viewRange: 800,
            chargePlayer: true,
            drop: ["food", 100]
        }, {
            id: 3,
            name: "Bully",
            src: "bull_1",
            hostile: true,
            dmg: 20,
            killScore: 2000,
            health: 2800,
            weightM: 0.45,
            speed: 0.001,
            turnSpeed: 0.0008,
            scale: 90,
            viewRange: 900,
            chargePlayer: true,
            drop: ["food", 400]
        }, {
            id: 4,
            name: "Wolf",
            src: "wolf_1",
            hostile: true,
            dmg: 8,
            killScore: 500,
            health: 300,
            weightM: 0.45,
            speed: 0.001,
            turnSpeed: 0.002,
            scale: 84,
            viewRange: 800,
            chargePlayer: true,
            drop: ["food", 200]
        }, {
            id: 5,
            name: "Quack",
            src: "chicken_1",
            dmg: 8,
            killScore: 2000,
            noTrap: true,
            health: 300,
            weightM: 0.2,
            speed: 0.0018,
            turnSpeed: 0.006,
            scale: 70,
            drop: ["food", 100]
        }, {
            id: 6,
            name: "MOOSTAFA",
            nameScale: 50,
            src: "enemy",
            hostile: true,
            dontRun: true,
            fixedSpawn: true,
            spawnDelay: 60000,
            noTrap: true,
            colDmg: 100,
            dmg: 40,
            killScore: 8000,
            health: 18000,
            weightM: 0.4,
            speed: 0.0007,
            turnSpeed: 0.01,
            scale: 80,
            spriteMlt: 1.8,
            leapForce: 0.9,
            viewRange: 1000,
            hitRange: 210,
            hitDelay: 1000,
            chargePlayer: true,
            drop: ["food", 100]
        }, {
            id: 7,
            name: "Treasure",
            hostile: true,
            nameScale: 35,
            src: "crate_1",
            fixedSpawn: true,
            spawnDelay: 120000,
            colDmg: 200,
            killScore: 5000,
            health: 20000,
            weightM: 0.1,
            speed: 0.0,
            turnSpeed: 0.0,
            scale: 70,
            spriteMlt: 1.0
        }, {
            id: 8,
            name: "MOOFIE",
            src: "wolf_2",
            hostile: true,
            fixedSpawn: true,
            dontRun: true,
            hitScare: 4,
            spawnDelay: 30000,
            noTrap: true,
            nameScale: 35,
            dmg: 10,
            colDmg: 100,
            killScore: 3000,
            health: 7000,
            weightM: 0.45,
            speed: 0.0015,
            turnSpeed: 0.002,
            scale: 90,
            viewRange: 800,
            chargePlayer: true,
            drop: ["food", 1000]
        }, {
            id: 9,
            name: "💀MOOFIE",
            src: "wolf_2",
            hostile: !0,
            fixedSpawn: !0,
            dontRun: !0,
            hitScare: 50,
            spawnDelay: 6e4,
            noTrap: !0,
            nameScale: 35,
            dmg: 12,
            colDmg: 100,
            killScore: 3e3,
            health: 9e3,
            weightM: .45,
            speed: .0015,
            turnSpeed: .0025,
            scale: 94,
            viewRange: 1440,
            chargePlayer: !0,
            drop: ["food", 3e3],
            minSpawnRange: .85,
            maxSpawnRange: .9
        }, {
            id: 10,
            name: "💀Wolf",
            src: "wolf_1",
            hostile: !0,
            fixedSpawn: !0,
            dontRun: !0,
            hitScare: 50,
            spawnDelay: 3e4,
            dmg: 10,
            killScore: 700,
            health: 500,
            weightM: .45,
            speed: .00115,
            turnSpeed: .0025,
            scale: 88,
            viewRange: 1440,
            chargePlayer: !0,
            drop: ["food", 400],
            minSpawnRange: .85,
            maxSpawnRange: .9
        }, {
            id: 11,
            name: "💀Bully",
            src: "bull_1",
            hostile: !0,
            fixedSpawn: !0,
            dontRun: !0,
            hitScare: 50,
            dmg: 20,
            killScore: 5e3,
            health: 5e3,
            spawnDelay: 1e5,
            weightM: .45,
            speed: .00115,
            turnSpeed: .0025,
            scale: 94,
            viewRange: 1440,
            chargePlayer: !0,
            drop: ["food", 800],
            minSpawnRange: .85,
            maxSpawnRange: .9
        }];
        // SPAWN AI:
        this.spawn = function(x, y, dir, index) {
            let tmpObj = ais.find((tmp) => !tmp.active);
            if(!tmpObj) {
                tmpObj = new AI(ais.length, objectManager, players, items, UTILS, config, scoreCallback, server);
                ais.push(tmpObj);
            }
            tmpObj.init(x, y, dir, index, this.aiTypes[index]);
            return tmpObj;
        };
    }
};
class AI {
    constructor(sid, objectManager, players, items, UTILS, config, scoreCallback, server) {
        this.sid = sid;
        this.isAI = true;
        this.nameIndex = UTILS.randInt(0, config.cowNames.length - 1);
        // INIT:
        this.init = function(x, y, dir, index, data) {
            this.x = x;
            this.y = y;
            this.startX = data.fixedSpawn ? x : null;
            this.startY = data.fixedSpawn ? y : null;
            this.xVel = 0;
            this.yVel = 0;
            this.zIndex = 0;
            this.dir = dir;
            this.dirPlus = 0;
            this.showName = 'aaa';
            this.index = index;
            this.src = data.src;
            if(data.name) this.name = data.name;
            this.weightM = data.weightM;
            this.speed = data.speed;
            this.killScore = data.killScore;
            this.turnSpeed = data.turnSpeed;
            this.scale = data.scale;
            this.maxHealth = data.health;
            this.leapForce = data.leapForce;
            this.health = this.maxHealth;
            this.chargePlayer = data.chargePlayer;
            this.viewRange = data.viewRange;
            this.drop = data.drop;
            this.dmg = data.dmg;
            this.hostile = data.hostile;
            this.dontRun = data.dontRun;
            this.hitRange = data.hitRange;
            this.hitDelay = data.hitDelay;
            this.hitScare = data.hitScare;
            this.spriteMlt = data.spriteMlt;
            this.nameScale = data.nameScale;
            this.colDmg = data.colDmg;
            this.noTrap = data.noTrap;
            this.spawnDelay = data.spawnDelay;
            this.hitWait = 0;
            this.waitCount = 1000;
            this.moveCount = 0;
            this.targetDir = 0;
            this.active = true;
            this.alive = true;
            this.runFrom = null;
            this.chargeTarget = null;
            this.dmgOverTime = {};
        };
        let tmpRatio = 0;
        let animIndex = 0;
        this.animate = function(delta) {
            if(this.animTime > 0) {
                this.animTime -= delta;
                if(this.animTime <= 0) {
                    this.animTime = 0;
                    this.dirPlus = 0;
                    tmpRatio = 0;
                    animIndex = 0;
                } else {
                    if(animIndex == 0) {
                        tmpRatio += delta / (this.animSpeed * config.hitReturnRatio);
                        this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.min(1, tmpRatio));
                        if(tmpRatio >= 1) {
                            tmpRatio = 1;
                            animIndex = 1;
                        }
                    } else {
                        tmpRatio -= delta / (this.animSpeed * (1 - config.hitReturnRatio));
                        this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.max(0, tmpRatio));
                    }
                }
            }
        };
        // ANIMATION:
        this.startAnim = function() {
            this.animTime = this.animSpeed = 600;
            this.targetAngle = Math.PI * 0.8;
            tmpRatio = 0;
            animIndex = 0;
        };
    };
};
class addCh {
    constructor(x, y, chat, tmpObj) {
        this.x = x;
        this.y = y;
        this.alpha = 0;
        this.active = true;
        this.alive = false;
        this.chat = chat;
        this.owner = tmpObj;
    }
}
class DeadPlayer {
    constructor(x, y, dir, buildIndex, weaponIndex, weaponVariant, skinColor, scale, name) {
        this.x = x;
        this.y = y;
        this.lastDir = dir;
        this.dir = dir + Math.PI;
        this.buildIndex = buildIndex;
        this.weaponIndex = weaponIndex;
        this.weaponVariant = weaponVariant;
        this.skinColor = skinColor;
        this.scale = scale;
        this.visScale = 0;
        this.name = name;
        this.alpha = 1;
        this.active = true;
        this.animate = function(delta) {
            let d2 = UTILS.getAngleDist(this.lastDir, this.dir);
            if(d2 > 0.01) {
                this.dir += d2 / 20;
            } else {
                this.dir = this.lastDir;
            }
            if(this.visScale < this.scale) {
                this.visScale += delta / (this.scale / 2);
                if(this.visScale >= this.scale) {
                    this.visScale = this.scale;
                }
            }
            this.alpha -= delta / 30000;
            if(this.alpha <= 0) {
                this.alpha = 0;
                this.active = false;
            }
        };
    }
}
class Player {
    constructor(id, sid, config, UTILS, projectileManager, objectManager, players, ais, items, hats, accessories, server, scoreCallback, iconCallback) {
        this.id = id;
        this.sid = sid;
        this.tmpScore = 0;
        this.team = null;
        this.latestSkin = 0;
        this.oldSkinIndex = 0;
        this.skinIndex = 0;
        this.latestTail = 0;
        this.oldTailIndex = 0;
        this.tailIndex = 0;
        this.hitTime = 0;
        this.lastHit = 0;
        this.showName = "NOOO";
        this.tails = {};
        for(let i = 0; i < accessories.length; ++i) {
            if(accessories[i].price <= 0) this.tails[accessories[i].id] = 1;
        }
        this.skins = {};
        for(let i = 0; i < hats.length; ++i) {
            if(hats[i].price <= 0) this.skins[hats[i].id] = 1;
        }
        this.points = 0;
        this.dt = 0;
        this.hidden = false;
        this.itemCounts = {};
        this.isPlayer = true;
        this.pps = 0;
        this.moveDir = undefined;
        this.skinRot = 0;
        this.lastPing = 0;
        this.iconIndex = 0;
        this.skinColor = 0;
        this.dist2 = 0;
        this.aim2 = 0;
        this.maxSpeed = 1;
        this.chat = {
            message: null,
            count: 0,
        };
        this.backupNobull = true;
        this.circle = false;
        this.circleRad = 200;
        this.circleRadSpd = 0.1;
        this.cAngle = 0;
        // SPAWN:
        this.spawn = function(moofoll) {
            this.attacked = false;
            this.timeDamaged = 0;
            this.timeHealed = 0;
            this.pinge = 0;
            this.millPlace = "NOOO";
            this.lastshamecount = 0;
            this.death = false;
            this.spinDir = 0;
            this.sync = false;
            this.antiBull = 0;
            this.bullTimer = 0;
            this.poisonTimer = 0;
            this.active = true;
            this.alive = true;
            this.lockMove = false;
            this.lockDir = false;
            this.minimapCounter = 0;
            this.chatCountdown = 0;
            this.shameCount = 0;
            this.shameTimer = 0;
            this.sentTo = {};
            this.gathering = 0;
            this.gatherIndex = 0;
            this.shooting = {};
            this.shootIndex = 9;
            this.autoGather = 0;
            this.animTime = 0;
            this.animSpeed = 0;
            this.mouseState = 0;
            this.buildIndex = -1;
            this.weaponIndex = 0;
            this.weaponCode = 0;
            this.weaponVariant = 0;
            this.primaryIndex = undefined;
            this.secondaryIndex = undefined;
            this.dmgOverTime = {};
            this.noMovTimer = 0;
            this.maxXP = 300;
            this.XP = 0;
            this.age = 1;
            this.kills = 0;
            this.upgrAge = 2;
            this.upgradePoints = 0;
            this.x = 0;
            this.y = 0;
            this.oldXY = {
                x: 0,
                y: 0,
            };
            this.zIndex = 0;
            this.xVel = 0;
            this.yVel = 0;
            this.slowMult = 1;
            this.dir = 0;
            this.dirPlus = 0;
            this.targetDir = 0;
            this.targetAngle = 0;
            this.maxHealth = 100;
            this.health = this.maxHealth;
            this.oldHealth = this.maxHealth;
            this.damaged = 0;
            this.scale = config.playerScale;
            this.speed = config.playerSpeed;
            this.resetMoveDir();
            this.resetResources(moofoll);
            this.items = [0, 3, 6, 10];
            this.weapons = [0];
            this.shootCount = 0;
            this.weaponXP = [];
            this.reloads = {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0,
                11: 0,
                12: 0,
                13: 0,
                14: 0,
                15: 0,
                53: 0,
            };
            this.bowThreat = {
                9: 0,
                12: 0,
                13: 0,
                15: 0,
            };
            this.damageThreat = 0;
            this.inTrap = false;
            this.canEmpAnti = false;
            this.empAnti = false;
            this.soldierAnti = false;
            this.poisonTick = 0;
            this.bullTick = 0;
            this.setPoisonTick = false;
            this.setBullTick = false;
            this.antiTimer = 2;
        };
        // RESET MOVE DIR:
        this.resetMoveDir = function() {
            this.moveDir = undefined;
        };
        // RESET RESOURCES:
        this.resetResources = function(moofoll) {
            for(let i = 0; i < config.resourceTypes.length; ++i) {
                this[config.resourceTypes[i]] = moofoll ? 100 : 0;
            }
        };
        // ADD ITEM:
        this.getItemType = function(id) {
            let findindx = this.items.findIndex((ids) => ids == id);
            if(findindx != -1) {
                return findindx;
            } else {
                return items.checkItem.index(id, this.items);
            }
        };
        // SET DATA:
        this.setData = function(data) {
            this.id = data[0];
            this.sid = data[1];
            this.name = data[2];
            this.x = data[3];
            this.y = data[4];
            this.dir = data[5];
            this.health = data[6];
            this.maxHealth = data[7];
            this.scale = data[8];
            this.skinColor = data[9];
        };
        // UPDATE POISON TICK:
        this.updateTimer = function() {
            this.bullTimer -= 1;
            if(this.bullTimer <= 0) {
                this.setBullTick = false;
                this.bullTick = game.tick - 1;
                this.bullTimer = config.serverUpdateRate;
            }
            this.poisonTimer -= 1;
            if(this.poisonTimer <= 0) {
                this.setPoisonTick = false;
                this.poisonTick = game.tick - 1;
                this.poisonTimer = config.serverUpdateRate;
            }
        };
        this.update = function(delta) {
            if(this.sid == playerSID) {
                this.circleRad = parseInt(getEl("circleRad").value) || 0;
                this.circleRadSpd = parseFloat(getEl("radSpeed").value) || 0;
                this.cAngle += this.circleRadSpd;
            }
            if(this.active) {
                // MOVE:
                let gear = {
                    skin: findID(hats, this.skinIndex),
                    tail: findID(accessories, this.tailIndex),
                };
                let spdMult = (this.buildIndex >= 0 ? 0.5 : 1) * (items.weapons[this.weaponIndex].spdMult || 1) * (gear.skin ? gear.skin.spdMult || 1 : 1) * (gear.tail ? gear.tail.spdMult || 1 : 1) * (this.y <= config.snowBiomeTop ? gear.skin && gear.skin.coldM ? 1 : config.snowSpeed : 1) * this.slowMult;
                this.maxSpeed = spdMult;
            }
        };
        let tmpRatio = 0;
        let animIndex = 0;
        this.animate = function(delta) {
            if(this.animTime > 0) {
                this.animTime -= delta;
                if(this.animTime <= 0) {
                    this.animTime = 0;
                    this.dirPlus = 0;
                    tmpRatio = 0;
                    animIndex = 0;
                } else {
                    if(animIndex == 0) {
                        tmpRatio += delta / (this.animSpeed * config.hitReturnRatio);
                        this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.min(1, tmpRatio));
                        if(tmpRatio >= 1) {
                            tmpRatio = 1;
                            animIndex = 1;
                        }
                    } else {
                        tmpRatio -= delta / (this.animSpeed * (1 - config.hitReturnRatio));
                        this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.max(0, tmpRatio));
                    }
                }
            }
        };
        // GATHER ANIMATION:
        this.startAnim = function(didHit, index) {
            this.animTime = this.animSpeed = items.weapons[index].speed;
            this.targetAngle = didHit ? -config.hitAngle : -Math.PI;
            tmpRatio = 0;
            animIndex = 0;
        };
        // CAN SEE:
        this.canSee = function(other) {
            if(!other) return false;
            let dx = Math.abs(other.x - this.x) - other.scale;
            let dy = Math.abs(other.y - this.y) - other.scale;
            return(dx <= (config.maxScreenWidth / 2) * 1.3 && dy <= (config.maxScreenHeight / 2) * 1.3);
        };
        // SHAME SYSTEM:
        this.judgeShame = function() {
            this.lastshamecount = this.shameCount;
            if(this.oldHealth < this.health) {
                if(this.hitTime) {
                    let timeSinceHit = game.tick - this.hitTime;
                    this.lastHit = game.tick;
                    this.hitTime = 0;
                    if(timeSinceHit < 2) {
                        this.shameCount++;
                    } else {
                        this.shameCount = Math.max(0, this.shameCount - 2);
                    }
                }
            } else if(this.oldHealth > this.health) {
                this.hitTime = game.tick;
            }
        };
        // Anti-Clown System:
        this.addShameTimer = function() {
            this.shameCount = 0;
            this.shameTimer = 30;
            let interval = setInterval(() => {
                this.shameTimer--;
                if(this.shameTimer <= 0) {
                    clearInterval(interval);
                }
            }, 1000);
        };
        // CHECK TEAM:
        this.isTeam = function(tmpObj) {
            return this == tmpObj || (this.team && this.team == tmpObj.team);
        };
        // FOR THE PLAYER:
        this.findAllianceBySid = function(sid) {
            return this.team ? alliancePlayers.find((THIS) => THIS === sid) : null;
        };
        this.checkCanInsta = function(nobull) {
            let totally = 0;
            if(this.alive && inGame) {
                let primary = {
                    weapon: this.weapons[0],
                    variant: this.primaryVariant,
                    dmg: this.weapons[0] == undefined ? 0 : items.weapons[this.weapons[0]].dmg,
                };
                let secondary = {
                    weapon: this.weapons[1],
                    variant: this.secondaryVariant,
                    dmg: this.weapons[1] == undefined ? 0 : items.weapons[this.weapons[1]].Pdmg,
                };
                let bull = this.skins[7] && !nobull ? 1.5 : 1;
                let pV = primary.variant != undefined ? config.weaponVariants[primary.variant].val : 1;
                if(primary.weapon != undefined && this.reloads[primary.weapon] == 0) {
                    totally += primary.dmg * pV * bull;
                }
                if(secondary.weapon != undefined && this.reloads[secondary.weapon] == 0) {
                    totally += secondary.dmg;
                }
                if(this.skins[53] && this.reloads[53] <= (player.weapons[1] == 10 ? 0 : game.tickRate) && near.skinIndex != 22) {
                    totally += 25;
                }
                totally *= near.skinIndex == 6 ? 0.75 : 1;
                return totally;
            }
            return 0;
        };
        // UPDATE WEAPON RELOAD:
        this.manageReload = function() {
            if(this.shooting[53]) {
                this.shooting[53] = 0;
                this.reloads[53] = (2500 - game.tickRate);
            } else {
                if(this.reloads[53] > 0) {
                    this.reloads[53] = Math.max(0, this.reloads[53] - game.tickRate);
                }
            }
            //preplacer
            if(this.reloads[this.weaponIndex] <= 1000 / 9) { //auto preplace
                // place(2, getAttackDir());
                let index = this.weaponIndex;
                let nearObja = liztobj.filter((e) => (e.active || e.alive) && e.health < e.maxHealth && e.group !== undefined && UTILS.getDist(e, player, 0, 2) <= (items.weapons[player.weaponIndex].range + e.scale));
                for(let i = 0; i < nearObja.length; i++) {
                    let aaa = nearObja[i];
                    let val = items.weapons[index].dmg * (config.weaponVariants[tmpObj[(index < 9 ? "prima" : "seconda") + "ryVariant"]].val) * (items.weapons[index].sDmg || 1) * 3.3;
                    let valaa = items.weapons[index].dmg * (config.weaponVariants[tmpObj[(index < 9 ? "prima" : "seconda") + "ryVariant"]].val) * (items.weapons[index].sDmg || 1);
                    if(aaa.health - (valaa) <= 0 && near.length) {
                        place(near.dist2 < ((near.scale * 1.8) + 50) ? 4 : 2, caf(aaa, player) + Math.PI);
                    }
                }
            }
            if(this.gathering || this.shooting[1]) {
                if(this.gathering) {
                    this.gathering = 0;
                    this.reloads[this.gatherIndex] = (items.weapons[this.gatherIndex].speed * (this.skinIndex == 20 ? 0.78 : 1));
                    this.attacked = true;
                }
                if(this.shooting[1]) {
                    this.shooting[1] = 0;
                    this.reloads[this.shootIndex] = (items.weapons[this.shootIndex].speed * (this.skinIndex == 20 ? 0.78 : 1));
                    this.attacked = true;
                }
            } else {
                this.attacked = false;
                if(this.buildIndex < 0) {
                    if(this.reloads[this.weaponIndex] > 0) {
                        // Math.max(0, this.reloads[this.weaponIndex] - game.tickRate)
                        this.reloads[this.weaponIndex] = Math.max(0, this.reloads[this.weaponIndex] - 110);
                        if(this == player) {
                            if(getEl("weaponGrind").checked) {
                                for(let i = 0; i < Math.PI * 2; i += Math.PI / 2) {
                                    checkPlace(player.getItemType(22), i);
                                }
                            }
                        }
                        if(this.reloads[this.primaryIndex] == 0 && this.reloads[this.weaponIndex] == 0) {
                            this.antiBull++;
                            game.tickBase(() => {
                                this.antiBull = 0;
                            }, 1);
                        }
                    }
                }
            }
        };
        // FOR ANTI INSTA:
        this.addDamageThreat = function(tmpObj) {
            let primary = {
                weapon: this.primaryIndex,
                variant: this.primaryVariant,
            };
            primary.dmg = primary.weapon == undefined ? 45 : items.weapons[primary.weapon].dmg;
            let secondary = {
                weapon: this.secondaryIndex,
                variant: this.secondaryVariant,
            };
            secondary.dmg = secondary.weapon == undefined ? 75 : items.weapons[secondary.weapon].Pdmg;
            let bull = 1.5;
            let pV = primary.variant != undefined ? [3, 4, 5, 7].includes(primary.weapon) ? 1 : config.weaponVariants[primary.variant].val : 1.18;
            let sV = secondary.variant != undefined ? [9, 12, 13, 15].includes(secondary.weapon) ? 1 : config.weaponVariants[secondary.variant].val : 1.18;
            if(primary.weapon == undefined ? true : this.reloads[primary.weapon] == 0) {
                this.damageThreat += primary.dmg * pV * bull;
            }
            if(secondary.weapon == undefined ? true : this.reloads[secondary.weapon] == 0) {
                this.damageThreat += secondary.dmg * sV;
            }
            if(this.reloads[53] <= game.tickRate) {
                this.damageThreat += 25;
            }
            this.damageThreat *= tmpObj.skinIndex == 6 ? 0.75 : 1;
            if(!this.isTeam(tmpObj)) {
                if(this.dist2 <= 300) {
                    tmpObj.damageThreat += this.damageThreat;
                }
            }
        };
    }
}
// SOME CODES:
function sendUpgrade(index) {
    player.reloads[index] = 0;
    packet("H", index);
}

function storeEquip(id, index) {
    packet("c", 0, id, index);
}

function storeBuy(id, index) {
    packet("c", 1, id, index);
}

function buyEquip(id, index) {
    let nID = player.skins[6] ? 6 : 0;
    if(player.alive && inGame) {
        if(index == 0) {
            if(player.skins[id]) {
                if(player.latestSkin != id) {
                    packet("c", 0, id, 0);
                }
            } else {
                if(configs.autoBuyEquip) {
                    let find = findID(hats, id);
                    if(find) {
                        if(player.points >= find.price) {
                            packet("c", 1, id, 0);
                            packet("c", 0, id, 0);
                        } else {
                            if(player.latestSkin != nID) {
                                packet("c", 0, nID, 0);
                            }
                        }
                    } else {
                        if(player.latestSkin != nID) {
                            packet("c", 0, nID, 0);
                        }
                    }
                } else {
                    if(player.latestSkin != nID) {
                        packet("c", 0, nID, 0);
                    }
                }
            }
        } else if(index == 1) {
            if(useWasd && id != 11 && id != 0) {
                if(player.latestTail != 0) {
                    packet("c", 0, 0, 1);
                }
                return;
            }
            if(player.tails[id]) {
                if(player.latestTail != id) {
                    packet("c", 0, id, 1);
                }
            } else {
                if(configs.autoBuyEquip) {
                    let find = findID(accessories, id);
                    if(find) {
                        if(player.points >= find.price) {
                            packet("c", 1, id, 1);
                            packet("c", 0, id, 1);
                        } else {
                            if(player.latestTail != 0) {
                                packet("c", 0, 0, 1);
                            }
                        }
                    } else {
                        if(player.latestTail != 0) {
                            packet("c", 0, 0, 1);
                        }
                    }
                } else {
                    if(player.latestTail != 0) {
                        packet("c", 0, 0, 1);
                    }
                }
            }
        }
    }
}

function selectToBuild(index, wpn) {
    packet("z", index, wpn);
}

function selectWeapon(index, isPlace) {
    if(!isPlace) {
        player.weaponCode = index;
    }
    packet("z", index, 1);
}

function sendAutoGather() {
    packet("K", 1, 1);
}

function sendAtck(id, angle) {
    packet("F", id, angle, 1);
}
// PLACER:
function place(id, rad, rmd) {
    try {
        if(id == undefined) return;
        let item = items.list[player.items[id]];
        let tmpS = player.scale + item.scale + (item.placeOffset || 0);
        let tmpX = player.x2 + tmpS * Math.cos(rad);
        let tmpY = player.y2 + tmpS * Math.sin(rad);
        if(player.alive && inGame && player.itemCounts[item.group.id] == undefined ? true : player.itemCounts[item.group.id] < (config.isSandbox ? 299 : item.group.limit ? item.group.limit : 99)) {
            selectToBuild(player.items[id]);
            sendAtck(1, rad);
            selectWeapon(player.weaponCode, 1);
            if(rmd && getEl("placeVis").checked) {
                placeVisible.push({
                    x: tmpX,
                    y: tmpY,
                    name: item.name,
                    scale: item.scale,
                    dir: rad,
                });
                game.tickBase(() => {
                    placeVisible.shift();
                }, 1);
            }
        }
    } catch(e) {}
}

function checkPlace(id, rad) {
    try {
        if(id == undefined) return;
        let item = items.list[player.items[id]];
        let tmpS = player.scale + item.scale + (item.placeOffset || 0);
        let tmpX = player.x2 + tmpS * Math.cos(rad);
        let tmpY = player.y2 + tmpS * Math.sin(rad);
        if(objectManager.checkItemLocation(tmpX, tmpY, item.scale, 0.6, item.id, false, player)) {
            place(id, rad, 1);
        }
    } catch(e) {}
}
//SYNC:
function musketSync() {
    if(getEl("syncType").value === "s1") {
        var musketCheckbox = document.getElementById("musketSync");
        if(musketCheckbox && musketCheckbox.checked) {
            my.autoAim = true;
            selectWeapon(player.weapons[0]);
            buyEquip(7, 0);
            sendAutoGather();
            game.tickBase(() => {
                selectWeapon(player.weapons[1]);
                buyEquip(player.reloads[53] === 0 ? 53 : 6, 0);
                game.tickBase(() => {
                    sendAutoGather();
                    my.autoAim = false;
                }, 3);
            }, 2);
        }
    }
    if(getEl("syncType").value === "s2") {
        my.autoAim = true;
        game.tickBase(() => {
            instaC.isTrue = true;
            selectWeapon(player.weapons[1]);
            buyEquip(53, 0);
            buyEquip(0, 1);
            sendAutoGather();
            game.tickBase(() => {
                my.autoAim = false;
                instaC.isTrue = false;
                sendAutoGather();
            }, 1);
        }, 1);
    }
}
// HEALING:
function soldierMult() {
    return player.latestSkin == 6 ? 0.75 : 1;
}

function healthBased(d) {
    let dmg = player.health - d;
    if(player.health == 100) return 0;
    if(player.skinIndex != 45 && player.skinIndex != 56) {
        return Math.ceil((100 - player.health) / items.list[player.items[0]].healing);
    }
    return 0;
}

function getAttacker(damaged) {
    let attackers = enemy.filter(tmp => {
        //let damages = new Damages(items);
        //let dmg = damages.weapons[tmp.weaponIndex];
        //let by = tmp.weaponIndex < 9 ? [dmg[0], dmg[1], dmg[2], dmg[3]] : [dmg[0], dmg[1]];
        let rule = {
            //one: tmp.dist2 <= 300,
            //two: by.includes(damaged),
            three: tmp.attacked
        }
        return /*rule.one && rule.two && */ rule.three;
    });
    return attackers;
}

function sortWeaponVariant(id) {
    switch(id) {
        case 0:
            return 1
            break;
        case 1:
            return 1.1
            break;
        case 2:
            return 1.18
            break;
        case 3:
            return 1.18
            break;
        default:
            return 1
            break;
    }
}

function sortSecondaryAmmoDamage(weapon) {
    switch(weapon) {
        case 10:
            return 12
            break
        case 15:
            return 50
            break;
        case 9:
            return 25
            break;
        case 12:
            return 35
            break;
        case 13:
            return 30
            break;
        default:
            return 0
    }
}

function potdmg(tmpObj, t) {
    let d = t - tmpObj.health;
    if(d >= 0) {} else {
        if(player == tmpObj) {
            if(tmpObj.skinIndex == 7 && (Math.abs(d) == 5 || (tmpObj.latestTail == 13 && Math.abs(d) == 2))) {
                tmpObj.bullTick = game.tick
                if(my.reSync) {
                    my.reSync = false;
                }
            }
            dmgpotwowwowow();
        }
    }
}
let DmgPotStuff = {
    predictedDamage: 0
};

function DmgPotWorkfrfrfr() {
    DmgPotStuff.predictedDamage = 0;
    for(let i = 0; i < nears.length; i++) {
        let singleIndividual = nears[i];
        if(singleIndividual.primaryIndex != undefined) {
            if(singleIndividual.reloads[singleIndividual.weapons[0]] == 0) {
                DmgPotStuff.predictedDamage += items.weapons[singleIndividual.weapons[0]].dmg * sortWeaponVariant(singleIndividual.weaponVariant) * 1.5
            }
        } else {
            DmgPotStuff.predictedDamage += 45
        }
        if(singleIndividual.secondaryIndex != undefined) {
            if(singleIndividual.reloads[singleIndividual.weapons[1]] == 0) {
                if(items.weapons[singleIndividual.weapons[1]] == 10) {
                    DmgPotStuff.predictedDamage += items.weapons[singleIndividual.weapons[1]].dmg * sortWeaponVariant(singleIndividual.weaponVariant)
                } else {
                    DmgPotStuff.predictedDamage += items.weapons[singleIndividual.weapons[1]].Pdmg
                }
            }
        } else {
            DmgPotStuff.predictedDamage += 50
        }
        if(singleIndividual.reloads[53] == 0) {
            DmgPotStuff.predictedDamage += 25
        }
    }
    return DmgPotStuff.predictedDamage
}

function dmgpotwowwowow() {
    let potential = DmgPotWorkfrfrfr();
    if(nears.length < 180) {
        addMenuChText(null, "Dev", `Dmg potential: ${potential}`, "red");
        //  notif(`Dmg potential: ${potential}`)
        if(Math.round(player.health - potential <= 0)) {
            if((player.health - (potential * player.skinIndex == 6 ? 0.75 : 1) >= 0)) {
                game.tickBase(() => {
                    healer();
                }, 2);
            } else {
                if(player.shameCount < 3) {
                    healer();
                } else {
                    game.tickBase(() => {
                        healer();
                    }, 2);
                }
            }
        } else {
            game.tickBase(() => {
                healer();
            }, 2);
        }
    } else {
        game.tickBase(() => {
            healer();
        }, 2);
    }
}

function healer() {
    for(let i = 0; i < healthBased(); i++) {
        place(0, getAttackDir());
    }
}

function soldierAnti() {
    player.soldierAnti = true;
    buyEquip(6, 0);
    if (document.getElementById("antiInsta").checked) {
        setTimeout(() => {
            player.soldierAnti = false;
        }, 1);
    }
}

function empAnti() {
    player.empAnti = true;
    buyEquip(6, 0);
    if (document.getElementById("antiInsta").checked) {
        setTimeout(() => {
            player.empAnti = false;
        }, 1);
    }
}

function antiSyncHealing(timearg) {
    my.antiSync = true;
    let healAnti = setInterval(() => {
        if (player.shameCount < 5) {
            place(0, getAttackDir());
        }
    }, 25);
    setTimeout(() => {
        clearInterval(healAnti);
        setTimeout(() => {
            my.antiSync = false;
        }, game.tickRate);
    }, game.tickRate);
}

function isPositionValid(position) {
    const playerX = player.x2;
    const playerY = player.y2;
    const distToPosition = Math.hypot(position[0] - playerX, position[1] - playerY);
    return distToPosition > 35;
}

function findAllianceBySid(sid) {
    return player.team ? alliancePlayers.find((THIS) => THIS === sid) : null;
}

function calculatePossibleTrapPositions(x, y, radius) {
    const trapPositions = [];
    const numPositions = 16;
    for(let i = 0; i < numPositions; i++) {
        const angle = (2 * Math.PI * i) / numPositions;
        const offsetX = x + radius * Math.cos(angle);
        const offsetY = y + radius * Math.sin(angle);
        const position = [offsetX, offsetY];
        if(!trapPositions.some((pos) => isPositionTooClose(position, pos))) {
            trapPositions.push(position);
        }
    }
    return trapPositions;
}

function isPositionTooClose(position1, position2, minDistance = 50) {
    const dist = Math.hypot(position1[0] - position2[0], position1[1] - position2[1]);
    return dist < minDistance;
}

function biomeGear(mover, returns) {
        if (player.y2 >= config.mapScale / 2 - config.riverWidth / 2 && player.y2 <= config.mapScale / 2 + config.riverWidth / 2) {
            if (returns) return 31;
            buyEquip(31, 0);
        } else {
            if (player.y2 <= config.snowBiomeTop) {
                if (returns) return mover && player.moveDir == undefined ? 22 : 15;
                buyEquip(mover && player.moveDir == undefined ? 22 : 15, 0);
            } else {
                if (returns) return mover && player.moveDir == undefined ? 22 : 12;
                buyEquip(mover && player.moveDir == undefined ? 22 : 12, 0);
            }
        }
        if (returns) return 0;
    }

class Traps {
    constructor(UTILS, items) {
        this.dist = 0;
        this.aim = 0;
        this.inTrap = false;
        this.replaced = false;
        this.antiTrapped = false;
        this.info = {};
        this.notFast = function() {
            return player.weapons[1] == 10 && ((this.info.health > items.weapons[player.weapons[0]].dmg) || player.weapons[0] == 5);
        }
        this.testCanPlace = function(id, first = -(Math.PI / 2), repeat = (Math.PI / 2), plus = (Math.PI / 18), radian, replacer, yaboi) {
            try {
                let item = items.list[player.items[id]];
                let tmpS = player.scale + item.scale + (item.placeOffset || 0);
                let counts = {
                    attempts: 0,
                    placed: 0
                };
                let tmpObjects = [];
                gameObjects.forEach((p) => {
                    tmpObjects.push({
                        x: p.x,
                        y: p.y,
                        active: p.active,
                        blocker: p.blocker,
                        scale: p.scale,
                        isItem: p.isItem,
                        type: p.type,
                        colDiv: p.colDiv,
                        getScale: function(sM, ig) {
                            sM = sM || 1;
                            return this.scale * ((this.isItem || this.type == 2 || this.type == 3 || this.type == 4) ? 1 : (0.6 * sM)) * (ig ? 1 : this.colDiv);
                        },
                    });
                });
                for(let i = first; i < repeat; i += plus) {
                    counts.attempts++;
                    let relAim = radian + i;
                    let tmpX = player.x2 + tmpS * Math.cos(relAim);
                    let tmpY = player.y2 + tmpS * Math.sin(relAim);
                    let cantPlace = tmpObjects.find((tmp) => tmp.active && UTILS.getDistance(tmpX, tmpY, tmp.x, tmp.y) < item.scale + (tmp.blocker ? tmp.blocker : tmp.getScale(0.6, tmp.isItem)));
                    if(cantPlace) continue;
                    if(item.id != 18 && tmpY >= config.mapScale / 2 - config.riverWidth / 2 && tmpY <= config.mapScale / 2 + config.riverWidth / 2) continue;
                    if((!replacer && yaboi) || useWasd) {
                        if(useWasd ? false : yaboi.inTrap) {
                            if(UTILS.getAngleDist(near.aim2 + Math.PI, relAim + Math.PI) <= Math.PI) {
                                place(2, relAim, 1);
                            } else {
                                player.items[4] == 15 && place(4, relAim, 1);
                            }
                        } else {
                            if(UTILS.getAngleDist(near.aim2, relAim) <= config.gatherAngle / 1.5) {
                                place(2, relAim, 1);
                            } else {
                                player.items[4] == 15 && place(4, relAim, 1);
                            }
                        }
                    } else {
                        place(id, relAim, 1);
                    }
                    tmpObjects.push({
                        x: tmpX,
                        y: tmpY,
                        active: true,
                        blocker: item.blocker,
                        scale: item.scale,
                        isItem: true,
                        type: null,
                        colDiv: item.colDiv,
                        getScale: function() {
                            return this.scale;
                        },
                    });
                    if(UTILS.getAngleDist(near.aim2, relAim) <= 1) {
                        counts.placed++;
                    }
                }
                if(counts.placed > 0 && replacer && item.dmg) {
                    if(near.dist2 <= items.weapons[player.weapons[0]].range + (player.scale * 1.8) && configs.spikeTick && !antiSp) {
                        instaC.canSpikeTick = true;
                    }
                }
            } catch(err) {}
        };
        this.checkSpikeTick = function() {
            try {
                if(![3, 4, 5].includes(near.primaryIndex)) return false;
                if((getEl("safeAntiSpikeTick").checked || my.autoPush) ? false : near.primaryIndex == undefined ? true : (near.reloads[near.primaryIndex] > game.tickRate)) return false;
                // more range for safe. also testing near.primaryIndex || 5
                if(near.dist2 <= items.weapons[near.primaryIndex || 5].range + (near.scale * 1.8)) {
                    let item = items.list[9];
                    let tmpS = near.scale + item.scale + (item.placeOffset || 0);
                    let danger = 0;
                    let counts = {
                        attempts: 0,
                        block: `unblocked`
					};
                    for(let i = -1; i <= 1; i += 1 / 10) {
                        counts.attempts++;
                        let relAim = UTILS.getDirect(player, near, 2, 2) + i;
                        let tmpX = near.x2 + tmpS * Math.cos(relAim);
                        let tmpY = near.y2 + tmpS * Math.sin(relAim);
                        let cantPlace = gameObjects.find((tmp) => tmp.active && UTILS.getDistance(tmpX, tmpY, tmp.x, tmp.y) < item.scale + (tmp.blocker ? tmp.blocker : tmp.getScale(0.6, tmp.isItem)));
                        if(cantPlace) continue;
                        if(tmpY >= config.mapScale / 2 - config.riverWidth / 2 && tmpY <= config.mapScale / 2 + config.riverWidth / 2) continue;
                        danger++;
                        counts.block = `blocked`;
                        break;
                    }
                    if(danger) {
                        my.anti0Tick = 1;
                        player.chat.message = "Anti " + near.sid;
                        player.chat.count = 2000;
                        return true;
                    }
                }
            } catch(err) {
                return null;
            }
            return false;
        }
        this.protect = function(aim) {
            if(!configs.antiTrap) return;
            if(player.items[4]) {
                this.testCanPlace(2, -(Math.PI / 2), (Math.PI / 2), (Math.PI / 18), aim + Math.PI);
                this.antiTrapped = true;
            }
        };
        let placedSpikePositions = new Set();
        let placedTrapPositions = new Set();

        function isBroken() {}
        this.testPrePlace = function() {}
        /* this.autoPlace = function () {
			                if (configs.autoPlace && game.tick % (Math.max(1, parseInt(getEl("autoPlaceTick").value)) || 1) === 0) {
			                    try {
			                                        const trap1 = gameObjects
			                                        .filter((e) => e.trap && e.active)
			                                        .sort((a, b) => UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2))
			                                        .find((trap) => {
			                                            const trapDist = Math.hypot(trap.y - near.y2, trap.x - near.x2);
			                                            return (
			                                                trap !== player &&
			                                                (player.sid === trap.owner.sid || findAllianceBySid(trap.owner.sid)) &&
			                                                trapDist <= 50
			                                            );
			                                        });
			                        if (this.inTrap) {
			                            let antiTrapAngles = Math.PI / Math.floor(Math.random() * (20 - 10 + 1)) + 10;
			                            this.testCanPlace(4, -(Math.PI / 2), (Math.PI / 2), antiTrapAngles, near.aim2);
			                        } else {
			                                        if (trap1 && near.dist2 <= 180) {
			                                            const trapX = trap1.x;
			                                            const trapY = trap1.y;
			                                            const circleRadius = 102;
			                                            const numPositions = 64;
			                                            for (let i = 0; i < numPositions; i++) {
			                                                const angle = (2 * Math.PI * i) / numPositions;
			                                                const offsetX = trapX + circleRadius * Math.cos(angle);
			                                                const offsetY = trapY + circleRadius * Math.sin(angle);
			                                                const position = [offsetX, offsetY];
			                                                const distToPlayer = Math.hypot(position[0] - player.x2, position[1] - player.y2);
			                                                if (
			                                                    isPositionValid(position) &&
			                                                    distToPlayer <= 87
			                                                ) {
			                                                    const angleToPlace = Math.atan2(position[1] - player.y2, position[0] - player.x2);
			                                                    checkPlace(2, angleToPlace);
			                                                }
			                                            }
			                                        } else if (!trap1 && near.dist2 <= 206) {
			                                            const maxTrapsToPlace = 3;
			                                            const trapRadius = 50;
			                                            const trapPositions = calculatePossibleTrapPositions(player.x2, player.y2, trapRadius);
			                                            let trapsPlaced = 0;
			                                            for (const position of trapPositions) {
			                                                if (
			                                                    trapsPlaced < maxTrapsToPlace &&
			                                                    isPositionValid(position)
			                                                ) {
			                                                    checkPlace(4, ...position);
			                                                    trapsPlaced++;
			                                                }
			                                            }
			                                        }
			                        }
			                                    } catch (e) {
			                                        console.log(e);
			                                    }
			                                }
			                            };*/
        this.autoPlace = function() { //speed place poor
            if(getEl("autoPlacetype").value == "spamtrap2") {
                if(game.tick % 0.5 === 0) try {
                    if(configs.autoPlace) {
                        const dist = near.dist2;
                        const trap = gameObjects.filter((e) => e.trap && e.active).sort((a, b) => UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2)).find((trap) => {
                            const trapDist = Math.hypot(trap.y - near.y2, trap.x - near.x2);
                            return(trap !== player && (player.sid === trap.owner.sid || findAllianceBySid(trap.owner.sid)) && trapDist <= near.scale * 1.8);
                        });
                        if(trap && near.dist2 <= 250) {
                            checkPlace(2, Math.atan2(player.y - trap.y, player.x - trap.x) + Math.PI);
                        } else if(!trap && dist <= 400) {
                            if(dist < 200) {
                                for(let i = (-55); i < 55; i += 55) {
                                    checkPlace(2, near.aim2 + toR(i));
                                }
                            }
                            if(dist >= 200) {
                                for(let i = (-90); i < 270; i += 90) {
                                    checkPlace(4, near.aim2 + toR(i));
                                }
                            }
                        }
                    }
                } catch(e) {}
            }
        };
        this.autoPlace = function() {
            if(enemy.length && configs.autoPlace && !instaC.ticking) {
                if(getEl("autoPlacetype").value == "spamtrap") {
                    if(game.tick % (Math.max(1, parseInt(getEl("autoPlaceTick").value)) || 1) === 0) {
                        if(gameObjects.length) {
                            let near2 = {
                                inTrap: false,
                            };
                            let nearTrap = gameObjects.filter(e => e.trap && e.active && e.isTeamObject(player) && UTILS.getDist(e, near, 0, 2) <= (near.scale + e.getScale() + 5)).sort(function(a, b) {
                                return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
                            })[0];
                            if(nearTrap) {
                                near2.inTrap = true;
                            } else {
                                near2.inTrap = false;
                            }
                            if(testMode ? enemy.length : (near.dist2 <= 300)) {
                                if(near.dist2 <= 200) {
                                    this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), near.aim2, 0, {
                                        inTrap: near2.inTrap
                                    });
                                } else {
                                    player.items[4] == 15 && this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), near.aim2);
                                }
                            }
                        } else {
                            if(testMode ? enemy.length : (near.dist2 <= 300)) {
                                player.items[4] == 15 && this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), near.aim2);
                            }
                        }
                    }
                }
            }
        };
        this.autoPlace = function() { //HaThu best perfect place antikick
            if(getEl("autoPlacetype").value == "ramdomplc") {
                try {
                    const dist = near.dist2;
                    const trap = gameObjects.filter((e) => e.trap && e.active).sort((a, b) => UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2)).find((trap) => {
                        const trapDist = Math.hypot(trap.y - near.y2, trap.x - near.x2);
                        return(trap !== player && (player.sid === trap.owner.sid || findAllianceBySid(trap.owner.sid)) && trapDist <= near.scale * 1.8);
                    });
                    if(trap && near.dist2 <= 250) {
                        const angleToTrap = Math.atan2(player.y - trap.y, player.x - trap.x);
                        checkPlace(2, angleToTrap + Math.PI);
                    } else if(!trap && dist <= 300) {
                        if(dist < 200) {
                            const maxAngle = Math.PI / 6;
                            const angleMultiplier = Math.min(1, Math.max(0, (dist - 150) / 130));
                            const adjustedAngle = maxAngle * angleMultiplier;
                            for(let i = -55; i < 55; i += 55) {
                                const perfectAngle = calculatePerfectAngle(near.x2, near.y2, player.x2, player.y2);
                                checkPlace(2, perfectAngle + adjustedAngle + toR(i));
                            }
                        }
                        if(dist >= 200) {
                            const maxAngle = Math.PI / 6;
                            const angleMultiplier = Math.min(1, Math.max(0, (dist - 150) / 130));
                            const adjustedAngle = maxAngle * angleMultiplier;
                            for(let i = -90; i < 270; i += 90) {
                                const perfectAngle = calculatePerfectAngle(near.x2, near.y2, player.x2, player.y2);
                                checkPlace(4, perfectAngle + adjustedAngle + toR(i));
                            }
                        }
                    }
                } catch(e) {}
            };
        }
        this.autoPlace = function() {
            if(configs.autoPlace && game.tick % (Math.max(1, parseInt(getEl("autoPlaceTick").value)) || 1) === 0) {
                if(getEl("autoPlacetype").value == "aiplace") {
                    try {
                        const trap1 = gameObjects.filter((e) => e.trap && e.active).sort((a, b) => UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2)).find((trap) => {
                            const trapDist = Math.hypot(trap.y - near.y2, trap.x - near.x2);
                            return(trap !== player && (player.sid === trap.owner.sid || findAllianceBySid(trap.owner.sid)) && trapDist <= 50);
                        });
                        if(this.inTrap) {
                            let antiTrapAngles = Math.PI / Math.floor(Math.random() * (20 - 10 + 1)) + 10;
                            this.testCanPlace(4, -(Math.PI / 2), (Math.PI / 2), antiTrapAngles, near.aim2);
                        } else {
                            if(trap1 && near.dist2 <= 180) {
                                const trapX = trap1.x;
                                const trapY = trap1.y;
                                const circleRadius = 102;
                                const numPositions = 64;
                                for(let i = 0; i < numPositions; i++) {
                                    const angle = (2 * Math.PI * i) / numPositions;
                                    const offsetX = trapX + circleRadius * Math.cos(angle);
                                    const offsetY = trapY + circleRadius * Math.sin(angle);
                                    const position = [offsetX, offsetY];
                                    const distToPlayer = Math.hypot(position[0] - player.x2, position[1] - player.y2);
                                    if(isPositionValid(position) && distToPlayer <= 87) {
                                        const angleToPlace = Math.atan2(position[1] - player.y2, position[0] - player.x2);
                                        checkPlace(2, angleToPlace);
                                    }
                                }
                            } else if(!trap1 && near.dist2 <= 206) {
                                const maxTrapsToPlace = 3;
                                const trapRadius = 50;
                                const trapPositions = calculatePossibleTrapPositions(player.x2, player.y2, trapRadius);
                                let trapsPlaced = 0;
                                for(const position of trapPositions) {
                                    if(trapsPlaced < maxTrapsToPlace && isPositionValid(position)) {
                                        checkPlace(4, ...position);
                                        trapsPlaced++;
                                    }
                                }
                            }
                        }
                    } catch(e) {
                        console.log(e);
                    }
                }
            };
        }
        this.autoPlace = function() {
            //    if (!configs.autoplacer) return;
            if(enemy.length && configs.autoPlace && !instaC.ticking) {
                if(game.tick % (Math.max(1, parseInt(getEl("autoPlaceTick").value)) || 1) === 0) {
                    if(gameObjects.length) {
                        let near2 = {
                            inTrap: false,
                        };
                        let nearTrap = gameObjects.filter(e => e.trap && e.active && e.isTeamObject(player) && UTILS.getDist(e, near, 0, 2) <= (near.scale + e.getScale() + 5)).sort(function(a, b) {
                            return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
                        })[0];
                        if(nearTrap) {
                            near2.inTrap = true;
                        } else {
                            near2.inTrap = false;
                        }
                        if(near.dist3 <= 450) {
                            if(near.dist3 <= 200) {
                                this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), near.aim2, 0, {
                                    inTrap: near2.inTrap
                                });
                            } else {
                                player.items[4] == 15 && this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), near.aim2);
                            }
                        }
                    } else {
                        if(near.dist3 <= 450) {
                            player.items[4] == 15 && this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), near.aim2);
                        }
                    }
                }
            }
        };
        /* function autoPlace() { // bug place
		        let nearObj = [];
		        if (gameObjects.length && enemy.length) {
		            let inTrap = false;
		            nearObj = gameObjects.filter((e)=>e.trap).sort(function(a, b) {
		                return (UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2));
		            })[0];
		            if (nearObj) {
		                if (!(player.sid != nearObj.owner.sid && !findAllianceBySid(nearObj.owner.sid)) && UTILS.getDist(nearObj, near, 0, 2) <= 70 && nearObj.active) {
		                    inTrap = true;
		                } else {
		                    inTrap = false;
		                }
		                if (near.dist2 <= 350) {
		                    if (inTrap && near.dist2 <= 200) {
		                        if (near.dist2 <= player.scale + near.scale + Math.PI * 2) {
		                            checkPlace(2, near.aim2 - UTILS.getDirect(nearObj, near, 0, 2));
		                            checkPlace(2, near.aim2 + UTILS.getDirect(nearObj, near, 0, 2));
		                        }
		                    }
		                    if (near.dist2 <= near.scale + player.scale) {
		                        checkPlace(2, near.aim2);
		                    } else {
		                        if (near.dist2 <= 200 && !instaC.canSpikeTick && !traps.in && !inTrap) {
		                            checkPlace(2, near.aim2 + UTILS.toRad(90));
		                            checkPlace(2, near.aim2 - UTILS.toRad(90));
		                        } else {
		                            if (near.dist2 <= 250) {
		                                checkPlace(2, near.aim2 + Math.PI);
		                            } else {
		                                for (let i = 0; i < 360; i += 90) {
		                                    checkPlace(4, UTILS.toRad(i));
		                                }
		                            }
		                        }
		                    }
		                }
		            }
		        }
		    }*/
        this.autoplace = function() {
            let oldXY = {
                x: undefined,
                y: undefined,
            };
            if(getEl("autoPlacetype").value == "magicplace") {
                let nearObj = [];
                let randomDir = Math.random() * Math.PI * 2;
                if(gameObjects.length && enemy.length) {
                    let nearsa = {
                        inTrap: false,
                    };
                    nearObj = gameObjects.filter((e) => e.trap).sort(function(a, b) {
                        return(UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2));
                    })[0];
                    let nearTrap = gameObjects.filter(e => e.trap && e.active && e.isTeamObject(player) && UTILS.getDist(e, near, 0, 2) <= (near.scale + e.getScale() + 5)).sort(function(a, b) {
                        return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
                    })[0];
                    let near2 = {
                        inTrap: false,
                    };
                    if(nearTrap) {
                        near2.inTrap = true;
                    } else {
                        near2.inTrap = false;
                    }
                    if(nearObj) {
                        if(!(player.sid != nearObj.owner.sid && !findAllianceBySid(nearObj.owner.sid)) && UTILS.getDist(nearObj, near, 0, 2) <= 70 && nearObj.active) {
                            nearsa.inTrap = true;
                        } else {
                            nearsa.inTrap = false;
                        }
                        if(near.dist2 <= 600) {
                            if(nearsa.inTrap || near.dist2 <= 60 + near.scale) {
                                if(near.dist2 <= 250) {
                                    for(let i = 0; i < Math.PI * 2; i += Math.PI / 1.5) {
                                        checkPlace(2, near.aim2 + i);
                                    }
                                } else {
                                    for(let i = Math.PI / 1.5; i < Math.PI * 2; i += Math.PI / 1.5) {
                                        checkPlace(2, near.aim2 + i);
                                    }
                                }
                            } else {
                                if(player.items[4] == 15) {
                                    if(near.dist2 <= 200) {
                                        for(let i = 0; i < Math.PI * 2; i += Math.PI / 2) {
                                            checkPlace(4, randomDir + i);
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if(near.dist2 <= 400) {
                            if(player.items[4] == 15) {
                                checkPlace(4, near.aim2);
                            }
                        }
                    }
                }
            }
        }
        /*    this.replacer = function(findObj) {
                        if (!findObj || !configs.autoReplace) return;
                        if (!inGame) return;
                        if (this.antiTrapped) return;
                        game.tickBase(() => {
                            let objAim = UTILS.getDirect(findObj, player, 0, 2);
                            let objDst = UTILS.getDist(findObj, player, 0, 2);
                            if (configs.autoGrind && objDst <= items.weapons[player.weaponIndex].range + player.scale) return;
                            if (objDst <= 400 && near.dist2 <= 400) {
                                let danger = this.checkSpikeTick();
                                if (!danger && near.dist2 <= items.weapons[near.primaryIndex || 5].range + (near.scale * 1.8)) {
                                    //this.testCanPlace(2, -(Math.PI / 2), (Math.PI / 2), (Math.PI / 18), objAim, 1);
                                    this.testCanPlace(2, 0, (Math.PI * 2), (Math.PI / 24), objAim, 1);
                                } else {
                                    player.items[4] == 15 && this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), objAim, 1);
                                }
                                this.replaced = true;
                }
            }, 1);
        };
    }
};*/
        function calculatePerfectAngle(x1, y1, x2, y2) {
            return Math.atan2(y2 - y1, x2 - x1);
        }
        this.replacer = function(findObj) { // replacer lmfao best
            if(!findObj || !configs.autoReplace) return;
            if(!inGame) return;
            if(this.antiTrapped) return;
            game.tickBase(() => {
                let objAim = UTILS.getDirect(findObj, player, 0, 2);
                let objDst = UTILS.getDist(findObj, player, 0, 2);
                let perfectAngle = Math.round(calculatePerfectAngle(findObj.x, findObj.y, player.x, player.y) / (Math.PI / 2)) * (Math.PI / 2);
                let canPlaceCondition = [4, 5].includes(player.weapons[0]) && near.dist2 <= items.weapons[near.primaryIndex || 5].range + (near.scale * 1.2) && player.reloads[player.weapons[0]] == 0;
                if(getEl("weaponGrind").checked && objDst <= items.weapons[player.weaponIndex].range + player.scale) return;
                let danger = this.checkSpikeTick();
                if(objDst <= 300 && near.dist2 <= 400) {
                    if(near.dist2 <= 70 && canPlaceCondition && configs.spikeTick) {
                        this.testCanPlace(2, -Math.PI / 4, Math.PI / 4, (Math.PI / 20), near.aim2, 1);
                        this.testCanPlace(4, -Math.PI / 4, Math.PI / 4, Math.PI / 12, near.aim2 + Math.PI, 1)
                    } else if(!danger && near.dist2 <= items.weapons[near.primaryIndex || 5].range + (near.scale * 1.8)) {
                        this.testCanPlace(2, 0, (Math.PI * 2), (Math.PI / 24), perfectAngle, 1);
                    } else {
                        if(player.items[4] == 15) {
                            this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), perfectAngle, 1);
                        }
                        this.replaced = true;
                    }
                }
            }, 1);
        };
    }
};
class Instakill {
    constructor() {
        if(secPacket > 60) return
        this.wait = false;
        this.can = false;
        this.isTrue = false;
        this.nobull = false;
        this.ticking = false;
        this.canSpikeTick = false;
        this.startTick = false;
        this.readyTick = false;
        this.canCounter = false;
        this.revTick = false;
        this.syncHit = false;
        this.changeType = function(type) {
            this.wait = false;
            this.isTrue = true;
            my.autoAim = true;
            let instaLog = [type];
            let backupNobull = near.backupNobull;
            near.backupNobull = false;
            game.tickBase(() => {
                instaLog.push(player.skinIndex);
                game.tickBase(() => {
                    if(near.skinIndex == 22 && getEl("backupNobull").checked) {
                        near.backupNobull = true;
                    }
                    instaLog.push(player.skinIndex);
                }, 1);
            }, 1);
            if(type == "rev") {
                selectWeapon(player.weapons[1]);
                buyEquip(53, 0);
                buyEquip(21, 1);
                sendAutoGather();
                game.tickBase(() => {
                    if(near.dist2 <= 140 && configs.doSpikeOnReverse) place(2, getAttackDir());
                    selectWeapon(player.weapons[0]);
                    buyEquip(7, 0);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                    }, 1);
                }, 1);
            } else if(type == "nobull") {
                selectWeapon(player.weapons[0]);
                sendAutoGather();
                game.tickBase(() => {
                    selectWeapon(player.weapons[1]);
                    buyEquip(player.reloads[53] == 0 ? 53 : 6, 0);
                    buyEquip(19, 1);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                    }, 1);
                }, 1);
            } else if(type == "normal") {
                selectWeapon(player.weapons[0]);
                buyEquip(4, 18);
                game.tickBase(() => {
                buyEquip(7, 0);
                sendAutoGather();
                game.tickBase(() => {
                    selectWeapon(player.weapons[1]);
                    buyEquip(player.reloads[53] == 0 ? 53 : 6, 0);
                    buyEquip(19, 1);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                    }, 1);
                }, 1);
                }, 1);
            } else {
                setTimeout(() => {
                    this.isTrue = false;
                    my.autoAim = false;
                }, 50);
            }
         if (configs.samuraiInsat) {
             omengod("Insta: Fast");
                selectWeapon(player.weapons[1]);
                buyEquip(player.reloads[53] == 0 ? 53 : 6, 0);
                buyEquip(4, 18);
                game.tickBase(() => {
                buyEquip(7, 0);
                sendAutoGather();
                game.tickBase(() => {
                    selectWeapon(player.weapons[0]);
                    buyEquip(19, 1);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                    }, 1);
                }, 2);
                }, 1);
            } else {
                setTimeout(() => {
                    this.isTrue = false;
                    my.autoAim = false;
                }, 50);
            }
        };
        this.spikeTickType = function() {
            this.isTrue = true;
            my.autoAim = true;
            selectWeapon(player.weapons[0]);
            buyEquip(7, 0);
            buyEquip(18, 1);
            sendAutoGather();
            game.tickBase(() => {
                if (player.reloads[53] == 0 && getEl("turretCombat").checked) {
                    selectWeapon(player.weapons[0]);
                    buyEquip(53, 0);
                    buyEquip(18, 1);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                    }, 1);
                } else {
                    sendAutoGather();
                    this.isTrue = false;
                    my.autoAim = false;
                }
            }, 1);
        };
        this.counterType = function() {
            this.isTrue = true;
            my.autoAim = true;
            selectWeapon(player.weapons[0]);
            buyEquip(7, 0);
            sendAutoGather();
            game.tickBase(() => {
                selectWeapon(player.weapons[0]);
                buyEquip(53, 0);
                game.tickBase(() => {
                    sendAutoGather();
                    this.isTrue = false;
                    my.autoAim = false;
                }, 1);
            }, 1);
        };
        this.instaTicky = function () {
                        this.isTrue = true;
                        my.autoAim = true;
                        selectWeapon(player.weapons[1]);
                        buyEquip(40, 0);
                            sendAutoGather();
                            game.tickBase(() => {
                                if (near.dist2 <= 140) place(2, getAttackDir());
                                selectWeapon(player.weapons[0]);
                                buyEquip(7, 0);
                                buyEquip(53, 0);
                               game.tickBase(() => {
                                    sendAutoGather();
                                    buyEquip(6, 0);
                                    this.isTrue = false;
                                    my.autoAim = false;
                                }, 1);
                            }, 1);
                    };
        this.rangeType = function(type) {
            this.isTrue = true;
            my.autoAim = true;
            if(type == "ageInsta") {
                my.ageInsta = false;
                if(player.items[5] == 18) {
                    place(5, near.aim2);
                }
                packet("9", undefined, 1);
                buyEquip(22, 0);
                buyEquip(21, 1);
                game.tickBase(() => {
                    selectWeapon(player.weapons[1]);
                    buyEquip(53, 0);
                    buyEquip(21, 1);
                    sendAutoGather();
                    game.tickBase(() => {
                        sendUpgrade(12);
                        selectWeapon(player.weapons[1]);
                        buyEquip(53, 0);
                        buyEquip(21, 1);
                        game.tickBase(() => {
                            sendUpgrade(15);
                            selectWeapon(player.weapons[1]);
                            buyEquip(53, 0);
                            buyEquip(21, 1);
                            game.tickBase(() => {
                                sendAutoGather();
                                this.isTrue = false;
                                my.autoAim = false;
                            }, 1);
                        }, 1);
                    }, 1);
                }, 1);
            } else {
                selectWeapon(player.weapons[1]);
                if(player.reloads[53] == 0 && near.dist2 <= 700 && near.skinIndex != 22) {
                    buyEquip(53, 0);
                } else {
                    buyEquip(20, 0);
                }
                buyEquip(11, 1);
                sendAutoGather();
                game.tickBase(() => {
                    sendAutoGather();
                    this.isTrue = false;
                    my.autoAim = false;
                }, 1);
            }
        };
       this.oneTickType = function() {
                        this.isTrue = true;
                        my.autoAim = true;
                        biomeGear();
                        buyEquip(19, 1);
                        io.send("9", getAttackDir(), 1);
                        game.tickBase(() => {
                            if (player.weapons[1] == 15) {
                                my.revAim = true;
                            }
                            selectWeapon(player.weapons[[15].includes(player.weapons[1]) ? 1 : 0]);
                            buyEquip(53, 0);
                            buyEquip(19, 1);
                            if ([15].includes(player.weapons[1])) {
                                sendAutoGather();
                            }
                            io.send("9", getAttackDir(), 1);
                            game.tickBase(() => {
                                my.revAim = false;
                                selectWeapon(player.weapons[0]);
                                buyEquip(7, 0);
                                buyEquip(19, 1);
                                if (![15].includes(player.weapons[1])) {
                                    sendAutoGather();
                                }
                                io.send("9", getAttackDir(), 1);
                                game.tickBase(() => {
                                    sendAutoGather();
                                    this.isTrue = false;
                                    my.autoAim = false;
                                    packet("9", undefined, 1);
                                    this.readyTick = false;
                                }, 3);
                            }, 1);
                        }, 1);
                    };
        this.threeOneTickType = function() {
            this.isTrue = true;
            my.autoAim = true;
            selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
            biomeGear();
            buyEquip(11, 1);
            packet("9", near.aim2, 1);
            game.tickBase(() => {
                selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                buyEquip(53, 0);
                buyEquip(11, 1);
                packet("9", near.aim2, 1);
                game.tickBase(() => {
                    selectWeapon(player.weapons[0]);
                    buyEquip(7, 0);
                    buyEquip(19, 1);
                    sendAutoGather();
                    packet("9", near.aim2, 1);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                        packet("9", undefined, 1);
                    }, 1);
                }, 1);
            }, 1);
        };
        this.kmTickType = function() {
            this.isTrue = true;
            my.autoAim = true;
            my.revAim = true;
            selectWeapon(player.weapons[1]);
            buyEquip(53, 0);
            buyEquip(11, 1);
            sendAutoGather();
            packet("9", near.aim2, 1);
            game.tickBase(() => {
                my.revAim = false;
                selectWeapon(player.weapons[0]);
                buyEquip(7, 0);
                buyEquip(19, 1);
                packet("9", near.aim2, 1);
                game.tickBase(() => {
                    sendAutoGather();
                    this.isTrue = false;
                    my.autoAim = false;
                    packet("9", undefined, 1);
                }, 1);
            }, 1);
        };
        this.boostTickType = function() {
            /*this.isTrue = true;
			            my.autoAim = true;
			            selectWeapon(player.weapons[0]);
			            buyEquip(53, 0);
			            buyEquip(11, 1);
			            packet("a", near.aim2);
			            game.tickBase(() => {
			                place(4, near.aim2);
			                selectWeapon(player.weapons[1]);
			                biomeGear();
			                buyEquip(11, 1);
			                sendAutoGather();
			                packet("a", near.aim2);
			                game.tickBase(() => {
			                    selectWeapon(player.weapons[0]);
			                    buyEquip(7, 0);
			                    buyEquip(19, 1);
			                    packet("a", near.aim2);
			                    game.tickBase(() => {
			                        sendAutoGather();
			                        this.isTrue = false;
			                        my.autoAim = false;
			                        packet("a", undefined);
			                    }, 1);
			                }, 1);
			            }, 1);*/
            this.isTrue = true;
            my.autoAim = true;
            biomeGear();
            buyEquip(11, 1);
            packet("9", near.aim2, 1);
            game.tickBase(() => {
                if(player.weapons[1] == 15) {
                    my.revAim = true;
                }
                selectWeapon(player.weapons[[9, 12, 13, 15].includes(player.weapons[1]) ? 1 : 0]);
                buyEquip(53, 0);
                buyEquip(11, 1);
                if([9, 12, 13, 15].includes(player.weapons[1])) {
                    sendAutoGather();
                }
                packet("9", near.aim2, 1);
                place(4, near.aim2);
                game.tickBase(() => {
                    my.revAim = false;
                    selectWeapon(player.weapons[0]);
                    buyEquip(7, 0);
                    buyEquip(19, 1);
                    if(![9, 12, 13, 15].includes(player.weapons[1])) {
                        sendAutoGather();
                    }
                    packet("9", near.aim2, 1);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                        packet("9", undefined, 1);
                    }, 1);
                }, 1);
            }, 1);
        };
         this.gotoGoal = function(goto, OT) {
                        let slowDists = (weeeee) => weeeee * config.playerScale;
                        let goal = {
                            a: goto - OT,
                            b: goto + OT,
                            c: goto - slowDists(1),
                            d: goto + slowDists(1),
                            e: goto - slowDists(2),
                            f: goto + slowDists(2),
                            g: goto - slowDists(4),
                            h: goto + slowDists(4)
                        };
                        let bQ = function(wwww, awwww) {
                            if (player.y2 >= config.mapScale / 2 - config.riverWidth / 2 && player.y2 <= config.mapScale / 2 + config.riverWidth / 2 && awwww == 0) {
                                buyEquip(31, 0);
                            } else {
                                buyEquip(wwww, awwww);
                            }
                        }
                        if (enemy.length) {
                            let dst = near.dist2;
                            bQ(21, 1);
                            this.ticking = true;
                            if (dst >= goal.a && dst <= goal.b) {
                                bQ(22, 0);
                                bQ(13, 1);
                                if (player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0] || player.buildIndex > -1) {
                                    selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                }
                                setTimeout(() => {
                                    this.readyTick = true
                                }, 1000)
                                setTimeout(() => {
                                    this.startTick = true
                                }, 500)
                                return {
                                    dir: undefined,
                                    action: 1
                                };
                            } else {
                                this.readyTick = false
                                if (dst < goal.a) {
                                    if (dst >= goal.g) {
                                        if (dst >= goal.e) {
                                            if (dst >= goal.c) {
                                                bQ(40, 0);
                                                bQ(10, 1);
                                                if (configs.slowOT) {
                                                    player.buildIndex != player.items[1] && selectToBuild(player.items[1]);
                                                } else {
                                                    if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                                        selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                                    }
                                                }
                                            } else {
                                                bQ(22, 0);
                                                bQ(13, 1);
                                                if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                                    selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                                }
                                            }
                                        } else {
                                            bQ(6, 0);
                                            bQ(12, 1);
                                            if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                                selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                            }
                                        }
                                    } else {
                                        biomeGear();
                                        buyEquip(11, 1);
                                        if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                            selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                        }
                                        if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                            selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                        }
                                    }
                                    return {
                                        dir: near.aim2 + Math.PI,
                                        action: 0
                                    };
                                } else if (dst > goal.b) {
                                    if (dst <= goal.h) {
                                        if (dst <= goal.f) {
                                            if (dst <= goal.d) {
                                                bQ(40, 0);
                                                bQ(9, 1);
                                                if (configs.slowOT) {
                                                    player.buildIndex != player.items[1] && selectToBuild(player.items[1]);
                                                } else {
                                                    if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                                        selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                                    }
                                                }
                                            } else {
                                                bQ(22, 0);
                                                bQ(13, 1);
                                                if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                                    selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                                }
                                            }
                                        } else {
                                            bQ(6, 0);
                                            bQ(12, 1);
                                            if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                                selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                            }
                                        }
                                    } else {
                                        biomeGear();
                                        bQ(11, 1);
                                        if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                            selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                        }
                                    }
                                    return {
                                        dir: near.aim2,
                                        action: 0
                                    };
                                }
                                return {
                                    dir: undefined,
                                    action: 0
                                };
                            }
                        } else {
                            this.ticking = false;
                            return {
                                dir: undefined,
                                action: 0
                            };
                        }
                    }
        /** wait 1 tick for better quality */
        this.bowMovement = function() {
            let moveMent = this.gotoGoal(685, 3);
            if(moveMent.action) {
                if(player.reloads[53] == 0 && !this.isTrue) {
                    this.rangeType("ageInsta");
                } else {
                    packet("9", moveMent.dir, 1);
                }
            } else {
                packet("9", moveMent.dir, 1);
            }
        },
            this.tickMovement = function() {
                let dist = player.weapons[1] == 9 ? 240 : 240;
                let actionDist = player.weapons[1] == 9 ? 2 : player.weapons[1] == 12 ? 1.5 : player.weapons[1] == 13 ? 1 : player.weapons[1] == 15 ? 2 : 3;
                let moveMent = this.gotoGoal(238, 3);
                if (moveMent.action) {
                    if (player.reloads[53] == 0 && !this.isTrue) {
                        this.oneTickType();
                    } else {
                        packet("9", moveMent.dir, 1);
                    }
                } else {
                    packet("9", moveMent.dir, 1);
                }
            },
            this.kmTickMovement = function() {
            let moveMent = this.gotoGoal(240, 3);
            if(moveMent.action) {
                if(near.skinIndex != 22 && player.reloads[53] == 0 && !this.isTrue && ((game.tick - near.poisonTick) % config.serverUpdateRate == 8)) {
                    this.kmTickType();
                } else {
                    packet("9", moveMent.dir, 1);
                }
            } else {
                packet("9", moveMent.dir, 1);
            }
        },
            this.boostTickMovement = function() {
            let dist = player.weapons[1] == 9 ? 365 : player.weapons[1] == 12 ? 380 : player.weapons[1] == 13 ? 390 : player.weapons[1] == 15 ? 365 : 370;
            let actionDist = player.weapons[1] == 9 ? 2 : player.weapons[1] == 12 ? 1.5 : player.weapons[1] == 13 ? 1.5 : player.weapons[1] == 15 ? 2 : 3;
            let moveMent = this.gotoGoal(dist, actionDist);
            if(moveMent.action) {
                if(player.reloads[53] == 0 && !this.isTrue) {
                    this.boostTickType();
                } else {
                    packet("9", moveMent.dir, 1);
                }
            } else {
                packet("9", moveMent.dir, 1);
            }
        }
        /** wait 1 tick for better quality */
        this.perfCheck = function(pl, nr) {
            if(nr.weaponIndex == 11 && UTILS.getAngleDist(nr.aim2 + Math.PI, nr.d2) <= config.shieldAngle) return false;
            if(![9, 12, 13, 15].includes(player.weapons[1])) return true;
            let pjs = {
                x: nr.x2 + (70 * Math.cos(nr.aim2 + Math.PI)),
                y: nr.y2 + (70 * Math.sin(nr.aim2 + Math.PI))
            };
            if(UTILS.lineInRect(pl.x2 - pl.scale, pl.y2 - pl.scale, pl.x2 + pl.scale, pl.y2 + pl.scale, pjs.x, pjs.y, pjs.x, pjs.y)) {
                return true;
            }
            let finds = ais.filter(tmp => tmp.visible).find((tmp) => {
                if(UTILS.lineInRect(tmp.x2 - tmp.scale, tmp.y2 - tmp.scale, tmp.x2 + tmp.scale, tmp.y2 + tmp.scale, pjs.x, pjs.y, pjs.x, pjs.y)) {
                    return true;
                }
            });
            if(finds) return false;
            finds = liztobj.filter(tmp => tmp.active).find((tmp) => {
                let tmpScale = tmp.getScale();
                if(!tmp.ignoreCollision && UTILS.lineInRect(tmp.x - tmpScale, tmp.y - tmpScale, tmp.x + tmpScale, tmp.y + tmpScale, pjs.x, pjs.y, pjs.x, pjs.y)) {
                    return true;
                }
            });
            if(finds) return false;
            return true;
        }
    }
};
class Autobuy {
    constructor(buyHat, buyAcc) {
        this.hat = function() {
            buyHat.forEach((id) => {
                let find = findID(hats, id);
                if(find && !player.skins[id] && player.points >= find.price) packet("c", 1, id, 0);
            });
        };
        this.acc = function() {
            buyAcc.forEach((id) => {
                let find = findID(accessories, id);
                if(find && !player.tails[id] && player.points >= find.price) packet("c", 1, id, 1);
            });
        };
    }
}
class Autoupgrade {
    constructor() {
        this.sb = function(upg) {
            upg(3);
            upg(17);
            upg(31);
            upg(23);
            upg(9);
            upg(38);
        };
        this.kh = function(upg) {
            upg(3);
            upg(17);
            upg(31);
            upg(23);
            upg(10);
            upg(38);
            upg(4);
            upg(25);
        };
        this.pb = function(upg) {
            upg(5);
            upg(17);
            upg(32);
            upg(23);
            upg(9);
            upg(38);
        };
        this.ph = function(upg) {
            upg(5);
            upg(17);
            upg(32);
            upg(23);
            upg(10);
            upg(38);
            upg(28);
            upg(25);
        };
        this.db = function(upg) {
            upg(7);
            upg(17);
            upg(31);
            upg(23);
            upg(9);
            upg(34);
        };
        /* old functions */
        this.km = function(upg) {
            upg(7);
            upg(17);
            upg(31);
            upg(23);
            upg(10);
            upg(38);
            upg(4);
            upg(15);
        };
    }
}
class Damages {
    constructor(items) {
        // 0.75 1 1.125 1.5
        this.calcDmg = function(dmg, val) {
            return dmg * val;
        };
        this.getAllDamage = function(dmg) {
            return [
                this.calcDmg(dmg, 0.75),
                dmg,
                this.calcDmg(dmg, 1.125),
                this.calcDmg(dmg, 1.5),
            ];
        };
        this.weapons = [];
        for(let i = 0; i < items.weapons.length; i++) {
            let wp = items.weapons[i];
            let name = wp.name.split(" ").length <= 1 ? wp.name : wp.name.split(" ")[0] + "_" + wp.name.split(" ")[1];
            this.weapons.push(this.getAllDamage(i > 8 ? wp.Pdmg : wp.dmg));
            this[name] = this.weapons[i];
        }
    }
}
/** CLASS CODES */
// jumpscare code warn
let tmpList = [];
// LOADING:
let UTILS = new Utils();
let items = new Items();
let objectManager = new Objectmanager(GameObject, gameObjects, UTILS, config);
let store = new Store();
let hats = store.hats;
let accessories = store.accessories;
let projectileManager = new ProjectileManager(Projectile, projectiles, players, ais, objectManager, items, config, UTILS);
let aiManager = new AiManager(ais, AI, players, items, null, config, UTILS);
let textManager = new Textmanager();
let traps = new Traps(UTILS, items);
let instaC = new Instakill();
let autoBuy = new Autobuy([40, 6, 7, 22, 53, 15, 31], [11, 21, 18, 13]);
let autoUpgrade = new Autoupgrade();
let lastDeath;
let minimapData;
let mapMarker = {};
let mapPings = [];
let tmpPing;
let antiinsta = true;
let antiinsta1 = false;
let breakTrackers = [];
var tracker = {
    draw3: {
        active: false,
        x: 0,
        y: 0,
        scale: 0,
    },
    moveDir: undefined,
    lastPos: {
        x: 0,
        y: 0,
    }
}

function omengod(message) {
    packet("6", message.slice(0, 30));
}
let runAtNextTick = [];

function checkProjectileHolder(x, y, dir, range, speed, indx, layer, sid) {
    let weaponIndx = indx == 0 ? 9 : indx == 2 ? 12 : indx == 3 ? 13 : indx == 5 && 15;
    let projOffset = config.playerScale * 2;
    let projXY = {
        x: indx == 1 ? x : x - projOffset * Math.cos(dir),
        y: indx == 1 ? y : y - projOffset * Math.sin(dir),
    };
    let nearPlayer = players.filter((e) => e.visible && UTILS.getDist(projXY, e, 0, 2) <= e.scale).sort(function(a, b) {
        return UTILS.getDist(projXY, a, 0, 2) - UTILS.getDist(projXY, b, 0, 2);
    })[0];
    if(nearPlayer) {
        if(indx == 1) {
            nearPlayer.shooting[53] = 1;
        } else {
            nearPlayer.shootIndex = weaponIndx;
            nearPlayer.shooting[1] = 1;
            antiProj(nearPlayer, dir, range, speed, indx, weaponIndx);
        }
    }
}
let projectileCount = 0;

function antiProj(tmpObj, dir, range, speed, index, weaponIndex) {
    if(!tmpObj.isTeam(player)) {
        tmpDir = UTILS.getDirect(player, tmpObj, 2, 2);
        if(UTILS.getAngleDist(tmpDir, dir) <= 0.2) {
            tmpObj.bowThreat[weaponIndex]++;
            if(index == 5) {
                projectileCount++;
            }
            setTimeout(() => {
                tmpObj.bowThreat[weaponIndex]--;
                if(index == 5) {
                    projectileCount--;
                }
            }, range / speed);
            if(tmpObj.bowThreat[9] >= 1 && (tmpObj.bowThreat[12] >= 1 || tmpObj.bowThreat[15] >= 1)) {
                place(1, tmpObj.aim2);
                my.anti0Tick = 4;
                if(!my.antiSync) {
                    antiSyncHealing(4);
                }
            } else {
                if(projectileCount >= 2) {
                    place(1, tmpObj.aim2);
                    healer();
                    buyEquip(22, 0);
                    buyEquip(13, 1);
                    my.anti0Tick = 4;
                    if(!my.antiSync) {
                        antiSyncHealing(4);
                    }
                } else {
                    if(projectileCount === 1) { // anti reverse or anti 1 tick with reaper
                        buyEquip(6, 0);
                        buyEquip(13, 1);
                    }
                    /*} else {
					if (projectileCount >= 2) { // anti sync line of defense N1
					return Math.ceil((100 - player.health) / items.list[player.items[0]].healing);
					player.chat.message = "pSyD";
					healer();
					buyEquip(6, 0);
					}
					}*/
                }
            }
        }
    }
}
// SHOW ITEM INFO:
function showItemInfo(item, isWeapon, isStoreItem) {
    if(player && item) {
        UTILS.removeAllChildren(itemInfoHolder);
        itemInfoHolder.classList.add("visible");
        UTILS.generateElement({
            id: "itemInfoName",
            text: UTILS.capitalizeFirst(item.name),
            parent: itemInfoHolder,
        });
        UTILS.generateElement({
            id: "itemInfoDesc",
            text: item.desc,
            parent: itemInfoHolder,
        });
        if(isStoreItem) {} else if(isWeapon) {
            UTILS.generateElement({
                class: "itemInfoReq",
                text: !item.type ? "primary" : "secondary",
                parent: itemInfoHolder,
            });
        } else {
            for(let i = 0; i < item.req.length; i += 2) {
                UTILS.generateElement({
                    class: "itemInfoReq",
                    html: item.req[i] + "<span class='itemInfoReqVal'> x" + item.req[i + 1] + "</span>",
                    parent: itemInfoHolder,
                });
            }
            if(item.group.limit) {
                UTILS.generateElement({
                    class: "itemInfoLmt",
                    text: (player.itemCounts[item.group.id] || 0) + "/" + (config.isSandbox ? 99 : item.group.limit),
                    parent: itemInfoHolder,
                });
            }
        }
    } else {
        itemInfoHolder.classList.remove("visible");
    }
}
// RESIZE:
window.addEventListener("resize", UTILS.checkTrusted(resize));

function resize() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    let scaleFillNative = Math.max(screenWidth / maxScreenWidth, screenHeight / maxScreenHeight) * pixelDensity;
    gameCanvas.width = screenWidth * pixelDensity;
    gameCanvas.height = screenHeight * pixelDensity;
    gameCanvas.style.width = screenWidth + "px";
    gameCanvas.style.height = screenHeight + "px";
    mainContext.setTransform(scaleFillNative, 0, 0, scaleFillNative, (screenWidth * pixelDensity - maxScreenWidth * scaleFillNative) / 2, (screenHeight * pixelDensity - maxScreenHeight * scaleFillNative) / 2);
}
resize();
// MOUSE INPUT:
var usingTouch;
const mals = document.getElementById("touch-controls-fullscreen");
mals.style.display = "block";
mals.addEventListener("mousemove", gameInput, false);

function gameInput(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}
let clicks = {
    left: false,
    middle: false,
    right: false,
};
mals.addEventListener("mousedown", mouseDown, false);

function mouseDown(e) {
    if(attackState != 1) {
        attackState = 1;
        if(e.button == 0) {
            clicks.left = true;
        } else if(e.button == 1) {
            clicks.middle = true;
        } else if(e.button == 2) {
            clicks.right = true;
        }
    }
}
mals.addEventListener("mouseup", UTILS.checkTrusted(mouseUp));

function mouseUp(e) {
    if(attackState != 0) {
        attackState = 0;
        if(e.button == 0) {
            clicks.left = false;
        } else if(e.button == 1) {
            clicks.middle = false;
        } else if(e.button == 2) {
            clicks.right = false;
        }
    }
}
mals.addEventListener("wheel", wheel, false);

function wheel(e) {
    /*        if(player.shameCount > 1) {
            buyEquip(7, 0);
        } else {
            buyEquip(6, 0);
        }*/
}
// INPUT UTILS:
function getMoveDir() {
    let dx = 0;
    let dy = 0;
    for(let key in moveKeys) {
        let tmpDir = moveKeys[key];
        dx += !!keys[key] * tmpDir[0];
        dy += !!keys[key] * tmpDir[1];
    }
    return dx == 0 && dy == 0 ? undefined : Math.atan2(dy, dx);
}

function getSafeDir() {
                if (!player)
                    return 0;
                if (!player.lockDir) {
                    lastDir = Math.atan2(mouseY - (screenHeight / 2), mouseX - (screenWidth / 2));
                }
                if(!traps.spikeBreak && traps.spikeBreak !== false){
                    traps.spikeBreak = false
                }
                if(traps.spikeBreak !== false){
                    return traps.spikeBreak
                }
                return lastDir || 0;
            }
let plusDir = 0;
let lastSpin = Date.now();

function getAttackDir() {
    if(player && Date.now() - lastSpin >= 235 && !(clicks.right || clicks.left)) {
        plusDir += Math.random() * (Math.PI * 2);
        lastSpin = Date.now();
    }
    if(!player) return "0";
    if(my.autoAim || ((clicks.left || (useWasd && near.dist2 <= items.weapons[player.weapons[0]].range + near.scale * 1.8 && !traps.inTrap)) && player.reloads[player.weapons[0]] == 0)) lastDir = getEl("weaponGrind").checked ? getSafeDir() : enemy.length ? near.aim2 : getSafeDir();
    else if(clicks.right && player.reloads[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0) lastDir = getSafeDir();
    else if(traps.inTrap) {
        lastDir = traps.aim;
    } else if(!player.lockDir) {
        if(!player.lockDir && autos.stopspin) {
            if(useWasd) {
                lastDir = lastDir;
            } else {
                lastDir = getSafeDir();
            }
        }
    }
    return lastDir;
}

function getVisualDir() {
    if(!player) return 0;
    lastDir = getSafeDir();
    return lastDir || 0;
}
// KEYS:
function keysActive() {
    return(allianceMenu.style.display != "block" && chatHolder.style.display != "block" && !menuCBFocus);
}

function toggleMenuChat() {
    if(menuChatDiv.style.display != "none") {
        //   chatHolder.style.display = "none";
        // if (menuChatBox.value != "") {
        //commands[command.slice(1)]
        let cmd = function(command) {
            return {
                found: command.startsWith("/") && commands[command.slice(1).split(" ")[0]],
                fv: commands[command.slice(1).split(" ")[0]],
            };
        };
        let command = cmd(menuChatBox.value);
        if(command.found) {
            if(typeof command.fv.action === "function") {
                command.fv.action(menuChatBox.value);
            }
        } else {
            omengod(menuChatBox.value);
        }
        menuChatBox.value = "";
        menuChatBox.blur();
    } else {
        if(menuCBFocus) {
            menuChatBox.blur();
        } else {
            menuChatBox.focus();
        }
    }
}

function keyDown(event) {
    let keyNum = event.which || event.keyCode || 0;
    if(player && player.alive && keysActive()) {
        if(!keys[keyNum]) {
            keys[keyNum] = 1;
            macro[event.key] = 1;
            if(keyNum == 27) {
                openMenu = !openMenu;
                $("#menuDiv").toggle();
                $("#menuChatDiv").toggle();
            } else if(keyNum == 69) {
                sendAutoGather();
            } else if(keyNum == 67) {
                updateMapMarker();
            } else if(player.weapons[keyNum - 49] != undefined) {
                player.weaponCode = player.weapons[keyNum - 49];
            } else if(moveKeys[keyNum]) {
                sendMoveDir();
            } else if(event.key == "m") {
                mills.placeSpawnPads = !mills.placeSpawnPads;
            } else if(event.key === "x") {
                var musketCheckbox = document.getElementById("musketSync");
                if(musketCheckbox && musketCheckbox.checked) {
                }
            } else if(event.key == "z") {
                mills.place = !mills.place;
            } else if (event.key == "Z") {
                typeof window.debug == "function" && window.debug();
            } else if(keyNum == 32) {
                packet("F", 1, getSafeDir(), 1);
                packet("F", 0, getSafeDir(), 1);
            } else if(event.key == ",") {
                io.send("6", "syncon");
                project.send(JSON.stringify(["tezt", "ratio"]));
                // botSkts.push([botPlayer]);
                for(let i = 0; i < botz.length; i++) {
                    // if(botz[i][0]) {
                    botz[i][0].zync(near);
                    console.log(botz[i][0]);
                }
                // project.send("tezt");
                // botSkts.forEach((bot) => {
                //     bot.zync();
                // })
                // io.send("S", 1)
            }
        }
    }
}
// let xx = canvaz.width/2;
// let yy = canvaz.height/2;
// let mouze = {
//     x: xx - mouzeX,
//     y: yy - mouzeY
// }
// let ingamecoorformodabow = {
//     x: player.x + mouze.x,
//     y: player.x + mouze.x
// }
addEventListener("keydown", UTILS.checkTrusted(keyDown));

function keyUp(event) {
    if(player && player.alive) {
        let keyNum = event.which || event.keyCode || 0;
        if(keyNum == 13) {
            toggleMenuChat();
        } else if(keysActive()) {
            if(keys[keyNum]) {
                keys[keyNum] = 0;
                macro[event.key] = 0;
                if(moveKeys[keyNum]) {
                    sendMoveDir();
                } else if(event.key == ",") {
                    player.sync = false;
                }
            }
        }
    }
}
window.addEventListener("keyup", UTILS.checkTrusted(keyUp));

function sendMoveDir() {
    if(found) {
        packet("9", undefined, 1);
    } else {
        let newMoveDir = getMoveDir();
        if (lastMoveDir == undefined || newMoveDir == undefined || Math.abs(newMoveDir - lastMoveDir) > 0.3) {
            if ((!my.autoPush) && !found) {
                packet("9", newMoveDir, 1);
            }
            lastMoveDir = newMoveDir;
        }
    }
}
// BUTTON EVENTS:
function bindEvents() {}
bindEvents();
// ITEM COUNT DISPLAY:
let isItemSetted = [];

function updateItemCountDisplay(index = undefined) {
    for(let i = 3; i < items.list.length; ++i) {
        let id = items.list[i].group.id;
        let tmpI = items.weapons.length + i;
        if(!isItemSetted[tmpI]) {
            isItemSetted[tmpI] = document.createElement("div");
            isItemSetted[tmpI].id = "itemCount" + tmpI;
            getEl("actionBarItem" + tmpI).appendChild(isItemSetted[tmpI]);
            isItemSetted[tmpI].style = `
                      display: block;
                      position: absolute;
                      padding-left: 5px;
                      font-size: 2em;
                      color: #fff;
                      `;
            isItemSetted[tmpI].innerHTML = player.itemCounts[id] || 0;
        } else {
            if(index == id) isItemSetted[tmpI].innerHTML = player.itemCounts[index] || 0;
        }
    }
}
// AUTOPUSH:
function autoPush() {
    let nearTrap = gameObjects.filter(tmp => tmp.trap && tmp.active && tmp.isTeamObject(player) && UTILS.getDist(tmp, near, 0, 2) <= (near.scale + tmp.getScale() + 5)).sort(function(a, b) {
        return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
    })[0];
    if (nearTrap && near && near.dist2 <= 260) {
        let spike = gameObjects.filter(tmp => tmp.dmg && tmp.active && tmp.isTeamObject(player) && UTILS.getDist(tmp, nearTrap, 0, 0) <= (near.scale + nearTrap.scale + tmp.scale)).sort(function(a, b) {
            return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
        })[0];
        if (spike) {
            if(near.dist2 <= 180 && near.health <= 66 && tmpObj.reloads[tmpObj.primaryIndex] == 0){
                instaC.spikeTickType();
            }
            let pos = {
                x: spike.x + (250 * Math.cos(UTILS.getDirect(near, spike, 2, 0))),
                y: spike.y + (250 * Math.sin(UTILS.getDirect(near, spike, 2, 0))),
                x2: spike.x + ((UTILS.getDist(near, spike, 2, 0) + player.scale) * Math.cos(UTILS.getDirect(near, spike, 2, 0))),
                y2: spike.y + ((UTILS.getDist(near, spike, 2, 0) + player.scale) * Math.sin(UTILS.getDirect(near, spike, 2, 0)))
            };
            let finds = gameObjects.filter(tmp => tmp.active).find((tmp) => {
                let tmpScale = tmp.getScale();
                if (!tmp.ignoreCollision && UTILS.lineInRect(tmp.x - tmpScale, tmp.y - tmpScale, tmp.x + tmpScale, tmp.y + tmpScale, player.x2, player.y2, pos.x2, pos.y2)) {
                    return true;
                }
            });
           if (finds) {
                if (my.autoPush) {
                    my.autoPush = false;
                    packet("9", lastMoveDir || undefined, 1);
                }
            } else {
                my.autoPush = true;
                my.pushData = {
                    x: spike.x + Math.cos(70),
                    y: spike.y + Math.sin(70),
                    x2: pos.x2 + Math.cos(30),
                    y2: pos.y2 + Math.sin(30)
                };
                let scale = player.scale / 10;
                let secondArg = UTILS.getDirect(near, spike, 2, 0) > 70 ? near.aim2 : undefined;
                if (UTILS.lineInRect(player.x2 - scale, player.y2 - scale, player.x2 + scale, player.y2 + scale, near.x2, near.y2, pos.x, pos.y)) {
                    packet("9", secondArg, 1);
                    textManager.showText(player.x2, player.y2, 30, 0.15, 1850, "Push him!!", "#00FF00", 2);
                } else {
                    packet("9", UTILS.getDirect(pos, player, 2, 2), 1);
                }
            }
        } else {
            if (my.autoPush) {
                my.autoPush = false;
                packet("9", lastMoveDir || undefined, 1);
            }
        }
    } else {
        if (my.autoPush) {
            my.autoPush = false;
            packet("9", lastMoveDir || undefined, 1);
        }
    }
}
// ADD DEAD PLAYER:
function addDeadPlayer(tmpObj) {
    deadPlayers.push(new DeadPlayer(tmpObj.x, tmpObj.y, tmpObj.dir, tmpObj.buildIndex, tmpObj.weaponIndex, tmpObj.weaponVariant, tmpObj.skinColor, tmpObj.scale, tmpObj.name));
}
/** APPLY SOCKET CODES */
// SET INIT DATA:
function setInitData(data) {
    alliances = data.teams;
}
// SETUP GAME:
function setupGame(yourSID) {
    keys = {};
    macro = {};
    playerSID = yourSID;
    attackState = 0;
    inGame = true;
    packet("F", 0, getAttackDir(), 1);
    my.ageInsta = true;
    if(firstSetup) {
        firstSetup = false;
        gameObjects.length = 0;
        liztobj.length = 0;
    }
}
// ADD NEW PLAYER:
function addPlayer(data, isYou) {
    let tmpPlayer = findPlayerByID(data[0]);
    if(!tmpPlayer) {
        tmpPlayer = new Player(data[0], data[1], config, UTILS, projectileManager, objectManager, players, ais, items, hats, accessories);
        players.push(tmpPlayer);
        if(data[1] != playerSID) {
            addMenuChText(null, `Found ${data[2]} {${data[1]}}`, "lime");
            omengod("(AUTO)Hello, "+data[2]);
        }
    } else {
        if(data[1] != playerSID) {
            addMenuChText(null, `Found ${data[2]} {${data[1]}}`, "lime");
            omengod("(AUTO)Hello, "+data[2]);
        }
    }
    tmpPlayer.spawn(isYou ? true : null);
    tmpPlayer.visible = false;
    tmpPlayer.oldPos = {
        x2: undefined,
        y2: undefined,
    };
    tmpPlayer.x2 = undefined;
    tmpPlayer.y2 = undefined;
    tmpPlayer.x3 = undefined;
    tmpPlayer.y3 = undefined;
    tmpPlayer.setData(data);
    if(isYou) {
        if(!player) {
            window.prepareUI(tmpPlayer);
        }
        player = tmpPlayer;
        camX = player.x;
        camY = player.y;
        my.lastDir = 0;
        updateItems();
        updateAge();
        updateItemCountDisplay();
        if(player.skins[7]) {
            my.reSync = true;
        }
    }
}
// REMOVE PLAYER:
function removePlayer(id) {
    for(let i = 0; i < players.length; i++) {
        if(players[i].id == id) {
            addMenuChText("Game", players[i].name + "[" + players[i].sid + "] left the game", "red");
            omengod("6",player[i].name +" ,has perished.");
            players.splice(i, 1);
            break;
        }
    }
}
// UPDATE HEALTH:
function updateHealth(sid, value) {
    tmpObj = findPlayerBySID(sid);
    if(tmpObj) {
        // tmpObj.lastshamecount = tmpObj.shameCount;
        tmpObj.oldHealth = tmpObj.health;
        tmpObj.health = value;
        tmpObj.judgeShame();
        if(tmpObj.oldHealth > tmpObj.health) {
            tmpObj.timeDamaged = Date.now(); //here'
            tmpObj.damaged = tmpObj.oldHealth - tmpObj.health;
            let damaged = tmpObj.damaged;
            tmpObj = findPlayerBySID(sid);
            let bullTicked = false;
            if(tmpObj.health <= 0) {
                if(!tmpObj.death) {
                    tmpObj.death = true;
                    if(tmpObj != player) {
                        if(tmpObj.skinIndex == 45) {
                            addMenuChText("Game", `${tmpObj.name}[${tmpObj.sid}] has died due to clown`, "red");
                        } else if(tmpObj.shameCount >= 5) {
                            addMenuChText("Game", `${tmpObj.name}[${tmpObj.sid}] has died due to high shame`, "red");
                        } else {
                            addMenuChText("Game", `${tmpObj.name}[${tmpObj.sid}] has died`, "red");
                        }
                    }
                    addDeadPlayer(tmpObj);
                }
            }
            if(tmpObj == player) {
                if(tmpObj.skinIndex == 7 && (damaged == 5 || (tmpObj.latestTail == 13 && damaged == 2))) {
                    // bull ticker
                }
                let antiinsta3 = true;
                let autoheal = false;
                let antiinsta4 = true;
                if(inGame) {
                    let attackers = getAttacker(damaged);
                    let gearDmgs = [0.25, 0.45].map(
                        (val) => val * items.weapons[player.weapons[0]].dmg);
                    let includeSpikeDmgs = near.length ? !bullTicked && gearDmgs.includes(damaged) && near[0].skinIndex == 11 && near[0].tailIndex == 21 : false;
                    let healTimeout = 140;
                    function slowHeal(timer) {
                        setTimeout(() => {
                            healer();
                        }, timer);
                    };
                    if (near.secondaryIndex == 10) {
                              if ([4, 5].includes(near.primaryIndex) && traps.inTrap) {
                                   if (damaged >= 8 && damaged <= 14) {
                                       healer()
                                  } else {
                               slowHeal(healTimeout)
                            }
                        }
                    }
                    if(damaged >= 0 && damaged <= 66 && player.shameCount === 3 && player.shameCount === 3 && tmpObj.primaryIndex !== "4") {
                        // наносится удар который хилиться а на 3 шеймах выключается (из за чего шейм уменьшается)
                        autoheal = true;
                        antiinsta = false;
                        antiinsta1 = false;
                        antiinsta4 = false;
                    } else {
                        if(player.shameCount !== 3) {
                            autoheal = false;
                            antiinsta = true;
                            antiinsta4 = true;
                        }
                    }
                    if(damaged <= 66 && player.shameCount === 2 && tmpObj.primaryIndex !== "4") {
                        // наносится удар который хилиться а на 3 шеймах выключается (из за чего шейм уменьшается)
                        antiinsta = false;
                    } else {
                        if(player.shameCount !== 2) {
                            antiinsta = true;
                        }
                    }
                    if(damaged <= 66 && player.shameCount === 2 && tmpObj.primaryIndex !== "4") {
                        // наносится удар который хилиться а на 3 шеймах выключается (из за чего шейм уменьшается)
                        antiinsta1 = true;
                    } else {
                        if(player.shameCount !== 2) {
                            antiinsta1 = false;
                        }
                    }
                    `if (damaged >= 0 && damaged <= 90 && player.shameCount === 2){ // попытка сделать невозможным довести до 3 шеймов через буллспам
                                                  antiinsta4 = false;
                                                  }else{
                                                  if(player.shameCount !== 3){
                                                  antiinsta4 = true;
                                                  }
                                                  }
                                                  if (damaged >= 0 && damaged <= 90 && !antiinsta){
                                                  if(player.shameCount === 3){
                                                  antiinsta1 = true;
                                                  }else{
                                                  antiinsta1 = false;
                                                  }
                                                  }`;
                    if(damaged <= 66 && player.skinIndex != 6 && enemy.weaponIndex === 4) {
                        game.tickBase(() => {
                            healer();
                        }, 2);
                    }
                    let dmg = 100 - player.health;
                    if(damaged >= (includeSpikeDmgs ? 8 : 20) && tmpObj.damageThreat >= 20 && antiinsta4 && game.tick - tmpObj.antiTimer > 1) {
                        if(tmpObj.reloads[53] == 0 && tmpObj.reloads[tmpObj.weapons[1]] == 0) {
                            empAnti();
                        } else {
                            soldierAnti();
                        }
                        tmpObj.antiTimer = game.tick;
                        let shame = tmpObj.weapons[0] == 4 ? 2 : 5;
                        if(tmpObj.shameCount < shame) {
                            healer();
                        } else {
                            game.tickBase(() => {
                                healer();
                            }, 2);
                        }
                        if(damaged >= (includeSpikeDmgs ? 8 : 20) && tmpObj.damageThreat >= 20 && autoheal) {
                            setTimeout(() => {
                                healer();
                            }, 120);
                        }
                        let dmg = 100 - player.health;
                        if(damaged >= (includeSpikeDmgs ? 8 : 20) && tmpObj.damageThreat >= 20 && antiinsta && tmpObj.primaryIndex !== "4" && game.tick - tmpObj.antiTimer > 1) {
                            if(tmpObj.reloads[53] == 0 && tmpObj.reloads[tmpObj.weapons[1]] == 0) {
                                empAnti();
                            } else {
                                soldierAnti();
                            }
                            tmpObj.antiTimer = game.tick;
                            let shame = tmpObj.weapons[0] == 4 ? 2 : 5;
                            if(tmpObj.shameCount < shame) {
                                healer();
                            } else {
                                game.tickBase(() => {
                                    healer();
                                }, 2);
                            }
                        }
                        if(damaged >= 20 && player.skinIndex == 11 && player.shameCount <= 2) instaC.canCounter = true;
                    } else {
                        game.tickBase(() => {
                            healer();
                        }, 2);
                    }
                    //if (damaged >= 20 && player.skinIndex == 11) instaC.canCounter = true;
                }
                // if (damaged >= 20 && player.skinIndex == 11) instaC.canCounter = true;
            } else {
                if(!tmpObj.setPoisonTick && (tmpObj.damaged == 5 || (tmpObj.latestTail == 13 && tmpObj.damaged == 2))) {
                    tmpObj.setPoisonTick = true;
                }
            }
        }
    }
}
// KILL PLAYER:
function killPlayer() {
    inGame = false;
    lastDeath = {
        x: player.x,
        y: player.y,
    };
}
// UPDATE PLAYER ITEM VALUES:
function updateItemCounts(index, value) {
    if(player) {
        player.itemCounts[index] = value;
        updateItemCountDisplay(index);
    }
}
// UPDATE AGE:
function updateAge(xp, mxp, age) {
    if(xp != undefined) player.XP = xp;
    if(mxp != undefined) player.maxXP = mxp;
    if(age != undefined) player.age = age;
}
// UPDATE UPGRADES:
function updateUpgrades(points, age) {
    player.upgradePoints = points;
    player.upgrAge = age;
    if(points > 0) {
        tmpList.length = 0;
        UTILS.removeAllChildren(upgradeHolder);
        for(let i = 0; i < items.weapons.length; ++i) {
            if(items.weapons[i].age == age && (items.weapons[i].pre == undefined || player.weapons.indexOf(items.weapons[i].pre) >= 0)) {
                let e = UTILS.generateElement({
                    id: "upgradeItem" + i,
                    class: "actionBarItem",
                    onmouseout: function() {
                        showItemInfo();
                    },
                    parent: upgradeHolder,
                });
                e.style.backgroundImage = getEl("actionBarItem" + i).style.backgroundImage;
                tmpList.push(i);
            }
        }
        for(let i = 0; i < items.list.length; ++i) {
            if(items.list[i].age == age && (items.list[i].pre == undefined || player.items.indexOf(items.list[i].pre) >= 0)) {
                let tmpI = items.weapons.length + i;
                let e = UTILS.generateElement({
                    id: "upgradeItem" + tmpI,
                    class: "actionBarItem",
                    onmouseout: function() {
                        showItemInfo();
                    },
                    parent: upgradeHolder,
                });
                e.style.backgroundImage = getEl("actionBarItem" + tmpI).style.backgroundImage;
                tmpList.push(tmpI);
            }
        }
        for(let i = 0; i < tmpList.length; i++) {
            (function(i) {
                let tmpItem = getEl("upgradeItem" + i);
                // tmpItem.onmouseover = function() {
                //     if (items.weapons[i]) {
                //         showItemInfo(items.weapons[i], true);
                //     } else {
                //         showItemInfo(items.list[i - items.weapons.length]);
                //     }
                // };
                tmpItem.onclick = UTILS.checkTrusted(function() {
                    packet("H", i);
                });
                UTILS.hookTouchEvents(tmpItem);
            })(tmpList[i]);
        }
        if(tmpList.length) {
            upgradeHolder.style.display = "block";
            upgradeCounter.style.display = "block";
            upgradeCounter.innerHTML = "SELECT ITEMS (" + points + ")";
        } else {
            upgradeHolder.style.display = "none";
            upgradeCounter.style.display = "none";
            showItemInfo();
        }
    } else {
        upgradeHolder.style.display = "none";
        upgradeCounter.style.display = "none";
        showItemInfo();
    }
}

function toR(e) {
    var n = (e * Math.PI / 180) % (2 * Math.PI);
    return n > Math.PI ? Math.PI - n : n
}

function toD(e) {
    var n = (e / Math.PI * 360) % 360;
    return n >= 360 ? n - 360 : n;
}

// KILL OBJECT:
function killObject(sid) {
    let findObj = findObjectBySid(sid);
    objectManager.disableBySid(sid);
    if(player) {
        for(let i = 0; i < breakObjects.length; i++) {
            if(breakObjects[i].sid == sid) {
                breakObjects.splice(i, 1);
                break;
            }
        }
        if(!player.canSee(findObj)) {
            breakTrackers.push({
                x: findObj.x,
                y: findObj.y,
            });
        }
        if(breakTrackers.length > 8) {
            breakTrackers.shift();
        }
        if (near.dist2 <= 175 && traps.inTrap && traps.info.health <= 273.01) {
                    buyEquip(6, 0);
                        antiSp = true;
                    setTimeout(() => {
                        antiSp = false;
                    }, 100);
                }
        traps.replacer(findObj);
    }
}
// KILL ALL OBJECTS BY A PLAYER:
function killObjects(sid) {
    if(player) objectManager.removeAllItems(sid);
}

function fgdo(a, b) {
    return Math.sqrt(Math.pow((b.y - a.y), 2) + Math.pow((b.x - a.x), 2));
}

function perfectReplace() {
    let range = items.weapons[player.weapons[0]].range + 70;
    gameObjects.forEach(tmpObj => {
        let objDst = UTILS.getDist(tmpObj, player, 0, 2);
        let perfectAngle = UTILS.getDirect(tmpObj, player, 0, 2);
        if(tmpObj.health <= 300 && fgdo(tmpObj, player) <= 300 && near.dist2 <= 300 || ((near.length && near.reloads[near.weaponIndex] <= config.tickRate * (window.pingTime >= 200 ? 2 : 1)) || player.reloads[player.weaponIndex] * 1000 <= config.tickRate * (window.pingTime >= 200 ? 2 : 1))) {
            omengod("pFe");
            // setTickout(() => {
            place(2, perfectAngle);
            // }, 2);
        }
    });
}

function setTickout(doo, timeout) {
    if(!ticks.manage[ticks.tick + timeout]) {
        ticks.manage[ticks.tick + timeout] = [doo];
    } else {
        ticks.manage[ticks.tick + timeout].push(doo);
    }
}

function caf(e, t) {
    try {
        return Math.atan2(
            (t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x));
    } catch(e) {
        return 0;
    }
}
let found = false;
let autoQ = false;
let autos = {
    insta: {
        todo: false,
        wait: false,
        count: 4,
        shame: 5,
    },
    bull: false,
    antibull: 0,
    reloaded: false,
    stopspin: true,
};
// UPDATE PLAYER DATA:
function updatePlayers(data) {
    //bulltick
    if (player.shameCount > 0 && near.dist2 >= 260) {
        my.reSync = true;
    } else {
        my.reSync = false;
    }
    // let movementPrediction = {
    //     x: player.x2 + (player.oldPos.x2 - player.x2) * -1,
    //     y: player.y2 + (player.oldPos.y2 - player.y2) * -1,
    // }
    //     let potentialzpiketick = liztobj.filter((e) => e.active && e.dmg)
    //     potentialzpiketick.forEach((obj) => {
    //         if(cdf(obj, player) <= 200) {
    //             packet('a', undefined);
    //         }
    //     })
    // let newPos = {
    //     x: player.x2 + (tracker.lastPos.x - player.x2) * -1,
    //     y: player.y2 + (tracker.lastPos.y - player.y2) * -1,
    // }
    function getAngleDifference(angle1, angle2) {
        // Normalize the angles to be between 0 and 2π
        angle1 = angle1 % (2 * Math.PI);
        angle2 = angle2 % (2 * Math.PI);
        // Calculate the absolute difference between the angles
        let diff = Math.abs(angle1 - angle2);
        // Adjust the difference to be between 0 and π
        if(diff > Math.PI) {
            diff = 2 * Math.PI - diff;
        }
        return diff;
    }
    /*    function smartMove(oneTickMove) {
        let dir = player.moveDir;

        let found = false;
        let buildings = liztobj.sort((a, b) => Math.hypot(player.y2 - a.y, player.x2 - a.x) - Math.hypot(player.y2 - b.y, player.x2 - b.x));
        let spikes = buildings.filter(obj => obj.dmg && cdf(player, obj) < 250 && !obj.isTeamObject(player) && obj.active);

        let newPos = {
            x: player.x2 + (player.x2 - player.oldPos.x2) * 1.2 + (Math.cos(dir) * 50),
            y: player.y2 + (player.y2 - player.oldPos.y2) * 1.2 + (Math.sin(dir) * 50),
        };

        for (let i = 0; i < spikes.length; i++) {
            if (cdf(spikes[i], newPos) < spikes[i].scale + player.scale + 3) {
                found = Math.atan2(player.y2 - spikes[i].y, player.x2 - spikes[i].x);
            }
        }

        if (found != false && !traps.inTrap) {
            packet("a", undefined);
        } else {
            packet("a", dir);
        }

        player.oldPos.x2 = player.x2;
        player.oldPos.y2 = player.y2;
    }

    function detectEnemySpikeCollisions(tmpObj) {
        let buildings = liztobj.sort((a, b) => Math.hypot(tmpObj.y - a.y, tmpObj.x - a.x) - Math.hypot(tmpObj.y - b.y, tmpObj.x - b.x));
        let spikes = buildings.filter(obj => obj.dmg && cdf(player, obj) < 200 && !obj.isTeamObject(player) && obj.active);
        //here you calculate last vel / delta, add that to current pos, if touch spike do the heh
        let enemy = {
            x: player.x2 + (player.oldPos.x2 - player.x2) * -1,
            y: player.y2 + (player.oldPos.y2 - player.y2) * -1,
        };
        let found = false;
        for (let i = 0; i < spikes.length; i++) {
            if (cdf(enemy, spikes[i]) < player.scale + spikes[i].scale) {
                found = true;
            }
        }
        // player.oldPos.x2 = tmpObj.x2;
        // player.oldPos.y2 = tmpObj.y2;
    }
*/
    game.tick++;
    enemy = [];
    nears = [];
    near = [];
    game.tickSpeed = performance.now() - game.lastTick;
    game.lastTick = performance.now();
    players.forEach((tmp) => {
        tmp.forcePos = !tmp.visible;
        tmp.visible = false;
        if(tmp.timeHealed - tmp.timeDamaged > 0 && tmp.lastshamecount < tmp.shameCount) tmp.pinge = tmp.timeHealed - tmp.timeDamaged;
    });
    for(let i = 0; i < data.length;) {
        tmpObj = findPlayerBySID(data[i]);
        if(tmpObj) {
            tmpObj.t1 = tmpObj.t2 === undefined ? game.lastTick : tmpObj.t2;
            tmpObj.t2 = game.lastTick;
            tmpObj.oldPos.x2 = tmpObj.x2;
            tmpObj.oldPos.y2 = tmpObj.y2;
            tmpObj.x1 = tmpObj.x;
            tmpObj.y1 = tmpObj.y;
            tmpObj.x2 = data[i + 1];
            tmpObj.y2 = data[i + 2];
            tmpObj.x3 = tmpObj.x2 + (tmpObj.x2 - tmpObj.oldPos.x2);
            tmpObj.y3 = tmpObj.y2 + (tmpObj.y2 - tmpObj.oldPos.y2);
            tmpObj.d1 = tmpObj.d2 === undefined ? data[i + 3] : tmpObj.d2;
            tmpObj.d2 = data[i + 3];
            tmpObj.dt = 0;
            tmpObj.buildIndex = data[i + 4];
            tmpObj.weaponIndex = data[i + 5];
            tmpObj.weaponVariant = data[i + 6];
            tmpObj.team = data[i + 7];
            tmpObj.isLeader = data[i + 8];
            tmpObj.oldSkinIndex = tmpObj.skinIndex;
            tmpObj.oldTailIndex = tmpObj.tailIndex;
            tmpObj.skinIndex = data[i + 9];
            tmpObj.tailIndex = data[i + 10];
            tmpObj.iconIndex = data[i + 11];
            tmpObj.zIndex = data[i + 12];
            tmpObj.visible = true;
            tmpObj.update(game.tickSpeed);
            tmpObj.dist2 = UTILS.getDist(tmpObj, player, 2, 2);
            tmpObj.aim2 = UTILS.getDirect(tmpObj, player, 2, 2);
            tmpObj.dist3 = UTILS.getDist(tmpObj, player, 3, 3);
            tmpObj.aim3 = UTILS.getDirect(tmpObj, player, 3, 3);
            tmpObj.damageThreat = 0;
            if(tmpObj.skinIndex == 45 && tmpObj.shameTimer <= 0) {
                tmpObj.addShameTimer();
            }
            if(tmpObj.oldSkinIndex == 45 && tmpObj.skinIndex != 45) {
                tmpObj.shameTimer = 0;
                tmpObj.shameCount = 0;
                if(tmpObj == player) {
                    healer();
                }
            }
            botSkts.forEach((bot) => {
                bot.showName = "YEAHHH";
            });
            for(let i = 0; i < players.length; i++) {
                for(let aa = 0; aa < botSkts.length; aa++) {
                    if(player.id === aa.id) aa.showName = "YEAHHHHHH";
                }
            }
            if(player.shameCount < 4 && near.dist3 <= 300 && near.reloads[near.primaryIndex] <= game.tickRate * (window.pingTime >= 200 ? 2 : 1)) {
                autoQ = true;
                healer();
            } else {
                if(autoQ) {
                    healer();
                }
                autoQ = false;
            }
                        if (tmpObj == player) {
                                        if(getEl("avoidspike").checked && gameObjects.length) {
                                            let dir = lastMoveDir;
                                            let newPos = {
                                                x: player.x2 + (player.x2 - player.oldPos.x2) * 1.3 + (Math.cos(dir) * 50),
                                                y: player.y2 + (player.y2 - player.oldPos.y2) * 1.3 + (Math.sin(dir) * 50),
                                            }
                                            let found = false
                                            let ez;
                                            // gameObjects = gameObjects.filter(ggs => ggs.active && fgdo(player, ggs) < 700)
                                            ez = gameObjects.filter(ggs => ggs.dmg && !ggs.isTeamObject(player) && ggs.active && fgdo(player, ggs) < 260)
                                            let buildings = ez.sort((a, b) => Math.hypot(player.y2 - a.y, player.x2 - a.x) - Math.hypot(player.y2 - b.y, player.x2 - b.x))
                                            let spikes = ez // buildings.filter(obj => obj.dmg && fgdo(player, obj) < 250 && !obj.isTeamObject(player) && obj.active)
                                            for (let i = 0; i < spikes.length; i++) {
                                                if (fgdo(spikes[i], newPos) < spikes[i].scale + player.scale+5) {
                                                    found = Math.atan2(player.y2 - spikes[i].y, player.x2 - spikes[i].x)
                                                }
                                            }
                                            if (found != false && !traps.inTrap && player.moveDir) {
                                                io.send("e");
                                                player.moveDir = null
                                            } else {
                                                packet("9", player.moveDir, 1)

                                            }
                                        }
                            if (gameObjects.length) {
                                gameObjects.forEach((tmp) => {
                                    tmp.onNear = false;
                                    if (tmp.active) {
                                        if (!tmp.onNear && UTILS.getDist(tmp, tmpObj, 0, 2) <= tmp.scale + items.weapons[tmpObj.weapons[0]].range) {
                                            tmp.onNear = true;
                                        }

                                        }
                                        if(configs.spikeBreak && my.waitHit == 0 && !tmp.isTeamObject(player) && tmp.active && tmp.dmg && player.reloads[player.secondaryIndex] == 0 && UTILS.getDistance(tmp.x, tmp.y, player.x2 + (player.oldPos.x2 - player.x2) * -1, player.y2 + (player.oldPos.y2 - player.y2) * -1) <= (tmp.scale + items.weapons[player.weapons[1]].range)) {
                                            if ([7, 8].includes(player.weapons[0])) {
                                            selectWeapon(player.weapons[1]);
                                            }
                                            player.weaponIndex == player.secondaryIndex;
                                           player.secondaryIndex == 10;
                                            if(player.skins[40])buyEquip(40, 0);
                                            traps.aim = UTILS.getDirect(tmp, player, 0, 2);
                                            my.waitHit = 1;
                                            //packet("D", (UTILS.getDirect(tmp, player, 0, 2)));
                                            traps.spikeBreak = (UTILS.getDirect(tmp, player, 0, 2))
                                            sendAutoGather()
                                            game.tickBase(() => {
                                                sendAutoGather()
                                                lastDir = UTILS.getDirect(tmp, player, 0, 2);
                                                traps.aim = UTILS.getDirect(tmp, player, 0, 2);
                                                buyEquip(6, 0);
                                                my.waitHit = 0;
                                                traps.spikeBreak = false
                                            }, 1);
                                     }
                                        if (tmp.isItem && tmp.owner) {
                                            if (!tmp.pps && tmpObj.sid == tmp.owner.sid && UTILS.getDist(tmp, tmpObj, 0, 2) > (parseInt(700) || 0) && !tmp.breakObj && ![13, 14, 20].includes(tmp.id)) {
                                                tmp.breakObj = true;
                                                breakObjects.push({
                                                    x: tmp.x,
                                                    y: tmp.y,
                                                    sid: tmp.sid
                                                });
                                            }
                                        }
                                });
                    let nearTrap = liztobj.filter(e => e.trap && e.active && UTILS.getDist(e, tmpObj, 0, 2) <= (tmpObj.scale + e.getScale() + 25) && !e.isTeamObject(tmpObj)).sort(function(a, b) {
                        return UTILS.getDist(a, tmpObj, 0, 2) - UTILS.getDist(b, tmpObj, 0, 2);
                    })[0];
 if (nearTrap) {
                                                    let spike = gameObjects.filter(obj => (obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "spinning spikes" || obj.name == "poison spikes") && fgdo(player, obj) < player.scale + obj.scale + 20 && !obj.isTeamObject(tmpObj) && obj.active)[0]
                                                    traps.dist = UTILS.getDist(nearTrap, tmpObj, 0, 2);
                                                    if (spike) {
                                                        traps.aim = UTILS.getDirect(spike, tmpObj, 0, 2);
                                                    } else {
                                                        traps.aim = UTILS.getDirect(nearTrap, tmpObj, 0, 2);
                                                    }
                        traps.protect(caf(nearTrap, tmpObj) - Math.PI);
                        traps.inTrap = true;
                        traps.info = nearTrap;
                    } else {
                        traps.inTrap = false;
                        traps.info = {};
                    }
                } else {
                    traps.inTrap = false;
                }
            }
            if(tmpObj.weaponIndex < 9) {
                tmpObj.primaryIndex = tmpObj.weaponIndex;
                tmpObj.primaryVariant = tmpObj.weaponVariant;
            } else if(tmpObj.weaponIndex > 8) {
                tmpObj.secondaryIndex = tmpObj.weaponIndex;
                tmpObj.secondaryVariant = tmpObj.weaponVariant;
            }
        }
        i += 13;
    }
    if(textManager.stack.length) {
        let damageValue = 0;
        let healValue = 0;
        let currentDamagePos = null;
        let currentHealPos = null;
        for(const text of textManager.stack) {
            // Update values based on sign
            if(text.value >= 0) {
                damageValue += Math.abs(text.value);
                currentDamagePos = currentDamagePos || {
                    x: text.x,
                    y: text.y
                };
            } else {
                healValue += Math.abs(text.value);
                currentHealPos = currentHealPos || {
                    x: text.x,
                    y: text.y
                };
            }
            if(damageValue > 0 && currentDamagePos) {
                textManager.showText(currentDamagePos.x, currentDamagePos.y, Math.max(70, Math.min(30)), .18, 5000, damageValue, "white");
                damageValue = 0;
                currentDamagePos = null;
            }
            if(healValue > 0 && currentHealPos) {
                textManager.showText(currentHealPos.x, currentHealPos.y, Math.max(0, Math.min(0)), 0, 0, healValue, "#ed25ee");
                healValue = 0;
                currentHealPos = null;
            }
        }
        textManager.stack = [];
    }
    if(runAtNextTick.length) {
        runAtNextTick.forEach((tmp) => {
            checkProjectileHolder(...tmp);
        });
        runAtNextTick = [];
    }
    for(let i = 0; i < data.length;) {
        tmpObj = findPlayerBySID(data[i]);
        if(tmpObj) {
            if(!tmpObj.isTeam(player)) {
                enemy.push(tmpObj);
                if(tmpObj.dist2 <= items.weapons[tmpObj.primaryIndex == undefined ? 5 : tmpObj.primaryIndex].range + player.scale * 2) {
                    nears.push(tmpObj);
                }
            }
            tmpObj.manageReload();
            if(tmpObj != player) {
                tmpObj.addDamageThreat(player);
            }
        }
        i += 13;
    }
    /*projectiles.forEach((proj) => {
	              tmpObj = proj;
	              if (tmpObj.active) {
	                  tmpObj.tickUpdate(game.tickSpeed);
	              }
	          });*/
    if(player && player.alive) {
        if(enemy.length) {
            near = enemy.sort(function(tmp1, tmp2) {
                return tmp1.dist2 - tmp2.dist2;
            })[0];
        } else {
            // console.log("no enemy");
        }
        if(game.tickQueue[game.tick]) {
            game.tickQueue[game.tick].forEach((action) => {
                action();
            });
            game.tickQueue[game.tick] = null;
        }
        players.forEach((tmp) => {
            if(!tmp.visible && player != tmp) {
                tmp.reloads = {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0,
                    11: 0,
                    12: 0,
                    13: 0,
                    14: 0,
                    15: 0,
                    53: 0,
                };
            }
            if(tmp.setBullTick) {
                tmp.bullTimer = 0;
            }
            if(tmp.setPoisonTick) {
                tmp.poisonTimer = 0;
            }
            tmp.updateTimer();
        });
        if(inGame) {
            if(enemy.length) {
                if (near.dist2 < 600) {
                    let nearTrap = liztobj.filter(e => e.trap && e.active && e.health < 250 && e.isTeamObject(player) && UTILS.getDist(e, near, 0, 2) <= (near.scale + e.getScale() + 5)).sort(function(a, b) {
                        return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
                    })[0];
                    near.inTrapPh = nearTrap;
                } else {
                    near.inTrapPh = [];
                }
                if(player.canEmpAnti) {
                    player.canEmpAnti = false;
                    if(near.dist2 <= 300 && !my.safePrimary(near) && !my.safeSecondary(near)) {
                        if(near.reloads[53] == 0) {
                            empAnti();
                            //modLog("EmpAnti");
                        } else {
                            soldierAnti();
                            //modLog("SoldierAnti");
                        }
                    }
                }
                if ([3, 4, 5].includes(player.weapons[0]) && getEl("instaTicky").checked && near.dist2 <= 140 && near.inTrapPh && player.reloads[player.weapons[0]] == 0 && player.reloads[player.weapons[1]] == 0 && near.dist2 <= items.weapons[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]].range + near.scale * 1.8) {
                            instaC.instaTicky();
                }
                let prehit = liztobj.filter(
                    (tmp) => tmp.dmg && tmp.active && tmp.isTeamObject(player) && UTILS.getDist(tmp, near, 0, 3) <= tmp.scale + near.scale).sort(function(a, b) {
                    return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
                })[0];
                if(prehit) {
                    if(near.dist3 <= items.weapons[player.weapons[0]].range + player.scale * 1.8 && configs.predictTick) {
                        instaC.canSpikeTick = true;
                        instaC.syncHit = true;
                        if(configs.revTick && player.weapons[1] == 15 && player.reloads[53] == 0 && instaC.perfCheck(player, near)) {
                            instaC.revTick = true;
                        }
                    }
                }
                let antiSpikeTick = gameObjects.filter(tmp => tmp.dmg && tmp.active && !tmp.isTeamObject(player) && UTILS.getDist(tmp, player, 0, 3) < (tmp.scale + player.scale)).sort(function(a, b) {
                    return UTILS.getDist(a, player, 0, 2) - UTILS.getDist(b, player, 0, 2);
                })[0];
                if(antiSpikeTick && !traps.inTrap) {
                    if(near.dist2 <= items.weapons[5].range + near.scale * 1.8) {
                        my.anti0Tick = 1;
                        player.chat.message = "Anti " + near.sid + " (" + near.name + ")";
                        player.chat.count = 2000;
                    }
                }
            }
            if(
                (useWasd ? true : (player.checkCanInsta(true) >= 100 ? player.checkCanInsta(true) : player.checkCanInsta(false)) >= (player.weapons[1] == 10 ? 95 : 100)) && near.dist2 <= items.weapons[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]].range + near.scale * 1.8 && (instaC.wait || (useWasd && Math.floor(Math.random() * 5) == 0)) && !instaC.isTrue && !my.waitHit && player.reloads[player.weapons[0]] == 0 && player.reloads[player.weapons[1]] == 0 && (useWasd ? true : getEl("instaType").value == "oneShot" ? player.reloads[53] <= (player.weapons[1] == 10 ? 0 : game.tickRate) : true) && instaC.perfCheck(player, near)) {
                if(player.checkCanInsta(true) >= 100) {
                    instaC.nobull = useWasd ? false : instaC.canSpikeTick ? false : true;
                } else {
                    instaC.nobull = false;
                }
                instaC.can = true;
            } else {
                instaC.can = false;
            }
            async function antiSpikeTickop() {
                if (traps.inTrap && near.dist2 <= items.weapons[near.primaryIndex || 5].range + near.scale * 1.2 && [3, 4, 5].includes(near.primaryIndex) && traps.info.health <= items.weapons[player.weaponIndex].dmg * (config.weaponVariants[player[(player.weaponIndex < 9 ? "prima" : "seconda") + "ryVariant"]].val) * (items.weapons[player.weaponIndex].sDmg || 1) * 3.3) {
                    buyEquip(6, 0);
                    my.reSync = false;
                    if ([5, 4, 3].includes(near.primaryIndex)) {
                        if (traps.inTrap) {
                            while (traps.inTrap) {
                                await new Promise(resolve => setTimeout(resolve, 1));
                                if (!traps.inTrap) {
                                    my.anti0Tick = 2;
                                    my.reSync = false;
                                }
                            }
                        }
                    }
                }
            }
            if (traps.inTrap && near.dist2 <= (items.weapons[player.weapons[0]].range + near.scale * 1.8)) {
                antiSpikeTickop();
            }
            if (near.dist2 <= (items.weapons[player.weapons[0]].range + near.scale * 1.8)) {
                intint();
            }
            async function intint() {
                const doingInsta = instaC.can && player.skinIndex != 6 && !my.reSync;
                const instaThing = !instaC.canCounter && tmpObj.damageThreat;
                const cSPPdt = [5].includes(near.primaryIndex) && tmpObj.damaged >= 45 || ([5].includes(near.primaryIndex) && tmpObj.damaged >= 60 && player.skinIndex != 6) || ([4].includes(near.primaryIndex) && tmpObj.damaged >= 40) || ([4].includes(near.primaryIndex) && tmpObj.damaged >= 60 && player.skinIndex != 6) || ([3].includes(near.primaryIndex) && tmpObj.damaged >= 35) || ([3].includes(near.primaryIndex) && tmpObj.damaged >= 40 && player.skinIndex != 6);
                const cswold = clicks.left && player.skinIndex == 7 || clicks.right && player.skinIndex == 45;
                const instaThing2 = [5, 4, 3].includes(near.primaryIndex) || [5, 4, 3].includes(near.primaryIndex) && near.skinIndex == 7 || [9, 12, 13, 15].includes(near.secondaryIndex) || ([9, 12, 13, 15].includes(near.secondaryIndex) && near.skinIndex == 53);
                if (near.dist2 <= (items.weapons[player.weapons[0]].range + near.scale * 1.8)) {
                    if (instaThing) {
                        if (instaThing2) {
                            await new Promise(resolve => setTimeout(resolve, 1));
                            if (instaThing2 && cSPPdt && player.skinIndex != 6) {
                                my.anti0Tick = 1;
                            }
                        }
                    }
                    if (doingInsta && near.dist2 <= (items.weapons[player.weapons[0]].range + near.scale * 1.8)) {
                        while (doingInsta && near.dist2 <= (items.weapons[player.weapons[0]].range + near.scale * 1.8)) {
                            await new Promise(resolve => setTimeout(resolve, 1));
                            if (cSPPdt && player.skinIndex != 6) {
                                my.anti0Tick = 1;
                            }
                        }
                    }
                    if (cswold) {
                        if (cSPPdt && player.skinIndex != 6 && !instaC.canCounter) {
                            my.anti0Tick = 1;
                        }
                    }
                    if (traps.inTrap && player.skinIndex == 45 && near.skinIndex == 53) {
                        my.anti0Tick = 1;
                    }
                }
            }
            macro.q && place(0, getAttackDir());
            macro.f && place(4, getSafeDir());
            macro.v && place(2, getSafeDir());
            macro.y && place(5, getSafeDir());
            macro.h && place(player.getItemType(22), getSafeDir());
            macro.n && place(3, getSafeDir());
            if(game.tick % 1 == 0) {
                if(mills.place) {
                    let plcAng = 7.7;
                    for(let i = -plcAng; i <= plcAng; i += plcAng) {
                        checkPlace(3, UTILS.getDirect(player.oldPos, player, 2, 2) + i);
                    }
                } else {
                    if(mills.placeSpawnPads) {
                        for(let i = 0; i < Math.PI * 2; i += Math.PI / 2) {
                            checkPlace(player.getItemType(20), UTILS.getDirect(player.oldPos, player, 2, 2) + i);
                        }
                    }
                }
            }
            if(instaC.can) {
                instaC.changeType(player.weapons[1] == 10 ? "rev" : "normal");
            }
            if(instaC.canCounter) {
                instaC.canCounter = false;
                if(player.reloads[player.weapons[0]] == 0 && !instaC.isTrue) {
                    instaC.counterType();
                }
            }
            if(instaC.canSpikeTick) {
                instaC.canSpikeTick = false;
                if(instaC.revTick) {
                    instaC.revTick = false;
                    if([1, 2, 3, 4, 5, 6].includes(player.weapons[0]) && player.reloads[player.weapons[1]] == 0 && !instaC.isTrue) {
                        instaC.changeType("rev");
                        chch(null, "[RevSyncHit]", "yellow");
                    }
                } else {
                    if([1, 2, 3, 4, 5, 6].includes(player.weapons[0]) && player.reloads[player.weapons[0]] == 0 && !instaC.isTrue) {
                        instaC.spikeTickType();
                        if(instaC.syncHit) {
                            chch(null, "[SyncHit]", "yellow");
                        }
                    }
                }
            }
            if(!clicks.middle && (clicks.left || clicks.right) && !instaC.isTrue) {
                if(player.weaponIndex != (clicks.right && player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]) || player.buildIndex > -1) {
                    selectWeapon(clicks.right && player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]);
                }
                if(player.reloads[clicks.right && player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0 && !my.waitHit) {
                    sendAutoGather();
                    my.waitHit = 1;
                    game.tickBase(() => {
                        sendAutoGather();
                        my.waitHit = 0;
                    }, 1);
                }
            }
                        if (traps.inTrap) {
                if (!clicks.left && !clicks.right && !instaC.isTrue) {
                    if (player.weaponIndex != (traps.notFast() ? player.weapons[1] : player.weapons[0]) || player.buildIndex > -1) {
                        selectWeapon(traps.notFast() ? player.weapons[1] : player.weapons[0]);
                    }
                    if (player.reloads[traps.notFast() ? player.weapons[1] : player.weapons[0]] == 0 && !my.waitHit) {
                        sendAutoGather();
                        my.waitHit = 1;
                        game.tickBase(() => {
                            sendAutoGather();
                            my.waitHit = 0;
                        }, 1);
                    }
                }
            }
            if(clicks.middle && !traps.inTrap) {
                if(!instaC.isTrue && player.reloads[player.weapons[1]] == 0) {
                    if(my.ageInsta && player.weapons[0] != 4 && player.weapons[1] == 9 && player.age >= 9 && enemy.length) {
                        instaC.bowMovement();
                    } else {
                        instaC.rangeType();
                    }
                }
            }
            if(macro.t && !traps.inTrap) {
                if(!instaC.isTrue && player.reloads[player.weapons[0]] == 0 && (player.weapons[1] == 15 ? player.reloads[player.weapons[1]] == 0 : true) && (player.weapons[0] == 5 || (player.weapons[0] == 4 && player.weapons[1] == 15))) {
                    instaC[player.weapons[0] == 4 && player.weapons[1] == 15 ? "kmTickMovement" : "tickMovement"]();
                }
            }
            if(macro["."] && !traps.inTrap) {
                if(!instaC.isTrue && player.reloads[player.weapons[0]] == 0 && ([9, 12, 13, 15].includes(player.weapons[1]) ? player.reloads[player.weapons[1]] == 0 : true)) {
                    instaC.boostTickMovement();
                }
            }
            if(player.weapons[1] && !clicks.left && !clicks.right && !traps.inTrap && !instaC.isTrue && !(useWasd && near.dist2 <= items.weapons[player.weapons[0]].range + near.scale * 1.8)) {
                if(player.reloads[player.weapons[0]] == 0 && player.reloads[player.weapons[1]] == 0) {
                    if(!my.reloaded) {
                        my.reloaded = true;
                        let fastSpeed = items.weapons[player.weapons[0]].spdMult < items.weapons[player.weapons[1]].spdMult ? 1 : 0;
                        if(player.weaponIndex != player.weapons[fastSpeed] || player.buildIndex > -1) {
                            selectWeapon(player.weapons[fastSpeed]);
                        }
                    }
                    // if(useWasd) {
                    //     if (!autos.stopspin) {
                    //         setTimeout(()=>{
                    //             autos.stopspin = true;
                    //         }, 375);
                    //     }
                    // }
                } else {
                    my.reloaded = false;
                    if(useWasd) {
                        autos.stopspin = false;
                    }
                    if(player.reloads[player.weapons[0]] > 0) {
                        if(player.weaponIndex != player.weapons[0] || player.buildIndex > -1) {
                            selectWeapon(player.weapons[0]);
                        }
                    } else if(player.reloads[player.weapons[0]] == 0 && player.reloads[player.weapons[1]] > 0) {
                        if(player.weaponIndex != player.weapons[1] || player.buildIndex > -1) {
                            selectWeapon(player.weapons[1]);
                        }
                        if(useWasd) {
                            if(!autos.stopspin) {
                                setTimeout(() => {
                                    autos.stopspin = true;
                                }, 750);
                            }
                        }
                    }
                }
            }
            if(!instaC.isTrue && !traps.inTrap && !traps.replaced) {
                traps.autoPlace();
            }
            if(!macro.q && !macro.f && !macro.v && !macro.h && !macro.n) {
                packet("D", getAttackDir());
            }
            let hatChanger = function() {
                    if (my.anti0Tick > 0) {
                        buyEquip(6, 0);
                    } else {
                        if (clicks.left || clicks.right) {
                            if ((player.shameCount > 0 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                                buyEquip(7, 0);
                                buyEquip(13, 1);
                            } else {
                                if (clicks.left && ![7].includes(player.weapons[0])) {
                                    buyEquip(player.reloads[player.weapons[0]] == 0 ? getEl("weaponGrind").checked ? 40 : 7 : player.empAnti ? 22 : player.soldierAnti ? 6 : (getEl("antiBullType").value == "abreload" && near.antiBull > 0) ? 11 : near.dist2 <= 300 ? (getEl("antiBullType").value == "abalway" && near.reloads[near.primaryIndex] == 0) ? 11 : 6 : biomeGear(1, 1), 0);
                                } else if (clicks.right) {
                                    buyEquip(player.reloads[clicks.right && player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0 ? 40 : player.empAnti ? 22 : player.soldierAnti ? 6 : (getEl("antiBullType").value == "abreload" && near.antiBull > 0) ? 11 : near.dist2 <= 300 ? (getEl("antiBullType").value == "abalway" && near.reloads[near.primaryIndex] == 0) ? 11 : 6 : biomeGear(1, 1), 0);
                                }
                            }
                        } else if (traps.inTrap) {
                            if (traps.info.health <= items.weapons[player.weaponIndex].dmg ? false : (player.reloads[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0)) {
                                buyEquip(40, 0);
                            } else {
                                if ((player.shameCount > 0 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                                    buyEquip(7, 0);
                                    buyEquip(13, 1);

                                } else {
                                    buyEquip((player.empAnti || near.dist2 > 300 || !enemy.length) ? 6 : 6, 0);
                                }
                            }
                        } else {
                            if (player.empAnti || player.soldierAnti) {
                                buyEquip(player.empAnti ? 6 : 6, 0);
                                buyEquip(13, 1);
                            } else {
                                if ((player.shameCount > 0 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                                    buyEquip(7, 0);
                                    buyEquip(13, 1);
                                } else {
                                    if (near.dist2 <= 300) {
                                        buyEquip((getEl("antiBullType").value == "abreload" && near.antiBull > 0) ? 11 : (getEl("antiBullType").value == "abalway" && near.reloads[near.primaryIndex] == 0) ? 11 : 6, 0);
                                    } else {
                                        biomeGear(1);
                                    }
                                }
                            }
                        }
                    }
                }
            let accChanger = function() {
                if(instaC.can && player.checkCanInsta(true) >= 100) {
                    buyEquip(19, 1);
                } else if(clicks.left) {
                    setTimeout(() => {
                        buyEquip(19, 1);
                    }, 50);
                } else if(clicks.right) {
                    setTimeout(() => {
                        buyEquip(19, 1);
                    }, 50);
                } else if(near.dist2 <= 300 && [0, 1, 2, 3, 4, 5, 6].includes(player.weapons[0])) {
                    buyEquip(19, 1);
                } else if (near.dist2 <= 300 && [7, 8].includes(player.weapons[0])) {
                    buyEquip(11, 1);
                } else {
                    traps.inTrap ? buyEquip(19, 1) : buyEquip(11, 1);
                }
            };
            let wasdGears = function() {
                if(my.anti0Tick > 0) {
                    buyEquip(6, 0);
                } else {
                    if(clicks.left || clicks.right) {
                        if(
                            (player.shameCount > 4320 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                            buyEquip(7, 0);
                        } else {
                            if(clicks.left) {
                                buyEquip(player.reloads[player.weapons[0]] == 0 ? getEl("weaponGrind").checked ? 40 : 7 : player.empAnti ? 22 : 6, 0);
                            } else if(clicks.right) {
                                buyEquip(player.reloads[clicks.right && player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0 ? 40 : player.empAnti ? 22 : 6, 0);
                            }
                        }
                    } else if(near.dist2 <= items.weapons[player.weapons[0]].range + near.scale * 1.8 && !traps.inTrap) {
                        if(
                            (player.shameCount > 4320 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                            buyEquip(7, 0);
                        } else {
                            buyEquip(player.reloads[player.weapons[0]] == 0 ? 7 : player.empAnti ? 22 : 6, 0);
                        }
                    } else if(traps.inTrap) {
                        if(traps.info.health <= items.weapons[player.weaponIndex].dmg ? false : player.reloads[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0) {
                            buyEquip(40, 0);
                        } else {
                            if(
                                (player.shameCount > 4320 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                                buyEquip(7, 0);
                            } else {
                                buyEquip(player.empAnti ? 22 : 6, 0);
                            }
                        }
                    } else {
                        if(player.empAnti) {
                            buyEquip(22, 0);
                        } else {
                            if(
                                (player.shameCount > 4320 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                                buyEquip(7, 0);
                            } else {
                                buyEquip(6, 0);
                            }
                        }
                    }
                }
                if(clicks.left || clicks.right) {
                    if(clicks.left) {
                        buyEquip(0, 1);
                    } else if(clicks.right) {
                        buyEquip(11, 1);
                    }
                } else if(near.dist2 <= items.weapons[player.weapons[0]].range + near.scale * 1.8 && !traps.inTrap) {
                    buyEquip(0, 1);
                } else if(traps.inTrap) {
                    buyEquip(0, 1);
                } else {
                    buyEquip(11, 1);
                }
            };
            if(storeMenu.style.display != "block" && !instaC.isTrue && !instaC.ticking) {
                if(useWasd) {
                    wasdGears();
                } else {
                    hatChanger();
                    accChanger();
                }
            }
            //lastMoveDir = getSafeDir();
            //packet("a", lastMoveDir, 1);
            if(configs.autoPush && enemy.length && !traps.inTrap && !instaC.ticking) {
                autoPush();
            } else {
                if(my.autoPush) {
                    my.autoPush = false;
                    packet("9", lastMoveDir || undefined, 1);
                }
            }
            if(instaC.ticking) {
                instaC.ticking = false;
            }
            if(instaC.syncHit) {
                instaC.syncHit = false;
            }
            if(player.empAnti) {
                player.empAnti = false;
            }
            if(player.soldierAnti) {
                player.soldierAnti = false;
            }
            if(my.anti0Tick > 0) {
                my.anti0Tick--;
            }
            if(traps.replaced) {
                traps.replaced = false;
            }
            if(traps.antiTrapped) {
                traps.antiTrapped = false;
            }
            if(traps.antiPush) {
                traps.antiPush = false;
            }
            let DmgPotStuff = {
                predictedDamage: 0
            };
            const getDistance = (x1, y1, x2, y2) => {
                let dx = x2 - x1;
                let dy = y2 - y1;
                return Math.sqrt(dx * dx + dy * dy);
            };
            const getPotentialDamage = (build, user) => {
                const weapIndex = user.weapons[1] === 10 && !player.reloads[user.weapons[1]] ? 1 : 0;
                const weap = user.weapons[weapIndex];
                if(player.reloads[weap]) return 0;
                const weapon = items.weapons[weap];
                const inDist = cdf(build, user) <= build.getScale() + weapon.range;
                return user.visible && inDist ? weapon.dmg * (weapon.sDmg || 1) * 3.3 : 0;
            };
            const findPlacementAngle = (player, itemId, build) => {
                if(!build) return null;
                const MAX_ANGLE = 2 * Math.PI;
                const ANGLE_STEP = Math.PI / 360;
                const item = items.list[player.items[itemId]];
                let buildingAngle = Math.atan2(build.y - player.y, build.x - player.x);
                let tmpS = player.scale + (item.scale || 1) + (item.placeOffset || 0);
                for(let offset = 0; offset < MAX_ANGLE; offset += ANGLE_STEP) {
                    let angles = [(buildingAngle + offset) % MAX_ANGLE, (buildingAngle - offset + MAX_ANGLE) % MAX_ANGLE];
                    for(let angle of angles) {
                        let tmpX = player.x + tmpS * Math.cos(angle);
                        let tmpY = player.y + tmpS * Math.sin(angle);
                        if(objectManager.customCheckItemLocation(tmpX, tmpY, item.scale, 0.6, item.id, false, player, build, gameObjects, UTILS, config)) {
                            return angle;
                        }
                    }
                }
                return null;
            };
            const AutoReplace = () => {
                const replaceable = [];
                const playerX = player.x;
                const playerY = player.y;
                const gameObjectCount = gameObjects.length;
                for(let i = 0; i < gameObjectCount; i++) {
                    const build = gameObjects[i];
                    if(build.isItem && build.active && build.health > 0) {
                        let potentialDamage = players.reduce((total, p) => total + getPotentialDamage(build, p), 0);
                        if(build.health <= potentialDamage) {
                            replaceable.push(build);
                        }
                    }
                }
                const replace = () => {
                    let nearTrap = gameObjects.filter(tmp => tmp.trap && tmp.active && tmp.isTeamObject(player) && getDistance(tmp.x, tmp.y, playerX, playerY) <= tmp.getScale() + 5);
                    let spike = gameObjects.find(tmp => tmp.dmg && tmp.active && tmp.isTeamObject(player) && getDistance(tmp.x, tmp.y, playerX, playerY) < 87 && !nearTrap.length);
                    const buildId = spike ? 4 : 2;
                    replaceable.forEach(build => {
                        let angle = findPlacementAngle(player, buildId, build);
                        if(angle !== null) {
                            place(buildId, angle);
                        }
                    });
                };
                const replaceDelay = game.tickSpeed - (window.pingTime || 0) + (game.tickSpeed < 110 ? 5 : 0);
                if(near && near.dist2 <= 360) {
                    setTimeout(replace, replaceDelay);
                }
            };
        }
    }
    if(botSkts.length) {
        botSkts.forEach((bots) => {
            if(true) {
                bots[0].showName = "YEAHHH";
            }
        });
    }
}
for(var i1 = 0; i1 < liztobj.length; i1++) {
    if(liztobj[i1].active && liztobj[i1].health > 0 && UTILS.getDist(liztobj[i1], player, 0, 2) < 87) {
        // || liztobj[i1].buildHealth <= items.weapons[nearEnemy.weaponIndex].dmg)
        if(liztobj[i1].includes("spikes", "greater spikes", "poison spikes", "spinning spikes") && liztobj[i1]) {
            if(liztobj[i1].owner.sid != player.sid && clicks.left == false && tmpObj.reloads[tmpObj.secondaryIndex] == 0) {
                selectWeapon(player.weapons[1]);
                buyEquip(40, 0);
                packet("D", UTILS.getDirect(liztobj[i1], player, 0, 2));
                setTickout(() => {
                    buyEquip(6, 0);
                }, 1);
            }
        }
    }
}
function ez(context, x, y) {
    context.fillStyle = "rgba(0, 255, 255, 0.2)";
    context.beginPath();
    context.arc(x, y, 55, 0, Math.PI * 2);
    context.fill();
    context.closePath();
    context.globalAlpha = 1;
}
// UPDATE LEADERBOARD:
function updateLeaderboard(data) {
    lastLeaderboardData = data;
    return;
    UTILS.removeAllChildren(leaderboardData);
    let tmpC = 1;
    for(let i = 0; i < data.length; i += 3) {
        (function(i) {
            UTILS.generateElement({
                class: "leaderHolder",
                parent: leaderboardData,
                children: [
                    UTILS.generateElement({
                        class: "leaderboardItem",
                        style: "color:" + (data[i] == playerSID ? "#fff" : "rgba(255,255,255,0.6)"),
                        text: tmpC + ". " + (data[i + 1] != "" ? data[i + 1] : "unknown"),
                    }),
                    UTILS.generateElement({
                        class: "leaderScore",
                        text: UTILS.sFormat(data[i + 2]) || "0",
                    }),
                ],
            });
        })(i);
        tmpC++;
    }
}
// LOAD GAME OBJECT:
function loadGameObject(data) {
    for(let i = 0; i < data.length;) {
        objectManager.add(data[i], data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], items.list[data[i + 6]], true, data[i + 7] >= 0 ? {
            sid: data[i + 7],
        } : null);
        // sid, x, y, dir, s, type, data, setSID, owner
        /*let dist = UTILS.getDist({
		              x: data[i + 1],
		              y: data[i + 2]
		          }, player, 0, 2);
		          let aim = UTILS.getDirect({
		              x: data[i + 1],
		              y: data[i + 2]
		          }, player, 0, 2);
		          find = findObjectBySid(data[i]);
		          if (data[i + 6] == 15) {
		              if (find && !find.isTeamObject(player)) {
		                  if (dist <= 100) {
		                      traps.dist = dist;
		                      traps.aim = aim;
		                      traps.protect(aim);
		                  }
		              }
		          }*/
        i += 8;
    }
}
// ADD AI:
function loadAI(data) {
    for(let i = 0; i < ais.length; ++i) {
        ais[i].forcePos = !ais[i].visible;
        ais[i].visible = false;
    }
    if(data) {
        let tmpTime = performance.now();
        for(let i = 0; i < data.length;) {
            tmpObj = findAIBySID(data[i]);
            if(tmpObj) {
                tmpObj.index = data[i + 1];
                tmpObj.t1 = tmpObj.t2 === undefined ? tmpTime : tmpObj.t2;
                tmpObj.t2 = tmpTime;
                tmpObj.x1 = tmpObj.x;
                tmpObj.y1 = tmpObj.y;
                tmpObj.x2 = data[i + 2];
                tmpObj.y2 = data[i + 3];
                tmpObj.d1 = tmpObj.d2 === undefined ? data[i + 4] : tmpObj.d2;
                tmpObj.d2 = data[i + 4];
                tmpObj.health = data[i + 5];
                tmpObj.dt = 0;
                tmpObj.visible = true;
            } else {
                tmpObj = aiManager.spawn(data[i + 2], data[i + 3], data[i + 4], data[i + 1]);
                tmpObj.x2 = tmpObj.x;
                tmpObj.y2 = tmpObj.y;
                tmpObj.d2 = tmpObj.dir;
                tmpObj.health = data[i + 5];
                if(!aiManager.aiTypes[data[i + 1]].name) tmpObj.name = config.cowNames[data[i + 6]];
                tmpObj.forcePos = true;
                tmpObj.sid = data[i];
                tmpObj.visible = true;
            }
            i += 7;
        }
    }
}
// ANIMATE AI:
function animateAI(sid) {
    tmpObj = findAIBySID(sid);
    if(tmpObj) tmpObj.startAnim();
}
// GATHER ANIMATION:
function gatherAnimation(sid, didHit, index) {
    tmpObj = findPlayerBySID(sid);
    if(tmpObj) {
        tmpObj.startAnim(didHit, index);
        tmpObj.gatherIndex = index;
        tmpObj.gathering = 1;
        // if(player.damageThreat >= 100 && cdf(player, tmpObj) <= 300)
        //     healer();
        if(didHit) {
            let tmpObjects = objectManager.hitObj;
            objectManager.hitObj = [];
            game.tickBase(() => {
                // refind
                tmpObj = findPlayerBySID(sid);
                let val = items.weapons[index].dmg * config.weaponVariants[tmpObj[(index < 9 ? "prima" : "seconda") + "ryVariant"]].val * (items.weapons[index].sDmg || 1) * (tmpObj.skinIndex == 40 ? 3.3 : 1);
                tmpObjects.forEach((healthy) => {
                    healthy.health -= val;
                });
            }, 1);
        }
    }
}
if(nears.filter((near) => near.gathering).length > 1) {
    player.chat.message = "pSyD";
    healer();
}
// WIGGLE GAME OBJECT:
function wiggleGameObject(dir, sid) {
    tmpObj = findObjectBySid(sid);
    if(tmpObj) {
        tmpObj.xWiggle += config.gatherWiggle * Math.cos(dir);
        tmpObj.yWiggle += config.gatherWiggle * Math.sin(dir);
        if(tmpObj.health) {
            objectManager.hitObj.push(tmpObj);
        }
    }
}
// SHOOT TURRET:
function shootTurret(sid, dir) {
    tmpObj = findObjectBySid(sid);
    if(tmpObj) {
        if(config.anotherVisual) {
            tmpObj.lastDir = dir;
        } else {
            tmpObj.dir = dir;
        }
        tmpObj.xWiggle += config.gatherWiggle * Math.cos(dir + Math.PI);
        tmpObj.yWiggle += config.gatherWiggle * Math.sin(dir + Math.PI);
    }
}
// UPDATE PLAYER VALUE:
function updatePlayerValue(index, value, updateView) {
    if(player) {
        player[index] = value;
        if(index === "kills") {
            if(configs.killChat) {
                const randomIndex = Math.floor(Math.random() * killChat.length);
                const randomMessage = killChat[randomIndex];
                omengod(randomMessage + value);
            }
        }
    }
}
const killChat = ["~made in Donbass~:"
                 ,"nerets pro:"
                 ,"Nerest PRO:",
                 "kidNERESTkpsf:",
                 "made in Donbass:",
                 "v22:",
                 "M-M MONSTER KILL:",
                 "ok hacker:",
                 "dog:",
                 "nice:",
                 "NEREST MOD:",
                 "NEREST MOD V22:",];
// ACTION BAR:

function updateItems(data, wpn) {
    if(data) {
        if(wpn) {
            player.weapons = data;
            player.primaryIndex = player.weapons[0];
            player.secondaryIndex = player.weapons[1];
            if(!instaC.isTrue) {
                selectWeapon(player.weapons[0]);
            }
        } else {
            player.items = data;
        }
    }
    for(let i = 0; i < items.list.length; i++) {
        let tmpI = items.weapons.length + i;
        let actionBarItem = getEl("actionBarItem" + tmpI);
        actionBarItem.style.display = player.items.indexOf(items.list[i].id) >= 0 ? "inline-block" : "none";
        // Add shadow to the element
        // actionBarItem.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";
        document.getElementsByTagName("button").style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";
    }
    for(let i = 0; i < items.weapons.length; i++) {
        let actionBarItem = getEl("actionBarItem" + i);
        actionBarItem.style.display = player.weapons[items.weapons[i].type] == items.weapons[i].id ? "inline-block" : "none";
        // Add shadow to the element
        // actionBarItem.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";
        document.getElementsByTagName("button").style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";
    }
    let kms = player.weapons[0] == 3 && player.weapons[1] == 15;
    if(kms) {
        getEl("actionBarItem3").style.display = "none";
        getEl("actionBarItem4").style.display = "inline-block";
    }
}
// ADD PROJECTILE:
function addProjectile(x, y, dir, range, speed, indx, layer, sid) {
    projectileManager.addProjectile(x, y, dir, range, speed, indx, null, null, layer, inWindow).sid = sid;
    runAtNextTick.push(Array.prototype.slice.call(arguments));
}
// REMOVE PROJECTILE:
function remProjectile(sid, range) {
    for(let i = 0; i < projectiles.length; ++i) {
        if(projectiles[i].sid == sid) {
            projectiles[i].range = range;
            let tmpObjects = objectManager.hitObj;
            objectManager.hitObj = [];
            game.tickBase(() => {
                let val = projectiles[i].dmg;
                tmpObjects.forEach((healthy) => {
                    if(healthy.projDmg) {
                        healthy.health -= val;
                    }
                });
            }, 1);
        }
    }
}
// lol this useless,,, fr
let noob = false;
let serverReady = true;
var isProd = location.hostname !== "127.0.0.1" && !location.hostname.startsWith("192.168.");
let wssws = isProd ? "wss" : "ws";
let project = new WebSocket(`${wssws}://beautiful-sapphire-toad.glitch.me`);
let withSync = false;
project.binaryType = "arraybuffer";
project.onmessage = function(msg) {
    let data = msg.data;
    if(data == "isready") {
        serverReady = true;
    }
    if(data == "fine") {
        noob = false;
    }
    if(data == "tezt") {
        addMenuChText(`${player.name}[${player.sid}]`, "EEEEEEEEEEE", "white");
    }
    if(data == "yeswearesyncer") {
        // let delay = Date.now() - wsDelay;
        withSync = true;
        if(player) {
            textManager.showText(player.x, player.y, 35, 0.1, 500, "Sync: " + window.pingTime + "ms", "#fff");
            chch("synced!!!!!!!! also delay: " + window.pingTime + "ms");
        }
    }
};
// SHOW ALLIANCE MENU:
function allianceNotification(sid, name) {
    let findBotSID = findSID(bots, sid);
    if(findBotSID) {}
}

function setPlayerTeam(team, isOwner) {
    if(player) {
        player.team = team;
        player.isOwner = isOwner;
        if(team == null) alliancePlayers = [];
    }
}

function setAlliancePlayers(data) {
    alliancePlayers = data;
}
// STORE MENU:
function updateStoreItems(type, id, index) {
    if(index) {
        if(!type) player.tails[id] = 1;
        else {
            player.latestTail = id;
        }
    } else {
        if(!type)(player.skins[id] = 1), id == 7 && (my.reSync = true);
        // testing perfect bulltick...
        else {
            player.latestSkin = id;
        }
    }
}
// SEND MESSAGE:
function receiveChat(sid, message) {
    if(/img/i.test(message)) return;
    if(/iframe/i.test(message)) return;
    let kawaii = false;
    let tmpPlayer = findPlayerBySID(sid);
    addMenuChText(`${tmpPlayer.name}[${tmpPlayer.sid}]`, message, "white");
    tmpPlayer.chatMessage = message;
    tmpPlayer.chatCountdown = config.chatCountdown;
    var musketCheckbox = document.getElementById("musketSync");
    if(musketCheckbox && musketCheckbox.checked && message === "sync em!") {
        musketSync();
        io.send("6", "we win!");
    }
    if(message === 'insta em!' && player.reloads[player.weapons[0]] === 0 && player.reloads[player.weapons[1]] === 0) {
        packet("6", "we win!");
        my.autoAim = true;
        selectWeapon(player.weapons[0]);
        buyEquip(7, 0);
        sendAutoGather();
        game.tickBase(() => {
            selectWeapon(player.weapons[1]);
            buyEquip(player.reloads[53] === 0 ? 53 : 6, 0);
            game.tickBase(() => {
                sendAutoGather();
                my.autoAim = false;
            }, 3);
        }, 2);
    }
}
// MINIMAP:
function updateMinimap(data) {
    minimapData = data;
}
// SHOW ANIM TEXT:
function showText(x, y, value, type) {
    // if (config.anotherVisual) {
    textManager.stack.push({
        x: x,
        y: y,
        value: value,
    });
    // } else {
    //     textManager.showText(x, y, 50, 0.18, useWasd ? 500 : 1500, Math.abs(value), (value >= 0) ? "#fff" : "#8ecc51");
    // }
}
/** APPLY SOCKET CODES */
// BOT:
let bots = [];
let ranLocation = {
    x: UTILS.randInt(35, 14365),
    y: UTILS.randInt(35, 14365),
};
setInterval(() => {
    ranLocation = {
        x: UTILS.randInt(35, 14365),
        y: UTILS.randInt(35, 14365),
    };
}, 60000);
class Bot {
    constructor(id, sid, hats, accessories) {
        this.millPlace = true;
        this.id = id;
        this.sid = sid;
        this.team = null;
        this.skinIndex = 0;
        this.tailIndex = 0;
        this.hitTime = 0;
        this.iconIndex = 0;
        this.enemy = [];
        this.near = [];
        this.dist2 = 0;
        this.aim2 = 0;
        this.tick = 0;
        this.itemCounts = {};
        this.latestSkin = 0;
        this.latestTail = 0;
        this.points = 0;
        this.tails = {};
        for(let i = 0; i < accessories.length; ++i) {
            if(accessories[i].price <= 0) this.tails[accessories[i].id] = 1;
        }
        this.skins = {};
        for(let i = 0; i < hats.length; ++i) {
            if(hats[i].price <= 0) this.skins[hats[i].id] = 1;
        }
        this.spawn = function(moofoll) {
            this.upgraded = 0;
            this.enemy = [];
            this.near = [];
            this.active = true;
            this.alive = true;
            this.lockMove = false;
            this.lockDir = false;
            this.minimapCounter = 0;
            this.chatCountdown = 0;
            this.shameCount = 0;
            this.shameTimer = 0;
            this.sentTo = {};
            this.gathering = 0;
            this.autoGather = 0;
            this.animTime = 0;
            this.animSpeed = 0;
            this.mouseState = 0;
            this.buildIndex = -1;
            this.weaponIndex = 0;
            this.dmgOverTime = {};
            this.noMovTimer = 0;
            this.maxXP = 300;
            this.XP = 0;
            this.age = 1;
            this.kills = 0;
            this.upgrAge = 2;
            this.upgradePoints = 0;
            this.x = 0;
            this.y = 0;
            this.zIndex = 0;
            this.xVel = 0;
            this.yVel = 0;
            this.slowMult = 1;
            this.dir = 0;
            this.nDir = 0;
            this.dirPlus = 0;
            this.targetDir = 0;
            this.targetAngle = 0;
            this.maxHealth = 100;
            this.health = this.maxHealth;
            this.oldHealth = this.maxHealth;
            this.scale = config.playerScale;
            this.speed = config.playerSpeed;
            this.resetMoveDir();
            this.resetResources(moofoll);
            this.items = [0, 3, 6, 10];
            this.weapons = [0];
            this.shootCount = 0;
            this.weaponXP = [];
            this.isBot = false;
            this.reloads = {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0,
                11: 0,
                12: 0,
                13: 0,
                14: 0,
                15: 0,
                53: 0,
            };
            this.timeZinceZpawn = 0;
            this.whyDie = "";
            this.clearRadius = false;
            this.circlee = 0;
        };
        // RESET MOVE DIR:
        this.resetMoveDir = function() {
            this.moveDir = undefined;
        };
        // RESET RESOURCES:
        this.resetResources = function(moofoll) {
            for(let i = 0; i < config.resourceTypes.length; ++i) {
                this[config.resourceTypes[i]] = moofoll ? 100 : 0;
            }
        };
        // SET DATA:
        this.setData = function(data) {
            this.id = data[0];
            this.sid = data[1];
            this.name = data[2];
            this.x = data[3];
            this.y = data[4];
            this.dir = data[5];
            this.health = data[6];
            this.maxHealth = data[7];
            this.scale = data[8];
            this.skinColor = data[9];
        };
        // SHAME SYSTEM:
        this.judgeShame = function() {
            if(this.oldHealth < this.health) {
                if(this.hitTime) {
                    let timeSinceHit = this.tick - this.hitTime;
                    this.hitTime = 0;
                    if(timeSinceHit < 2) {
                        this.lastshamecount = this.shameCount;
                        this.shameCount++;
                    } else {
                        this.lastshamecount = this.shameCount;
                        this.shameCount = Math.max(0, this.shameCount - 2);
                    }
                }
            } else if(this.oldHealth > this.health) {
                this.hitTime = this.tick;
            }
        };
        // UPDATE WEAPON RELOAD:
        this.manageReloadaa = function() {
            if(this.shooting[53]) {
                this.shooting[53] = 0;
                this.reloads[53] = 2500 - 1000 / 9;
            } else {
                if(this.reloads[53] > 0) {
                    this.reloads[53] = Math.max(0, this.reloads[53] - 1000 / 9);
                }
            }
            if(this.gathering || this.shooting[1]) {
                if(this.gathering) {
                    this.gathering = 0;
                    this.reloads[this.gatherIndex] = items.weapons[this.gatherIndex].speed * (this.skinIndex == 20 ? 0.78 : 1);
                    this.attacked = true;
                }
                if(this.shooting[1]) {
                    this.shooting[1] = 0;
                    this.reloads[this.shootIndex] = items.weapons[this.shootIndex].speed * (this.skinIndex == 20 ? 0.78 : 1);
                    this.attacked = true;
                }
            } else {
                this.attacked = false;
                if(this.buildIndex < 0) {
                    if(this.reloads[this.weaponIndex] > 0) {
                        this.reloads[this.weaponIndex] = Math.max(0, this.reloads[this.weaponIndex] - game.tickRate);
                    }
                }
            }
        };
        this.closeSockets = function(websc) {
            websc.close();
        };
        this.whyDieChat = function(websc, whydie) {
            websc.sendWS("6", "why die XDDD " + whydie);
        };
    }
}
class BotObject {
    constructor(sid) {
        this.sid = sid;
        // INIT:
        this.init = function(x, y, dir, scale, type, data, owner) {
            data = data || {};
            this.active = true;
            this.x = x;
            this.y = y;
            this.scale = scale;
            this.owner = owner;
            this.id = data.id;
            this.dmg = data.dmg;
            this.trap = data.trap;
            this.teleport = data.teleport;
            this.isItem = this.id != undefined;
        };
    }
}
class BotObjManager {
    constructor(botObj, fOS) {
        // DISABLE OBJ:
        this.disableObj = function(obj) {
            obj.active = false;
            if(config.anotherVisual) {} else {
                obj.alive = false;
            }
        };
        // ADD NEW:
        let tmpObj;
        this.add = function(sid, x, y, dir, s, type, data, setSID, owner) {
            tmpObj = fOS(sid);
            if(!tmpObj) {
                tmpObj = botObj.find((tmp) => !tmp.active);
                if(!tmpObj) {
                    tmpObj = new BotObject(sid);
                    botObj.push(tmpObj);
                }
            }
            if(setSID) {
                tmpObj.sid = sid;
            }
            tmpObj.init(x, y, dir, s, type, data, owner);
        };
        // DISABLE BY SID:
        this.disableBySid = function(sid) {
            let find = fOS(sid);
            if(find) {
                this.disableObj(find);
            }
        };
        // REMOVE ALL FROM PLAYER:
        this.removeAllItems = function(sid, server) {
            botObj.filter((tmp) => tmp.active && tmp.owner && tmp.owner.sid == sid).forEach((tmp) => this.disableObj(tmp));
        };
    }
}
let botz = [];

function botSpawn(id) {
    let bot;
    console.log(WS);
    let t = WS.url.split("wss://")[1].split("?")[0];
    bot = id && new WebSocket("wss://" + t + "?token=re:" + encodeURIComponent(id));
    let botPlayer = new Map();
    botSkts.push([botPlayer]);
    botz.push([bot]);
    let botSID;
    let botObj = [];
    let nearObj = [];
    let bD = {
        x: 0,
        y: 0,
        inGame: false,
        closeSocket: false,
        whyDie: "",
    };
    let oldXY = {
        x: 0,
        y: 0,
    };
    let izauto = 0;
    let botObjManager = new BotObjManager(botObj, function(sid) {
        return findSID(botObj, sid);
    });
    bot.binaryType = "arraybuffer";
    bot.first = true;
    bot.sendWS = function(type) {
        // EXTRACT DATA ARRAY:
        let data = Array.prototype.slice.call(arguments, 1);
        // SEND MESSAGE:
        let binary = window.msgpack.encode([type, data]);
        bot.send(binary);
    };
    bot.spawn = function() {
        bot.sendWS("M", {
            name: "",
            moofoll: 1,
            skin: "__proto__",
        });
    };
    bot.sendUpgrade = function(index) {
        bot.sendWS("H", index);
    };
    bot.place = function(id, a) {
        try {
            let item = items.list[botPlayer.items[id]];
            if(botPlayer.itemCounts[item.group.id] == undefined ? true : botPlayer.itemCounts[item.group.id] < (config.isSandbox ? 296 : item.group.limit ? item.group.limit : 296)) {
                bot.sendWS("G", botPlayer.items[id]);
                bot.sendWS("d", 1, a);
                bot.sendWS("G", botPlayer.weaponIndex, true);
            }
        } catch(e) {}
    };
    bot.buye = function(id, index) {
        let nID = 0;
        if(botPlayer.alive && botPlayer.inGame) {
            if(index == 0) {
                if(botPlayer.skins[id]) {
                    if(botPlayer.latestSkin != id) {
                        bot.sendWS("c", 0, id, 0);
                    }
                } else {
                    let find = findID(hats, id);
                    if(find) {
                        if(botPlayer.points >= find.price) {
                            bot.sendWS("c", 1, id, 0);
                            bot.sendWS("c", 0, id, 0);
                        } else {
                            if(botPlayer.latestSkin != nID) {
                                bot.sendWS("c", 0, nID, 0);
                            }
                        }
                    } else {
                        if(botPlayer.latestSkin != nID) {
                            bot.sendWS("c", 0, nID, 0);
                        }
                    }
                }
            } else if(index == 1) {
                if(botPlayer.tails[id]) {
                    if(botPlayer.latestTail != id) {
                        bot.sendWS("c", 0, id, 1);
                    }
                } else {
                    let find = findID(accessories, id);
                    if(find) {
                        if(botPlayer.points >= find.price) {
                            bot.sendWS("c", 1, id, 1);
                            bot.sendWS("c", 0, id, 1);
                        } else {
                            if(botPlayer.latestTail != 0) {
                                bot.sendWS("c", 0, 0, 1);
                            }
                        }
                    } else {
                        if(botPlayer.latestTail != 0) {
                            bot.sendWS("c", 0, 0, 1);
                        }
                    }
                }
            }
        }
    };
    bot.fastGear = function() {
        if(botPlayer.y2 >= config.mapScale / 2 - config.riverWidth / 2 && botPlayer.y2 <= config.mapScale / 2 + config.riverWidth / 2) {
            bot.buye(31, 0);
        } else {
            if(botPlayer.moveDir == undefined) {
                bot.buye(22, 0);
            } else {
                if(botPlayer.y2 <= config.snowBiomeTop) {
                    bot.buye(15, 0);
                } else {
                    bot.buye(12, 0);
                }
            }
        }
    };
    bot.selectWeapon = function(a) {
        packet("G", a, 1);
    };

    function caf(e, t) {
        try {
            return Math.atan2(
                (t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x));
        } catch(e) {
            return 0;
        }
    }
    bot.heal = function() {
        if(botPlayer.health < 100) {
            bot.place(0, 0);
        }
    };

    function cdf(e, t) {
        try {
            return Math.hypot(
                (t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x));
        } catch(e) {
            return Infinity;
        }
    }
    let zoon = "no";
    bot.zync = function(a) {
        if(!botPlayer.millPlace) {
            zoon = "yeah";
            bot.place(5, caf(botPlayer, a));
            let NextTickLocation = {
                x: botPlayer.x + Math.cos(caf(a, botPlayer) - Math.PI) * 80,
                y: botPlayer.y + Math.sin(caf(a, botPlayer) - Math.PI) * 80,
                x2: botPlayer.x + Math.cos(caf(a, botPlayer) - Math.PI) * 80,
                y2: botPlayer.y + Math.sin(caf(a, botPlayer) - Math.PI) * 80,
            };

            function calculateDistance(x1, y1, x2, y2) {
                let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                return distance;
            }

            function dotherezt() {
                bot.sendWS("6", calculateDistance(NextTickLocation.x, NextTickLocation.y, botPlayer.x, botPlayer.y) + "");
                bot.sendWS("D", caf(a, botPlayer) - Math.PI);
            }
            let aa = setInterval(() => {
                bot.sendWS("G", botPlayer.weapons[1], true);
                if(izauto == 0) {
                    bot.sendWS("K", 1);
                    izauto = 1;
                }
                setTimeout(() => {
                    bot.sendWS("G", botPlayer.weapons[0], true);
                }, 2000);
                bot.buye(53, 0);
                if(calculateDistance(NextTickLocation.x, NextTickLocation.y, botPlayer.x, botPlayer.y) > 5) {
                    bot.sendWS("a", caf(botPlayer, NextTickLocation));
                } else {
                    bot.sendWS("6", calculateDistance(NextTickLocation.x, NextTickLocation.y, botPlayer.x, botPlayer.y) + "");
                    zoon = "no";
                    bot.sendWS("a", undefined);
                    dotherezt();
                    clearInterval(aa);
                }
            }, 150);
            setTimeout(() => {
                zoon = "no";
                clearInterval(aa);
            }, 500);
        }
    };
    bot.onmessage = function(message) {
        let data = new Uint8Array(message.data);
        let parsed = window.msgpack.decode(data);
        let type = parsed[0];
        data = parsed[1];
        if(type == "io-init") {
            bot.spawn();
        }
        if(type == "1") {
            botSID = data[0];
            console.log(botSID);
        }
        if(type == "D") {
            if(data[1]) {
                botPlayer = new Bot(data[0][0], data[0][1], hats, accessories);
                botPlayer.setData(data[0]);
                botPlayer.inGame = true;
                botPlayer.alive = true;
                botPlayer.x2 = undefined;
                botPlayer.y2 = undefined;
                botPlayer.spawn(1);
                botPlayer.oldHealth = 100;
                botPlayer.health = 100;
                botPlayer.showName = "YEAHHH";
                oldXY = {
                    x: data[0][3],
                    y: data[0][4],
                };
                bD.inGame = true;
                if(bot.first) {
                    bot.first = false;
                    bots.push(bD);
                }
            }
        }
        if(type == "P") {
            bot.spawn();
            botPlayer.inGame = false;
            bD.inGame = false;
        }
        if(type == "a") {
            let tmpData = data[0];
            botPlayer.tick++;
            botPlayer.enemy = [];
            botPlayer.near = [];
            bot.showName = "YEAHHH";
            nearObj = [];
            for(let i = 0; i < tmpData.length;) {
                if(tmpData[i] == botPlayer.sid) {
                    botPlayer.x2 = tmpData[i + 1];
                    botPlayer.y2 = tmpData[i + 2];
                    botPlayer.d2 = tmpData[i + 3];
                    botPlayer.buildIndex = tmpData[i + 4];
                    botPlayer.weaponIndex = tmpData[i + 5];
                    botPlayer.weaponVariant = tmpData[i + 6];
                    botPlayer.team = tmpData[i + 7];
                    botPlayer.isLeader = tmpData[i + 8];
                    botPlayer.skinIndex = tmpData[i + 9];
                    botPlayer.tailIndex = tmpData[i + 10];
                    botPlayer.iconIndex = tmpData[i + 11];
                    botPlayer.zIndex = tmpData[i + 12];
                    botPlayer.visible = true;
                    bD.x2 = botPlayer.x2;
                    bD.y2 = botPlayer.y2;
                }
                i += 13;
            }
            for(let i = 0; i < tmpData.length;) {
                tmpObj = findPlayerBySID(tmpData[i]);
                if(tmpObj) {
                    if(!tmpObj.isTeam(botPlayer)) {
                        enemy.push(tmpObj);
                        if(tmpObj.dist2 <= items.weapons[tmpObj.primaryIndex == undefined ? 5 : tmpObj.primaryIndex].range + botPlayer.scale * 2) {
                            nears.push(tmpObj);
                        }
                    }
                }
                i += 13;
            }
            if(enemy.length) {
                //console.log(enemy)
                botPlayer.near = enemy.sort(function(tmp1, tmp2) {
                    return tmp1.dist2 - tmp2.dist2;
                })[0];
            }
            if(izauto == 1) {
                bot.sendWS("K", 1);
                izauto = 0;
            }
            if(bD.closeSocket) {
                botPlayer.closeSockets(bot);
            }
            if(bD.whyDie != "") {
                botPlayer.whyDieChat(bot, bD.whyDie);
                bD.whyDie = "";
            }
            if(botPlayer.alive) {
                if(player.team) {
                    if(botPlayer.team != player.team && botPlayer.tick % 9 === 0) {
                        botPlayer.team && bot.sendWS("N");
                        bot.sendWS("b", player.team);
                    }
                }
                let item = items.list[botPlayer.items[3]];
                let a = botPlayer.itemCounts[item.group.id];
                if((a != undefined ? a : 0) < 201 && botPlayer.millPlace) {
                    if(botPlayer.inGame) {
                        bot.sendWS("D", botPlayer.moveDir);
                        if(izauto == 0) {
                            bot.sendWS("K", 1);
                            izauto = 1;
                        }
                        if(UTILS.getDist(oldXY, botPlayer, 0, 2) > 90) {
                            let aim = UTILS.getDirect(oldXY, botPlayer, 0, 2);
                            bot.place(3, aim + 7.7);
                            bot.place(3, aim - 7.7);
                            bot.place(3, aim);
                            oldXY = {
                                x: botPlayer.x2,
                                y: botPlayer.y2,
                            };
                        }
                        if(botPlayer.tick % 90 === 0) {
                            let rand = Math.random() * Math.PI * 2;
                            botPlayer.moveDir = rand;
                            bot.sendWS("a", botPlayer.moveDir);
                        }
                    }
                    bot.fastGear();
                } else if((a != undefined ? a : 0) > 296 && botPlayer.millPlace) {
                    botPlayer.millPlace = false;
                    // bot.sendWS("K", 1);
                    bot.fastGear();
                } else {
                    if(botPlayer.inGame) {
                        if(botObj.length > 0) {
                            let buldingtoawdoin = botObj.filter(
                                (e) => e.active && e.isItem && UTILS.getDist(e, player, 0, 2) <= 600);
                            if(getEl("mode").value == "fuckemup") {
                                // if (getEl("mode").value == "clear") {
                                bot.selectWeapon(botPlayer.weapons[1]);
                                let gotoDist = UTILS.getDist(buldingtoawdoin[0], botPlayer, 0, 2);
                                let gotoAim = UTILS.getDirect(buldingtoawdoin[0], botPlayer, 0, 2);
                                nearObj = botObj.filter(
                                    (e) => e.active && (findSID(buldingtoawdoin, e.sid) ? true : !(e.trap && (player.sid == e.owner.sid || player.findAllianceBySid(e.owner.sid)))) && e.isItem && UTILS.getDist(e, botPlayer, 0, 2) <= items.weapons[botPlayer.weaponIndex].range + e.scale + 10).sort(function(a, b) {
                                    return(UTILS.getDist(a, botPlayer, 0, 2) - UTILS.getDist(b, botPlayer, 0, 2));
                                })[0];
                                if(nearObj) {
                                    let isPassed = UTILS.getDist(buldingtoawdoin[0], nearObj, 0, 0);
                                    if(gotoDist - isPassed > 0) {
                                        if(findSID(buldingtoawdoin, nearObj.sid) ? true : nearObj.dmg || nearObj.trap) {
                                            if(botPlayer.moveDir != undefined) {
                                                botPlayer.moveDir = undefined;
                                                bot.sendWS("a", botPlayer.moveDir);
                                                bot.sendWS("D", botPlayer.nDir);
                                            }
                                        } else {
                                            botPlayer.moveDir = gotoAim;
                                            bot.sendWS("a", botPlayer.moveDir);
                                            bot.sendWS("D", botPlayer.nDir);
                                        }
                                        if(botPlayer.nDir != UTILS.getDirect(nearObj, botPlayer, 0, 2)) {
                                            botPlayer.nDir = UTILS.getDirect(nearObj, botPlayer, 0, 2);
                                            bot.sendWS("D", botPlayer.nDir);
                                        }
                                        if(izauto == 0) {
                                            bot.sendWS("K", 1);
                                            izauto = 1;
                                        }
                                        bot.buye(40, 0);
                                    } else {
                                        botPlayer.moveDir = gotoAim;
                                        bot.sendWS("a", botPlayer.moveDir);
                                        bot.sendWS("D", botPlayer.nDir);
                                        bot.fastGear();
                                    }
                                } else {
                                    botPlayer.moveDir = gotoAim;
                                    bot.sendWS("a", botPlayer.moveDir);
                                    bot.sendWS("D", botPlayer.nDir);
                                    bot.fastGear();
                                }
                            }
                        }
                        if(botObj.length > 0) {
                            if(getEl("mode").value == "flex") {
                                const dir = botPlayer.sid * ((Math.PI * 2) / botPlayer.sid);
                                const x = Math.cos(Date.now() * 0.01) * 300 + player.x;
                                const y = Math.sin(Date.now() * 0.01) * 300 + player.x;
                                bot.sendWS("a", Math.atan2(y - botPlayer.y, x - botPlayer.x));
                                const dist = Math.hypot(x - botPlayer.x, y - botPlayer.y);
                                if(dist > 22)
                                    // 22 is player speed without booster hat
                                    return;
                            }
                        }
                        if(botObj.length > 0) {
                            nearObj = botObj.filter(
                                (e) => e.active && e.isItem && UTILS.getDist(e, botPlayer, 0, 2) <= items.weapons[botPlayer.weaponIndex].range).sort(function(a, b) {
                                return(UTILS.getDist(a, botPlayer, 0, 2) - UTILS.getDist(b, botPlayer, 0, 2));
                            })[0];
                            if(nearObj) {
                                if(izauto == 0) {
                                    bot.sendWS("K", 1);
                                    izauto = 1;
                                }
                                if(botPlayer.nDir != UTILS.getDirect(nearObj, botPlayer, 0, 2)) {
                                    botPlayer.nDir = UTILS.getDirect(nearObj, botPlayer, 0, 2);
                                    bot.sendWS("D", botPlayer.nDir);
                                }
                                bot.buye(40, 0);
                                bot.buye(11, 1);
                            } else {
                                bot.fastGear();
                                bot.buye(11, 1);
                            }
                            bot.buye(11, 1);
                            if(breakObjects.length > 0 && getEl("mode").value == "clear") {
                                // if (getEl("mode").value == "clear") {
                                bot.selectWeapon(botPlayer.weapons[1]);
                                let gotoDist = UTILS.getDist(breakObjects[0], botPlayer, 0, 2);
                                let gotoAim = UTILS.getDirect(breakObjects[0], botPlayer, 0, 2);
                                nearObj = botObj.filter(
                                    (e) => e.active && (findSID(breakObjects, e.sid) ? true : !(e.trap && (player.sid == e.owner.sid || player.findAllianceBySid(e.owner.sid)))) && e.isItem && UTILS.getDist(e, botPlayer, 0, 2) <= items.weapons[botPlayer.weaponIndex].range + e.scale).sort(function(a, b) {
                                    return(UTILS.getDist(a, botPlayer, 0, 2) - UTILS.getDist(b, botPlayer, 0, 2));
                                })[0];
                                if(nearObj) {
                                    let isPassed = UTILS.getDist(breakObjects[0], nearObj, 0, 0);
                                    if(gotoDist - isPassed > 0) {
                                        if(findSID(breakObjects, nearObj.sid) ? true : nearObj.dmg || nearObj.trap) {
                                            if(botPlayer.moveDir != undefined) {
                                                botPlayer.moveDir = undefined;
                                                bot.sendWS("a", botPlayer.moveDir);
                                                bot.sendWS("D", botPlayer.nDir);
                                            }
                                        } else {
                                            botPlayer.moveDir = gotoAim;
                                            bot.sendWS("a", botPlayer.moveDir);
                                            bot.sendWS("D", botPlayer.nDir);
                                        }
                                        if(botPlayer.nDir != UTILS.getDirect(nearObj, botPlayer, 0, 2)) {
                                            botPlayer.nDir = UTILS.getDirect(nearObj, botPlayer, 0, 2);
                                            bot.sendWS("D", botPlayer.nDir);
                                        }
                                        if(izauto == 0) {
                                            bot.sendWS("K", 1);
                                            izauto = 1;
                                        }
                                        bot.buye(40, 0);
                                        bot.fastGear();
                                    } else {
                                        botPlayer.moveDir = gotoAim;
                                        bot.sendWS("a", botPlayer.moveDir);
                                        bot.sendWS("D", botPlayer.nDir);
                                        bot.fastGear();
                                    }
                                } else {
                                    botPlayer.moveDir = gotoAim;
                                    bot.sendWS("a", botPlayer.moveDir);
                                    bot.sendWS("D", botPlayer.nDir);
                                    bot.fastGear();
                                }
                                if(gotoDist > 300) {
                                    if(UTILS.getDist(oldXY, botPlayer, 0, 2) > 90) {
                                        let aim = UTILS.getDirect(oldXY, botPlayer, 0, 2);
                                        bot.place(3, aim + 7.7);
                                        bot.place(3, aim - 7.7);
                                        bot.place(3, aim);
                                        oldXY = {
                                            x: botPlayer.x2,
                                            y: botPlayer.y2,
                                        };
                                    }
                                }
                            }
                        }
                        if(botObj.length > 0 && getEl("mode").value == "zync") {
                            let wdaawdwad = botObj.filter(
                                (e) => e.active && e.isItem && UTILS.getDist(e, player, 0, 2) <= items.weapons[botPlayer.weaponIndex].range + e.scale);
                            if(!wdaawdwad.length) {
                                if(zoon == "no") bot.sendWS("D", UTILS.getDirect(player, botPlayer, 0, 2));
                                bot.sendWS("a", caf(player, botPlayer) + Math.PI);
                            }
                            if(wdaawdwad.length) {
                                let gotoDist = UTILS.getDist(wdaawdwad[0], botPlayer, 0, 2);
                                let gotoAim = UTILS.getDirect(wdaawdwad[0], botPlayer, 0, 2);
                                nearObj = botObj.filter(
                                    (e) => e.active && (findSID(wdaawdwad, e.sid) ? true : !(e.trap && (player.sid == e.owner.sid || player.findAllianceBySid(e.owner.sid)))) && e.isItem && UTILS.getDist(e, botPlayer, 0, 2) <= items.weapons[botPlayer.weaponIndex].range + e.scale).sort(function(a, b) {
                                    return(UTILS.getDist(a, botPlayer, 0, 2) - UTILS.getDist(b, botPlayer, 0, 2));
                                })[0];
                                if(nearObj) {
                                    let isPassed = UTILS.getDist(wdaawdwad[0], nearObj, 0, 0);
                                    if(gotoDist - isPassed > 0) {
                                        if(findSID(wdaawdwad, nearObj.sid) ? true : nearObj.dmg || nearObj.trap) {
                                            if(botPlayer.moveDir != undefined) {
                                                botPlayer.moveDir = undefined;
                                                bot.sendWS("a", botPlayer.moveDir);
                                                bot.sendWS("D", botPlayer.nDir);
                                            }
                                        } else {
                                            bot.sendWS("D", botPlayer.nDir);
                                        }
                                        if(botPlayer.nDir != UTILS.getDirect(nearObj, botPlayer, 0, 2)) {
                                            botPlayer.nDir = UTILS.getDirect(nearObj, botPlayer, 0, 2);
                                            bot.sendWS("D", botPlayer.nDir);
                                        }
                                        if(izauto == 0) {
                                            bot.sendWS("K", 1);
                                            izauto = 1;
                                        }
                                        bot.buye(40, 0);
                                        bot.fastGear();
                                    } else {
                                        if(zoon == "no") bot.sendWS("D", UTILS.getDirect(nearObj, botPlayer, 0, 2));
                                        if(cdf(player, botPlayer) <= 110) bot.sendWS("a", undefined);
                                        else bot.sendWS("a", caf(player, botPlayer) + Math.PI);
                                    }
                                } else {
                                    if(wdaawdwad.length) {
                                        if(zoon == "no") bot.sendWS("D", UTILS.getDirect(wdaawdwad[0], botPlayer, 0, 2));
                                        if(cdf(player, botPlayer) <= 110) bot.sendWS("a", undefined);
                                        else bot.sendWS("a", caf(player, botPlayer) + Math.PI);
                                    } else {
                                        if(zoon == "no") bot.sendWS("D", UTILS.getDirect(player, botPlayer, 0, 2));
                                        if(cdf(player, botPlayer) <= 110) bot.sendWS("a", undefined);
                                        else bot.sendWS("a", caf(player, botPlayer) + Math.PI);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if(type == "H") {
            let tmpData = data[0];
            for(let i = 0; i < tmpData.length;) {
                botObjManager.add(tmpData[i], tmpData[i + 1], tmpData[i + 2], tmpData[i + 3], tmpData[i + 4], tmpData[i + 5], items.list[tmpData[i + 6]], true, tmpData[i + 7] >= 0 ? {
                    sid: tmpData[i + 7],
                } : null);
                i += 8;
            }
        }
        if(type == "N") {
            let index = data[0];
            let value = data[1];
            if(botPlayer) {
                botPlayer[index] = value;
            }
        }
        if(type == "O") {
            if(data[0] == botPlayer.sid) {
                botPlayer.oldHealth = botPlayer.health;
                botPlayer.health = data[1];
                botPlayer.judgeShame();
                if(botPlayer.oldHealth > botPlayer.health) {
                    if(botPlayer.shameCount < 5) {
                        for(let i = 0; i < 2; i++) {
                            bot.place(0, botPlayer.nDir);
                        }
                    } else {
                        setTimeout(() => {
                            for(let i = 0; i < 2; i++) {
                                bot.place(0, botPlayer.nDir);
                            }
                        }, 95);
                    }
                }
            }
        }
        if(type == "Q") {
            let sid = data[0];
            botObjManager.disableBySid(sid);
        }
        if(type == "R") {
            let sid = data[0];
            if(botPlayer.alive) botObjManager.removeAllItems(sid);
        }
        if(type == "S") {
            let index = data[0];
            let value = data[1];
            if(botPlayer) {
                botPlayer.itemCounts[index] = value;
            }
        }
        if(type == "U") {
            if(data[0] > 0) {
                if(getEl("setup").value == "dm") {
                    if(botPlayer.upgraded == 0) {
                        bot.sendUpgrade(7);
                    } else if(botPlayer.upgraded == 1) {
                        bot.sendUpgrade(17);
                    } else if(botPlayer.upgraded == 2) {
                        bot.sendUpgrade(31);
                    } else if(botPlayer.upgraded == 3) {
                        bot.sendUpgrade(23);
                    } else if(botPlayer.upgraded == 4) {
                        bot.sendUpgrade(9);
                    } else if(botPlayer.upgraded == 5) {
                        bot.sendUpgrade(34);
                    } else if(botPlayer.upgraded == 6) {
                        bot.sendUpgrade(12);
                    } else if(botPlayer.upgraded == 7) {
                        bot.sendUpgrade(15);
                    }
                } else if(getEl("setup").value == "dr") {
                    if(botPlayer.upgraded == 0) {
                        bot.sendUpgrade(7);
                    } else if(botPlayer.upgraded == 1) {
                        bot.sendUpgrade(17);
                    } else if(botPlayer.upgraded == 2) {
                        bot.sendUpgrade(31);
                    } else if(botPlayer.upgraded == 3) {
                        bot.sendUpgrade(23);
                    } else if(botPlayer.upgraded == 4) {
                        bot.sendUpgrade(9);
                    } else if(botPlayer.upgraded == 5) {
                        bot.sendUpgrade(34);
                    } else if(botPlayer.upgraded == 6) {
                        bot.sendUpgrade(12);
                    } else if(botPlayer.upgraded == 7) {
                        bot.sendUpgrade(13);
                    }
                } else if(getEl("setup").value == "kh") {
                    if(botPlayer.upgraded == 0) {
                        bot.sendUpgrade(3);
                    } else if(botPlayer.upgraded == 1) {
                        bot.sendUpgrade(17);
                    } else if(botPlayer.upgraded == 2) {
                        bot.sendUpgrade(31);
                    } else if(botPlayer.upgraded == 3) {
                        bot.sendUpgrade(27);
                    } else if(botPlayer.upgraded == 4) {
                        bot.sendUpgrade(10);
                    } else if(botPlayer.upgraded == 5) {
                        bot.sendUpgrade(34);
                    } else if(botPlayer.upgraded == 6) {
                        bot.sendUpgrade(4);
                    } else if(botPlayer.upgraded == 7) {
                        bot.sendUpgrade(25);
                    }
                } else if(getEl("setup").value == "zd") {
                    if(botPlayer.upgraded == 0) {
                        bot.sendUpgrade(3);
                    } else if(botPlayer.upgraded == 1) {
                        bot.sendUpgrade(17);
                    } else if(botPlayer.upgraded == 2) {
                        bot.sendUpgrade(31);
                    } else if(botPlayer.upgraded == 3) {
                        bot.sendUpgrade(27);
                    } else if(botPlayer.upgraded == 4) {
                        bot.sendUpgrade(9);
                    } else if(botPlayer.upgraded == 5) {
                        bot.sendUpgrade(34);
                    } else if(botPlayer.upgraded == 6) {
                        bot.sendUpgrade(12);
                    } else if(botPlayer.upgraded == 7) {
                        bot.sendUpgrade(15);
                    }
                }
                botPlayer.upgraded++;
            }
        }
        if(type == "V") {
            let tmpData = data[0];
            let wpn = data[1];
            if(tmpData) {
                if(wpn) botPlayer.weapons = tmpData;
                else botPlayer.items = tmpData;
            }
        }
        if(type == "5") {
            let type = data[0];
            let id = data[1];
            let index = data[2];
            if(index) {
                if(!type) botPlayer.tails[id] = 1;
                else botPlayer.latestTail = id;
            } else {
                if(!type) botPlayer.skins[id] = 1;
                else botPlayer.latestSkin = id;
            }
        }
        if(type == "6") {
            let id = data[0];
            let mzg = data[1] + "";
            if(id == player.sid && mzg.includes("syncon")) {
                bot.zync(botPlayer.near);
            }
        }
    };
    bot.onclose = function() {
        botPlayer.inGame = false;
        bD.inGame = false;
    };
}
function renderLeaf(x, y, l, r, ctxt) {
    let endX = x + (l * Math.cos(r));
    let endY = y + (l * Math.sin(r));
    let width = l * 0.4;
    ctxt.moveTo(x, y);
    ctxt.beginPath();
    ctxt.quadraticCurveTo(((x + endX) / 2) + (width * Math.cos(r + Math.PI / 2)),
                          ((y + endY) / 2) + (width * Math.sin(r + Math.PI / 2)), endX, endY);
    ctxt.quadraticCurveTo(((x + endX) / 2) - (width * Math.cos(r + Math.PI / 2)),
                          ((y + endY) / 2) - (width * Math.sin(r + Math.PI / 2)), x, y);
    ctxt.closePath();
    ctxt.fill();
    ctxt.stroke();
}

// RENDER CIRCLE:
function renderCircle(x, y, scale, tmpContext, dontStroke, dontFill) {
    tmpContext = tmpContext || be;
    tmpContext.beginPath();
    tmpContext.arc(x, y, scale, 0, 2 * Math.PI);
    if (!dontFill) tmpContext.fill();
    if (!dontStroke) tmpContext.stroke();
}

function renderHealthCircle(x, y, scale, tmpContext, dontStroke, dontFill) {
    tmpContext = tmpContext || be;
    tmpContext.beginPath();
    tmpContext.arc(x, y, scale, 0, 2 * Math.PI);
    if (!dontFill) tmpContext.fill();
    if (!dontStroke) tmpContext.stroke();
}

// RENDER STAR SHAPE:
function renderStar(ctxt, spikes, outer, inner) {
    let rot = Math.PI / 2 * 3;
    let x, y;
    let step = Math.PI / spikes;
    ctxt.beginPath();
    ctxt.moveTo(0, -outer);
    for (let i = 0; i < spikes; i++) {
        x = Math.cos(rot) * outer;
        y = Math.sin(rot) * outer;
        ctxt.lineTo(x, y);
        rot += step;
        x = Math.cos(rot) * inner;
        y = Math.sin(rot) * inner;
        ctxt.lineTo(x, y);
        rot += step;
    }
    ctxt.lineTo(0, -outer);
    ctxt.closePath();
}

function renderHealthStar(ctxt, spikes, outer, inner) {
    let rot = Math.PI / 2 * 3;
    let x, y;
    let step = Math.PI / spikes;
    ctxt.beginPath();
    ctxt.moveTo(0, -outer);
    for (let i = 0; i < spikes; i++) {
        x = Math.cos(rot) * outer;
        y = Math.sin(rot) * outer;
        ctxt.lineTo(x, y);
        rot += step;
        x = Math.cos(rot) * inner;
        y = Math.sin(rot) * inner;
        ctxt.lineTo(x, y);
        rot += step;
    }
    ctxt.lineTo(0, -outer);
    ctxt.closePath();
}

// RENDER RECTANGLE:
function renderRect(x, y, w, h, ctxt, dontStroke, dontFill) {
    if (!dontFill) ctxt.fillRect(x - (w / 2), y - (h / 2), w, h);
    if (!dontStroke) ctxt.strokeRect(x - (w / 2), y - (h / 2), w, h);
}

function renderHealthRect(x, y, w, h, ctxt, dontStroke, dontFill) {
    if (!dontFill) ctxt.fillRect(x - (w / 2), y - (h / 2), w, h);
    if (!dontStroke) ctxt.strokeRect(x - (w / 2), y - (h / 2), w, h);
}

// RENDER RECTCIRCLE:
function renderRectCircle(x, y, s, sw, seg, ctxt, dontStroke, dontFill) {
    ctxt.save();
    ctxt.translate(x, y);
    seg = Math.ceil(seg / 2);
    for (let i = 0; i < seg; i++) {
        renderRect(0, 0, s * 2, sw, ctxt, dontStroke, dontFill);
        ctxt.rotate(Math.PI / seg);
    }
    ctxt.restore();
}

// RENDER BLOB:
function renderBlob(ctxt, spikes, outer, inner) {
    let rot = Math.PI / 2 * 3;
    let x, y;
    let step = Math.PI / spikes;
    let tmpOuter;
    ctxt.beginPath();
    ctxt.moveTo(0, -inner);
    for (let i = 0; i < spikes; i++) {
        tmpOuter = UTILS.randInt(outer + 0.9, outer * 1.2);
        ctxt.quadraticCurveTo(Math.cos(rot + step) * tmpOuter, Math.sin(rot + step) * tmpOuter,
                              Math.cos(rot + (step * 2)) * inner, Math.sin(rot + (step * 2)) * inner);
        rot += step * 2;
    }
    ctxt.lineTo(0, -inner);
    ctxt.closePath();
}
let be = gameCanvas.getContext("2d");
// RENDER TRIANGLE:
function renderTriangle(s, ctx) {
    ctx = ctx || be;
    let h = s * (Math.sqrt(3) / 2);
    ctx.beginPath();
    ctx.moveTo(0, -h / 2);
    ctx.lineTo(-s / 2, h / 2);
    ctx.lineTo(s / 2, h / 2);
    ctx.lineTo(0, -h / 2);
    ctx.fill();
    ctx.closePath();
}

// PREPARE MENU BACKGROUND:
function prepareMenuBackground() {
    // let tmpMid = config.mapScale / 2;
    // let attempts = 0;
    // for (let i = 0; i < items.list.length * 3;) {
    //     if (attempts >= 1000) break;
    //     attempts++;
    //     let type = items.list[UTILS.randInt(0, items.list.length - 1)];
    //     let data = {
    //         x: tmpMid + UTILS.randFloat(-1000, 1000),
    //         y: tmpMid + UTILS.randFloat(-600, 600),
    //         dir: UTILS.fixTo(Math.random() * (Math.PI * 2), 2)
    //     };
    //     if (objectManager.checkItemLocation(data.x, data.y, type.scale, 0.6, type.id, true)) {
    //         objectManager.add(i, data.x, data.y, data.dir, type.scale, type.id, type);
    //     } else {
    //         continue;
    //     }
    //     i++;
    // }
}
const speed = 1;
// RENDER PLAYERS:
function renderDeadPlayers(xOffset, yOffset) {
    mainContext.fillStyle = "#91b2db";
    const currentTime = Date.now();
    deadPlayers.filter((dead) => dead.active).forEach((dead) => {
        if(!dead.startTime) {
            dead.startTime = currentTime;
            dead.angle = 0;
            dead.radius = 0.1;
        }
        const timeElapsed = currentTime - dead.startTime;
        const maxAlpha = 1;
        dead.alpha = Math.max(0, maxAlpha - timeElapsed / 3000);
        dead.animate(delta);
        mainContext.globalAlpha = dead.alpha;
        mainContext.strokeStyle = outlineColor;
        mainContext.save();
        mainContext.translate(dead.x - xOffset, dead.y - yOffset);
        dead.radius -= 0.001;
        dead.angle += 0.0174533;
        const moveSpeed = 1;
        const x = dead.radius * Math.cos(dead.angle);
        const y = dead.radius * Math.sin(dead.angle);
        dead.x += x * moveSpeed;
        dead.y += y * moveSpeed;
        mainContext.rotate(dead.angle);
        renderDeadPlayer(dead, mainContext);
        mainContext.restore();
        mainContext.fillStyle = "#91b2db";
        if(timeElapsed >= 3000) {
            dead.active = false;
            dead.startTime = null;
        }
    });
}
// RENDER PLAYERS:
function renderPlayers(xOffset, yOffset, zIndex) {
    mainContext.globalAlpha = 1;
    mainContext.fillStyle = "#91b2db";
    for(var i = 0; i < players.length; ++i) {
        tmpObj = players[i];
        if(tmpObj.zIndex == zIndex) {
            tmpObj.animate(delta);
            if(tmpObj.visible) {
                tmpObj.skinRot += 0.002 * delta;
                tmpDir = tmpObj == player ? getVisualDir() : tmpObj.dir || 0;
                mainContext.save();
                mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset);
                // RENDER PLAYER:
                mainContext.rotate(tmpDir + tmpObj.dirPlus);
                renderPlayer(tmpObj, mainContext);
                mainContext.restore();
            }
        }
    }
}
// RENDER DEAD PLAYER:
function renderDeadPlayer(obj, ctxt) {
    ctxt = ctxt || mainContext;
    ctxt.lineWidth = outlineWidth;
    ctxt.lineJoin = "miter";
    let handAngle = (Math.PI / 4) * (items.weapons[obj.weaponIndex].armS || 1);
    let oHandAngle = obj.buildIndex < 0 ? items.weapons[obj.weaponIndex].hndS || 1 : 1;
    let oHandDist = obj.buildIndex < 0 ? items.weapons[obj.weaponIndex].hndD || 1 : 1;
    // TAIL/CAPE:
    renderTail2(13, ctxt, obj);
    // WEAPON BELLOW HANDS:
    if(obj.buildIndex < 0 && !items.weapons[obj.weaponIndex].aboveHand) {
        renderTool(items.weapons[obj.weaponIndex], config.weaponVariants[obj.weaponVariant || 0].src || "", obj.scale, 0, ctxt);
        if(items.weapons[obj.weaponIndex].projectile != undefined && !items.weapons[obj.weaponIndex].hideProjectile) {
            renderProjectile(obj.scale, 0, items.projectiles[items.weapons[obj.weaponIndex].projectile], mainContext);
        }
    }
    // HANDS:
    ctxt.fillStyle = "#ececec";
    renderCircle(obj.scale * Math.cos(handAngle), obj.scale * Math.sin(handAngle), 14);
    renderCircle(obj.scale * oHandDist * Math.cos(-handAngle * oHandAngle), obj.scale * oHandDist * Math.sin(-handAngle * oHandAngle), 14);
    // WEAPON ABOVE HANDS:
    if(obj.buildIndex < 0 && items.weapons[obj.weaponIndex].aboveHand) {
        renderTool(items.weapons[obj.weaponIndex], config.weaponVariants[obj.weaponVariant || 0].src || "", obj.scale, 0, ctxt);
        if(items.weapons[obj.weaponIndex].projectile != undefined && !items.weapons[obj.weaponIndex].hideProjectile) {
            renderProjectile(obj.scale, 0, items.projectiles[items.weapons[obj.weaponIndex].projectile], mainContext);
        }
    }
    // BUILD ITEM:
    if(obj.buildIndex >= 0) {
        var tmpSprite = getItemSprite(items.list[obj.buildIndex]);
        ctxt.drawImage(tmpSprite, obj.scale - items.list[obj.buildIndex].holdOffset, -tmpSprite.width / 2);
    }
    // BODY:
    renderCircle(0, 0, obj.scale, ctxt);
    // SKIN
    renderSkin2(48, ctxt, null, obj);
}
// RENDER PLAYER:
function renderPlayer(obj, ctxt) {
    ctxt = ctxt || mainContext;
    ctxt.lineWidth = outlineWidth;
    ctxt.lineJoin = "miter";
    let handAngle = (Math.PI / 4) * (items.weapons[obj.weaponIndex].armS || 1);
    let oHandAngle = obj.buildIndex < 0 ? items.weapons[obj.weaponIndex].hndS || 1 : 1;
    let oHandDist = obj.buildIndex < 0 ? items.weapons[obj.weaponIndex].hndD || 1 : 1;
    let katanaMusket = obj == player && obj.weapons[0] == 3 && obj.weapons[1] == 15;
    // TAIL/CAPE:
    if(obj.tailIndex > 0) {
        renderTailTextureImage(obj.tailIndex, ctxt, obj);
    }
    // WEAPON BELLOW HANDS:
    if(obj.buildIndex < 0 && !items.weapons[obj.weaponIndex].aboveHand) {
        renderTool(items.weapons[katanaMusket ? 4 : obj.weaponIndex], config.weaponVariants[obj.weaponVariant].src, obj.scale, 0, ctxt);
        if(items.weapons[obj.weaponIndex].projectile != undefined && !items.weapons[obj.weaponIndex].hideProjectile) {
            renderProjectile(obj.scale, 0, items.projectiles[items.weapons[obj.weaponIndex].projectile], mainContext);
        }
    }
    // HANDS:
    ctxt.fillStyle = config.skinColors[obj.skinColor];
    renderCircle(obj.scale * Math.cos(handAngle), obj.scale * Math.sin(handAngle), 14);
    renderCircle(obj.scale * oHandDist * Math.cos(-handAngle * oHandAngle), obj.scale * oHandDist * Math.sin(-handAngle * oHandAngle), 14);
    // WEAPON ABOVE HANDS:
    if(obj.buildIndex < 0 && items.weapons[obj.weaponIndex].aboveHand) {
        renderTool(items.weapons[obj.weaponIndex], config.weaponVariants[obj.weaponVariant].src, obj.scale, 0, ctxt);
        if(items.weapons[obj.weaponIndex].projectile != undefined && !items.weapons[obj.weaponIndex].hideProjectile) {
            renderProjectile(obj.scale, 0, items.projectiles[items.weapons[obj.weaponIndex].projectile], mainContext);
        }
    }
    // BUILD ITEM:
    if(obj.buildIndex >= 0) {
        var tmpSprite = getItemSprite(items.list[obj.buildIndex]);
        ctxt.drawImage(tmpSprite, obj.scale - items.list[obj.buildIndex].holdOffset, -tmpSprite.width / 2);
    }
    // BODY:
    renderCircle(0, 0, obj.scale, ctxt);
    // SKIN:
    if(obj.skinIndex > 0) {
        ctxt.rotate(Math.PI / 2);
        renderTextureSkin(obj.skinIndex, ctxt, null, obj);
    }
}
// RENDER NORMAL SKIN
var skinSprites2 = {};
var skinPointers2 = {};

function renderSkin2(index, ctxt, parentSkin, owner) {
    tmpSkin = skinSprites2[index];
    if(!tmpSkin) {
        var tmpImage = new Image();
        tmpImage.onload = function() {
            this.isLoaded = true;
            this.onload = null;
        };
        //tmpImage.src = "https://moomoo.io/img/hats/hat_" + index + ".png";
        tmpImage.src = "https://moomoo.io/img/hats/hat_" + index + ".png";
        skinSprites2[index] = tmpImage;
        tmpSkin = tmpImage;
    }
    var tmpObj = parentSkin || skinPointers2[index];
    if(!tmpObj) {
        for(var i = 0; i < hats.length; ++i) {
            if(hats[i].id == index) {
                tmpObj = hats[i];
                break;
            }
        }
        skinPointers2[index] = tmpObj;
    }
    if(tmpSkin.isLoaded) ctxt.drawImage(tmpSkin, -tmpObj.scale / 2, -tmpObj.scale / 2, tmpObj.scale, tmpObj.scale);
    if(!parentSkin && tmpObj.topSprite) {
        ctxt.save();
        ctxt.rotate(owner.skinRot);
        renderSkin2(index + "_top", ctxt, tmpObj, owner);
        ctxt.restore();
    }
}
// RENDER SKIN:
function renderTextureSkin(index, ctxt, parentSkin, owner) {
    if(!(tmpSkin = skinSprites[index + (txt ? "lol" : 0)])) {
        var tmpImage = new Image();
        (tmpImage.onload = function() {
            (this.isLoaded = true), (this.onload = null);
        }), (tmpImage.src = setSkinTextureImage(index, "hat", index)), (skinSprites[index + (txt ? "lol" : 0)] = tmpImage), (tmpSkin = tmpImage);
    }
    var tmpObj = parentSkin || skinPointers[index];
    if(!tmpObj) {
        for(var i = 0; i < hats.length; ++i) {
            if(hats[i].id == index) {
                tmpObj = hats[i];
                break;
            }
        }
        skinPointers[index] = tmpObj;
    }
    if(tmpSkin.isLoaded) ctxt.drawImage(tmpSkin, -tmpObj.scale / 2, -tmpObj.scale / 2, tmpObj.scale, tmpObj.scale);
    if(!parentSkin && tmpObj.topSprite) {
        ctxt.save();
        ctxt.rotate(owner.skinRot);
        renderSkin(index + "_top", ctxt, tmpObj, owner);
        ctxt.restore();
    }
}
var FlareZHat = {
    7: "https://i.imgur.com/vAOzlyY.png",
    15: "https://i.imgur.com/YRQ8Ybq.png",
    40: "https://i.imgur.com/Xzmg27N.png",
    26: "https://i.imgur.com/I0xGtyZ.png",
    55: "https://i.imgur.com/uYgDtcZ.png",
    20: "https://i.imgur.com/f5uhWCk.png",
};

function setSkinTextureImage(id, type, id2) {
    if(true) {
        if(FlareZHat[id] && type == "hat") {
            return FlareZHat[id];
        } else {
            if(type == "acc") {
                return ".././img/accessories/access_" + id + ".png";
            } else if(type == "hat") {
                return ".././img/hats/hat_" + id + ".png";
            } else {
                return ".././img/weapons/" + id + ".png";
            }
        }
    } else {
        if(type == "acc") {
            return ".././img/accessories/access_" + id + ".png";
        } else if(type == "hat") {
            return ".././img/hats/hat_" + id + ".png";
        } else {
            return ".././img/weapons/" + id + ".png";
        }
    }
}
// RENDER SKINS:
let skinSprites = {};
let skinPointers = {};
let tmpSkin;

function renderSkin(index, ctxt, parentSkin, owner) {
    tmpSkin = skinSprites[index];
    if(!tmpSkin) {
        let tmpImage = new Image();
        tmpImage.onload = function() {
            this.isLoaded = true;
            this.onload = null;
        };
        tmpImage.src = "https://moomoo.io/img/hats/hat_" + index + ".png";
        skinSprites[index] = tmpImage;
        tmpSkin = tmpImage;
    }
    let tmpObj = parentSkin || skinPointers[index];
    if(!tmpObj) {
        for(let i = 0; i < hats.length; ++i) {
            if(hats[i].id == index) {
                tmpObj = hats[i];
                break;
            }
        }
        skinPointers[index] = tmpObj;
    }
    if(tmpSkin.isLoaded) ctxt.drawImage(tmpSkin, -tmpObj.scale / 2, -tmpObj.scale / 2, tmpObj.scale, tmpObj.scale);
    if(!parentSkin && tmpObj.topSprite) {
        ctxt.save();
        ctxt.rotate(owner.skinRot);
        renderSkin(index + "_top", ctxt, tmpObj, owner);
        ctxt.restore();
    }
}
// RENDER TAIL:
var FlareZAcc = {
    21: "https://i.imgur.com/4ddZert.png",
    19: "https://i.imgur.com/sULkUZT.png",
};

function setTailTextureImage(id, type, id2) {
    if(true) {
        if(FlareZAcc[id] && type == "acc") {
            return FlareZAcc[id];
        } else {
            if(type == "acc") {
                return ".././img/accessories/access_" + id + ".png";
            } else if(type == "hat") {
                return ".././img/hats/hat_" + id + ".png";
            } else {
                return ".././img/weapons/" + id + ".png";
            }
        }
    } else {
        if(type == "acc") {
            return ".././img/accessories/access_" + id + ".png";
        } else if(type == "hat") {
            return ".././img/hats/hat_" + id + ".png";
        } else {
            return ".././img/weapons/" + id + ".png";
        }
    }
}

function renderTailTextureImage(index, ctxt, owner) {
    if(!(tmpSkin = accessSprites[index + (txt ? "lol" : 0)])) {
        var tmpImage = new Image();
        (tmpImage.onload = function() {
            (this.isLoaded = true), (this.onload = null);
        }), (tmpImage.src = setTailTextureImage(index, "acc")), //".././img/accessories/access_" + index + ".png";
            (accessSprites[index + (txt ? "lol" : 0)] = tmpImage), (tmpSkin = tmpImage);
    }
    var tmpObj = accessPointers[index];
    if(!tmpObj) {
        for(var i = 0; i < accessories.length; ++i) {
            if(accessories[i].id == index) {
                tmpObj = accessories[i];
                break;
            }
        }
        accessPointers[index] = tmpObj;
    }
    if(tmpSkin.isLoaded) {
        ctxt.save();
        ctxt.translate(-20 - (tmpObj.xOff || 0), 0);
        if(tmpObj.spin) ctxt.rotate(owner.skinRot);
        ctxt.drawImage(tmpSkin, -(tmpObj.scale / 2), -(tmpObj.scale / 2), tmpObj.scale, tmpObj.scale);
        ctxt.restore();
    }
}
let accessSprites = {};
let accessPointers = {};
var txt = true;

function renderTail(index, ctxt, owner) {
    tmpSkin = accessSprites[index];
    if(!tmpSkin) {
        let tmpImage = new Image();
        tmpImage.onload = function() {
            this.isLoaded = true;
            this.onload = null;
        };
        tmpImage.src = "https://moomoo.io/img/accessories/access_" + index + ".png";
        accessSprites[index] = tmpImage;
        tmpSkin = tmpImage;
    }
    let tmpObj = accessPointers[index];
    if(!tmpObj) {
        for(let i = 0; i < accessories.length; ++i) {
            if(accessories[i].id == index) {
                tmpObj = accessories[i];
                break;
            }
        }
        accessPointers[index] = tmpObj;
    }
    if(tmpSkin.isLoaded) {
        ctxt.save();
        ctxt.translate(-20 - (tmpObj.xOff || 0), 0);
        if(tmpObj.spin) ctxt.rotate(owner.skinRot);
        ctxt.drawImage(tmpSkin, -(tmpObj.scale / 2), -(tmpObj.scale / 2), tmpObj.scale, tmpObj.scale);
        ctxt.restore();
    }
}
var accessSprites2 = {};
var accessPointers2 = {};

function renderTail2(index, ctxt, owner) {
    tmpSkin = accessSprites2[index];
    if(!tmpSkin) {
        var tmpImage = new Image();
        tmpImage.onload = function() {
            this.isLoaded = true;
            this.onload = null;
        };
        tmpImage.src = "https://moomoo.io/img/accessories/access_" + index + ".png";
        accessSprites2[index] = tmpImage;
        tmpSkin = tmpImage;
    }
    var tmpObj = accessPointers2[index];
    if(!tmpObj) {
        for(var i = 0; i < accessories.length; ++i) {
            if(accessories[i].id == index) {
                tmpObj = accessories[i];
                break;
            }
        }
        accessPointers2[index] = tmpObj;
    }
    if(tmpSkin.isLoaded) {
        ctxt.save();
        ctxt.translate(-20 - (tmpObj.xOff || 0), 0);
        if(tmpObj.spin) ctxt.rotate(owner.skinRot);
        ctxt.drawImage(tmpSkin, -(tmpObj.scale / 2), -(tmpObj.scale / 2), tmpObj.scale, tmpObj.scale);
        ctxt.restore();
    }
}
// RENDER TOOL:
let toolSprites = {};

function renderTool(obj, variant, x, y, ctxt) {
    let tmpSrc = obj.src + (variant || "");
    let tmpSprite = toolSprites[tmpSrc];
    if(!tmpSprite) {
        tmpSprite = new Image();
        tmpSprite.onload = function() {
            this.isLoaded = true;
        };
        tmpSprite.src = "https://moomoo.io/img/weapons/" + tmpSrc + ".png";
        toolSprites[tmpSrc] = tmpSprite;
    }
    if(tmpSprite.isLoaded) ctxt.drawImage(tmpSprite, x + obj.xOff - obj.length / 2, y + obj.yOff - obj.width / 2, obj.length, obj.width);
}
// RENDER PROJECTILES:
function renderProjectiles(layer, xOffset, yOffset) {
    for(let i = 0; i < projectiles.length; i++) {
        tmpObj = projectiles[i];
        if(tmpObj.active && tmpObj.layer == layer && tmpObj.inWindow) {
            tmpObj.update(delta);
            if(tmpObj.active && isOnScreen(tmpObj.x - xOffset, tmpObj.y - yOffset, tmpObj.scale)) {
                mainContext.save();
                mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset);
                mainContext.rotate(tmpObj.dir);
                renderProjectile(0, 0, tmpObj, mainContext, 1);
                mainContext.restore();
            }
        }
    }
}
// RENDER PROJECTILE:
let projectileSprites = {}; //fz iz zexy
function renderProjectile(x, y, obj, ctxt, debug) {
    if(obj.src) {
        let tmpSrc = items.projectiles[obj.indx].src;
        let tmpSprite = projectileSprites[tmpSrc];
        if(!tmpSprite) {
            tmpSprite = new Image();
            tmpSprite.onload = function() {
                this.isLoaded = true;
            };
            tmpSprite.src = "https://moomoo.io/img/weapons/" + tmpSrc + ".png";
            projectileSprites[tmpSrc] = tmpSprite;
        }
        if(tmpSprite.isLoaded) ctxt.drawImage(tmpSprite, x - obj.scale / 2, y - obj.scale / 2, obj.scale, obj.scale);
    } else if(obj.indx == 1) {
        ctxt.fillStyle = "#939393";
        renderCircle(x, y, obj.scale, ctxt);
    }
}
// RENDER AI:
let aiSprites = {};

function renderAI(obj, ctxt) {
    let tmpIndx = obj.index;
    let tmpSprite = aiSprites[tmpIndx];
    if(!tmpSprite) {
        let tmpImg = new Image();
        tmpImg.onload = function() {
            this.isLoaded = true;
            this.onload = null;
        };
        tmpImg.src = "https://moomoo.io/img/animals/" + obj.src + ".png";
        tmpSprite = tmpImg;
        aiSprites[tmpIndx] = tmpSprite;
    }
    if(tmpSprite.isLoaded) {
        let tmpScale = obj.scale * 1.2 * (obj.spriteMlt || 1);
        ctxt.drawImage(tmpSprite, -tmpScale, -tmpScale, tmpScale * 2, tmpScale * 2);
    }
}
// RENDER WATER BODIES:
function renderWaterBodies(xOffset, yOffset, ctxt, padding) {
    // MIDDLE RIVER:
    let tmpW = config.riverWidth + padding;
    let tmpY = config.mapScale / 2 - yOffset - tmpW / 2;
    if(tmpY < maxScreenHeight && tmpY + tmpW > 0) {
        ctxt.fillRect(0, tmpY, maxScreenWidth, tmpW);
    }
}
// RENDER GAME OBJECTS:
let gameObjectSprites = {};

function getResSprite(obj) {
    let biomeID = (obj.y >= config.mapScale - config.snowBiomeTop) ? 2 : ((obj.y <= config.snowBiomeTop) ? 1 : 0);
    let tmpIndex = (obj.type + "_" + obj.scale + "_" + biomeID);
    let tmpSprite = gameObjectSprites[tmpIndex];
    if (!tmpSprite) {
        let blurScale = 6;
        let tmpCanvas = document.createElement("canvas");
        tmpCanvas.width = tmpCanvas.height = (obj.scale * 2.1) + outlineWidth;
        let tmpContext = tmpCanvas.getContext('2d');
        tmpContext.translate((tmpCanvas.width / 2), (tmpCanvas.height / 2));
        tmpContext.rotate(UTILS.randFloat(0, Math.PI));
        tmpContext.strokeStyle = outlineColor;
        tmpContext.lineWidth = outlineWidth;
        // if (isNight) {
        //     tmpContext.shadowBlur = blurScale;
        //     tmpContext.shadowColor = `rgba(0, 0, 0, ${obj.alpha})`;
        // }
        if (obj.type == 0) {
            let tmpScale;
            let tmpCount = 8;
            tmpContext.globalAlpha = (cdf(obj, player) <= 250 ? 0.6 : 1);
            for (let i = 0; i < 2; ++i) {
                tmpScale = tmpObj.scale * (!i ? 1 : 0.5);
                renderStar(tmpContext, tmpCount, tmpScale, tmpScale * 0.7);
                tmpContext.fillStyle = !biomeID ? (!i ? "#9ebf57" : "#b4db62") : (!i ? "#e3f1f4" : "#fff");
                tmpContext.fill();
                if (!i) {
                    tmpContext.stroke();
                    tmpContext.shadowBlur = null;
                    tmpContext.shadowColor = null;
                    tmpContext.globalAlpha = 1;
                }
            }
        } else if (obj.type == 1) {
            if (biomeID == 2) {
                tmpContext.fillStyle = "#606060";
                renderStar(tmpContext, 6, obj.scale * 0.3, obj.scale * 0.71);
                tmpContext.fill();
                tmpContext.stroke();

                //tmpContext.shadowBlur = null;
                //tmpContext.shadowColor = null;

                tmpContext.fillStyle = "#89a54c";
                renderCircle(0, 0, obj.scale * 0.55, tmpContext);
                tmpContext.fillStyle = "#a5c65b";
                renderCircle(0, 0, obj.scale * 0.3, tmpContext, true);
            } else {
                renderBlob(tmpContext, 6, tmpObj.scale, tmpObj.scale * 0.7);
                tmpContext.fillStyle = biomeID ? "#e3f1f4" : "#89a54c";
                tmpContext.fill();
                tmpContext.stroke();

                //tmpContext.shadowBlur = null;
                //tmpContext.shadowColor = null;

                tmpContext.fillStyle = biomeID ? "#6a64af" : "#c15555";
                let tmpRange;
                let berries = 4;
                let rotVal = (Math.PI * 2) / berries;
                for (let i = 0; i < berries; ++i) {
                    tmpRange = UTILS.randInt(tmpObj.scale / 3.5, tmpObj.scale / 2.3);
                    renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i),
                                 UTILS.randInt(10, 12), tmpContext);
                }
            }
        } else if (obj.type == 2 || obj.type == 3) {
            tmpContext.fillStyle = (obj.type == 2) ? (biomeID == 2 ? "#938d77" : "#939393") : "#e0c655";
            renderStar(tmpContext, 3, obj.scale, obj.scale);
            tmpContext.fill();
            tmpContext.stroke();

            tmpContext.shadowBlur = null;
            tmpContext.shadowColor = null;

            tmpContext.fillStyle = (obj.type == 2) ? (biomeID == 2 ? "#b2ab90" : "#bcbcbc") : "#ebdca3";
            renderStar(tmpContext, 3, obj.scale * 0.55, obj.scale * 0.65);
            tmpContext.fill();
        }
        tmpSprite = tmpCanvas;
        gameObjectSprites[tmpIndex] = tmpSprite;
    }
    return tmpSprite;
}
// GET ITEM SPRITE:
let itemSprites = [];

function getItemSprite(obj, asIcon) {
    let tmpSprite = itemSprites[obj.id];
    if(!tmpSprite || asIcon) {
        let blurScale = !asIcon ? 20 : 5;
        let tmpCanvas = document.createElement("canvas");
        let reScale = !asIcon && obj.name == "windmill" ? items.list[4].scale : obj.scale;
        tmpCanvas.width = tmpCanvas.height = reScale * 2.5 + outlineWidth + (items.list[obj.id].spritePadding || 0) + blurScale;
        let tmpContext = tmpCanvas.getContext("2d");
        tmpContext.translate(tmpCanvas.width / 2, tmpCanvas.height / 2);
        tmpContext.rotate(asIcon ? 0 : Math.PI / 2);
        tmpContext.strokeStyle = outlineColor;
        tmpContext.lineWidth = outlineWidth * (asIcon ? tmpCanvas.width / 81 : 1);
        if(!asIcon) {
            tmpContext.shadowBlur = 8;
            tmpContext.shadowColor = `rgba(0, 0, 0, 0.2)`;
        }
        if(obj.name == "apple") {
            tmpContext.fillStyle = "#c15555";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fillStyle = "#89a54c";
            let leafDir = -(Math.PI / 2);
            renderLeaf(obj.scale * Math.cos(leafDir), obj.scale * Math.sin(leafDir), 25, leafDir + Math.PI / 2, tmpContext);
        } else if(obj.name == "cookie") {
            tmpContext.fillStyle = "#cca861";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fillStyle = "#937c4b";
            let chips = 4;
            let rotVal = (Math.PI * 2) / chips;
            let tmpRange;
            for(let i = 0; i < chips; ++i) {
                tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7);
                renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i), UTILS.randInt(4, 5), tmpContext, true);
            }
        } else if(obj.name == "cheese") {
            tmpContext.fillStyle = "#f4f3ac";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fillStyle = "#c3c28b";
            let chips = 4;
            let rotVal = (Math.PI * 2) / chips;
            let tmpRange;
            for(let i = 0; i < chips; ++i) {
                tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7);
                renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i), UTILS.randInt(4, 5), tmpContext, true);
            }
        } else if(obj.name == "wood wall" || obj.name == "stone wall" || obj.name == "castle wall") {
            tmpContext.fillStyle = obj.name == "castle wall" ? "#83898e" : obj.name == "wood wall" ? "#a5974c" : "#939393";
            let sides = obj.name == "castle wall" ? 4 : 3;
            renderStar(tmpContext, sides, obj.scale * 1.1, obj.scale * 1.1);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = obj.name == "castle wall" ? "#9da4aa" : obj.name == "wood wall" ? "#c9b758" : "#bcbcbc";
            renderStar(tmpContext, sides, obj.scale * 0.65, obj.scale * 0.65);
            tmpContext.fill();
        } else if(obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "poison spikes" || obj.name == "spinning spikes") {
            tmpContext.fillStyle = obj.name == "poison spikes" ? "#02f50f" : "#02f50f";
            let tmpScale = obj.scale * 0.6;
            renderStar(tmpContext, obj.name == "spikes" ? 5 : 6, obj.scale, tmpScale);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#02f50f";
            renderCircle(0, 0, tmpScale, tmpContext);
            tmpContext.fillStyle = "#02f50f";
            renderCircle(0, 0, tmpScale / 2, tmpContext, true);
        } else if(obj.name == "windmill" || obj.name == "faster windmill" || obj.name == "power mill") {
            tmpContext.fillStyle = "#3d0411";
            renderCircle(0, 0, reScale, tmpContext);
            tmpContext.fillStyle = "#3d0411";
            renderRectCircle(0, 0, reScale * 1.5, 29, 4, tmpContext);
            tmpContext.fillStyle = "#3d0411";
            renderCircle(0, 0, reScale * 0.3, tmpContext);
        } else if(obj.name == "mine") {
            tmpContext.fillStyle = "#939393";
            renderStar(tmpContext, 3, obj.scale, obj.scale);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#bcbcbc";
            renderStar(tmpContext, 3, obj.scale * 0.55, obj.scale * 0.65);
            tmpContext.fill();
        } else if(obj.name == "sapling") {
            for(let i = 0; i < 2; ++i) {
                let tmpScale = obj.scale * (!i ? 1 : 0.5);
                renderStar(tmpContext, 7, tmpScale, tmpScale * 0.7);
                tmpContext.fillStyle = !i ? "#9ebf57" : "#b4db62";
                tmpContext.fill();
                if(!i) tmpContext.stroke();
            }
        } else if(obj.name == "pit trap") {
            tmpContext.fillStyle = "#02f50f";
            renderStar(tmpContext, 3, obj.scale * 1.1, obj.scale * 1.1);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = outlineColor;
            renderStar(tmpContext, 3, obj.scale * 0.65, obj.scale * 0.65);
            tmpContext.fill();
        } else if(obj.name == "boost pad") {
            tmpContext.fillStyle = "#7e7f82";
            renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#dbd97d";
            renderTriangle(obj.scale * 1, tmpContext);
        } else if(obj.name == "turret") {
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#939393";
            let tmpLen = 50;
            renderRect(0, -tmpLen / 2, obj.scale * 0.9, tmpLen, tmpContext);
            renderCircle(0, 0, obj.scale * 0.6, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
        } else if(obj.name == "platform") {
            tmpContext.fillStyle = "#cebd5f";
            let tmpCount = 4;
            let tmpS = obj.scale * 2;
            let tmpW = tmpS / tmpCount;
            let tmpX = -(obj.scale / 2);
            for(let i = 0; i < tmpCount; ++i) {
                renderRect(tmpX - tmpW / 2, 0, tmpW, obj.scale * 2, tmpContext);
                tmpContext.fill();
                tmpContext.stroke();
                tmpX += tmpS / tmpCount;
            }
        } else if(obj.name == "healing pad") {
            tmpContext.fillStyle = "#7e7f82";
            renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#db6e6e";
            renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
        } else if(obj.name == "spawn pad") {
            tmpContext.fillStyle = "#7e7f82";
            renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#71aad6";
            renderCircle(0, 0, obj.scale * 0.6, tmpContext);
        } else if(obj.name == "blocker") {
            tmpContext.fillStyle = "#7e7f82";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.rotate(Math.PI / 4);
            tmpContext.fillStyle = "#db6e6e";
            renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
        } else if(obj.name == "teleporter") {
            tmpContext.fillStyle = "#7e7f82";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.rotate(Math.PI / 4);
            tmpContext.fillStyle = "#d76edb";
            renderCircle(0, 0, obj.scale * 0.5, tmpContext, true);
        }
        tmpSprite = tmpCanvas;
        if(!asIcon) itemSprites[obj.id] = tmpSprite;
    }
    return tmpSprite;
}

function getItemSprite2(obj, tmpX, tmpY) {
    let tmpContext = mainContext;
    let reScale = obj.name == "windmill" ? items.list[4].scale : obj.scale;
    tmpContext.save();
    tmpContext.translate(tmpX, tmpY);
    tmpContext.rotate(obj.dir);
    tmpContext.strokeStyle = outlineColor;
    tmpContext.lineWidth = outlineWidth;
    if(obj.name == "apple") {
        tmpContext.fillStyle = "#c15555";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fillStyle = "#89a54c";
        let leafDir = -(Math.PI / 2);
        renderLeaf(obj.scale * Math.cos(leafDir), obj.scale * Math.sin(leafDir), 25, leafDir + Math.PI / 2, tmpContext);
    } else if(obj.name == "cookie") {
        tmpContext.fillStyle = "#cca861";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fillStyle = "#937c4b";
        let chips = 4;
        let rotVal = (Math.PI * 2) / chips;
        let tmpRange;
        for(let i = 0; i < chips; ++i) {
            tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7);
            renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i), UTILS.randInt(4, 5), tmpContext, true);
        }
    } else if(obj.name == "cheese") {
        tmpContext.fillStyle = "#f4f3ac";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fillStyle = "#c3c28b";
        let chips = 4;
        let rotVal = (Math.PI * 2) / chips;
        let tmpRange;
        for(let i = 0; i < chips; ++i) {
            tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7);
            renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i), UTILS.randInt(4, 5), tmpContext, true);
        }
    } else if(obj.name == "wood wall" || obj.name == "stone wall" || obj.name == "castle wall") {
        tmpContext.fillStyle = obj.name == "castle wall" ? "#83898e" : obj.name == "wood wall" ? "#a5974c" : "#939393";
        let sides = obj.name == "castle wall" ? 4 : 3;
        renderStar(tmpContext, sides, obj.scale * 1.1, obj.scale * 1.1);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = obj.name == "castle wall" ? "#9da4aa" : obj.name == "wood wall" ? "#c9b758" : "#bcbcbc";
        renderStar(tmpContext, sides, obj.scale * 0.65, obj.scale * 0.65);
        tmpContext.fill();
    } else if(obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "poison spikes" || obj.name == "spinning spikes") {
        tmpContext.fillStyle = obj.name == "poison spikes" ? "#7b935d" : "#939393";
        let tmpScale = obj.scale * 0.6;
        renderStar(tmpContext, obj.name == "spikes" ? 5 : 6, obj.scale, tmpScale);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#a5974c";
        renderCircle(0, 0, tmpScale, tmpContext);
        tmpContext.fillStyle = "#c9b758";
        renderCircle(0, 0, tmpScale / 2, tmpContext, true);
    } else if(obj.name == "windmill" || obj.name == "faster windmill" || obj.name == "power mill") {
        tmpContext.fillStyle = "#a5974c";
        renderCircle(0, 0, reScale, tmpContext);
        tmpContext.fillStyle = "#c9b758";
        renderRectCircle(0, 0, reScale * 1.5, 29, 4, tmpContext);
        tmpContext.fillStyle = "#a5974c";
        renderCircle(0, 0, reScale * 0.5, tmpContext);
    } else if(obj.name == "mine") {
        tmpContext.fillStyle = "#939393";
        renderStar(tmpContext, 3, obj.scale, obj.scale);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#bcbcbc";
        renderStar(tmpContext, 3, obj.scale * 0.55, obj.scale * 0.65);
        tmpContext.fill();
    } else if(obj.name == "sapling") {
        for(let i = 0; i < 2; ++i) {
            let tmpScale = obj.scale * (!i ? 1 : 0.5);
            renderStar(tmpContext, 7, tmpScale, tmpScale * 0.7);
            tmpContext.fillStyle = !i ? "#9ebf57" : "#b4db62";
            tmpContext.fill();
            if(!i) tmpContext.stroke();
        }
    } else if(obj.name == "pit trap") {
        tmpContext.fillStyle = "#a5974c";
        renderStar(tmpContext, 3, obj.scale * 1.1, obj.scale * 1.1);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = outlineColor;
        renderStar(tmpContext, 3, obj.scale * 0.65, obj.scale * 0.65);
        tmpContext.fill();
    } else if(obj.name == "boost pad") {
        tmpContext.fillStyle = "#7e7f82";
        renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#dbd97d";
        renderTriangle(obj.scale * 1, tmpContext);
    } else if(obj.name == "turret") {
        tmpContext.fillStyle = "#a5974c";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#939393";
        let tmpLen = 50;
        renderRect(0, -tmpLen / 2, obj.scale * 0.9, tmpLen, tmpContext);
        renderCircle(0, 0, obj.scale * 0.6, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
    } else if(obj.name == "platform") {
        tmpContext.fillStyle = "#cebd5f";
        let tmpCount = 4;
        let tmpS = obj.scale * 2;
        let tmpW = tmpS / tmpCount;
        let tmpX = -(obj.scale / 2);
        for(let i = 0; i < tmpCount; ++i) {
            renderRect(tmpX - tmpW / 2, 0, tmpW, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpX += tmpS / tmpCount;
        }
    } else if(obj.name == "healing pad") {
        tmpContext.fillStyle = "#7e7f82";
        renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#db6e6e";
        renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
    } else if(obj.name == "spawn pad") {
        tmpContext.fillStyle = "#7e7f82";
        renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#71aad6";
        renderCircle(0, 0, obj.scale * 0.6, tmpContext);
    } else if(obj.name == "blocker") {
        tmpContext.fillStyle = "#7e7f82";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.rotate(Math.PI / 4);
        tmpContext.fillStyle = "#db6e6e";
        renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
    } else if(obj.name == "teleporter") {
        tmpContext.fillStyle = "#7e7f82";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.rotate(Math.PI / 4);
        tmpContext.fillStyle = "#d76edb";
        renderCircle(0, 0, obj.scale * 0.5, tmpContext, true);
    }
    tmpContext.restore();
}
let objSprites = [];

function getObjSprite(obj) {
    let tmpSprite = objSprites[obj.id];
    if(!tmpSprite) {
        // let blurScale = isNight ? 20 : 0;
        let tmpCanvas = document.createElement("canvas");
        tmpCanvas.width = tmpCanvas.height = obj.scale * 2.5 + outlineWidth + (items.list[obj.id].spritePadding || 0) + 0;
        let tmpContext = tmpCanvas.getContext("2d");
        tmpContext.translate(tmpCanvas.width / 2, tmpCanvas.height / 2);
        tmpContext.rotate(Math.PI / 2);
        tmpContext.strokeStyle = outlineColor;
        tmpContext.lineWidth = outlineWidth;
        // if (isNight) {
        //     tmpContext.shadowBlur = 20;
        //     tmpContext.shadowColor = `rgba(0, 0, 0, ${Math.min(0.3, obj.alpha)})`;
        // }
        if(obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "poison spikes" || obj.name == "spinning spikes") {
            tmpContext.fillStyle = obj.name == "poison spikes" ? "#7b935d" : "#939393";
            let tmpScale = obj.scale * 0.6;
            renderStar(tmpContext, obj.name == "spikes" ? 5 : 6, obj.scale, tmpScale);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, tmpScale, tmpContext);
            tmpContext.fillStyle = "#cc5151";
            renderCircle(0, 0, tmpScale / 2, tmpContext, true);
        } else if(obj.name == "pit trap") {
            tmpContext.fillStyle = "#a5974c";
            renderStar(tmpContext, 3, obj.scale * 1.1, obj.scale * 1.1);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#cc5151";
            renderStar(tmpContext, 3, obj.scale * 0.65, obj.scale * 0.65);
            tmpContext.fill();
        }
        tmpSprite = tmpCanvas;
        objSprites[obj.id] = tmpSprite;
    }
    return tmpSprite;
}
// GET MARK SPRITE:
function getMarkSprite(obj, tmpContext, tmpX, tmpY) {
    let center = {
        x: screenWidth / 2,
        y: screenHeight / 2,
    };
    tmpContext.lineWidth = outlineWidth;
    mainContext.globalAlpha = 0.2;
    tmpContext.strokeStyle = outlineColor;
    tmpContext.save();
    tmpContext.translate(tmpX, tmpY);
    tmpContext.rotate(90 * 10);
    if(obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "poison spikes" || obj.name == "spinning spikes") {
        tmpContext.fillStyle = obj.name == "poison spikes" ? "#7b935d" : "#939393";
        var tmpScale = obj.scale;
        renderStar(tmpContext, obj.name == "spikes" ? 5 : 6, obj.scale, tmpScale);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#a5974c";
        renderCircle(0, 0, tmpScale, tmpContext);
        if(player && obj.owner && player.sid != obj.owner.sid && !tmpObj.findAllianceBySid(obj.owner.sid)) {
            tmpContext.fillStyle = "#a34040";
        } else {
            tmpContext.fillStyle = "#c9b758";
        }
        renderCircle(0, 0, tmpScale / 2, tmpContext, true);
    } else if(obj.name == "turret") {
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#939393";
        let tmpLen = 50;
        renderRect(0, -tmpLen / 2, obj.scale * 0.9, tmpLen, tmpContext);
        renderCircle(0, 0, obj.scale * 0.6, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
    } else if(obj.name == "teleporter") {
        tmpContext.fillStyle = "#7e7f82";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.rotate(Math.PI / 4);
        tmpContext.fillStyle = "#d76edb";
        renderCircle(0, 0, obj.scale * 0.5, tmpContext, true);
    } else if(obj.name == "platform") {
        tmpContext.fillStyle = "#cebd5f";
        let tmpCount = 4;
        let tmpS = obj.scale * 2;
        let tmpW = tmpS / tmpCount;
        let tmpX = -(obj.scale / 2);
        for(let i = 0; i < tmpCount; ++i) {
            renderRect(tmpX - tmpW / 2, 0, tmpW, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpX += tmpS / tmpCount;
        }
    } else if(obj.name == "healing pad") {
        tmpContext.fillStyle = "#7e7f82";
        renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#db6e6e";
        renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
    } else if(obj.name == "spawn pad") {
        tmpContext.fillStyle = "#7e7f82";
        renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#71aad6";
        renderCircle(0, 0, obj.scale * 0.6, tmpContext);
    } else if(obj.name == "blocker") {
        tmpContext.fillStyle = "#7e7f82";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.rotate(Math.PI / 4);
        tmpContext.fillStyle = "#db6e6e";
        renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
    } else if(obj.name == "windmill" || obj.name == "faster windmill" || obj.name == "power mill") {
        tmpContext.fillStyle = "#00ffaf";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fillStyle = "#00ffaf";
        renderRectCircle(0, 0, obj.scale * 1.5, 29, 4, tmpContext);
        tmpContext.fillStyle = "#00ffaf";
        renderCircle(0, 0, obj.scale * 0.5, tmpContext);
    } else if(obj.name == "pit trap") {
        tmpContext.fillStyle = "#4ca589";
        renderStar(tmpContext, 3, obj.scale * 1.1, obj.scale * 1.1);
        tmpContext.fill();
        tmpContext.stroke();
        if(player && obj.owner && player.sid != obj.owner.sid && !tmpObj.findAllianceBySid(obj.owner.sid)) {
            tmpContext.fillStyle = "#2b2d54";
        } else {
            tmpContext.fillStyle = outlineColor;
        }
        renderStar(tmpContext, 3, obj.scale * 0.65, obj.scale * 0.65);
        tmpContext.fill();
    }
    tmpContext.restore();
}
// OBJECT ON SCREEN:
function isOnScreen(x, y, s) {
    return(x + s >= 0 && x - s <= maxScreenWidth && y + s >= 0 && (y, s, maxScreenHeight));
}
// RENDER GAME OBJECTS:
function renderGameObjects(layer, xOffset, yOffset) {
    let tmpSprite;
    let tmpX;
    let tmpY;
    liztobj.forEach((tmp) => {
        tmpObj = tmp;
        if(tmpObj.active && liztobj.includes(tmp) && tmpObj.render) {
            tmpX = tmpObj.x + tmpObj.xWiggle - xOffset;
            tmpY = tmpObj.y + tmpObj.yWiggle - yOffset;
            if(layer == 0) {
                tmpObj.update(delta);
            }
            mainContext.globalAlpha = tmpObj.alpha;
            if(tmpObj.layer == layer && isOnScreen(tmpX, tmpY, tmpObj.scale + (tmpObj.blocker || 0))) {
                if(tmpObj.isItem) {
                    if((tmpObj.dmg || tmpObj.trap) && !tmpObj.isTeamObject(player)) {
                        tmpSprite = getObjSprite(tmpObj);
                    } else {
                        tmpSprite = getItemSprite(tmpObj);
                    }
                    mainContext.save();
                    mainContext.translate(tmpX, tmpY);
                    mainContext.rotate(tmpObj.dir);
                    if(!tmpObj.active) {
                        mainContext.scale(tmpObj.visScale / tmpObj.scale, tmpObj.visScale / tmpObj.scale);
                    }
                    mainContext.drawImage(tmpSprite, -(tmpSprite.width / 2), -(tmpSprite.height / 2));
                    if(tmpObj.blocker) {
                        mainContext.strokeStyle = "#db6e6e";
                        mainContext.globalAlpha = 0.3;
                        mainContext.lineWidth = 6;
                        renderCircle(0, 0, tmpObj.blocker, mainContext, false, true);
                    }
                    mainContext.restore();
                } else {
                    tmpSprite = getResSprite(tmpObj);
                    mainContext.drawImage(tmpSprite, tmpX - tmpSprite.width / 2, tmpY - tmpSprite.height / 2);
                }
            }
            if(layer == 3) {
                if(tmpObj.health < tmpObj.maxHealth) {
                    // HEALTH HOLDER:
                    mainContext.fillStyle = darkOutlineColor;
                    mainContext.roundRect(tmpX - config.healthBarWidth / 2 - config.healthBarPad, tmpY - config.healthBarPad, config.healthBarWidth + config.healthBarPad * 2, 17, 8);
                    mainContext.fill();
                    // HEALTH BAR:
                    mainContext.fillStyle = tmpObj.isTeamObject(player) ? "#8ecc51" : "#cc5151";
                    mainContext.roundRect(tmpX - config.healthBarWidth / 2, tmpY, config.healthBarWidth * (tmpObj.health / tmpObj.maxHealth), 17 - config.healthBarPad * 2, 7);
                    mainContext.fill();
                }
                if (tmpObj.health < tmpObj.maxHealth) {
                                                        // PLAYER SID OWNER
                                                        mainContext.font = "16px Hammersmith One";
                                                       mainContext.fillStyle = tmpObj.isTeamObject(player) ? "#8ecc51" : "#cc5151";
                                                        mainContext.textBaseline = "middle";
                                                        mainContext.textAlign = "center";
                                                        mainContext.strokeStyle = "#000";
                                                        mainContext.lineWidth = 6;
                                                        mainContext.lineJoin = "round";
                                                        mainContext.strokeText(tmpObj.owner.sid, tmpObj.x - xOffset, (tmpObj.y - yOffset + 30));
                                                        mainContext.fillText(tmpObj.owner.sid, tmpObj.x - xOffset, (tmpObj.y - yOffset + 30));
                                                    }
            }
        }
    });
    // PLACE VISIBLE:
    if(layer == 0) {
        if(placeVisible.length) {
            placeVisible.forEach((places) => {
                tmpX = places.x - xOffset;
                tmpY = places.y - yOffset;
                markObject(places, tmpX, tmpY);
            });
        }
    }
}

function markObject(tmpObj, tmpX, tmpY) {
    getMarkSprite(tmpObj, mainContext, tmpX, tmpY);
}
// RENDER MINIMAP:
class MapPing {
    constructor(color, scale) {
        this.init = function(x, y) {
            this.scale = 0;
            this.x = x;
            this.y = y;
            this.active = true;
        };
        this.update = function(ctxt, delta) {
            if(this.active) {
                this.scale += 0.05 * delta;
                if(this.scale >= scale) {
                    this.active = false;
                } else {
                    ctxt.globalAlpha = 1 - Math.max(0, this.scale / scale);
                    ctxt.beginPath();
                    ctxt.arc(
                        (this.x / config.mapScale) * mapDisplay.width, (this.y / config.mapScale) * mapDisplay.width, this.scale, 0, 2 * Math.PI);
                    ctxt.stroke();
                }
            }
        };
        this.color = color;
    }
}

function pingMap(x, y) {
    tmpPing = mapPings.find((pings) => !pings.active);
    if(!tmpPing) {
        tmpPing = new MapPing("#fff", config.mapPingScale);
        mapPings.push(tmpPing);
    }
    tmpPing.init(x, y);
}

function updateMapMarker() {
    mapMarker.x = player.x;
    mapMarker.y = player.y;
}

function renderMinimap(delta) {
    if(player && player.alive) {
        mapContext.clearRect(0, 0, mapDisplay.width, mapDisplay.height);
        // RENDER PINGS:
        mapContext.lineWidth = 4;
        for(let i = 0; i < mapPings.length; ++i) {
            tmpPing = mapPings[i];
            mapContext.strokeStyle = tmpPing.color;
            tmpPing.update(mapContext, delta);
        }
        // RENDER BREAK TRACKS:
        mapContext.globalAlpha = 1;
        mapContext.fillStyle = "#ff0000";
        if(breakTrackers.length) {
            mapContext.fillStyle = "#abcdef";
            mapContext.font = "17px Hammersmith One";
            mapContext.textBaseline = "middle";
            mapContext.textAlign = "center";
            for(let i = 0; i < breakTrackers.length;) {
                mapContext.fillText("x", (breakTrackers[i].x / config.mapScale) * mapDisplay.width, (breakTrackers[i].y / config.mapScale) * mapDisplay.height);
                i += 2;
            }
        }
        // RENDER PLAYERS:
        mapContext.globalAlpha = 1;
        mapContext.fillStyle = "#fff";
        renderCircle(
            (player.x / config.mapScale) * mapDisplay.width, (player.y / config.mapScale) * mapDisplay.height, 7, mapContext, true);
        mapContext.fillStyle = "rgba(255,255,255,0.35)";
        if(player.team && minimapData) {
            for(let i = 0; i < minimapData.length;) {
                renderCircle(
                    (minimapData[i] / config.mapScale) * mapDisplay.width, (minimapData[i + 1] / config.mapScale) * mapDisplay.height, 7, mapContext, true);
                i += 2;
            }
        }
        // RENDER BOTS:
        if(bots.length) {
            bots.forEach((tmp) => {
                if(tmp.inGame) {
                    mapContext.globalAlpha = 1;
                    mapContext.strokeStyle = "#cc5151";
                    renderCircle(
                        (tmp.x2 / config.mapScale) * mapDisplay.width, (tmp.y2 / config.mapScale) * mapDisplay.height, 7, mapContext, false, true);
                }
            });
        }
        // DEATH LOCATION:
        if(lastDeath) {
            mapContext.fillStyle = "#000000";
            mapContext.font = "17px Hammersmith One";
            mapContext.textBaseline = "middle";
            mapContext.textAlign = "center";
            mapContext.fillText("x", (lastDeath.x / config.mapScale) * mapDisplay.width, (lastDeath.y / config.mapScale) * mapDisplay.height);
        }
        // MAP MARKER:
        if(mapMarker) {
            mapContext.fillStyle = "#fff";
            mapContext.font = "17px Hammersmith One";
            mapContext.textBaseline = "middle";
            mapContext.textAlign = "center";
            mapContext.fillText("x", (mapMarker.x / config.mapScale) * mapDisplay.width, (mapMarker.y / config.mapScale) * mapDisplay.height);
        }
    }
}
// ICONS:
let crossHairs = "https://cdn.discordapp.com/attachments/1001384433078779927/1149285168780165170/100px-Crosshairs_Red.png";
let crossHairSprites = {};
let iconSprites = {};
let icons = ["crown", "skull"];

function loadIcons() {
    for(let i = 0; i < icons.length; ++i) {
        let tmpSprite = new Image();
        tmpSprite.onload = function() {
            this.isLoaded = true;
        };
        tmpSprite.src = "./../img/icons/" + icons[i] + ".png";
        iconSprites[icons[i]] = tmpSprite;
    }
    for(let i = 0; i < crossHairs.length; ++i) {
        let tmpSprite = new Image();
        tmpSprite.onload = function() {
            this.isLoaded = true;
        };
        tmpSprite.src = crossHairs[i];
        crossHairSprites[i] = tmpSprite;
    }
}
loadIcons();

function cdf(e, t) {
    try {
        return Math.hypot(
            (t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x));
    } catch(e) {
        return Infinity;
    }
}
// UPDATE GAME:
function updateGame() {
    if(gameObjects.length && inGame) {
        gameObjects.forEach((tmp) => {
            if(UTILS.getDistance(tmp.x, tmp.y, player.x, player.y) <= 1200) {
                if(!liztobj.includes(tmp)) {
                    liztobj.push(tmp);
                    tmp.render = true;
                }
            } else {
                if(liztobj.includes(tmp)) {
                    if(UTILS.getDistance(tmp.x, tmp.y, player.x, player.y) >= 1200) {
                        tmp.render = false;
                        const index = liztobj.indexOf(tmp);
                        if(index > -1) {
                            // only splice array when item is found
                            liztobj.splice(index, 1); // 2nd parameter means remove one item only
                        }
                    }
                } else if(UTILS.getDistance(tmp.x, tmp.y, player.x, player.y) >= 1200) {
                    tmp.render = false;
                    const index = liztobj.indexOf(tmp);
                    if(index > -1) {
                        // only splice array when item is found
                        liztobj.splice(index, 1); // 2nd parameter means remove one item only
                    }
                } else {
                    tmp.render = false;
                    const index = liztobj.indexOf(tmp);
                    if(index > -1) {
                        // only splice array when item is found
                        liztobj.splice(index, 1); // 2nd parameter means remove one item only
                    }
                }
            }
        });
        // gameObjects = gameObjects.filter(e => UTILS.getDistance(e.x, e.y, player.x, player.y) <= 1000)
    }
    // if (config.resetRender) {
    mainContext.beginPath();
    mainContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    // }
    mainContext.globalAlpha = 1;
    // MOVE CAMERA:
    if(player) {
        if(false) {
            camX = player.x;
            camY = player.y;
        } else {
            let tmpDist = UTILS.getDistance(camX, camY, player.x, player.y);
            let tmpDir = UTILS.getDirection(player.x, player.y, camX, camY);
            let camSpd = Math.min(tmpDist * 0.0045 * delta, tmpDist);
            if(tmpDist > 0.05) {
                camX += camSpd * Math.cos(tmpDir);
                camY += camSpd * Math.sin(tmpDir);
            } else {
                camX = player.x;
                camY = player.y;
            }
        }
    } else {
        camX = config.mapScale / 2 + config.riverWidth;
        camY = config.mapScale / 2;
    }
    // INTERPOLATE PLAYERS AND AI:
    let lastTime = now - 1000 / config.serverUpdateRate;
    let tmpDiff;
    for(let i = 0; i < players.length + ais.length; ++i) {
        tmpObj = players[i] || ais[i - players.length];
        if(tmpObj && tmpObj.visible) {
            if(tmpObj.forcePos) {
                tmpObj.x = tmpObj.x2;
                tmpObj.y = tmpObj.y2;
                tmpObj.dir = tmpObj.d2;
            } else {
                let total = tmpObj.t2 - tmpObj.t1;
                let fraction = lastTime - tmpObj.t1;
                let ratio = fraction / total;
                let rate = 170;
                tmpObj.dt += delta;
                let tmpRate = Math.min(1.7, tmpObj.dt / rate);
                tmpDiff = tmpObj.x2 - tmpObj.x1;
                tmpObj.x = tmpObj.x1 + tmpDiff * tmpRate;
                tmpDiff = tmpObj.y2 - tmpObj.y1;
                tmpObj.y = tmpObj.y1 + tmpDiff * tmpRate;
                if(config.anotherVisual) {
                    tmpObj.dir = Math.lerpAngle(tmpObj.d2, tmpObj.d1, Math.min(1.2, ratio));
                } else {
                    tmpObj.dir = Math.lerpAngle(tmpObj.d2, tmpObj.d1, Math.min(1.2, ratio));
                }
            }
        }
    }
    // RENDER CORDS:
    let xOffset = camX - maxScreenWidth / 2;
    let yOffset = camY - maxScreenHeight / 2;
    // RENDER BACKGROUND:
    if (config.snowBiomeTop - yOffset <= 0 && config.mapScale - config.snowBiomeTop - yOffset >= maxScreenHeight) {
        mainContext.fillStyle = "#b6db66";
        mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight);
    } else if (config.mapScale - config.snowBiomeTop - yOffset <= 0) {
        mainContext.fillStyle = "#dbc666";
        mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight);
    } else if (config.snowBiomeTop - yOffset >= maxScreenHeight) {
        mainContext.fillStyle = "#fff";
        mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight);
    } else if (config.snowBiomeTop - yOffset >= 0) {
        mainContext.fillStyle = "#fff";
        mainContext.fillRect(0, 0, maxScreenWidth, config.snowBiomeTop - yOffset);
        mainContext.fillStyle = "#b6db66";
        mainContext.fillRect(0, config.snowBiomeTop - yOffset, maxScreenWidth,
                             maxScreenHeight - (config.snowBiomeTop - yOffset));
    } else {
        mainContext.fillStyle = "#b6db66";
        mainContext.fillRect(0, 0, maxScreenWidth,
                             (config.mapScale - config.snowBiomeTop - yOffset));
        mainContext.fillStyle = "#dbc666";
        mainContext.fillRect(0, (config.mapScale - config.snowBiomeTop - yOffset), maxScreenWidth,
                             maxScreenHeight - (config.mapScale - config.snowBiomeTop - yOffset));
    }

    // RENDER WATER AREAS:
    if (!firstSetup) {
        waterMult += waterPlus * config.waveSpeed * delta;
        if (waterMult >= config.waveMax) {
            waterMult = config.waveMax;
            waterPlus = -1;
        } else if (waterMult <= 1) {
            waterMult = waterPlus = 1;
        }
        mainContext.globalAlpha = 1;
        mainContext.fillStyle = "#ffff";
        renderWaterBodies(xOffset, yOffset, mainContext, config.riverPadding);
        mainContext.fillStyle = "#fff";
        renderWaterBodies(xOffset, yOffset, mainContext, (waterMult - 1) * 250);
    }
    // RENDER DEAD PLAYERS:
    mainContext.globalAlpha = 1;
    mainContext.strokeStyle = outlineColor;
    renderDeadPlayers(xOffset, yOffset);
    // RENDER BOTTOM LAYER:
    mainContext.globalAlpha = 1;
    mainContext.strokeStyle = outlineColor;
    renderGameObjects(-1, xOffset, yOffset);
    // RENDER PROJECTILES:
    mainContext.globalAlpha = 1;
    mainContext.lineWidth = outlineWidth;
    renderProjectiles(0, xOffset, yOffset);
    // RENDER PLAYERS:
    renderPlayers(xOffset, yOffset, 0);
    // RENDER AI:
    mainContext.globalAlpha = 1;
    for(let i = 0; i < ais.length; ++i) {
        tmpObj = ais[i];
        if(tmpObj.active && tmpObj.visible) {
            tmpObj.animate(delta);
            mainContext.save();
            mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset);
            mainContext.rotate(tmpObj.dir + tmpObj.dirPlus - Math.PI / 2);
            renderAI(tmpObj, mainContext);
            mainContext.restore();
        }
    }
     mainContext.lineWidth = 3; // Nastavte šířku čáry podle potřeby
                        mainContext.strokeStyle = "#000";
                        mainContext.globalAlpha = 0.05; // Nastavte průhlednost podle potřeby
                        mainContext.beginPath();
                        let line = 1000 // Nastavte podle potřeby
                        for (var x = -xOffset % line; x < maxScreenWidth; x += line) {
                            if (x > 0) {
                                mainContext.moveTo(x, 0);
                                mainContext.lineTo(x, maxScreenHeight);
                            }
                        }
                        for (var y = -yOffset % line; y < maxScreenHeight; y += line) {
                            if (y > 0) {
                                mainContext.moveTo(0, y);
                                mainContext.lineTo(maxScreenWidth, y);
                            }
                        }
                        mainContext.stroke();
    // RENDER GAME OBJECTS (LAYERED):
    renderGameObjects(0, xOffset, yOffset);
    renderProjectiles(1, xOffset, yOffset);
    renderGameObjects(1, xOffset, yOffset);
    renderPlayers(xOffset, yOffset, 1);
    renderGameObjects(2, xOffset, yOffset);
    renderGameObjects(3, xOffset, yOffset);
    // MAP BOUNDARIES:
    mainContext.fillStyle = "#000";
    mainContext.globalAlpha = 0.09;
    if(xOffset <= 0) {
        mainContext.fillRect(0, 0, -xOffset, maxScreenHeight);
    }
    if(config.mapScale - xOffset <= maxScreenWidth) {
        let tmpY = Math.max(0, -yOffset);
        mainContext.fillRect(config.mapScale - xOffset, tmpY, maxScreenWidth - (config.mapScale - xOffset), maxScreenHeight - tmpY);
    }
    if(yOffset <= 0) {
        mainContext.fillRect(-xOffset, 0, maxScreenWidth + xOffset, -yOffset);
    }
    if(config.mapScale - yOffset <= maxScreenHeight) {
        let tmpX = Math.max(0, -xOffset);
        let tmpMin = 0;
        if(config.mapScale - xOffset <= maxScreenWidth) tmpMin = maxScreenWidth - (config.mapScale - xOffset);
        mainContext.fillRect(tmpX, config.mapScale - yOffset, maxScreenWidth - tmpX - tmpMin, maxScreenHeight - (config.mapScale - yOffset));
    }
    // RENDER DAY/NIGHT TIME:
    mainContext.globalAlpha = 1;
    mainContext.fillStyle = "rgba(0, 5, 80, 0.35)";
    mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight);
    // RENDER PLAYER AND AI UI:
    mainContext.strokeStyle = darkOutlineColor;
    mainContext.globalAlpha = 1;
    for(let i = 0; i < players.length + ais.length; ++i) {
        tmpObj = players[i] || ais[i - players.length];
        if(tmpObj.visible && tmpObj.showName === "NOOO") {
            mainContext.strokeStyle = darkOutlineColor;
            // NAME AND HEALTH:
            //                         let izbot = false;
            //                         bots.forEach((bot) => {
            //                             if (tmpObj.sid == bot.sid) izbot = true
            //                             else izbot = false;
            //                         });
            let tmpText = (tmpObj.team ? "[" + tmpObj.team + "] " : "") + (tmpObj.name || ""); //+ (tmpObj.isPlayer ? " {" + tmpObj.sid + "}" : "");
            if(tmpText != "" && tmpObj.name != "unknown1l") {
                // bots.forEach((bot) => {
                //     if (tmpObj.sid == bot.sid) return;
                // });
                mainContext.font = (tmpObj.nameScale || 30) + "px Hammersmith One";
                mainContext.fillStyle = "#fff";
                mainContext.textBaseline = "middle";
                mainContext.textAlign = "center";
                mainContext.lineWidth = tmpObj.nameScale ? 11 : 8;
                mainContext.lineJoin = "round";
                mainContext.strokeText(tmpText, tmpObj.x - xOffset, tmpObj.y - yOffset - tmpObj.scale - config.nameY);
                mainContext.fillText(tmpText, tmpObj.x - xOffset, tmpObj.y - yOffset - tmpObj.scale - config.nameY);
                if(tmpObj.isLeader && iconSprites["crown"].isLoaded) {
                    let tmpS = config.crownIconScale;
                    let tmpX = tmpObj.x - xOffset - tmpS / 2 - mainContext.measureText(tmpText).width / 2 - config.crownPad;
                    mainContext.drawImage(iconSprites["crown"], tmpX, tmpObj.y - yOffset - tmpObj.scale - config.nameY - tmpS / 2 - 5, tmpS, tmpS);
                }
                if(tmpObj.iconIndex == 1 && iconSprites["skull"].isLoaded) {
                    let tmpS = config.crownIconScale;
                    let tmpX = tmpObj.x - xOffset - tmpS / 2 + mainContext.measureText(tmpText).width / 2 + config.crownPad;
                    mainContext.drawImage(iconSprites["skull"], tmpX, tmpObj.y - yOffset - tmpObj.scale - config.nameY - tmpS / 2 - 5, tmpS, tmpS);
                }
                if(tmpObj.isPlayer && instaC.wait && near == tmpObj && (tmpObj.backupNobull ? crossHairSprites[1].isLoaded : crossHairSprites[0].isLoaded) && enemy.length) {
                    let tmpS = tmpObj.scale * 2.2;
                    mainContext.drawImage(tmpObj.backupNobull ? crossHairSprites[1] : crossHairSprites[0], tmpObj.x - xOffset - tmpS / 2, tmpObj.y - yOffset - tmpS / 2, tmpS, tmpS);
                }
                // izbot = false;
            }
            if(tmpObj.health > 0) {
                if(tmpObj.name != "unknown1l") {
                    // HEALTH HOLDER:
                    mainContext.fillStyle = darkOutlineColor;
                    mainContext.roundRect(tmpObj.x - xOffset - config.healthBarWidth - config.healthBarPad, tmpObj.y - yOffset + tmpObj.scale + config.nameY, config.healthBarWidth * 2 + config.healthBarPad * 2, 17, 8);
                    mainContext.fill();
                    // HEALTH BAR:
                    mainContext.fillStyle = tmpObj == player || (tmpObj.team && tmpObj.team == player.team) ? "#8ecc51" : "#cc5151";
                    mainContext.roundRect(tmpObj.x - xOffset - config.healthBarWidth, tmpObj.y - yOffset + tmpObj.scale + config.nameY + config.healthBarPad, config.healthBarWidth * 2 * (tmpObj.health / tmpObj.maxHealth), 17 - config.healthBarPad * 2, 7);
                    mainContext.fill();
                }
                if(tmpObj.isPlayer) {
                    mainContext.globalAlpha = 1;
                    let targetReloads = {
                        primary: tmpObj.primaryIndex == undefined ? 1 : (items.weapons[tmpObj.primaryIndex].speed - tmpObj.reloads[tmpObj.primaryIndex]) / items.weapons[tmpObj.primaryIndex].speed,
                        secondary: tmpObj.secondaryIndex == undefined ? 1 : (items.weapons[tmpObj.secondaryIndex].speed - tmpObj.reloads[tmpObj.secondaryIndex]) / items.weapons[tmpObj.secondaryIndex].speed,
                        turret: (2500 - tmpObj.reloads[53]) / 2500,
                    };
                    if(!tmpObj.currentReloads) {
                        tmpObj.currentReloads = {
                            // Initialize currentReloads if not already set
                            primary: targetReloads.primary,
                            secondary: targetReloads.secondary,
                            turret: targetReloads.turret,
                        };
                    }
                    const lerpFactor = 0.3;
                    tmpObj.currentReloads.primary = (1 - lerpFactor) * tmpObj.currentReloads.primary + lerpFactor * targetReloads.primary;
                    tmpObj.currentReloads.secondary = (1 - lerpFactor) * tmpObj.currentReloads.secondary + lerpFactor * targetReloads.secondary;
                    tmpObj.currentReloads.turret = (1 - lerpFactor) * tmpObj.currentReloads.turret + lerpFactor * targetReloads.turret;
                    let primaryReloadProgress = tmpObj.primaryIndex !== undefined ? (items.weapons[tmpObj.primaryIndex].speed - tmpObj.reloads[tmpObj.primaryIndex]) / items.weapons[tmpObj.primaryIndex].speed : 1;
                    let secondaryReloadProgress = tmpObj.secondaryIndex !== undefined ? (items.weapons[tmpObj.secondaryIndex].speed - tmpObj.reloads[tmpObj.secondaryIndex]) / items.weapons[tmpObj.secondaryIndex].speed : 1;
                    const centerX = tmpObj.x - xOffset;
                    const centerY = tmpObj.y - yOffset;
                    const barRadius = 35;
                    const barWidth = 15;
                    const totalAngle = (Math.PI * 2) / 3; // Half circle
                    const secondaryStartAngle = -Math.PI / 2 + Math.PI / 3 + tmpObj.dir - Math.PI / 2;
                    const secondaryEndAngle = secondaryStartAngle + totalAngle * tmpObj.currentReloads.secondary;
                    const primaryStartAngle = Math.PI / 2 + tmpObj.dir - Math.PI / 2;
                    const primaryEndAngle = primaryStartAngle + totalAngle * tmpObj.currentReloads.primary;
                    const turretStartAngle = Math.PI + Math.PI / 4.5 + tmpObj.dir - Math.PI / 2;
                    const turretEndAngle = turretStartAngle + (totalAngle / 1.25) * tmpObj.currentReloads.turret;

                    function returncoolcolor(RainbowCycle) {
                        return "#d6d6d6";
                    }
                    mainContext.save();
                    if(tmpObj.currentReloads.primary < 0.999) {
                        mainContext.beginPath();
                        mainContext.lineCap = "round";
                        mainContext.arc(centerX, centerY, barRadius, primaryStartAngle, primaryEndAngle);
                        mainContext.lineWidth = 4;
                        mainContext.strokeStyle = returncoolcolor(tmpObj.currentReloads.primary * 240);
                        mainContext.stroke();
                    }
                    if(tmpObj.currentReloads.secondary < 0.999) {
                        mainContext.beginPath();
                        mainContext.lineCap = "round";
                        mainContext.arc(centerX, centerY, barRadius, secondaryStartAngle, secondaryEndAngle);
                        mainContext.lineWidth = 4;
                        mainContext.strokeStyle = returncoolcolor(tmpObj.currentReloads.secondary * 240);
                        mainContext.stroke();
                    }
                    if(tmpObj.currentReloads.turret < 0.999) {
                        mainContext.beginPath();
                        mainContext.lineCap = "round";
                        mainContext.arc(centerX, centerY, barRadius, turretStartAngle, turretEndAngle);
                        mainContext.lineWidth = 4;
                        mainContext.strokeStyle = returncoolcolor(tmpObj.currentReloads.turret * 240);
                        mainContext.stroke();
                    }
                    mainContext.restore();
                    if(tmpObj.name != "unknown1l") {
                        // SHAME COUNT:
                        mainContext.globalAlpha = 1;
                        mainContext.font = "30px Hammersmith One";
                        mainContext.fillStyle = "#fff";
                        mainContext.strokeStyle = "darkOutlineColor";
                        mainContext.textBaseline = "middle";
                        mainContext.textAlign = "center";
                        mainContext.lineWidth = tmpObj.nameScale ? 11 : 8;
                        mainContext.lineJoin = "round";
                        var tmpS = config.crownIconScale;
                        var tmpX = tmpObj.x - xOffset - tmpS / 2 + mainContext.measureText(tmpText).width / 2 + config.crownPad + (tmpObj.iconIndex == 1 ? (tmpObj.nameScale || 30) * 2.75 : tmpObj.nameScale || 30);
                        mainContext.strokeText(tmpObj.shameCount, tmpObj.x - xOffset, tmpObj.y - yOffset + tmpObj.scale + config.nameY - 66);
                        mainContext.fillText(tmpObj.shameCount, tmpObj.x - xOffset, tmpObj.y - yOffset + tmpObj.scale + config.nameY - 66);
                    }
                    // PLAYER TRACER:
                    if(!tmpObj.isTeam(player)) {
                        let center = {
                            x: screenWidth / 2,
                            y: screenHeight / 2,
                        };
                        let alpha = Math.min(1, (UTILS.getDistance(0, 0, player.x - tmpObj.x, (player.y - tmpObj.y) * (16 / 9)) * 100) / (config.maxScreenHeight / 2) / center.y);
                        let beta = Math.min(1, (UTILS.getDistance(0, 0, player.x - tmpObj.x, (player.y - tmpObj.y) * (16 / 9)) * 100) / (config.maxScreenHeight / 2) / center.y);
                        let dist = (center.y * alpha) / 2;
                        let tmpX = dist * Math.cos(UTILS.getDirect(tmpObj, player, 0, 0));
                        let tmpY = dist * Math.sin(UTILS.getDirect(tmpObj, player, 0, 0));
                        mainContext.save();
                        mainContext.translate(player.x - xOffset + tmpX, player.y - yOffset + tmpY);
                        mainContext.rotate(tmpObj.aim2 + Math.PI / 2);
                        let by = 255 - tmpObj.sid * 2;
                        mainContext.fillStyle = `rgb(${by}, ${by}, ${by})`;
                        mainContext.globalAlpha = alpha;
                        let renderTracer = function(s, ctx) {
                            ctx = ctx || mainContext;
                            let h = s * (Math.sqrt(3) / 2);
                            ctx.beginPath();
                            ctx.moveTo(0, -h / 1.5);
                            ctx.lineTo(-s / 2, h / 2);
                            ctx.lineTo(s / 2, h / 2);
                            ctx.lineTo(0, -h / 1.5);
                            ctx.fill();
                            ctx.closePath();
                        };
                        renderTracer(25, mainContext);
                        mainContext.restore();
                    }
                    if(getEl("predictType").value == "pre2") {
                        mainContext.lineWidth = 3;
                        mainContext.strokeStyle = "#fff";
                        mainContext.globalAlpha = 1;
                        mainContext.beginPath();
                        let render = {
                            x: tmpObj.x2 - xOffset,
                            y: tmpObj.y2 - yOffset,
                        };
                        mainContext.moveTo(tmpObj.x - xOffset, tmpObj.y - yOffset);
                        mainContext.lineTo(render.x, render.y);
                        mainContext.stroke();
                    } else if(getEl("predictType").value == "pre3") {
                        mainContext.lineWidth = 3;
                        mainContext.strokeStyle = "#cc5151";
                        mainContext.globalAlpha = 1;
                        mainContext.beginPath();
                        let render = {
                            x: tmpObj.x3 - xOffset,
                            y: tmpObj.y3 - yOffset,
                        };
                        mainContext.moveTo(tmpObj.x - xOffset, tmpObj.y - yOffset);
                        mainContext.lineTo(render.x, render.y);
                        mainContext.stroke();
                    }
                }
            }
        }
    }
    if(player) {
        // AUTOPUSH LINE:
        if(my.autoPush) {
            mainContext.lineWidth = 14;
            mainContext.strokeStyle = "rgba(50, 205, 50, 0.3)"; // HPBarColor (Outline color)
            mainContext.beginPath();
            mainContext.moveTo(player.x - xOffset, player.y - yOffset);
            mainContext.lineTo(my.pushData.x - xOffset, my.pushData.y - yOffset);
            mainContext.stroke(); // Draw the outline
        }
    }
    mainContext.globalAlpha = 1;
    // RENDER ANIM TEXTS:
    textManager.update(delta, mainContext, xOffset, yOffset);
    // RENDER CHAT MESSAGES:
    for(let i = 0; i < players.length; ++i) {
        tmpObj = players[i];
        if(tmpObj.visible) {
            if(tmpObj.chatCountdown > 0) {
                tmpObj.chatCountdown -= delta;
                if(tmpObj.chatCountdown <= 0) tmpObj.chatCountdown = 0;
                mainContext.font = "32px Cursive";
                let tmpSize = mainContext.measureText(tmpObj.chatMessage);
                mainContext.textBaseline = "middle";
                mainContext.textAlign = "center";
                let tmpX = tmpObj.x - xOffset;
                let tmpY = tmpObj.y - tmpObj.scale - yOffset - 90;
                let tmpH = 47;
                let tmpW = tmpSize.width + 17;
                mainContext.fillStyle = "rgba(0,0,0,0.2)";
                mainContext.roundRect(tmpX - tmpW / 2, tmpY - tmpH / 2, tmpW, tmpH, 6);
                mainContext.fill();
                mainContext.fillStyle = "#ffff";
                mainContext.fillText(tmpObj.chatMessage, tmpX, tmpY);
            }
            if(tmpObj.chat.count > 0) {
                tmpObj.chat.count -= delta;
                if(tmpObj.chat.count <= 0) tmpObj.chat.count = 0;
                mainContext.font = "32px Hammersmith One";
                let tmpSize = mainContext.measureText(tmpObj.chat.message);
                mainContext.textBaseline = "middle";
                mainContext.textAlign = "center";
                let tmpX = tmpObj.x - xOffset;
                let tmpY = tmpObj.y - tmpObj.scale - yOffset + 90 * 2;
                let tmpH = 47;
                let tmpW = tmpSize.width + 17;
                mainContext.fillStyle = "rgba(0,0,0,0.2)";
                mainContext.roundRect(tmpX - tmpW / 2, tmpY - tmpH / 2, tmpW, tmpH, 6);
                mainContext.fill();
                mainContext.fillStyle = "#ffffff99";
                mainContext.fillText(tmpObj.chat.message, tmpX, tmpY);
            } else {
                tmpObj.chat.count = 0;
            }
        }
    }
    if(allChats.length) {
        allChats.filter((ch) => ch.active).forEach((ch) => {
            if(!ch.alive) {
                if(ch.alpha <= 1) {
                    ch.alpha += delta / 250;
                    if(ch.alpha >= 1) {
                        ch.alpha = 1;
                        ch.alive = true;
                    }
                }
            } else {
                ch.alpha -= delta / 5000;
                if(ch.alpha <= 0) {
                    ch.alpha = 0;
                    ch.active = false;
                }
            }
            if(ch.active) {
                mainContext.font = "20px Ubuntu";
                let tmpSize = mainContext.measureText(ch.chat);
                mainContext.textBaseline = "middle";
                mainContext.textAlign = "center";
                let tmpX = ch.x - xOffset;
                let tmpY = ch.y - yOffset - 90;
                let tmpH = 40;
                let tmpW = tmpSize.width + 15;
                mainContext.globalAlpha = ch.alpha;
                mainContext.fillStyle = ch.owner.isTeam(player) ? "#8ecc51" : "#cc5151";
                mainContext.strokeStyle = "rgb(25, 25, 25)";
                mainContext.strokeText(ch.owner.name, tmpX, tmpY - 45);
                mainContext.fillText(ch.owner.name, tmpX, tmpY - 45);
                mainContext.lineWidth = 5;
                mainContext.fillStyle = "#ccc";
                mainContext.strokeStyle = "rgb(25, 25, 25)";
                mainContext.roundRect(tmpX - tmpW / 2, tmpY - tmpH / 2, tmpW, tmpH, 6);
                mainContext.stroke();
                mainContext.fill();
                mainContext.fillStyle = "#fff";
                mainContext.strokeStyle = "#000";
                mainContext.strokeText(ch.chat, tmpX, tmpY);
                mainContext.fillText(ch.chat, tmpX, tmpY);
                ch.y -= delta / 100;
            }
        });
    }
    mainContext.globalAlpha = 1;
    // RENDER MINIMAP:
    renderMinimap(delta);
}
// UPDATE & ANIMATE:
window.requestAnimFrame = function() {
    return null;
};
window.rAF = (function() {
    return(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 144 / 144); // depends on ur hz pc
    });
})();

function doUpdate(){now=performance.now(),delta=now-lastUpdate,lastUpdate=now;let timer=performance.now(),diff=timer-fpsTimer.last;if(diff>=1000){fpsTimer.ltime=fpsTimer.time*(1000/diff),fpsTimer.last=timer,fpsTimer.time=0}fpsTimer.time++; fpsTimer.time++,getEl("pingFps").innerHTML=`${window.pingTime}ms || Fps: ${UTILS.round(fpsTimer.ltime,10)}`,getEl("packetStatus").innerHTML=secPacket,updateGame(),window.rAF(doUpdate)}prepareMenuBackground(),doUpdate();

function toggleUseless(boolean) {
    getEl("instaType").disabled = boolean;
    getEl("antiBullType").disabled = boolean;
    getEl("predictType").disabled = boolean;
}
toggleUseless(useWasd);
let changeDays = {};
window.debug = function() {
    my.waitHit = 0;
    my.autoAim = false;
    instaC.isTrue = false;
    traps.inTrap = false;
    itemSprites = [];
    objSprites = [];
    gameObjectSprites = [];
};
window.wasdMode = function() {
    useWasd = !useWasd;
    toggleUseless(useWasd);
};
window.startGrind = function() {
    if(getEl("weaponGrind").checked) {
        for(let i = 0; i < Math.PI * 2; i += Math.PI / 2) {
            checkPlace(player.getItemType(22), i);
        }
    }
};
// REMOVED!!! so they cant abuse :)
let projects = ["adorable-eight-guppy", "galvanized-bittersweet-windshield"];
let botIDS = 0;
window.connectFillBots = function() {
    botSkts = [];
    botIDS = 0;
    for(let i = 0; i < projects.length; i++) {
        let test = new WebSocket(`wss://${projects[i]}.glitch.me`);
        test.binaryType = "arraybuffer";
        test.onopen = function() {
            test.ssend = function(type) {
                let data = Array.prototype.slice.call(arguments, 1);
                let binary = window.msgpack.encode([type, data]);
                test.send(binary);
            };
            for(let i = 0; i < 4; i++) {
                window.grecaptcha.execute("6LfahtgjAAAAAF8SkpjyeYMcxMdxIaQeh-VoPATP", {
                    action: "homepage",
                }).then(function(token) {
                    let t = WS.url.split("wss://")[1].split("?")[0];
                    test.ssend("bots", "wss://" + t + "?token=re:" + encodeURIComponent(token), botIDS);
                    botSkts.push([test]);
                    botIDS++;
                });
            }
        };
        test.onmessage = function(message) {
            let data = new Uint8Array(message.data);
            let parsed = window.msgpack.decode(data);
            let type = parsed[0];
            data = parsed[1];
        };
    }
};
window.destroyFillBots = function() {
    botSkts.forEach((socket) => {
        socket[0].close();
    });
    botSkts = [];
};
window.tryConnectBots = function() {
    for(let i = 0; i < (bots.length < 3 ? 3 : 4); i++) {
        window.grecaptcha.execute("6LfahtgjAAAAAF8SkpjyeYMcxMdxIaQeh-VoPATP", {
            action: "homepage",
        }).then(function(token) {
            // CONNECT SOCKET:
            botSpawn(token);
        });
    }
};
window.destroyBots = function() {
    bots.forEach((botyyyyy) => {
        botyyyyy.closeSocket = true;
    });
    bots = [];
};
window.resBuild = function() {
    if(gameObjects.length) {
        gameObjects.forEach((tmp) => {
            tmp.breakObj = false;
        });
        breakObjects = [];
    }
};
window.toggleBotsCircle = function() {
    player.circle = !player.circle;
};
window.toggleVisual = function() {
    config.anotherVisual = !config.anotherVisual;
    gameObjects.forEach((tmp) => {
        if(tmp.active) {
            tmp.dir = tmp.lastDir;
        }
    });
};
window.prepareUI = function(tmpObj) {
    resize();
    // CHAT STUFF:
    var chatBox = document.getElementById("chatBox");
    var chatHolder = document.getElementById("chatHolder");
    var suggestBox = document.createElement("div");
    suggestBox.id = "suggestBox";
    var prevChats = [];
    var prevChatsIndex = 0;

    function toggleChat() {
        if(!usingTouch) {
            if(chatHolder.style.display == "block") {
                if(chatBox.value) {
                    omengod(chatBox.value);
                }
                closeChat();
            } else {
                storeMenu.style.display = "none";
                allianceMenu.style.display = "none";
                chatHolder.style.display = "block";
                chatBox.focus();
                resetMoveDir();
            }
        } else {
            setTimeout(function() {
                var chatMessage = prompt("chat message");
                if(chatMessage) {
                    omengod(chatMessage);
                }
            }, 1);
        }
        chatBox.value = "";
        (() => {
            prevChatsIndex = 0;
        })();
    }

    function closeChat() {
        chatBox.value = "";
        chatHolder.style.display = "none";
    }
    // ACTION BAR:
    UTILS.removeAllChildren(actionBar);
    for(let i = 0; i < items.weapons.length + items.list.length; ++i) {
        (function(i) {
            UTILS.generateElement({
                id: "actionBarItem" + i,
                class: "actionBarItem",
                style: "display:none; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5)",
                onmouseout: function() {
                    showItemInfo();
                },
                parent: actionBar,
            });
        })(i);
    }
    for(let i = 0; i < items.list.length + items.weapons.length; ++i) {
        (function(i) {
            let tmpCanvas = document.createElement("canvas");
            tmpCanvas.width = tmpCanvas.height = 66;
            let tmpContext = tmpCanvas.getContext("2d");
            tmpContext.translate(tmpCanvas.width / 2, tmpCanvas.height / 2);
            tmpContext.imageSmoothingEnabled = false;
            tmpContext.webkitImageSmoothingEnabled = false;
            tmpContext.mozImageSmoothingEnabled = false;
            if(items.weapons[i]) {
                tmpContext.rotate(Math.PI);
                let tmpSprite = new Image();
                toolSprites[items.weapons[i].src] = tmpSprite;
                tmpSprite.onload = function() {
                    this.isLoaded = true;
                    let tmpPad = 1 / (this.height / this.width);
                    let tmpMlt = items.weapons[i].iPad || 1;
                    tmpContext.drawImage(this, -(tmpCanvas.width * tmpMlt * config.iconPad * tmpPad) / 2, -(tmpCanvas.height * tmpMlt * config.iconPad) / 2, tmpCanvas.width * tmpMlt * tmpPad * config.iconPad, tmpCanvas.height * tmpMlt * config.iconPad);
                    tmpContext.fillStyle = "rgba(0, 0, 70, 0.2)";
                    tmpContext.globalCompositeOperation = "source-atop";
                    tmpContext.fillRect(-tmpCanvas.width / 2, -tmpCanvas.height / 2, tmpCanvas.width, tmpCanvas.height);
                    getEl("actionBarItem" + i).style.backgroundImage = "url(" + tmpCanvas.toDataURL() + ")";
                };
                tmpSprite.src = "./../img/weapons/" + items.weapons[i].src + ".png";
                let tmpUnit = getEl("actionBarItem" + i);
                // tmpUnit.onmouseover = UTILS.checkTrusted(function () {
                //     showItemInfo(items.weapons[i], true);
                // });
                tmpUnit.onclick = UTILS.checkTrusted(function() {
                    selectWeapon(tmpObj.weapons[items.weapons[i].type]);
                });
                UTILS.hookTouchEvents(tmpUnit);
            } else {
                let tmpSprite = getItemSprite(items.list[i - items.weapons.length], true);
                let tmpScale = Math.min(tmpCanvas.width - config.iconPadding, tmpSprite.width);
                tmpContext.globalAlpha = 1;
                tmpContext.drawImage(tmpSprite, -tmpScale / 2, -tmpScale / 2, tmpScale, tmpScale);
                tmpContext.fillStyle = "rgba(0, 0, 70, 0.1)";
                tmpContext.globalCompositeOperation = "source-atop";
                tmpContext.fillRect(-tmpScale / 2, -tmpScale / 2, tmpScale, tmpScale);
                getEl("actionBarItem" + i).style.backgroundImage = "url(" + tmpCanvas.toDataURL() + ")";
                let tmpUnit = getEl("actionBarItem" + i);
                // tmpUnit.onmouseover = UTILS.checkTrusted(function () {
                //     showItemInfo(items.list[i - items.weapons.length]);
                // });
                tmpUnit.onclick = UTILS.checkTrusted(function() {
                    selectToBuild(tmpObj.items[tmpObj.getItemType(i - items.weapons.length)]);
                });
                UTILS.hookTouchEvents(tmpUnit);
            }
        })(i);
    }
};
window.profineTest = function(data) {
    if(data) {
        // VALIDATE NAME:
        let name = data + "";
        name = name.slice(0, config.maxNameLength);
        return name;
    }
};
/*let correctKey = "w";
let enteredKey = prompt("enter key");
if(enteredKey === correctKey) {
	alert("check console");
	console.log("pravilno!");
} else {
	alert("nepravilno!");
}*/
