<template>
  <div class="barraTopo">
    <nav class="navBar">
      <img
        src="/images/brinquedo.png"
        class="logo"
      >
      <Titulo
        :texto="$route.name"
        class="titulo"
      />
    </nav>
  </div>
</template>

<script src="./scripts.js"></script>

<style lang="scss">
  @import './style.scss'
</style>
