import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { HttpPersonneService } from "../services/http-personne.service";
import { Personne } from "../modele/Personne";

@Component({
  selector: "app-liste-personnes",
  templateUrl: "./liste-personnes.component.html",
  styleUrls: ["./liste-personnes.component.css"]
})
export class ListePersonnesComponent implements OnInit {
  private nouvellePersonne: Personne;
  private personnesExistantes: Personne[];

  constructor(private personneHttpService: HttpPersonneService) {}

  ngOnInit() {
    //nouvelle personne
    this.nouvellePersonne = new Personne();
    //personnes existantes
    this.personneHttpService.getPersonnes().subscribe(
      personnes => {
        this.personnesExistantes = personnes;
      },
      error => {
        console.log(error);
      }
    );
  }

  addPersonne(form: NgForm) {
    this.personneHttpService.addPersonne(this.nouvellePersonne).subscribe(personne => {
      this.personnesExistantes.push(personne);
    });
  }
}
