<template>
  <div class="search__footer">
    <div class="wrapper">
      <div class="footer__nav">
        <div class="nav-list">
          <p class="nav-list-header">
            NFT
          </p>
          <a href="#"> Что такое NFT </a>
          <a href="#"> Создайте NFT с нами </a>
          <div class="nav-list-social">
            <a href="#">
              <img src="../assets/icons/twitter.svg">
            </a>
            <a href="#">
              <img src="../assets/icons/vkontakte.svg">
            </a>
          </div>
        </div>
        <div class="nav-list">
          <p class="nav-list-header">
            Компания
          </p>
          <a href="#"> О нас </a>
          <a href="#"> Отправить запрос</a>
        </div>
        <div class="nav-list">
          <p class="nav-list-header">
            Другое
          </p>
          <a href="#"> Условия использования </a>
          <a href="#"> Политика конфиденциальности </a>
        </div>
      </div>
      <div class="wrapper-for-star">
        <img
          class="footer__img"
          src="../assets/icons/star-big.svg"

          alt="star-big"
        >
        <div class="footer__line" />
        <!-- <hr class="footer__line"> -->
      </div>

      <p class="footer__company">
        @ tnft.ru Company, Inc
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SeacrhPageFooter',
};
</script>

<style lang="scss" scoped>
  .search__footer {
    font-family: 'Istok Web', sans-serif;
    background-color: $brandColor;
  }
  .footer__nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 7px 30px;
    column-gap: 80px;
    font-size: 18px;
  }
  .nav-list {
    display: flex;
    flex-direction: column;
    a {
      margin-bottom: 12px;
      text-decoration: none;
      color: black;
    }
  }
  .nav-list-header {
    font-size: 20px;
    font-weight: 700;
  }
  .nav-list-social {
    display: flex;
    column-gap: 10px;
  }
  .footer__img {
    display: block;
    margin: 0 auto 10px auto;
  }
  .footer__company {
    text-align: center;
    opacity: 0.5;
    font-size: 18px;
  }
  .wrapper-for-star {
    position: relative;
  }
  .footer__line {
    position: absolute;
    height: 1px;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    top: 23px;
  }
</style>
