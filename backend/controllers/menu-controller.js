const Menu = require('../modals/menu-modal');

// Create a new Menu
const createMenu = async (req, res, next) => {
  try {
    const { userId } = req.auth; // Clerk middleware gives this
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const { restaurantName, restaurantAddress, restaurantNumber, sections } = req.body;

    const menu = new Menu({
      restaurantName,
      restaurantAddress,
      restaurantNumber,
      sections,
      clerkUserId: userId, // ✅ attach userId automatically
    });

    await menu.save();
    res.status(201).json({ success: true, data: menu });
  } catch (error) {
    next(error);
  }
};

// Get Menu (only menus of logged-in user)
const getMenu = async (req, res, next) => {
  try {
    const { userId } = req.auth;
    const { _id } = req.params;

    const menu = await Menu.findOne({ _id, clerkUserId: userId }); // ✅ filter by user

    if (!menu) {
      return res.status(404).json({ success: false, message: "Menu not found" });
    }

    res.status(200).json({ success: true, data: menu });
  } catch (error) {
    next(error);
  }
};

// Update Menu (only if it belongs to user)
const updateMenu = async (req, res, next) => {
  try {
    const { userId } = req.auth;
    const { _id } = req.params;
    const { sections } = req.body;

    const menu = await Menu.findOneAndUpdate(
      { _id, clerkUserId: userId }, // ✅ restrict to logged-in user
      { sections },
      { new: true }
    );

    if (!menu) {
      return res.status(404).json({ success: false, message: "Menu not found or unauthorized" });
    }

    res.status(200).json({ success: true, data: menu });
  } catch (error) {
    next(error);
  }
};

// Delete a Section
const deleteSection = async (req, res, next) => {
  try {
    const { userId } = req.auth;
    const { _id, sectionId } = req.params;

    const menu = await Menu.findOneAndUpdate(
      { _id, clerkUserId: userId }, // ✅ restrict
      { $pull: { sections: { _id: sectionId } } },
      { new: true }
    );

    if (!menu) {
      return res.status(404).json({ success: false, message: "Menu not found or unauthorized" });
    }

    res.status(200).json({ success: true, data: menu });
  } catch (error) {
    next(error);
  }
};

// Add Item to a Section
const addItemToSection = async (req, res, next) => {
  try {
    const { userId } = req.auth;
    const { _id, sectionId } = req.params;
    const { name, type, description, prices } = req.body;

    const menu = await Menu.findOneAndUpdate(
      { _id, clerkUserId: userId, "sections._id": sectionId }, // ✅ restrict
      {
        $push: {
          "sections.$.items": { name, type, description, prices },
        },
      },
      { new: true }
    );

    if (!menu) {
      return res.status(404).json({ success: false, message: "Menu not found or unauthorized" });
    }

    res.status(200).json({ success: true, data: menu });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMenu,
  getMenu,
  updateMenu,
  deleteSection,
  addItemToSection,
};