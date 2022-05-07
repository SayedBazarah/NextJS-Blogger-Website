export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    if (!email || !email.includes("@") || !name) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    //Store in a database

    fetch("https://meetups-addad-default-rtdb.firebaseio.com/contact.json", {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    res.status(200).json({ message: "Stored" });
    console.log("Let's try again");
  }
}
