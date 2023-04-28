let url = "https://rickandmortyapi.com/api/character/?page=19"

fetch(url)
.then((data) => {
    console.log(data.json())
})
.catch((error) => {
    console.log(error)
})