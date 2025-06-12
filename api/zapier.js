export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  try {
    const zapierWebhookURL = "https://hooks.zapier.com/hooks/catch/22908877/uylql6k/";
    const response = await fetch(zapierWebhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    if (response.ok) {
      return res.status(200).json({ message: "Success" });
    } else {
      const text = await response.text();
      return res.status(500).json({ error: "Zapier error", details: text });
    }
  } catch (err) {
    return res.status(500).json({ error: "Internal server error", details: err.message });
  }
}