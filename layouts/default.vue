<template>
  <div
    class="min-h-screen grid md:grid-cols-layout md:grid-rows-2 bg-background"
  >
    <div class="md:pt-32">
      <img
        class="h-32 m-auto mt-12 rounded-lg shadow-lg md:mt-18"
        src="~/assets/img/sdu.jpg"
        alt="My face"
      />
      <h1 class="p-4 mt-6 text-lg font-semibold text-center text-primary-color">
        Beautus S. Gumede
      </h1>
      <h2 class="mb-4 text-center text-secondary-color">
        I write code. Lots and lots of code.
      </h2>
      <div class="flex justify-center social">
        <a id="github" href="https://github.com/sduduzog">
          <img src="~/assets/img/github.svg" alt="Github icon" />
        </a>
        <a id="twitter" href="https://twitter.com/sduduzo_g">
          <img src="~/assets/img/twitter.svg" alt="Twitter icon" />
        </a>
        <a id="devto" href="https://dev.to/sduduzog">
          <img src="~/assets/img/devto.svg" alt="Dev to icon" />
        </a>
      </div>
    </div>
    <div class="p-12 row-start-2"></div>
    <div class="row-span-2">
      <nuxt />
    </div>
  </div>
</template>
<style lang="scss">
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
</style>
