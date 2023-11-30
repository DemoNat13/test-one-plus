<template>
  <div class="search__card">
    <img
      src="../assets/images/photo.jpg"
      alt="photo"
    >
    <div class="card__text">
      Без слов
    </div>
    <div class="card__person">
      <img
        src="../assets/images/photo-small.jpg"
        alt="pers-photo"
        height="48px"
        width="48px"
      >
      <div class="d-flex flex-column mb-1">
        <p class="person__name mb-0">
          Настя Ивлеева Вячеславовна
        </p>
        <div class="card__checked">
          <span class="me-2">проверено</span>
          <img src="../assets/icons/checked.svg">
        </div>
      </div>
    </div>
    <div class="card__rarity">
      <p class="rarity-text mb-0">
        Редкость:
      </p>
      <p class="rarity-value mb-0">
        уникальная
      </p>
    </div>
    <div class="card__price">
      <p class="price-text mb-0">
        Цена:
      </p>
      <p class="price-value mb-0">
        от 500 ₽
      </p>
    </div>
    <button class="card__buy-btn">
      Купить
    </button>
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
    margin-bottom: 30px;
    padding: 8px 8px 13px 8px;
    border: 0.7px solid $borderCards;
    background-color: transparent;
  }
  .card__text {
    font-weight: 700;
    line-height: 34.62px;
  }
  .card__person {
    display: flex;
    column-gap: 5px;
  }
  .card__checked {
    color: $brandColorDark;
    font-size: 11px;
  }
  .person__name {
    font-size: 14px;
    line-height: 17px;
  }
  .card__rarity,
  .card__price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .rarity-text,
  .price-text {
    font-size: 14px;
  }
  .rarity-value,
  .price-value {
    padding: 3px 15px;
    border-radius: 7px;
    font-size: 11px;
    line-height: normal;
  }
  .rarity-value {
    border: 1px solid #EC851A;
    background-color: transparent;
  }
  .price-value {
    background-color: $brandColor;
  }
  .card__buy-btn,
  .card__text {
    font-family: 'Istok Web', sans-serif;
  }
  .card__buy-btn {
    margin-left: 8px;
    margin-right: 8px;
    padding: 6px 0;
    border: none;
    border-radius: 15px;
    background: linear-gradient(to right, #FDD446, #F69B47);
    line-height: 25px;
    font-size: 17px;
  }
</style>
