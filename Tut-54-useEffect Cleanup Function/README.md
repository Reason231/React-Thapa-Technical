## useEffect Cleanup Function
- Syntax
useEffect(()=>{
    // Your side effect code here

    return ()=>{
    // Cleanup code here (optional)
    }
},[dependencies])


## Best code method with explanation.
 // Method 3
 useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev)=>prev+1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);


Step 1: When the component is mounted (initial render), the useEffect runs once.

Step 2: Inside the useEffect, a setInterval() is set up that runs every second, incrementing the count by 1.

Step 3: Even though the dependency array is empty, the interval continues running because setInterval is an asynchronous action. It will keep calling setCount every second, updating the state.

Step 4: When the component is unmounted (if you navigate away, for example), the cleanup function clearInterval(timer) will stop the interval.