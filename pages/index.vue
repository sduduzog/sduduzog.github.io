<template>
  <section class="max-w-screen-md space-y-8 font-bold">
    <h1 class="text-xl lg:text-3xl text-accent-color">
      I write code. Lots and lots of code. To be honest, I also delete most of
      it too, but hey, that's how programming is, I guess.
    </h1>
    <p class="lg:text-2xl text-gray-800">
      I'm a software developer at
      <a class="underline" href="https://codeo.co.za/team">Codeo_</a> where I've
      contributed to building and breaking really cool stuff. We eventually fix
      most of it I swear.
    </p>
    <p class="lg:text-2xl text-gray-800">
      I completed a BSc Computer Science degree at the University of Zululand.
      Although you don't stop learning, you can't be a student forever, and it
      was great fun being a student.
    </p>
    <p class="lg:text-2xl text-gray-800">
      I played cricket in high school. I was in various student societies and
      councils during the course of my degree. Apart from that, I'm a code
      enthusiast. A great fan of open source and it's community. I enjoy reading
      tech blogs and I'm gradually getting myself to write more. I hope to one
      day speak in front of an audience about my experiences.
    </p>
  </section>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
    }
  },
}
</script>
