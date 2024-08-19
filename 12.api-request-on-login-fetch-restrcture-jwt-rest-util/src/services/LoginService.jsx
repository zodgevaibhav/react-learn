import { FULL_URLS } from "../common/ApiEndpoints";
import { fetchWithToken } from "../common/RestUtil";

export async function loginUser(userName, password) {
  try {
    const response = await fetchWithToken(`${FULL_URLS.LOGIN}`, {
      method: "POST",
      body: JSON.stringify({ userName, password }),
    });

    if (!response || response.responseCode != 200) {
      throw new Error("Login failed");
    }

    return response;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}
