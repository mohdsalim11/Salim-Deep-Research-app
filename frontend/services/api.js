export async function researchAPI(query) {

  const response = await fetch(
    "https://salim-deep-research-app.onrender.com/research-stream",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        query: query
      })
    }
  );

  return response;
}