<template>
  <div>
    <van-nav-bar
      title="工单查询"
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
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <div class="content">
        <el-card
          class="box-card"
          v-for="(item, index) in listData"
          :key="item.id"
        >
          <div slot="header" class="clearfix">
            <span>工单标题：{{ item.title }}</span>
          </div>
          <div><span class="mix-span">工单号</span>：{{ item.workId }}</div>
          <div>
            <span class="mix-span">申请人</span>：{{ item.applicantName }}
          </div>
          <div><span class="mix-span">部门</span>：{{ item.deptName }}</div>
          <div>
            <span class="mix-span">创建时间</span>：{{ item.createTime }}
          </div>
          <div><span class="mix-span">工单状态</span>：{{ item.status }}</div>
          <div><span class="mix-span">当前节点</span>：{{ item.step }}</div>
          <div>
            <span class="mix-span">当前处理人员</span>：{{
              item.handleUserName
            }}
          </div>
          <el-button
            style="float: right; padding: 3px 0;margin-right: 10px"
            type="text"
            >详情</el-button
          >
          <el-button
            style="float: right; padding: 3px 0;margin-right: 10px"
            type="text"
            v-on:click="goToDetail(item.id)"
            >审批记录</el-button
          >
        </el-card>
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
    </van-pull-refresh>
  </div>
</template>

<script>
import request from "../utils/request";

export default {
  name: "UnifileQuery",

  created() {
    this.getListData();
  },

  data() {
    return {
      loading: null,
      currentPage: 10,
      listData: []
    };
  },

  methods: {
    goBack() {
      history.go(-1);
    },
    getListData() {
      this.loading = true;
      request
        .get(`/rolemanage/rolechange/selectManageList/1/${this.currentPage}`, {
          type: "all"
        })
        .then(response => {
          this.listData = response.data.data.infos;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    onRefresh() {
      this.currentPage = 10;
      this.getListData();
    },
    goToDetail(id) {
      this.$router.push({ name: "UnifieRemark", query: { id: id } });
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
  .is-always-shadow {
    margin: 0 10px 10px 10px;
    text-align: left;
    font-size: 14px;
    color: #666;
  }
  .el-card__body {
    .mix-span {
      display: inline-block;
      min-width: 45px;
    }
  }
}
</style>
