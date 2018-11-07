<template>
  <div class="data-display">
    <basic-container>
      <Row :span="24">
        <Col v-for="(item,index) in option.data" :key="index" :span="option.span">
          <div class="item" :style="{color:option.color}">
            <h5 class="count">{{item.count}}</h5>
            <span class="splitLine" />
            <p class="title">{{item.title}}</p>
          </div>
        </Col>
      </Row>

    </basic-container>
  </div>
</template>

<script>
import BasicContainer from '@vue-materials/basic-container';
export default {
  components: { BasicContainer },
  name: 'DataDisplay',
  data() {
    return {
      option: {
        span: 8,
        color: '#15A0FF',
        data: [
          {
            count: 100,
            title: '日活跃数',
          },
          {
            count: '3,000',
            title: '月活跃数',
          },
          {
            count: '20,000',
            title: '年活跃数',
          },
        ],
      },
    };
  },

  created() {},
};
</script>
<style lang="less" scoped>
.item {
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  text-align: center;
}

.count {
  margin: 12px 0;
  font-weight: bold;
  font-size: 32px;
  color: #15A0FF;
}

.title {
  color: #999;
}

.splitLine {
  display: block;
  margin: 0 auto;
  width: 24px;
  height: 1px;
  background: #9B9B9B;
}
</style>

