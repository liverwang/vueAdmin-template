<template>
  <div class="app-container">
    <el-badge :value="sampleState" class="item">
      <el-button size="small" @click="addAction">添加评论</el-button>
    </el-badge>

    <el-badge :value="someGetter" class="item">
      <el-button size="small" @click="clearAction">清除</el-button>
    </el-badge>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  components: {},
  computed: {
    // 通过getter从store派生数据
    ...mapGetters('sample', [
      'sampleState',
      'someGetter'
    ]),
    // 通过state从store直接提取数据
    ...mapState('sample', {
      stateCount: 'someGetter'
    })
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions('sample', {
      addAction: 'AddAction',
      clearAction: 'ClearAction'
    })
  }
}
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>

