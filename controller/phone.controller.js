let products = [];

const phoneEntity = require('../model/phone.model');
const ResponseType = require('../dto/response.type');


exports.getPage = async (req, res) => {
    const product = await phoneEntity.find();
    res.render('page/home', {
        products: product,
        title: "HomePage"
    });
}
exports.getForm = (req, res) => {
    res.render('page/form', { products });
}

exports.postForm = async (req, res) => {
    try {
        const { body: { name, price, image } } = req;
        const createProduct = new phoneEntity({ name, price, image });
        await createProduct.save();
        res.json(new ResponseType(createProduct).success())
    } catch (error) {
        res.json(new ResponseType(null).error())
    }
}


exports.getDetail = async (req, res) => {
    const { id } = req.params;
    const productDetail = await phoneEntity.findById(id);
    res.render('page/productDetail', { productDetail });
}

exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    products.splice(products.findIndex(item => item.id == id), 1);
    res.redirect('/');
}