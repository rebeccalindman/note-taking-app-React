// AddToDo.tsx

import './AddToDo.css'


function AddToDo (props){
    const {updateToDos} = props;

    let text = ""; 

    
    function handleOnChange(event){
        text = event.target.value;
    }
    
    function handleButtonClick(){
        console.log("Button clicked");
        updateToDos(text);
    }

    return (
        <div>
            <input type="text" placeholder="Add ToDo" onChange={handleOnChange}/>
            <button onClick={handleButtonClick} >Add</button>
        </div>
    )
}

export default AddToDo;