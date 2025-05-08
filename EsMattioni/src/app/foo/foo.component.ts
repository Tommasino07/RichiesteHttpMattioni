import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Foo } from './foo.model';

@Component({
  selector: 'app-foo',
  imports: [CommonModule],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.css'
})
export class FooComponent {
  data!: Object;
  loading!: boolean;
  o! :Observable<Object>;
  o2! :Observable<Object>;
  fooData! : Foo[];
  oFoo! : Observable<Foo[]>;




constructor(public http: HttpClient) {}  

  makeRequest(): void {
    //Notifichiamo che stiamo attendendo dei dati
    this.loading = true; 
    //Facciamo una get e otteniamo l'oggetto Observable che attende la risposta
    this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    //Attacchiamo all'Observable o un metodo "observer" che verrà lanciato quando arriva la 
    //risposta
    this.o.subscribe(this.getData);
  }
  //Il metodo che notifica la risposta (nota che usiamo una "arrow function")
  getData = (d : Object) =>
  {
    this.data = d; //Notifico l’oggetto ricevuto dal server
    this.loading = false;  // Notifico che ho ricevuto i dati
  }

  makePost(): void {
    this.loading = true;
    let datidainviare = {
      body: 'bar',
      title: 'foo',
      userId: 1
    };
    this.o2 = this.http.post('https://jsonplaceholder.typicode.com/posts', datidainviare)
    this.o2.subscribe(this.getData2)
  
      
  }
  getData2 = (d : Object) =>
    {
      this.data = d; //Notifico l’oggetto ricevuto dal server
      this.loading = false;  // Notifico che ho ricevuto i dati
    }

    makeTypedRequest() : void
    {
      this.oFoo = this.http.get<Foo[]>('https://jsonplaceholder.typicode.com/posts');
      this.oFoo.subscribe(data => {this.fooData = data});
    }


}
