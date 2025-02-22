useEffect(() => {
  // Correct approach 1: Functional update
  setCount(prevCount => prevCount + 1);
}, []);

// Or, if the useEffect doesn't actually depend on the count:
useEffect(() => {
  // Correct approach 2: Remove the dependency
  setCount(count + 1); // This is now safe because it won't trigger an infinite loop
}, []);