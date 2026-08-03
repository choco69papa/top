// ===============================
// Header
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

// ===============================
// Fade In
// ===============================

const fadeElements = document.querySelectorAll(

".concept,.price,.reserve,.price-item"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

fadeElements.forEach(el=>observer.observe(el));


// ===============================
// Hero Image
// ===============================

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("load",()=>{

    heroImage.classList.add("hero-active");

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});