import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent {
  formData = {
    username: '',
    password: '',
  };

  constructor(private http: HttpClient) {}

  register() {
    this.http.post('http://localhost:3000/auth/register', this.formData)
      .subscribe(
        (response: any) => {
          console.log(response);
          // Aquí puedes agregar el manejo de la respuesta del servidor
        },
        (error: any) => {
          console.error(error);
          // Aquí puedes agregar el manejo de errores
        }
      );
  }
}
