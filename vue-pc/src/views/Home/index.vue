<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend />

    <Rank />
    <Like />
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor" />

    <Brand />
  </div>
</template>

<script>
import Brand from "./Brand/Brand";
import Like from "./Like/Like";
import Floor from "./Floor/Floor";
import ListContainer from "./ListContainer/ListContainer";
import Rank from "./Rank/Rank";
import TodayRecommend from "./TodayRecommend/TodayRecommend";
import TypeNav from "@comps/TypeNav";
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState({
      floors: (state) => state.home.floors,
    }),
  },
  methods: {
    ...mapActions(["getFloors"]),
  },
  mounted() {
    this.getFloors();
  },
  components: {
    TodayRecommend,
    Brand,
    Like,
    ListContainer,
    Rank,
    Floor,
    TypeNav,
  },
};
</script>

<style lang="less" scoped>
</style>
