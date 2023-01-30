import './App.css';
import Header from "./components/Header";
import Tarjeta from "./components/Card";
import Footer from "./components/Footer";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div>
      <Header titulo="Galería de Imágenes con React" />
      <Tarjeta titulo="Paisaje" descripcion="Montañas del norte" url="https://images.unsplash.com/photo-1443479579455-1860f114bf77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
      <Tarjeta titulo="Caribe" descripcion="Playas de arenas blancas" url="https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80" />
      <Tarjeta titulo="Orlando" descripcion="Castillo de disney" url="https://images.unsplash.com/photo-1539886075737-7a69d4c28c33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80" />
      <Tarjeta titulo="Antartida" descripcion="Frio, nieve y hielo" url="https://images.unsplash.com/photo-1535752385016-16aa049b6a8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1523&q=80" />
      <Footer footer="Creado por Felipe. Creditos a unsplash.com por las imagenes."  url="https://unsplash.com/es"/>
    </div>
  );
}

export default App;
