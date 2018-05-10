<template>
  <Breadcrumb>
    <BreadcrumbItem to="/">Home</BreadcrumbItem>
    <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
    <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
  </Breadcrumb>
</template>
<script>
import { Breadcrumb, BreadcrumbItem } from 'iview'
export default {
  components: {
    Breadcrumb, BreadcrumbItem
  }
}
</script>
