let interval;
    let percentage;
    let interval_active;

    function adjustInputWidth(input) {
      const length = input.value.length;
      const newWidth = 1.5+Math.min(Math.max(5, length), 8); // Mínimo 5, máximo 8
      input.style.width = `${newWidth}ch`;
    }

    function start(){
      console.log("coming soon...");
    }

    function start_0() {

      const margin_array={0:"1",1:"5",2:"10",3:"15",4:"20"};

      const value1 = document.getElementById('dynamic-input').value || '';
      const variable2 = document.getElementById('menu1').value;
      const variable3 = document.getElementById('menu2').value;
      const variable4 = document.getElementById('menu3').value;
      const variable5 = document.getElementById('menu4').value;
      const variable6 = document.getElementById('menu5').value;
      const variable7 = document.getElementById('menu6').value;
      const variable8_0 = document.getElementById('menu7').selectedIndex;
      const variable8 = margin_array[variable8_0];
      //const variable5 = document.getElementById('checkbox').checked ? 1 : 0;
      console.log("variable8: ",variable8);

      const json = {
        "currency":value1,
        "currency_reference":variable2,
        "interval":variable3,
        "platform":variable4,
        "heatmap":variable5,
        "trade_option":variable6,
        "metric_view":variable7,
        "axis_margin":variable8
      };

      console.log(json);
      //sendrequest(json);

      const button = document.getElementById('start-button');
      const overlay = document.getElementById('loading-overlay');
      const percentageText = document.getElementById('loading-percentage');

      // Deshabilitar el botón y mostrar overlay
      button.disabled = true;
      overlay.style.display = 'flex';

      // Incrementar porcentaje
      interval_active=1;
      clearInterval(interval);

      percentage = 0;
      interval = setInterval(() => {
        if (percentage < 99 && interval_active==1) {
          percentage++;
          percentageText.textContent = `${percentage}%`;
        } else {
          clearInterval(interval);
          //finish();
        }
      }, 80); // 10 segundos (100ms * 100 pasos)
    }

    function finish() {
        interval_active=0;
        /*
        // Reemplazar la imagen actual con la nueva imagen Base64
  const newImageBase64 = 'data:image/png;base64,iVBORw0K...';  // Tu cadena Base64
  const imageElement = document.querySelector('.image-container img');
  imageElement.src = newImageBase64;  // Reemplazamos el src de la imagen
  */

  // Rehabilitar el botón
  const button = document.getElementById('start-button');
  button.disabled = false;

  // Ocultar el fondo gris y el círculo de carga
  const overlay = document.getElementById('loading-overlay');
  overlay.style.display = 'none';

  // Restablecer el texto del porcentaje a 0%
  const percentageText = document.getElementById('loading-percentage');
  percentageText.textContent = '0%';
}


        function sendrequest(datainput){

            const dataform = JSON.stringify(datainput);
                
            const xhr = new XMLHttpRequest();

            // Configura la solicitud
            xhr.open('POST', 'https://api.roardefi.com/getchart/', true);

            // Establece el timeout en milisegundos (ejemplo: 5000 ms = 5 segundos)
            xhr.timeout = 120000; // Puedes cambiarlo a cualquier valor, como 120000 para 2 minutos

            // Configura los headers
            xhr.setRequestHeader('Content-Type', 'application/json');

            // Manejadores de eventos
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    // Respuesta exitosa
                    const data=JSON.parse(xhr.responseText);
                    //console.log(data.base64img);
                    const newImageBase64 = 'data:image/png;base64,'+data.base64img;  // Tu cadena Base64
                    const imageElement = document.querySelector('.image-container img');
                    imageElement.src = newImageBase64;
                    finish();
                    if (data=="bad_request"){
                        console.log("bad_request");
                        
                    }
                } else {
                    // Manejar errores de estado HTTP
                    console.error('Error en la solicitud: ' + xhr.statusText);
                }
            };

            xhr.ontimeout = function () {
                console.error('La solicitud expiró (timeout alcanzado).');
            };

            xhr.onerror = function () {
                console.error('Ocurrió un error durante la solicitud.');
            };

            // Envía la solicitud con el cuerpo de datos
            xhr.send(dataform);

        }