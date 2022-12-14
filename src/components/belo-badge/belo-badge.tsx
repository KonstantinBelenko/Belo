import { Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'belo-badge',
  styleUrl: 'belo-badge.css',
  shadow: false,
})
export class BeloBadge {

  @Prop({reflect:true})
  counter;


  render() {
    return (
      <Host>
        <div class="badge">
          {this.counter > 99 ?
          <div class="indicator">
            <p>99+</p>
          </div>:
          <div class="indicator">
            <p>{this.counter}</p>
          </div>}
        </div>
      </Host>
    );
  }

}