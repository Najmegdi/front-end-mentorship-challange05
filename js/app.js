// 1- define our elements here!
const username = document.querySelector("#username")
const apiKey = document.querySelector("#api_key")
const apiSecret = document.querySelector("#api_secret")
const btnSubmit = document.querySelector("#btn_submit")
const alertBox = document.querySelector("#alert-box")
const close = document.getElementsByClassName("closebtn")
const apiUrl = '/api/v1'

let i
for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}


const sendToServer = function() {
  const _username = username.value
  const _apiKey = apiKey.value
  const _apiSecret = apiSecret.value
  //2-Validate data
  if (_username && _apiKey && _apiSecret){
    // 3-send to server!
    const data = JSON.stringify({
      api_key: _apiKey,
      secret_key:_apiSecret ,
      username:_username,
      })
    

    fetch(apiUrl + "/save", {
      method: 'POST',
      headers: {
        'content_type':'application/json'
      },
      body: data
    }). then (response => {
      alert('resid')
      //4:Update to list
    }). catch (error => {
      console.log('Error' , Error)
    })
  }
  else {
    //alertbox
    alertBox.classList.toggle('alert-box')
  }
}

btnSubmit.addEventListener('click', sendToServer)
// const sendToServer = () => {
//   // validate data api_key, api_secret
//   if (apiKey.value && apiSecret.value)
//     alert('mitoni data send koni be server')
//   else alert('nemitni bug dari!')
//   // send to server!
// }

// btnSubmit.addEventListener('click', sendToServer)
