////////////////////////////////////////////////////
//Making mobile navigation work

const btnNavEl=document.querySelector(".btn-mobile-nav");
const headerEl=document.querySelector(".header");

btnNavEl.addEventListener("click",function(){
    headerEl.classList.toggle("nav-open");
})

////////////////////////////////////////////////////
//Smooth scrolling

const allLinks=document.querySelectorAll("a:link");

allLinks.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault();
        const href=link.getAttribute("href");

        //Scroll to top
        if(href==="#")
            window.scrollTo({
                top:0,
                behavior:"smooth",
        });

        if(href!=="#" && href.startsWith("#")){
            const sectionEl=document.querySelector(href);
            sectionEl.scrollIntoView({
                behavior:"smooth",
            });
        }

        if(link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
    });
});