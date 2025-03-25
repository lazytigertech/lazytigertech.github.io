
document.getElementById('nav-page-1').textContent="OHLC Charts";
document.getElementById('nav-page-2').textContent="Heatmaps";
document.getElementById('nav-page-3').textContent="DEX charts";
/*document.getElementById('nav-page-4').textContent="Login";*/

const dynamic_dropdown=`<div>
                                <a href="./heatmaps.html" id="menu-page-1" class="ai-generators">Heatmaps</a>
                                <a href="./candlecharts.html" id="menu-page-2" class="ai-generators">OHLC Charts</a>
                                <!--<a href="./highfrequency.html" id="menu-page-3" class="ai-generators">HFT Servers</a>-->
                                <a href="./api.html" id="menu-page-4" class="apidocs">APIs</a>
                            </div>`;

const dropdown_pages = document.getElementById('dropdown-pages');
  if (dropdown_pages) {
    dropdown_pages.insertAdjacentHTML('beforeend', dynamic_dropdown);
  }
