import "../styles/animate.css"

export function animate() {
    animatePage();
}

function animatePage() {
    // document.addEventListener("DOMContentLoaded", function(event) {
    //     function callback(observations, observer) {
    //         observations.forEach(observation => {
    //             if (observation.isIntersection) {
    //                 observation.target.classList.add('animated');
    //             } else {
    //                 observation.target.classList.remove("animated")
    //             }
    //         });
    //     }

    //     let options = {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 1.0
    //     }
    //     let observer = new IntersectionObserver(callback, options)

    //     let elements = document.querySelectorAll('div');
    //     for (let i = 0; i < elements.length; i++) {
    //         observer.observe(elements[i]);
    //     }
    //     console.log(elements)
    // })

    const animatedElements = document.querySelectorAll('div');
    animatedElements.forEach(element => {
        element.classList.remove('animated');
    })

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            return;
          }
      
          entry.target.classList.remove('animated');
        });
      });
      
      const elements = document.querySelectorAll('div');
      elements.forEach((element) => observer.observe(element));
}