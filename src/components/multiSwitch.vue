<template>
    <div>
        <fieldset class="multiswitch" style="padding-top: 10px;" >
				<div>Level - <span :style="'color:'+checkedColor">{{level}}</span></div>
				<div class="slide-container" :style="' background:'+allBackground">
					<input type="radio" name="btn" :id="'btn1'+index" @click="(e)=>clickRadioBtn('btn1Checked',e)">
					<label :for="'btn1'+index" :style="allbtn.btn1Checked ? 'background:'+checkedColor:''"> &nbsp;&nbsp;</label>

					<input type="radio" name="btn" :id="'btn2'+index" @click="(e)=>clickRadioBtn('btn2Checked',e)" >
					<label :for="'btn2'+index" :style="allbtn.btn2Checked ? 'background:'+checkedColor:''"> &nbsp;&nbsp;</label >

					<input type="radio" name="btn" :id="'btn3'+index" @click="(e)=>clickRadioBtn('btn3Checked',e)" checked>
					<label :for="'btn3'+index" :style="allbtn.btn3Checked ? 'background:'+checkedColor:''"> &nbsp;&nbsp;</label>

					<input type="radio" name="btn" :id="'btn4'+index" @click="(e)=>clickRadioBtn('btn4Checked',e)">
					<label :for="'btn4'+index" :style="allbtn.btn4Checked ? 'background:'+checkedColor:''"> &nbsp;&nbsp;</label>
                    
					<input type="radio" name="btn" :id="'btn5'+index" @click="(e)=>clickRadioBtn('btn5Checked',e)">
					<label :for="'btn5'+index" :style="allbtn.btn5Checked ? 'background:'+checkedColor:''">&nbsp;&nbsp; </label>
					<a class="slide" aria-hidden="true"></a>
				</div>
			</fieldset>     
    </div>
  
</template>

<script>
export default {
    props:{
        index:{
            default:""
        }
    },
    data(){
        return{
            allBackground:"rgba(237, 165, 9,0.3)",
            checkedColor:"rgb(237, 165, 9)",
            allbtn:{
                btn1Checked:false,
                btn2Checked:false,
                btn3Checked:true,
                btn4Checked:false,
                btn5Checked:false
            },
            level:"Skillful"
        }
    },
    methods:{
        clickRadioBtn(temp,e){
            this.resetBtn()
            this.allbtn[temp] = e.target.checked

            if(temp == "btn1Checked"){
                this.allBackground = 'rgba(196, 28, 26,0.3)'
                this.checkedColor = 'rgb(196, 28, 26)'
                this.level = "Novice"
            }else if(temp == "btn2Checked"){
                this.allBackground = 'rgba(212, 203, 30,0.3)'
                this.checkedColor = 'rgb(212, 203, 30)'
                this.level = "Beginner"
            }else if(temp == "btn3Checked"){
                this.allBackground = 'rgba(237, 165, 9,0.3)'
                this.checkedColor = 'rgb(237, 165, 9)'
                this.level = "Skillful"
            }else if(temp == "btn4Checked"){
                this.allBackground = 'rgba(7, 168, 9,0.3)'
                this.checkedColor = 'rgb(7, 168, 9)'
                this.level = "Experienced"
            }else if(temp == "btn5Checked"){
                this.allBackground = 'rgba(122, 11, 156,0.3)'
                this.checkedColor = 'rgb(122, 11, 156)'
                this.level = "Expert"
            }

            this.$emit("change",this.level)
        },
        resetBtn(){
            this.allbtn.btn1Checked=false,
            this.allbtn.btn2Checked=false,
            this.allbtn.btn3Checked=false,
            this.allbtn.btn4Checked=false,
            this.allbtn.btn5Checked=false
        },

    }

}
</script>

<style>

.multiswitch input {
  position: absolute;
  left: -200vw;
}

.multiswitch .slide-container {
  height: 40px;
  position: relative;
  display: flex;
  max-width: 50em;
  line-height: 2em;
  /* don't allow highlighting the text inside the toggle */
  user-select: none; 
}

.multiswitch .slide-container label {
  /* Even though we're using "flex" to display, we have to assign widths so that we know exactly where to position the slide */
  width: 50%;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  z-index: 2;
}

