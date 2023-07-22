<template>
  <p class="text-gray-700 sm:text-base"><slot></slot></p>
</template>
<style lang="scss" scoped>
p + p {
  @apply mt-2.5;
}
</style>
