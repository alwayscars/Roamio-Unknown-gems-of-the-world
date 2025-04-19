import express from "express";
import upload from "./multerConfig.js"; // path to multer config
import { create, getAllPlaces, getPlace } from "../controller/userControler.js"; // adjust path
const router = express.Router();

router.post("/create", upload.single("image"), create);
router.get("/places",getAllPlaces);
router.get("/places/:State",getPlace);

export default router;
