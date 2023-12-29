    let Add = document.querySelector('.push')
    let NewTask = document.querySelector('#NewTask')
    let tasks = document.querySelector('.tasks');
    
    Add.addEventListener('click' , 
    function () {
        if(NewTask.value.length=== 0 ){
            alert('Enter Todo plx')
        }
        else{
            tasks.innerHTML+=`
            <div class = 'Task'>
            <span class = 'TaskName'>
            ${NewTask.value}
            </span>
            <button class='Delete'>
            <i class="fa-solid fa-trash"></i>
            </button>
            </div>
            `
        }
        let deleteButton = document.querySelectorAll('.Delete')
        deleteButton.forEach(deleteButton => {
            deleteButton.addEventListener('click', function() {
                this.parentNode.remove();
            });
        });
    let Task = document.querySelectorAll('.Task')
    for (let i = 0; i < Task.length; i++) {
        Task[i].onclick=function () {
            this.classList.toggle('Complete')
        }
        
    }
        NewTask.value=''
    }
    )