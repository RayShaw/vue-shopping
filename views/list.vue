<template>
  <div>
    <Product v-for="item in list" :info="item" :key="item.id"></Product>
  </div>
</template>
<script>
import Product from "../components/product.vue";
export default {
  components: { Product },
  computed: {
    list() {
      // 从Vuex获取商品列表数据
      return this.$store.state.productList;
    }
  },
  mounted() {
    // 初始化时 通过Vuex的action请求数据
    this.$store.dispatch("getProductList");
  }
};
</script>
