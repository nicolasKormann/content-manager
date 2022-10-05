import express from 'express';
import { addLink, allLinks, deleteLink, editLink, loadLink, redirect } from '../controllers/linkController.js';

export const router = express.Router();

router.get('/', allLinks)
router.get('/add', (req, res) => {
  res.render('add', { error: false, body: {} })
})
router.get('/:title', redirect);
router.get('/edit/:id', loadLink) 


router.post('/', express.urlencoded({ extended: true }), addLink);
router.post('/edit/:id', express.urlencoded({ extended: true }), editLink);


router.delete('/:id', deleteLink);