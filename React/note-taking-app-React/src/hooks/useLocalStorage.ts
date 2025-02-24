import { useState, useEffect } from 'react';

// Generic type T so it can be used with any data type
function useLocalStorage<T>(key: string, initialValue: T) {
  // Retrieve from localStorage or use initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  // Update localStorage whenever storedValue changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error saving to localStorage key:", key, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const; // Returns a tuple like useState
}

export default useLocalStorage;
