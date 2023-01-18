import { Application } from "@pixi/app";
import { Sprite } from "@pixi/sprite";
import { Texture } from "@pixi/core";
import { Container } from "@pixi/display";

import Button from "./components/Button";

export default class App extends Application {
  constructor() {
    super({
      width: window.innerWidth,
      height: window.innerHeight,
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
    this.createBackground();

    this.createHeader();

    this.onResize();
  }

  createBackground() {
    // create background
    this.background = new Sprite.from("background");
    this.background.width = window.innerWidth;
    this.background.height = window.innerHeight;

    this.stage.addChild(this.background);
  }

  createHeader() {
    // create header container
    this.headerContainer = new Container();

    // create header wrapper
    this.headerWrap = new Sprite.from("headerBg");
    this.headerWrap.width = window.innerWidth + 16; // custom todo normilize
    this.headerWrap.y = 36; // custom todo normilize
    this.headerWrap.x = -8; // custom todo normilize

    this.buttonBuy = new Button({
      height: 68,
      label: "КУПИТЬ МОНЕТЫ",
      nameTexture: "buttonBuy",
      labelShadow: {
        dropShadow: true,
        dropShadowAlpha: 0.3,
        dropShadowAngle: 0.5,
        dropShadowBlur: 5,
        dropShadowColor: "#000000",
      },
      width: 276,
      x: window.innerWidth * 0.5 - 8, // custom todo normilize
      y: 52 * 0.5 + 40, // custom todo normilize
      onTap: () => console.log("Купить монеты"),
    });

    this.buttonInvite = new Button({
      height: 36,
      label: "ПРИГЛАСИТЬ",
      nameTexture: "buttonInvite",
      labelColor: "#361206",
      width: 142,
      x: window.innerWidth * 0.72, // custom todo normilize
      y: 36 * 0.5 + 46, // custom todo normilize
      onTap: () => console.log("Пригласить"),
    });

    this.headerContainer.addChild(
      this.headerWrap,
      this.buttonBuy,
      this.buttonInvite
    );

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
