<template>
 <div class="ms">
   <div class="container">

    <div class="skills">
      <span class="Name">Laravel</span>  
      <div class="percent">
        <div class="progress"></div>  
      </div>
      <span class="Value">50%</span>
    </div>
       <h5><i>Laravel</i> : 受託案件業務で使用　フロント(Vue.js)側との通信で使用するエンドポイントの作成等の知識</h5>

    <div class="skills">
      <span class="Name">Vue.js</span>  
      <div class="percent">
        <div class="progress"></div>  
      </div>
      <span class="Value">40%</span>
    </div>
       <h5><i>Vue.js</i> : 受託案件業務で使用 APIサーバー(Laravel)側との非同期通信(Axios)でのデータ取得等の知識</h5>
    
    <div class="skills">
      <span class="Name">Html & Css</span>  
      <div class="percent">
        <div class="progress"></div>  
      </div>
      <span class="Value">45%</span>
    </div>
       <h5><i>Html & Css</i> : 10ヵ月の業務全般で使用</h5>

   </div> 
  </div> 
</template>

<script>
export default {
  name: 'SkillBar2',
  data: () => {
    return {

    }
  }, 
}
</script>

<style lang="scss" scoped>
.ms
{
    //display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    background: #cccccc;
}

.container
{
    position: relative;
    width: 100%;

    h5{
      text-align: center;
    }

    .skills
    {
        position: relative;
        display: flex;
        margin: 20px 0;
        padding: 24px 10px 18px ;
        background: linear-gradient(#616161 0%,
         #333 10%,#222);
        border-radius: 8px;
        overflow: hidden;
        border: 2px solid #000;
        transition: 0.5s;
    }

    .skills:before
    {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50%;  
      background: rgba(255,255,255,.1);
      z-index: 10;     
    }

    .skills .Name
    {
       position: relative;
       width:  110px;
       text-align: right;
       color: #fff;
       margin-top: -2px;
       text-transform: uppercase;
    }

    .skills .Value
    {
       position: relative;
       width:  40px;
       text-align: left;
       color: #fff;
       margin-top: -2px;
       text-transform: uppercase;
    }

    .skills .percent
    {
        position: relative;
        width: calc(100% - 150px);
        height: 20px;
        margin: 0 10px;
        border-radius: 10px;
        background: #151515;
        box-shadow: inset 0 0 10px #000;
        overflow: hidden;

        .progress
        {
            position: absolute;
            top: 0;
            left: 0;
            width: 70%;
            height: 100%;
            border-radius: 10px;
            background: rgb(92, 243, 160);
            box-shadow: inset 0 0 2px #000;
            animation: animate 3s ease-in-out forwards;
        }
        @keyframes animate
        {
            from
            {
               width: 0%;
            }

            to
            {
               width: 50%;
            }
        }
    }

    .skills:nth-child(2) .percent
    {
        position: relative;
        width: calc(100% - 150px);
        height: 20px;
        margin: 0 10px;
        border-radius: 10px;
        background: #151515;
        box-shadow: inset 0 0 10px #000;
        overflow: hidden;

        .progress
        {
            position: absolute;
            top: 0;
            left: 0;
            width: 70%;
            height: 100%;
            border-radius: 10px;
            background: rgb(25, 146, 177);
            box-shadow: inset 0 0 2px #000;
            animation: animate2 3s ease-in-out forwards;
        }
        @keyframes animate2
        {
            from
            {
               width: 0%;
            }

            to
            {
               width: 40%;
            }
        }
    }


    .skills:nth-child(3) .percent
    {
        position: relative;
        width: calc(100% - 150px);
        height: 20px;
        margin: 0 10px;
        border-radius: 10px;
        background: #151515;
        box-shadow: inset 0 0 10px #000;
        overflow: hidden;

        .progress
        {
            position: absolute;
            top: 0;
            left: 0;
            width: 70%;
            height: 100%;
            border-radius: 10px;
            background: rgb(12, 143, 231);
            box-shadow: inset 0 0 2px #000;
            animation: animate3 3s ease-in-out forwards;
        }
        @keyframes animate3
        {
            from
            {
               width: 0%;
            }

            to
            {
               width: 45%;
            }
        }
    }

} 
</style>