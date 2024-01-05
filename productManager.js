class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
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
        console.log('Tenés que completar todos los campos!');
        return;
      }
  
  
      const codigoExiste = this.products.some((p) => p.code === product.code);
      if (codigoExiste) {
        console.log('El código del producto ya existe.');
        return;
      }
  
      product.id = this.productIdCounter;
      this.products.push(product);
      this.productIdCounter++;
  
      console.log('Producto agregado con éxito.');
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (product) {
        return product;
      } else {
        console.log('Producto no encontrado.');
        return null;
      }
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