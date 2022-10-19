<template>
  <div>
    <div class="Input">
        <label for="input" class="Input-label">{{ label }}</label>
        <span v-if="showHint" class="hint-mark" :data-tooltip="hintText"  data-tooltip-location="bottom"> ? </span>
        <div>
            <select class="select-head">
              <option value="0">Select Country:</option>
              <option v-for="(item,idx) in itemList" :key="idx" :value="idx">{{item.name}}</option>
            </select>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props:{
    placeholder:{
        default:""
    },
    label:{
        default:""
    },
    showHint:{
        default:false
    },
    hintText:{
        default:""
    },
    itemList:{
      default:()=>([])
    },
    value:{
      default:""
    }
  },
  data () {
    return {
        isError:false,
        msgError:"required"
      
    }
  },
  methods:{
    inputText(e){
        this.value = e.target.value
        this.validateValue(this.value)
        this.$emit("input", this.value)
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Dosis');

.select-head{
  width: 100%;
  height: 50px;
  background: #d9e3f2;
  border-radius: 5px;
}
.error-msg{
    color: #c60808;
    font-size: 12px;
}


.Title {
  margin: 0 0 7rem 0;
  padding: 0;
  color: #fff;
  font-size: 3.5rem;
  font-weight: 400;
  line-height: 1rem;
  text-align: center;
}

.Input {
  position: relative;
  margin: 8px 0px;
}

.Input-text {
    background: #d9e3f2;
    display: block;
    margin: 0;
    padding: 0.8rem 0.5rem;
    color: inherit;
    width: 100%;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 0.4rem;
}

.Input-label {
    font-size: 15px;
    opacity: 0.5;
}

.hint-mark{
    padding: 1px 5px;
    border: 1px solid #478bf0;
    color: #478bf0;
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;
}

[data-tooltip] {
  --arrow-size: 5px;
  position: relative;
  z-index: 10;
}

[data-tooltip]:before,
[data-tooltip]:after {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  left: 50%;
  bottom: calc(100% + var(--arrow-size));
  pointer-events: none;
  transition: 0.2s;
  will-change: transform;
}

[data-tooltip]:before {
  content: attr(data-tooltip);
  padding: 10px 18px;
  min-width: 50px;
  max-width: 300px;
  width: max-content;
  width: -moz-max-content;
  border-radius: 6px;
  font-size: 14px;
  background-color: rgba(59, 72, 80, 0.9);
  background-image: linear-gradient(30deg,
    rgba(59, 72, 80, 0.44),
    rgba(59, 68, 75, 0.44),
    rgba(60, 82, 88, 0.44));
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
  white-space: pre-wrap;
  transform: translate(-50%,  calc(0px - var(--arrow-size))) scale(0.5);
}

/* Tooltip arrow */
[data-tooltip]:after {
  content: '';
  border-style: solid;
  border-width: var(--arrow-size) var(--arrow-size) 0px var(--arrow-size); /* CSS triangle */
  border-color: rgba(55, 64, 70, 0.9) transparent transparent transparent;
  transition-duration: 0s; /* If the mouse leaves the element, 
                              the transition effects for the 
                              tooltip arrow are "turned off" */
  transform-origin: top;   /* Orientation setting for the
                              slide-down effect */
  transform: translateX(-50%) scaleY(0);
}
[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
  visibility: visible;
  opacity: 1;
}
[data-tooltip]:hover:before {
  transition-delay: 0.3s;
  transform: translate(-50%, calc(0px - var(--arrow-size))) scale(1);
}
[data-tooltip]:hover:after {
  transition-delay: 0.5s; /* Starting after the grow effect */
  transition-duration: 0.2s;
  transform: translateX(-50%) scaleY(1);
}

/* BOTTOM */
[data-tooltip-location="bottom"]:before,
[data-tooltip-location="bottom"]:after {
  top: calc(100% + var(--arrow-size));
  bottom: auto;
}
[data-tooltip-location="bottom"]:before {
  transform: translate(-50%, var(--arrow-size)) scale(0.5);
}
[data-tooltip-location="bottom"]:hover:before {
  transform: translate(-50%, var(--arrow-size)) scale(1);
}

[data-tooltip-location="bottom"]:after {
  border-width: 0px var(--arrow-size) var(--arrow-size) var(--arrow-size);
  border-color: transparent transparent rgba(55, 64, 70, 0.9) transparent;
  transform-origin: bottom;
}
</style>