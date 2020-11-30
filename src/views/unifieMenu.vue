<template>
  <div>
    <van-nav-bar
      title="统一用户"
      left-text=""
      left-arrow
      @click-left="goBack"
      id="reset"
      :class="{ custom: true }"
    />

    <div class="content">
      <el-row>
        <el-col :span="24">
          <div
            v-for="item in orderArr"
            :key="item.text"
            class="grid-content bg-purple-dark"
            @click="goToDetail(item)"
          >
            <span class="bg-purple-dark-text">{{ item.text }}</span>
            <i class="el-icon-arrow-right bg-purple-dark-icon"></i>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "UnifileMenu",

  data() {
    return {
      orderArr: [
        {
          text: "待办工单"
        },
        {
          text: "已办工单"
        },
        {
          text: "工单查询"
        },
        {
          text: "我的工单"
        }
      ]
    };
  },

  methods: {
    goBack() {
      history.go(-1);
    },
    goToDetail(item) {
      if (item.text === "工单查询") {
        this.$router.push("/unifieQuery");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.custom {
  background-color: #465485;

  & ::v-deep {
    .van-nav-bar__left {
      .van-icon {
        color: #fff;
      }
      .van-nav-bar__text {
        color: #fff;
      }
    }
    .van-nav-bar__title {
      color: #fff;
    }
  }
}
.content {
  padding: 10px;

  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    /*border-radius: 4px;*/
  }

  .bg-purple-dark {
    box-shadow: 0px 1px 3px #666;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    text-align: right;
    margin-bottom: 4px;

    &-text {
      display: block;
      height: 100%;
      float: left;
    }
    &-icon {
      font-size: 20px;
    }
  }
}
</style>
