// TODO: add code here
window.addEventListener('load', function() {
    const astronauts = document.getElementById("container");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(data) {
        let astronautData = "";
        data.sort(getSortOrder('hoursInSpace'));
        console.log(getSortOrder('hoursInSpace'))
        function getSortOrder(time){
            return function(a,b){
                if(a[time] > b[time]) {
                    return -1;
                } else if (a[time] < b[time]) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }

        // function currentlyActive(){
        //     if(data)
        // }

        for (let i = 0; i < data.length; i++){
            let activeClass = ''
            console.log(data[i].active)
            if(data[i].active === true){
                activeClass = 'active'
            }
            astronautData += `
            <div class="astronaut">
              <div class="bio">
                <h3>${data[i].firstName} ${data[i].lastName}</h3>
                  <ul>
                    <li>Hours in space: ${data[i].hoursInSpace}</li>
                    <li class=${activeClass}>Active: ${data[i].active}</li>
                    <li>Skills: ${data[i].skills}</li>
                  </ul>
              </div>
              <img class="avatar" src="${data[i].picture}">
            </div>
            `;
        }
        astronauts.innerHTML = astronautData;
        astronauts.innerHTML +=`Total Number of Astronauts: ${data.length}`;

        })
    })
})