const jwt = require("jsonwebtoken");

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // Generate JWT token
      const token = jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      // Send token in response
      res.json({ success: true, message: "Login successful", token });
    } else {
      res.status(401).json({ success: false, message: "Invalid login details" });
    }
  } catch (error) {
    console.error("Admin login error:", error);
    res.status(500).json({ success: false, message: "Error logging in admin" });
  }
};

module.exports = { adminLogin };