export async function sendData(url, data) {
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
    console.error("Error in sendData:", error);
    return { ok: false, error: error.message };
  }
}


export async function sendProjectData(url, formData) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${url}`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error in sendProjectData:", error);
    return { ok: false, error: error.message };
  }
}

export async function fetchProjects() {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/project`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function deleteProject(projectId) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/project/${projectId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
}

export async function fetchProjectById(id) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/project/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
}