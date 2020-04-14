<template>
 <transition name="modal" appear>
    <div class="modal modal-overlay" v-if="isShow">
      <div class="modal-window">
        <div class="modal-content">
           <div class="img">
             <div class="profile-pict">
              
             </div>

             <div class="profile-mes">
                <p class="about_name">Takashi           Nagai         <button class="close" @click="hide">×</button></p>
                <p>皆様、初めまして<br>
                
                   永井　貴士の<span>PortFolio</span>に ようこそ<br>
               
                   大阪堺市 在住、Webエンジニアの卵系男子です
                </p>
             </div>
           </div>

           <div class="prfile-appeal">
             <div class="career-title">
               <p>Pro file</p>
             </div>

             <div class="career-mes">
                 <p>現在、株式会社<span>B-FORME</span>にてインターンとして勉強させて戴いています。<br>
                   <span>Source Tree</span>を使用した<span>Git</span>でのコード管理の下<br>
                   <span>PHP</span><span>JavaScript</span><span>Jquery</span><span>Html.Css</span><span>Mysql</span>等を使用した<span>Web</span>アプリケーション製作<br>
                   <span>Laravel</span><span>Vue.js</span>を使用した、受諾案件への機能追加 修正を担当させて貰っています<br>
                   <br>
                   プログラミング歴：１年半<br>
                   業務経験： １０ヶ月<br>

                   Age：３０ <br>
                   Height： １６７cm <br>
                   Body_Weight： ６２kg <br>
                   
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
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: 475px) {
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

  .img::-webkit-scrollbar{  /* Chrome, Safari 対応 */
     display:none;
  }
  .img {
      overflow-y:auto;
      overflow-x:hidden;
      margin:0;
      height:30%;
      width:100%;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;  
      clear: both;

      .profile-pict {
        background-image:url('../../assets/photos/TSU413003.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center,center;
        width: 25%;
        height: 0;
        margin: 60px 0 0 16px;
        padding-bottom: 25%;
        border-radius: 50%;
        float:left;
      
      } 
      .profile-mes{
        float:left;
        padding-left: 6px;
        height: 100%;
        width: 70%;

         
        p:nth-child(1){
         width: 100%;
         margin:0;
         padding-top:6px;
         color: #fff;
         font-family: 'Segoe Script';
         font-size: 30px;

         .close{
          margin-right: 2px;
          float:right;
          border-radius: 50%; 
          width: 30px;
          height: 30px;
          font-size: 20px;
          background:rgb(4, 155, 49);
          border-style:none;
         }
         
        }
        p:nth-child(2){
         width: 87%;
          word-break: normal;
          word-wrap: break-word;
         margin-left:27px;
         color: #fff;
         font-family:'Constantia';
         font-size: 22px;
         line-height:4.6ex;

         span{
          color: #fff;
          font-family: 'Segoe Script';
         }
        }
      }  
      
    }

     .prfile-appeal::-webkit-scrollbar{  /* Chrome, Safari 対応 */
       display:none;
    }

    .prfile-appeal{  
      overflow-y:auto;
      overflow-x:hidden;
      margin: 20px 0 0 0;
      height: 70%;
      width:100%;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;  

      .career-title{
        width: 100%;
        margin:0;
        padding-left:150px;
        height: 47px;

        p{
          font-size: 50px;
          font-family: 'Segoe Script';
          color: #fff;
        }
      }

      .career-mes{
        margin-left:0;
        padding:60px 0 0 20px;
        width: 100%;
        height: 70%;
        line-height:4.6ex;

        p{
          font-size: 22px;
          color: #fff;
          font-family:'Constantia';

          span:nth-child(1){
            font-family: 'Segoe Script';
            color: #fff;
          }
          span:nth-child(3){
            font-family: 'Segoe Script';
            font-size: 26px;
            color: #fff;
          }
          span:nth-child(4){
            font-family: 'Segoe Script';
            padding: 0 5px 0 5px;
            color: #fff;
          }
          span:nth-child(5){
            font-family: 'Segoe Script';
            padding: 0 5px 0 5px;
            color: #fff;
          }
          span:nth-child(6){
            font-family: 'Segoe Script';
             padding: 0 5px 0 5px;
            color: #fff;
          }
          span:nth-child(7){
            font-family: 'Segoe Script';
             padding: 0 5px 0 5px;
            color: #fff;
          }
          span:nth-child(8){
            font-family: 'Segoe Script';
             padding: 0 5px 0 5px;
            color: #fff;
          }
          span:nth-child(9){
            font-family: 'Segoe Script';
             padding: 0 5px 0 5px;
            color: #fff;
          }
          span:nth-child(10){
            font-family: 'Segoe Script';
             padding: 0 5px 0 0;
            color: #fff;
          }
          span:nth-child(11){
            font-family: 'Segoe Script';
             padding: 0 5px 0 0;
            color: #fff;
          }
          span:nth-child(13){
            font-family: 'Segoe Script';
             padding: 0 5px 0 0;
            color: #fff;
          }
          span:nth-child(14){
            font-family: 'Segoe Script';
             padding: 0 5px 0 0;
            color: #fff;
          }
        }
      }
    }
  }
  }



  @media screen and (min-width: 800px) {
  &-window {
    height: 100%;
    background:rgb(209, 221, 221);
    width: 70%; 
  }

  &-content {
    height:100%;
    width: 100%;
  
   .img::-webkit-scrollbar{  /* Chrome, Safari 対応 */
     display:none;
   }
   .img{ 
      overflow-y:auto;
      overflow-x:hidden;
      margin:0;
      height:30%;
      width:100%;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;  
      clear: both;

      .profile-pict{
        background-image:url('../../assets/photos/TSU413003.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center,center;
        width: 25%;
        height: 0;
        margin:15px 0 0 16px;
        padding-bottom: 25%;
        border-radius: 50%;
        float:left;
        
      } 
      .profile-mes{
        float:left;
        margin-top:0;
        height: 100%;
        width: 70%;

         
        p:nth-child(1){
         width: 87%;
         margin-left:0;
         padding-top:3px;
         color: #fff;
         font-family: 'Segoe Script';
         font-size: 35px;

         .close{
          float:right;
          margin-right: 5px;
          border-radius: 50%; 
          width: 40px;
          height: 40px;
          font-size: 20px;
          background:rgb(4, 155, 49);
          border-style:none;
         }
         
        }
        p:nth-child(2){
         width: 100%;
         word-break: normal;
         word-wrap: break-word;
         margin-left:27px;
         color: #fff;
         font-family:'Constantia';
         font-size: 22px;
         line-height: 4.5ex;

         span{
          color: #fff;
          font-family: 'Segoe Script';
         }
        }
      }  
    }

    .prfile-appeal::-webkit-scrollbar{  /* Chrome, Safari 対応 */
       display:none;
    }

    .prfile-appeal{  
      overflow-y:auto;
      overflow-x:hidden;
      margin: 20px 0 0 0;
      height: 70%;
      width:100%;
      background:  url('../../assets/photos/MIYA19224blueDSC_6386_TP_V.jpg');
      background-size: cover;  

      .career-title{
        width: 100%;
        margin:0;
        height: 47px;
        justify-content:left;

        p{
          font-size: 50px;
          font-family: 'Segoe Script';
          color: #fff;
        }
      }

      .career-mes{
        margin-left:0;
        padding:60px 0 0 40px;
        width: 100%;
        height: 70%;
        line-height:4.6ex;


        p{
          font-size: 22px;
          color: #fff;
          font-family:'Constantia';

           span:nth-child(1){
            font-family: 'Segoe Script';
            color: #fff;
          }
          span:nth-child(3){
            font-family: 'Segoe Script';
            font-size: 26px;
            color: #fff;
          }
          span:nth-child(4){
            font-family: 'Segoe Script';
            padding: 0 5px 0 5px;
            color: #fff;
          }
          span:nth-child(5){
            font-family: 'Segoe Script';
            padding: 0 5px 0 5px;
            color: #fff;
          }
          span:nth-child(6){
            font-family: 'Segoe Script';
             padding: 0 5px 0 5px;
            color: #fff;
          }
          span:nth-child(7){
            font-family: 'Segoe Script';
             padding: 0 5px 0 5px;
            color: #fff;
          }
          span:nth-child(8){
            font-family: 'Segoe Script';
             padding: 0 5px 0 5px;
            color: #fff;
          }
          span:nth-child(9){
            font-family: 'Segoe Script';
             padding: 0 5px 0 5px;
            color: #fff;
          }
          span:nth-child(10){
            font-family: 'Segoe Script';
             padding: 0 5px 0 0;
            color: #fff;
          }
          span:nth-child(11){
            font-family: 'Segoe Script';
             padding: 0 5px 0 0;
            color: #fff;
          }
          span:nth-child(13){
            font-family: 'Segoe Script';
             padding: 0 5px 0 0;
            color: #fff;
          }
          span:nth-child(14){
            font-family: 'Segoe Script';
             padding: 0 5px 0 0;
            color: #fff;
          }
        }
      }
    }
   }
  }

  @media screen and (min-width: 1000px) {
  &-window {
    height: 100%;
    background:rgb(209, 221, 221);
    transform:skewX(-25deg);
    width: 63%; 
  }

  &-content {
    height:100%;
    width: 100%;
  
   .img::-webkit-scrollbar{  /* Chrome, Safari 対応 */
     display:none;
   }
   .img{ 
      overflow-y:auto;
      overflow-x:hidden;
      margin:0;
      transform:skewX(0deg);
      height:30%;
      width:100%;
      background:  url('../../assets/photos/susi1027481.jpg');
      background-size: cover;  
      clear: both;

      .profile-pict{
        transform:skewX(25deg);
        background-image:url('../../assets/photos/TSU413003.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center,center;
        width: 23%;
        height: 0;
        margin:8px 0 0 23px;
        padding-bottom: 23%;
        border-radius: 50%;
        
      } 
      .profile-mes{
        float:left;
        margin-top:0;
        height: 100%;
        width: 70%;

         
        p:nth-child(1){
         width: 87%;
         margin-left:0;
         padding-top:3px;
         color: #fff;
         font-family: 'Segoe Script';
         font-size: 40px;

         .close{
          transform:skewX(25deg);
          float:right;
          margin-right: 5px;
          border-radius: 50%; 
          width: 40px;
          height: 40px;
          font-size: 20px;
          background:rgb(4, 155, 49);
          border-style:none;
         }
         
        }
        p:nth-child(2){
         transform:skewX(25deg);
         word-break: normal;
         word-wrap: break-word;
         width: 90%;
         margin-left:60px;
         color: #fff;
         font-family:'Constantia';
         font-size: 24px;
         line-height: 4.5ex;

         span{
          color: #fff;
          font-family: 'Segoe Script';
         }
        }
       
      }  
    }

    .prfile-appeal::-webkit-scrollbar{  /* Chrome, Safari 対応 */
       display:none;
    }

    .prfile-appeal{  
      overflow-y:auto;
      overflow-x:hidden;
      transform:skewX(0deg);
      margin: 20px 0 0 0;
      height: 70%;
      width:100%;
      background:  url('../../assets/photos/susi1027481.jpg');
      background-size: cover;  

      .career-title{
        width: 100%;
        margin:0;
        padding-left: 30%;
        height: 47px;

        p{
          font-size: 50px;
          font-family: 'Segoe Script';
          color: #fff;
        }
      }

      .career-mes{
        margin-left:0;
        padding:60px 0 0 120px;
        width: 100%;
        height: 70%;
        line-height: 4.8ex;

        p{
          transform:skewX(25deg);
          font-size: 24px;
          color: #fff;
          font-family:'Constantia';

          span:nth-child(1){
            font-family: 'Segoe Script';
            color: #fff;
          }
          span:nth-child(3){
            font-family: 'Segoe Script';
            font-size: 26px;
            color: #fff;
          }
          span:nth-child(4){
            font-family: 'Segoe Script';
            padding: 0 5px 0 5px;
            color: #fff;
          }
          span:nth-child(5){
            font-family: 'Segoe Script';
            padding: 0 5px 0 5px;
            color: #fff;
          }
          span:nth-child(6){
            font-family: 'Segoe Script';
             padding: 0 5px 0 5px;
            color: #fff;
          }
          span:nth-child(7){
            font-family: 'Segoe Script';
             padding: 0 5px 0 5px;
            color: #fff;
          }
          span:nth-child(8){
            font-family: 'Segoe Script';
             padding: 0 5px 0 5px;
            color: #fff;
          }
          span:nth-child(9){
            font-family: 'Segoe Script';
             padding: 0 5px 0 5px;
            color: #fff;
          }
          span:nth-child(10){
            font-family: 'Segoe Script';
             padding: 0 5px 0 0;
            color: #fff;
          }
          span:nth-child(11){
            font-family: 'Segoe Script';
             padding: 0 5px 0 0;
            color: #fff;
          }
          span:nth-child(13){
            font-family: 'Segoe Script';
             padding: 0 5px 0 0;
            color: #fff;
          }
          span:nth-child(14){
            font-family: 'Segoe Script';
             padding: 0 5px 0 0;
            color: #fff;
          }
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