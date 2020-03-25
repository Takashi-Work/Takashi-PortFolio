<template>
  <div class="sidebar" :class="{'show': showSidebar}">
      <div class="control">
          <i  @click="showNav"><font-awesome-icon icon="angle-double-right" /></i>
      </div>
      <div class="navigation-icons">
          <i><font-awesome-icon icon="home" /></i>
          <i><font-awesome-icon icon="plus" /></i>
          <i><font-awesome-icon icon="edit" /></i>
          <i><font-awesome-icon icon="address-book" /></i>
          <i><font-awesome-icon icon="question-circle" /></i>
      </div>

      <div class="navigation-links">
          <transition-group name="rotate">
              <div v-show="showLink" key="1">Home</div>
              <div v-show="showLink" key="2">Create</div>
              <div v-show="showLink" key="3">Edit</div>
              <div v-show="showLink" key="4">List</div>
              <div v-show="showLink" key="5">Inquiry</div>
          </transition-group>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => {
    return {
      showSidebar: false,
      showLink: false
    }
  },
  methods: {
    showNav () {
      if (this.showSidebar) {
        this.showLink = false
        setTimeout(() => {
          this.showSidebar = false
        }, 500)
      } else {
        this.showSidebar = true
        setTimeout(() => {
          this.showLink = true
        }, 500)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: absolute;
  top: 76px;
  left: 0;
  width: 50px;
  padding: 4px 3px 0 10px;
  min-height: calc(100vh);
  background-color:  rgba($color: rgb(47, 54, 34), $alpha: .8);
  border: solid #fff;
  border-width: 0 1px 0 0;
  z-index: 999;
  transition: all .5s ease-in-out;

  .control {
      display: flex;
      justify-content: left;
      align-items: left;
      width: 50px;
      margin-bottom: 6px;

      i {
          font-size: 2rem;
          color: #fff;
          cursor: pointer;
          transition:  all .5s ease-in-out;
      }
  }

  &.show {
      width: 180px;

      .control > i {
          color: #fff;
          transform: rotateZ(-180deg);
      }

      .navigation-icons {
          color: #fff;
      }
  }

  .navigation-icons {
      display: flex;
      justify-content: left;
      align-items: left;
      flex-direction: column;
      width: 50px;
      float: left;

      i {
          font-size: 1.7rem;
          padding: 5px 0  ;
          cursor: pointer;
          transition: all .5s ease-in-out;

          &:hover {
              color: #fff;
          }
      }
  }
  .navigation-links {
      font-size: 14px;
      float: left;
      color: #fff;

      div {
          font-size:  1.35rem;
          padding-left: 10px;
          margin-bottom: 18px;
          cursor: pointer;

          &:hover {
              color: #42b983;
          }
      }
  }
}
@mixin nav-childs($values...) {
  //  @each $var in $values {
 //       &:nth-child(#{$var}) {
  //         transition: transform liner calc(.1s * #{$var}), display .5s;
   //     }
    //}
} /*
.rotate-enter-active, .rotate-Leave-active {
    @include nav-childs(1,2,3,4,5);
}

.rotate-enter, .rotate-Leave-to {
    transform: scale(0);

}*/

</style>
