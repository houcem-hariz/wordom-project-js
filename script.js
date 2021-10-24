const selectedBoldButton = document.getElementById('bold-btn');    
const selectedItalicButton = document.getElementById('italic-btn');    
const selectedUnderLineButton = document.getElementById('underline-btn');    
const selectedColorButton = document.getElementById('color-btn');    
const selectedFontSizeUpButton = document.getElementById('font-size-up-btn');    
const selectedFontSizeDownButton = document.getElementById('font-size-down-btn');    


const selectToggleButtons = document.getElementsByClassName('toggle-button')
Array.from( selectToggleButtons ).forEach( btn => { 
    btn.addEventListener('click', () => {
        if ( btn.classList.contains('selected-button')) btn.classList.remove('selected-button')
        else btn.classList.add('selected-button')
    } )
 } )

function updateStyle( newStyle ) {
    let textArea = document.getElementById('textarea')

    if ( textArea.classList.contains(newStyle) ) textArea.classList.remove(newStyle)
    else textArea.classList.add(newStyle)  
}


function updateFontSize( action ) {
    let textArea = document.getElementById('textarea')
    let s = parseFloat(window.getComputedStyle(textArea, null).fontSize);
     if ( action === 'inc' ) s +=2
     if ( action === 'dec' ) s -= 2
    textArea.style.fontSize = s + 'px'
}

selectedBoldButton.addEventListener('click', () => {
    updateStyle('bold')
 })

 selectedItalicButton.addEventListener('click', () => {
    updateStyle('italic')
})


selectedUnderLineButton.addEventListener('click', () => {
    updateStyle('underline')
})

selectedColorButton.addEventListener('click', () => {
    updateStyle('blue-color')
})

selectedFontSizeUpButton.addEventListener('click', () => {
    updateFontSize('inc')
})

selectedFontSizeDownButton.addEventListener('click', () => {
    updateFontSize('dec')
})



