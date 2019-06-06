import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title:string = "Tortillería!!!!";

  isCollapsed:boolean = true;

  constructor(private router: Router) {}

  mover(pagina: string): void {
    this.isCollapsed = true;
    this.router.navigate([pagina]);
  }

  isActive(pagina: string) : boolean {
    return window.location.pathname.indexOf(pagina) !== -1;
  }
}
