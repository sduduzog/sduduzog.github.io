<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap');
:root {
  --primary-color: #ffa000;
  --secondary-color: #ff6f00;
  --accent-color: #ff3d00;
}

html {
  font-family: 'Ubuntu Mono', monospace;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
