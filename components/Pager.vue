<script setup lang="ts">
import { useNav } from "@slidev/client"

const { currentPage, currentLayout, total } = useNav()
</script>

<style scoped>
.pager {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 60%;
  padding: 5px;
  line-height: 1.4em;
  width: auto !important;
  height: auto !important;
}

.pager--end {
  display: none;
}

.pager__separator {
  margin: 0 0.4em;
}
</style>

<template>
  <div class="pager" :class="{ [`pager--${currentLayout}`]: currentLayout }">
    <span class="pager__current">{{ currentPage }}</span>
    <span class="pager__separator">/</span>
    <span class="pager__total">{{ total }}</span>
  </div>
</template>
