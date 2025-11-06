let load_btn = document.querySelector(".load_btn");
let filterDiv = document.querySelectorAll(".filterdiv");
let all = document.querySelector(".all");
let tech = document.querySelector(".tech_btn");
let video = document.querySelector(".video_btn");
let art = document.querySelector(".art_btn");
let btns = document.querySelectorAll(".btn");

let itemsPerPage = 3;
let visibleItems = itemsPerPage;


// Load More Items

filterDiv.forEach((div, index) => {
    if (index >= visibleItems) {
        div.style.display = "none";
    }
});

function showMoreItems() {
    visibleItems += itemsPerPage;
    filterDiv.forEach((div, index) => {
        if (index < visibleItems) {
            div.style.display = "block";
        }
    });

    if (visibleItems >= filterDiv.length) {
        load_btn.style.display = "none";
    }
}

load_btn.addEventListener("click", showMoreItems);



// Search Bar

const searchBlog = () => {
    let filter = document.querySelector("#search").value.toUpperCase();

    filterDiv.forEach((div, index) => {
        load_btn.style.display = "none";
        let heading = div.getElementsByTagName("h3")[0];
        let textValue = heading.innerText || heading.innerHTML;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }

        if (filter === "") {
            filterDiv.forEach((div, index) => {
                if (index >= visibleItems) {
                    div.style.display = "none";
                    load_btn.style.display = "block";
                }
            });
        }
    });
    
      all.classList.remove("active");
    tech.classList.remove("active");
    video.classList.remove("active");
    art.classList.remove("active");
};



// All Items

all.addEventListener("click", () => {
    filterDiv.forEach((div, index) => {
        div.style.display = "block";
    });
    all.classList.add("active");
    tech.classList.remove("active");
    video.classList.remove("active");
    art.classList.remove("active");
    load_btn.style.display = "none";
});


// Tech Items

tech.addEventListener("click", () => {
    filterDiv.forEach((div, index) => {
        div.style.display = "none";
        let classList = div.classList;
        let hasClass = classList.contains("tech");
        if (hasClass) {
            div.style.display = "block";
        }
    });

    tech.classList.add("active");
    all.classList.remove("active");
    art.classList.remove("active");
    video.classList.remove("active");
    load_btn.style.display = "none";
});


// Video Game Items

video.addEventListener("click", () => {
    filterDiv.forEach((div, index) => {
        div.style.display = "none";
        let classList = div.classList;
        let hasClass = classList.contains("game");
        if (hasClass) {
            div.style.display = "block";
        }
    });

    video.classList.add("active");
    all.classList.remove("active");
    art.classList.remove("active");
    tech.classList.remove("active");
    load_btn.style.display = "none";
});


// Art Items

art.addEventListener("click", () => {
    filterDiv.forEach((div, index) => {
        div.style.display = "none";
        let classList = div.classList;
        let hasClass = classList.contains("art");
        if (hasClass) {
            div.style.display = "block";
        }
    });

    art.classList.add("active");
    all.classList.remove("active");
    tech.classList.remove("active");
    video.classList.remove("active");
    load_btn.style.display = "none";
});
