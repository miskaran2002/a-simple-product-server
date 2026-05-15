import { request, type IncomingMessage, type ServerResponse } from "http";
import { insertProduct, readProduct } from "../service/product.service";
import type { IProduct } from "../types/product.type";
import { parseBody } from "../utility/parseBody";
import { sendResponse } from "../utility/sendResponse";

export const productController = async(req:IncomingMessage, res:ServerResponse) => {  
    // console .log("request",req);
     const url = req.url; // /api/users
        const method = req.method;
        const urlParts = url?.split("/");
        const id = urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;
        // console.log("Product ID:", id);





    // get all products from json
    if (url === '/products' && method === 'GET') {

    
       try{
         const products = readProduct();
         return sendResponse(res, 200, true, 'Products retrieved successfully!', products);

       }
         catch(error){
            return sendResponse(res, 500, false, 'Failed to retrieve products', error);
         }


         

    }else if  (method === "GET" && id !== null) {
        // get single product from json
        const products = readProduct();
        const product = products.find((p: IProduct) => p.id === id);
        // console.log("Product:", product);



        if (!product) {
            return sendResponse(res, 404, false, 'Product not found');
            
        }




        try{
            return sendResponse(res, 200, true, 'Product retrieved successfully!', product);
        }
        catch(error){
            return sendResponse(res, 500, false, 'Failed to retrieve product', error);
        }





        
    //   created product by post method
    }else if (method === "POST" && url === "/products") {
        const body = await parseBody(req);
         const products = readProduct();

        const newProduct: IProduct = {
            id: Date.now(), // Generate a unique ID based on the current timestamp
           ...body, // Spread the properties from the request body
        };
       
        products.push(newProduct);
        //  console.log("New Product:", newProduct);
        insertProduct(products);
        


        // console.log("Request Body:", body);
         res.writeHead(200, { 'Content-Type': 'application/json' });
         res.end(JSON.stringify({ message: 'Product created successfully!',
            data: newProduct,

              }));

    }
    else if (method === "PUT" && id !==null ) {
        const body = await parseBody(req);
        const products = readProduct();
        const index = products.findIndex((p:IProduct) => p.id === id);
        console.log("Product Index:", index);
        if (index < 0) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Product not found' }));
            return;
        }
        
       products[index] = { id:products[index].id, ...body };
        insertProduct(products);

        res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Product updated successfully!', data: products[index] }));
            return;
    }
        else if (method === "DELETE" && id !== null) {
            const products = readProduct();
            const index = products.findIndex((p:IProduct) => p.id === id);

              if (index < 0) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Product not found' }));
            return;
        }
        products.splice(index, 1);
        // console.log(products);
        insertProduct(products);
         res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Product deleted successfully!' }));
        
           

        } 
};
