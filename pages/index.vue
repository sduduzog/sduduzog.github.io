<template>
  <div class="container">
    <img class="face" src="~/assets/img/sdu.jpg" alt="My face " />
    <h1 class="title">Beautus S. Gumede</h1>
    <h2>Junior Software Developer</h2>
    <div class="social">
      <a id="github" href="https://github.com/sduduzog"
        ><img src="~/assets/img/github.svg" alt="Github icon"
      /></a>
      <a id="twitter" href="https://twitter.com/sduduzog">
        <img src="~/assets/img/twitter.svg" alt="Twitter icon" />
      </a>
      <a id="devto" href="https://dev.to/sduduzog"
        ><img src="~/assets/img/devto.svg" alt="Dev to icon"
      /></a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.container {
  max-width: 1024px;
  padding: 70px 50px 0;
  margin: auto;

  @media screen and (min-width: 449px) {
    padding-top: 150px;
  }

  img.face {
    height: 200px;
    width: auto;
    border-radius: 20px;
    display: block;
    margin: auto;
    box-shadow: 0 1px 3px 1px #607d8bab;
  }

  h1,
  h2 {
    padding: 15px;
    text-align: center;
    margin: auto;
  }

  h1 {
    margin-top: 20px;
    color: #263238;
  }
  h2 {
    color: #455a64;
  }
  .social {
    padding-top: 10px;
    display: flex;
    justify-content: center;

    a {
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      overflow: hidden;
      margin: 20px;
      padding: 10px;

      img {
        filter: invert(1);
      }

      &#twitter {
        background-color: #1da1f2;
      }
      &#github {
        background-color: #181717;
      }
      &#devto {
        background-color: #0a0a0a;
      }
    }
  }
}
</style>
