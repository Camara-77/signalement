import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Signalement, SignalementService } from '../../services/signalement.service';

@Component({
  selector: 'app-formulaire',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css',
})
export class Formulaire {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private signalementService: SignalementService,
  ) {}

  // permet de lier la logique typescript au formulaire html
  signalementForm!: FormGroup;

  ngOnInit(): void {
      // creation des champs du formulaire et la validation des inputs
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

  // Getters permet d'eviter un code plus verbeux dans le template html sur l'affichage des erreurs
  get nom(){ return this.signalementForm.get('nom') }
  get email(){ return this.signalementForm.get('email') }
  get titre(){ return this.signalementForm.get('titre') }

  get categorie(){ return this.signalementForm.get('categorie') }
  get localisation(){ return this.signalementForm.get('localisation') }
  get description(){ return this.signalementForm.get('description') }

  onSubmit(): void{
    //verifier si le formulaire est bien remplie
    if (this.signalementForm.invalid) {
      return;
    }

    // ahouter un nouveau signal dans le tableau signalement
    const nouveauSignal: Signalement = {
      id: Date.now(),
      ...this.signalementForm.value,
      votes: 0,
      date: new Date().toDateString()
    };

    this.signalementService.addSignalement(nouveauSignal);

    console.log(this.signalementForm.value);

    // vider le formulaire
    this.signalementForm.reset();

    // rediriger vers la page liste signalement
    this.router.navigate(['/']);

  }

}
