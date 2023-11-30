<template>
  <div class="wrapper">
    <div class="search__tools">
      <select class="tools__filters">
        <option selected>
          Фильтры
        </option>
      </select>
      <input
        class="search-input tools__search"
        type="search"
        placeholder="Поиск..."
      >
      <select class="tools__default">
        <option selected>
          По умолчанию
        </option>
      </select>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SearchPageTools',
};
</script>

<style lang="scss" scoped>
  .search__tools {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    align-items: center;
    margin-bottom: 12px;
  }
  .tools__search {
    flex-grow: 3;
    width: inherit;
  }
  .tools__default,
  .tools__filters {
    padding: 2px 10px;
    border: 1px solid $borderInput;
    border-radius: 10px;
    font-size: 18px;
    line-height: 24px;
    appearance: none;
    -webkit-appearance: none;
  }
  .tools__filters {
    flex-grow: 1;
    background-image: url('../assets/icons/triangle.svg');
    background-repeat: no-repeat;
    background-position: 94% 55%;
  }
  .tools__default {
    flex-grow: 2;
    background-image: url('../assets/icons/chevron-down (1).svg');
    background-repeat: no-repeat;
    background-position: 97% 50%;
  }
  .tools__default,
  .tools__filters,
  .tools__search {
    background-color: transparent;
  }
  .wrapper {
    padding-top: 0;
  }
</style>
