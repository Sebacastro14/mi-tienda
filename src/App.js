import './App.css';
import { useState } from 'react';
const productos = [
  {
    "modelo": "BS2404",
    "categoria": "clipon",
    "colores": [
      {
        "nombre": "CF13",
        "imagen": "/imagenes/clipones/BS2404-CF13.jpeg"
      }
    ]
  },
  {
    "modelo": "BS2406",
    "categoria": "clipon",
    "colores": [
      {
        "nombre": "CB1",
        "imagen": "/imagenes/clipones/BS2406-CB1.jpeg"
      },
      {
        "nombre": "CB6",
        "imagen": "/imagenes/clipones/BS2406-CB6.jpeg"
      }
    ]
  },
  {
    "modelo": "BS2407",
    "categoria": "clipon",
    "colores": [
      {
        "nombre": "CB1",
        "imagen": "/imagenes/clipones/BS2407-CB1.jpeg"
      },
      {
        "nombre": "CB2",
        "imagen": "/imagenes/clipones/BS2407-CB2.jpeg"
      },
      {
        "nombre": "CB6",
        "imagen": "/imagenes/clipones/BS2407-CB6.jpeg"
      }
    ]
  },
  {
    "modelo": "BS2408",
    "categoria": "clipon",
    "colores": [
      {
        "nombre": "CB1",
        "imagen": "/imagenes/clipones/BS2408-CB1.jpeg"
      },
      {
        "nombre": "CB2",
        "imagen": "/imagenes/clipones/BS2408-CB2.jpeg"
      },
      {
        "nombre": "CB6",
        "imagen": "/imagenes/clipones/BS2408-CB6.jpeg"
      }
    ]
  },
  {
    "modelo": "BS2409",
    "categoria": "clipon",
    "colores": [
      {
        "nombre": "CB2",
        "imagen": "/imagenes/clipones/BS2409-CB2.jpeg"
      }
    ]
  },
  {
    "modelo": "BS2411",
    "categoria": "clipon",
    "colores": [
      {
        "nombre": "CB1",
        "imagen": "/imagenes/clipones/BS2411-CB1.jpeg"
      },
      {
        "nombre": "CB2",
        "imagen": "/imagenes/clipones/BS2411-CB2.jpeg"
      },
      {
        "nombre": "CB7",
        "imagen": "/imagenes/clipones/BS2411-CB7.jpeg"
      }
    ]
  },
  {
    "modelo": "BS2412",
    "categoria": "clipon",
    "colores": [
      {
        "nombre": "CF1",
        "imagen": "/imagenes/clipones/BS2412-CF1.jpeg"
      },
      {
        "nombre": "CF2",
        "imagen": "/imagenes/clipones/BS2412-CF2.jpeg"
      },
      {
        "nombre": "CF3",
        "imagen": "/imagenes/clipones/BS2412-CF3.jpeg"
      }
    ]
  },
  {
    "modelo": "BS2413",
    "categoria": "clipon",
    "colores": [
      {
        "nombre": "CB1",
        "imagen": "/imagenes/clipones/BS2413-CB1.jpeg"
      },
      {
        "nombre": "CB2",
        "imagen": "/imagenes/clipones/BS2413-CB2.jpeg"
      },
      {
        "nombre": "CBC2",
        "imagen": "/imagenes/clipones/BS2413-CBC2.jpeg"
      }
    ]
  },
  {
    "modelo": "BS2415",
    "categoria": "clipon",
    "colores": [
      {
        "nombre": "CB1",
        "imagen": "/imagenes/clipones/BS2415-CB1.jpeg"
      },
      {
        "nombre": "CBC7",
        "imagen": "/imagenes/clipones/BS2415-CBC7.jpeg"
      }
    ]
  },
  {
    "modelo": "BS2416",
    "categoria": "clipon",
    "colores": [
      {
        "nombre": "CB1",
        "imagen": "/imagenes/clipones/BS2416-CB1.jpeg"
      },
      {
        "nombre": "CBC7",
        "imagen": "/imagenes/clipones/BS2416-CBC7.jpeg"
      },
      {
        "nombre": "CBE2",
        "imagen": "/imagenes/clipones/BS2416-CBE2.jpeg"
      }
    ]
  },
  {
    "modelo": "BS2417",
    "categoria": "clipon",
    "colores": [
      {
        "nombre": "CB14",
        "imagen": "/imagenes/clipones/BS2417-CB14.jpeg"
      },
      {
        "nombre": "CBC2",
        "imagen": "/imagenes/clipones/BS2417-CBC2.jpeg"
      },
      {
        "nombre": "CBC7",
        "imagen": "/imagenes/clipones/BS2417-CBC7.jpeg"
      }
    ]
  },
  {
    "modelo": "BS2418",
    "categoria": "clipon",
    "colores": [
      {
        "nombre": "CB1",
        "imagen": "/imagenes/clipones/BS2418-CB1.jpeg"
      },
      {
        "nombre": "CBC2",
        "imagen": "/imagenes/clipones/BS2418-CBC2.jpeg"
      },
      {
        "nombre": "CBC7",
        "imagen": "/imagenes/clipones/BS2418-CBC7.jpeg"
      }
    ]
  },
  {
    "modelo": "BS2419",
    "categoria": "clipon",
    "colores": [
      {
        "nombre": "CB2",
        "imagen": "/imagenes/clipones/BS2419-CB2.jpeg"
      },
      {
        "nombre": "CB5",
        "imagen": "/imagenes/clipones/BS2419-CB5.jpeg"
      },
      {
        "nombre": "CBC13",
        "imagen": "/imagenes/clipones/BS2419-CBC13.jpeg"
      }
    ]
  },
  {
    "modelo": "BS2422",
    "categoria": "clipon",
    "colores": [
      {
        "nombre": "CF1",
        "imagen": "/imagenes/clipones/BS2422-CF1.jpeg"
      },
      {
        "nombre": "CF13",
        "imagen": "/imagenes/clipones/BS2422-CF13.jpeg"
      },
      {
        "nombre": "CF2",
        "imagen": "/imagenes/clipones/BS2422-CF2.jpeg"
      }
    ]
  },
  {
    "modelo": "BS2424",
    "categoria": "clipon",
    "colores": [
      {
        "nombre": "CO2",
        "imagen": "/imagenes/clipones/BS2424-CO2.jpeg"
      }
    ]
  },
  {
    "modelo": "BA2308",
    "categoria": "metal",
    "colores": [
      {
        "nombre": "CB1",
        "imagen": "/imagenes/metal_hanis/BA2308-CB1.jpeg"
      },
      {
        "nombre": "CB5",
        "imagen": "/imagenes/metal_hanis/BA2308-CB5.jpeg"
      },
      {
        "nombre": "CFU3",
        "imagen": "/imagenes/metal_hanis/BA2308-CFU3.jpeg"
      }
    ]
  },
  {
    "modelo": "BA2309",
    "categoria": "metal",
    "colores": [
      {
        "nombre": "CB1",
        "imagen": "/imagenes/metal_hanis/BA2309-CB1.jpeg"
      },
      {
        "nombre": "CB5",
        "imagen": "/imagenes/metal_hanis/BA2309-CB5.jpeg"
      },
      {
        "nombre": "CFU3",
        "imagen": "/imagenes/metal_hanis/BA2309-CFU3.jpeg"
      }
    ]
  },
  {
    "modelo": "HM2004",
    "categoria": "metal",
    "colores": [
      {
        "nombre": "C1",
        "imagen": "/imagenes/metal_hanis/HM2004-C1.jpeg"
      },
      {
        "nombre": "C2",
        "imagen": "/imagenes/metal_hanis/HM2004-C2.jpeg"
      },
      {
        "nombre": "C3",
        "imagen": "/imagenes/metal_hanis/HM2004-C3.jpeg"
      }
    ]
  },
  {
    "modelo": "SP2405",
    "categoria": "metal",
    "colores": [
      {
        "nombre": "C5",
        "imagen": "/imagenes/metal_hanis/SP2405-C5.jpeg"
      }
    ]
  },
  {
    "modelo": "SP2406",
    "categoria": "metal",
    "colores": [
      {
        "nombre": "C1",
        "imagen": "/imagenes/metal_hanis/SP2406-C1.jpeg"
      },
      {
        "nombre": "C3",
        "imagen": "/imagenes/metal_hanis/SP2406-C3.jpeg"
      },
      {
        "nombre": "C5",
        "imagen": "/imagenes/metal_hanis/SP2406-C5.jpeg"
      }
    ]
  },
  {
    "modelo": "SP2407",
    "categoria": "metal",
    "colores": [
      {
        "nombre": "3",
        "imagen": "/imagenes/metal_hanis/SP2407-3.jpeg"
      }
    ]
  },
  {
    "modelo": "SP2410",
    "categoria": "metal",
    "colores": [
      {
        "nombre": "C3",
        "imagen": "/imagenes/metal_hanis/SP2410-C3.jpeg"
      },
      {
        "nombre": "C5",
        "imagen": "/imagenes/metal_hanis/SP2410-C5.jpeg"
      }
    ]
  },
  {
    "modelo": "XJ3002",
    "categoria": "metal",
    "colores": [
      {
        "nombre": "C1",
        "imagen": "/imagenes/metal_xj/XJ3002-C1.jpeg"
      },
      {
        "nombre": "C2",
        "imagen": "/imagenes/metal_xj/XJ3002-C2.jpeg"
      },
      {
        "nombre": "C3",
        "imagen": "/imagenes/metal_xj/XJ3002-C3.jpeg"
      },
      {
        "nombre": "C4",
        "imagen": "/imagenes/metal_xj/XJ3002-C4.jpeg"
      },
      {
        "nombre": "C5",
        "imagen": "/imagenes/metal_xj/XJ3002-C5.jpeg"
      }
    ]
  },
  {
    "modelo": "XJ3004",
    "categoria": "metal",
    "colores": [
      {
        "nombre": "C1",
        "imagen": "/imagenes/metal_xj/XJ3004-C1.jpeg"
      },
      {
        "nombre": "C2",
        "imagen": "/imagenes/metal_xj/XJ3004-C2.jpeg"
      },
      {
        "nombre": "C3",
        "imagen": "/imagenes/metal_xj/XJ3004-C3.jpeg"
      },
      {
        "nombre": "C4",
        "imagen": "/imagenes/metal_xj/XJ3004-C4.jpeg"
      },
      {
        "nombre": "C5",
        "imagen": "/imagenes/metal_xj/XJ3004-C5.jpeg"
      }
    ]
  },
  {
    "modelo": "XJ3005",
    "categoria": "metal",
    "colores": [
      {
        "nombre": "C1",
        "imagen": "/imagenes/metal_xj/XJ3005-C1.jpeg"
      },
      {
        "nombre": "C2",
        "imagen": "/imagenes/metal_xj/XJ3005-C2.jpeg"
      },
      {
        "nombre": "C3",
        "imagen": "/imagenes/metal_xj/XJ3005-C3.jpeg"
      },
      {
        "nombre": "C4",
        "imagen": "/imagenes/metal_xj/XJ3005-C4.jpeg"
      },
      {
        "nombre": "C5",
        "imagen": "/imagenes/metal_xj/XJ3005-C5.jpeg"
      }
    ]
  },
  {
    "modelo": "XJ3010",
    "categoria": "metal",
    "colores": [
      {
        "nombre": "C1",
        "imagen": "/imagenes/metal_xj/XJ3010-C1.jpeg"
      },
      {
        "nombre": "C2",
        "imagen": "/imagenes/metal_xj/XJ3010-C2.jpeg"
      },
      {
        "nombre": "C3",
        "imagen": "/imagenes/metal_xj/XJ3010-C3.jpeg"
      },
      {
        "nombre": "C4",
        "imagen": "/imagenes/metal_xj/XJ3010-C4.jpeg"
      }
    ]
  },
  {
    "modelo": "XL105",
    "categoria": "montado",
    "colores": [
      {
        "nombre": "C1",
        "imagen": "/imagenes/metal_montado/XL105-C1.jpeg"
      }
    ]
  },
  {
    "modelo": "XL113",
    "categoria": "montado",
    "colores": [
      {
        "nombre": "C2",
        "imagen": "/imagenes/metal_montado/XL113-C2.jpeg"
      },
      {
        "nombre": "C3",
        "imagen": "/imagenes/metal_montado/XL113-C3.jpeg"
      },
      {
        "nombre": "C4",
        "imagen": "/imagenes/metal_montado/XL113-C4.jpeg"
      }
    ]
  },
  {
    "modelo": "XL115",
    "categoria": "montado",
    "colores": [
      {
        "nombre": "C1",
        "imagen": "/imagenes/metal_montado/XL115-C1.jpeg"
      },
      {
        "nombre": "C2",
        "imagen": "/imagenes/metal_montado/XL115-C2.jpeg"
      },
      {
        "nombre": "C3",
        "imagen": "/imagenes/metal_montado/XL115-C3.jpeg"
      },
      {
        "nombre": "C4",
        "imagen": "/imagenes/metal_montado/XL115-C4.jpeg"
      }
    ]
  },
  {
    "modelo": "XL118",
    "categoria": "montado",
    "colores": [
      {
        "nombre": "C1",
        "imagen": "/imagenes/metal_montado/XL118-C1.jpeg"
      },
      {
        "nombre": "C3",
        "imagen": "/imagenes/metal_montado/XL118-C3.jpeg"
      },
      {
        "nombre": "C4",
        "imagen": "/imagenes/metal_montado/XL118-C4.jpeg"
      }
    ]
  },
  {
    "modelo": "XL119",
    "categoria": "montado",
    "colores": [
      {
        "nombre": "C1",
        "imagen": "/imagenes/metal_montado/XL119-C1.jpeg"
      },
      {
        "nombre": "C3",
        "imagen": "/imagenes/metal_montado/XL119-C3.jpeg"
      },
      {
        "nombre": "C4",
        "imagen": "/imagenes/metal_montado/XL119-C4.jpeg"
      }
    ]
  }
];




