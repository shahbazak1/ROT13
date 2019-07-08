console.log('Client side JS file is loaded..!');

const ROT13Form = document.querySelector('form');
const inputData = document.querySelector('#inputTextArea');
const messageOne = document.querySelector('#outputTextArea');
const encodeRadio = document.querySelector('#encode');
const decodeRadio = document.querySelector('#decode');
//const messageTwo = document.querySelector('#message-2');
// const radioChoice = document.querySelector('')

//messageOne.textContent = 'From JS';



ROT13Form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const inputJSON = inputData.value;
    //let encode = null;

    if (encodeRadio.checked) {
        fetch('http://localhost:3000/encode', {
            method: 'POST', // or 'PUT'
            body: inputJSON, // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then((response)=>{
            response.json().then((data)=>{
                messageOne.textContent = data;
            })
          })
    }

    if (decodeRadio.checked) {
        fetch('http://localhost:3000/decode', {
            method: 'POST', // or 'PUT'
            body: inputJSON, // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then((response)=>{
            response.json().then((data)=>{
                messageOne.textContent = data;
            })
          })
    }




})



// ROT13Form.addEventListener('submit', (event)=>{
//     event.preventDefault();
//     const InputJSON = inputData.value;

//     messageOne.textContent = 'Loading...';
//     messageTwo.textContent = '';
    
//     fetch('http://localhost:3000/encode').then((response)=>{
//     response.json().then((data)=>{
        
//             messageOne.textContent = data;
//             messageTwo.textContent = data;

//     })
// })

// })





// (async () => {
//     const rawResponse = await fetch('https://httpbin.org/post', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({a: 1, b: 'Textual content'})
//     });
//     const content = await rawResponse.json();
  
//     console.log(content);
//   })();



// var url = 'https://example.com/profile';
// var data = {username: 'example'};

// fetch(url, {
//   method: 'POST', // or 'PUT'
//   body: JSON.stringify(data), // data can be `string` or {object}!
//   headers:{
//     'Content-Type': 'application/json'
//   }
// }).then(res => res.json())
// .then(response => console.log('Success:', JSON.stringify(response)))
// .catch(error => console.error('Error:', error));