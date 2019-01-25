<template>
  <div class="home">
    <i class="fas fa-user-md fa-4x"></i>
    <h1 class="text-black-50">Doctor Finder</h1>
    <p class="text-dark">Find certified doctors based on your location</p>
    <search-from v-on:search-doctors="searchDoctors"/>
    <hr>
    <div>
      <h3 class="font-weight-bold">Doctors within {{ distance }} miles of your current location</h3>
      <div class="spinner-grow text-primary" role="status" v-if="!docs && !error">
        <span class="sr-only">Loading...</span>
      </div>
      <p class="text-info font-weight-lighter"  v-else-if="docs.length == 0 && !error">No Doctor found within 100 miles of your current location</p>
      <p v-else-if="error" class="alert alert-danger" role="alert">{{ error }}</p>
      <div v-else>
        <card v-bind:docs="docs"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchFrom from '@/components/search/Search.vue';
import Card from '@/components/cards/Cards.vue';

export default {
  name: 'home',
  components: {
    SearchFrom,
    Card
  },
  data() {
    return {
      docs: undefined,
      distance: 100,
      error: undefined
    }
  },
  created() {
    if('geolocation' in navigator) {
      this.error = undefined;
      const geo = navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=${latitude}%2C${longitude}%2C${ this.distance }&user_location=${latitude}%2C${longitude}&skip=0&limit=12&user_key=55f62dfd49a130921eba7e7b22b5e733`)
          .then(res => res.json())
          .then(({ data }) => this.docs = data)
          .catch(err => this.error = 'Something went wrong. Try again');
      });
    }
  },
  methods: {
    searchDoctors({ search, filter, distance }) {
      this.distance = distance;
      this.error = undefined;
      const geo = navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        fetch(`https://api.betterdoctor.com/2016-03-01/doctors?${ filter }=${ search.toLowerCase() }&location=${ latitude }%2C${ longitude }%2C${ distance }&user_location=${ latitude }%2C${ longitude }&skip=0&limit=12&user_key=55f62dfd49a130921eba7e7b22b5e733`)
          .then(res => res.json())
          .then(({ data }) => this.docs = data)
          .catch(err => this.error = 'Something went wrong. Try again');
      });
    }
  }
}
</script>

<style scoped>
  .home {
    text-align: center;
    margin-top: 30px;
  }

  .fas {
    color: #032DFF;
  }

  h1 {
    font-size: 62px;
    margin-top: 30px;
  }

  p:first-of-type {
    color: #585858;
    font-size: 28px;
    margin-bottom: 30px;
  }

  hr {
    margin: 40px auto 40px auto;
    width: 20%;
    border: 1px solid gray;
  }

  h3 {
    margin-bottom: 30px;
  }
</style>
