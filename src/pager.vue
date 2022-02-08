<style scoped>
.pager {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 60%;
  padding: 5px;
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
