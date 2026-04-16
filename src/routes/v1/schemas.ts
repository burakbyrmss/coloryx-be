import { Type } from "@sinclair/typebox";

export const GameModeSchema = Type.Union([
  Type.Literal("ODD_ONE_OUT"),
  Type.Literal("REMEMBER_COLOR"),
]);

export const CursorSchema = Type.Optional(Type.String({ minLength: 1 }));

