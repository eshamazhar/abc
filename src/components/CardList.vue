<template>
     <div class="container1">
        <CardCom name="Our History"/>
        <CardCom name="Our Vision"/>
        <CardCom name="Technology"/>
     </div> 
</template>
<script>
import CardCom from './CardCom.vue';
export default{
    name:'CardList',
    components:{
        CardCom,
    }
}
</script>
<style>
 .container1{
    display: flex;
    flex-direction: row;
}
</style>