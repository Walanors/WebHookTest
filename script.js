document.addEventListener('DOMContentLoaded', function() {
    const changeColorBtn = document.getElementById('changeColorBtn');
    const animatedBox = document.getElementById('animatedBox');
    const incrementBtn = document.getElementById('incrementBtn');
    const countDisplay = document.getElementById('count');
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');
    
    let count = 0;
    
    changeColorBtn.addEventListener('click', function() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
    });
    
    animatedBox.addEventListener('click', function() {
        this.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            this.style.transform = 'rotate(0deg)';
        }, 1000);
    });
    
    incrementBtn.addEventListener('click', function() {
        count++;
        countDisplay.textContent = count;
    });
    
    addTodoBtn.addEventListener('click', function() {
        const todoText = todoInput.value.trim();
        if (todoText) {
            const li = document.createElement('li');
            li.textContent = todoText;
            li.addEventListener('click', function() {
                this.classList.toggle('completed');
            });
            todoList.appendChild(li);
            todoInput.value = '';
        }
    });
    
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodoBtn.click();
        }
    });
});