
export async function fetchWithToken(url, options = {}) {
    const token = localStorage.getItem('jwtToken'); // Retrieve the JWT token from localStorage or another storage
  
    const headers = {
      ...options.headers, // this is called Spread Operator, checkout 0.java-script-learn>SpreadOperator.js
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
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
  