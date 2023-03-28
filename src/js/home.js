document.addEventListener('DOMContentLoaded',()=>{
    const pop_up = document.getElementById('pop_up_btn')
    const bdy= document.querySelector('body');
    const user_conn =document.getElementById('connected-user');
    var searchParams = new URLSearchParams(window.location.search);
    var value = searchParams.get("user_name").split(' ',1)[0];
    const link = './user?name='+encodeURIComponent(value);
    user_conn.href=link;
    user_conn.innerText+=value;

    console.log("La valeur transmise est :", value);
    pop_up.addEventListener('click',()=>{
        bdy.classList.remove('h-screen');
        document.getElementById('search_box').classList.add('mx-auto');
        for_toggle();
    });
    document.getElementById('close_btn').addEventListener('click',()=>{
        for_toggle();
    })
    function for_toggle(){
        pop_up.classList.toggle('hidden')
        document.getElementById('tools').classList.toggle('hidden');
        document.getElementById('list_vids').classList.toggle('hidden');

    }
});