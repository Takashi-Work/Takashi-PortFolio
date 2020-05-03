<template>
<div class="mooving">

 <nav class="navigation-menu" :class="{'show':showNavi}">
   <div @click="shows" class="navi-menu1" >
     <span class="navigation-menu-bars"></span>
   </div>

   <ul class="menu-list">
     <li class="menu-list-item"><router-link  to="/">Home</router-link></li>
     <li class="menu-list-item"><router-link  to="/profile">Profile</router-link></li>
     <li class="menu-list-item"><router-link  to="/work">Work</router-link></li>
     <li class="menu-list-item"><router-link  to="/contact">Contact</router-link></li>
   </ul>
 </nav>

 <div class="scene">
     <article class="book">
         <section class="page active" v-bind:class="[isActiveS,{ 'openS': opensS , 'closeS': closesS}]">
            <div class="front" id="frontCover" @click="p_openS">
              <h1><i><span>My</span>  Skill  <span>&</span>  Work  <span>Book.</span></i></h1>
              <h1><i>Click~Here</i></h1>
             
            </div>

            <div class="back" id="list" @click="p_closeS" >
              <h1>SkillList</h1>
               <div v-if="isActive2 == true">
               <SkillBar />
               </div>
             
            </div>
         </section>

          <section class="page" v-bind:class="[{ active: isActive2 , 'open2': opens2 ,  'close2': closes2}]" >
            <div class="front"  @click="p_open2">
              <h1>SkillList</h1>
               <div v-if="isActive2 == true">
               <SkillBar2 />
               </div>
            </div>

            <div class="back"  @click="p_close2">
                <div class="header_title">
                   <h3>事業者向けWEB出退勤管理システム開発 </h3>
                </div>
                <div class="middle_title">
                   <h4> 開発期間　2020年 1月10日　～　3月6日 </h4>
                </div>
              
                   <div class="used1">
                     <h4>使用言語　PHP JavaScript</h4>  

                     <h5>使用ライブラリ Jquery </h5> 

                     <h5>使用データベース　Mysql</h5> 
                   </div>

                   <div class="used2">
                     <h4>担当フェーズ</h4> 

                     <h5>ワイヤーフレームの製作</h5> 

                     <h5>データベース設計</h5> 

                     <h5>設計  構築  テスト</h5> 

                   
                    </div>　

                    <div class="used3">　　
                      <h5>事業所の出退勤等の管理業務をWEB上で実現する事で</h5>

                      <h5>個々の業務を減らし、生産性を上げる為のシステム</h5>
                      
                      <h5> 開発を行ってます</h5>　

                      <h5>又、完成時に、できるだけ御客様にストレスを感じ頂かない用に</h5>　

                      <h5>JavaScriptの非同期通信(Ajax)を使い、SPAを意識したWEBアプリケーション</h5>　

                      <h5>製作をしました。</h5>　

                　  </div>
            </div>
         </section>

         <section class="page" v-bind:class="[{ active: isActiveE , 'openE': opensE ,  'closeE': closesE}]">
            <div class="front" @click="p_openE">
             <div class="header_title">
                   <h3>受託案件への　機能 追加・改修 </h3>
                </div>
                <div class="middle_title">
                   <h4> 開発期間　2020年 3月12日　～　4月10日 </h4>
                </div>
              
                   <div class="used1">
                     <h4>使用言語　PHP JavaScript</h4>  

                     <h5>使用フレームワーク Laravel Vue.js </h5> 

                     <h5>使用データベース　Mysql</h5> 
                   </div>

                   <div class="used2">
                     <h4>担当フェーズ</h4> 

                     <h5>機能　追加・改修</h5> 

                     <h5>データベース変更</h5> 

                     <h5>レスポンシブ対応</h5>

                     <h5>レイアウト変更</h5>

                    </div>　

                    <div class="used3">　　
                      <h5>非同期通信(Axios)使用したAPIとの通信処理</h5>

                      <h5>特定フェーズ以降入力項目が変更できないように入力制限機能</h5>

                      <h5>新規マスタ画面追加 や 画面にソート機能</h5>

                      <h5>ドラッグ&ドロップを使用した並び替え機能</h5>　

                      <h5>等の追加・改修を担当させて戴いてます</h5>
                　  </div>
            </div>

            <div class="back" @click="p_closeE" id="endCover" >
               <h1><i>Thank you For Reading it Until the Very End</i></h1>
               <p>

              </p>
               <p>

              </p>
            </div>
         </section>
     </article>
 </div>
