<template>
  <div class="doughnut-chart">
      <BasicContainer>
        <Row>
            <Col span="12"><div id="Doughnut1" class="doughnut"></div></Col>
            <Col span="12"><div id="Doughnut2" class="doughnut"></div></Col>
        </Row>
        
      </BasicContainer>
  </div>
</template>

<script>
import BasicContainer from "@vue-materials/basic-container";
export default {
  components: { BasicContainer },
  mounted() {
    let chart1 = this.$echarts.init(document.getElementById("Doughnut1"));
    let chart2 = this.$echarts.init(document.getElementById("Doughnut2"));
    chart1.resize();
    chart1.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        x: "left",
        data: ["直接访问", "邮件营销", "联盟广告", "视频广告"]
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["50%", "70%"],
          color: ['#2A60E4', ' #EF4A80', '#5DE09A', '#FFB235'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" }
          ]
        }
      ]
    });
    window.addEventListener("resize", function() {
      chart1.resize();
    });

    chart2.resize();
    chart2.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        x: "left",
        data: ["直接访问", "邮件营销", "联盟广告", "视频广告"]
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["50%", "70%"],
          color: ['#2A60E4', ' #EF4A80', '#5DE09A', '#FFB235'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" }
          ]
        }
      ]
    });
    window.addEventListener("resize", function() {
      chart2.resize();
    });
  }
};
</script>

<style lang="less" scoped>
.doughnut-chart{
  .doughnut {
    min-height: 300px;
  }
}
</style>
