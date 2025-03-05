

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
      return "https://example.com";
    case Subject.ALGOWAHR:
      return "https://example.com";
  }
}

export function getVideoWebsite(subject: Subject): string {
  switch (subject) {
    case Subject.ANALYSIS:
      return "https://video.ethz.ch/lectures/d-math/2025/spring/401-0212-16L.html";
    case Subject.DDCA:
      return "https://example.com";
    case Subject.PPROG:
      return "https://example.com";
    case Subject.ALGOWAHR:
      return "https://example.com";
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
