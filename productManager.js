class ProductManager {
    constructor() {
      this.products = []
      this.productIdCounter = 1
    }
  
    addProduct(product) {
  
      if (
        !product.title ||
        !product.description ||
        !product.price ||
        !product.thumbnail ||
        !product.code ||
        !product.stock
      ) {
        console.log('Tenés que completar todos los campos!')
        return
      }
  
  
      const codigoExiste = this.products.some((p) => p.code === product.code)
      if (codigoExiste) {
        console.log('El código del producto ya existe.')
        return
      }
  
      product.id = this.productIdCounter
      this.products.push(product)
      this.productIdCounter++
  
      console.log('Producto agregado con éxito.')
    }
  
    getProducts() {
      return this.products
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id)
      if (product) {
        return product
      } else {
        console.log('Producto no encontrado.')
        return null
      }
    }

    updateProduct(id, updatedField, updatedValue) {

      const productIndex = this.products.findIndex((p) => p.id === id);

      if (productIndex !== -1) {
        this.products[productIndex][updatedField] = updatedValue
        console.log('Producto actualizado con éxito.')
      } else {
        console.log('Producto no encontrado.')
      }
    }

    deleteProduct(id) {
 
      this.products = this.products.filter((p) => p.id !== id);
      console.log('Producto eliminado con éxito.');
    }
  
  }

///////////////////////////////////////////////////////////////

// AGREGAR PRODUCTO //

const productManager = new ProductManager();

const producto1 = {
  title: 'Producto 1',
  description: 'Descripción del producto 1',
  price: 29.99,
  thumbnail: 'url_imagen_1',
  code: 'P001',
  stock: 50,
};

const producto2 = {
  title: 'Producto 2',
  description: 'Descripción del producto 2',
  price: 39.99,
  thumbnail: 'url_imagen_2',
  code: 'P002',
  stock: 30,
};

productManager.addProduct(producto1)
productManager.addProduct(producto2)

// LISTADO DE PRODUCTOS //

console.log(productManager.getProducts())

// BÚSQUEDA DE PRODUCTO //

console.log(productManager.getProductById(1))

// UPGRADE //

productManager.updateProduct(1, 'price', 49.99)

// DELETE //

productManager.deleteProduct(2)

// VERIFICACIÓN UPDATE & DELETE //

console.log('Nueva lista de productos:', productManager.getProducts());

