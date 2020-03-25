<template>
 <transition name="modal" appear>
    <div class="modal modal-overlay" v-if="isShow">
      <div class="modal-window">
        <div class="modal-content">
           <div class="img">
             <div class="profile-pict">
               <img src="../../assets/photos/TSU413003.jpg" alt="">
             </div>

             <div class="profile-mes">
                <p>Takashi     Nagai         <button @click="hide">×</button></p>
                <p>fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff<br>
                   fffffffffffffffffffffffffffffffffffffffffffffffffffffffff<br>
                   fffffffffffffffffffffffffffffffffffffffffffffffffffffffff<br>
                   gggggggggggggggggggggggggggggggggggggggggggggg<br>
               </p>          
             </div>
           </div>

           <div class="prfile-appeal">
             <div class="career-title">
               <p>Pro file</p>
             </div>

             <div class="career-mes">
                 <p>fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff<br>
                   fffffffffffffffffffffffffffffffffffffffffffffffffffffffff<br>
                   fffffffffffffffffffffffffffffffffffffffffffffffffffffffff<br>
                   fffffffffffffffffffffffffffffffffffffffffffffffffffffffff<br>
                   fffffffffffffffffffffffffffffffffffffffffffffffffffffffff<br>
                   fffffffffffffffffffffffffffffffffffffffffffffffffffffffff<br>
                   fffffffffffffffffffffffffffffffffffffffffffffffffffffffff<br>
                   gggggggggggggggggggggggggggggggggg<br>
                   gggggggggggggggggggggggggggggggggg<br>
                   gggggggggggggggggggggggggggggggg<br>
                   ggggggggggggggggggggggggggggggg<br>
                   gggggggggggggggggggggggggggggg<br>
                </p> 
             </div>

           </div>
        </div>
      </div>
    </div>
  </transition>
 
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'basicModals',
    computed: {
      ...mapState('base_modal', ['isShow'])
    },
    methods: {
      ...mapMutations('base_modal', ['hide'])
    }
  }
</script>

<style lang="scss" scoped>
@media screen and (max-width: 475px) { /*ウィンドウ幅が最大767pxまでの場合に適用*/
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &-window {
    background:rgb(209, 221, 221);
    height: 100%;
    width: 90%;
    border-radius: 4px;
    overflow: hidden;
  }

  &-content {
    height: 100%;
    width: 100%;

  .img {
      height: 230px;
      width: 100%;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;  

      .profile-pict{
        height: 100%;
        width: 20%;
        float:left;
        clear: both;

        img{
          margin-top:10px;
          padding: 60px 0; 
          height: 100%;
          width: 100%;
          border-radius: 50%;
        }
      } 
      .profile-mes{
        height: 100%;
        width: 80%;

         
        p:nth-child(1){
         padding-top: 20px; 
         color: #fff;
         font-family: 'Segoe Script';
         font-size: 28px;

         button{
          margin-right: -70px;
          border-radius: 10em; 
          width: 50px;
          font-size: 20px;
          background:rgba(253, 253, 253, 0.418);
          border-style:none;
         }
         
        }
        p:nth-child(2){
         margin-left: 80px;
         margin-top: 15;
         color: #fff;
         font-family: 'Segoe Script';
         font-size: 20px;
        }
      }  
    }

    .prfile-appeal{
      height: 100%;
      width: 100%;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;  

      .career-title{
        margin-top:10px;
        width: 100%;
        height: 30px;

        p{
          font-size: 50px;
          font-family: 'Segoe Script';
          color: #fff;
        }
      }

      .career-mes{
        margin-top:30px;
      
        width: 100%;
        height: 70%;

        p{
          font-size: 20px;
          font-family: 'Segoe Script';
          color: #fff;
        }
      }
    }
  }
}

// オーバーレイのトランジション
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;


  // オーバーレイに包含されているモーダルウィンドウのトランジション
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// ディレイを付けるとモーダルウィンドウが消えた後にオーバーレイが消える
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}
}


@media screen and (min-width: 475px) { /*ウィンドウ幅が最大767pxまでの場合に適用*/
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &-window {
    background:rgb(209, 221, 221);
    height: 100%;
    width: 85%;
    border-radius: 4px;
    overflow: auto;
  }

  &-content {
    height: 100%;
    width: 100%;

  .img {
      height: 230px;
      width: 100%;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;  

      .profile-pict{
        margin-left: 3px;
        height: 100%;
        width: 20%;
        float:left;
        clear: both;

        img{
          margin-top:10px;
          padding: 50px 0; 
          height: 100%;
          width: 100%;
          border-radius: 50%;
        }
      } 
      .profile-mes{
        height: 100%;
        width: 80%;

         
        p:nth-child(1){
         margin-left: -37px; 
         padding-top: 20px; 
         color: #fff;
         font-family: 'Segoe Script';
         font-size: 28px;

         button{
          margin-right: -70px; 
          border-radius: 10em; 
          width: 40px;
          font-size: 20px;
          background:rgba(253, 253, 253, 0.418);
          border-style:none;
         }
         
        }
        p:nth-child(2){
         margin-top: 15; 
         margin-left: 140px;
         color: #fff;
         font-family: 'Segoe Script';
         font-size: 20px;
        }
      }  
    }

    .prfile-appeal{
      height: 100%;
      width: 100%;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;  

      .career-title{
        margin-top:10px;
        margin-left:60px;
        width: 100%;
        height: 30px;

        p{
          font-size: 50px;
          font-family: 'Segoe Script';
          color: #fff;
        }
      }

      .career-mes{
        margin-top:30px;
      
        width: 100%;
        height: 70%;

        p{
          font-size: 20px;
          font-family: 'Segoe Script';
          color: #fff;
        }
      }
    }
  }
}

