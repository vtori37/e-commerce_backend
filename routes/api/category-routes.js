const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [{ model: Product }]
  })
  .then(dbCategoryData => res.json(dcCategoryData))
  .catch(err => {
    console.log(err);
  })
  // be sure to include its associated Products
});

// router.get('/:id', (req, res) => {
//   // find one category by its `id` value
//   Category.findOne({
//     attributes: {[]},
//     where: {
//       id:
//     }
//     include: [
//       {
//         model: Product,
//         attributes: ['id', 'product_id', 'tag_id']
//       }
//     ]
//   })
//   // be sure to include its associated Products
// });

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
