let products = [
    {
        id: 1,
        name: "IPhone X",
        image: "https://cdn.tgdd.vn/Products/Images/42/114111/s16/iphone-x-256-gb-650x650.png",
        price: 1000
    },
    {
        id: 2,
        name: "IPhone 11 Pro",
        image: "https://lebaostore.com/wp-content/uploads/2022/02/11-Pro-Max-Gray.png",
        price: 2000
    },
    {
        id: 3,
        name: "IPhone 14 Pro Max",
        image: 'https://taozinsaigon.com/files_upload/product/09_2022/thumbs/600_iphone_14_pro_max_xam_11.png',
        price: 3000
    },
    {
        id: 4,
        name: "IPhone 16 Plus",
        image: 'https://goldstore.vn/wp-content/uploads/2024/09/iphone16-xanh-luu-ly.png',
        price: 5000
    },
]

exports.getPage = (req, res) => {
    res.render('page/home', { products });
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