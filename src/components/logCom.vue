<template>
    <div>
        <div class="rectangle">
            <div class="img4"><img src="../assets/images/logo-13.png" alt=""></div>
            <div class="img5"><img src="../assets/images/Group48179.png" alt=""></div>
            <div class="t1">Meda Further Education</div>
            <div class="t2">Your E-learning Platform For Medicine And Care</div>
        </div>
        <div class="hd">log in</div>
        <p class="log name">Username</p>
        <div class="box1"><input type="text" v-model="name"></div> 
        <p class="log pass">Password</p>
        <div class="box2"><input type="text" v-model="password"></div>
        <p class="forgot">Forgot Password</p>
        <button class="box3"><div class="btnText">Log In</div></button>
        <div class="newfacility">You Want To Create A New Facility?<p class="register">Register Here</p></div>
    </div>
</template>
<script>
export default{
    name:'logCom',
    data(){
        return {
            name:null,
            password:null,
        }
    }
}
</script>
<style>
.rectangle{
    position: absolute;
    width: 600px;
    height: 607px;
    left: 70px;
    top: 200px;
    background: linear-gradient(141.98deg, #EB91DE 0%, #9194EF 99.54%);
}
.img4{
    position: absolute;
    left: 2px;
}
.img5{
    position: absolute;
left: 8%;
top: 100px;
}
.t1{
    position: absolute;
width: 292px;
height: 37px;
left: 150px; 
top: 480px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 37px;
color: #FFFFFF
}
.t2{
    position: absolute;
    width: 309px;
    height: 26px;
    left: 140px;
    top: 530px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 26px;
    text-align: center;
    color: #F8F7FF
}
.hd{
    position: absolute;
    width: 113px;
    height: 57px;
    left: 900px;
    top: 230px; 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;
    text-transform: capitalize;
    color: #1F1F1F;
}
.log{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    text-transform: capitalize;
    color: #757575;
}
.name{
    position: absolute;
    width: 78px;
    height: 23px;
    left: 800px;
    top: 310px;
}
.pass{
    position: absolute;
    width: 73px;
    height: 23px;
    left: 800px;
    top: 415px;
}
input[type='text']{
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    box-shadow: 2px 3px 24px rgba(226, 226, 226, 0.22);
    border-radius: 15px;
    width: 400px;
    height: 50px;
    box-sizing: border-box;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    text-transform: lowercase; 
    color: #1F1F1F;
    padding-left:10px;
}
.box1{
    position: absolute;
    left: 800px;
    top: 360px;
}
.box2{ 
    position: absolute;
    left: 800px;
    top: 465px;
}
.forgot{
    position: absolute;
    width: 134px;
    height: 23px;
    left: 1065px;
    top: 520px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    text-transform: capitalize;
    color: #EB91DE 
}
.box3{
    position: absolute;
    width: 146px;
    height: 56px;
    left: 940px;
    top: 590px;
    background: linear-gradient(95.93deg, #F39AE6 5.71%, #8A8DFA 93.72%);
    box-shadow: 2px 3px 30px rgba(126, 129, 234, 0.26);
    border-radius: 14px;
}
.btnText{
    position: absolute;
    width: 60px;
    height: 30px;
    left: 40px;
    top: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color:#FFFFFF;
}
.newfacility{
    position: absolute;
width: 368px;
height: 23px;
left: 825px;
top: 660px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
color: #706A6A
}
.register{
    color:#7E81EA;
    cursor: pointer;
} 
</style>