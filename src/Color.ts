export enum ColorNames {
  WHITE,
  BLACK,
}

export abstract class Color {
  private colorName: ColorNames;

  constructor(colorName: ColorNames) {
    this.colorName = colorName;
  }

  getColor() {
    return this.colorName;
  }
  setColor(colorName: ColorNames) {
    this.colorName = colorName;
  }
  isSameColor(color: Color) {
    return this.colorName === color.getColor();
  }
}

export class ColorImpl extends Color {
  constructor(colorName: ColorNames) {
    super(colorName);
  }
}
