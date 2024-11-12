import  {Router}  from 'express'
import { mutantPost } from '../controllers/cMutan.js'
import { getStats } from '../controllers/cStats.js'
import { verifyDna } from '../middleware/mutanMiddleware.js'
const router = Router()

router.post('/mutant/',verifyDna, mutantPost)
router.get('/stats/', getStats)

export default router