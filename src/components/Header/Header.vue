<template>
  <header class="c-header">
    <h1 class="c-header__title">Bike Spaces <small>(v1.0.0)</small></h1>
    <em class="c-header__powered">
      <span>Powered by</span>
      <img src="@/assets/logo.png" alt="Vue logo" />
    </em>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.c-header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.c-header__title {
  margin: 0;
  font-size: 2rem;
  color: #263238;

  small {
    font-size: 1rem;
    color: #546e7a;
  }
}

.c-header__powered {
  display: flex;
  align-items: center;

  span {
    position: absolute;
    white-space: nowrap;
    opacity: 0;
    transform: translateX(-75%);
    transition-property: opacity, transform;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
  }

  img {
    height: 2rem;
    margin-left: 0.5rem;
  }

  &:hover {
    span {
      opacity: 1;
      transform: translateX(-100%);
    }
  }
}
</style>
