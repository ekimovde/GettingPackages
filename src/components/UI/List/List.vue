<template>
  <ul class="menu">
    <h3 class="menu__title">{{ packageName }}</h3>

    <li
      class="menu__item"
      @click="$emit('onClickItem', index)"
      v-for="(item, index) in packages"
      :key="index"
    >
      <span class="menu__id">
        {{ index + page.perPage * (page.current - 1) }}
      </span>

      <span class="menu__name">{{ item.name }}</span>

      <span class="menu__type"> {{ item.type }}</span>
    </li>
  </ul>
</template>

<script>
import "./List.scss";

export default {
  name: "List",
  props: {
    packageName: {
      type: String,
      required: true,
    },
    packages: {
      type: Array,
      required: true,
    },
    page: {
      type: Object,
      required: true,
    },
  },
};
</script>
