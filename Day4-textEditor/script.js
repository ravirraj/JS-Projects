const input = document.getElementById("input-field");

const btns = document.querySelector('.btns-container')

btns.addEventListener('click' , (e)=>{
    
    if(isNaN(input.value)){
        if(e.target.className === 'btn uppercase'){
            upperCasedString = input.value.toUpperCase()
            document.querySelector('#output-field').innerHTML = upperCasedString
        }
        if(e.target.className === 'btn lowercase'){
            lowerCaseredString = input.value.toLowerCase()
            document.querySelector('#output-field').innerHTML = lowerCaseredString
            
        }
        if(e.target.className === 'btn capitalize'){
            capitalizedString = input.value.charAt(0).toUpperCase() + input.value.slice(1);
            document.querySelector('#output-field').innerHTML = capitalizedString
        }
        if(e.target.className === 'btn bold'){
            toBold = input.value
            document.querySelector('#output-field').style.fontWeight = 'bold'
            document.querySelector('#output-field').innerHTML = toBold
        }
        if(e.target.className === 'btn italic'){
            toItalic = input.value
            document.querySelector('#output-field').style.fontStyle = 'italic'
            document.querySelector('#output-field').innerHTML = toItalic
            
        }
        if(e.target.className === 'btn underline'){
            toUnderline = input.value
            document.querySelector('#output-field').style.textDecoration = 'underline'
            document.querySelector('#output-field').innerHTML = toUnderline
        }
        if(e.target.className === 'btn clear'){
            document.querySelector('#output-field').innerHTML = ""
        }
    }else{
        document.querySelector('#output-field').innerHTML = "Please Enter Text"
    }

    
    
})  
