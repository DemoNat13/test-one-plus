<template>
  <div class="search">
    <search-page-header />
    <div class="row">
      <div class="col">
        <search-page-card />
      </div>
      <div class="col">
        <search-page-card />
      </div>
      <div class="col">
        <search-page-card />
      </div>
    </div>
  </div>
</template>

<script>
import SearchPageHeader from '@/components/SearchPageHeader.vue';
import SearchPageCard from '@/components/SearchPageCard.vue';

export default {
  name: 'SearchPage',
  components: {
    SearchPageHeader,
    SearchPageCard,
  },
};
</script>

<style lang="scss" scoped>
  .search {
    margin: 18px 30px;
  }
</style>
