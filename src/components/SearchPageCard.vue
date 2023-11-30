<template>
  <div class="search__card">
    <img
      src="../assets/images/photo.jpg"
      alt="photo"
    >
    <div>Без слов</div>
    <div class="card__person d-flex">
      <img
        src="../assets/images/photo-small.jpg"
        alt="pers-photo"
        height="48px"
        width="48px"
      >
      <div class="d-flex flex-column">
        <p class="mb-1">
          Настя Ивлеева Вячеславовна
        </p>
        <div>
          <span>Проверено</span>
          <img src="../assets/icons/checked.svg">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        Редкость:
      </div>
      <div class="col">
        Уникальная
      </div>
    </div>
    <div class="row">
      <div class="col">
        Цена:
      </div>
      <div class="col">
        От 500Р
      </div>
    </div>
    <button>Купить</button>
  </div>
</template>

<script>
export default {
  name: 'SearchPageCard',
};
</script>

<style lang="scss" scoped>
  .search__card {
    display: flex;
    flex-direction: column;
    padding: 9px 9px 13px 9px;
    border: 0.7px solid $borderCards;
    background-color: transparent;
  }
</style>
