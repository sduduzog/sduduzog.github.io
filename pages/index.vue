<template>
  <div class="container m-auto max-w-md pt-8">
    <img
      class="face h-32 m-auto rounded-lg mt-48 shadow-lg"
      src="~/assets/img/sdu.jpg"
      alt="My face "
    />
    <h1
      class="title text-lg p-4 mt-6 font-semibold text-center text-primary-color"
    >
      Beautus S. Gumede
    </h1>
    <h2 class="text-center text-secondary-color mb-4">Software Developer</h2>
    <div class="social flex justify-center">
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
export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

<style lang="scss">
.container {
  .social {
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
