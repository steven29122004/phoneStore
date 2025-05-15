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

exports.postForm = (req, res) => {
    try {
        const { body } = req;
        products.push({
            id: Number(Math.random()),
            ...body
        })
        res.json(200, "Server Success")
    } catch (error) {
        res.json(500, "Server Error")
    }
}


exports.getDetail = (req, res) => {
    const { id } = req.params;
    const productDetail = products.find(item => item.id == id);
    res.render('page/productDetail', { productDetail });
}

exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    products.splice(products.findIndex(item => item.id == id), 1);
    res.redirect('/');
}