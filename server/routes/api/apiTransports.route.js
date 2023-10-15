const router = require('express').Router();
const { Transport, Photo } = require('../../db/models');
const fileUpload = require('../../utils/fileUpload');

router.get('/', async (req, res) => {
  try {
    const transports = await Transport.findAll(
      { include: { model: Photo } },
    );
    res.status(200).json({ message: 'ok', transports });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/category/:idCategory', async (req, res) => {
  try {
    const transports = await Transport.findAll(
      { where: { categoryId: req.params.idCategory }, include: { model: Photo } },
    );
    res.status(200).json({ message: 'ok', transports });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const transport = await Transport.findOne(
      { where: { id: req.params.id }, include: { model: Photo } },
    );
    res.status(200).json({ message: 'ok', transport });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      description, category, price, name,
    } = req.body;
    const file = req.files?.url;

    const arrUrl = await Promise.all(
      file.map((el) => fileUpload(el)),
    );
    if (description && category && price && name) {
      const transport = await Transport.create({
        name, description, ownerId: 1, categoryId: category, price,
      });
      await Promise.all(
        arrUrl.map((el) => Photo.create({
          url: el,
          transportId: transport.id,
        })),
      );
      const newTransport = await Transport.findOne(
        { where: { id: transport.id }, include: { model: Photo } },
      );

      res.status(201).json({ message: 'ok', newTransport });
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).json({ message });
  }
});
router.delete('/:idTransport', async (req, res) => {
  try {
    const transport = await Transport.findOne({ where: { id: req.params.idTransport } });
    if (transport) {
      const respons = await Transport.destroy({ where: { id: req.params.idTransport } });
      if (respons) {
        res.status(200).json({ id: transport.id });
      } else {
        res.status(400).json({ message: 'Произошла ошибка при удалении' });
      }
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
router.put('/:idTransport', async (req, res) => {
  try {
    const { idTransport } = req.params;
    const {
      description, price, name,
    } = req.body;
    if (description && price && name) {
      const transport = await Transport.findOne({
        where: { id: idTransport },
        include: { model: Photo },
      });
      if (transport) {
        transport.description = description;
        transport.price = price;
        transport.name = name;
        transport.save();
        res.status(200).json(transport);
      } else {
        res.status(400).json({ message: 'Это не Ваше' });
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
