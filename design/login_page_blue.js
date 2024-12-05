

let modal_signup_extern;
let login_modal;
let social_modal;


let loginOption;
let signupOption;
let loginEmail;
let userEmailError;
let reenterPwd;
let emailInput;
let passwordInput;
let secondpasswordInput;
let userEmailError_class;

let close_modal_signup;
let closeLogin;


let islogged=localStorage.getItem('islogged');
if (islogged=="1"){
    const login_button = document.getElementById("login-btn-li");
    if (login_button){
        login_button.style.display = "none"; 
    }
}


localStorage.setItem('userid', '123');

function userIsLoggedIn(){return false}
    
let afterLoginFunction = null;
    
    
function openSignup() {
    console.log("activated");
    modal_signup_extern.showModal();
    toggleAuthOption("signup");
        
};

function openLogin() {
    login_modal.showModal();
    toggleAuthOption("login");
};
    


function setElementsStyleById(ids, style) {
    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.cssText = style; 
        }
    });
};

function showElementsById(ids) {
    setElementsStyleById(ids, "display: flex;");
};

function hideElementsById(ids) {
    setElementsStyleById(ids, "display: none;");
};

function toggleAuthOption(toggle) {
    
    hideElementsById(['user-email-error']);

    const moreOptions = {
        true: {
            visible: ["email-container-id", "password-container-id", "reenter-password-container-id", "login-via-email-id", "forgot-password", "go-back-login"],
            hidden: ["switch-to-email", "social-auth-google", "social-auth-github"]
        },
        false: {
            visible: ["switch-to-email", "social-auth-google", "social-auth-github"],
            hidden: ["email-container-id", "password-container-id", "reenter-password-container-id", "login-via-email-id", "forgot-password", "go-back-login"]
        }
    };

    showElementsById(moreOptions[true].visible);
    hideElementsById(moreOptions[true].hidden);
    document.getElementById('user-email').focus();

    if (document.getElementById('login-via-email-id').innerHTML === "Login") {
        hideElementsById(["reenter-password-container-id"]);
    }

    document.getElementById('user-email').value="";
    document.getElementById('user-password').value="";
    document.getElementById('confirm-user-password').value="";

    loginOption = document.getElementById("loginToggle");
    signupOption = document.getElementById("signupToggle");
    loginEmail = document.getElementById('login-via-email-id');
    userEmailError = document.getElementById('user-email-error');
    reenterPwd = document.getElementById("reenter-password-container-id");

    emailInput = document.getElementById('user-email');
    passwordInput = document.getElementById('user-password');
    secondpasswordInput = document.getElementById('confirm-user-password'); 
    userEmailError_class = document.querySelector('.bad-auth-error');



    if (userEmailError_class) {
        userEmailError.style.color = "#eb4f4f";
    }

    loginEmail.disabled = false;
    loginEmail.style.opacity = "1";
    emailInput.disabled = false;
    passwordInput.disabled = false;
    secondpasswordInput.disabled = false;

    document.getElementById('user-email').focus();
    userEmailError.style.display = "none"; 

    var user_id_register = localStorage.getItem('userid');
    if (!user_id_register){
        user_id_register="123";
    }

    

    if (toggle === "login") {
        if (!loginOption.classList.contains("active")) {
            loginOption.classList.add("active");
            signupOption.classList.remove("active");
        }

        document.getElementById('login-header-title').innerHTML = "Login";
        hideElementsById(["reenter-password-container-id", "user-email-error"]);
        loginEmail.innerHTML = "Login";
        loginEmail.onclick = (event) => {
            console.log("login");
            hideElementsById(['user-email-error']);

            const emailValue = emailInput.value;
            const passwordValue = passwordInput.value;
            if (!isValidEmailFormat(emailValue)){
                showElementsById(['user-email-error']);
                userEmailError.innerText = "Enter a valid email address";
            }else{
                loginEmail.innerText = "Loading...";
                loginEmail.disabled = true;
                loginEmail.style.opacity = "0.7";

                emailInput.disabled = true;
                passwordInput.disabled = true;
                    
                const datainput = {
                    user: emailValue,
                    password: passwordValue
                };
                const dataform = JSON.stringify(datainput);
                

                fetch('https://symphonious20.glitch.me/login/'+user_id_register, {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: dataform
                })
                .then(response => {
                    if (!response.ok) {
                      throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.text(); 
                  })
                .then(data => {
                    if (data=="bad_login"){
                        showElementsById(['user-email-error']);
                        userEmailError.innerText = "Incorrect password or email";
                        loginEmail.innerHTML = "Login";
                        loginEmail.disabled = false;
                        loginEmail.style.opacity = "1";
                        emailInput.disabled = false;
                        passwordInput.disabled = false;
                        secondpasswordInput.disabled = false;

                    }
                    if (data=="good_login"){
                        console.log("good_login");
                        localStorage.setItem('islogged', '1');
                        loginEmail.innerHTML = "Login";
                        /*
                        const login_button = document.getElementById("login-btn-li");
                        login_button.style.display = "none"; 
                        */
                        document.querySelector("#login-button-dropdown").textContent = "Log Out";
                        document.getElementById("headerLoginButton").style.display = "none";
                        hide_modal();
                        
                        
                    }
                    
                    
                })
                .catch(error => {
                console.log(error);
                    showElementsById(['user-email-error']);
                    userEmailError.innerText = "Something went wrong. Try it again";
                    loginEmail.innerHTML = "Login";
                    loginEmail.disabled = false;
                    loginEmail.style.opacity = "1";
                    emailInput.disabled = false;
                    passwordInput.disabled = false;
                });
            }
            
        };

    } else {
        if (!signupOption.classList.contains("active")) {
            signupOption.classList.add("active");
            loginOption.classList.remove("active");
        }

        document.getElementById('login-header-title').innerHTML = "Signup";
        loginEmail.innerHTML = "Signup";
        loginEmail.onclick = (event) => {
            console.log("signup");
            hideElementsById(['user-email-error']);
            const emailValue = emailInput.value;
            const passwordValue = passwordInput.value;
            const secondpasswordValue = secondpasswordInput.value;
            if (!isValidEmailFormat(emailValue)){
                showElementsById(['user-email-error']);
                userEmailError.innerText = "Enter a valid email address";
            }else{
                if (passwordValue.length<6){
                    
                    showElementsById(['user-email-error']);
                    userEmailError.innerText = "This password must contain at least 6 characters";
                }
                if (passwordValue!=secondpasswordValue){
                    showElementsById(['user-email-error']);
                    userEmailError.innerText = "The two passwords dont't match";
                }
                if (passwordValue.length>=6 && passwordValue==secondpasswordValue){
                    loginEmail.innerText = "Loading...";
                    loginEmail.disabled = true;
                    loginEmail.style.opacity = "0.7";

                    emailInput.disabled = true;
                    passwordInput.disabled = true;
                    secondpasswordInput.disabled = true;

                    const datainput = {
                        user: emailValue,
                        password: passwordValue
                    };
                    const dataform = JSON.stringify(datainput);

                        

                    fetch('https://symphonious20.glitch.me/signup/'+user_id_register, {
                        method: 'POST', 
                        headers: {
                            'Content-Type': 'text/plain'
                        },
                        body: dataform
                    })
                    .then(response => {
                        if (!response.ok) {
                          throw new Error('Network response was not ok ' + response.statusText);
                        }
                        return response.text();
                      })
                    .then(data => {
                        showElementsById(['user-email-error']);
                        if (data=="bad_signup"){
                            showElementsById(['user-email-error']);
                            userEmailError.innerText = "This account already exists";
                            loginEmail.innerHTML = "Signup";
                            loginEmail.disabled = false;
                            loginEmail.style.opacity = "1";
                            emailInput.disabled = false;
                            passwordInput.disabled = false;
                            secondpasswordInput.disabled = false;
    
                        }
                        if (data=="good_signup"){
                            if (userEmailError_class) {
                                userEmailError.style.color = "green";
                            }
                            userEmailError.innerText = "The account has been successfully registered";
                            loginEmail.innerHTML = "Signup";
                            
                        }
                        
                        
                        
                    })
                    .catch(error => {
                        showElementsById(['user-email-error']);
                        userEmailError.innerText = "Something went wrong. Try it again";
                        loginEmail.innerHTML = "Signup";
                        loginEmail.disabled = false;
                        loginEmail.style.opacity = "1";
                        emailInput.disabled = false;
                        passwordInput.disabled = false;
                        secondpasswordInput.disabled = false;
                    });
                    
                }
                
            }
        };
        hideElementsById(["forgot-password", "user-email-error"]);

        reenterPwd.style.display = "flex";
    }
};


    
    
    
    
    
    
    function isValidEmailFormat(email) {
        const parts = email.split('@');
    
        if (parts.length !== 2) {
            return false;
        }
    
        const beforeAt = parts[0];
        const afterAt = parts[1];
    
        if (beforeAt.length < 1) {
            return false;
        }
    
        const dotParts = afterAt.split('.');
        if (dotParts.length !== 2) {
            return false;
        }
    
        const betweenAtAndDot = dotParts[0];
        const afterDot = dotParts[1];
    
        if (!/^[a-zA-Z0-9]+$/.test(betweenAtAndDot)) {
            return false;
        }
    
        if (afterDot.length < 1) {
            return false;
        }
    
        return true;
    };
    
    function hide_modal(){
    login_modal.close('cancelled');
    };

document.addEventListener("DOMContentLoaded", function() {
    const modalHTML = `
    <dialog id="signup-modal">
        <div class="modal-body">
        </div>
        <button id="close" class="close" type="button">×</button>
    </dialog>

    <dialog id="login-modal" class="login-container">
        <div id="close-login" type="button" class="login-exit">
            x
        </div>
        <div style="width: 95%;">
            <h2 class="login-header" id="login-header-title">Login</h2>
            <p class="please-subheader">
                Please sign up or login with your details
            </p>
            <div class="options-container">
                <div class="option login-active active" id="loginToggle" onclick="toggleAuthOption('login')">
                Login
                </div>
                <div class="option signup" id="signupToggle" onclick="toggleAuthOption('signup')">
                Sign up
                </div>
            </div>
            
            
            <div class="email-container" id="email-container-id">
                <svg class="email-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#7D7D7D"></path>
                </svg>
    
                <input class="input-email" id="user-email" type="text" placeholder="Enter email address" name="email" style="text-transform: lowercase;" autocomplete="off">
            </div>
            <div class="password-container" id="password-container-id">
                <svg class="lock-icon" xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17ZM18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM8.9 6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8H8.9V6ZM18 20H6V10H18V20Z" fill="#7D7D7D"></path>
                </svg>
    
                <input class="input-password" id="user-password" type="password" placeholder="Enter password" name="password">
            </div>
            <div class="reenter-password-container" id="reenter-password-container-id">
                <svg class="lock-icon" xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17ZM18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM8.9 6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8H8.9V6ZM18 20H6V10H18V20Z" fill="#7D7D7D"></path>
                </svg>
    
                <input class="input-password" id="confirm-user-password" type="password" placeholder="Re-enter password" name="password">
                <path d="M10.125 10.5C10.0757 10.5001 10.0269 10.4905 9.98145 10.4716C9.93595 10.4527 9.89464 10.425 9.8599 10.3901L1.6099 2.14013C1.54254 2.06923 1.50555 1.97482 1.5068 1.87704C1.50805 1.77925 1.54745 1.68582 1.6166 1.61667C1.68575 1.54752 1.77918 1.50812 1.87697 1.50687C1.97475 1.50561 2.06916 1.54261 2.14006 1.60997L10.3901 9.85997C10.4425 9.91241 10.4782 9.97922 10.4926 10.0519C10.5071 10.1247 10.4996 10.2 10.4713 10.2685C10.4429 10.337 10.3949 10.3956 10.3332 10.4368C10.2716 10.478 10.1991 10.5 10.125 10.5V10.5ZM5.99201 9.00005C5.01959 9.00005 4.08185 8.71223 3.20482 8.14458C2.40631 7.62895 1.68748 6.89044 1.12592 6.01177V6.00989C1.59326 5.34028 2.10514 4.77403 2.65498 4.31747C2.65995 4.31331 2.66401 4.30817 2.66689 4.30236C2.66978 4.29655 2.67143 4.29021 2.67174 4.28374C2.67204 4.27726 2.67101 4.27079 2.66869 4.26474C2.66637 4.25868 2.66282 4.25317 2.65826 4.24856L2.19139 3.78239C2.18309 3.77403 2.17195 3.76909 2.16018 3.76857C2.14841 3.76805 2.13687 3.77198 2.12787 3.77958C1.54381 4.27177 1.0017 4.87552 0.508807 5.58239C0.424007 5.7041 0.377304 5.84828 0.374633 5.99659C0.371962 6.14491 0.413444 6.29067 0.493807 6.41536C1.11279 7.38403 1.90943 8.19989 2.79724 8.77434C3.79685 9.42192 4.87264 9.75005 5.99201 9.75005C6.59622 9.74817 7.19615 9.64861 7.76857 9.4552C7.77612 9.45264 7.7829 9.4482 7.78825 9.44229C7.79361 9.43638 7.79737 9.4292 7.79917 9.42143C7.80098 9.41367 7.80077 9.40557 7.79858 9.3979C7.79638 9.39024 7.79227 9.38326 7.78662 9.37763L7.28084 8.87184C7.2692 8.86049 7.2548 8.85235 7.23906 8.84824C7.22332 8.84413 7.20678 8.84419 7.19107 8.84841C6.79937 8.94927 6.39649 9.00022 5.99201 9.00005V9.00005ZM11.504 5.59223C10.8839 4.63317 10.0793 3.81848 9.1774 3.23606C8.17967 2.59106 7.0781 2.25005 5.99201 2.25005C5.39421 2.25111 4.80084 2.35276 4.23678 2.55075C4.22926 2.55337 4.22253 2.55785 4.21723 2.56378C4.21193 2.56972 4.20822 2.5769 4.20647 2.58466C4.20471 2.59242 4.20495 2.6005 4.20718 2.60814C4.20941 2.61578 4.21354 2.62273 4.2192 2.62833L4.72428 3.13341C4.73603 3.14496 4.75063 3.15322 4.7666 3.15733C4.78256 3.16145 4.79933 3.16128 4.81521 3.15684C5.19888 3.05306 5.59456 3.00034 5.99201 3.00005C6.94568 3.00005 7.8806 3.29138 8.77053 3.86723C9.58404 4.39223 10.3113 5.13005 10.8743 6.00005C10.8747 6.00058 10.8749 6.00124 10.8749 6.00192C10.8749 6.0026 10.8747 6.00326 10.8743 6.0038C10.4656 6.64714 9.95851 7.22234 9.37146 7.70841C9.36644 7.71255 9.36233 7.71769 9.3594 7.72351C9.35647 7.72933 9.35479 7.7357 9.35446 7.7422C9.35413 7.74871 9.35516 7.75521 9.35748 7.7613C9.3598 7.76738 9.36337 7.77292 9.36795 7.77755L9.83435 8.24372C9.84261 8.25205 9.85369 8.25699 9.8654 8.25755C9.87712 8.25812 9.88862 8.25427 9.89764 8.24677C10.5244 7.71907 11.0669 7.0988 11.5064 6.40739C11.5841 6.28555 11.6252 6.14397 11.6247 5.99947C11.6243 5.85497 11.5824 5.71363 11.504 5.59223V5.59223Z" fill="#7D7D7D">
                <path d="M5.99999 3.75C5.83145 3.74991 5.66344 3.76878 5.49913 3.80625C5.49083 3.80797 5.48315 3.81192 5.47691 3.81766C5.47068 3.8234 5.46611 3.83072 5.46371 3.83885C5.4613 3.84698 5.46115 3.8556 5.46326 3.86381C5.46537 3.87202 5.46966 3.87951 5.47569 3.88547L8.11452 6.52359C8.12048 6.52962 8.12796 6.53392 8.13617 6.53603C8.14438 6.53814 8.15301 6.53798 8.16114 6.53558C8.16927 6.53317 8.17659 6.52861 8.18233 6.52237C8.18807 6.51613 8.19201 6.50846 8.19374 6.50016C8.26887 6.17063 8.26879 5.82842 8.19353 5.49893C8.11826 5.16944 7.96973 4.86114 7.75897 4.59692C7.54821 4.33271 7.28064 4.11937 6.97612 3.97275C6.6716 3.82613 6.33796 3.74999 5.99999 3.75V3.75ZM3.88545 5.47641C3.87949 5.47038 3.87201 5.46608 3.8638 5.46397C3.85559 5.46186 3.84696 5.46202 3.83883 5.46443C3.83071 5.46683 3.82338 5.47139 3.81764 5.47763C3.8119 5.48387 3.80796 5.49154 3.80624 5.49984C3.72124 5.87118 3.73191 6.25801 3.83725 6.62409C3.9426 6.99017 4.13916 7.32351 4.40852 7.59287C4.67788 7.86223 5.01122 8.0588 5.3773 8.16414C5.74338 8.26948 6.13022 8.28015 6.50155 8.19516C6.50985 8.19343 6.51753 8.18949 6.52376 8.18375C6.53 8.17801 6.53456 8.17069 6.53697 8.16256C6.53937 8.15443 6.53953 8.1458 6.53742 8.13759C6.53531 8.12938 6.53101 8.1219 6.52499 8.11594L3.88545 5.47641Z" fill="#7D7D7D">
              
          </path></path></div>
          <p id="user-email-error" class="bad-auth-error"></p>
          <button class="button login-email" id="login-via-email-id">Login</button>
          
      </div>
  </dialog>`;

  const footer = document.querySelector('footer');
  const principalContainer = document.getElementById('principal-container');
  if (principalContainer) {
        principalContainer.insertAdjacentHTML('beforeend', modalHTML);
        modal_signup_extern = document.getElementById('login-modal');
        login_modal = document.getElementById('login-modal');
        social_modal = document.getElementById('social-modal');

        close_modal_signup = document.getElementById('close');
        closeLogin = document.getElementById('close-login');

        close_modal_signup.addEventListener('click', () => { modal_signup_extern.close('cancelled');  });
    closeLogin.addEventListener('click', () => { login_modal.close('cancelled');});
    
    modal_signup_extern.addEventListener('cancel', () => { modal_signup_extern.close('cancelled');});
    modal_signup_extern.addEventListener('click', (event) => { if (event.target === modal_signup_extern) modal_signup_extern.close('cancelled'); });
    
    login_modal.addEventListener('cancel', () => { login_modal.close('cancelled'); });
    login_modal.addEventListener('click', (event) => { if (event.target === login_modal) login_modal.close('cancelled'); });
    
  } else {
      console.log("principal container not found.");
  }
});





document.querySelectorAll('.menu-settings').forEach(element => {
    element.addEventListener('click', async function() {
        const islogged2=localStorage.getItem('islogged');
        if (islogged2=="1"){
            console.log("logueado");
            localStorage.setItem('islogged', '0');
            document.querySelector("#login-button-dropdown").textContent = "Login";
            document.getElementById("headerLoginButton").style.display = "flex";
        }else{
            console.log("sinloguear");
            openSignup();
        }
        //openSignup();
    })
});

/*
const islogged2=localStorage.getItem('islogged');
    if (islogged2=="1"){
        console.log("is logged");
        document.querySelector("#login-button-dropdown").textContent = "Log Out";
        document.getElementsByClassName("button login").style.display = "none";
        //document.getElementById("headerLoginButton").style.display = "none";
    }else{
        console.log("not logged");
        document.querySelector("#login-button-dropdown").textContent = "Login";
        document.getElementsByClassName("button login").style.display = "flex";
        //document.getElementById("headerLoginButton").style.display = "flex";
    }
*/





function openDocsSideNav(){document.getElementById("docs-side-nav").style.width="100%";document.getElementById("docs-side-nav").style.paddingLeft="24px";document.body.style.overflow="hidden";}
function closeDocsSideNav(){document.getElementById("docs-side-nav").style.width="0";document.getElementById("docs-side-nav").style.paddingLeft="0px";document.body.style.overflow="auto";}


