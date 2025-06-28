import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  imports:[CommonModule],
  templateUrl: './image-modal.html',
  styleUrls: ['./image-modal.css']
})
export class ImageModalComponent {
  @Input() imageUrl: string | null = null;
  @Output() close = new EventEmitter<void>();

  cursorX: number = 0;
  cursorY: number = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.cursorX = event.clientX + 15; // offset so it doesn't overlap cursor
    this.cursorY = event.clientY + 20;
  }

  onClose(): void {
    this.close.emit();
  }
}