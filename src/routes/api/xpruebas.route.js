import { Router } from "express";
import CustomError from "../../errors/customError.js";
//import { handleAuth } from "../../middleware/handlePoliciesPASP.js";

const router = Router();

// http://localhost:PORT/api/pruebas/
router
  .get('/', (req, res) => {
    res.send({ datos: "datos sensibles"})
  })
  .get('/error', (req, res) => {
    try {
      throw new CustomError("aaa","1231321321")
    } catch (error) {
      console.log(error)
      res.send(error.stack)
    }
  })

export default router;