</div>
</template>
<script>
import SkillBar from '@/app1/components/modules/SkillBar.vue'
import SkillBar2 from '@/app1/components/modules/SkillBar2.vue'
export default {
  name: 'Book',
  components: {
    SkillBar,
    SkillBar2
  },
  data: () => {
    return {
      showNavi: false,

      isActiveS: true,
      isActive2: false,
      isActiveE: false,

      opensS: false,
      opens2: false,
      opensE: false,

      closesS: false,
      closes2: false,
      closesE: true

    }
  },
  methods: {
    shows () {
      if (this.showNavi === true) {
        this.showNavi = false
      } else {
        this.showNavi = true
      }
    },

    p_openS () {
      this.opensS = true
      this.isActive2 = true
      this.closesE = true
    },
    p_open2 () {
      this.opens2 = true
      this.isActiveE = true
    },
    p_openE () {
      this.opensE = true
    },

    p_closeS () {
      this.closesS = true
      this.opensS = false
      this.isActive2 = false
    },
    p_close2 () {
      this.closes2 = true
      this.opens2 = false
      this.isActiveE = false
    },
    p_closeE () {
     // this.closesE = true
      this.opensE = false
     
    }
  }
}
</script>
<style lang="scss" scoped>
.mooving::-webkit-scrollbar{ 
    display:none;
}
.mooving {
    background: url('../../assets/photos/TSU413017.jpg');
    background-size: cover;
    margin: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
}

.navigation-menu-bars,
.navigation-menu-bars::before,
.navigation-menu-bars::after
{
  cursor: pointer;
  border-radius: 1px;
  height: 2px;
  width: 25px;
  background: #fff;
  position: absolute;
  left: 0%;
  top: 50%;
  display: block;
  transition: all 0.3s;
}

.navigation-menu
{
  background-color: transparent;
  height: 100%;
  position: fixed;
  width: 599px;
  transform: translateX(-100%);
  transition: transform 0.3s 0.3s;
  color: #fff;
  font-family: tahoma;
  font-size: 2.4rem;
  z-index: 40;

  &.show
  {
    transform: translateX(0);

    .navigation-menu-bars
    {
      background-color: transparent;
    }

    .navigation-menu-bars::before,
    .navigation-menu-bars::after
    {
      top: 0;
    }

    .navigation-menu-bars::before
    {
      transform: rotate(45deg);
    }

    .navigation-menu-bars::after
    {
      transform: rotate(-45deg);
    }

    .menu-list-item
    {
      opacity: 1;
    }

    .menu-list-item:nth-child(1)
    {
      transition-delay: 1s;
    }

    .menu-list-item:nth-child(2)
    {
      transition-delay: 1.25s;
    }

    .menu-list-item:nth-child(3)
    {
      transition-delay: 1.5s;
    }

    .menu-list-item:nth-child(4)
    {
      transition-delay: 1.75s;
    }
  }
}

@media (max-width: 600px)
{
  .navigation-menu
  {
    width: 85%;
  }

  .menu-list
  {
   margin: -75px 0 0 0;
   padding: 10px 0 0 0;
  }

  .menu-list-item
  {
    margin: 0;
    height: 40px;
  }

}
.navigation-menu::before
{
  background:rgba(223, 149, 79, 0.643);
  content: '';
  height: 400%;
  left: 50%;
  position: absolute;
  top: 0;
  transform: translate(-50%, -50%) rotate(40deg);
  width: 100%;
  z-index: 0;
}

.navi-menu1
{
  cursor: pointer;
  height: 30px;
  position: absolute;
  right: -40px;
  top: 5px;
  width: 30px;
}

.navigation-menu-bars::before,
.navigation-menu-bars::after
{
  content: '';
}

.navigation-menu-bars::before
{
  left: 0px;
  top: -8px;
}

.navigation-menu-bars::after
{
  left: 0px;
  top: 8px;
}

.menu-list
{
  padding: 59px;
  position: relative;
  z-index: 50;
}

.menu-list-item
{
  margin: 40px 0;
  opacity: 0;
  transition: opacity 0.5s 0.5s;

  a
  {
    color: #fff;
  }
}

h1
{
  text-align: center;
  font-family: 'Segoe Script';
}

