<template>
  <view class="uv-doc">
    <uv-platform
      html
      weixin
    />
    <uv-section title="基础用法">
      <uv-sticky custom-class="a">
        <view class="wrapper">
          <uv-button>基础用法</uv-button>
        </view>
      </uv-sticky>
    </uv-section>
    <uv-section title="吸顶距离">
      <uv-sticky :offset-top="50" custom-class="b">
        <uv-button type="info" custom-style="margin-left: 240rpx;">吸顶距离
        </uv-button>
      </uv-sticky>
    </uv-section>
    <!--<uv-section title="指定容器">-->
    <!--  <view-->
    <!--    id="container"-->
    <!--    style="height: 150px;"-->
    <!--  >-->
    <!--    <uv-sticky>-->
    <!--      <uv-button type="warning">-->
    <!--        指定容器-->
    <!--      </uv-button>-->
    <!--    </uv-sticky>-->
    <!--  </view>-->
    <!--</uv-section>-->
    <view class="padding"></view>
  </view>
</template>

<script>
import uvSticky from '@/components/sticky.vue';
import uvButton from '@/components/button.vue';

export default {
  components: {
    uvSticky,
    uvButton,
  },
};
</script>

<style lang="scss">
  /deep/ .uv-sticky-wrap-fixed .wrapper {
    padding: 0 32rpx;
  }
  .padding {
    height: 200vh;
  }
</style>
