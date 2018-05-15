<template>
  <div>
    <Tabs value="Unprocessed">
      <TabPane label="未处理" name="Unprocessed">
        <Unprocessed></Unprocessed>
      </TabPane>
      <TabPane label="已处理" name="Processed">
        <Processed></Processed>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
import Unprocessed from './Unprocessed'
import Processed from './Processed'
export default {
  components: {
    Unprocessed, Processed
  },
  data () {
    return {

    }
  }
}
</script>
