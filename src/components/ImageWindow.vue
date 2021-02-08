<template>

  <a :href="href" target="_blank"><img :src="href"></a>

</template>

<script>


export default {
    name: 'ImageWindow',
    props: ['href'],
    // data: () => ({
    // images: [{
    //     1 : "https://images-assets.nasa.gov/image/PIA12274/collection.json",
    // }]
//   })
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img {
    width: 100%;
    height: 100%;
    object-fit: cover 
}

</style>
