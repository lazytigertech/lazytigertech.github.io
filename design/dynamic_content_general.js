/*
document.getElementById('nav-page-1').textContent="DeluxeFilms";
document.getElementById('nav-page-3').textContent="Portafolio";
document.getElementById('nav-page-4').textContent="Login";
.logo-link p{display:none}
.subscription-modal-body{width:auto}.leftfooter p{display:none}
*/

document.getElementById("login-button-dropdown").style.display = "none";

const dynamic_dropdown=`<div>
                                <a href="./index.html" id="menu-page-1" class="ai-generators">DeluxeFilms</a>
                                <a href="./index.html#portafolio-video" id="menu-page-2" class="ai-generators">Portafolio</a>
                                <!--<a href="./highfrequency.html" id="menu-page-3" class="ai-generators">HFT Servers</a>-->
                                <!--<a href="./api.html" id="menu-page-4" class="apidocs">Servicios</a>-->
                            </div>`;

const dropdown_pages = document.getElementById('dropdown-pages');
  if (dropdown_pages) {
    dropdown_pages.insertAdjacentHTML('beforeend', dynamic_dropdown);
  }
