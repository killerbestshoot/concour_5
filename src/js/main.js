const butt_name = document.getElementById('butt_1_name');
console.log(butt_name)
var i = 0;
// var story ='d';
var speed = 50;

    function typeWriter(txt,container) {
        var texte=txt;
        console.log(texte.length)
        if (i < texte.length) {
            document.getElementById(container).innerHTML += txt.charAt(i);
            console.log(txt);
            i++;

            setTimeout(typeWriter, speed);
        }
    }
    // butt_name.addEventListener()

// console.log('bnj')
var t ='le jur';
// console.log(t.)
butt_name.addEventListener('click',()=>{
    var name=document.getElementById('name').value;
    typeWriter(name,'username');
});