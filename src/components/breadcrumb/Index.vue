<template>
  <Breadcrumb>
    <BreadcrumbItem to="/">首页</BreadcrumbItem>
    <span v-for="item in $route.matched" :key="item.name">
      <BreadcrumbItem
        v-if="$route.name !== 'home' && item.name !== ''"
        :to="item.path"
        >{{ item.meta.title }}</BreadcrumbItem
      >
    </span>
  </Breadcrumb>
</template>
<script>
export default {
  data() {
    return {
      breadcrumbList: []
    };
  }
};
</script>
