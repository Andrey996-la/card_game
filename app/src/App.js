import { Application } from "@pixi/app";
import { Sprite } from "@pixi/sprite";
import { Container } from "@pixi/display";
import { Text } from "@pixi/text";
import { gsap } from "gsap";

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
    this.loader.add("headerInfoAction", "./assets/headerInfoAction.png");
    this.loader.add("headerInfoAvatar", "./assets/headerInfoAvatar.png");
    this.loader.add("headerInfoRing", "./assets/headerInfoRing.png");
    this.loader.add("headerLvlProgress", "./assets/headerLvlProgress.png");
    this.loader.add("navigationButton", "./assets/navigationButton.png");
    this.loader.add("standBackground", "./assets/standBackground.png");
    this.loader.add("standGetBonusButton", "./assets/standGetBonusButton.png");
    this.loader.add("standLeftButton", "./assets/standLeftButton.png");
    this.loader.add("standRightButton", "./assets/standRightButton.png");
    this.loader.add("sliderCardImage0", "./assets/sliderCardImage0.png");
    this.loader.add("sliderCardImage1", "./assets/sliderCardImage1.png");
    this.loader.add("sliderCardImage2", "./assets/sliderCardImage2.png");
    this.loader.add("betImgSmall", "./assets/betImgSmall.png");
    this.loader.add("betImgMiddle", "./assets/betImgMiddle.png");
    this.loader.add("betImgBig", "./assets/betImgBig.png");
    this.loader.add("sliderGameBtnOpen", "./assets/sliderGameBtnOpen.png");
    this.loader.add(
      "sliderGameBtnCurrent",
      "./assets/sliderGameBtnCurrent.png"
    );
    this.loader.add("background", "./assets/background.png");
    this.loader.add("headerBg", "./assets/headerBg.png");
    this.loader.load(this.setup.bind(this));
  }

  setup() {
    this.createBackground();

    this.createHeader();

    this.createSlider();

    this.createNavigation();

    this.createStand();

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
    this.headerOffsetTop = 36 * 0.5 + 46;
    // create header container
    this.header = new Container();

    // create Header wrapper
    this.headerWrap = new Sprite.from("headerBg");
    this.headerWrap.width = window.innerWidth + 16; // custom todo normilize
    this.headerWrap.y = 36; // custom todo normilize
    this.headerWrap.x = -8; // custom todo normilize

    // Header Buy
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

    // Header Invite
    this.headerButtonInvite = new Button({
      height: 36,
      label: "ПРИГЛАСИТЬ",
      labelColor: "#361206",
      nameTexture: "headerButtonInvite",
      width: 142,
      x: window.innerWidth * 0.72, // custom todo normilize
      y: this.headerOffsetTop, // custom todo normilize
      onTap: () => console.log("Пригласить"),
    });

    // Header Sound
    this.headerButtonSound = new Button({
      height: 36,
      label: "",
      nameTexture: "headerButtonSound",
      labelColor: "#361206",
      width: 40,
      x: window.innerWidth * 0.773, // custom todo normilize
      y: this.headerOffsetTop, // custom todo normilize
      onTap: () => console.log("off sound"),
    });

    // Header Balance
    this.headerBalance = new Container();
    this.headerBalance.x = window.innerWidth * 0.63;
    this.headerBalance.y = this.headerOffsetTop;
    this.headerBalanceText = new Text("500", {
      fontSize: 17,
      fill: "#FFFFFF",
    });
    this.headerBalanceText.anchor.set(0, 0.5);
    this.headerBalanceMoney = new Sprite.from("headerBalanceMoney");
    this.headerBalanceMoney.anchor.set(0, 0.5);
    this.headerBalanceMoney.x = -110;
    this.headerBalance.addChild(
      this.headerBalanceText,
      this.headerBalanceMoney
    );

    // Header info
    this.headerInfo = new Container();
    this.headerInfo.x = window.innerWidth * 0.3; // custom todo normilize
    this.headerInfo.y = this.headerOffsetTop; // custom todo normilize
    this.headerInfoText = new Text("Guest14554", {
      fontSize: 13,
      fill: "#FFFFFF",
    });
    this.headerInfoText.anchor.set(0, 0.5);
    this.headerInfoText.x = -95;
    this.headerInfoAction = new Button({
      height: 23,
      label: "",
      nameTexture: "headerInfoAction",
      width: 21,
      x: 48, // custom todo normilize
      y: -1, // custom todo normilize
      onTap: () => console.log("go proffile"),
    });
    this.headerInfoAvatar = new Sprite.from("headerInfoAvatar");
    this.headerInfoAvatar.anchor.set(0, 0.5);
    this.headerInfoAvatar.x = -152;
    this.headerInfoAvatar.width = 48;
    this.headerInfoAvatar.height = 48;
    this.headerInfoRing = new Sprite.from("headerInfoRing");
    this.headerInfoRing.anchor.set(0, 0.5);
    this.headerInfoRing.x = -165;
    this.headerInfoRing.y = 2;
    this.headerInfoRing.width = 70;
    this.headerInfoRing.height = 70;
    this.headerInfo.addChild(
      this.headerInfoText,
      this.headerInfoAction,
      this.headerInfoAvatar,
      this.headerInfoRing
    );

    // Header Level
    this.headerLvl = new Container();
    this.headerLvl.x = window.innerWidth * 0.4; // custom todo normilize
    this.headerLvl.y = this.headerOffsetTop; // custom todo normilize
    this.headerLvlProgress = new Sprite.from("headerLvlProgress");
    this.headerLvlProgress.anchor.set(0, 0.5);
    this.headerLvlProgress.x = -122;
    this.headerLvlProgress.width = 115;
    this.headerLvlProgress.height = 32;
    this.headerLvlText = new Text("1 Level", {
      fontSize: 13,
      fill: "#FFFFFF",
    });
    this.headerLvlText.anchor.set(0, 0.5);
    this.headerLvlText.x = -110;
    this.headerLvlPercent = new Text("55%", {
      fontSize: 17,
      fill: "#FFFFFF",
    });
    this.headerLvlPercent.anchor.set(0, 0.5);
    this.headerLvlPercent.x = 0;

    this.headerLvl.addChild(
      this.headerLvlProgress,
      this.headerLvlText,
      this.headerLvlPercent
    );

    this.header.addChild(
      this.headerWrap,
      this.headerButtonBuy,
      this.headerButtonInvite,
      this.headerButtonSound,
      this.headerBalance,
      this.headerInfo,
      this.headerLvl
    );

    this.stage.addChild(this.header);
  }

  createSlider() {
    let mock = [
      {
        cardImg: "sliderCardImage0",
        lvl: {
          status: "open",
          text: "ОТКРЫТ",
          color: "#00dffd",
        },
        bet: {
          img: "betImgSmall",
          value: 100,
        },
      },
      {
        cardImg: "sliderCardImage1",
        lvl: {
          status: "current",
          text: "2 / 5",
          color: "#ffc610",
        },
        bet: {
          img: "betImgMiddle",
          value: 200,
        },
      },
      {
        cardImg: "sliderCardImage2",
        lvl: {
          status: "close",
          text: "ЗАКРЫТ",
          color: "#ed3f4a",
        },
        bet: {
          img: "betImgBig",
          value: 400,
        },
      },
    ];

    this.slider = new Container();
    this.slider.x = window.innerWidth * 0.5 - 332;
    this.slider.y = window.innerHeight * 0.5 - 150;

    mock.forEach((item, index) => {
      const card = new Container();
      card.x = (index % 3) * 332;

      const cardImg = new Sprite.from(item.cardImg);
      cardImg.width = 370;
      cardImg.height = 400;
      cardImg.anchor.set(0.5);

      const cardBetImg = new Sprite.from(item.bet.img);
      cardBetImg.anchor.set(0.5);
      cardBetImg.scale.set(0.5, 0.5);

      const cardLvlText = new Text("УРОВЕНЬ", {
        fontSize: 18,
        fill: "#FFFFFF",
      });
      cardLvlText.y = -(cardImg.height * 0.5) + 26;
      cardLvlText.anchor.x = 0.15;

      const cardBetText = new Text("СТАВКА", {
        fontSize: 30,
        fill: "#FFFFFF",
      });
      cardBetText.anchor.x = 0.7;
      cardBetText.y = 72;

      const cardBetValue = new Text(item.bet.value, {
        fontSize: 30,
        fill: "#ffc610",
      });
      cardBetValue.anchor.x = 0.9;
      cardBetValue.y = 110;

      const cardLvlStatus = new Text(item.lvl.text, {
        fontSize: 21,
        fill: item.lvl.color,
        align: "center",
      });
      cardLvlStatus.y = -(cardImg.height * 0.5) + 56;
      cardLvlStatus.anchor.x = 0.15;

      const cardBtn = new Button({
        width: 200,
        height: 52,
        label: "ИГРАТЬ",
        nameTexture:
          item.lvl.status === "open"
            ? "sliderGameBtnOpen"
            : "sliderGameBtnCurrent",
        fontSize: 18,
        labelColor: item.lvl.status === "open" ? "#FFFFFF" : "#361206",
        labelShadow:
          item.lvl.status === "open"
            ? {
                dropShadow: true,
                dropShadowAlpha: 0.3,
                dropShadowAngle: 0.5,
                dropShadowBlur: 10,
                dropShadowColor: "#000000",
              }
            : {},
        onTap: () => console.log(item.lvl.text),
        y: cardImg.height - 202,
        x: cardImg.width / 2 - 225,
      });
      cardBtn.visible = item.lvl.status !== "close";

      
      gsap.to(cardBetImg.scale, {
        x: 0.6,
        y: 0.6,
        duration: 1.0,
        repeat: -1,
        yoyo: true,
      });

      card.addChild(
        cardImg,
        cardBetImg,
        cardBetText,
        cardBetValue,
        cardLvlText,
        cardLvlStatus,
        cardBtn
      );
      this.slider.addChild(card);
    });

    this.stage.addChild(this.slider);
  }

  createNavigation() {
    let mock = [
      {
        label: "ИГРАТЬ С БОТОМ",
        width: 340,
        height: 70,
        img: "navigationButton",
        fontSize: 21,
      },
      {
        label: "СОЗДАТЬ ИГРУ",
        width: 340,
        height: 70,
        img: "navigationButton",
        fontSize: 21,
      },
      {
        label: "НАГРАДЫ И ПРЕДМЕТЫ",
        width: 340,
        height: 70,
        img: "navigationButton",
        fontSize: 21,
      },
    ];

    this.gameNavigation = new Container();
    this.gameNavigation.x = window.innerWidth * 0.5 - 340;
    this.gameNavigation.y = window.innerHeight - 290 - 70 / 2;

    mock.forEach((item, index) => {
      const gameNavigationBtn = new Button({
        width: item.width,
        height: item.height,
        label: item.label,
        nameTexture: item.img,
        fontSize: item.fontSize,
        onTap: () => console.log(item.label),
        x: (index % 3) * item.width, // custom todo normilize
        y: Math.floor(index / 3) * item.width, // custom todo normilize
      });

      this.gameNavigation.addChild(gameNavigationBtn);
    });

    this.stage.addChild(this.gameNavigation);
  }

  createStand() {
    this.stand = new Container();
    this.stand.x = window.innerWidth * 0.5;
    this.stand.y = window.innerHeight - 234;

    this.standBackground = new Sprite.from("standBackground");
    this.standBackground.width = window.innerWidth; // custom todo normilize
    this.standBackground.height = 234; // custom todo normilize
    this.standBackground.anchor.set(0.5, 0);

    this.standGetBonusButton = new Button({
      width: 300,
      height: 48,
      label: "ПОЛУЧИТЬ БОНУС",
      nameTexture: "standGetBonusButton",
      fontSize: 18,
      onTap: () => console.log("Получить бонус"),
      x: (1 % 1) * 300, // custom todo normilize
      y: 300 / 2 - 48, // custom todo normilize
    });

    this.standLeftButton = new Button({
      width: 312,
      height: 68,
      label: "РЕЙТИНГ",
      nameTexture: "standLeftButton",
      fontSize: 18,
      onTap: () => console.log("Получить рейтинг"),
      x: (1 % 2) - 312 - 40, // custom todo normilize
      y: 60, // custom todo normilize
    });

    this.standRightButton = new Button({
      width: 312,
      height: 68,
      label: "ЗАДАЧИ",
      nameTexture: "standRightButton",
      fontSize: 18,
      onTap: () => console.log("Открыть задачи"),
      x: (1 % 3) * 312 + 40, // custom todo normilize
      y: 60, // custom todo normilize
    });

    this.stand.addChild(
      this.standLeftButton,
      this.standRightButton,
      this.standBackground,
      this.standGetBonusButton
    );
    this.stage.addChild(this.stand);
  }

  onResize() {
    this.renderer.resize(window.innerWidth, window.innerHeight);

    // const width = this.renderer.width
    // const height = this.renderer.height
    // const btnMargin = 5
    // this.button1.x = width * 0.5
    // this.button1.y = height * 0.5 - this.button1.height * 0.5 - btnMargin
    // this.headerButtonBuy.x = width * 0.5
    // this.headerButtonBuy.y = height * 0.5 + this.headerButtonBuy.height * 0.5 + btnMargin
    // this.headerButtonInvite.x = width * 0.5
    // this.headerButtonInvite.y = height * 0.5 + this.headerButtonBuy.height * 2 + btnMargin
  }
}
