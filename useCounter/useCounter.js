import { useState } from "react";


export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue)


    return {
        counter,
        increment: () => setCounter(counter + 1),
        decrement: () => setCounter(counter - 1),
        reset: () => setCounter(initialValue)
    };
} 