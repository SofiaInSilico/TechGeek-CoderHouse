import './App.css';
import 'core-js/actual'; 

function App() {
  let imagen = 'ipad.jpg';
  let titulo = "Ipad Air";
  let slogan = "Potencia en todos sus colores.";
  let description = "Con los superpoderes del chip M1 de Apple. Cámara frontal ultra gran angular de 12 MP con Encuadre Centrado. Funciona con el Apple Pencil y el Magic Keyboard. Cinco colores increíbles.";



  return (
    <div className="container">
      <div className="row">
        <div className='col-md-4 offset-md-2'>
          <img src={imagen} alt={titulo} className= "img-fluid"/>
          </div>

          <div className="col-md-4">
          <h1>{titulo}</h1>
          <h5>{slogan}</h5>
          <p>{description}</p>
          </div>
      </div>
    </div>
  );
}

// function App2(){
//   console.log(Array.from(new Set(1, 2, 3, 3, 2)));

//   return(
//     <div>

//     </div>
//   );
// }

export default App;
