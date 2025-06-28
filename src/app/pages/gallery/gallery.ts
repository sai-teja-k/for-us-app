import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { PhotoService } from '../../services/photoService';
import { ImageModalComponent } from '../../image-modal/image-modal';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ImageModalComponent],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})

export class GalleryComponent {
  images: string[] = [];

  selectedImage: string | null = null;

  constructor(private photoService:PhotoService) {}

  // ngOnInit(): void{
  //   this.images = this.photoService.getPhotos();
  // }

  ngOnInit(): void {
    this.images = this.photoService.getPhotos();
    const stored = localStorage.getItem('photoGalleryImages');
    if (stored) {
      this.images = JSON.parse(stored);
    }
  }

  // addImage(): void{
  //   if (this.newImage.trim()){
  //     this.images.push(this.newImage.trim());
  //     this.newImage = '';
  //   }
  // }

  openPreview(image: string): void {
    this.selectedImage = image;
  }

  closePreview(): void {
    this.selectedImage = null;
  }

  handleFileInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        //this.images.push(e.target.result);
        const imageBase64 = e.target.result;
        this.images.push(imageBase64);
        localStorage.setItem('photoGalleryImages', JSON.stringify(this.images)); // save here
      };

      reader.readAsDataURL(file);
    }
  }

  onFileSelected(event: Event): void {
    event.preventDefault(); // stop form reload
  }

  clearImages(): void {
    this.images = [];
    localStorage.removeItem('photoGalleryImages');
  }
}
