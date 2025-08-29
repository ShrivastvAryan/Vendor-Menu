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
{/* THese Router will be live soon
router.put("/:_id", updateMenu);
router.delete("/:_id/section/:sectionId", deleteSection);
router.post("/:_id/section/:sectionId/item", addItemToSection);*/}

module.exports = router;
