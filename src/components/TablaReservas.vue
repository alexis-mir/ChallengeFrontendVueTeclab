<template>
  <div>
    <b-table :items="reservas" :fields="fields" head-variant="light">
      <template #cell(date)="data">
        {{ formatDate(data.item.date) }}
      </template>
      <template #cell(time)="data">
        de {{ data.item.from }} a {{ data.item.to }}
      </template>
      <template #cell(action)="data">
        <b-icon-trash-fill
          class="trash-icon"
          font-scale="1.5"
          @click="deleteReserva(data.index)"
        ></b-icon-trash-fill>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import moment from "moment";

export default {
  data() {
    return {
      fields: [
        { key: "name", label: "Nombre" },
        { key: "date", label: "Fecha" },
        { key: "time", label: "Horario" },
        { key: "action", label: "Acción" },
      ],
    };
  },
  computed: {
    ...mapState(["reservas"]),
  },
  methods: {
    ...mapMutations(["deleteReserva"]),
    formatDate(date) {
      return moment(date).format("L");
    },
  },
};
</script>

<style>
.trash-icon:hover {
  color: var(--danger);
}
</style>