.scene
{
   padding: 100px 0 0 0;
   width: 45%;
   height: 90%;
   margin: 5% 5% 5% 50%;
   perspective: 1000px;
}

.book
{
   position: relative;
   width: 100%;
   height: 100%;
   transform-style: preserve-3d;
}

.page
{
  cursor: pointer;
  position: absolute;
  color: black;
  width: 100%;
  height: 100%;
  transition: 1.3s transform;
  transform-style:  preserve-3d;
  transform-origin: left center;

 
  &.active,.front
  {
   z-index: 1;
  }
  &.openS
  {
    &.active,.back
    {
      z-index: 2;
      transform: rotateY(-180deg);
    }
  }
  &.open2
  {
    &.active,.back
    {
      z-index: 3;
      transform: rotateY(-180deg);
    }
  }
   &.openE
  {
    &.active,.back
    {
      z-index: 4;
      transform: rotateY(-180deg);
    }
  }

 &.closeS
 {
    &.open,.back
    {
      transform: rotateY(180deg);
    }
  }
  &.close2
  {
    &.open,.back
    {
      transform: rotateY(180deg);
    }
  }
  &.closeE
  {
    &.open,.back
    {
      transform: rotateY(180deg);
    }

  }


  .front,
  .back
  {
    position: absolute;
    width: 100%;
    height: 500px;
    box-sizing: border-box;
    overflow: auto;
    border-radius: 0.5rem;
    backface-visibility: hidden;
    background: -webkit-gradient(linear, 0% 0%,
     100% 100%, from(#ffffff), to(#cccccc));
  }

  .header_title{
   width:100%;
   text-align: center;
  }

  .middle_title{
    width: 100%;
    text-align: center;
    margin-top:23px;
  }

  .used1{
    margin-top:20px;
    padding-left:20px;
    float:left;
    width:48%;
  }
  .used2{
    margin-top:20px;
    padding-left:29px;
    float:right;
    width:48%;
  }
  .used3{
    margin-top:220px;
    padding-left:20px;
    width:100%;
  }
  .front::-webkit-scrollbar
  {
    display:none;
  }
  .back::-webkit-scrollbar
  {
    display: none;
  }

  #frontCover
  {
    position: absolute;
    margin-top: -10px;
    width: calc( 100% + 10px );
    height: 520px;
    box-shadow: 8px 5px 10px 5px rgba(0,0,0,0.3);
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    border-top-left-radius: 0.3em;
    border-bottom-left-radius: 0.3em;
    box-sizing: border-box;
    backface-visibility: visible;
    background: url('../../assets/photos/TSU413013_TP_V.jpg');
    background-size: cover;

    h1
    {
      padding-top: 20px;
      text-align: center;
      color: #fff;
      font-size: 45px;
      font-weight: 40px;
      font-family: 'Segoe Script';

      span
      {
        font-size: 51px;
        color: #fff;
      }
    }
    h2
    {
      padding-top: 20px;
      text-align: center;
      color: rgba(0, 2, 97, 0.787);
      font-size: 50px;
      font-weight: 45px;
      font-family: 'Segoe Script';
    }

    p
    {
      margin: 0 0 0.1em;
      text-indent: 1em;
    }
  }

  #endCover
  {
    position:absolute;
    margin-top: -10px;
    width: calc( 100% + 10px );
    height: 520px;
    box-shadow: 8px 5px 6px 5px rgba(0,0,0,0.4);
    box-shadow:darkgray;
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    border-top-left-radius: 0.3em;
    border-bottom-left-radius: 0.3em;
    box-sizing: border-box;
    backface-visibility: visible;
    background: url('../../assets/photos/TSU413013_TP_V.jpg');
    background-size: cover;

     h1
    {
      padding-top: 20px;
      text-align: center;
      color: #fff;
      font-size: 45px;
      font-weight: 40px;
      font-family: 'Segoe Script';

      span
      {
        font-size: 51px;
        color: #fff;
      }
    }
    h2
    {
      padding-top: 20px;
      text-align: center;
      color: rgba(0, 2, 97, 0.787);
      font-size: 50px;
      font-weight: 45px;
      font-family: 'Segoe Script';
    }

    p
    {
      margin: 0 0 0.1em;
      text-indent: 1em;
    }
  }
}
p
{
    margin: 0 0 0.1em;
    text-indent: 1em;
}

</style>
