export async function sendData(url, data) {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  

  
    