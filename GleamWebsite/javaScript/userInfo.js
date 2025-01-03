//this is the user oibject that we are using as a template
let userObj ={
    name :"",
    age :"",
    sex:"",
    CreditCardInfo:"",
    locationAdd:"",
    eircode:"",
    loggedIn:false,
    itemsInCart:"",
    itemIds:[0],
    gamePageSelected:""
}

function getWishListItem(gameCode){
    userObj.itemIds.value += gameCode.value;
    console.log(userObj.itemIds);
    addToCart();
    }

//stringifuing this obj making is so we can store it 
let userObj_seralised = JSON.stringify(userObj);

//setting these charachter to local storage
localStorage.setItem("userObj",userObj_seralised);
console.log(localStorage);

let rannumb = 1; //this was for testing so that It wouldnt ask you EVERY time you logged in

//checking if the user is logged in if they click the wishlist, or anything elese on the page
var addtocart = document.getElementById('mainBod');
// add a listener for add to cart if such a button id is pressed
addtocart.addEventListener("click", aretheyLoggedIn);

function aretheyLoggedIn()
{
    if(userObj.loggedIn === false && rannumb == 0 ){
        alert("You arent logged in");
        window.location.href="/WebPages/login.html";//they go to the login page if they arent logged in
        rannumb++;//this is so they wont be asking us again for the login sequence AGAIN
        logIn;
    }else {
        addToCart();
    }
}
function addToCart() {
    var total  = localStorage.getItem('wishlistButton');
    total++;
   
}
function login(){
    var loginStatus = document.getElementById('user-login');
// add a listener for add to cart if such a button id is pressed
loginStatus.addEventListener("submit", loginUser);

event.preventDefault();

function loginUser() {

    // wait for submit button to be clicked on login form - 
    // this code only invoked if login form submit button clicked

    var email = document.getElementById('emailAddressID').value;
    var password= document.getElementById('passwordID').value;
    if (email=="wmitty@email.com" && password=="password1")  {   
        // successful login, user redirected to shop.html
        localStorage.setItem('loggedIn',1);    
        window.location.href = "shop.html";  // redirect to shop page
    }
    else {
        alert("invalid login details");
        // login unsuccessful, error message appears
        localStorage.setItem('loggedIn',0);
        var element = document.getElementById("loginerror");
       // element.classList.remove("d-none");
       // element.classList.remove("d-block");
    }
    event.preventDefault();
}
}