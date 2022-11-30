import { Router} from 'express'
import CadController from './controllers/CadController'

const router = Router()

router.get('/cads', CadController.index)

router.get('/cad/:id', CadController.findById)
router.post('/cad', CadController.create)
router.put('/cad/:id', CadController.update)
router.delete('/cad/:id', CadController.delete)

export default router