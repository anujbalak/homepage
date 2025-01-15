import "../main/credits/credits.css";

function animateCredits() { 
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

animateCredits()