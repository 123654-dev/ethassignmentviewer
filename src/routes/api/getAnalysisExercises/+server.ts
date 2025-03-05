import jsdom from "jsdom";
const { JSDOM } = jsdom;
import axios from "axios";
import { env } from "$env/dynamic/public";
import { ANALYSIS_WEBSITE } from "$env/static/private";
import type { exercise } from "$lib/exercise";

export async function GET(): Promise<Response> {
  //axios fetch raw html
  //parse with jsdom

  const { data } = await axios.get(ANALYSIS_WEBSITE, {
    responseType: "document",
  });
  const dom = new JSDOM(data);
  const document = dom.window.document;
  //select table with header "Aufgabenblatt" in ths

  let header = document.getElementById("exercises");
  //select first table following the header

  const table =
    header?.nextElementSibling?.nextElementSibling?.nextElementSibling
      ?.nextElementSibling;

  //return each table row as json

  let rows = table?.querySelectorAll("tr");
  let exercises: exercise[] = [];
  rows?.forEach((row) => {
    let exercise: exercise = {
      name: row.querySelector("a")?.textContent ?? "???",
      dueDate: "",
      links: [ANALYSIS_WEBSITE + row.querySelector("a")?.href],
    };
    let td = row.querySelectorAll("td");

    if (td[1] && td[1].textContent) exercise.dueDate = td[1].textContent;
    if (exercise.name != "???" && exercise.links[0]) {
      exercises.push(exercise);
      console.log(exercise);
    }
  });

  return new Response(JSON.stringify(exercises));
}
