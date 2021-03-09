<template>
  <div class="c-loader">
    <span class="c-loader__icon material-icons-outlined">directions_bike</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@keyframes spin {
  0% {
    opacity: 0;
    transform: translateX(-200px);
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.c-loader__icon {
  font-size: 3rem;
  animation: spin 1s ease-out infinite;
}
</style>
