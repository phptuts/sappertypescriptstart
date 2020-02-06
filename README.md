# sapper-template

All the credit goes here:
https://github.com/pyoner/svelte-typescript

## Install

```
npx  degit
npm install
cp .env-template .env
```

## Typescript on components

This is required for visual code.

```typescript
<script lang="typescript"></script>
```

## Environment Variables

Set your environment variables in the .env file.  To access them use env.ts function / service.  There is an example in the index.svelte component.

```typescript
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

```
