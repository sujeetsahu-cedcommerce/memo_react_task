import React, { memo } from 'react'
import { useState } from 'react'
function TextUtilityApp() {
    const [text,set_text] = useState('');
    const [text_length,set_text_length] = useState('');
    const [text_word,set_text_word] = useState('');


    const getText= (event) => {
        const temp_text = event.target.value;
        set_text(temp_text);
    }
    
    const lowerCase = () => {
        const lower_text = text.toLowerCase();
        const lenght_of_text = lower_text.length;
        set_text(lower_text);
        set_text_length(lenght_of_text);
        const arr = text.split(' ');
        const total_word = arr.filter(word => word !=='').length;
        set_text_word(total_word);
    }

    const upperCase = () => {
        const lower_text = text.toUpperCase();
        const lenght_of_text = lower_text.length;
        set_text(lower_text);
        set_text_length(lenght_of_text);
        const arr = text.split(' ');
        const total_word = arr.filter(word => word !=='').length;
        set_text_word(total_word);
    }

  return (
    <div>
        <div style={{border:"5px solid violet",width:"30%",textAlign:"center",padding:"10px 0px 10px 0px"}}>
            <textarea onChange={getText} value={text}></textarea>
            <div>
                <button onClick={upperCase}>Upper Case</button>
                <button onClick={lowerCase}>Lower Case</button>
            </div>
            <h3>Summary</h3>
            <p>{text_word} words and {text_length} characters</p>
        </div>
    </div>
  )
}

export default memo(TextUtilityApp);
