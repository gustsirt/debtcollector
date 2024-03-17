import { Router } from "express";
import CustomError from "../../libraries/errors/customError.js";
import { handleAuth } from "../../middleware/handleAuth.js";


const router = Router();

// http://localhost:PORT/api/pruebas/
router
  .get('/auth', handleAuth(["USER"]), (req, res) => {
    res.send({ 
      datos: "datos sensibles",
      user: req.user
    })
  })
  .get('/error', (req, res, next) => {
    try {
      throw new CustomError("aaa","1231321321")
    } catch (error) {
      next(error)
    }
  })

export default router;
