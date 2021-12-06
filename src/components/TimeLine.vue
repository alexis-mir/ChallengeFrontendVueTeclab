<template>
  <div class="my-5">
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

<style >
.vis-item {
  position: absolute;
  color: #1a1a1a;
  border-width: 1px;
  border-color: #69dcac;
  background-color: #69dcac;
  display: inline-block;
  z-index: 1;
  transition: 0.15s margin-top ease-out;
  cursor: pointer;
}

.vis-item:hover {
  border-color: #5ec499;
  background-color: #5ec499;
}

.vis-item.vis-selected {
  border-color: #036d5e;
  background-color: #036d5e;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.vis-editable.vis-selected {
  cursor: move;
}

.vis-item.vis-point.vis-selected {
  background-color: #fff785;
}

.vis-item.vis-box {
  text-align: center;
  border-style: solid;
  border: none;
  border-radius: 0px;
}

.vis-item.vis-point {
  background: 0 0;
}

.vis-item.vis-dot {
  position: absolute;
  padding: 0;
  border-width: 4px;
  border-style: solid;
  border-radius: 4px;
}

.vis-item.vis-range {
  border-style: solid;
  border-radius: 2px;
  border: none;
  box-sizing: border-box;
}

.vis-item.vis-background {
  border: none;
  background-color: rgba(213, 221, 246, 0.4);
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.vis-item .vis-item-overflow {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.vis-item-visible-frame {
  white-space: nowrap;
}

.vis-item.vis-range .vis-item-content {
  position: relative;
  display: inline-block;
}

.vis-item.vis-background .vis-item-content {
  position: absolute;
  display: inline-block;
}

.vis-item.vis-line {
  padding: 0;
  position: absolute;
  width: 0;
  border-left-width: 1px;
  border-left-style: solid;
}

.vis-item .vis-item-content {
  white-space: nowrap;
  box-sizing: border-box;
  padding: 5px;
}

.vis-item .vis-onUpdateTime-tooltip {
  position: absolute;
  background: #4f81bd;
  color: #fff;
  width: 200px;
  text-align: center;
  white-space: nowrap;
  padding: 5px;
  border-radius: 1px;
  transition: 0.4s;
  -o-transition: 0.4s;
  -moz-transition: 0.4s;
  -webkit-transition: 0.4s;
}

.vis-item .vis-delete,
.vis-item .vis-delete-rtl {
  position: absolute;
  top: 0;
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  padding: 0 5px;
  cursor: pointer;
  -webkit-transition: background 0.2s linear;
  -moz-transition: background 0.2s linear;
  -ms-transition: background 0.2s linear;
  -o-transition: background 0.2s linear;
  transition: background 0.2s linear;
}

.vis-item .vis-delete {
  right: -24px;
}

.vis-item .vis-delete-rtl {
  left: -24px;
}

.vis-item .vis-delete-rtl:after,
.vis-item .vis-delete:after {
  content: "\00D7";
  color: red;
  font-family: arial, sans-serif;
  font-size: 22px;
  font-weight: 700;
  -webkit-transition: color 0.2s linear;
  -moz-transition: color 0.2s linear;
  -ms-transition: color 0.2s linear;
  -o-transition: color 0.2s linear;
  transition: color 0.2s linear;
}

.vis-item .vis-delete-rtl:hover,
.vis-item .vis-delete:hover {
  background: red;
}

.vis-item .vis-delete-rtl:hover:after,
.vis-item .vis-delete:hover:after {
  color: #fff;
}

.vis-item .vis-drag-center {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: move;
}

.vis-item.vis-range .vis-drag-left {
  position: absolute;
  width: 24px;
  max-width: 20%;
  min-width: 2px;
  height: 100%;
  top: 0;
  left: -4px;
  cursor: w-resize;
}

.vis-item.vis-range .vis-drag-right {
  position: absolute;
  width: 24px;
  max-width: 20%;
  min-width: 2px;
  height: 100%;
  top: 0;
  right: -4px;
  cursor: e-resize;
}

.vis-range.vis-item.vis-readonly .vis-drag-left,
.vis-range.vis-item.vis-readonly .vis-drag-right {
  cursor: auto;
}

.vis-itemset {
  position: relative;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.vis-itemset .vis-background,
.vis-itemset .vis-foreground {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: visible;
}
</style>