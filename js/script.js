//IPO 
/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

const BASE_URL = 'https://rickandmortyapi.com/api/'

const response = $.ajax({
    url: 'https://rickandmortyapi.com/api/character/183'
})

response.then(
    (data) => {
        console.log(data);
        $('#character').text(data.name)
        $('#alive').text(data.status)
        $('#species').text(data.species)
        $('#planet').text(data.origin)
        $('#character-img').attr("src", data.image)
    },
    (error) => {
        console.log("bad request: ", error)
    }
)