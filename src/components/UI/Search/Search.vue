<template>
  <div class="search">
    <div class="container">
      <div class="content">
        <i
          class="bx bxs-virus-block bx-tada bx-flip-vertical content__icon"
        ></i>
        <Input @onEnter="onEnterSearch($event)" />
      </div>
    </div>
  </div>
</template>

<script>
import "./Search.scss";
import Input from "@/components/UI/Input/Input";

export default {
  name: "Search",
  components: {
    Input,
  },
  methods: {
    onEnterSearch(event) {
      console.log(event);

      this.$store.dispatch("setPackages", event);
    },
  },
};
</script>
