<template>
    <div class="allstars">
            <div class="star1"></div>
            <div class="star2"></div>
            <div class="star3"></div>
            <div class="star4"></div>
            <div class="star5"></div>
            <div class="star6"></div>
            <div class="star7"></div>
            <div class="star8"></div>
            <div class="star9"></div>
            <div class="star10"></div>
            <div class="star11"></div>
            <div class="star12"></div>
            <div class="star13"></div>
            <div class="star14"></div>
            <div class="star15"></div>
            <div class="star16"></div>
            <div class="star17"></div>
            <div class="star18"></div>
            <div class="star19"></div>
            <div class="star20"></div>
            <div class="star21"></div>
            <div class="star22"></div>
            <div class="star23"></div>
            <div class="star24"></div>
            <div class="star25"></div>
            <div class="star26"></div>
            <div class="star27"></div>
            <div class="star28"></div>
            <div class="star29"></div>
            <div class="star30"></div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import '/src/styles/color.scss';
.allstars {
      width: 100%;
      height: 100%;
      border-radius: 0;
      position: absolute;
      left: 0;
      top: 0;
}
@-webkit-keyframes falling {
  0%, 100% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  0% {
    transform: translate(100px, 0px);
  }
  100% {
    transform: translate(0px, 200px);
  }
}
@keyframes falling {
  0%, 100% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  0% {
    transform: translate(100px, 0px);
  }
  100% {
    transform: translate(0px, 200px);
  }
}
.allstars [class^=star] {
  width: .0375rem;
  height: .0375rem;
  border-radius: 50%;
  background-color: #fff;
  -webkit-animation: falling 2s infinite;
          animation: falling 2s infinite;
}
.allstars .star1 {
  position: absolute;
  left: 22%;
  top: 3%;
  -webkit-animation-delay: -0.1s;
          animation-delay: -0.1s;
}
.allstars .star2 {
  position: absolute;
  left: 16%;
  top: 24%;
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s;
}
.allstars .star3 {
  position: absolute;
  left: 69%;
  top: -5%;
  -webkit-animation-delay: -0.3s;
          animation-delay: -0.3s;
}
.allstars .star4 {
  position: absolute;
  left: 34%;
  top: 19%;
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s;
}
.allstars .star5 {
  position: absolute;
  left: 19%;
  top: -11%;
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s;
}
.allstars .star6 {
  position: absolute;
  left: 23%;
  top: -18%;
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s;
}
.allstars .star7 {
  position: absolute;
  left: 40%;
  top: -6%;
  -webkit-animation-delay: -0.7s;
          animation-delay: -0.7s;
}
.allstars .star8 {
  position: absolute;
  left: 91%;
  top: -12%;
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s;
}
.allstars .star9 {
  position: absolute;
  left: 14%;
  top: -1%;
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s;
}
.allstars .star10 {
  position: absolute;
  left: 55%;
  top: 31%;
  -webkit-animation-delay: -1s;
          animation-delay: -1s;
}
.allstars .star11 {
  position: absolute;
  left: 68%;
  top: 47%;
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s;
}
.allstars .star12 {
  position: absolute;
  left: 58%;
  top: 44%;
  -webkit-animation-delay: -1.2s;
          animation-delay: -1.2s;
}
.allstars .star13 {
  position: absolute;
  left: 36%;
  top: 37%;
  -webkit-animation-delay: -1.3s;
          animation-delay: -1.3s;
}
.allstars .star14 {
  position: absolute;
  left: 71%;
  top: 45%;
  -webkit-animation-delay: -1.4s;
          animation-delay: -1.4s;
}
.allstars .star15 {
  position: absolute;
  left: 33%;
  top: -8%;
  -webkit-animation-delay: -1.5s;
          animation-delay: -1.5s;
}
.allstars .star16 {
  position: absolute;
  left: 88%;
  top: -1%;
  -webkit-animation-delay: -1.6s;
          animation-delay: -1.6s;
}
.allstars .star17 {
  position: absolute;
  left: 21%;
  top: 8%;
  -webkit-animation-delay: -1.7s;
          animation-delay: -1.7s;
}
.allstars .star18 {
  position: absolute;
  left: 69%;
  top: 42%;
  -webkit-animation-delay: -1.8s;
          animation-delay: -1.8s;
}
.allstars .star19 {
  position: absolute;
  left: 70%;
  top: -14%;
  -webkit-animation-delay: -1.9s;
          animation-delay: -1.9s;
}
.allstars .star20 {
  position: absolute;
  left: 90%;
  top: 31%;
  -webkit-animation-delay: -2s;
          animation-delay: -2s;
}
.allstars .star21 {
  position: absolute;
  left: 88%;
  top: 38%;
  -webkit-animation-delay: -2.1s;
          animation-delay: -2.1s;
}
.allstars .star22 {
  position: absolute;
  left: 91%;
  top: 24%;
  -webkit-animation-delay: -2.2s;
          animation-delay: -2.2s;
}
.allstars .star23 {
  position: absolute;
  left: 9%;
  top: 6%;
  -webkit-animation-delay: -2.3s;
          animation-delay: -2.3s;
}
.allstars .star24 {
  position: absolute;
  left: 37%;
  top: -24%;
  -webkit-animation-delay: -2.4s;
          animation-delay: -2.4s;
}
.allstars .star25 {
  position: absolute;
  left: 20%;
  top: 26%;
  -webkit-animation-delay: -2.5s;
          animation-delay: -2.5s;
}
.allstars .star26 {
  position: absolute;
  left: 7%;
  top: -17%;
  -webkit-animation-delay: -2.6s;
          animation-delay: -2.6s;
}
.allstars .star27 {
  position: absolute;
  left: 55%;
  top: 2%;
  -webkit-animation-delay: -2.7s;
          animation-delay: -2.7s;
}
.allstars .star28 {
  position: absolute;
  left: 73%;
  top: 21%;
  -webkit-animation-delay: -2.8s;
          animation-delay: -2.8s;
}
.allstars .star29 {
  position: absolute;
  left: 49%;
  top: 4%;
  -webkit-animation-delay: -2.9s;
          animation-delay: -2.9s;
}
.allstars .star30 {
  position: absolute;
  left: 8%;
  top: -27%;
  -webkit-animation-delay: -3s;
          animation-delay: -3s;
}
</style>