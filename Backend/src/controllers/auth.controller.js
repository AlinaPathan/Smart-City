import User from "../model/user.model.js";

export const register = async (req, res) => {
  const { fullName, email, password, phone, adharNo, address } = req.body;

  try {
    if (!fullName || !email || !password || !phone || !adharNo || !address) {
      return res.status(400).json({ message: " Enter all the credentials " });
    }

    const user = User.createUser({
      fullName,
      email,
      password,
      phone,
      adharNo,
      address,
    });

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: "Server issue at register auth" });
  }
};
