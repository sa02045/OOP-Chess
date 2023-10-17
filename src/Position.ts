interface Coordinates {
  x: number;
  y: number;
}

export abstract class Position {
  private coordinates: Coordinates;
  constructor(coordinates: Coordinates) {
    this.coordinates = coordinates;
  }

  getPosition() {
    return this.coordinates;
  }

  setPosition(coordinates: Coordinates) {
    this.coordinates = coordinates;
  }

  isSamePosition(position: Position) {
    return (
      this.coordinates.x === position.coordinates.x &&
      this.coordinates.y === position.coordinates.y
    );
  }
}

export class PositionImpl extends Position {
  constructor(coordinates: Coordinates) {
    super(coordinates);
  }
}
