document.addEventListener('DOMContentLoaded',()=>{
    const pop_up = document.getElementById('pop_up_btn')
    var searchParams = new URLSearchParams(window.location.search);
    var value = searchParams.get("value");
    console.log("La valeur transmise est :", value);
    pop_up.addEventListener('click',()=>{
        document.getElementById('tools').classList.remove('hidden');
        document.querySelector('body').style.blur='5';
        document.getElementById('search_box').classList.add('mx-auto');
        document.querySelector('body').classList.remove('h-screen');
        pop_up.classList.toggle('hidden')
    });
    document.getElementById('close_btn').addEventListener('click',()=>{
        pop_up.classList.toggle('hidden');
        document.getElementById('tools').classList.toggle('hidden');
        document.querySelector('body').classList.toggle('h-screen');
        // document.getElementById('search_box').classList.add('mx-auto');
    })
});