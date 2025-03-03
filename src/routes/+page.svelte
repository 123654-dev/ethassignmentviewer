<script>
  import SubjectSection from "../components/SubjectSection.svelte";
</script>

<h1>Assignment Viewer 2.0</h1>

<div id="container">
  <SubjectSection title="Analysis I">
    <h1>Servus</h1>
  </SubjectSection>
  <SubjectSection title="Algorithmen und Wahrscheinlichkeit">
    <h1>Servus</h1>
  </SubjectSection>
  <SubjectSection title="Digital Design and Computer Architecture">
    <h1>Servus</h1>
  </SubjectSection>
  <SubjectSection title="Parallele Programmierung">
    <h1>Servus</h1>
  </SubjectSection>
</div>

<style>
    #container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>