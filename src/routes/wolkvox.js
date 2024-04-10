import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { id } = req.body;
  res.status(200).json({ message: `Post ok, id: ${id}` });
});

router.post("/send", async (req, res) => {
  const data = {
    connector_id: "1",
    telephone: "9319xxxxxx",
    template_name: "my_template",
    template_vars: "var1;var2;var3",
    customer_id: "110xxxx03",
    url_attach: "",
  };

  try {
    const response = await fetch(
      "https://wv{{wolkvox_server}}.wolkvox.com/api/v2/whatsapp.php?api=send_template_official",
      {
        method: "POST",
        headers: {
          "wolkvox-token": "{{token}}",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("Error:", error);
  }
});

export default router;
