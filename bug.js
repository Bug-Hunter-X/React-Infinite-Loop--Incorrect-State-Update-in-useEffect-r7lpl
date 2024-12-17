```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: trying to update the state in a way React can't handle
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```