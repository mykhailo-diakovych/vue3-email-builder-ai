<template>
  <div class="loader3">
    <div class="circle1"></div>
    <div class="circle1"></div>
    <div class="circle1"></div>
    <div class="circle1"></div>
    <div class="circle1"></div>
  </div>
</template>
<script setup></script>

<style scoped>
.loader3 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.circle1 {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin: 0 2px;
  background-color: #fff;
  animation: circle1 1s ease-in-out infinite;
}

.circle1:nth-child(2) {
  animation-delay: 0.2s;
}

.circle1:nth-child(3) {
  animation-delay: 0.4s;
}

.circle1:nth-child(4) {
  animation-delay: 0.6s;
}

.circle1:nth-child(5) {
  animation-delay: 0.8s;
}

@keyframes circle1 {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
