<script>
  import { Subject } from "$lib/subjectProvider";
  import SubjectSection from "../components/SubjectSection.svelte";
</script>

<!--<h1>Assignment Viewer 2.0</h1>-->

<div id="container">
  <SubjectSection title="AlgoWahr" subject={Subject.ALGOWAHR}></SubjectSection>
  <SubjectSection title="Analysis I" subject={Subject.ANALYSIS}
  ></SubjectSection>
  <SubjectSection title="DDCA" subject={Subject.DDCA}></SubjectSection>
  <SubjectSection title="PProg" subject={Subject.PPROG}></SubjectSection>
</div>

<div style="width: 450px; color: gray; margin: auto; margin-top: 25px;">
  This website is not affiliated with ETH Zürich. It only scrapes some data to
  display all public assignment and website URLs in one place. Please refer to
  the official websites for the most up-to-date information!
</div>

<div style="height: 100px;"></div>

<style>
  @import "../app.css";

  #container {
    overflow-x: scroll;
    width: max-content;
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: space-around;
  }

  .topl {
    position: fixed;
    top: 0;
    left: 50px;
    color: white;
    font-weight: bold;
  }
</style>
