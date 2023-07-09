<template>
  <div class="heading">
    Advanced Training
    For <div class="headingFormat">Medicine <div class="rec1"></div></div> And
    Nursing Made
    Easy
    
    <div class="rec2"></div>
  </div>
  <div class="rec3"></div>
  <div class="img2">
    <img
      src="../assets/images/medical-worker.png"
      alt=""
      width="880px"
      height="680px"
    />
    <div class="Num">
      <img
        class="img13"
        src="../assets/images/Ellipse6.png"
        alt=""
        width="40px"
      />
      <img class="img14" src="../assets/images/call.png" alt="" />
      <div class="hour">24 hour service</div>
      <div class="number">023-89898178</div>
    </div>
  </div>
  <div class="statement">Your eLearning platform for medicine and care</div>
  <div class="rec4">
    <div class="rec5">
      <div class="img3">
        <img
          src="../assets/images/Vector.png"
          alt=""
          width="13px"
          height="10px"
        />
      </div>
    </div>
    <p class="check">Regular Checkup</p>
  </div>
  <div class="rec6"><p>Request A Demo</p></div>
</template>
<script>
export default {
  name: "MainCom",
};
</script>
<style>
.headingFormat{
    z-index: 10;
    display: inline-block;
    position: relative;
}
.heading {
    
  position: absolute;
  width: 680px;
  height: 443px;
  left: 17px;
  top: 120px;
  font-family: "poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 112px;
  color: #1f1f1f;
}
.rec1 {
    z-index: 5;
  position: absolute;
  width: 280px;
  height: 20px;
  left: 2px;
  top: 70px;
  background: #eb91de;
  opacity: 0.5;
}
.rec2 {
  position: absolute;
  width: 240px;
  height: 20px;
  left: 122px;
  top: 300px;
  background: #eb91de;
  opacity: 0.5;
}

.rec3 {
  position: absolute;
  width: 410px;
  height: 600px;
  left: 830px;
  top: 140px;
  background: linear-gradient(180deg, #f5beed 0%, #cacbff 100%);
  box-shadow: 15px 8px 45px rgba(126, 129, 234, 0.11);
  border-radius: 12px 12px 0px 0px;
}
.img2 {
  position: absolute;
  left: 530px;
}
.Num {
  position: absolute;
  width: 210px;
  height: 56px;
  top: 617px;
  left: 492px;
  border-radius: 12px;
  border: 1px solid #ffdefa;
  background-color: #ffffff;
}
.img13 {
  position: absolute;
  left: 7px;
  top: 7.5px;
}
.img14 {
  position: absolute;
  left: 15px;
  top: 17px;
}
.hour {
  position: absolute;
  left: 62px;
  top: 5.5px;
  width: 107px;
  height: 24px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #7e81ea;
}
.number {
  position: absolute;
  top: 27px;
  left: 64px;
  width: 129px;
  height: 27px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}
.statement {
  position: absolute;
  width: 567px;
  height: 36px;
  left: 70px;
  top: 580px;
  font-family: "poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #403d3d;
}
.rec4 {
  box-sizing: border-box;
  position: absolute;
  width: 210px;
  height: 47px;
  left: 580px;
  top: 680px;
  background: #ffffff;
  border: 1px solid #e0e1ff;
  box-shadow: 2px 3px 30px rgba(139, 141, 249, 0.1);
  border-radius: 12px;
}
.rec5 {
  position: absolute;
  height: 33px;
  width: 33px;
  left: 6%;
  right: 50.31%;
  top: 15.63%;
  bottom: 83.59%;
  border-radius: 12px;
  background: #8b8df9;
}
.img3 {
  position: absolute;
  left: 9px;
  top: 5px;
}
.check {
  position: relative;
  width: 157px;
  height: 27px;
  top: -9px;
  left: 45px;
  font-family: "poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
}
.rec6 {
  position: absolute;
  width: 210px;
  height: 55px;
  left: 170px;
  top: 640px;
  background: linear-gradient(95.93deg, #f39ae6 5.71%, #8a8dfa 93.72%);
  box-shadow: 2px 3px 30px rgba(126, 129, 234, 0.26);
  border-radius: 14px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 17px;
}
</style>
