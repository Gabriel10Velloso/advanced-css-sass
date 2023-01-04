import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';

// import * as favicon from 'favicon';

@Injectable({
  providedIn: 'root'
})
export class FaviconsService {

  constructor (@Inject(DOCUMENT) private document: Document) {}

  public updateFavicon(url: string) {
    console.log(url)
    const link:any = this.document.querySelector('#icon') as HTMLElement | null;
    link.href = url;
  }
}

// https://bobbyhadz.com/blog/typescript-queryselector
// https://itnext.io/using-renderer2-in-angular-8f80da6756f8


