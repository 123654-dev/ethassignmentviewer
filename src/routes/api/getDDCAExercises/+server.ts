import jsdom from "jsdom";
const { JSDOM } = jsdom;
import axios from "axios";
import { env } from "$env/dynamic/public";
import { ANALYSIS_WEBSITE, DDCA_LAB_WEBSITE } from "$env/static/private";
import type { exercise } from "$lib/exercise";

export async function GET(): Promise<Response> {
  //axios fetch raw html
  //parse with jsdom

  const { data } = await axios.get(DDCA_LAB_WEBSITE, {
    responseType: "document",
  });
  const dom = new JSDOM(data);
  const document = dom.window.document;
  //select table with header "Aufgabenblatt" in ths
  //select first table following the header

  const table = document.getElementsByClassName("table sectionedit2")[0];

  //return each table row as json

  let actual = table?.querySelector("tbody");
  let rows = actual?.querySelectorAll("tr");
  let exercises: exercise[] = [];
  rows?.forEach((row) => {
    let due = row.getElementsByClassName("col6")[0]?.textContent ?? "???";
    let exercise = {
      name: row.querySelector("a")?.textContent ?? "???",
      links: ["https://safari.ethz.ch" + row.querySelector("a")?.href, "https://safari.ethz.ch" + row.querySelectorAll("a")[1]?.href, "https://safari.ethz.ch" + row.querySelectorAll("a")[3]?.href],
      dueDate: due,
    };
    console.log(exercise);
    let td = row.querySelectorAll("td");
    exercises.push(exercise);
  });

  return new Response(JSON.stringify(exercises));
}
