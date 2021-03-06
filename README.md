# Sappper Typescript Template 

All the credit and hard work came from this repo:
https://github.com/pyoner/svelte-typescript

## Install

```
npm install -g degit
degit github:phptuts/sappertypescriptstart my-app
cd my-app
cp .env-template .env
npm install
npm run dev
```

Once it loads you should see this in the terminal console and browser console.  This means the environment variables are loading.

```console
ENVIRONMENT VARIABLES WORKING
DOES NOT EXIST.
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
