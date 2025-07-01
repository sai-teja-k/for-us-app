import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private photosPath: string[] = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.jpg',
    'assets/images/5.jpg',
    'assets/images/6.jpg',
    'assets/images/7.jpg',
    'assets/images/8.jpg',
    'assets/images/9.jpg',
    'assets/images/10.jpg',
    'assets/images/11.jpg',
    'assets/images/12.jpg'
  ]

  getPhotos(): string[] {
    return this.photosPath;
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, map } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class PhotoService {
//   private imagesUrl = 'assets/images.json';

//   constructor(private http: HttpClient) {}

//   getImages(): Observable<string[]> {
//     return this.http.get<string[]>(this.imagesUrl).pipe(
//       map(files => files.map(name => `assets/images/${name}`))
//     );
//   }
// }