// オーバーレイのトランジション
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;


  // オーバーレイに包含されているモーダルウィンドウのトランジション
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// ディレイを付けるとモーダルウィンドウが消えた後にオーバーレイが消える
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}
}


@media screen and (min-width: 800px) { /*ウィンドウ幅が最大767pxまでの場合に適用*/
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &-window {
    background:rgb(209, 221, 221);
    height: 100%;
    width: 70%;
    border-radius: 4px;
    overflow: hidden;
  }

  &-content {
    height: 100%;
    width: 100%;

  .img {
      height: 230px;
      width: 100%;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;  

      .profile-pict{
        height: 100%;
        width: 20%;
        float:left;
        clear: both;

        img{
          margin-top:10px;
          margin-left: 3px;
          padding:45px 0; 
          height: 100%;
          width: 100%;
          border-radius: 50%;
        }
      } 
      .profile-mes{
        height: 100%;
        width: 80%;

         
        p:nth-child(1){
         margin-left: 120px;
         padding-top: 20px; 
         color: #fff;
         font-family: 'Segoe Script';
         font-size: 40px;

         button{
          float: right;
          margin-top: 15px;
          margin-right: -50px;
          border-radius: 10em; 
          width: 50px;
          font-size: 20px;
          background:rgba(253, 253, 253, 0.418);
          border-style:none;
         }
         
        }
        p:nth-child(2){
         margin-left: 150px;
         color: #fff;
         font-family: 'Segoe Script';
         font-size: 22px;
        }
      }  
    }

    .prfile-appeal{
      height: 100%;
      width: 100%;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;  

      .career-title{
        margin-top:10px;
        padding-left: 150px;
        width: 100%;
        height: 47px;

        p{
          font-size: 50px;
          font-family: 'Segoe Script';
          color: #fff;
        }
      }

      .career-mes{
        margin-top:30px;
        padding-left: 20px;
        width: 100%;
        height: 70%;

        p{
          font-size: 20px;
          font-family: 'Segoe Script';
          color: #fff;
        }
      }
    }



   
  }
}

// オーバーレイのトランジション
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;


  // オーバーレイに包含されているモーダルウィンドウのトランジション
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// ディレイを付けるとモーダルウィンドウが消えた後にオーバーレイが消える
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}
}




@media screen and (min-width: 1000px){ /*ウィンドウ幅が767px以上の場合に適用*/
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &-window {
    background:rgb(209, 221, 221);
    transform: rotate(30deg);
    height: 200vh;
    width: 60%;
    border-radius: 4px;
    overflow: hidden;
  }

  &-content {
    height: 100%;
    width: 100%;

  .img {
      margin-top: 320px;
      height: 230px;
      width: 150%;
      margin-left: -160px;
      transform: rotate(-30deg);
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;  

      .profile-pict{
        height: 100%;
        width: 20%;
        float:left;
        margin-left: 160px;
        clear: both;

        img{
          margin-top:10px;
          padding: 20px 5px 20px 5px; 
          height: 100%;
          width: 100%;
          border-radius: 50%;
        }
      } 
      .profile-mes{
        height: 100%;
        width: 80%;

         
        p:nth-child(1){
         padding-top: 20px; 
         margin-left: 380px;
         color: #fff;
         font-family: 'Segoe Script';
         font-size: 40px;

         button{
          float: right;
          margin-top: 13px;
          margin-right: -80px;
          border-radius: 10em; 
          width: 50px;
          font-size: 20px;
          background:rgba(253, 253, 253, 0.418);
          border-style:none;
         }
         
        }
        p:nth-child(2){
         margin-left: 380px;
         color: #fff;
         font-family: 'Segoe Script';
         font-size: 22px;
        }
      }  
    }

    .prfile-appeal{
      margin-top: 20px;
      height: 100%;
      width: 200%;
      margin-left: -160px;
      transform: rotate(-30deg);
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;  

      .career-title{
        margin-top:10px;
        margin-left: 400px;
        width: 100%;
        height: 47px;

        p{
          font-size: 50px;
          font-family: 'Segoe Script';
          color: #fff;
        }
      }

      .career-mes{
        margin-top:30px;
        margin-left: 420px;
        width: 100%;
        height: 70%;

        p{
          font-size: 20px;
          font-family: 'Segoe Script';
          color: #fff;
        }
      }
    }
  }
}

