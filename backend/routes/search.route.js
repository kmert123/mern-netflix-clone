import express from "express";
import { searchPerson } from "../controllers/search.controller.js";
import { searchMovie } from "../controllers/search.controller.js";
import { searchTv } from "../controllers/search.controller.js";
import { getSearchHistory } from "../controllers/search.controller.js";
import { removeItemFromSearchHistory } from "../controllers/search.controller.js";
const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchTv);

router.get("/history", getSearchHistory);

router.delete("/history/:id", removeItemFromSearchHistory);
export default router;
