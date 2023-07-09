<template>
        <p class="heading2">Available Courses</p>
        <div class="rec7">
            <div class="point1"><img src="../assets/images/pointed.png" alt=""></div>
            <p class="lines line-1">Here you will find all the approved courses.</p>
           <div class="point2"><img src="../assets/images/pointed.png" alt=""></div>
           <p class="lines line-2">Just click on the topic to be edited to start it.</p>
           <div class="point3"><img src="../assets/images/pointed.png" alt=""></div>
           <p class="lines line-3">You can continue any learning module at any time and at a later time.</p>
           <div class="point4"><img src="../assets/images/pointed.png" alt=""></div>
           <p class="lines line-4">Now click on the desired topic.</p>
           <img class="image" src="../assets/images/Group48219.png" alt="">
        </div>
        
</template>
<script>
export default{
    name:'CoursesInfo'
}
</script>
<style>
.heading2{
    position: absolute;
    width: 277px;
    height: 45px;
    left: 70px;
    top: 80px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    color: #1F1F1F;
}
.rec7{
    position: absolute;
    width: 1100px;
    height: 247px;
    left: 97px;
    top: 170px;
    background:#C1A3F416;
    box-shadow: 2px 3px 28px rgba(126, 129, 234, 0.63);
    border-radius: 25px;
}
.lines{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #363636;
} 
.point1{
    position: absolute;
    left: 20px;
    top: 40px;
}
.point2{
    position: absolute;
    left: 20px;
    top: 90px;
}
.point3{
    position: absolute;
    left: 20px;
    top: 140px;
}
.point4{
    position: absolute;
    left: 20px;
    top: 190px;
}
.line-1{
    position: absolute;
    top: 13px;
    left: 65px;
}
.line-2{
    position: absolute;
    top: 63px;
    left: 65px;
}
.line-3{
    position: absolute;
    top:113px ;
    left: 65px;
}
.line-4{
    position: absolute;
    top:163px ;
    left: 65px;
}
.image{
    position: absolute;
    width: 340px;
    height: 216.2px;
    left: 760px;
}
</style>
