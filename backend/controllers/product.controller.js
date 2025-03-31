import productModel from "../models/product.model.js";

export const createProduct = async (req, res)=>{
    const product = req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try{
        const newProduct = await productModel.create({
            name: product.name,
            price: product.price,
            image: product.image
        });

        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

export const getProduct = async (req, res)=>{
    try{
        const products = await productModel.find({});
        if(!products){
            return res.status(404).json({ success: false, message: "No Products Found" });
        }

        res.status(200).json({ success: true, data: products });
    }
    catch(err){
        console.log(err.message);
        res.status(404).json({ success: false, message: "No Products Found" });
    }
}

export const updateProduct = async (req, res)=>{
    const productId = req.params.id;
    const updation = req.body;

    try{
        const updatedProduct = await productModel.findByIdAndUpdate(productId, {
            name: updation.name,
            price: updation.price,
            image: updation.image
        }, { new: true });
        
        if(!updatedProduct){
            return res.status(400).json({ success: false, message: "Couldn't Update Product" });
        }

        await updatedProduct.save();
        res.status(200).json({ success: true, updatedProduct: updatedProduct, message: "Product Updated" });
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const deleteProduct = async (req, res)=>{
    const productId = req.params.id;

    try{
        const deletedProduct = await productModel.findByIdAndDelete(productId);
        if(!deletedProduct){
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({ success: true, message: "Product Deleted" });
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}