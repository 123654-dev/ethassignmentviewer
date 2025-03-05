<script lang="ts">
  import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";
	import "../app.css";
  let { children } = $props();

  let queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>

  {@render children()}
</QueryClientProvider>

<style>
  @import "../app.css";

</style>
