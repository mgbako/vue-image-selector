<template>
  <div class="media">
    <div class="media-wrapper" v-for="(media, index) in mediaLocal" :key="index">

      <div class="media-img" :class="{'selected': (singleSelected.id === media.id)}"
      @click="onSelectImage(media)" v-if="!isMultiple">
        <img :src="media.img" :alt="index">
      </div>

      <div class="media-img"  
        :class="{'multi-selected': (media.selected)}" v-if="isMultiple" 
        @click="onSelectMultipleImage(media)">
        <img :src="media.img" :alt="media.alt">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MediaFile',
  props: {
    medias: {
      type: Array,
      default: []
    },
    isMultiple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mediaLocal: [],
      singleSelected: {
        id: ''
      },
      multipleSelected: []
    }
  },
  created () {
    this.mediaLocal = this.medias
  },
  methods: {
    getMedias: function (dir) {
    },
    onSelectImage: function (mediaObject) {
      this.singleSelected = Object.assign({}, this.singleSelected, mediaObject)
      this.$emit('onSelectImage', mediaObject)
    },
    onSelectMultipleImage: function (mediaObject) {
     /*  this.mediaLocal = this.mediaLocal.map(item => {
        if (mediaObject.id === item.id) {
          item.selected = !item.selected
        }
        return item
      }) */

      this.mediaLocal = this.markAsSelected(this.mediaLocal, mediaObject)

      this.multipleSelected = this.mediaLocal.filter(item => {
        return !!item.selected
      })

      this.$emit('onSelectMultipleImage', this.multipleSelected)
    },
    markAsSelected: function (mediaLocal, mediaObject) {
      mediaLocal = this.mediaLocal.map(item => {
        if (mediaObject.id === item.id) {
          item.selected = !item.selected
        }
        return item
      })
      return mediaLocal
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.media-wrapper{
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
.media-img {
    width: 100px;
    height: 100px;
    padding: 5px;
    margin: 0 5px;
}

.media-img img{
  width: 100%;
  height: 100%;
}

.selected{
  background: #333;
}

.multi-selected{
   background: #333;
}
</style>
