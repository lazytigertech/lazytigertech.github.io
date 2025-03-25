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
