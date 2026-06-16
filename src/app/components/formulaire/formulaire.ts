import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css',
})
export class Formulaire {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder) {}

  signalementForm!: FormGroup;

  ngOnInit(): void {
      this.signalementForm = this.formBuilder.group({
        nom: ['', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(/^[a-zA-ZÀ-ÿ\s'-]+$/)
        ]],
        titre: ['', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
          Validators.pattern(/^[a-zA-ZÀ-ÿ0-9\s.,!?'-]+$/)
        ]],
        localisation: ['', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
          Validators.pattern(/^[a-zA-ZÀ-ÿ0-9\s,.-]+$/)
        ]],
        email: ['', [Validators.required, Validators.email]],
        categorie: ['', [Validators.required]],
        image: [''],
        description: ['', [
          Validators.required, 
          Validators.minLength(20),
          Validators.maxLength(255)
        ]],
    });
  }

  // Getters
  get nom(){ return this.signalementForm.get('nom') }
  get email(){ return this.signalementForm.get('email') }
  get titre(){ return this.signalementForm.get('titre') }

  get categorie(){ return this.signalementForm.get('categorie') }
  get localisation(){ return this.signalementForm.get('localisation') }
  get description(){ return this.signalementForm.get('description') }

  onSubmit(): void{
    if (this.signalementForm.invalid) {
      return;
    }

    // this.signalementForm.reset();

    // this.router.navigate(['/']);

    console.log(this.signalementForm.value);
  }

}
