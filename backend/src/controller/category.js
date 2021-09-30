const Category = require("../models/category");
const slugify = require("slugify");

function getList(categories, parentId = null) {
  const catList = [];
  let categoryFilter;
  if (parentId == null) {
    categoryFilter=categories.filter((cat) => cat.parentId == undefined);
  } else {
    categoryFilter=categories.filter((cat) => cat.parentId == parentId);
  }
  for (let c of categoryFilter) {
    catList.push({
      _id: c._id,
      name: c.name,
      slug: c.slug,
      parentId: c.parentId,
      children: getList(categories,c._id),
    });
  }
  return catList;
}

exports.addCategory = (req, res) => {

  let categoryUrl;
  if(req.file){
    categoryUrl = process.env.API + '/public' + req.file.filename;
  }

  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
    categoryImage:categoryUrl
  };
  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }
  const cat = new Category(categoryObj);
  cat.save((error, category) => {
    if (error) return res.status(400).json({ error });
    if (category) {
      return res.status(201).json({ category });
    }
  });
};

exports.getCategories = (req, res) => {
  Category.find({}).exec((error, categories) => {
    //console.log(categories);
    if (error) return res.status(400).json({ error });
    if (categories) {
      const categoryList = getList(categories);
      return res.status(201).json({ categoryList });
    }
  });
};
