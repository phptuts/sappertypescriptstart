<script lang="typescript">
  import { onMount } from "svelte";
  import { getEnvParam } from "../services/env";

  // Server Side
  console.log(getEnvParam("TEST", "Environment variables not working."));
  console.log(getEnvParam("BAD_ENV", "DOES NOT EXIST."));

  onMount(() => {
    // Client Side
    console.log("App mounted");
    console.log(getEnvParam("TEST", "Environment variables not working."));
    console.log(getEnvParam("BAD_ENV", "DOES NOT EXIST."));
  });
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Typescript Envs</h1>
