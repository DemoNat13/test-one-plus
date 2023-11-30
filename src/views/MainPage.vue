<template>
  <div class="main-page">
    <nav>
      <router-link to="/search">
        Maket
      </router-link> |
      <router-link to="/currency">
        Currency table
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
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
