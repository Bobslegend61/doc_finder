<template>
  <div>
    <div class="alert alert-danger" role="alert" v-show="errorMsg">{{ errorMsg }}</div>
    <form @submit="searchDoctors"> 
      <div><input type="text" placeholder="Enter text" v-model="text"></div>
      <div>
        <label for="distance">Distance <small>(Miles)</small>:</label>
        <input type="number" id="distance" placeholder="Distance from your current location" v-model="distance">
      </div>
      <div>
        <label for="select">Filtered By:</label>
        <select id="select" v-model="filter">
          <option disabled value="">Please select one</option>
          <option>Name</option>
          <option>First name</option>
          <option>Last name</option>
          <option>Gender</option>
          <option>Problem</option>
        </select>
      </div>
      <div>
        <span></span>
        <input type="submit" value="Find">
      </div>
    </form>    
  </div>
</template>

<script>
export default {
    name: 'search-form',
    data() {
        return {
            text: '',
            filter: '',
            distance: '',
            errorMsg: undefined,
        }
    },
    methods: {
      searchDoctors(e) {
        e.preventDefault();
        this.errorMsg = undefined;
        if(this.text.trim() == '' || this.filter.trim() == '' || typeof(parseInt(this.distance)) != 'number') {
          return this.errorMsg = 'Please fill in all fields and make sure they are valid'
        }

        let filter = '';
        switch(this.filter) {
          case 'Name':
            filter = 'name';
            break;
          case 'First name': 
            filter = 'first_name';
            break;
          case 'Last name':
            filter = 'last_name';
            break;
          case 'Gender':
            filter = 'gender';
            break;
          case 'Problem':
            filter = 'query';
            break;
        }

        const data = { search: this.text, filter, distance: this.distance };
        this.$emit('search-doctors', data);
        // this.text = '';
        // this.filter = '';
        // this.distance = '';
      }
    }
}
</script>

<style scoped>
  form {
    padding-left: 50px;
    padding-right: 50px;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 25px;
  }

  form div:nth-child(2), form div:nth-child(3) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  input, select {
    border: 1px solid gray;
    border-radius: 20px;
  }

  input[type="text"] {
    height: 50px;
    width: 100%;
    padding: 10px;
  }

  input:focus, select:focus {
    border: 1px solid #4A0487;
    box-shadow: 1px 1px 1px gray;
  }

  input:focus, select:focus {
    outline: none;
  }

  label {
    text-align: left;
    font-size: 20px;
    padding-top: 10px;
  }

  select, input[type='number'] {
    height: 40px;
    padding: 10px;
  }

  form div:last-child {
    display: grid;
    grid-template-columns: 2fr 1.5fr;
  }

  input[type="submit"] {
    width: 100%;
    padding: 10px;
    text-transform: uppercase;
    border: 1px solid;
    background: #4A0487;
    color: #fff;
  }

  @media (max-width: 600px) {
    form div:nth-child(2), form div:nth-child(3) {
      grid-template-columns: 1fr;
    }
  }
</style>


