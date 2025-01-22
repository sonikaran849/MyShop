let cart = null;

async function addToCart(req,res){
    const { code, quantity } = req.body;
    if (!cart) cart = [];
  
    Product.findById(code)
    .then(product => {
        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }
        const cartItem = cart.find(item => item.code === code);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.push({
            code,
            name: product.name,
            price: product.price,
            gstRate: product.gstRate,
            quantity,
            });
        }
        res.status(200).send(cart);
    })
    .catch(err => res.status(500).send(err));
}

async function getCart(req,res){
    res.send(cart || []);
}
function cart(){
    return cart || [];
}
  
async function deleteItemFromCart(){
    cart = null;
    res.status(200).send({ message: 'Cart cleared for this session' });
}

async function clearCart(){
    cart = null;
}
  
module.exports = {
    addToCart,
    getCart,
    deleteItemFromCart,
    cart,
    clearCart
};