(function() {
    const titleQuestion = [...document.querySelectorAll('.questions__title')];

    titleQuestion.forEach(question => {
        question.addEventListener('click', () => {
            let answer = question.nextElementSibling; 
            let addPadding = question.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');

            if (answer.style.display === "block") {
                answer.style.display = "none";
                answer.style.height = "0";
            } else {
                answer.style.display = "block";
                answer.style.height = `${answer.scrollHeight}px`;
            }
        });
    });
})();
