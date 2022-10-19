export const modal = () => {
    const openCallBack = document.querySelectorAll('.callback');
    const closeModal = document.querySelector('.modal__close');
    const openFeedback = document.querySelectorAll('.feedback');
    const shadowModal = document.querySelector('.shadow__modal');
    const modal= document.querySelector('.modal');
    const title = document.querySelector('.modal__title');

    // const form = document.querySelector('.modal__form');
    // const modalSubmit = document.querySelector('.modal__submit');

    const none = document.querySelectorAll('.none');



// --------- feedback--------------

    openFeedback.forEach(function(open){  

    open.addEventListener('click', function() {
        modal.classList.add('feedback');
        shadowModal.classList.add('shadow__modal--activ-menu');

        // form.setAttribute("id", "feedback");
        // modalSubmit.setAttribute("form", "feedback"); 
    });
    })

    closeModal.addEventListener('click', function(){
        modal.classList.remove('feedback');
        shadowModal.classList.remove('shadow__modal--activ-menu');

        document.forms[0].reset();     /* обнуление формы после закрытия окна */


        // form.removeAttribute("id");    
        // modalSubmit.removeAttribute("form");
    });


    shadowModal.addEventListener('click', function(){
        modal.classList.remove('feedback');
        shadowModal.classList.remove('shadow__modal--activ-menu');
        document.forms[0].reset();   /* обнуление формы после закрытия окна */

        // form.removeAttribute("id");
        // modalSubmit.removeAttribute("form");
});

// -------------callback--------------



    openCallBack.forEach(function(open){  
        open.addEventListener('click', function() {
        modal.classList.add('callback');
        shadowModal.classList.add('shadow__modal--activ-menu');
        title.textContent = "Заказать звонок";
        // form.setAttribute("id", "callback");
        // modalSubmit.setAttribute("form", "callback"); 

            
            for( let i = 0; i < none.length; i++ ){
                none[i].disabled = true;
            }

    });
    })



    closeModal.addEventListener('click', function(){
        modal.classList.remove('callback');
        shadowModal.classList.remove('shadow__modal--activ-menu');
        setTimeout(function(){
        title.textContent = "Обратная связь";
    },600);

        document.forms[0].reset();  /* обнуление формы после закрытия окна */
        // form.removeAttribute("id");
        // modalSubmit.removeAttribute("form");

        for( let i = 0; i < none.length; i++ ){
            none[i].disabled = false;
        }
    });

    shadowModal.addEventListener('click', function(){
        modal.classList.remove('callback');
        shadowModal.classList.remove('shadow__modal--activ-menu');
        setTimeout(function(){
        title.textContent = "Обратная связь";
    },600);

        document.forms[0].reset();  /* обнуление формы после закрытия окна */
        // form.removeAttribute("id");
        // modalSubmit.removeAttribute("form");

        for( let i = 0; i < none.length; i++ ){
            none[i].disabled = false;
        }

    });
}


