import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'belo-p',
  styleUrl: 'belo-p.css',
  shadow: false,
})
export class BeloP {

  @Prop({reflect : true})
  align: 'left' | 'right' | 'center'

  render() {
    return (
      <Host>
        <p class={this.align ? `align-${this.align}` : undefined}>
          <slot></slot>
        </p>
      </Host>
    );
  }

}
