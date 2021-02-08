<template>
  <div class="home">
    <Header />

    <section v-if="images">    
      <div  v-for="image in images" :key="image.index" class="image-div">
        <ImageWindow :href="image.href" /> <!--pass href as props to component -->
      </div>
    </section>

</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import ImageWindow from '@/components/ImageWindow.vue'

export default {
  name: 'Home',
  components: {
    Header,
    ImageWindow
  },
  computed: {
    images: function(){

      let arr = this.$store.state.images[0]
      return !arr? arr : arr.slice(0,9)

  }
}
}
</script>

<style>
.home {
  height: 90vh;
}
section {
  height: 70%;
  width: 80%;
  margin: auto;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
}

.image-div {
  width: 30%;
  height: 30%;
  overflow: hidden;
  border-radius: 3%;
  box-shadow: 5px 5px 5px rgb(126, 125, 125);
  transition: .5s;
  
}

.image-div:hover {
  transform: scale(.9);
  box-shadow: 5px 5px 10px rgb(7, 7, 7);
}


</style>
