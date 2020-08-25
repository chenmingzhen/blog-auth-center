<template>
  <div>
    <app-header />
    <div class="main">
      <router-view />
    </div>
    <app-footer />
  </div>
</template>
<script>
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
export default { components: { AppHeader, AppFooter } };
</script> <style >
.mxg-main {
  /* 自动计算高度 100vh 整屏高度-（头部高83+底部高61） */ /* min-height: calc(100vh - 144px); */
  min-height: 700px;
  width: 100%;
}
</style>