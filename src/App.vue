<template>
  <div id="app">
    <Search />

    <router-view />
  </div>
</template>

<script>
import Search from "@/components/UI/Search/Search";

export default {
  name: "App",
  components: {
    Search,
  },
};
</script>
