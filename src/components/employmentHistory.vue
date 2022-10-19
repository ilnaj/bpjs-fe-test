<template>
<div>
    <label for="input" class="Input-label">    
      Show your relevant experience(last 10 years).Use bullet points to note your achievements,if possible-use numbers/facts(Acvhieved X,measured by Y,by doint Z).
    </label>
    <b-row>
        <div v-if="value.length==0" class="add-butt" @click="addEmployment"> + add employment</div>
        <div v-else>
          <b-col md="12">
                <div class="accordion-menu">
                  <ul v-for="(emp,idx) in value" :key="idx" style="margin-top:5px">
                      <li>
                          <input type="checkbox" checked>
                          <i class="arrow"></i>
                          <h2>
                            <span v-if="emp.jobTitle == '' || emp.employer == '' || emp.startDate==null || emp.endDate==null ">(not specify)</span>
                            <span v-else>
                              <span style="font-size: 16px;font-weight: bold;">{{ emp.jobTitle }} at {{emp.employer}}</span> <br>
                              <span style="font-size:14px">{{emp.startDate}} - {{emp.endDate}}</span>
                            </span>
                          </h2>
                          <p tyle="width:100%">
                            <b-row>
                              <b-col><input-text :label="'Job Title'" :value="emp.jobTitle" @input="(e)=>emp.jobTitle = e"></input-text></b-col>
                              <b-col><input-text :label="'Employer'" :value="emp.employer"  @input="(e)=>emp.employer = e"></input-text></b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                  <b-row>
                                    <b-col><input-text :label="'Start Date'" :type="'date'" :value="emp.startDate"  @input="(e)=>emp.startDate = e"></input-text></b-col>
                                    <b-col><input-text :label="'End Date'" :type="'date'" :value="emp.endDate"  @input="(e)=>emp.endDate = e"></input-text></b-col>
                                  </b-row>
                              </b-col>
                              <b-col><input-text :label="'City'" :value="emp.city"  @input="(e)=>emp.city = e"></input-text></b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <label>Description</label>
                                <rich-text :value="emp.description"  @input="(e)=>edu.description = e"></rich-text>
                              </b-col> 
                            </b-row>
                          </p>
                      </li>
                  </ul>
              </div>
          </b-col>
          <div @click="addEmployment" class="add-butt"> + add one more employment</div>
        </div>
    </b-row>
</div>
</template>

<script>
import richText from "@/components/richText.vue"
import inputText from "@/components/InputText.vue"

export default {
  name: 'employmentHistory',
  props:{
    value:{
      default: ()=>([])
    }
  },
  components:{
    richText,
    inputText
  },
  data () {
    return {
      
    }
  },
  methods:{
    addEmployment(){
      let newObj = {
        jobTitle:"",
        employer:"",
        startDate:null,
        endDate:null,
        city:"",
        description:""
      }
      this.value.push(newObj)
    },
    _inputText(temp,e){
      temp = e
    }
  }
}
</script>

<style scoped>
.Input-label {
    font-size: 15px;
    opacity: 0.5;
}

.add-butt{
  color: #3696df;
  font-weight: bold;
  padding: 15px 40px;
  cursor:pointer
}

.accordion-menu {
	border-radius: 5px;
}
h2 {
	font-size: 18px;
	line-height: 34px;
	font-weight: 500;
	letter-spacing: 1px;
	display: block;
	margin: 0;
    cursor: pointer;
    color: #6c6c6a;
}
p {
	color: rgba(48, 69, 92, 0.8);
	font-size: 15px;
	line-height: 26px;
	letter-spacing: 1px;
	position: relative;
	overflow: hidden;
	max-height: 800px;
	opacity: 1;
	transform: translate(0, 0);
	margin-top: 14px;
	z-index: 2;
}
ul {
	list-style: none;
	perspective: 900;
	padding: 0 20px 2px;
    margin: 0;
    background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 
	0 2px 2px 0 rgba(255, 255, 255, 0.19);
}
ul li {
	position: relative;
	padding: 0;
	margin: 0;
	padding-bottom: 4px;
	padding-top: 18px;
    border-top: 1px dotted #dce7eb;
}

ul li:nth-child(1){ border:none; }
ul li:nth-of-type(1) { animation-delay: 0.5s; }
ul li:nth-of-type(2) { animation-delay: 0.75s; }
ul li:nth-of-type(3) { animation-delay: 1.0s; }
ul li:last-of-type { padding-bottom: 0; }

ul li .arrow {
	position: absolute;
	transform: translate(-6px, 0);
	margin-top: 16px;
	right: 0;
}
ul li .fas{
	color:#f6483b;
	font-size: 15px;
	margin-right: 10px;
}
ul li .arrow:before, ul li .arrow:after {
	content: "";
	position: absolute;
	background-color: #f6483b;
	width: 3px;
	height: 9px;
}
ul li .arrow:before {
	transform: translate(-2px, 0) rotate(45deg);
}
ul li .arrow:after {
	transform: translate(2px, 0) rotate(-45deg);
}
ul li input[type=checkbox] {
	position: absolute;
	cursor: pointer;
	width: 100%;
	height: 100%;
    z-index: 1;    
    opacity: 0;
}
ul li input[type=checkbox]:checked ~ p {
	margin-top: 0;
	max-height: 0;
	opacity: 0;
	transform: translate(0, 50%);
}
ul li input[type=checkbox]:checked ~ .arrow:before {
	transform: translate(2px, 0) rotate(45deg);
}
ul li input[type=checkbox]:checked ~ .arrow:after {
	transform: translate(-2px, 0) rotate(-45deg);
}
.transition, p, ul li .arrow:before, ul li .arrow:after {
	transition: all 0.25s ease-in-out;
}

.flipIn, h1, ul li {
	animation: flipdown 0.5s ease both;
}
.no-select, h2 {
	-webkit-tap-highlight-color: transparent;
	-webkit-touch-callout: none;
	user-select: none;
}
@keyframes flipdown {
	0% {
		opacity: 0;
		transform-origin: top center;
		transform: rotateX(-90deg);
	}

	5% { opacity: 1; }

	80% { transform: rotateX(8deg); }

	83% { transform: rotateX(6deg); }

	92% { transform: rotateX(-3deg); }

	100% {
		transform-origin: top center;
		transform: rotateX(0deg);
	}
}



</style>
