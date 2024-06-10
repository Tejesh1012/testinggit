

// // instead of using onclick in html code we can write directly in the js code

// // let inputBtn = document.getElementById("input-btn")

//   //inputBtn.addEventListener("click", function() {
//     //console.log("Button clicked fron addeventlistener")
// //})

// //console.log(localStorage.getItem("myleads", "https://www.linkedin.com/in/naga-tejesh-kasula-45bab3159/"))

// let box = document.getElementById("box")

// box.addEventListener("click", function () {
//     console.log("I want to open the box")
// })


// // when to say and use the let and constant 

// localStorage.setItem("name","Naga Tejesh Kasula");

// let myname = localStorage.getItem( "name" )
// console.log(myname)



// let myInvolve = ["www.web.com", "www.js.com", "www.scrimba.com"]

// const inputEL = document.getElementById("input-el")
// const  btnEl = document.getElementById("input-btn")


// btnEl.addEventListener("click", function() {
//      myInvolve.push(inputEL.value)
//      inputEL.value = ""
//      console.log(myInvolve)


// })


// // other method of listing the data in js.


// const ulEl = document.getElementById("ul-el")

// for (let i = 0; i < myInvolve.length; i++) {
//     ulEl.innerHTML +=  " <li> "  + myInvolve[i] + "</li>"
   

// }


// const container = document.getElementById("container")

// container.innerHTML = "<button onclick = 'buy()'>Buy!</button>"

// function buy() {
//     container.innerHTML += "<p>Thank you for buying!</p>"
// }


// // another method tagging the li elements and input text and appending the data

//  // const li = document.createElement('li')
//   //li.innerText = myInvolve[i]
// // ulEl.appendChild(li)



// const outputBtn = document.getElementById("output-btn")
// const outputEL = document.getElementById("output-el")


// let leadfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"))
// console.log(leadfromlocalstorage)


// let myLeads = []

// outputBtn.addEventListener("click", function() {
//       myLeads.push(outputEL.value);
//       outputEL.value = ""
//     console.log(myLeads)

// })

// const negative = document.getElementById("negative")

// negative.innerHTML = "<button onclick = 'sell()'>Sold!</button>"

// function sell() {
//     negative.innerHTML += "<p>This item has been sold.</p>"
// }

// const recipient = "James"

// const email = `Hey ${recipient}!How is it going? Tejesh`

// console.log(email)

// function renderleads () {
//     let myInvolve = ""
//     for (let i = 0; i<myInvolve.length; i++) {
//         myInvolve += `
//         <li>
//         <a target = '_blank' href = '${myInvolve[i]}'>
//         ${myInvolve[i]}
//         </a>
//         </li>`
        
// }
//     ulEl.innerHTML = listitems
// }


// let myJava = ["www.bf.com"]

// myJava = JSON.stringify(myJava)



// console.log(typeof myJava)


// const credits = 0

// if ( credits) {
//     console.log("let's play the game")
// } else {
//     console.log("sorry, you have no credits")
// }


// function foo () {
//     return 'Hello'

// }

// const result = foo()
// console.log(result)

// let arr = [1,2,3,4,5]
// sum = 0

// for (let i= 0; i < arr.length; i++) {
//      sum = sum + arr[i]
// }

// console.log('sum of adding all the numbers in the array: ',sum);



// const day = prompt("enter a day")

// switch (day) {
//     case 1:
//         console.log ('Monday');
//     case 2 :
//         console.log ('Tuesday')
//     case 3 :
//         console.log  ('wednesday')
//         default:
//             console.log("idk")
// }       


// const animenames = [
//     ['naruto', 'sasuke', 'konahamaru'],
//     ['goku','vegeta','gohan'],
// ]

// for (let i = 0; i  <  animenames.length; i++) {
//     const anime = animenames[i];
//     console.log(` row $#{i}`)
//     for (let j = 0; j < anime.length; j++) {
//         console.log([j])
//     }
// }



// let input = prompt("enter a new list message")
// const todos = ['collect eggs', 'garlic chicken','scrambled eggs']
// while(input !== 'quit' && input !== 'q') {
//    if (input === 'list') {
//     console.log('************')
//     for (let i = 0; i < todos.length; i++) {
//         console.log(`${i}: ${todos[i]} `)
//     }  
//     console.log('*************')
//         } else if (input === 'new') {
//             const newTodo = prompt('ok, what is the new todo?')
//             todos.push(newTodo)
//             console.log(`$(newTodo) added to the list`)
//         }  else if( input === 'delete') {
//             const index = parseInt(prompt('enter the index of the todo you want to delete'));
//             if(!Number.isNaN(index)) {
//             const deleted = todos.splice(index,1);
//          console.log(`ok deleted ${deleted[0]}`)
//         } else {
//             console.log('unkwoun index')
//         }
//         }
//     input = prompt("please enter a new list")
// }  console.log('ok! quit the app')


// const todos = ['collect eggs', 'garlic chicken', 'scrambled eggs'];
// let input = prompt("Enter a new list message");

// while (input !== 'quit' && input !== 'q') {
//     if (input === 'list') {
//         console.log('************');
//         for (let i = 0; i < todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`);
//         }
//         console.log('*************');
//     } else if (input === 'new') {
//         const newTodo = prompt('Ok, what is the new todo?');
//         todos.push(newTodo);
//         console.log(`${newTodo} added to the list`);
//     } else if (input === 'delete') {
//         const index = parseInt(prompt('Enter the index of the todo you want to delete'));
//         if (!Number.isNaN(index)) {
//             const deleted = todos.splice(index, 1);
//             console.log(`Ok, deleted ${deleted[0]}`);
//         } else {
//             console.log('Unknown index');
//         }
//     }
//     input = prompt("Please enter a new list message");
// }
// console.log('Ok! Quit the app');


// const todos = ['hinata hyuga','uzumaki naruto','sasuke uchiha'];
// let input = prompt("enter the text message");

// while (input !== 'stop' && input !== 'Q') {
//     if (input === 'list') {
//         console.log('**************');
//         for (let i = 0; i < todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`);
//         }
//     console.log('*********')
//     } else if (input === 'new') {
//         const newTodo = prompt("ok, what is the new todo?")
//         todos.push(newTodo);
//         console.log(`${newTodo} added to the list`);
//     } else if ( input === 'delete') {
//         const index = parseInt(prompt('enter the index of the todo you want to delete'))
//         if (!Number.isNaN(index)) {
//             const deleted = todos.splice(index,1);
//             console.log(`ok, deleted ${deleted[0]}`)
//         } else {
//             console.log('unknown index')
//         }
//     }
//     input = prompt("please enter a new list message");

// } console.log("ok well, you have done it");


function demo() {
    console.log('do');
    console.log('re');
    console.log('mon');
}

demo()




console.log("hi")