.multiswitch .slide-container a {
  position: absolute;
  left: 50%;
  z-index: 1;
  height: 100%;
  width: 50%;
  transition: left 0.1s ease-out;
  box-shadow: 1px 0 0 rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

/*
  Auto adjusting widths
*/
.multiswitch label:nth-last-child(6),
.multiswitch label:nth-last-child(6) ~ label,
.multiswitch label:nth-last-child(6) ~ a {
  width: 33.3334%;
}

.multiswitch label:nth-last-child(8),
.multiswitch label:nth-last-child(8) ~ label,
.multiswitch label:nth-last-child(8) ~ a {
  width: 25%;
}

.multiswitch label:nth-last-child(10),
.multiswitch label:nth-last-child(10) ~ label,
.multiswitch label:nth-last-child(10) ~ a {
  width: 20%;
}

.multiswitch label:nth-last-child(12),
.multiswitch label:nth-last-child(12) ~ label,
.multiswitch label:nth-last-child(12) ~ a {
  width: 16.6667%;
}

/*
 Slider
*/

/* all options, first selected */
.multiswitch input:checked ~ a {
  left: 0;
  box-shadow: 1px 0 0 rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.25);
}
/* 2 options, 2nd selected */
.multiswitch label:nth-last-child(4) ~ input:nth-child(3):checked ~ a {
  left: 50%;
}
/* 3 options, 2nd selected */
.multiswitch label:nth-last-child(6) ~ input:nth-child(3):checked ~ a {
  left: 33.3334%;
}
/* 3 options, 3rd selected */
.multiswitch label:nth-last-child(6) ~ input:nth-child(5):checked ~ a {
  left: 66.6667%;
}
/* 4 options, 2nd selected */
.multiswitch label:nth-last-child(8) ~ input:nth-child(3):checked ~ a {
  left: 25%;
}
/* 4 options, 3rd selected */
.multiswitch label:nth-last-child(8) ~ input:nth-child(5):checked ~ a {
  left: 50%;
}
/* 4 options, 4th selected */
.multiswitch label:nth-last-child(8) ~ input:nth-child(7):checked ~ a {
  left: 75%;
}
/* 5 options, 2nd selected */
.multiswitch label:nth-last-child(10) ~ input:nth-child(3):checked ~ a {
  left: 20%;
}
/* 5 options, 3rd selected */
.multiswitch label:nth-last-child(10) ~ input:nth-child(5):checked ~ a {
  left: 40%;
}
/* 5 options, 4th selected */
.multiswitch label:nth-last-child(10) ~ input:nth-child(7):checked ~ a {
  left: 60%;
}
/* 5 options, 5th selected */
.multiswitch label:nth-last-child(10) ~ input:nth-child(9):checked ~ a {
  left: 80%;
}
/* 6 options, 2nd selected */
.multiswitch label:nth-last-child(12) ~ input:nth-child(3):checked ~ a {
  left: 16.6667%;
}
/* 6 options, 3rd selected */
.multiswitch label:nth-last-child(12) ~ input:nth-child(5):checked ~ a {
  left: 33.3334%;
}
/* 6 options, 4th selected */
.multiswitch label:nth-last-child(12) ~ input:nth-child(7):checked ~ a {
  left: 50%;
}
/* 6 options, 5th selected */
.multiswitch label:nth-last-child(12) ~ input:nth-child(9):checked ~ a {
  left: 66.6667%;
}
/* 6 options, 6th selected */
.multiswitch label:nth-last-child(12) ~ input:nth-child(11):checked ~ a {
  left: 83.3334%;
}

/*
  Slider shadows
*/
/* middle spots */
.multiswitch input:not(:first-child):checked ~ a {
  box-shadow: 1px 0 0 rgba(0, 0, 0, 0.2),
              -1px 0 0 rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.25);
}
/* last spots */
.multiswitch label:nth-last-child(4) ~ input:nth-child(3):checked ~ a,
.multiswitch label:nth-last-child(6) ~ input:nth-child(5):checked ~ a,
.multiswitch label:nth-last-child(8) ~ input:nth-child(7):checked ~ a,
.multiswitch label:nth-last-child(10) ~ input:nth-child(9):checked ~ a,
.multiswitch label:nth-last-child(12) ~ input:nth-child(11):checked ~ a {
  box-shadow: -1px 0 0 rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.25);
}


/*
 RH Brand Styling
*/
body {
  font: 16px/1.5em "Overpass", "Open Sans", Helvetica, sans-serif;
  color: #333;
}

fieldset {
  border: 0;
  padding: 0;
}

fieldset legend {
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
}

.multiswitch .slide-container {
  background: #333;
  color: #fff;
  transition: background 0.1s ease-out;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.3);
}

.multiswitch .slide-container label {
  cursor: pointer;
  text-shadow: 0 1px 1px rgba(0, 0, 0, .4);
}

.multiswitch .slide-container a {
  background: #f8f7f7;
  border: 1px solid #c8cacb;
}

/* Stoplight theme */
.multiswitch[data-theme="stoplight"] .slide-container > a {
  background: #c00;
  border-color: #8a0000;
}

.multiswitch[data-theme="stoplight"] input:not(:first-child):checked ~ a {
  background: #ec7a08;
  border-color: #bc6106;
}

.multiswitch[data-theme="stoplight"] label:nth-last-child(4) ~ input:nth-child(3):checked ~ a,
.multiswitch[data-theme="stoplight"] label:nth-last-child(6) ~ input:nth-child(5):checked ~ a,
.multiswitch[data-theme="stoplight"] label:nth-last-child(8) ~ input:nth-child(7):checked ~ a,
.multiswitch[data-theme="stoplight"] label:nth-last-child(10) ~ input:nth-child(9):checked ~ a,
.multiswitch[data-theme="stoplight"] label:nth-last-child(12) ~ input:nth-child(11):checked ~ a {
  background: #3f9c35;
  border-color: #307628;
}

/*
 Horizontal layout
*/
.switch {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
}

/*
 Because a11y
*/
.multiswitch input:focus ~ a {
  outline: 2px solid #d9dbdc;
}

</style>