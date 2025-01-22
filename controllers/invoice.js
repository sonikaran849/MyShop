const { clearCart, getCart } = require("./cart");

async function generate(req,res){
    try {
        const cart = getCart();
        if (cart.length === 0) {
          return res.status(400).send({ message: 'Cart is empty' });
        }
    
        let totalGST = 0;
        let grandTotal = 0;
    
        const invoiceProducts = cart.map(product => {
          const gst = (product.price * product.quantity * product.gstRate) / 100;
          const total = product.price * product.quantity + gst;
          totalGST += gst;
          grandTotal += total;
    
          return {
            ...product,
            gst,
            total,
          };
        });
    
        const invoice = new Invoice({
          products: invoiceProducts,
          totalGST,
          grandTotal,
        });
    
        await invoice.save();
        clearCart(); 
        res.status(201).send(invoice);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    generate,
}