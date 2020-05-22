import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nexu';
  marcas = [{'nombre': 'Test'}]
  modelos = []
  marcaSeleccionada = ''

  agregarMarca(nombre) {
    this.marcas.push({nombre});
  }

  agregarModelo(modelo, precio) {
    this.modelos.push({modelo, precio, marcaSeleccionada: this.marcaSeleccionada})
  }

  cambiarMarca(value) {
    this.marcaSeleccionada = value;
  }

  eliminarModelo(index){
    this.modelos.splice(index, 1);
  }
  
}
