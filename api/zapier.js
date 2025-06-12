// api/zapier.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const zapierResponse = await fetch("https://hooks.zapier.com/hooks/catch/22908877/uylql6k/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    if (!zapierResponse.ok) {
      return res.status(500).json({ message: "Zapier error" });
    }

    return res.status(200).json({ message: "Success" });
  } catch (err) {
    console.error("Serverless function error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
