<template>
  <div id="app">
    <app-header />
    <router-view/>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from './components/layouts/Footer';
import AppHeader from './components/layouts/Header';

export default {
  components: {
    AppFooter,
    AppHeader
  }
}
</script>


<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: High Tower Text;
    line-height: 1.0;
    color: #262626;
    background: #F4F4F4;
  }

  #app {
    width: 70%;
    margin: auto;
    padding: 0 5px;
  }

  @media (max-width: 800px) {
    #app {
      width: 100%;
    }
  }
</style>
