document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('send');
    const url =  "https://jsonplaceholder.typicode.com/users";

    btn.addEventListener('click', function(e) {
        e.preventDefault()

        const data = {
            nombre: 'Lucia',
            apellido: 'Norbis',
            fechaDeNacimiento: '21/12/96',
        }
        
        const opciones = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        };
        
        fetch(url, opciones)
        .then(response => {
            
        if (!response.ok) {
            console.log('ERRORRRR status:' + response.status)
        throw new Error('Error en la solicitud: ' + response.status);
        }
        return response.json();
        })
        .then(data => {
            
            console.log('Respuesta del servidor:', data);
          })
          .catch(error => {
            
            console.error(error);
          });
        

    })
  
});