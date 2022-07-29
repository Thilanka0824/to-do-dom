//couldn't figure out how to do the remove all button

let form = document.querySelector('#form')
let todoInput = document.querySelector('#todoListInput');

let addButton = document.querySelector('#add-button');
let removeCompletedButton = document.querySelector('#removeCompleted');
let removeButton = document.querySelector('#remove-button')
let ul = document.querySelector('#ul')
let newLi = ''
//let removeCompleted = document.querySelector('#removeCompleted')

//add button
form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    if(todoInput.value !== ''){
        let li = document.createElement('li') //creates new list element
        li.innerText = todoInput.value //adds input to the list variable //.value is required
        //parent.appendChild(newChildElement)
        
        //EVENT LISTENER FOR STRIKE-THRU
        li.addEventListener('click', () => { //listens for 'click' event on elements in variable li(created earlier -creates a new list item)
            if(li.style.textDecoration === ''){ 
                li.style.textDecoration = 'line-through';
            } else if (li.style.textDecoration === 'line-through') {
                li.style.textDecoration = ''
            }
        
        
        })

      
        
        ul.appendChild(li) //adds 'li' to a parent node ul with appenChild
        
        todoInput.value = '' //resets the value of the input field
        
        newLi = document.querySelectorAll('#ul li') 
        console.log(newLi)

        
    }
    
    
})




//
// let deleteButton = document.createElement('remonveCompleted')
// deleteButton.innerText = 'Delete';

// li.appendChild(deleteButton)

removeButton.addEventListener('click', (e) => {
    e.preventDefault()
    
    
}) 








let editButton = document.createElement('button');
editButton.innerText = 'Edit' 

editButton.addEventListener('click', function(){
li.innerText = todoInput.value

li.appendChild(editButton)

})




/*
 // EVENT LISTENER TAKING CARE OF LINE-THROUGH
     newLi.addEventListener('click', function () {
        if (newLi.style.textDecoration === “”) {
            newLi.style.textDecoration = “line-through”;
        } else {
            newLi.style.textDecoration = “”
        }
    });


*/