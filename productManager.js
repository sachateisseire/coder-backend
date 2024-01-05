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