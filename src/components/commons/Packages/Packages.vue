<template>
  <div class="packages">
    <div class="container">
      <Loader v-if="isLoading" />

      <TableInfo />

      <Error v-if="error !== null" />

      <List
        v-if="!isLoading && Object.keys(packages).length && error === null"
        @onClickItem="onClickItem($event)"
        :packageName="packageName"
        :packages="packages"
        :page="page"
      />

      <Modal
        title="Окно с информацией"
        v-if="modalShow"
        @closeModal="modalShow = !modalShow"
      >
        <div slot="body" class="modal__info">
          <span class="modal__text modal__text_name"
            >Name: {{ packageInfo.name }}</span
          >
          <span class="modal__text modal__text_type"
            >Type: {{ packageInfo.type }}</span
          >
          <span class="modal__text"
            >Length files: {{ packageInfo.filesLength }}</span
          >
        </div>
      </Modal>

      <Pagination
        v-if="Object.keys(packages).length && error === null"
        :page="page"
        @prevPage="prevPage"
        @nextPage="nextPage"
      />
    </div>
  </div>
</template>

<script>
import "./Packages.scss";
import Loader from "@/components/UI/Loader/Loader";
import Modal from "@/components/UI/Modal/Modal";
import Error from "@/components/UI/Error/Error";
import TableInfo from "@/components/UI/TableInfo/TableInfo";
import List from "@/components/UI/List/List";
import Pagination from "@/components/commons/Pagination/Pagination";

export default {
  name: "Packages",
  components: {
    Loader,
    Modal,
    Error,
    TableInfo,
    Pagination,
    List,
  },
  data() {
    return {
      modalShow: false,
      page: {
        current: 1,
        perPage: 10,
        length: 0,
      },
      packageInfo: {},
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters.getLoading;
    },
    packages() {
      let getPackages = this.$store.getters.getPackages;
      this.page.length = Math.ceil(getPackages.length / this.page.perPage);
      let start = (this.page.current - 1) * this.page.perPage;
      let end = this.page.current * this.page.perPage;

      getPackages = getPackages.slice(start, end);

      return getPackages;
    },
    packageName() {
      return this.$store.getters.getPackageName;
    },
    error() {
      return this.$store.getters.getError;
    },
  },
  methods: {
    prevPage() {
      this.page.current > 1 ? (this.page.current -= 1) : 1;
    },
    nextPage() {
      this.page.current < this.page.length
        ? (this.page.current += 1)
        : this.page.length;
    },
    onClickItem(index) {
      const packages = this.packages;

      this.packageInfo = {
        name: packages[index].name ? packages[index].name : "Отсутвует",
        type: packages[index].type ? packages[index].type : "Отсутвует",
        filesLength: packages[index].files
          ? packages[index].files.length
          : "Отсутвует",
      };
      this.modalShow = !this.modalShow;
    },
  },
};
</script>
