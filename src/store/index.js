import Vue from "vue";
import Vuex from "vuex";
import moment from "moment";
moment.locale("es");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reservas: [
      {
        name: "Alvarado, Eduardo Alfonso",
        date: "2021-12-06",
        from: "09:30",
        to: "10:30",
      },
      {
        name: "Acuña López, Juliana",
        date: "2021-12-06",
        from: "11:00",
        to: "12:30",
      },
      {
        name: "Arenales, Ingrid Lorena",
        date: "2021-12-06",
        from: "12:30",
        to: "13:30",
      },
      {
        name: "Barreto Ruíz, Aldana",
        date: "2021-12-06",
        from: "13:30",
        to: "16:00",
      },
      {
        name: "Buitargo Lozano, Daniel Esteban",
        date: "2021-12-06",
        from: "16:30",
        to: "17:30",
      },
      {
        name: "Delgado, Ángel David",
        date: "2021-12-06",
        from: "17:30",
        to: "19:00",
      },
    ],
    itemsTimeline: [],
  },
  mutations: {
    addReserva(state, reserva) {
      state.reservas.push(reserva);
      this.commit("setItemsTimeline");
    },
    deleteReserva(state, index) {
      state.reservas.splice(index, 1);
      this.commit("setItemsTimeline");
    },
    setItemsTimeline(state) {
      state.itemsTimeline = [];
      state.reservas.forEach((r) => {
        let res = { start: "", end: "" };

        res.start = r.date + " " + r.from;

        let dateFormated =
          r.from > r.to
            ? moment(r.date).add(1, "days").format("YYYY-MM-DD")
            : r.date;

        res.end = dateFormated + " " + r.to;
        state.itemsTimeline.push(res);
      });
    },
  },
  actions: {},
  modules: {},
});
