<script>
  let { children, title } = $props();
</script>

<div id="subject-wrapper">
  <div id="subject-style-wrapper">
    <h2>{title}</h2>
    {@render children()}
  </div>
</div>

<style>
  #subject-style-wrapper {
    padding: 25px;
    border: 1px solid black;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }

  #subject-wrapper {
    width: 25%;
    padding: 5px;
  } 
</style>
