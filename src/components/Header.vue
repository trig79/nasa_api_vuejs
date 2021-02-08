<template>
  <div>
    <h1>Nasa Image Search</h1>
    <h5>Leave the search field empty to return latest photos, or be more specific; 'moon', 'sun' etc.
    Please note a new tab will open if you select an image.</h5>
    <div class="search-container">
      <form action="/action_page.php">
        <input v-model="searchWord" id="search" type="text" placeholder="Search.." name="search" />
        <button v-on:click.prevent="search" id="button" type="submit"><i class="fas fa-search"></i></button>
      </form>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'Header',
  data: () => ({
    searchWord: "",
  }),
  methods: {
    search() {
  let url
  this.searchWord
    ? url = `https://images-api.nasa.gov/search?q=${this.searchWord}&media_type=image`
    : url = `https://images-api.nasa.gov/search?q=latest&media_type=image`

  axios
    .get(url)
    .then(response => {
      const json = response.data.collection.items
      
      let images = []
      let i;
      for (i=0;i<json.length;i++){
        images.push(json[i]['links'][0])
      }
       this.$store.commit('addImages', images)
     })
    .catch(error => {
      console.log(error)
    })

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  letter-spacing: .5rem;
  color: rgb(39, 39, 138);
}

h5 {
  margin: auto;
  font-size: 1.1rem;
  font-weight: normal;
  letter-spacing: .1rem;
  width: 70%;

}
form {
  padding: 1%;
  margin-bottom: 2%;
}

@media screen and (max-width: 500px) {
h1 {
  letter-spacing: .1rem;
}

h5 {
  margin: auto;
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: 0;
  width: 90%;

}

  
}
</style>
