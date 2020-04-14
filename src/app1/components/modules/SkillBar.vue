<template>
 <div class="ms">
   <div class="container">

    <div class="skills">
      <span class="Name">Php</span>  
      <div class="percent">
        <div class="progress"></div>  
      </div>
      <span class="Value">50%</span>
    </div>

    <div class="skills">
      <span class="Name">Jquery</span>  
      <div class="percent">
        <div class="progress"></div>  
      </div>
      <span class="Value">40%</span>
    </div>

    <div class="skills">
      <span class="Name">Laravel</span>  
      <div class="percent">
        <div class="progress"></div>  
      </div>
      <span class="Value">50%</span>
    </div>

    <div class="skills">
      <span class="Name">Vue.js</span>  
      <div class="percent">
        <div class="progress"></div>  
      </div>
      <span class="Value">40%</span>
    </div>
    
    <div class="skills">
      <span class="Name">MYSQL</span>  
      <div class="percent">
        <div class="progress"></div>  
      </div>
      <span class="Value">35%</span>
    </div>

    
    <div class="skills">
      <span class="Name">Html & Css</span>  
      <div class="percent">
        <div class="progress"></div>  
      </div>
      <span class="Value">45%</span>
    </div>

   </div> 
  </div> 
</template>

<script>
export default {
  name: 'SkillBar',
  data: () => {
    return {

    }
  }, 
}
</script>

<style lang="scss" scoped>
.ms
{
    justify-content: center;
    align-items: center;
    height: 80vh;
    background: #cccccc;
}

.container
{
    position: relative;
    width: 100%;

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
               width: 50%;
            }
        }
    }

    .skills:nth-child(4) .percent
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
            background: rgb(103, 37, 226);
            box-shadow: inset 0 0 2px #000;
            animation: animate4 3s ease-in-out forwards;
        }
        @keyframes animate4
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


    .skills:nth-child(5) .percent
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
            background: rgb(221, 252, 192);
            box-shadow: inset 0 0 2px #000;
            animation: animate5 3s ease-in-out forwards;
        }
        @keyframes animate5
        {
            from
            {
               width: 0%;
            }

            to
            {
               width: 35%;
            }
        }
    }


    .skills:nth-child(6) .percent
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
            background: rgb(182, 238, 233);
            box-shadow: inset 0 0 2px #000;
            animation: animate6 3s ease-in-out forwards;
        }
        @keyframes animate6
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