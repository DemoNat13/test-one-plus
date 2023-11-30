<template>
  <div class="main-page">
    <h1>Тестовое задание OcOO Один Плюс</h1>
    <nav>
      <router-link to="/search">
        Макет
      </router-link> |
      <router-link to="/currency">
        Таблица валют
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'MainPage',
};
</script>

<style lang="scss" scoped>
  .main-page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
