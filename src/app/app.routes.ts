import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { GalleryComponent } from './pages/gallery/gallery';
import { QuotesComponent } from './pages/quotes/quotes';
import { CountdownComponent } from './pages/countdown/countdown';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'countdown', component: CountdownComponent },
  { path: '**', redirectTo: '' }  // fallback
];
