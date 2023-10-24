import { Position } from "./Position";
import { Color } from "./Color";

export abstract class Piece {
  position: Position;
  color: Color;
  
  constructor(position: Position, color: Color) {
    this.position = position;
    this.color = color;
  }

  abstract moves(): Position[];
}
