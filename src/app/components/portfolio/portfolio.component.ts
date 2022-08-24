import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';
import SwiperCore, { Navigation } from 'swiper';
import Swiper from 'swiper';
SwiperCore.use([Navigation]);
declare function mixitup(undefined: any, {}): any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  public portfolio: Array<any> = [];
  public arrays = new Array(8);
  public loading = true;

  constructor(private publicService: PublicService) {}

  ngOnInit(): void {
    this.init_gallery();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.init_resources();
    }, 1000);
  }

  init_gallery() {
    this.publicService.get_gallery().subscribe({
      next: (res) => {
        this.portfolio = res;
        this.loading = false;
      },
    });
  }

  init_resources() {
    new Swiper('.swiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    mixitup('.portfolio', {
      animation: {
        duration: 400,
        effectsIn: 'fade translateY(-100%)',
        effectsOut: 'fade translateY(-100%)',
      },
      selectors: {
        control: '[data-mixitup-control]',
      },
    });
  }
}
