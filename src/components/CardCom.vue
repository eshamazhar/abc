<template>
        <div class="card">
           <div class="naming">{{ name }}</div>
            <div class="rect1"></div>
            <p class="description">I am a piece of text. Click here to add text and edit me. Here you can tell visitors a little more about yourself.</p>
    </div>
    <!-- <img src="../assets/images/our_history.png" alt="">
    <img src="../assets/images/our_vision.png" alt="">
    <img src="../assets/images/technology.png" alt="">  -->
</template>
<script>
export default {
    name:'CardCom',
    props:{
        name:String,
    }
}
</script>
<style>

.card{
    box-sizing: border-box;
    position: relative;
    width: 405px;
    height: 172px;
    left: 2px;
    top: 850px;
    margin: 5px;
    background: #FFFFFF;
    border: 1px solid #FFEBFC;
    box-shadow: 2px 3px 28px rgba(235, 145, 222, 0.15);
    border-radius: 25px;
}
.rect1{
    position: absolute;
    width: 50px;
    height: 50px;
    left: 29px;
    top: 15px;
    background: linear-gradient(180deg, #EB91DE 0%, #F9ACEE 100%);
    border-radius: 12px;
}
.naming{
    font-family: Poppins;
font-size: 23px;
font-weight: 600;
line-height: 35px;
letter-spacing: 0em;
text-align: left;
width:131px;
height:35px;
margin-left:95px;
margin-top:25px
}
.description{
    position: absolute;
    width: 411px;
    height: 93px;
    left: 24px;
    top: 50px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #4E4C4C;
    text-align: left;
}
</style>