<template>
  <div id="app" @click="triggerNext()">
    <app-header />
    <main class="wrapper">
      <dynamic-intro :bus="bus" />
    </main>
  </div>
</template>

<script src="./app.ts"></script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap");
:root {
  --primary-color: #ffa000;
  --secondary-color: #ff6f00;
  --accent-color: #ff3d00;
}
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: white;
}

#app {
  font-family: "Ubuntu Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1280px;
  margin: auto;
}
.wrapper {
  padding: 20px;
  margin: auto;
  max-width: 1280px;

  @media screen and (max-width: 450px) {
    .social {
      padding: 40px 5px;
    }
  }
}
</style>