function App() {
  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('clipon');

  const precios = {
    clipon: 20000,
    metal: 14900,
    montado: 14900,
    niño: 12900,
    acetato: 14900,
  };

  const telefono = '5491126394472';

  const agregarAlCarrito = (producto, color) => {
    const item = {
      modelo: producto.modelo,
      color: color.nombre,
      imagen: color.imagen,
      precio: precios[producto.categoria]
    };
    setCarrito([...carrito, item]);
  };

  const obtenerTotal = () => carrito.reduce((sum, item) => sum + item.precio, 0);

  const enviarPedidoWhatsApp = () => {
    if (carrito.length === 0) {
      alert('El carrito está vacío.');
      return;
    }
    const mensaje = carrito
      .map((item, index) => index + 1 + ') Modelo: ' + item.modelo + ', Color: ' + item.color + ', Precio: $' + item.precio)
      .join('\n');
    const total = obtenerTotal();
    const mensajeFinal = 'Hola, quiero realizar el siguiente pedido:\n\n' + mensaje + '\n\nTotal a pagar: $' + total;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajeFinal)}`;
    window.open(url, '_blank');
  };

  const categorias = ['clipon', 'metal', 'montado', 'niño', 'acetato'];

  return (
    <>
    <div className="App" style={{ fontFamily: 'Arial', backgroundColor: '#f9f9f9' }}>
      <header style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '15px 30px', backgroundColor: '#333', color: 'white' }}>
        <h1>Distribuidora JyB</h1>
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <span onClick={() => setCarritoAbierto(!carritoAbierto)} style={{ fontSize: '24px' }}>
            🛒 ({carrito.length})
          </span>
          {carritoAbierto && (
            <div style={{ position: 'absolute', top: '35px', right: '0', width: '300px', backgroundColor: 'white', color: 'black', border: '1px solid #ddd', borderRadius: '8px', padding: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 999 }}>
              <h3>🛒 Carrito</h3>
              {carrito.length === 0 ? (
                <p>El carrito está vacío.</p>
              ) : (
                <div>
                  {carrito.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <img src={item.imagen} alt={item.modelo} style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px', padding: '10px 15px', borderRadius: '8px', borderRadius: '5px' }} />
                      <div>
                        <p style={{ margin: 0 }}>{item.modelo} - {item.color}</p>
                        <p style={{ margin: 0 }}>Precio: ${item.precio}</p>
                      </div>
                    </div>
                  ))}
                  <hr />
                  <p><strong>Total: ${obtenerTotal()}</strong></p>
                  <button onClick={enviarPedidoWhatsApp} style={{ marginTop: '10px', padding: '10px 15px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>
                    Enviar pedido por WhatsApp
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', paddingTop: '20px' }}>
        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoriaSeleccionada(cat)}
            style={{
              padding: '10px 15px',
              backgroundColor: categoriaSeleccionada === cat ? '#007bff' : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        justifyContent: 'center',
        padding: '30px'
      }}>
        {productos
          .filter(p => p.categoria === categoriaSeleccionada)
          .flatMap((producto, i) =>
            producto.colores.map((color, j) => (
              <div key={i + '-' + j} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '15px', width: '220px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', alignItems: 'center', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <img
                  src={color.imagen}
                  alt={producto.modelo + ' ' + color.nombre}
                  onClick={() => setImagenAmpliada(color.imagen)}
                  style={{ cursor: 'pointer', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <h2 style={{ fontSize: '18px', margin: '10px 0' }}>{producto.modelo}</h2>
                <p style={{ fontSize: '16px', color: '#555' }}>Color: {color.nombre}</p>
                <p style={{ fontSize: '16px', color: '#555' }}>Precio: ${precios[producto.categoria]}</p>
                <button onClick={() => agregarAlCarrito(producto, color)} style={{ marginTop: '10px', padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>
                  Agregar al carrito
                </button>
              </div>
            ))
        )}
      </div>

      {imagenAmpliada && (
        <div onClick={() => setImagenAmpliada(null)} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <img src={imagenAmpliada} alt="Ampliada" style={{ maxHeight: '90%', maxWidth: '90%', borderRadius: '10px', boxShadow: '0 0 15px rgba(255,255,255,0.4)' }} />
        </div>
      )}
    </div>
    </>
  );
}

export default App;