class Producto {
    constructor(nombre, categoria, precio) {
      this.nombre = nombre;
      this.categoria = categoria;
      this.precio = precio;
    }
  
    getDescripcion() {
      return `${this.nombre} \n Precio: $ ${this.precio} \n`;
    }
  }
  
  class Carrito {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    verCarrito() {
      let mensaje = "Carrito:\n";
      if (this.productos.length === 0) {
        mensaje += "No hay productos en el carrito";
      } else {
        this.productos.forEach((producto, index) => {
          mensaje += `${index + 1}. ${producto.nombre} - ${producto.precio}\n`;
        });
      }
      mensaje += `Total: $${this.calcularTotal()}`;
      alert(mensaje);
    }
  
    eliminarProductos() {
      if (this.productos.length === 0) {
        alert("No hay productos en el carrito.");
        return;
      }
  
      let mensaje = "Productos en el carrito:\n";
      this.productos.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} - ${producto.precio}\n`;
      });
  
      const numeroProducto = parseInt(
        prompt(mensaje + "\nIngresa el número del producto que deseas eliminar del carrito:")
      );
  
      if (numeroProducto >= 1 && numeroProducto <= this.productos.length) {
        this.productos.splice(numeroProducto - 1, 1);
        this.verCarrito();
      } else {
        alert("Número inválido.");
      }
    }
  
    calcularTotal() {
      let total = 0;
      this.productos.forEach((producto) => {
        total += producto.precio;
      });
      return total;
    }
  }
  
  class Productos {
    verTodosLosProductos() {
      let mensaje = "Todos los Productos:\n";
      misProductos.forEach((producto, index) => {
        mensaje += index + 1 + ". " + producto.getDescripcion() + "\n";
      });
      alert(mensaje);
    }
  
    elegirProductos() {
      let mensaje = "Seleccione un producto:\n";
      misProductos.forEach((producto, index) => {
        mensaje += index + 1 + ". " + producto.getDescripcion() + "\n";
        mensaje + "\n" + "Presione 0 para volver al menú principal"
      });
  
      let opcion;
      do {
        opcion = parseInt(
          prompt(mensaje + "\n" + "Presione 0 para volver al menú principal")
        );
        if (opcion >= 1 && opcion <= misProductos.length) {
          const productoSeleccionado = misProductos[opcion - 1];
          carrito.agregarProducto(productoSeleccionado);
        } else if (opcion > misProductos.length) {
            alert("Número invalido")
        } else if (opcion|| isNaN ) {
            alert("No has ingresado un número")
        }
      } while (opcion !== 0);
    }
  }
  
  const misProductos = [
    new Producto("Choker Neva", "Collar", 15000),
    new Producto("Collar Amur", "Collar", 12000),
    new Producto("Collar Orinoco", "Collar", 20000),
    new Producto("Collar Tista", "Collar", 28000),
    new Producto("Collar Lagen", "Collar", 25000),
    new Producto("Pulsera Ganges", "Pulsera", 14000),
    new Producto("Esclavas Lena", "Pulsera", 11000),
    new Producto("Pulsera Tiber", "Pulsera", 15000),
    new Producto("Pulsera Perlas", "Pulsera", 10000),
  ];
  
  const carrito = new Carrito();
  const productos = new Productos(carrito);
  
  // Función principal
  function ecommerce() {
    let opcion;
    do {
      opcion = parseInt(
        prompt(
          "Elige una opción:\n1. Comprar productos\n2. Ver carrito\n3. Eliminar productos del carrito\n0. Salir"
        )
      );
  
      switch (opcion) {
        case 1:
          productos.elegirProductos();
          break;
        case 2: 
          carrito.verCarrito();
          break;
        case 3:
          carrito.eliminarProductos();
          break;
        case 0:
          break;
        default:
          alert("Opción inválida");
          break;
      }
    } while (opcion !== 0);
  }

  ecommerce();

  