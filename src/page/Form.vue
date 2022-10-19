<template>
  <div >
    <div>
      <label class="title-label">Personal Details</label>
      <personal-details></personal-details>
    </div>

    <div>
      <label class="title-label">Professional Summary</label>
      <professional-summary></professional-summary>
    </div>
    
    <div>
      <label class="title-label">Employment History</label>
      <employment-history></employment-history>
    </div>

    <div>
      <label class="title-label">Education</label>
      <education></education>
    </div>

    <div>
      <label class="title-label">Skills</label>
      <skills></skills>
    </div>
    
    
  </div>
</template>

<script>
import personalDetails from "@/components/personalDetails.vue"
import professionalSummary from "@/components/professionalSummary.vue"
import employmentHistory from "@/components/employmentHistory.vue"
import education from "@/components/education.vue"
import skills from "@/components/skills.vue"

export default {
  name: 'Form',
  components:{
    personalDetails,
    professionalSummary,
    employmentHistory,
    education,
    skills
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.title-label{
    font-size: 20px;
    font-weight: bold;
    margin:10px 0px;
}

</style>
