import './NoteForm.css'
import React, {useState} from 'react';
function NoteForm () {

    const [values, setValues] = useState({ sum: 0, people: 0, tip: 0 });
    const [result, setResult] = useState<number | undefined>(undefined);

    function handleInputChange (e : React.ChangeEvent<HTMLInputElement>) {
        const input = Number(e.target.value);
        console.log("input changed", input);

        setValues((prevValues) => ({
            ...prevValues,
            [e.target.id]: input,
          }));

          console.log('values: ', { ...values, [e.target.id]: input });
        

    }

    function handleBtnClick () {
        const result = calcResult()
        setResult(result);
    }

    function calcResult () : number {
        // handle division by zero
        if (values.people === 0) {
            return 0;
          }

        const result = (values.sum + (values.sum * values.tip)) / values.people;
        return result;
    }


    return <section className="note-form">
                <h2>Summa</h2>
                <input type="number" onChange={handleInputChange} id="sum" placeholder="0" />

                <h2>Antal vänner</h2>
                <input type="number" onChange={handleInputChange} id="people" placeholder="0" />

                <h2>Dricks</h2>
                <input type="number" onChange={handleInputChange} id="tip"  placeholder="0.00  (i decimalform)" />

                <button type="submit" onClick={handleBtnClick}>Räkna</button>
                {result !== undefined && <p id="result">{result.toFixed(1)} kr</p>}
            
        </section>
}

export default NoteForm
