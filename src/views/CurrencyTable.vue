<template>
  <div class="currencies">
    <h1 class="mx-auto mb-5">
      Таблица валют
    </h1>
    <table class="table table-bordered mb-5">
      <thead>
        <tr>
          <th scope="col">
            Id
          </th>
          <th scope="col">
            Symbol
          </th>
          <th scope="col">
            Name
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(currency, index) in currenciesList"
          :key="currency.id"
          :class="getRowColor(index, currency.symbol)"
          class="table-row"
        >
          <td>{{ currency.id }}</td>
          <td>{{ currency.symbol }}</td>
          <td>{{ currency.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'CurrencyTable',
  data: () => ({
    currenciesList: [],
  }),
  mounted() {
    this.getCurrencies();
  },
  methods: {
    async getCurrencies() {
      const results = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1');
      this.currenciesList = await results.json();
    },
    getRowColor(index, symbol) {
      return {
        row_blue: index <= 4,
        row_green: symbol === 'usdt',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.currencies {
  margin: 0 10rem;
}
.table-row.row_blue td  {
  background-color: rgba(13, 109, 253, 0.603);
}
.table-row.row_green td{
  background-color: #16db7f9c;
}
</style>
