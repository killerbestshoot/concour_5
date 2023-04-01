document.addEventListener('DOMContentLoaded', () => {
    const searchParams = new URLSearchParams(window.location.search);
    const value = searchParams.get('user_name').split(' ', 1)[0];
    const encodedValue = encodeURIComponent(value);
    const user_conn_dsktp = document.getElementById('connected-user-dsktp');
    const user_conn_mbv = document.getElementById('connected-user-mbv');
    user_conn_mbv.href = user_conn_dsktp.href = `./user?name=${encodedValue}`;
    user_conn_dsktp.innerHTML = user_conn_mbv.innerHTML = value;
    const pop_up = document.getElementById('pop_up_btn')
    const API_KEY = 'AIzaSyB-uEgPm0bSJQszgUrs13kganNjI9GqllY';
    const videoContainer = document.getElementById('list_vids')
    const sliderMenu = document.getElementById('slider-menu');
    const openMenuToggler = document.getElementById('open-menue-toggler');
    const span1 = document.getElementById('span1');
    const span2 = document.getElementById('span2');
    const span3 = document.getElementById('span3');

    // console.log("La valeur transmise est :", value);
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
                console.dir(data);
                // Boucle à travers les vidéos renvoyées par l'API et crée un élément <div> pour chacune.
                data.items.forEach(item => {
                    const videoId = item.id.videoId;
                    const channelTitle = item.snippet.channelTitle;
                    const description = item.snippet.description;
                    const publishtime = item.snippet.publishTime;
                    const publishAt = item.snippet.publishedAt;
                    const iframe = document.createElement('iframe');
                    iframe.src = `https://www.youtube.com/embed/${videoId}`;
                    iframe.setAttribute('class', 'w-full h-full border-0 object-cover rounded-t-md');
                    iframe.allowFullscreen = true;
                    iframe.setAttribute('allow', 'autoplay; fullscreen');
                    const right112 = document.createElement('div')
                    const right111 = document.createElement('div')
                    const right11_s = document.createElement('span')
                    const right11 = document.createElement('div')
                    const right1 = document.createElement('div')
                    const div_right = document.createElement('span')
                    const c11 = document.createElement('span')
                    const c1 = document.createElement('span')
                    const div_center = document.createElement('div')
                    const left1 = document.createElement('div')
                    const left2 = document.createElement('div')
                    const left3 = document.createElement('div')
                    const div_left = document.createElement('div');
                    const div = document.createElement('div');//creation du div qui aura la video et ses infos
                    const div2 = document.createElement('div');//creation du div qui recevra l'iframe
                    const div3 = document.createElement('div');//creation du div qui contiendra les infos
                    // les proprietes tailwind qu'aura les divs
                    div2.setAttribute('class', 'w-full h-4/6 bg-slate-400 rounded-t-md');
                    div3.setAttribute('class', 'w-full h-2/6 bg-slate-600 rounded-b-md flex justify-center items-center bg-white');
                    div.setAttribute('class', 'w-3*100 h-3*100 bg-slate-500 rounded-md border border-white p-0 flex flex-col justify-center hoverdiv')
                    div_left.setAttribute('class', 'w-1/4  h-full flex flex-wrap')
                    left1.setAttribute('class', 'h-1/4 w-full flex justify-center items-center')
                    left2.setAttribute('class', 'h-2/4 w-full flex justify-center items-center')
                    left3.setAttribute('class', 'h-1/4 w-full flex justify-center items-center rounded-bl-md')
                    div_center.setAttribute('class', 'w-2/4 h-full flex justify-center items-center')
                    c1.setAttribute('id', 'play_button')
                    c1.addEventListener("click", () => {
                        iframe.src += '?autoplay=1';
                    })
                    c1.setAttribute('class', 'w-16 h-16 rounded-full mx-auto bg-slate-500 shadow-yellow-900 shadow-2xl hover:shadow-none hover:translate-y-1 flex justify-center items-center pl-2')
                    c11.setAttribute('class', 'border-l-6 border-t-3 border-b-3 border-t-transparent border-b-transparent bg-left border-solid border-white mx-auto shadow-2xl shadow-emerald-800')
                    div_right.setAttribute('class', 'w-1/4 h-full flex flex-wrap')
                    right1.setAttribute('class', 'h-1/4 w-full flex justify-center items-center')
                    right11.setAttribute('class', 'w-2/4 h-full mx-auto flex justify-center items-center')
                    right11_s.setAttribute('class', 'text-xl text-white pb-1')
                    right111.setAttribute('class', 'h-2/4 w-full flex justify-center items-center')
                    right112.setAttribute('class', 'h-1/4 w-full rounded-br-md flex justify-center items-center')
                    div_left.appendChild(left1)
                    div_left.appendChild(left2)
                    div_left.appendChild(left3)
                    div_right.appendChild(right1)
                    div3.appendChild(div_right)
                    div3.appendChild(div_left);
                    c1.appendChild(c11)
                    div_center.appendChild(c1)
                    div3.appendChild(div_center)
                    div.appendChild(div2);
                    div2.appendChild(iframe);
                    div.appendChild(div3);
                    videoContainer.appendChild(div);// ajouts des div generes au containeur principale

                });
            })
            .catch(error => console.error(error));
    }

    function toggle_span() {
        console.dir('toggle_span');
        span1.classList.toggle('rotate-45')
        span1.classList.toggle('z-30')
        span1.classList.toggle('translate-y-1')
        span1.classList.toggle('border-red-700')
        span3.classList.toggle('border-red-700')
        span2.classList.toggle('hidden')
        span3.classList.toggle('-rotate-45')
        span3.classList.toggle('-translate-y-1')
        span3.classList.toggle('mb-1')
        setTimeout(() => {
            anime_slider();
        }, 50);
    }

    function anime_slider() {
        // sliderMenu.classList.toggle('-translate-x-full');
        if (sliderMenu.classList.contains('-translate-x-full')) {
            sliderMenu.classList.toggle('-translate-x-full');
            anime({
                targets: sliderMenu, translateX: ['-100%', 0], easing: 'easeOutExpo', duration: 400
            });
        } else {
            setTimeout(() => {
                sliderMenu.classList.toggle('-translate-x-full');
                anime({
                    targets: sliderMenu, translateX: [0, '-100%'], easing: 'easeOutExpo', duration: 400
                });
            }, 50);
        }
    }

    load_video_from_youtube_data_api('bande d annonce vf');
    pop_up.addEventListener('click', () => {
        document.getElementById('search_box').classList.add('mx-auto');
        for_toggle();
    });
    document.getElementById('close_btn').addEventListener('click', () => {
        for_toggle();
    })
    document.getElementById('validate').addEventListener('click', () => {
        const searchQuery = document.getElementById('q_string').value;
        load_video_from_youtube_data_api(searchQuery);
    });
    openMenuToggler.addEventListener('click', () => {
        toggle_span();
    });
});

//

