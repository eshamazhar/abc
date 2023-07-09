<template>
  <div class="img1"><img src="../assets/images/logo-11.png" alt="" /></div>
  <nav>
    <div class="navBar">
      <RouterLink to="/" class="nav1">Home</RouterLink>
      <RouterLink to="/course" class="nav2">Courses</RouterLink>
      <RouterLink to="/info" class="nav3">Information</RouterLink>
    </div>
    <div class="login"></div>
    <RouterLink to="/login" class="nav4">Log In</RouterLink>
  </nav>
</template>
<script>
export default {
  name: "HeaderCom",
};
</script>
<style>
.img1 {
  position: absolute;
  top: 13px;
  left: 5px;
}
.navBar {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 26px;
  color: #1f1f1f;
}
.nav1 {
  position: absolute;
  width: 52px;
  height: 26px;
  left: 700px;
  top: 47px;
  color: #7e81ea;
}
.nav2 {
  position: absolute;
  width: 32px;
  height: 26px;
  left: 800px;
  top: 47px;
}
.nav3 {
  position: absolute;
  widows: 105px;
  height: 26px;
  left: 900px;
  top: 47px;
}

.login {
  box-sizing: border-box;
  position: absolute;
  width: 190px;
  height: 45px;
  left: 1050px;
  top: 33px;
  background: #ffffff;
  border: 1.8px solid #eb91de;
  box-shadow: 2px 3px 30px rgba(235, 145, 222, 0, 11);
  border-radius: 14px;
}

.nav4 {
  position: absolute;
  width: 151px;
  height: 27px;
  left: 1070px;
  top: 41px;
  font-family: "poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #da74cb;
}
</style>
