useEffect(() => {
  // This will cause an infinite loop because every time the component renders,
  // the state changes, causing a re-render and triggering the useEffect again.
  setCount(count + 1);
}, [count]);