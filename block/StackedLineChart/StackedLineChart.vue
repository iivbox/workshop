<template>
  <div class="stacked-line-chart">
      <BasicContainer>
        <div id="StackedLineChart" class="stacked-line-chart"></div>
      </BasicContainer>
  </div>
</template>

<script>
import BasicContainer from "@vue-materials/basic-container";
export default {
  components: { BasicContainer },
  mounted() {
    let chart = this.$echarts.init(document.getElementById("StackedLineChart"));

    chart.resize();
    chart.setOption({
      title: {
        text: "折线图堆叠"
      },
      tooltip: {
        trigger: "axis",
        textStyle: {
          width: 200,
          height: 28,
          lineHeight: 28
        },
        axisPointer: {
          type: "shadow",
          shadowStyle: { color: "#EBF0FB", opacity: 0.6 }
        }
      },
      legend: {
        data: ["邮件营销", "联盟广告"],
        textStyle: {
          fontSize: 12,
          color: "#001362",
          lineHeight: 12
        }
      },
      grid: {
        left: "0%",
        right: "0%",
        bottom: "3%",
        containLabel: true
      }, // 调整上下左右留白

      calculable: true,
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        axisTick: {
          length: 3,
          lineStyle: {
            color: "#2A60E4",
            width: 4,
            shadowOffsetY: 3,
            shadowColor: "#2A60E4"
          },
          inside: true,
          margin: 10,
          type: "dashed"
        },

        axisLine: {
          lineStyle: {
            color: "#D4DFFA",
            width: 2
          }
        },

        axisLabel: {
          // 坐标值得具体的颜色
          formatter: "{value}",
          lineHeight: 50,
          textStyle: {
            color: "#596597"
          }
        }
      },
      yAxis: [
        {
          axisLine: {
            show: false
          },
          axisTick: { show: false },
          axisLabel: {
            // 坐标值得具体的颜色
            textStyle: {
              fontSize: "10px",
              color: "#2E334A",
              lineHeight: "10px"
            },
            formatter: "{value}"
          },
          splitLine: {
            lineStyle: {
              // 使用深浅的间隔色
              color: "#2A60E4",
              opacity: 0.1,
              type: "solid"
            }
          },
          type: "value",
          position: "left"
        },

        {
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            textStyle: {
              fontSize: "10px",
              color: "#2E334A",
              lineHeight: "10px"
            },
            formatter: "{value}"
          },
          splitLine: {
            lineStyle: {
              // 使用深浅的间隔色
              color: "#6BD29B",
              opacity: 0.1,
              type: "solid"
            }
          },
          type: "value",
          position: "right"
          // splitNumber: 10,
        }
      ],
      series: [
        {
          name: "邮件营销",
          type: "line",
          color: "#2d8cf0",
          smooth: true,
          yAxisIndex: 0,
          symbol: "circle",
          symbolSize: 2,
          itemStyle: {
            normal: {
              color: "#2A60E4",
              lineStyle: {
                color: "#2A60E4",
                width: 2,
                shadowColor: "rgba(0,0,0,0.25)",
                shadowBlur: 15,
                shadowOffsetY: 8
              }
            }
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "联盟广告",
          type: "line",
          color: "#19be6b",
          smooth: true,
          yAxisIndex: 1,
          symbol: "circle",
          symbolSize: 2,
          itemStyle: {
            normal: {
              color: "#6BD29B",
              lineStyle: {
                color: "#6BD29B",
                width: 2,
                shadowColor: "rgba(0,0,0,0.25)",
                shadowBlur: 15,
                shadowOffsetY: 8
              }
            }
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ]
    });
    window.addEventListener("resize", function() {
      chart.resize();
    });
  }
};
</script>

<style lang="less" scoped>
.stacked-line-chart {
  min-height: 300px;
}
</style>
