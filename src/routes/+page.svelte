<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  const { name } = data;
</script>

<div class="pico container-fluid">
  <h1 style="font-weight: normal;">Welcome, {name}</h1>

  <form>
    <fieldset role="group">
      <button class="contrast ghost">
        <span class="material-symbols-outlined">login</span>
        Login
      </button>
    </fieldset>

    <fieldset>
      <label>
        Email
        <input type="email">
      </label>

      <label>
        Password
        <input type="password">
      </label>
    </fieldset>

    <input type="submit">
  </form>
</div>

<style>
  form {
    margin: auto;
  }

  fieldset {
    display: grid;
  }

  fieldset[role="group"] button {
    justify-self: end;
  }

  @media (min-width: 578px) {
    div {
      margin-top: 20vh;
      width: 360px;
    }
  }
</style>
