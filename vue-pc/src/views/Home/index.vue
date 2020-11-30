<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend />

    <Rank />
    <Like />
    <Floor />
    <Floor />
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
export default {
  name: "Home",
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
