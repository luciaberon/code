const modal = document.querySelector(".modal");
const playBtn = document.querySelector(".btn");
const video = document.querySelector("iframe");
const url = "https://www.youtube.com/embed/-50NdPawLVY?autoplay=1&modestbranding=1&showinfo=0&controls=0";


// show modal when clicking play button
playBtn.addEventListener("click",() => {
    video.setAttribute("src",url);
    modal.style.display = "flex"; // show video
    document.body.classList.add("background-blur"); // blur background: ;
})


// close modal when clicking outside
document.body.addEventListener("click", e => {
    if (modal.style.display === "flex" && !e.target.classList.contains("btn-img")) {
            modal.style.display = "none";
            document.body.classList.remove("background-blur");
            video.setAttribute("src","") // stops the video 
        }
    }
)