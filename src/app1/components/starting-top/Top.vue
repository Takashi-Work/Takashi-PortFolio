<template>
  <div class="hello">
    <div id="back"  >
      <nav>
        <div @click="closes" class="close" ></div>
        <router-link  to="/">Home</router-link>
        <router-link  to="/profile">Profile</router-link>
        <router-link  to="/work">Work</router-link>
        <router-link  to="/contact">Contact</router-link>
      </nav>
    </div>

    <div class="window" :class="{'show':showWindow ,'closed': closedBack  }">
      <div @click="shows" class="hamburger" ><span></span></div>
      <transition name="fade">
       <div id="main">
         <div class="message">
           <p><i><span>T</span>hank  <span>Y</span>ou  <span>F</span>or  <span>C</span>oming.</i></p>
           <h2>W E L  C O M E </h2>
           <h2> T O </h2>
           <h1><span>TAKASHI  NAGAI  PORT  FOLIO</span></h1>
         </div>
         <div id="container">
           <section></section>
           <section></section>
           <section></section>
         </div>
       </div>
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Top',
  data: () => {
    return {
      showWindow: false,
      closedBack: false

    }
  },
  methods: {
    shows () {
      if (this.showWindow === false) {
        this.showWindow = true
        this.closedBack = false
      }
    },
    closes () {
      if (this.closedBack === false) {
        this.closedBack = true
        this.showWindow = false
      }
    }
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.hello
{
  perspective: 1000px;
  font-family: 'Constantia';
  margin: 0;
  padding: 0;
  max-height: 100vh;
  overflow: hidden;

   #back
   {
      top: 0;
      left: 0;
      width: 100%;
      height: 120vh;
      position: fixed;
      background:  url('../../assets/photos/susi1027481.jpg'),rgba(144, 149, 135.4);
      background-size: cover;
    //background: #34495e;
      font-size: 33px;

      nav
      {
        padding: 120px 34px;

        a
        {
          display: block;
          margin-bottom: 25px;
          text-decoration: underline;
          color:rgb(27, 112, 112);
          cursor: pointer;

          &:hover {
              color: #fff;
          }
        }
      }
    }

    .window
    {
       overflow: hidden;
       height: 110vh;
       width: 100vw;
       position: relative;

       #main
       {
         overflow: hidden;
         height: 109vh;
         pointer-events: auto;
         position: relative;
         z-index: 4;
         background:  url('../../assets/photos/TSU413004.jpg') rgba(214, 221, 203.7);
         background-size: cover;
         background-repeat: no-repeat;
         transform-origin:  right;
         transition: all 0.8s ease-in-out;
         box-shadow: 60px 30px 30px 20px rgba(0,0,0,0.7);

         .message {
           justify-content: center;
           align-items: center;

           p
           {
             padding-top: 150px;
             text-align: center;
             font-family: 'Constantia';
             color: #fff;
             font-size: 75px;

             span {
               color:silver;
               font-size: 70px;
             }

           }

           h2
           {
             text-align: center;
             color: #fff;
           }

           h1
           {
             text-align: center;
             font-family: 'Constantia';
             color: #fff;
             font-size: 50px;
             text-decoration: underline, color#000;
           }
         }
       }
       &.show
       {
         overflow: hidden;
         pointer-events: none;

         justify-content: center;
         box-shadow: 0 0 30px rgba(0,0,0,0.9);
         transform-style: preserve-3d;
         transform-origin:right ;
         transition: all 0.8s ease-in-out;
         transform: rotateY(-14deg);
       }
        @media (max-width: 600px) {
          &.show
          {
            overflow: hidden;
            pointer-events: none;
            justify-content: center;
            box-shadow: 0 0 30px rgba(0,0,0,0.9);
            transform-style: preserve-3d;
            transform-origin:right ;
            transition: all 0.8s ease-in-out;
            transform: rotateY(-46deg);
          }
       } 
       &.closed
       {
         overflow: hidden;
         pointer-events: auto;

         justify-content: center;
         transition: all 0.8s ease-in-out;
         transform: rotateY(0deg)
         translate(0 0 0);
       }
    }

  #container
  {
    height: 640px;
    text-align: center;

  }
   #container section:first-of-type
  {
    padding-top: 10vh;
  }
   #container section:first-of-type
  {
      font-size: 45px;
  }

   #container section:first-of-type p
  {
    font-size: 25px;
  }

  @media (max-width: 600px) {
    #container section:first-of-type {
      padding-top:15vh;
    }
    #container section:first-of-type h1{
      font-size: 30px;
    }
    #container section:first-of-type p{
      font-size: 18px;
    }
  }

  .hamburger
  {
    position: fixed;
    z-index: 5;
    top: 30px;
    left: 30px;
    width: 45px;
    height: 34px;
    cursor: pointer;
    user-select: none;
  }

  .hamburger span
  {
    position: relative;
  }

  .hamburger span, .hamburger span:before,
  .hamburger span:after{
    display: block;
    width: 45px;
    height: 6px;
    background-color: #fff;
    border-radius: 2px;
  }

  .hamburger span:before, .hamburger
  span:after
  {
    content: '';
    position: absolute;
  }

  .hamburger span:before{
    bottom: -14px;
  }
   .hamburger span:after{
    bottom: -28px;
  }

  .close
  {
    position:fixed;
    top: 30px;
    left: 30px;
    width: 45px;
    height: 34px;
    cursor: pointer;
  }

  .close:before, .close:after
  {
    content: '';
    position: absolute;
    display: block;
    width: 45px;
    height: 6px;
    top:50%;
    background-color: #fff;
    border-radius: 2px;
  }

  .close:before
  {
    transform: translateY(-50%)
    rotate(45deg);
  }

  .close:after
  {
    transform: translateY(-50%)
    rotate(-45deg);
  }

}
</style>
