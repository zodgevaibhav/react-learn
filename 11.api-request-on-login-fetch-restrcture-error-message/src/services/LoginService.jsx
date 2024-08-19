import { FULL_URLS } from "../common/ApiEndpoints";

export async function loginUser(userName, password) {
  try {
    const response = await fetch(`${FULL_URLS.LOGIN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });

    const responseData = await response.json();

    if (!responseData || responseData.responseCode != 200) {
      throw new Error("Login failed");
    }

    return responseData;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}
