import { Application } from "@pixi/app";
import { Sprite } from "@pixi/sprite";
import { Texture } from "@pixi/core";

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
    this.loader.add("button", "./assets/button.png");
    this.loader.add("buttonBuy", "./assets/buttonBuy.png");
    this.loader.add("buttonInvite", "./assets/buttonInvite.png");
    this.loader.load(this.setup.bind(this));
  }

  setup() {
    this.button1 = new Button({
      nameTexture: "button",
      label: "Купить монеты",
      width: 300,
      height: 80,
      x: 200,
      y: 200,
      onTap: () => console.log("Play"),
    });

    console.log('---button1---', this.button1)

    this.buttonBuy = new Button({
      nameTexture: "buttonBuy",
      label: "Купить  монеты",
      width: 300,
      height: 80,
      x: 400,
      y: 400,
      onTap: () => console.log("Play"),
    });

    this.buttonInvite = new Button({
      nameTexture: "buttonInvite",
      label: "Пригласить",
      width: 300,
      height: 80,
      x: 600,
      y: 600,
      onTap: () => console.log("Play"),
    });

    this.stage.addChild(this.button1, this.buttonBuy, this.buttonInvite);
    this.onResize();
  }

  onResize() {
    this.renderer.resize(window.innerWidth, window.innerHeight);

    const width = this.renderer.width;

    const height = this.renderer.height;

    const btnMargin = 5;

    // this.button1.x = width * 0.5;
    // this.button1.y = height * 0.5 - this.button1.height * 0.5 - btnMargin;

    // this.buttonBuy.x = width * 0.5;
    // this.buttonBuy.y = height * 0.5 + this.buttonBuy.height * 0.5 + btnMargin;

    // this.buttonInvite.x = width * 0.5;
    // this.buttonInvite.y = height * 0.5 + this.buttonBuy.height * 2 + btnMargin;
  }
}
