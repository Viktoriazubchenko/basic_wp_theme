(function(){
    const faq_items = document.querySelectorAll('.faq-block__item');
    if(!faq_items){
        return;
    }
    
    const question_items = document.querySelectorAll('.faq-block__question');
    const answer_items = document.querySelectorAll('.faq-block__answer');


    question_items.forEach((item) => {
        item.addEventListener('click', () => {
            let answer = item.nextElementSibling;

            const removeClass = (items_name, class_name) => {
                items_name.forEach((item) => {
                    item.classList.remove(class_name);
                })
            }
            
            if(answer.classList.contains('show')){
                removeClass(answer_items, 'show');
                removeClass(question_items, 'opened-question');
            } else {
                removeClass(answer_items, 'show');
                removeClass(question_items, 'opened-question');
                answer.classList.add('show');
                item.classList.add('opened-question');
            }
        })
    })


}());