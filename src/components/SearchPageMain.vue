<template>
  <div class="wrapper">
    <div class="search__main">
      <div class="row">
        <div
          v-for="(n,index) in 18"
          :key="index"
          class="col"
        >
          <search-page-card />
        </div>
      </div>
      <nav class="main__pagination">
        <ul class="pagination">
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li
            class="page-item active"
          >
            <a
              class="page-link"
              href="#"
            >1</a>
          </li>
          <li
            v-for="(n,index) in 4"
            :key="index"
            class="page-item"
          >
            <a
              class="page-link"
              href="#"
            >{{ n+1 }}</a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import SearchPageCard from '@/components/SearchPageCard.vue';

export default {
  name: 'SearchPageMain',
  components: {
    SearchPageCard,
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
      background-image: url('../assets/images/lightning-down.jpg');
      background-size: 100%;
      background-position: 50% 120%;
      background-repeat: no-repeat;
  }
  .search__main {
    flex-grow: 1;
    .main__pagination {
      display: flex;
      justify-content: center;
      padding-bottom: 80px;
    }
    .pagination > li > a {
      display: inline-block;
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 50%;
      background-color: transparent;
      color: black;
      text-align: center;
      font-family: 'Istok Web', sans-serif;
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
    }
    .pagination > li > a:focus,
    .pagination > li > a:hover,
    .pagination > li > span:focus,
    .pagination > li > span:hover {
      background-color: $brandColor;
      box-shadow: none;
    }
    .pagination > .active > a,
    .pagination > .active > a:hover {
      color: black;
      background-color: $brandColor !important;
      border: none !important;;
    }
  }
</style>
