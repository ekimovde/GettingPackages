<template>
  <div class="pagination">
    <div
      class="pagination__btn pagination__btn_left"
      @click="$emit('prevPage')"
    >
      <i class="bx bx-chevron-left-square pagination__icon" />
    </div>

    <div class="pagination__number">
      <span class="pagination__current">
        {{ page.current }}
      </span>

      <span class="pagination__dash">
        —
      </span>

      <span class="pagination__length">
        {{ page.length }}
      </span>
    </div>

    <div
      class="pagination__btn pagination__btn_right"
      @click="$emit('nextPage')"
    >
      <i class="bx bx-chevron-right-square pagination__icon" />
    </div>
  </div>
</template>

<script>
import "./Pagination.scss";

export default {
  name: "Pagination",
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
};
</script>
