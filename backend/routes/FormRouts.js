import express from 'express'

import { deletForm, update, addForm, showIndex,showAll, avatarPhoto} from '../controller/FormsControllers.js';
const router = express.Router();
import upload from '../middlewares/upload.js'

router.get('/', showAll);
//router.post('/addForm',upload.single('avatar'),addForm);
router.post('/addForm',upload.array('avatar[]'),addForm);
router.get('/showIndex/:id', showIndex);
router.put('/update/:id',upload.single("avatar"), update);
router.post('/delete/:id', deletForm)
router.post('/avatarphoto', upload.fields([{name: 'avatar'}, {name: 'photo'}]), avatarPhoto)

export default router