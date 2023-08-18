import "./App.css";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/footer";
import Cards from "./components/Cards";
import Bartolo from "./imagenes/perrito-Bartolo.jpg";
import gohan from "./imagenes/perrito-gohan.jpg";
import messi from "./imagenes/perrito-messi.jpg";
import princesa from "./imagenes/perrito-princesa.jpg";
function App() {
  return (
    <>
      <div className="contenedor-padre">
        <div className="titulo">
          <Header titulo="Adopta un Perrito" />
        </div>
        <div className="contenedor-principal">
          <Cards
            imagen={Bartolo}
            alt={Bartolo}
            nombre="Bartolo"
            descripcion="Lleno de energía y listo para jugar.Dale a Bartolo el hogar que se merece"
            colorButton="success"
            textButton="Husky"
          />

          <Cards
            imagen={gohan}
            alt={gohan}
            nombre="Gohan"
            descripcion="Un perro de tamaño mediano con un corazón gigante.Hazte amigo de Gohan y experimenta un amor incondicional"
            colorButton="danger"
            textButton=" Chars Pei "
          />

          <Cards
            imagen={messi}
            alt={messi}
            nombre="Messi"
            descripcion="Es jugetó, , amigable y se lleva bien con niños y otros animales.Haz de Messi parte de tu familia hoy mismo"
            colorButton="primary"
            textButton="Bobtail"
          />

          <Cards
            imagen={princesa}
            alt={princesa}
            nombre="Princesa"
            descripcion="Es una compaña leal y cariñosa que adora los moimos y abrazos.Ayuda a Princesa a encontrar su final feliz"
            colorButton="warning"
            textButton="Beagle"
          />
        </div>
        <footer>
          <strong></strong><Footer texto=" Explota nuestra galería de adopción de perros para encontrar a tu compañero perfecto.Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso.Cada imagen , captura su esencia única.Adopta un perrito y brindale una segunda oportunidad .Encuentra a tu amigo fiel" />
        </footer>
      </div>
    </>
  );
}

export default App;
