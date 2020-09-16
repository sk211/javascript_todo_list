// // access the elemnet by id name 

//         // let h1 = document.getElementById("my-h1");
//         // h1.innerHTML = "Akbor hossain";

// // access the element by tag name 
//         // let headers = document.getElementsByTagName("h1");
//         // console.log(headers);

//         // headers.innerHTML = "Sujan majumder"

//         // let paras = document.getElementsByClassName("lead")
//         // console.log(paras);

//         // let colors = [ "red", "green", "yellow", "blue"]
//         // let i=0

//         // let btn = document.getElementById("click_me")
//         // btn.addEventListener('click', function(){
//         //     let h1 = document.getElementById("my-h1")
//         //     h1.innerHTML= "This is my new H1"
//         //     h1.style.background = colors[i]
//         //     if (i >= colors.length){
//         //         i=0
//         //     }
//         //     else{
//         //         i++
//         //     }
//         // })

//         // console.log(btn.style);

// // part -5 
//   // quarySelector 

//    let container = document.querySelector(".container")
//    console.log(container);
//   // quarySelector 

//    let container1 = document.querySelectorAll(".container")
//    console.log(container1);


// //    part - 6 

// //  change css with js


// let h1= document.querySelector("#my-h1")
// // h1.style.background= 'blue'
// // h1.style.color= 'white'
// // h1.style.padding= '10px'
// // h1.style.fontSize= '50px'
// // h1.style.fontFamily = "Arial"
// let h1Style = {
//     background: 'blue',
//     fontSize :'30px',
//     fontFamily: "Arial",
//     padding: "#222",
//     textAlign: 'center',
//     padding: '10px',
//     color:'white'

// }
// Object.assign(h1.style, h1Style)

// function $(selector){
//     return document.querySelector(selector)
// }
// let pStyle = {
//     padding: '10px',
//     fontSize: '30px',
//     color:'#333',
//     lineHeight: '1.3'
// }

// Object.assign($('#my-para').style, pStyle)

// window.onclick = function(event){
//     console.log(event)
//         alert("Hi I am an Event")
// }

// part -7 
    // add event Listener 

        // let btn = document.querySelector("#btn")
        // let para = document.querySelector("#para")

        // let isShow =false
        // btn.addEventListener('click', function(){
        //     if(isShow){
        //         para.style.visibility = 'hidden'
        //         isShow =false
        //         btn.innerHTML ="Show"
        //     }
        //     else{
        //         para.style.visibility = 'visible'
        //         isShow =true
        //         btn.innerHTML ="Hide"
        //     }
        // })

        // part -8  
        // How to create a element and delete elemen in javascritp 

        let root = document.querySelector('#root')
        let jumbuttonDiv =document.createElement('div')
        
        
        jumbuttonDiv.className = 'jumbotron'
        jumbuttonDiv.setAttribute('id', 'my-jmb')

        root.appendChild(jumbuttonDiv)

        let h1 = document.createElement('h1')
        h1.className = 'desplay-2 py-5'
        h1.innerHTML= '<strong>To Do list</strong>'

        jumbuttonDiv.appendChild(h1)

        let nameField = document.querySelector('#nameField')
        let ul = document.querySelector("#nameList")

        nameField.addEventListener('keypress', function(event){
            if(event.keyCode === 13){
            let name = event.target.value
           createLi(ul, name)
            event.target.value = ''
            }
        })


        function createLi(ul, name){
            let li = document.createElement('li')
            li.className = 'list-group-item d-flex'
            li.innerHTML= name

            let span = document.createElement('span')
            span.innerHTML = 'X'
            span.className = 'ml-auto'
            span.style.color = 'red'
            span.style.cursor='pointer'
            span.addEventListener('click', function(){
                ul.removeChild(li)
            })

            li.appendChild(span)
            ul.appendChild(li)
        }