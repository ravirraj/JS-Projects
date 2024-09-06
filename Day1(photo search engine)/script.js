const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search');
const searchResult = document.getElementById('search-result');
const showmoreBtn = document.getElementById('showmore-btn');
const accessKey = `Your Api Key`

let keyword = ""
let page = 1

async function searchImg() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const responce = await fetch (url)
    const data = await responce.json()
    result = data.results

    if(page === 1){
        searchResult.innerHTML = ""
    }

    result.map((result)=>{
        const image = document.createElement("img")
        image.src = result.urls.small
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html
        imageLink.target = "_blank"

        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })

    showmoreBtn.style.display = "block"
}

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    page=1;
    searchImg()
})


showmoreBtn.addEventListener('click',(e)=>{
    page++
    searchImg()
})
