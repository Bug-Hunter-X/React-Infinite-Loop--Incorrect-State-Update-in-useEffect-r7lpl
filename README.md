# React Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by incorrectly updating state within a `useEffect` hook that has an empty dependency array (`[]`).

## The Problem

The `bug.js` file contains a component that attempts to increment its state variable (`count`) within the `useEffect` hook.  Because the dependency array is empty, this effect runs repeatedly, causing `setCount` to be called infinitely, leading to an infinite loop and potentially crashing the browser.

## The Solution

The `bugSolution.js` file provides a corrected version. Instead of directly incrementing `count`, the solution uses a callback function to update the state safely. 

## How to Run

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies (if needed).
4. Run `npm start` (or your preferred development server command) to start the application. 

Compare the output of `bug.js` (infinite loop) to the `bugSolution.js` (correctly updating state)