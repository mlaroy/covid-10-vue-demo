<template>
  <div id="app">
    <h1>COVID-19 Information</h1>
    <p>Source: https://api.covid19api.com</p>
    <p>Built with <a href="https://vuejs.org/">Vue</a>, hosted on <a href="https://www.netlify.com/">Netlify</a>, <a href="https://github.com/mlaroy/covid-10-vue-demo">Github repo</a></p>
    <ApiData />
    <p>&copy; {{ date }} <a href="https://mikelaroy.ca">Michael LaRoy</a></p>
  </div>
</template>

<script>
import ApiData from './components/ApiData.vue'


export default {
  name: 'App',
  components: {
    ApiData
  },
  data() {
    const date = new Date().getFullYear();
    return {
      date
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.layout {
    max-width: 960px;
    margin: 0 auto;
}

.results {
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(300px, 1fr));
    grid-gap: 40px;
    margin: 40px 0;
}

.box {
    padding: 1.5rem;
    box-shadow: 2px 2px 15px 10px rgba(0,0,0, 0.1);
}

.countries {
    text-align: left;
}

.countries ul {
    list-style: none;
}

.countries li {
    margin-bottom: 1rem;
}

table td,
table th {
  padding: 10px;
}

table tr:nth-of-type(odd) {
  background: #ddd;
}

table td.numbers {
  text-align: right;
}
</style>
