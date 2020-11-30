<template>
  <div :style="{ paddingTop: '20px' }">
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      :fit="fits[0]"
    ></el-image>
    <div>
      <p>你好！{{ this.username }}</p>
    </div>

    <el-divider><i class="el-icon-mobile-phone"></i></el-divider>

    <el-row>
      <el-col
        v-for="(item, index) in imgs"
        :key="item.url"
        :style="{
          margin: '0 2.5% 1% 2.5%',
          width: 'calc(90%/2)',
          position: 'relative'
        }"
      >
        <el-card :body-style="{ padding: '0px' }">
          <div v-on:click="goToDetail(item)">
            <img :src="item.url" :style="{ width: '60%' }" class="image" />
            <div style="padding: 0 0 14px 0;font-size: 18px;">
              <span>{{ item.text }}</span>
              <span
                v-if="index === 3"
                :style="{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  color: 'red'
                }"
                >{{ toDo }}</span
              >
            </div>
          </div>
        </el-card>
        <br />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import request from "../utils/request";

export default {
  name: "Main",

  created() {
    this.getUserInfo();
  },

  methods: {
    async getUserInfo() {
      await request
        .post("/portal/user/userLogin", {
          password: "7C6A180B36896A0A8C02787EEAFB0E4C",
          userid: 22000566
        })
        .then(response => {
          this.$store.commit("setUser", response.data.data);
          this.imageAddress = this.$store.state.user.imageAddress;
          this.username = this.$store.state.user.userInfo.username;
        });
      await request
        .get("/workflow/review/getReviewNum", null)
        .then(response => {
          this.$store.commit("setToDo", response.data.data);
          this.toDo = this.$store.state.toDo;
        });
    },

    goToDetail(item) {
      console.log("item:", item);
      item.text === "统一用户" && this.$router.push({ path: "/unifieMenu" });
    }
  },

  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url: this.imageAddress || require("@/images/headerLogImg.png"),
      imgs: [
        { url: require("@/images/home_jixiao.png"), text: "绩效" },
        { url: require("@/images/home_yuangong.png"), text: "员工服务" },
        { url: require("@/images/home_resource.png"), text: "公共资源" },
        {
          url: require("@/images/home_audit.png"),
          text: "工单管理"
        },
        { url: require("@/images/home_qingjia.png"), text: "培训请假" },
        { url: require("@/images/home_job_change.png"), text: "职位变更" },
        { url: require("@/images/home_unifie_menu.png"), text: "统一用户" }
      ],
      username: null,
      toDo: null
    };
  }
};
</script>

<style scoped lang="scss"></style>
