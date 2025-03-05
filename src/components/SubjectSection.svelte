<script>
  // @ts-nocheck

  import {
    getCourseWebsite,
    getExercises,
    getVideoWebsite,
    Subject,
  } from "$lib/subjectProvider";
  import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from "@sveltestack/svelte-query";
  import { Clock, FileDashed } from "phosphor-svelte";
  import ArrowUpRight from "phosphor-svelte/lib/ArrowUpRight";
  import DragNDrop from "./DragNDrop.svelte";

  let { title, subject } = $props();

  const website = getCourseWebsite(subject) ?? "";
  const videoWebsite = getVideoWebsite(subject) ?? "";

  const queryClient = new QueryClient();

  const query = useQuery(subject + "exercises", () => getExercises(subject), {
    staleTime: Infinity,
  });

  let files = [];

  query.subscribe((data) => {
    if ($query.data)
      $query.data.forEach((exercise) => {
        files.push(fetch(exercise.link).then((response) => response.blob()));
      });
  });
</script>

<div id="subject-wrapper">
  <div id="subject-style-wrapper">
    <h1>{title}</h1>
    <a target="_blank" href={website}
      ><span><ArrowUpRight></ArrowUpRight> Course Website</span></a
    >

    <a target="_blank" href={videoWebsite}>
      <span><ArrowUpRight></ArrowUpRight> Video Recordings</span></a
    >

    <div style="height: 10px;"></div>
    {#if $query.isLoading}
      <div>Loading...</div>
    {/if}
    {#if $query.isError}
      <div>Error: {$query.error.message}</div>
      
    {/if}
    {#each $query.data as exercise, i}
      <span style="display: flex; width: 100%; justify-content: space-between;"
        ><a class="primary" target="_blank" href={exercise.links[0]}
          ><ArrowUpRight></ArrowUpRight>{exercise.name}</a
        >
        {#each exercise.files as file, i}
          {#if i != 0}
            <a class="secondary" target="_blank" href={exercise.links[0]}
              ><ArrowUpRight></ArrowUpRight>{exercise.name}</a
            >
          {/if}
        {/each}
        <span style="display: flex; flex-direction: row; justify-content: end;"><Clock color="#515151" style="margin: 8px;"></Clock>Due {exercise.dueDate}</span>
        <!--<DragNDrop fileUrl={exercise.link}></DragNDrop>-->
      </span>
    {/each}
  </div>
</div>

<style>
  #subject-style-wrapper {
    padding: 25px;
    border: 1px solid #515151;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }

  span {
    vertical-align: middle;
    align-items: center;
  }

  #subject-wrapper {
    width: 350px;
    padding: 5px;
  }
</style>
