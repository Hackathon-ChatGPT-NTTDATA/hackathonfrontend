import { Alumno } from "./alumno";
import { Examen } from "./examen";

export class Curso {
  Id: number;
  nombrer: string;
  createAt: string;
  alumnos: Alumno[] = [];
  examenes: Examen[] = [];
}
