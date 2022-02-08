const router = require("express").Router();
const mediaController = require("../controllers/mediaController");

router.get("/", mediaController.find_GET);                      // GET ONE OR SEVERAL MEDIA (BY ID OR TYPE)
router.get("/findAll", mediaController.findAll_GET);                      // GET ONE OR SEVERAL MEDIA (BY ID OR TYPE)
router.get("/broadcast", mediaController.findBroadcast_GET);    // GET THE BROADCAST MEDIA
router.post("/", mediaController.create_POST);                  // INSERT A MEDIA
router.delete("/", mediaController.delete_DELETE)               // DELETE A MEDIA
router.put("/:id/broadcast", mediaController.broadcast_PUT);    // BROADCAST A MEDIA

module.exports = router;