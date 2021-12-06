<template>
  <div class="my-5">
    <h1>Reservar</h1>

    <b-form inline>
      <div class="flex-grow-1 mb-2 mr-sm-2 mb-sm-0">
        <label class="justify-content-start" for="name">Nombre</label>
        <b-form-input
          class="w-100"
          id="name"
          v-model="reserva.name"
        ></b-form-input>
      </div>
      <div class="mb-2 mr-sm-2 mb-sm-0">
        <label class="justify-content-start" for="datepicker">Fecha</label>
        <b-form-datepicker
          id="datepicker"
          locale="es"
          v-model="reserva.date"
          :date-format-options="{
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          }"
          placeholder="30/09/2021"
        ></b-form-datepicker>
      </div>
      <div class="mb-2 mr-sm-2 mb-sm-0">
        <label class="justify-content-start" for="from">Desde</label>
        <b-form-timepicker
          id="from"
          v-model="reserva.from"
          placeholder="12:00"
        ></b-form-timepicker>
      </div>
      <div class="mb-2 mr-sm-2 mb-sm-0">
        <label class="justify-content-start" for="to">Hasta</label>
        <b-form-timepicker
          id="to"
          v-model="reserva.to"
          placeholder="13:00"
        ></b-form-timepicker>
      </div>

      <b-button
        class="align-self-end px-4"
        variant="primary"
        @click="saveReserva(reserva)"
        >Guardar</b-button
      >
    </b-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ReservarForm",
  data() {
    return {
      reserva: { name: "", date: "", from: "", to: "" },
    };
  },
  methods: {
    ...mapMutations(["addReserva"]),
    saveReserva(reserva) {
      reserva.from = reserva.from.substring(0, 5);
      reserva.to = reserva.to.substring(0, 5);
      this.addReserva(reserva);
      this.reserva = { name: "", date: "", from: "", to: "" };
    },
  },
};
</script>

<style scoped>
button {
  background-color: #00a98f;
  border-color: #00a98f;
}
button:hover {
  background-color: #29bda7;
  border-color: #00a98f;
}
h1 {
  color: #006755;
}
</style>