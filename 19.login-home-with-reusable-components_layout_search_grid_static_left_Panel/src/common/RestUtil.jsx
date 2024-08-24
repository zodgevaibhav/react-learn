
export async function fetchWithToken(url, options = {}) {
    const token = localStorage.getItem('jwtToken'); // Retrieve the JWT token from localStorage or another storage
  
    const headers = {
      ...options.headers, // this is called Spread Operator, checkout 0.java-script-learn>SpreadOperator.js
      'Content-Type': 'application/json',
      'Authorization': `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoc3BhZG0iLCJyb2xlIjoiRE9DVE9SIiwidGVuYW50SWQiOiJheXVydmVkIiwiZXhwIjoxNzI0MzUxMzUyLCJpYXQiOjE3MjQzNDk1NTJ9.s88qxEpwkHpQA12FXSrnQNLrF2mAMZdTmg6HY-u_gPOMpmM2ThuEjP9jZf7oUzgdoCp13KmHJHDiLr0zvlzdkw`,
    };
  
    const response = await fetch(url, {
      ...options,
      headers,
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    return response.json(); 
  }
  