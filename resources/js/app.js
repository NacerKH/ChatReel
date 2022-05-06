require('./bootstrap');

const nickname=document.getElementById('nickname');
const message=document.getElementById('message');
const submitButton=document.getElementById('submitButton');
const chatDiv=document.getElementById('chat');

submitButton.addEventListener('click', () => {

    axios.post('/chat',{
        nickname:nickname.value,
        message:message.value
    });

})
window.Echo.channel('chatMsg').listen('.chat-message', function (e) {
        chatDiv.innerHTML += `<div class="other break-all mt-2  ml-5 rounded-bl-none float-none bg-gray-300 mr-auto rounded-2xl p-2">
      ${e.message} par <em> ${e.nickname} </em>
    </div>`
console.log(e.message);
    } );
