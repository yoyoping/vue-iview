<template>
  <Breadcrumb>
    <BreadcrumbItem to="/">首页</BreadcrumbItem>
    <BreadcrumbItem v-if="$route.name !== 'home' && item.name !== ''" :to="item.path" v-for="item in $route.matched" :key="item.name">{{item.meta.title}}</BreadcrumbItem>
  </Breadcrumb>
</template>
<script>
import { Breadcrumb, BreadcrumbItem } from 'iview'
export default {
  components: {
    Breadcrumb, BreadcrumbItem
  },
  data () {
    return {
      breadcrumbList: []
    }
  }
}
</script>
