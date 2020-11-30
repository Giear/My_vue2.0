<template>
  <div>
    <van-nav-bar
      title="审批记录"
      left-text=""
      left-arrow
      @click-left="goBack"
      :class="{ custom: true }"
    />

    <van-loading
      color="#1989fa"
      size="45"
      :style="{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }"
      v-if="loading"
    />
    <div class="content">
      <el-collapse v-model="activeNames">
        <el-collapse-item
          v-for="(item, index) in listData"
          :key="item.userId"
          v-bind="{ title: '节点名称：' + item.userGroup, name: index }"
          :class="{ collapse: true }"
        >
          <div v-text="'节点处理人：' + item.userName"></div>
          <div v-text="'处理时间：' + item.createTime"></div>
          <div v-text="'审核意见：' + item.result"></div>
          <div v-text="'意见内容：' + item.content"></div>
        </el-collapse-item>
      </el-collapse>
      <div
        v-if="!loading && listData.length === 0"
        :style="{
          color: '#666',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }"
      >
        暂无数据！
      </div>
    </div>
  </div>
</template>

<script>
import request from "../utils/request";

export default {
  name: "UnifieRemark",

  created() {
    this.getListData();
  },

  data() {
    return {
      loading: false,
      listData: [],
      activeNames: []
    };
  },

  methods: {
    goBack() {
      history.go(-1);
    },
    getListData() {
      this.loading = true;
      request
        .get(`/rolemanage/rolechange/getFlowRecord/${this.$route.query.id}`)
        .then(response => {
          this.listData = response.data.data;
          response.data.data.forEach((item, index) => {
            this.activeNames.push(index);
          });
          this.loading = false;
        });
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

.collapse {
  padding: 0 10px;
  color: #666;
  ::v-deep {
    .el-collapse-item__header {
      font-weight: bold;
      font-size: 14px;
      color: #666;
    }
    .el-collapse-item__content {
      color: #666;
      text-align: left;
    }
  }
}
</style>
