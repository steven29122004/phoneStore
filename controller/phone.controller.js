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
    res.render('components/modal/formModal', { products, title: 'form' });
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

exports.editProduct = async (req, res) => {
    try {
        const { body: { name, price, image } } = req;
        const { id } = req.params;
        const updateProduct = await phoneEntity.findByIdAndUpdate(id, {
            name,
            price,
            image,
        })
        res.json(new ResponseType(updateProduct).success());
    } catch (error) {
        res.json(new ResponseType(null).error())
    }
}

exports.getDetail = async (req, res) => {
    const { id } = req.params;
    const productDetail = await phoneEntity.findById(id);
    res.render('page/productDetail', { productDetail });
}

exports.getDetailAPI = async (req, res) => {
    const { id } = req.params;
    const productDetail = await phoneEntity.findById(id);
    res.json(productDetail);
}

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProduct = await phoneEntity.findByIdAndDelete(id);

        if (!deleteProduct) {
            res.json(new ResponseType(false).error())
        }
        res.json(new ResponseType(true).success());
    } catch (error) {
        res.json(new ResponseType(false).error())
    }

}