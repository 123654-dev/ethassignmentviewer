<script>
  // @ts-nocheck

  import { env } from "$env/dynamic/public";

  // @ts-nocheck

  import { FileDashed, Spinner, SpinnerBall } from "phosphor-svelte";

  let { fileUrl } = $props();

  let idle = $state(true);
  let loading = $state(false);

  let content = $state();

  async function load() {
    idle = false;
    loading = true;

    const response = await fetch("api/getFileBlob/", {
      method: "POST",
      body: JSON.stringify({ fileUrl }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    idle = false;
    loading = false;
    let blob = await response.blob();
    content = new File([blob], "Analysis.pdf", {
      type: blob.type,
    });
  }
</script>

{#if idle}
  <button
    style="border-radius: 12px; border: 1px solid #515151; background: transparent; color: white; height: 32px; padding: 0 16px;"
    onclick={load}
  >
    Fetch for drag and drop</button
  >
{:else if loading}
  <div
    role="button"
    tabindex="0"
    style="border-radius: 12px; border: 1px solid #515151; height: 32px; width: 32px; display: flex; justify-content: center; align-items: center;"
  >
    <Spinner color="white" class="spin"></Spinner>
  </div>
{:else if content}
  <div
    role="button"
    tabindex="0"
    draggable="true"
    ondragstart={function (event) {
      event.dataTransfer.items.add(content);

      event.dataTransfer.setData("text/plain", content);

      console.log(content);
    }}
    style="border-radius: 12px; border: 1px solid #515151; height: 32px; width: 32px; display: flex; justify-content: center; align-items: center;"
  >
    <FileDashed color="white"></FileDashed>
  </div>
{/if}

<style>
  .spin {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
