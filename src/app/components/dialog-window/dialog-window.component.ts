import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.sass'],
})
export class DialogWindowComponent {
  public toCart: string;
  public continueShopping: string;

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<DialogWindowComponent>
  ) {
    this.toCart = 'Go to cart';
    this.continueShopping = 'Continue to shop';
  }
  goToCart() {
    this.router.navigate(['cart']);
    this.dialogRef.close();
  }

  showProductDialog = true;
}
