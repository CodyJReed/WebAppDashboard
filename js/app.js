// Alert Box and Notifications

const icon = document.querySelector('.bell-lt');
const bell = icon.parentNode;
const alertList = document.querySelector('.alrt-list');
const messageForm = document.querySelector('.msg-frm');

// Add (e)listener to Bell
bell.addEventListener('click', () => {
  // If bell hasnt been clicked..
  if(icon.style.display !== 'none'){
  // When Bell is clicked..
  icon.style.display = 'none';
  // Call notify(arr) function
  notify("I'm really happy this works!");
  notify("How 'bout d'em apples?");
 }
});


alertList.addEventListener('click', (e) => {
  let target = e.target;
  let li = target.parentNode;
  let ul = target.parentNode.parentNode;
  ul.removeChild(li);

});

// Create new alert notifications and to alert list
function notify(arr){
    let li = document.createElement('li');
    li.className = 'alrt-bx';
    // Avoid the use of innerHTML unless from a safe source or properly escaped
    li.innerHTML = '<span class="alrt">' + 'Alert' + '</span>' + '<span class="alrt-txt">' + arr + '</span>' + '<span class="chx">' + 'X' + '</span>';
    alertList.appendChild(li);
};


// Message SUBMIT and SEND

function submitReset(){
  let user = document.querySelector('.srch-usr');
  let msg = document.querySelector('.msg-area');
  // If input or textarea are empty
  if( user.value.length == 0 || msg.value.length == 0 ) {
    alert('Please enter a User and Message before submitting.')
  }
   else {
        alert("You're message has been sent.")
        messageForm.reset();
  }
};
// When message form is submitted prevent default and call submitReset()
messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  submitReset();
});
