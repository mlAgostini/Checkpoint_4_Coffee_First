const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const machineControllers = require("./controllers/machineController");
const memberControllers = require("./controllers/memberController");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/machine", machineControllers.browse);
router.get("/machine/:id", machineControllers.read);
router.put("/machines/:id", machineControllers.edit);
router.post("/machines", machineControllers.add);
router.delete("/machines/:id", machineControllers.destroy);

router.get("/member", memberControllers.browse);
router.get("/member/:id", memberControllers.read);
router.put("/members/:id", memberControllers.edit);
router.post("/members", memberControllers.add);
router.delete("/members/:id", memberControllers.destroy);

module.exports = router;
