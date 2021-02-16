




// task array
let taskUser = [
    {tarefa: "1", data: ""},
    {tarefa: "2", data: ""},
    {tarefa: "3", data: ""}
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
// alert
const alert = document.querySelector('.modal__alert');
const task = document.getElementById('task');
// modal functions
// open modal
openModal.forEach((list)=>{
    list.addEventListener('click',()=>{
        modalFunction.openModal();
        console.log(task);
        task.focus();
    });
});
window.addEventListener('load',()=>{
    HTMLliFormatter.appInit();
})
window.addEventListener('click',(e)=>{
    if(e.target.id=='task__remove'){

        HTMLliFormatter.removeData(e.target.dataset.remove);
    }
})
window.addEventListener('keydown',(e)=>{
    console.log(e.target.value=='');
    tasks = document.getElementById('task');
    // if  (e.code=='KeyA'){
    //         modalFunction.openModal();
    //         task.focus();
    // }
    // if (e.target.dataset.type=='cancel'){
    //     modalFunction.closerModal();
    //     tasks.value = '';
    // }
    if (e.code == 'Enter' && modalFunction.modalOpen==true ) {
        if(tasks.value==='' || e.target.value==''){
            alert.classList.add('modal__alert--on');
            modalFunction.removeAlert();
        }else{
            modalFunction.closerModal();
            modalFunction.SaveDate(tasks.value);
            tasks.value = '';
        };
    };
    if (e.code == 'Escape' && modalFunction.modalOpen==true) {
        modalFunction.closerModal();
        tasks.value = '';
    }
});
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    tasks = document.getElementById('task');
    // condicionais do input
    if(e.submitter.dataset.type=='cancel'){
        modalFunction.closerModal();
        tasks.value = '';
    } else if(e.submitter.dataset.type=='save'){
        if(tasks.value===''){
            alert.classList.add('modal__alert--on');
            modalFunction.removeAlert();
        }else{
            modalFunction.closerModal();
            modalFunction.SaveDate(tasks.value)
            tasks.value = '';
        };
    };
});

const modalFunction = {
    modalOpen: false,
    //open modal
    openModal(){
        modal.classList.add('modal__active');
        (modal.classList.contains('modal__active'))? modalFunction.modalOpen = true:modalFunction.modalOpen = false;
    },
    //close modal
    closerModal(){
        modal.classList.remove('modal__active');
        (modal.classList.contains('modal__active'))? modalFunction.modalOpen = true:modalFunction.modalOpen = false;
    },
    removeAlert(){
        setTimeout(function(){
            alert.classList.remove('modal__alert--on');
        }, 3000)
    },
    SaveDate(value){
        taskUser.push({
            tarefa:value,
            data: ''
        });
        HTMLliFormatter.Newtask();
    }
};
//Dom insertion
const HTMLliFormatter = {
    appInit(){
        HTMLliFormatter.Newtask();
    },
    removeData(i){
        taskUser.splice(i,1)
        HTMLliFormatter.appInit();
    },
    Newtask(){
    newli = taskUser.map((Newtask,index)=>
     `<li>
         <div class="list__item--style">
            <div class="list__item__check" data-remove="${index}"></div>
            <div class="list__item__content">
            <p>
                ${Newtask.tarefa}
            </p>
            </div>
            <div class="list__item__delete" >
                <img src="./svg/on/delete.svg" data-remove="${index}" id="task__remove" alt="">
            </div>
        </div>
     </li>`
    ).join('');
    
    console.log(newli);
    
    ToDoOutput.innerHTML = newli

    //HTMLliFormatter.htmlInsert(taskli);
    },
    htmlInsert(value){
    }
};


