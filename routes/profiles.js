import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.showProfile)
router.patch("/", checkAuth, profilesCtrl.addTask)
router.patch("/:id/edit", checkAuth, profilesCtrl.editTask)
router.delete("/:id", checkAuth, profilesCtrl.deleteTask)
router.delete("/", checkAuth, profilesCtrl.deleteAllTasks)

export { router }
