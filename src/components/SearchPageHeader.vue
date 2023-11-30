<template>
  <div class="wrapper">
    <div class="search__header">
      <div class="header-left">
        <img
          src="../assets/logo.svg"
          alt="logo"
        >
        <input
          class="header__search search-input"
          type="search"
          placeholder="Поиск..."
        >
      </div>
      <div class="header-right">
        <button class="header__btn btn__entr">
          Вход
        </button>
        <button class="header__btn btn__reg">
          Регистрация
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPageHeader',
};
</script>

<style lang="scss" scoped>
.search__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  font-size: 18px;
}

.header-left,
.header-right {
  display: flex;
  align-items: center;
}

.header-left {
  column-gap: 12px;
}

.header-right {
  column-gap: 10px;
}

.header__btn {
  width: 140px;
  height: 40px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border-radius: 20px;
  font-weight: 500;
}

.btn__entr {
  background-color: #fff;
  border: 1.5px solid $brandColor;
  margin-left: 15px;
}

.btn__reg {
  background-color: $brandColor;
  border: none;
}
</style>