// オーバーレイのトランジション
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;


  // オーバーレイに包含されているモーダルウィンドウのトランジション
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// ディレイを付けるとモーダルウィンドウが消えた後にオーバーレイが消える
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}
}


@media screen and (min-width: 1200px){ /*ウィンドウ幅が767px以上の場合に適用*/
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &-window {
    background:rgb(209, 221, 221);
    transform: rotate(30deg);
    height: 200vh;
    width: 60%;
    border-radius: 4px;
    overflow: hidden;
  }

  &-content {
    height: 100%;
    width: 100%;

  .img {
      margin-top: 300px;
      height: 230px;
      width: 150%;
      margin-left: -160px;
      transform: rotate(-30deg);
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;  

      .profile-pict{
        height: 100%;
        width: 20%;
        float:left;
        margin-left: 160px;
        clear: both;

        img{
          margin-top:10px;
          padding: 20px; 
          height: 100%;
          width: 100%;
          border-radius: 50%;
        }
      } 
      .profile-mes{
        height: 100%;
        width: 80%;

         
        p:nth-child(1){
         padding-top: 20px; 
         margin-left: 420px;
         color: #fff;
         font-family: 'Segoe Script';
         font-size: 40px;

         button{
          margin-left: 50px;
          border-radius: 10em; 
          width: 50px;
          font-size: 20px;
          background:rgba(253, 253, 253, 0.418);
          border-style:none;
         }
         
        }
        p:nth-child(2){
         margin-left: 420px;
         color: #fff;
         font-family: 'Segoe Script';
         font-size: 22px;
        }
      }  
    }

    .prfile-appeal{
      margin-top: 20px;
      height: 100%;
      width: 200%;
      margin-left: -160px;
      transform: rotate(-30deg);
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;  

      .career-title{
        margin-top:10px;
        margin-left: 430px;
        width: 100%;
        height: 47px;

        p{
          font-size: 50px;
          font-family: 'Segoe Script';
          color: #fff;
        }
      }

      .career-mes{
        margin-top:30px;
        margin-left: 550px;
        width: 100%;
        height: 70%;

        p{
          font-size: 20px;
          font-family: 'Segoe Script';
          color: #fff;
        }
      }
    }



   
  }
}

// オーバーレイのトランジション
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;


  // オーバーレイに包含されているモーダルウィンドウのトランジション
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// ディレイを付けるとモーダルウィンドウが消えた後にオーバーレイが消える
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}
}




@media screen and (min-width: 1400px) { /*ウィンドウ幅が767px以上の場合に適用*/
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &-window {
    background:rgb(209, 221, 221);
    transform: rotate(30deg);
    height: 200vh;
    width: 50%;
    border-radius: 4px;
    overflow: hidden;
  }

  &-content {
    height: 100%;
    width: 100%;

  .img {
      margin-top: 300px;
      height: 230px;
      width: 150%;
      margin-left: -160px;
      transform: rotate(-30deg);
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;  

      .profile-pict{
        height: 100%;
        width: 20%;
        float:left;
        margin-left: 160px;
        clear: both;

        img{
          margin-top:10px;
          padding: 20px; 
          height: 100%;
          width: 100%;
          border-radius: 50%;
        }
      } 
      .profile-mes{
        height: 100%;
        width: 80%;

         
        p:nth-child(1){
         padding-top: 20px; 
         margin-left: 420px;
         color: #fff;
         font-family: 'Segoe Script';
         font-size: 40px;

         button{
          margin-left: 50px;
          border-radius: 10em; 
          width: 50px;
          font-size: 20px;
          background:rgba(253, 253, 253, 0.418);
          border-style:none;
         }
         
        }
        p:nth-child(2){
         margin-left: 420px;
         color: #fff;
         font-family: 'Segoe Script';
         font-size: 22px;
        }
      }  
    }

    .prfile-appeal{
      margin-top: 20px;
      height: 100%;
      width: 200%;
      margin-left: -160px;
      transform: rotate(-30deg);
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;  

      .career-title{
        margin-top:10px;
        margin-left: 500px;
        width: 100%;
        height: 47px;

        p{
          font-size: 50px;
          font-family: 'Segoe Script';
          color: #fff;
        }
      }

      .career-mes{
        margin-top:30px;
        margin-left: 550px;
        width: 100%;
        height: 70%;

        p{
          font-size: 20px;
          font-family: 'Segoe Script';
          color: #fff;
        }
      }
    }



   
  }
}

// オーバーレイのトランジション
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;


  // オーバーレイに包含されているモーダルウィンドウのトランジション
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// ディレイを付けるとモーダルウィンドウが消えた後にオーバーレイが消える
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}
}



</style>