const express = require("express");
const {
  createMenu,
  getMenu,
  updateMenu,
  deleteSection,
  addItemToSection,
} = require("../controllers/menu-controller");

const router = express.Router();

router.post("/", createMenu);
router.get("/:restaurantId", getMenu);
router.put("/:restaurantId", updateMenu);
router.delete("/:restaurantId/section/:sectionId", deleteSection);
router.post("/:restaurantId/section/:sectionId/item", addItemToSection);

module.exports = router;
