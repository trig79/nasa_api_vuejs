<template>
  <div>
    <h1>Nasa Image Search</h1>
    <h5>Leave the search field empty to return latest photos, or be more specific 'moon', 'sun' etc.</h5>
    <h5>Please note a new tab will open if you select an image.</h5>
    <div class="search-container">
      <form action="/action_page.php">
        <input v-model="searchWord" type="text" placeholder="Search.." name="search" />
        <button v-on:click.prevent="search" type="submit">Search</button>
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
    //images: [],
  }),
  methods: {
    search() {
  let url
  this.searchWord
    ? url = `https://images-api.nasa.gov/search?q=${this.searchWord}&media_type=image`
    : url = `https://images-api.nasa.gov/search?q=latest&media_type=image`
  //console.log(url) //bug testing

  axios
    .get(url)
    .then(response => {
      const json = response.data.collection.items
      console.log(json)
      
      let images = []
      let i;
      for (i=0;i<json.length;i++){
        images.push(json[i]['links'][0])
      }
      console.log(images)
       this.$store.commit('addImages', images)
      // const state = this.$store.state.images
      // console.log(state[0]['links'])
    //   console.log(state[0][0]['links'][0]['href'])
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

form {
  padding: 1%;
  margin-bottom: 2%;
}
</style>
