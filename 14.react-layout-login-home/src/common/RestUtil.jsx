export async function fetchWithToken(url, options = {}) {
  
  const token = localStorage.getItem("jwtToken"); // Retrieve the JWT token from localStorage or another storage
  console.log("Request : "+url)
  console.log("Token : "+token)
  const headers = {
    ...options.headers, // this is called Spread Operator, checkout 0.java-script-learn>SpreadOperator.js
    "Content-Type": "application/json",
    "authorization": `${token}`,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const newToken = response.headers.get("authorization");
  console.log("Received : "+newToken)
  if (newToken) {
    localStorage.setItem("jwtToken", newToken); // Store the new token in localStorage
  }
  return response.json();
}
