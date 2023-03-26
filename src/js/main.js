// import anime from 'node_modules/animejs/lib/anime.es.js';
const butt_name = document.getElementById('butt_1_name');
const vid_story= document.getElementById('vids-story');
const start_btn=document.getElementById('start-btn');
var i = 0;
var speed = 10;
const story=" L'histoire de la vidéo remonte aux années 1950 et 1960, lorsque la " +
    "        technologie de la télévision a commencé à se développer rapidement. La " +
    "        première vidéo enregistrée a été réalisée en 1951 par John Logie Baird, " +
    "        qui avait également été impliqué dans le développement de la" +
    "        télévision." +
    "        Dans les années 1960, les caméras vidéo grand public sont devenues" +
    "        disponibles et ont permis aux gens d'enregistrer des événements" +
    "        familiaux et des souvenirs personnels. En même temps, les entreprises" +
    "        ont commencé à utiliser la vidéo pour la formation et la communication" +
    "        en interne." +
    "        Dans les années 1970, la diffusion de la vidéo a commencé à se" +
    "        généraliser avec l'arrivée des magnétoscopes grand public. Les gens" +
    "        pouvaient enregistrer des émissions de télévision et les regarder plus" +
    "        tard, ce qui a révolutionné la façon dont nous consommons la" +
    "        télévision." +
    "        Dans les années 1980, la technologie de la vidéo a continué à évoluer" +
    "        avec l'arrivée des caméras vidéo légères et portables, ce qui a permis" +
    "        une plus grande liberté de mouvement et a stimulé la création de vidéos" +
    "        d'entreprise, de documentaires et de vidéos musicales. Dans les années" +
    "        1990, l'avènement d'Internet a ouvert de nouvelles possibilités pour la" +
    "        vidéo.Les sites de partage de vidéos en ligne ont commencé" +
    "        à apparaître, permettant aux gens de télécharger et de partager des" +
    "        vidéos avec un public mondial." +
    "        Au cours des deux dernières décennies, la vidéo est devenue omniprésente" +
    "        dans notre vie quotidienne, grâce à l'amélioration continue de la" +
    "        technologie de la vidéo et à la prolifération des appareils mobiles" +
    "        capables d'enregistrer et de lire des vidéos." +
    "        Les réseaux sociaux tels que YouTube, TikTok et Instagram ont également" +
    "        transformé la façon dont nous consommons et créons des vidéos,";
const nameInput = document.getElementById('name');

butt_name.addEventListener('click',()=>{
    const prelude= ", avant de commencer j'ai a te raconter un peu de l'histoire de la video.";
    let name_user=document.getElementById('name').value;
    const container=document.getElementById('welcom-txt');
    if(name_user.length>0){
        const name=name_user+prelude;
        container.innerHTML='';
        vid_story.innerHTML='';
        let i = 0;
        const speed = 60;
        let pointcounts=0;
        typeWriter(name, container, name.length, i, speed);
    // Appeler typeWriter à nouveau pour afficher l'histoire de la vidéo
        setTimeout(() => {
            container.innerHTML += "<br /><br />";
            vid_story.innerHTML='';
            i = 0;
            pointcounts=0;
            typeWriter(story, vid_story, story.length, i, speed,pointcounts);
            console.log(container);
        }, name.length * speed+1500); // attendre que la première animation soit terminée avant de commencer la deuxième
        setTimeout(()=>{
                start_btn.classList.remove('hidden');
        },story.length*69);// attendre que la deuxime animation soit finit pour lancer l'apparition du bouton
    }else{
        alert("Un nom est necessaire");
    }
});

function typeWriter(txt, container, leng, i, speed,pointcounts) {
    // itération du texte
    if (i < leng) {
        if (txt.charAt(i) === '.') {
            pointcounts++;
            if (pointcounts % 2 === 0) {
                container.innerHTML += ".<br /><br />";
            } else {
                container.innerHTML += ".";
            }
        } else {
            container.innerHTML += txt.charAt(i);
        }
        i++;
        setTimeout(() => {
            typeWriter(txt, container, leng, i, speed,pointcounts);
        }, speed);
    }
    return i+1;
}