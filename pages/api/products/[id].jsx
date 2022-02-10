import dbConnect from './../../../utils/mongo';
import ProductModal from './../../../models/Product';

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const product = await ProductModal.findById(id);
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "PUT") {
        try {
            const products = await ProductModal.find();
            res.json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "DELETE") {
        try {
            const products = await ProductModal.find();
            res.json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}