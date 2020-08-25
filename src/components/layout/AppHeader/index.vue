<template>
  <div class="header">
    <div class="logo">
      <a href="https://github.com/chenmingzhen" title="博客社区">
        <img src="@/assets/image/logo.png" alt="Ethan" height="50px" />
        <p>博客社区</p></a
      >
    </div>
  </div>
</template>
<style scoped>
.mxg-header {
  width: 100%;
  height: 80px;
  border-top: 3px solid #345dc2;
  z-index: 10;
}
.logo {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 15px;
}
.logo > a {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.logo >a >p{
  color: black;
  font-size: 1.5rem;
  margin-left: .5rem;
  font-weight: 700;
}

</style>