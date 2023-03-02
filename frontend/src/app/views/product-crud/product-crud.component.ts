import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderService } from "src/app/components/template/header/header.service";

@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.css"],
})
export class ProductCrudComponent implements OnInit {
  constructor(private route: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Products Register",
      icon: "store",
      routeUrl: "/products",
    };
  }

  ngOnInit(): void {}

  navigateToProductCreate(): void {
    this.route.navigate(["/products/create"]);
  }
}
