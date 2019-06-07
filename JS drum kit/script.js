document.addEventListener("keydown",play);
function play(event)
{
    if(event.keyCode===65||83||68||70||71||72||74||75||76)
    {
        var audio=document.getElementById("clap");
        audio.play();
    }
}

/*var click=document.querySelector(".clap-Sound");
click.addEventListener('click', function(){
    click.style.height="65px";
}); */
