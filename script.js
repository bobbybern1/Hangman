                    enteredLetterBool = true;

            
            if(filledValue === wordArr.length){
                resultDiv.style.opacity = 1.0;
            }
            if(count === 0){
                resultDiv.style.opacity = 1.0;
                result.innerHTML = `You Lost  
                <br> The word was ${word}`;
            }
        });
    }
}


function refresh() {
