<template>
<div>
    <b-row>
        <b-col md="6" cols="6">
            <input-text :label="'Wanted Job Title'" :showHint="true" :hintText="'write your wanted job title \n ex:Software Engineer'"></input-text>
        </b-col>
        <b-col md="6" cols="6">
            <input-file></input-file>
        </b-col>

        <b-col md="6" cols="6">
            <input-text :label="'First Name'"></input-text>
        </b-col>
        <b-col md="6" cols="6">
            <input-text :label="'Last Name'"></input-text>
        </b-col>

        <b-col md="6" cols="6">
            <input-text :isEmail="true" :label="'Email'"></input-text>
        </b-col>
        <b-col md="6" cols="6">
            <input-text :label="'Phone'"></input-text>
        </b-col>

        <b-col md="6" cols="6">
            <selection :label="'Country'" :itemList="listCountry"></selection>
        </b-col>
        <b-col md="6" cols="6">
            <selection :label="'City'" :itemList="listCity"></selection>
        </b-col>

        <b-col md="6" cols="6">
            <input-text :label="'Address'"></input-text>
        </b-col>
        <b-col md="6" cols="6">
            <input-text :label="'Postal Code'"></input-text>
        </b-col>

        <b-col md="6" cols="6">
            <input-text :label="'Driving License'" :showHint="true" :hintText="'write your Driving License \n ex:SIM A-1234523231'"></input-text>
        </b-col>
        <b-col md="6" cols="6">
            <input-text :label="'Nationality'" :showHint="true" :hintText="'Choose your Nationality'"></input-text>
        </b-col>

        <b-col md="6" cols="6">
            <input-text :label="'Place of Birth'"></input-text>
        </b-col>
        <b-col md="6" cols="6">
            <input-text :label="'Date of Birth'" :type="'date'" :showHint="true" :hintText="'Choose your date of birth'"></input-text>
        </b-col>
    </b-row>
</div>
</template>

<script>
import inputText from "@/components/InputText.vue";
import inputFile from "@/components/InputFile.vue"
import selection from "@/components/selection.vue"

export default {
  name: 'personalDetails',
  components:{
    inputText,inputFile,selection
  },
  data () {
    return {
        listCountry:[
            {id:"1",name:"Indonesia"},
            {id:"2",name:"Malaysia"},
            {id:"3",name:"Vietnam"},
            {id:"4",name:"Thailand"},
            {id:"5",name:"Singapora"},
        ],
        listCity:[
            {id:"1",name:"Jakarta"},
            {id:"2",name:"Pontianak"},
            {id:"3",name:"Bandung"},
            {id:"4",name:"Bangkok"},
            {id:"5",name:"Batam"},
        ]
      
    }
  }
}
</script>

<style scoped>


</style>
