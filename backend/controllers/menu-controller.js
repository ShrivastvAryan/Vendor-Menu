const Menu=require('../modals/menu-modal')

// Create a new Menu
const createMenu = async (req, res) => {
  try {
    const { _id, restaurantName, restaurantAddress, restaurantNumber, sections } = req.body;

    const menu = new Menu({
      _id,
      restaurantName,
      restaurantAddress,
      restaurantNumber,
      sections,
    });

    await menu.save();

    res.status(201).json({ success: true, data: menu });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    console.log(error);
  }
};

//  Get Menu by restaurant
const getMenu = async (req, res) => {
  try {
    const { _id } = req.params;
    const menu = await Menu.findOne({ _id });

    if (!menu) {
      return res.status(404).json({ success: false, message: "Menu not found" });
    }

    res.status(200).json({ success: true, data: menu });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Menu
const updateMenu = async (req, res) => {
  try {
    const { _id } = req.params;
    const { sections } = req.body;

    const menu = await Menu.findOneAndUpdate(
      { _id },
      { sections },
      { new: true, upsert: true }
    );

    res.status(200).json({ success: true, data: menu });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//  Delete a Section
const deleteSection = async (req, res) => {
  try {
    const { _id, sectionId } = req.params;

    const menu = await Menu.findOneAndUpdate(
      { _id },
      { $pull: { sections: { _id: sectionId } } },
      { new: true }
    );

    res.status(200).json({ success: true, data: menu });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//  Add Item to a Section
const addItemToSection = async (req, res) => {
  try {
    const { _id, sectionId } = req.params;
    const { name, type, description, prices } = req.body;

    const menu = await Menu.findOneAndUpdate(
      { _id, "sections._id": sectionId },
      {
        $push: {
          "sections.$.items": { name, type, description, prices },
        },
      },
      { new: true }
    );

    res.status(200).json({ success: true, data: menu });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createMenu,
  getMenu,
  updateMenu,
  deleteSection,
  addItemToSection,
};
