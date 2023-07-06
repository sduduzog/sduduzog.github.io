<template>
  <p class="text-gray-900"><slot></slot></p>
</template>
<style lang="scss" scoped>
p + p {
  @apply mt-2.5;
}
</style>
