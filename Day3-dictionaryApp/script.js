const inputField = document.querySelector(".input-box");
const btn = document.getElementById("btn");
const searchedWord = document.getElementById("searched-word");
const adjective = document.getElementById("adjective");
const meaning = document.getElementById("meaning");
const sentence = document.getElementById("sentence");
const audio = document.getElementById("audio");
const img = document.getElementById("img");
const sound_id = document.getElementById("sound_id")


btn.addEventListener("click", () => {
    async function Getvalue(){
        try {
            if(inputField.value === ""){
                alert("Please enter a word")
            }
            else{
                inputValue = inputField.value.replace(/\s/g, "");
                const responce = await fetch( `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
                const data =await responce.json()
                searchedWord.innerHTML = data[0].word
                meaning.innerHTML = data[0].meanings[0].definitions[0].definition
                sentence.innerHTML = data[0].meanings[0].definitions[0].example
                adjective.innerHTML = data[0].phonetic
                img.style.display = "block"
                audio.addEventListener('click',(e)=>{
                    e.preventDefault()
                    
    
                    for(i=0;i<data[0].phonetics.length;i++){
                        
                        if(data[0].phonetics[i].audio !== ""){
                            sound_id.setAttribute("src",data[0].phonetics[i].audio) //data[0].phonetics[i].audio
                            sound_id.play()
                            break;
                            
                        }
                        else{
                            alert("No audio found")
                            break;
                        }
                    }
                 
            })
            
            }
        } catch (error) {
            searchedWord.innerHTML = `Sorry!!! Word Not Found`
            
        }
        
    }
    Getvalue()

})

