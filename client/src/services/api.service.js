export async function sendContactData(url, data) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    return { ok: true, data: responseData };
  } catch (error) {
    console.error("Error in sendContactData:", error);
    return { ok: false, error: error.message };
  }
}