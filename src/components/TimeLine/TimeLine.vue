<template>
  <div class="wrapper">
    <h2>Agenda de Reservas</h2>
    <Timeline
      ref="timeline-withoutGroups"
      :items="itemsTimeline"
      :options="options"
    >
    </Timeline>
  </div>
</template>

<script>
import { Timeline } from "vue-visjs";
import { mapState, mapMutations } from "vuex";
import "./full-style.css";

export default {
  components: {
    Timeline,
  },
  data: () => ({
    items: [
      {
        start: "2021-12-1 10:00",
        end: "2021-12-1 10:30",
      },
      {
        start: "2021-12-1 11:00",
        end: "2021-12-1 11:45",
      },
    ],
    options: {
      //stack: false,
      orientation: {
        axis: "top",
        item: "top",
      },
      //zoomMax: 31536000000, // just one year
      zoomMax: 87600900, // 10,000 years is maximum possible
      zoomMin: 10000000, // 10ms
    },
  }),
  computed: {
    ...mapState(["itemsTimeline"]),
  },
  methods: {
    ...mapMutations(["setItemsTimeline"]),
  },
  beforeMount() {
    this.setItemsTimeline();
  },
};
</script>

<style scoped>
.wrapper {
  padding: 20px 50px;
  text-align: left;
}
</style>