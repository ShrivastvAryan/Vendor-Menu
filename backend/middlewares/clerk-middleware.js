const { requireAuth } = require('@clerk/express');

app.post("/", requireAuth(), async (req, res) => {
  try {
    const { userId } = req.auth;  

    const menu = new Menu({
      ...req.body,
      clerkUserId: userId, 
    });

    await menu.save();
    res.status(201).json({ success: true, data: menu });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});