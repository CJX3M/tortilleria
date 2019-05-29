import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Tortillería!!!!";

  constructor(private router: Router) {}

  mover(pagina: string): void {
    this.router.navigate([pagina]);
  }
}
