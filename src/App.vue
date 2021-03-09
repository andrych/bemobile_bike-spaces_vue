<template>
  <div class="c-app" id="app">
    <Header />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Header } from "./components";

export default Vue.extend({
  name: "App",
  components: {
    Header,
  }
});
</script>

<style lang="scss" src="./styles/main.scss" />
