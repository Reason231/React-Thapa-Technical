import { useState } from "react";


export const TodoForm=({onFormSubmit})=>{

        const [inputValue, setInputValue] = useState("");

        const handleInputChange = (value) => {
            setInputValue(value);
        };

      
            
    return(
        <>
            <section className="form">
                            <form onSubmit={(event)=>onFormSubmit(event,inputValue)}>
                                <div>
                                    <input
                                        type="text"
                                        className="todo-input"
                                        autoComplete="off"
                                        // Each keystroke updates the input state, and value={input} ensures the input field reflects the new value also it is required for making empty input.
                                        value={inputValue}
                                        onChange={(event) => handleInputChange(event.target.value)}
                                    />
                                </div>
        
                                <div>
                                    <button type="submit" className="todo-btn">Add Task</button>
                                </div>
                            </form>
                        </section>
        </>
    )
}