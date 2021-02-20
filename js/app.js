// task array

// storage
// pega os dados do storage
const localStorageTasks = JSON.parse(localStorage.getItem('TaskUser'))
// verifica o estado  dele
let listaDetarefas = localStorage.getItem('TaskUser') !== null ? localStorageTasks : [];
// update do storage
function localStorageUpdate(){
    localStorage.setItem('TaskUser', JSON.stringify(listaDetarefas));
}



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
    tasks = document.getElementById('task');
    
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
        listaDetarefas.push({
            tarefa:value,
            data: ''
        });
        localStorageUpdate();
        HTMLliFormatter.Newtask();
    }
};


//Dom insertion
const HTMLliFormatter = {
    appInit(){
        localStorageUpdate()
        HTMLliFormatter.Newtask();
    },
    removeData(i){
        listaDetarefas.splice(i,1)
        HTMLliFormatter.appInit();
    },
    Newtask(){
    newli = listaDetarefas.map((Newtask,index)=>
     `<li>
         <div class="list__item--style">
            <div class="list__item__check" >
                <img src="./svg/on/check.svg" alt="" data-remove="${index}" id="task__remove" alt="">
            </div>
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
    ToDoOutput.innerHTML = newli
    //HTMLliFormatter.htmlInsert(taskli);
    },
    htmlInsert(value){
    }
};


