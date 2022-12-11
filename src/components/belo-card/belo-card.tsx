import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'belo-card',
  styleUrl: 'belo-card.css',
  shadow: true,
})
export class BeloCard {

  @Prop({reflect:true})
  image;

  @Prop({reflect:true})
  location;

  @Prop({reflect:true})
  details;

  @Prop({reflect:true})
  score;

  @Prop({reflect:true})
  price_per_night;

  @Prop({reflect:true})
  total_price;

  render() {
    return (
      <Host>
        <div class="container">
          <img src={this.image} alt="" />
          <div class="inline">
            <p class="location">{this.location}</p>
            <div class="inline-inner">
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.53249 4.08313L7.45261 0.628935C7.60504 0.354727 7.99941 0.354727 8.15184 0.628934L10.0709 4.08113C10.1336 4.19394 10.2469 4.26956 10.3751 4.28421L14.6053 4.76737C14.9497 4.80671 15.0844 5.23572 14.8243 5.46491L11.5106 8.38471C11.413 8.47064 11.3634 8.59859 11.3773 8.72781L11.8617 13.2093C11.897 13.5361 11.5449 13.7637 11.2614 13.5972L7.99197 11.6767C7.87382 11.6073 7.72838 11.6032 7.60651 11.6658L3.81778 13.6132C3.51733 13.7676 3.17257 13.5031 3.24395 13.1729L4.20262 8.73824C4.23174 8.60354 4.18947 8.46334 4.09075 8.36719L1.09697 5.45105C0.856566 5.21688 0.994019 4.80862 1.32709 4.76752L5.23185 4.28577C5.35868 4.27012 5.4704 4.19482 5.53249 4.08313Z" fill="#222222"/>
            </svg>           
            <span>{this.score}</span>
            </div>
          </div>
          <p class="listing">{this.details}</p>
          <div class="inline-bottom">
            <p>{this.price_per_night} night</p>
            <p>.</p>
            <div class="border"><p class="total-price">{this.total_price} total</p></div>
          </div>
        </div>
      </Host>
    );
  }

}
