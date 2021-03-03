import axios from "axios";

export default {
  state: {
    loading: false,
    error: null,
    packages: [],
    packageName: "",
  },
  mutations: {
    changePackages(state, { packages, packageName }) {
      state.packages = packages;
      state.packageName = packageName;
      state.loading = false;
    },
    changeError(state, error) {
      state.error = error;
      state.loading = false;
    },
    changeLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    setPackages({ commit }, payload) {
      commit("changeLoading", true);

      axios
        .get(`https://data.jsdelivr.com/v1/package/npm/${payload}`)
        .then(({ data }) => {
          commit("changePackages", {
            packages: data.files,
            packageName: data.default,
          });
        })
        .catch((error) => {
          commit("changeError", error);
        });
    },
  },
  getters: {
    getLoading(state) {
      return state.loading;
    },

    getPackages(state) {
      return state.packages;
    },

    getPackageName(state) {
      return state.packageName;
    },

    getError(state) {
      return state.error;
    },
  },
};
