export enum Subject {
  ANALYSIS = "analysis",
  DDCA = "ddca",
  PPROG = "pprog",
  ALGOWAHR = "algowahr",
}

export function getCourseWebsite(subject: Subject): string {
  switch (subject) {
    case Subject.ANALYSIS:
      return "https://metaphor.ethz.ch/x/2025/fs/401-0212-16L/";
    case Subject.DDCA:
      return "https://safari.ethz.ch/ddca/spring2025/doku.php?id=start";
    case Subject.PPROG:
      return "https://spcl.inf.ethz.ch/Teaching/2025-pp/";
    case Subject.ALGOWAHR:
      return "";
  }
}

export function getMoodle(subject: Subject): string {
  switch (subject) {
    case Subject.ANALYSIS:
      return "";
    case Subject.DDCA:
      return "https://moodle-app2.let.ethz.ch/course/view.php?id=25002";
    case Subject.PPROG:
      return "https://moodle-app2.let.ethz.ch/course/view.php?id=24843";
    case Subject.ALGOWAHR:
      return "https://moodle-app2.let.ethz.ch/course/view.php?id=24833";
  }
}

export function getVideoWebsite(subject: Subject): string {
  switch (subject) {
    case Subject.ANALYSIS:
      return "https://video.ethz.ch/lectures/d-math/2025/spring/401-0212-16L.html";
    case Subject.DDCA:
      return "https://www.youtube.com/watch?v=ubhxKNlOlRg&list=PL5Q2soXY2Zi9Eo29LMgKVcaydS7V1zZW3";
    case Subject.PPROG:
      return "https://example.com";
    case Subject.ALGOWAHR:
      return "";
  }
}

export async function getExercises(subject: Subject): Promise<Object[]> {
  switch (subject) {
    case Subject.ANALYSIS:
      return getAnalExercises();
    case Subject.DDCA:
      return getDDCAExercises();
    case Subject.PPROG:
      return getPProgExercises();
    case Subject.ALGOWAHR:
      return getAlgowahrExercises();
  }
}

async function getAnalExercises(): Promise<Object[]> {
  const res = await fetch("api/getAnalysisExercises");
  console.log(res);
  return res.json();
}

async function getDDCAExercises(): Promise<Object[]> {
  const res = await fetch("api/getDDCAExercises");
  console.log(res);
  return res.json();
}

function getPProgExercises(): Object[] {
  return [];
}

function getAlgowahrExercises(): Object[] {
  return [];
}
