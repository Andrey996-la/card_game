import { Texture } from "@pixi/core";
import { NineSlicePlane } from "@pixi/mesh-extras";
import { Text } from "@pixi/text";

export default class Button extends NineSlicePlane {
  constructor(settings) {
    const texture = Texture.from(settings.nameTexture);

    const notScalableArea = 0; // Indent from left, top, right and bottom sides in pixels padding

    super(
      texture,
      notScalableArea,
      notScalableArea,
      notScalableArea,
      notScalableArea
    );

    /** Contains settings for the button */
    this.settings = {
      // Default values
      activeTint: 0xaaaaaa,
      fontSize: 17,
      height: 100,
      label: "Button",
      overTint: 0xdddddd,
      tint: 0xffffff,
      width: 200,
      labelColor: "#FFFFFF",
      labelShadow: {},
      x: 0,
      y: 0,
    };

    // The button's state.
    /** Whether the cursor is over the button */
    this.isOver = false;
    /** Whether we pressed on the button but didn't released yet */
    this.isActive = false;

    // Main text on the button
    this.label = new Text("");

    this.label.anchor.set(0.5);

    this.addChild(this.label);

    // Update visual appearance
    this.update(settings);

    // We want the button to be able to interact with pointer events, so we set this.interactive true
    this.interactive = true;
    // Show the "hand-cursor" when the cursor is over the button
    this.buttonMode = true;

    /** Bind functions on this context as long as we will use them as event handlers */
    this.onTap = this.onTap.bind(this);
    this.onOver = this.onOver.bind(this);
    this.onOut = this.onOut.bind(this);
    this.onDown = this.onDown.bind(this);
    this.onUp = this.onUp.bind(this);

    this.on("pointertap", this.onTap); // The moment when we release (click/tap) the button
    this.on("pointerover", this.onOver); // The moment when we put the cursor over the button
    this.on("pointerout", this.onOut); // The moment when we put the cursor out of the button
    this.on("pointerdown", this.onDown); // The moment when we pressed on the button but didn't release yet
    this.on("pointerup", this.onUp); // The moment when we release the button
    this.on("pointerupoutside", this.onUp); // The moment when we release the button being outside of it (e.g. we press on the button, move the cursor out of it, and release)
  }

  onTap() {
    if (this.settings.onTap) this.settings.onTap();
  }

  onOver() {
    this.isOver = true;
    this.update();
  }

  onOut() {
    this.isOver = false;
    this.update();
  }

  onDown() {
    this.isActive = true;
    this.update();
  }

  onUp() {
    this.isActive = false;
    this.update();
  }

  /** Updates the button's appearance after changing its settings */
  update(settings) {
    // Creating new settings which include old ones and apply new ones over it
    this.settings = {
      ...this.settings, // including old settings
      ...settings, // including new settings
    };

    if (this.isActive === true) {
      this.tint = this.settings.activeTint;
    } else if (this.isOver === true) {
      this.tint = this.settings.overTint;
    } else {
      this.tint = this.settings.tint;
    }

    this.label.text = this.settings.label;

    this.label.style = {
      fontSize: this.settings.fontSize + "px",
      fill: this.settings.labelColor,
      fontFamily: "Verdana",
      ...this.settings.labelShadow
    };

    this.onResize();
  }

  /** Changes sizes and positions each time when the button updates */
  onResize() {
    this.width = this.settings.width;
    this.height = this.settings.height;

    this.label.x = this.settings.width * 0.5;
    this.label.y = this.settings.height * 0.5;

    this.x = this.settings.x;
    this.y = this.settings.y;

    this.pivot.set(this.width * 0.5, this.height * 0.5);
  }
}
