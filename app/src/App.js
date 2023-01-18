import { Application } from "@pixi/app";
import { Sprite } from "@pixi/sprite";
import { Texture } from "@pixi/core";
import { Container } from "@pixi/display";
import { Text } from "@pixi/text";

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
    this.loader.add("headerButtonBuy", "./assets/headerButtonBuy.png");
    this.loader.add("headerButtonInvite", "./assets/headerButtonInvite.png");
    this.loader.add("headerButtonSound", "./assets/headerButtonSound.png");
    this.loader.add("headerBalanceMoney", "./assets/headerBalanceMoney.png");
    this.loader.add("background", "./assets/background.png");
    this.loader.add("headerBg", "./assets/headerBg.png");
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

    this.headerButtonBuy = new Button({
      height: 68,
      label: "КУПИТЬ МОНЕТЫ",
      labelShadow: {
        dropShadow: true,
        dropShadowAlpha: 0.3,
        dropShadowAngle: 0.5,
        dropShadowBlur: 5,
        dropShadowColor: "#000000",
      },
      nameTexture: "headerButtonBuy",
      width: 276,
      x: window.innerWidth * 0.5 - 8, // custom todo normilize
      y: 52 * 0.5 + 40, // custom todo normilize
      onTap: () => console.log("Купить монеты"),
    });

    this.headerButtonInvite = new Button({
      height: 36,
      label: "ПРИГЛАСИТЬ",
      labelColor: "#361206",
      nameTexture: "headerButtonInvite",
      width: 142,
      x: window.innerWidth * 0.72, // custom todo normilize
      y: 36 * 0.5 + 46, // custom todo normilize
      onTap: () => console.log("Пригласить"),
    });

    this.headerButtonSound = new Button({
      height: 36,
      label: "",
      nameTexture: "headerButtonSound",
      labelColor: "#361206",
      width: 40,
      x: window.innerWidth * 0.773, // custom todo normilize
      y: 36 * 0.5 +46, // custom todo normilize
      onTap: () => console.log("off sound"),
    });


    // Header Balance
    this.headerBalance = new Container();
    this.headerBalance.x = window.innerWidth * 0.64, // custom todo normilize
    this.headerBalance.y = 36 * 0.5 + 46, // custom todo normilize

    this.headerBalanceText = new Text("500", {
      fontSize: 17,
      fill: "#FFFFFF",
    });
    this.headerBalanceText.anchor.set(0.5)

    this.headerBalanceMoney = new Sprite.from("headerBalanceMoney");
    this.headerBalanceMoney.anchor.set(0.5)
    this.headerBalanceMoney.x = -110


    this.headerBalance.addChild(this.headerBalanceText, this.headerBalanceMoney);

    this.headerContainer.addChild(
      this.headerWrap,
      this.headerButtonBuy,
      this.headerButtonInvite,
      this.headerButtonSound,
      this.headerBalance
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
    // this.headerButtonBuy.x = width * 0.5;
    // this.headerButtonBuy.y = height * 0.5 + this.headerButtonBuy.height * 0.5 + btnMargin;
    // this.headerButtonInvite.x = width * 0.5;
    // this.headerButtonInvite.y = height * 0.5 + this.headerButtonBuy.height * 2 + btnMargin;
  }
}
