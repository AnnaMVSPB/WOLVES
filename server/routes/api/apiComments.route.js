const router = require('express').Router();
const { Comment, User } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { comment, transportId } = req.body;
    if (comment && transportId) {
      let newComment = await Comment.create({
        text: comment,
        transportId,
        userId: req.session.userId,
      });
      newComment = await Comment.findOne({
        where:
        { id: newComment.id },
        include: { model: User },
      });
      res.json({ message: 'ok', newComment });
    } else {
      res.json({ message: 'заполните все поля ' });
    }
  } catch ({ message }) {
    res.json({ messageError: message });
  }
});

router.delete('/:idComment', async (req, res) => {
  try {
    const { idComment } = req.params;
    const { userId } = req.session;
    const comment = await Comment.windOne({ where: { userId, id: idComment } });
    if (comment) {
      const respons = await Comment.delete({ where: { userId, id: idComment } });
      if (respons) {
        res.status(200).json({ message: 'ok', id: idComment });
      } else {
        res.status(400).json({ message: 'Произошла ошибка' });
      }
    } else {
      res.status(400).json({ message: 'Это не Ваше' });
    }
  } catch ({ message }) {
    res.json({ messageError: message });
  }
});
module.exports = router;
