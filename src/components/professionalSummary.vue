<template>
<div>
    <label for="input" class="Input-label">
            Write 2-4 short & energetic sentences to interest the reader! Mention your role,experience & most importantly-your biggest achievments,best qualities and skills.
    </label>
    <b-row>
        <b-col md="12">
          <rich-text :value="myHTML" :placeholder="'e.g. Passionate science teacher with 8+ years of experience and track record of ...'"></rich-text>
        </b-col>
    </b-row>
</div>
</template>

<script>
import richText from "./richText.vue"

export default {
  name: 'professionalSummary',
  components:{
    richText
  },
  data () {
    return {
      myHTML:""
      
    }
  }
}
</script>

<style>
.Input-label {
    font-size: 15px;
    opacity: 0.5;
}


</style>
