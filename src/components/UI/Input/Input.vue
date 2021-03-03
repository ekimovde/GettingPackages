<template>
  <input type="text" class="input" v-model="value" @keyup="onEnterSearch" />
</template>

<script>
import "./Input.scss";
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onEnterSearch(event) {
      if (event.keyCode === 13) {
        this.$emit("onEnter", this.value);
      }
    },
  },
};
</script>
