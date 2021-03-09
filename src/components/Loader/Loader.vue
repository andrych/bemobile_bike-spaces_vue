<template>
  <div class="c-loader">
    <span class="c-loader__icon material-icons-outlined">directions_bike</span>
    <p class="c-loader__message">{{ message }}</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
@keyframes move-l-to-r {
  0% {
    opacity: 0;
    transform: translateX(-250px);
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(200px);
  }
}

.c-loader {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #fff;
  color: #01579b;
}

.c-loader__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 3rem;
  animation: move-l-to-r 1.3s ease-out infinite;
  transform: translate(-50%, -50%);
}

.c-loader__message {
  margin-top: 10rem;
}
</style>
