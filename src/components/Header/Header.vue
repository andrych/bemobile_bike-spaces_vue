<template>
  <header class="c-header">
    <h1 class="c-header__title">
      Bike Spaces <small>(v1.0.0)</small>
      <transition :duration="3000">
        <span class="c-header__sync" v-if="isSyncing">
          <span class="material-icons-outlined">sync</span>
          Syncing data...
        </span>
      </transition>
    </h1>
    <em class="c-header__powered">
      <span>Powered by</span>
      <img src="@/assets/logo.png" alt="Vue logo" />
    </em>
  </header>
</template>

<script lang="ts">
export default {
  props: {
    isSyncing: Boolean
  }
};
</script>

<style scoped lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.c-header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 2px solid #0277bd;
}

.c-header__title {
  margin: 0;
  font-size: 2rem;
  color: #01579b;

  small {
    font-size: 1rem;
    color: #546e7a;
  }
}

.c-header__sync {
  display: inline-flex;
  align-items: center;
  margin-left: 1rem;
  font-size: 1rem;
  color: #1de9b6;
  transform: translateY(0.5rem);

  .material-icons-outlined {
    animation: spin 500ms ease-in infinite;
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
