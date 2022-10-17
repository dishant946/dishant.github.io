console.log("Welcome to Spotify");
let songindex=0;
let audioelement= new Audio('music2.mp3');
let masterplay= document.getElementById('masterplay');
let smallplay=document.getElementsByClassName('songItmeplay');
let myprogressbar= document.getElementById('myprogessbar');
let gif=document.getElementById('gif');
let songItem= Array.from(document.getElementsByClassName('songItem'));
let mastersongname= document.getElementById('mastersongname');
let songs=[
    {songname:"Mari Sinu Fashion vari",filepath:"hello.mp3",coverpath:"cover.jpg"},
    {songname:"Ladudi 420",filepath:"music3.mp3",coverpath:"cover2.jpg"},
    {songname:"Eklo pan ekdo",filepath:"music4.mp3",coverpath:"cover3.jpg"},
    {songname:"Rayfale Rahda ramade",filepath:"music5.mp3",coverpath:"cover5.jpg"},
    {songname:"Saami Saami",filepath:"music6.mp3",coverpath:"cover.jpg"},
    {songname:"Dakla 2",filepath:"music7.mp3",coverpath:"cover2.jpg"},
    {songname:"Bhakam lago cho",filepath:"music8.mp3",coverpath:"cover3.jpg"},
    {songname:"Bus ni ticket",filepath:"music9.mp3",coverpath:"cover5.jpg"},
    {songname:"Taske poni",filepath:"music10.mp3",coverpath:"cover.jpg"},
    {songname:"Bewafa tane dur thi salam",filepath:"music7.mp3",coverpath:"cover3.jpg"}
]

masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime==0){
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity=1;

}
else{
    audioelement.pause(); 
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    gif.style.opacity=0;
}
})
audioelement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
   let progess = (audioelement.currentTime/audioelement.duration)*100;
//   console.log(progess);
  myprogressbar.value= progess;
})

myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime= (myprogressbar.value*audioelement.duration)/100;
})

songItem.forEach((element,i) =>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerHTML=songs[i].songname;
})


Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
            songindex= parseInt(e.target.id);
            makeallplays();
            console.log(e.target);
            audioelement.src=(`music${songindex+2}.mp3`);
            e.target.classList.add('fa-pause-circle');
            e.target.classList.remove('fa-play-circle');
            audioelement.play();
            mastersongname.innerText=songs[songindex].songname;
            gif.style.opacity=1;
            audioelement.currentTime=0;
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
        })
        
    })
    const makeallplays= () =>{
        Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        })
    }

    document.getElementById('next').addEventListener('click',() =>{
            if(songindex>=9){
                songindex=0;
            }
            else{
                songindex++;
            }
            mastersongname.innerText=songs[songindex].songname;
            
           audioelement.src=(`music${songindex+2}.mp3`);
           audioelement.currentTime=0;
           audioelement.play();
           masterplay.classList.remove('fa-play-circle');
           masterplay.classList.add('fa-pause-circle');
    }) 

    document.getElementById('previous').addEventListener('click',() =>{
            if(songindex<=0){
                songindex=9;
            }
            else{
                songindex--;
            }
           mastersongname.innerText=songs[songindex].songname;
           audioelement.src=(`music${songindex+2}.mp3`);
           audioelement.currentTime=0;
           audioelement.play();
           masterplay.classList.remove('fa-play-circle');
           masterplay.classList.add('fa-pause-circle');
    }) 