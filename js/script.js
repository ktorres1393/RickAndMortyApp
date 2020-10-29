//IPO 
/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

    // listen to events on button
    $('#character-btn').on('click', function (event) {
        // prevent page from refreshing 
        event.preventDefault();

        //get name in input field
        const name =  $('#character-name').val();
        console.log(name);
    
        // url request to get info based on name
        const response = $.ajax({
            url: 'https://rickandmortyapi.com/api/character/?name='+name
        })
        
        response.then(
            (data) => {
                console.log(data.results);

                let html = "";

                data.results.forEach(element => {
                    let card = `<div class="card" style="width: 18rem;">
                    <img src="${element.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">Characters Name</h5>
                    <p id="character">Name: ${element.name}</p>
                    <p id="alive">Character Status: ${element.status}</p>
                    <p id="species">Species: ${element.species}</p>
                    <p id="planet">Birth Planet: ${element.origin.name}</p>
                    </div>
                  </div>` 
                    
                 html =  html.concat(card);
                });

                $( "main" ).append( html );
            },
            (error) => {

                //---------------------------------------------//
                //              handle error
                //---------------------------------------------//
                console.log("bad request: ", error)
            }
        )
    });
