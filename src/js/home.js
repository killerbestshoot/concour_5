document.addEventListener('DOMContentLoaded', () => {
    const pop_up = document.getElementById('pop_up_btn')
    const bdy = document.querySelector('body');
    const user_conn = document.getElementById('connected-user');
    const API_KEY = 'AIzaSyB-uEgPm0bSJQszgUrs13kganNjI9GqllY';
    const videoContainer = document.getElementById('list_vids')
    const searchParams = new URLSearchParams(window.location.search);
    const value = searchParams.get("user_name").split(' ', 1)[0];
    const sliderMenu = document.getElementById('slider-menu');
    const openMenuToggler = document.getElementById('open-menue-toggler');
    user_conn.href = './user?name=' + encodeURIComponent(value);
    user_conn.innerText += value;
    load_video_from_youtube_data_api('bande d annonce vf');
    // console.log("La valeur transmise est :", value);
    pop_up.addEventListener('click', () => {
        document.getElementById('search_box').classList.add('mx-auto');
        for_toggle();
    });
    document.getElementById('close_btn').addEventListener('click', () => {
        for_toggle();
    })

    function for_toggle() {
        pop_up.classList.toggle('max-lg:block')
        pop_up.classList.toggle('lg:block')
        pop_up.classList.toggle('hidden')
        document.getElementById('tools').classList.toggle('hidden');
        document.getElementById('list_vids').classList.toggle('hidden');
    }

    function load_video_from_youtube_data_api(searchQuery) {
        // Supprimer tous les éléments enfants du conteneur
        videoContainer.innerHTML = '';
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${searchQuery}&type=video&key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                // Boucle à travers les vidéos renvoyées par l'API et crée un élément <div> pour chacune.
                data.items.forEach(item => {
                    const videoId = item.id.videoId;
                    const iframe = document.createElement('iframe');
                    iframe.src = `https://www.youtube.com/embed/${videoId}`;
                    iframe.setAttribute('class', 'w-full h-full border-0 object-cover rounded-t-md');
                    // iframe.height = '100%';
                    // iframe.frameBorder = '0';
                    iframe.allowFullscreen = true;

                    const div = document.createElement('div');//creation du div qui aura la video et ses infos
                    const div2 = document.createElement('div');//creation du div qui recevra l'iframe
                    const div3 = document.createElement('div');//creation du div qui contiendra les infos
                    // les proprietes tailwind qu'aura les divs
                    div2.setAttribute('class', 'w-full h-4/6 bg-slate-400 rounded-t-md');
                    div3.setAttribute('class', 'w-full h-2/6 bg-slate-600 rounded-b-md');
                    div.setAttribute('class', 'w-3*100 h-3*100 bg-slate-500 rounded-md border border-white p-0 flex flex-col justify-center hoverdiv')
                    div.appendChild(div2);
                    div2.appendChild(iframe);
                    div.appendChild(div3);
                    videoContainer.appendChild(div);// ajouts des div generes au containeur principale
                });
            })
            .catch(error => console.error(error));
    }

    function toggle_span() {

        document.getElementById('span1').classList.toggle('rotate-45')
        document.getElementById('span1').classList.toggle('z-30')
        document.getElementById('span2').classList.toggle('hidden')
        document.getElementById('span3').classList.toggle('-rotate-45')
        setTimeout(() => {
            anime_slider();
        }, 50);
    }

    function anime_slider() {
        // sliderMenu.classList.toggle('-translate-x-full');
        if (sliderMenu.classList.contains('-translate-x-full')) {
            sliderMenu.classList.toggle('-translate-x-full');
            anime({
                targets: sliderMenu,
                translateX: ['-100%', 0],
                easing: 'easeOutExpo',
                duration: 400
            });
        } else {
            setTimeout(() => {
                sliderMenu.classList.toggle('-translate-x-full');
                anime({
                    targets: sliderMenu,
                    translateX: [0, '-100%'],
                    easing: 'easeOutExpo',
                    duration: 400
                });
            }, 50);
        }
    }


    document.getElementById('validate').addEventListener('click', () => {
        const searchQuery = document.getElementById('q_string').value;
        load_video_from_youtube_data_api(searchQuery);
    });
    openMenuToggler.addEventListener('click', () => {
        toggle_span()
    });

});
