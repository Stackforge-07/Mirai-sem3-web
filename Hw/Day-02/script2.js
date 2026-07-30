
const dsp=document.getElementById('display')
function appendto(inp) {

    dsp.value+=inp;
}

function cleardisplay() {
    dsp.value="";
    
}

function calculate() {
    display.value=eval(display.value)
}