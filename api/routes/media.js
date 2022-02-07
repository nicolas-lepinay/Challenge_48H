const router = require("express").Router();
const mediaController = require("../controllers/mediaController");

router.get("/", mediaController.findOne_GET);           // GET A MEDIA
router.post("/", mediaController.create_POST);          // INSERT A MEDIA
router.delete("/", mediaController.delete_DELETE)       // DELETE A MEDIA

module.exports = router;