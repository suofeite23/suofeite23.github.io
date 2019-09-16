var lang = {
    "photoshop": "79%",
    "htmlcss": "90%",
    "javascript": "69%",
    "wordpress": "92%",
};
var multiply = 4;

$.each( lang, function( language, pourcent) {

        var delay = 700;

        setTimeout(function() {
            $('#'+language+'-pourcent').html(pourcent);
        },delay*multiply);

        multiply++;

    });

// const div1 = document.getElementById("test1")
// div1.addEventListener("mouseover", over)
// div1.addEventListener("mouseout", out)
function over(e){
    console.log(e.target.parentNode.children);
    const elements = e.target.parentNode.children;
    elements[1].style.display = 'none';
    elements[2].style.display = 'block';
}
function out(e){
    console.log(e.target.parentNode.children);
    const elements = e.target.parentNode.children;
    elements[1].style.display = 'block';
    elements[2].style.display = 'none';
}


const blockslist = document.getElementsByClassName("block")
for (let item of blockslist) {
    item.addEventListener("mouseover", over, {capture: false})
    item.addEventListener("mouseout", out, {capture: false})
}