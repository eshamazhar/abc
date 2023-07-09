<template>
    <p class="heading3">Care</p>
        <div class="container">
        <div class="course">
            <img class="img6" src="../assets/images/prophylaxis.png" alt="">
            <div class="courseheading">Decubitus Prophylaxis</div>
            <div class="des">{{ paragraph }}</div>
            <button @click="$router.push('/info')">4 Modules</button> 
        </div>
        <div class="course">
            <img class="img6" src="../assets/images/prophylaxis2.png" alt="">
            <div class="courseheading">Decubitus Prophylaxis</div> 
            <div class="des">{{ paragraph }}</div>
            <button @click="$router.push('/info')">3 Modules</button> 
        </div>
        <div class="course">
            <img class="img6" src="../assets/images/fallPrevention.png" alt="">
            <div class="courseheading">Fall Prevention</div> 
            <div class="des">{{ paragraph }}</div>
            <button @click="$router.push('/info')">3 Modules</button> 
        </div>
        <div class="course">
            <img class="img6" src="../assets/images/prophylaxis3.png" alt="">
            <div class="courseheading">Decubitus Prophylaxis</div> 
            <div class="des">{{ paragraph }}</div>
            <button @click="$router.push('/info')">4 Modules</button> 
        </div>
        <div class="course">
            <img class="img6" src="../assets/images/perception.png" alt="">
            <div class="courseheading">Perception</div> 
            <div class="des">{{ paragraph }}</div>
            <button @click="$router.push('/info')">6 Modules</button> 
        </div>
        <div class="course">
            <img class="img6" src="../assets/images/preception2.png" alt="">
            <div class="courseheading">Perception</div> 
            <div class="des">{{ paragraph }}</div>
            <button @click="$router.push('/info')">4 Modules</button> 
        </div>
        <div class="course">
            <img class="img6" src="../assets/images/fallPreception2.png" alt="">
            <div class="courseheading">Fall Prevention</div> 
            <div class="des">{{ paragraph }}</div>
            <button @click="$router.push('/info')">5 Modules</button> 
        </div>
        <div class="course">
            <img class="img6" src="../assets/images/prophylaxis4.png" alt="">
            <div class="courseheading">Decubitus Prophylaxis</div> 
            <div class="des">{{ paragraph }}</div>
            <button @click="$router.push('/info')">3 Modules</button> 
        </div>
    </div>
</template>
<script>
export default{
    name:'careCom',
    data(){
        return{
            paragraph:'Certain internet providers exploit  that fill text cannot be recognized utomatic in earlier times.'
        }
    },
}
</script>
<style>
    .heading3{
    position: absolute;
    width: 70px;
    height: 33px;
    left: 70px;
    top: 415px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 33px;
    color: #363636
}
.course{
    width: 260px;
    height: 350px;
    background: #FFFFFF;
    border: 1.2px solid #DEDFFF;
    box-shadow: 2px 3px 26px rgba(126, 129, 234, 0.12);
    border-radius: 15px
}
.container{
    position: absolute;
    top: 495px;
    left: 84px;
    display: grid;
    grid-template-columns:260px 260px 260px 260px;
    grid-gap: 20px;
    margin: 10px;
}
.img6{
    margin-top: 5px;
    width: 242px;
    height: 144px;
}
.courseheading{
    position: relative;
    top: 7px;
    left: 13px;
    width: 211px;
    height: 26px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 26px;
    color: #363636; 
    text-align:left;
}
.des{
    position: relative;
    top: 13px; 
    left: 22px; 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #565656; 
    text-align:left ;
    width: 230px; 
}
 button{
    position:relative;
left: -60px;
width: 109.36697387695312px;
height: 42px;
top: 16px;
background: #EFECFA;
border-radius: 10px;
border: none;
font-family: Poppins;
font-size: 14px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
color: #4C2ACF;
} 
</style>