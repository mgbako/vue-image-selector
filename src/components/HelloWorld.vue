<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Single Select Image</h2>
    <media-file :medias="medias" @onSelectImage="onSelectImage"></media-file>
    <h5  v-if="imageSelected.id !== ''">Image Selected : 
      <span>
        <span> {{ imageSelected }}</span>
      </span> 
    </h5> 

    <h2>Multiple Select Images</h2>
    <media-file :medias="medias" :is-multiple="true" 
    @onSelectMultipleImage="onSelectMultipleImage"></media-file>
    <h5>Image Selected : 
      <span v-for="(imgSelected, index) in imageMultipleSelected" :key="index">
        <span> {{ imgSelected }}</span>
      </span> 
    </h5> 
  </div>

</template>

<script>
import MediaFile from './MediaFile'

export default {
  name: 'HelloWorld',
  components: {
    MediaFile
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js Media App',
      imageSelected: {
        id: '',
        src: '',
        alt: ''
      },
      imageMultipleSelected: [],
      medias: [
        {
          id: 1,
          img: 'static/img/johny1.jpg',
          alt: 'johny1'
        },
        {
          id: 2,
          img: 'static/img/johny2.jpg',
          alt: 'johny2'
        },
        {
          id: 3,
          img: 'static/img/johny3.jpg',
          alt: 'johny3'
        },
        {
          id: 4,
          img: 'static/img/johny4.jpg',
          alt: 'johny4'
        },
        {
          id: 5,
          img: 'static/img/johny5.png',
          alt: 'johny5'
        }
      ]
    }
  },
  methods: {
    onSelectImage: function (data) {
      this.imageSelected = Object.assign({}, this.imageSelected, data)
    },
    onSelectMultipleImage: function (data) {
      this.imageMultipleSelected = data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
