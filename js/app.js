// Dom elements








const taskUser = [

]
//// DOM colection
// formulario
const form = document.getElementById('todo__form');
//modal
const modal = document.querySelector('.todo__modal');
// botoes que abrem o modal
const openModal = document.querySelectorAll('.openModal');
// botoes do modal
const btnCancel = document.querySelector('.btn__modal__cancel--style');
const btnSave = document.querySelector('.btn__modal__save--style');
// to do list
const ToDoOutput = document.querySelector('.todo__list__item');
// modal functions
// open modal
openModal.forEach((list)=>{
    list.addEventListener('click',()=>{
        modalFunction.openModal();
    });
});
window.addEventListener('keydown',(event)=>{
    // input value
    tasks = document.getElementById('task');

    if (event.code == 'Enter' && modalFunction.modalOpen==true) {
        console.log('oi');
        if(tasks.value===''){
            console.log('inserir alerta de invalido');
        }else{
            modalFunction.closerModal();
            modalFunction.SaveDate(tasks.value)
            tasks.value = '';
        };
    };

    if (event.code == 'Escape' && modalFunction.modalOpen==true) {
        modalFunction.closerModal();
    }

})
//close modal
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //input value
    tasks = document.getElementById('task');
    //  condicionais do input
    if(e.submitter.dataset.cancel=='cancel'){
        modalFunction.closerModal();
        tasks.value = '';
    } else if(e.submitter.dataset.save=='save'){
        if(tasks.value===''){
            console.log('inserir alerta de invalido');
        }else{
            modalFunction.closerModal();
            modalFunction.SaveDate(tasks.value)
            tasks.value = '';
        };
    };
    
});
//
const modalFunction = {
    modalOpen: false,
    openModal(){
        modal.classList.add('modal__active');
        (modal.classList.contains('modal__active'))? modalFunction.modalOpen = true:modalFunction.modalOpen = false;
    },
    closerModal(){
        modal.classList.remove('modal__active');
        (modal.classList.contains('modal__active'))? modalFunction.modalOpen = true:modalFunction.modalOpen = false;
    },
    SaveDate(value){
        taskUser.push({
            tarefa:value,
            data: ''
        });
        HTMLliFormatter.Newtask(value);
    }
};
console.log(modal);
//Dom insertion
const HTMLliFormatter = {
    Newtask(value){
    task = value;
    taskli = document.createElement('li');
    taskli.innerHTML = `
         <div class="list__item--style">
                <div class="list__item__check"></div>
                    <div class="list__item__content">
                    <p>
                        ${task}
                    </p>
                </div>
                <div class="list__item__delete">
                    <img src="./svg/on/delete.svg" alt="">
                </div>
            </div>`
    HTMLliFormatter.htmlInsert(taskli);
    },
    htmlInsert(value){
        ToDoOutput.appendChild(value)
    }
};

