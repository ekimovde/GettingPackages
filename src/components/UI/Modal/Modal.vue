<template>
  <div class="modal" @click="$emit('closeModal')">
    <div class="modal__content" @click.stop="">
      <div class="modal__header">
        <span class="modal__title"> {{ title }} </span>
        <span class="modal__btn" @click="$emit('closeModal')"
          ><i class="bx bx-x modal__icon"></i
        ></span>
      </div>

      <div class="modal__body">
        <slot name="body">
          Not Found
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import "./Modal.scss";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  mounted() {
    document.body.addEventListener("keyup", (event) => {
      if (event.key === "Escape") {
        this.$emit("closeModal");
      }
    });
  },
  computed: {},
  methods: {},
};
</script>
