<template>
    <div>
      <b-row>
        <b-col cols="2">
          <img v-if="imgSrc==null" src="@/assets/personBlank.jpg" style="width: 60px; padding-top: 20px; "/>
          <div v-else id="preview"><img :src="imgSrc" style="width: 60px; padding-top: 20px; height: 75px;"/></div>
        </b-col>
        <b-col cols="10">
          <div class="upload-photo">
            Upload Foto
            <input type="file" @change="onFileChange" class="hidden-photo" accept="image/png, image/gif, image/jpeg" />
          </div>
        </b-col>
      </b-row>
    </div>
</template>

<script>
export default {
  name: 'InputFile',
  props:{
    placeholder:{
        default:""
    },
  },
  data () {
    return {
      imgSrc:null

      
    }
  }, 
  methods:{
    onFileChange(e) {
      const file = e.target.files[0];
      this.imgSrc = URL.createObjectURL(file);
    }

  }

}
</script>

<style>
.upload-photo{
    margin: 40px 0px 0px 5px;
    color: #438df3;
    cursor: pointer;
    position:relative
}

.hidden-photo{
  opacity: 0.0; 
  position: absolute; 
  top:0; left: 0; bottom: 0; right:0; 
  width: 100%; 
  height:100%;
}

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}


</style>