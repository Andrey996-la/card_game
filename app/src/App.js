import {Application} from "@pixi/app";
import {Sprite} from "@pixi/sprite";
import {Texture} from "@pixi/core";
import {Container} from "@pixi/display";

import Button from "./components/Button";

export default class App extends Application {
  constructor() {
    super({
      width: window.innerWidth, height: window.innerHeight,
    });

    document.body.appendChild(this.view); // Put Canvas tag in the body

    this.init();

    window.addEventListener("resize", this.onResize.bind(this));
  }

  init() {
    this.loader.add("buttonBuy", "./assets/buttonBuy.png");
    this.loader.add("buttonInvite", "./assets/buttonInvite.png");
    this.loader.add("background", "./assets/background.png");
    this.loader.add("headerBg", "./assets/header-bg.png");
    this.loader.load(this.setup.bind(this));
  }

  setup() {
    this.createBackground()

    this.createHeader()

    this.onResize();
  }

  createBackground() {
    // create background
    this.background = new Sprite.from("background");
    this.background.width = window.innerWidth;
    this.background.height = window.innerHeight;

    this.stage.addChild(this.background);
  }

  createHeader (){
    // create header container
    this.headerContainer = new Container();

    this.headerWrap = new Sprite.from("headerBg");

    this.buttonBuy = new Button({
      height: 80,
      label: "Купить монеты",
      nameTexture: "buttonBuy",
      width: 300,
      x: 400,
      y: 400,
      onTap: () => console.log("Купить монеты"),
    });

    this.buttonInvite = new Button({
      height: 80,
      label: "Пригласить",
      nameTexture: "buttonInvite",
      width: 300,
      x: 600,
      y: 600,
      onTap: () => console.log("Пригласить"),
    });

    this.headerContainer.addChild(this.headerWrap, this.buttonBuy, this.buttonInvite)

    this.stage.addChild(this.headerContainer);
  }

  onResize() {
    this.renderer.resize(window.innerWidth, window.innerHeight);

    // const width = this.renderer.width;
    // const height = this.renderer.height;
    // const btnMargin = 5;
    // this.button1.x = width * 0.5;
    // this.button1.y = height * 0.5 - this.button1.height * 0.5 - btnMargin;
    // this.buttonBuy.x = width * 0.5;
    // this.buttonBuy.y = height * 0.5 + this.buttonBuy.height * 0.5 + btnMargin;
    // this.buttonInvite.x = width * 0.5;
    // this.buttonInvite.y = height * 0.5 + this.buttonBuy.height * 2 + btnMargin;
  }
}
