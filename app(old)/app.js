// Создание всего приложения
let app = new PIXI.Application({width: 1366, height: 740});

// Добавление приложения и сцены в html документ
document.body.appendChild(app.view);

// обьявление обьектов
let background;

// прогрузка всех спрайтов и так же загрузка основного сетапа
PIXI.Loader.shared
  .add("images/start/spritesheet.json")
  .load(setup);


button.sayHi()

console.log('button', button)

function setup() {
  // get a reference to the sprite sheet you've just loaded:
  let sheet = PIXI.Loader.shared.resources["images/start/spritesheet.json"];

  background = new PIXI.Sprite(sheet.textures["background.png"]);

  app.stage.addChild(background);

  background.anchor.x = 0;
  background.anchor.y = 0;

  background.position.x = 0;
  background.position.y = 0;

  // scale stage container that it fits into the view
  app.stage.scale.x = app.view.width / background.width;
  app.stage.scale.y = app.view.height / background.height;
}