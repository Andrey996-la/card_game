class gButton {
  constructor(name) {
    this.name = name;
  }

    // // create some textures from an image path
  //   let textureButton = PIXI.Texture.fromImage(
  //     "https://dl.dropboxusercontent.com/s/mi2cibdajml8qj9/arrow_wait.png?dl=0"
  //   );
  //   let textureButtonDown = PIXI.Texture.fromImage(
  //     "https://dl.dropboxusercontent.com/s/m0x11c91wazehyp/arrow_error.png?dl=0"
  //   );
  //   let textureButtonOver = PIXI.Texture.fromImage(
  //     "https://dl.dropboxusercontent.com/s/1kuhddt8p9tr0k8/arrow_wait.png?dl=0"
  //   );

  //   let button = new PIXI.Sprite(textureButton);

  //   button.buttonMode = true;
  //   button.interactive = true;
  //   button.buttonMode = true;

  //   button.anchor.set(0.5);
  //   button.x = position.x;
  //   button.y = position.y;

  //   button
  //     // Mouse & touch events are normalized into
  //     // the pointer* events for handling different
  //     // button events.
  //     .on("pointerdown", onButtonDown)
  //     .on("pointerup", onButtonUp)
  //     .on("pointerupoutside", onButtonUp)
  //     .on("pointerover", onButtonOver)
  //     .on("pointerout", onButtonOut);

  //   // Use mouse-only events
  //   // .on('mousedown', onButtonDown)
  //   // .on('mouseup', onButtonUp)
  //   // .on('mouseupoutside', onButtonUp)
  //   // .on('mouseover', onButtonOver)
  //   // .on('mouseout', onButtonOut)

  //   // Use touch-only events
  //   // .on('touchstart', onButtonDown)
  //   // .on('touchend', onButtonUp)
  //   // .on('touchendoutside', onButtonUp)

  //   // add it to the stage
  //   app.stage.addChild(button);
  // }

  // sayHi() {
  //   alert(this.name);
  // }

  // onButtonDown() {
  //   this.isdown = true;
  //   this.texture = textureButtonDown;
  //   this.alpha = 1;
  // }

  // onButtonUp() {
  //   this.isdown = false;
  //   if (this.isOver) {
  //     this.texture = textureButtonOver;
  //   } else {
  //     this.texture = textureButton;
  //   }
  // }

  // onButtonOver() {
  //   this.isOver = true;
  //   if (this.isdown) {
  //     return;
  //   }
  //   this.texture = textureButtonOver;
  // }

  // onButtonOut() {
  //   this.isOver = false;
  //   if (this.isdown) {
  //     return;
  //   }
  //   this.texture = textureButton;
  // }
}
