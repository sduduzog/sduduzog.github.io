<template>
  <p class="text-gray-700"><slot></slot></p>
</template>
<style lang="scss" scoped>
p + p , pre + p{
  @apply mt-2.5;
}
</style>
