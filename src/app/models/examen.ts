import { Asignatura } from "./asignatura";
import { Pregunta } from "./pregunta";

export class Examen {

  Id: number;
  nombrer: string;
  createAt: string;
  preguntas: Pregunta[] = [];
  asignatura: Asignatura;
  respondio: boolean;
}
