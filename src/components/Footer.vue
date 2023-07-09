<template>
    <div>
        <div class="footer">
            
            <img class="img7" src="../assets/images/footer.png" alt="">
            <img class="image8" src="../assets/images/logo-13.png" alt="">
            <div class="text">The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace. </div>
            <div class="img15">
                <img class="img16" src="../assets/images/Ellipse7.png" alt="">
                <img class="img16" src="../assets/images/Ellipse7.png" alt="">
                <img class="img16" src="../assets/images/Ellipse7.png" alt="">
                <img class="img16" src="../assets/images/Ellipse7.png" alt="" >
            </div>
            <div class="img17">
                    <img class="img18" src="../assets/images/facbook.png" alt="">
                    <img class="img18" src="../assets/images/twitter.png" alt="">
                    <img class="img18" src="../assets/images/instagram.png" alt="">
                    <img class="img18" src="../assets/images/in.png" alt="">
                </div>
            <div>
                <div class="head ser">Services</div>
                <div class="info ser1">Primary Care</div>
                <div class="info ser2">Virtual Care</div>
                <div class="info ser3">Covid 19 Test</div>
                <div class="info ser4">Insurance</div>
            </div> 
            <div>
                <div class="head about">About</div>
                <div class="info about1">Our Story</div>
                <div class="info about2">Benefits</div>
                <div class="info about3">Team</div>
                <div class="info about4">Careers</div>
            </div> 
            <div>
                <div class="head contact">Contact Us</div>
                <img class="image10" src="../assets/images/call.png" alt="">
                <div class="info contact1">+4904567890</div>
                <img class="image11" src="../assets/images/sms.png" alt="">
                <div class="info contact2">Info@media.com</div>
                <img class="image12" src="../assets/images/location.png" alt="">
                <div class="info contact3">Lindenstrasse, 1410969 Berlin</div>
            </div>
            <div class="line"></div> 
            <div class="copyright">Copyright 2022 MEDA. All Right Reserved.</div> 
        </div>
    </div>
</template>
<script>
export default{
    name:'FooterCom'
}
</script>
<style>

.img7{
    width: 1266px;
    height: 550px;
}
.footer{
    position: absolute;
    left: -1px;
    top:1230px;  
}
.image8{
    position: absolute;
    top: 150px;
    left: 70px;
}
.text{
    position: absolute;
    width: 350px;
    height: 109px;
    left: 70px;
    top: 240px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 35px;
    color: #FFFCFF;
    text-align: left;
}
.img15{
    position:absolute;
    top:380px;
    left:67px;
    display: flex;
    flex-direction: row;   
}
.img16{
  margin:5px;
  width:45px;
  height:45px;
}
.img17{
    position:absolute;
    top:379px;
    left:65px;
    display: flex;
    flex-direction: row;
}
.img18{
    margin:15px;
    padding:3px;
    width:20px;
    height:23px;
}
.head{
    font-family: 'Poppins';
    font-style: normal;
    color: #FFFFFF;
    font-weight: 600;
    line-height: 30px;
    font-size: 20px;  
}
.ser{
    position: absolute;
    left: 550px;
    width: 113px;
    height: 30px; 
    top: 150px;
}
.info{
    font-family: 'Poppins';
    font-style: normal;
    color:  #FFFCFF;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;  
}
.ser1{
   position:absolute;
   position: absolute;
    width: 105px;
    height: 26px;
    left: 560px;
    top: 195px;
}
.ser2{
    position: absolute;
    width: 95px;    
    height: 26px;
    left: 560px;
    top: 245px;
}
.ser3{
    position: absolute;
    width: 103px;
    height: 26px;
    left: 560px;
    top: 295px;
}
.ser4{
    position: absolute;
    width: 80px;
    height: 26px;
    left: 560px;
    top: 345px;
}
.about{
    position: absolute;
    width: 62px;
    height: 30px;
    left: 800px;
    top: 150px;
}
.about1{
    position: absolute;
    width: 74px;
    height: 26px;
    left: 800px;
    top: 195px;
}
.about2{
    position: absolute;
    width: 64px;
    height: 26px;
    left: 800px;
    top: 245px; 
}
.about3{
    position: absolute;
    width: 46px;
    height: 26px;
    left: 800px;
    top: 295px;
}
.about4{
    position: absolute;
    width: 64px;
    height: 26px;
    left: 800px;
    top: 345px;
}
.contact{
    position: absolute;
    width: 113px;
    height: 30px;
    left: 1000px;
    top: 150px;
}
.image10{
    position:absolute;
    left:1000px;
    top:198px;
}
.contact1{
    position: absolute;
    width: 111px;
    height: 26px;
    left: 1030px;
    top: 195px;
}
.image11{
    position:absolute;
    left:1000px;
    top:248px;
}
.contact2{
    position: absolute;
    width: 134px;
    height: 26px;
    left: 1030px;
    top: 245px;
}
.image12{
    position:absolute;
    left:1000px;
    top:294px;
}
.contact3{
    position: absolute;
    width: 226px;
    height: 26px;
    left: 1030px;
    top: 295px; 
}
.line{
    position: absolute;
    width: 1100px;
    height: 0px;
    left: 90px;
    top: 470px;
    opacity: 0.5;
    border: 1px solid #EEDFFF;
}
.copyright{
    position: absolute;
width: 322px;
height: 27px;
left: 457px;
top: 500px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 27px;
color: #FFFFFF
}
</style>