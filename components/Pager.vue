<script setup lang="ts">
import type { SlidevContext } from "@slidev/client/modules/context.ts";

import { inject } from "vue";
import { injectionSlidevContext } from "@slidev/client/constants.ts"

const $slidev = inject(injectionSlidevContext, {} as SlidevContext)
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
  <div class="pager" :class="{ [`pager--${$slidev.nav.currentLayout}`]: $slidev.nav.currentLayout }">
    <span class="pager__current">{{ $slidev.nav.currentPage }}</span>
    <span class="pager__separator">/</span>
    <span class="pager__total">{{ $slidev.nav.total }}</span>
  </div>
</template>
