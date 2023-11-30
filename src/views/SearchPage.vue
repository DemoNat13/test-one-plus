<template>
  <div class="search">
    <search-page-header />
    <search-page-tools />
    <search-page-main />
    <search-page-footer />
  </div>
</template>

<script>
import SearchPageHeader from '@/components/SearchPageHeader.vue';
import SearchPageFooter from '@/components/SearchPageFooter.vue';
import SearchPageMain from '@/components/SearchPageMain.vue';
import SearchPageTools from '@/components/SearchPageTools.vue';

export default {
  name: 'SearchPage',
  components: {
    SearchPageHeader,
    SearchPageFooter,
    SearchPageMain,
    SearchPageTools,
  },
};
</script>

<style lang="scss" scoped>
  .search {
    display: flex;
    flex-direction: column;
        background: url('../assets/images/lightning-left.jpg') 0 0 no-repeat,
                url('../assets/images/lightning-right.jpg') 100% 40% no-repeat,
                url('../assets/images/star-small.jpg') 100% 55% no-repeat;
    background-size: 50%, 50%, inherit;
  }
</style>
