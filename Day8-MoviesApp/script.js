const search  = document.getElementById('search')
const API_KEY = `2f33f6cbdd28310c4a5dbbd2b635f6ac`
const IMGPATH = "https://image.tmdb.org/t/p/w1280"
let pageNo = 1
async function getPopularMovies(){
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNo}`)
    const data = await response.json()
    results = data.results
    
    results.forEach(element => {
        const div = document.createElement('div')
        div.className = "main-div"
        img = document.createElement('img')
        img.src = IMGPATH + element.poster_path
        div.append(img)
        document.querySelector('.info-container').append(div)
        const info = document.createElement('div')
        info.className = "info"
        info.innerHTML = `
        <p class="title">${element.title}</p>
        <p class="rating">${element.vote_average}</p>
        `
        div.append(info)
        // const over = document.createElement('div')
        // over.className = "over"
        // over.innerHTML = `
        // <p class="overview">${element.overview}</p>
        // `
        // div.append(over)

    });
    // document.querySelector('.info-container').append(div)

    
   

}
getPopularMovies()


async function  getMovie(querry) {
    try {
    if(querry == '' || querry == null) {
        
        document.querySelector('.info-container').innerHTML = `<h1> Please Enter Something </h1>`
        return
    }else {
        document.querySelector('.info-container').innerHTML = ''
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${querry}&page=1&include_adult=false`)
    const data = await response.json()
    results = data.results
    results.forEach(element => {
        const div = document.createElement('div')
        div.className = "main-div"
        img = document.createElement('img')
        img.src = IMGPATH + element.poster_path
        div.append(img)
        document.querySelector('.info-container').append(div)
        const info = document.createElement('div')
        info.className = "info"
        info.innerHTML = `
        <p class="title">${element.title}</p>
        <p class="rating">${element.vote_average}</p>
        `
        div.append(info)
});
    }
    
    } catch (error) {
        document.getElementsByClassName('info-container').innerHTML = `<h1> ${error}404 Not Found </h1>`     
    }
}



document.querySelector('.showMore').addEventListener('click', () => {
    pageNo+=1;
    getPopularMovies()
})


search.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('.info-container').innerHTML = ''
        const searchValue = search.value;
        getMovie(searchValue);
    }
});

