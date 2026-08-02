let btn = document.getElementById("btn");

let input = document.getElementById("input");

let result = document.getElementById("result");



btn.addEventListener("click", function(){


    let username = input.value;


    fetch("https://api.github.com/users/" + username)

    .then(function(response){

        return response.json();

    })

    .then(function(data){


        result.innerHTML = `

        <img src="${data.avatar_url}">

        <h2>${data.name}</h2>

        <p>${data.bio}</p>

        <p>
        Followers: ${data.followers}
        </p>

        <a href="${data.html_url}">
        Profile
        </a>

        `;


    })


});