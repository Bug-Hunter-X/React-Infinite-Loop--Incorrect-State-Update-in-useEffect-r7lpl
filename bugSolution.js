```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: using a callback function to update the state
    setCount((prevCount) => prevCount + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```