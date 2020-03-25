<template>

<div class="profile">

 <div class="messages">
   <p class="hello"><i>Thank you <br> <span class="sp1">For Watching</span>  <br> <span class="sp2">My,Profile.!</span></i></p>
 </div>

  <div v-if="base_modal == isshow">
    <basicModals></basicModals>
  </div>

 <div class="rotating-box">
   <div class="single-rb">

     <div class="front-side">
      <div class="profile_mes"  @click="base_modalShow">
           
      </div>
     </div>

     <div class="back-side"  @click="base_modalShow">
      <div class="profile_mes">

      </div>
     </div>

     <div class="left-side"  @click="base_modalShow">
       <div class="profile_mes">

       </div>
     </div>

     <div class="right-side"  @click="base_modalShow">
      <div class="profile_mes">

      </div>
     </div>

     <div class="top-side">
       <div class="profile_mes">

       </div>
     </div>

     <div class="bottom-side"> 
       <div class="profile_mes">

       </div>
     </div>
    
   </div>
 </div>

 
</div>

</template>

<script>
import { mapMutations } from 'vuex';
import basicModals from '@/app1/components/modules/basicModals.vue';
export default {
  name: 'AboutMe',
  components: {
    basicModals
  },

  methods: {
    ...mapMutations('base_modal', {
     base_modalShow: 'show'
    })
  },

  data: () => {
    return {
     
    }
  },
 
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 475px) { /*ウィンドウ幅が最大767pxまでの場合に適用*/
.profile
{
  overflow: auto;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
  background-size: cover;
  display: flex;

  .messages
  {
    margin: 80px 0 0 40px ;
    height: 100vh;
    width:  100%;

    .hello
    {
      font-family: 'Constantia';
      color: gainsboro;
      font-size: 49px;

      .sp1
      {
        margin-left: 30px ;
        color: #fff;
        font-size: 50px;
      }

      .sp2
      {
        margin-left: 70px ;
        color: #fff;
        font-size: 50px;
      }
    }
  }
}
.rotating-box{
  width: 200px;
  height: 400px;
  margin: 300px 0 0 -300px;
  perspective:  400px;

  .single-rb{
    width: 200px;
    animation: rotate 15s linear infinite;
    transform-style: preserve-3d;
    margin: 120px 100px 0 0;


    div{
      position: absolute;
      width: 200px;
      height: 400px;
    }

    .profile_mes{
      width: 200px;
      height: 400px;   
    }

    .front-side{
      transform: translateZ(100px);
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .back-side{
      transform: rotateY(180deg)
      translateZ(100px);
       background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .left-side{
      transform: rotateY(-90deg)
      translateX(-100px);
      transform-origin: left;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .right-side{
      transform: rotateY(90deg)
      translateX(100px);
      transform-origin: right;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .top-side{
      height: 200px;
      transform: rotateX(-90deg)
      translateY(-100px);
      transform-origin: top;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .bottom-side{
      height: 200px;
      transform: rotateX(90deg)
      translateY(100px);
      transform-origin: bottom;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    @keyframes rotate{
      0%{transform: rotateY(0);}
      100%{transform: rotateY(360deg);}   
    }
  }
}
}


@media screen and (min-width: 475px) { /*ウィンドウ幅が最大767pxまでの場合に適用*/
.profile
{
  overflow: auto;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
  background-size: cover;
  display: flex;

  .messages
  {
    margin: 80px 0 0 40px ;
    height: 100vh;
    width:  100%;

    .hello
    {
      font-family: 'Constantia';
      color: gainsboro;
      font-size: 49px;

      .sp1
      {
        margin-left: 70px ;
        color: #fff;
        font-size: 50px;
      }

      .sp2
      {
        margin-left: 130px ;
        color: #fff;
        font-size: 50px;
      }
    }
  }
}


.rotating-box{
  width: 300px;
  height: 400px;
  margin: 300px 0 0 -450px;
  perspective:  600px;

  .single-rb{
    width: 300px;
    animation: rotate 15s linear infinite;
    transform-style: preserve-3d;
    margin: 120px 100px 0 0;


    div{
      position: absolute;
      width: 300px;
      height: 400px;
    }

    .profile_mes{
      height: 400px;
      width: 300px;
    }

    .front-side{
      transform: translateZ(150px);
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .back-side{
      transform: rotateY(180deg)
      translateZ(150px);
       background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .left-side{
      transform: rotateY(-90deg)
      translateX(-150px);
      transform-origin: left;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .right-side{
      transform: rotateY(90deg)
      translateX(150px);
      transform-origin: right;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .top-side{
      height: 150px;
      transform: rotateX(-90deg)
      translateY(-150px);
      transform-origin: top;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .bottom-side{
      height: 150px;
      transform: rotateX(90deg)
      translateY(150px);
      transform-origin: bottom;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    @keyframes rotate{
      0%{transform: rotateY(0);}
      100%{transform: rotateY(360deg);}   
    }
  }
}
}


@media screen and (min-width: 800px) { /*ウィンドウ幅が最大767pxまでの場合に適用*/
.profile
{
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
  background-size: cover;
  display: flex;

  .messages
  {
    margin: 80px 0 0 40px ;
    height: 100vh;
    width: 50vw;

    .hello
    {
      font-family: 'Constantia';
      color: gainsboro;
      font-size: 49px;

      .sp1
      {
        margin-left: 70px ;
        color: #fff;
        font-size: 50px;
      }

      .sp2
      {
        margin-left: 130px ;
        color: #fff;
        font-size: 60px;
      }
    }
  }
}
.rotating-box{
  width: 200px;
  height: 400px;
  margin: 10px auto;
  perspective:  400px;

  .single-rb{
    width: 200px;
    animation: rotate 15s linear infinite;
    transform-style: preserve-3d;
    margin: 120px 100px 0 0;


    div{
      position: absolute;
      width: 200px;
      height: 400px;
    }

    .profile_mes{
      width: 200px;
      height: 400px;   
    }

    .front-side{
      transform: translateZ(100px);
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .back-side{
      transform: rotateY(180deg)
      translateZ(100px);
       background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .left-side{
      transform: rotateY(-90deg)
      translateX(-100px);
      transform-origin: left;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .right-side{
      transform: rotateY(90deg)
      translateX(100px);
      transform-origin: right;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .top-side{
      height: 200px;
      transform: rotateX(-90deg)
      translateY(-100px);
      transform-origin: top;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .bottom-side{
      height: 200px;
      transform: rotateX(90deg)
      translateY(100px);
      transform-origin: bottom;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    @keyframes rotate{
      0%{transform: rotateY(0);}
      100%{transform: rotateY(360deg);}   
    }
  }
}
}


@media screen and (min-width: 1000px) { /*ウィンドウ幅が767px以上の場合に適用*/
.profile
{
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
  background-size: cover;
  display: flex;

  .messages
  {
    margin: 80px 0 0 40px ;
    height: 100vh;
    width: 50vw;

    .hello
    {
      font-family: 'Constantia';
      color: gainsboro;
      font-size: 49px;

      .sp1
      {
        margin-left: 70px ;
        color: #fff;
        font-size: 50px;
      }

      .sp2
      {
        margin-left: 130px ;
        color: #fff;
        font-size: 60px;
      }
    }
  }
}


.rotating-box{
  width: 400px;
  height: 400px;
  margin: 10px auto;
  perspective:  800px;

  .single-rb{
    width: 400px;
    animation: rotate 15s linear infinite;
    transform-style: preserve-3d;
    margin: 120px 100px 0 0;


    div{
      position: absolute;
      width: 400px;
      height: 400px;
    }

    .profile_mes{
      height: 400px;
      width: 400px;
    }

    .front-side{
      transform: translateZ(200px);
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .back-side{
      transform: rotateY(180deg)
      translateZ(200px);
       background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .left-side{
      transform: rotateY(-90deg)
      translateX(-200px);
      transform-origin: left;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .right-side{
      transform: rotateY(90deg)
      translateX(200px);
      transform-origin: right;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .top-side{
      transform: rotateX(-90deg)
      translateY(-200px);
      transform-origin: top;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    .bottom-side{
      transform: rotateX(90deg)
      translateY(200px);
      transform-origin: bottom;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;
    }

    @keyframes rotate{
      0%{transform: rotateY(0);}
      100%{transform: rotateY(360deg);}   
    }
  }
}
}



</style>
