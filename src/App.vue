<template>
  <div id="app" class="container">
    <ReservarForm />
    <TimeLine />
    <TablaReservas />
  </div>
</template>

<script>
import ReservarForm from "./components/ReservarForm.vue";
import TimeLine from "./components/TimeLine/TimeLine.vue";
import TablaReservas from "./components/TablaReservas.vue";

export default {
  name: "App",
  components: { ReservarForm, TimeLine, TablaReservas },
};
</script>
