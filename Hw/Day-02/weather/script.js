let btn = document.getElementById("btn");

let city = document.getElementById("city");

let result = document.getElementById("result");


btn.addEventListener("click", function(){

    let cityName = city.value;


    fetch(
       "3a8b747e9b8fae0c97eae70ad02cb2c2" 
    )


    .then(function(response){

        return response.json();

    })


    .then(function(data){

        console.log(data);


        result.innerHTML = `

        <h2>${data.name}</h2>

        <h3>
        Temperature: ${data.main.temp} °C
        </h3>

        <p>
        Weather: ${data.weather[0].description}
        </p>

        `;


    })


    .catch(function(error){

        console.log(error);
          result.innerHTML = `<h2>API Error</h2>`;


    });


});