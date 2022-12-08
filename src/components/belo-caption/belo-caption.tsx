import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'belo-caption',
  styleUrl: 'belo-caption.css',
  shadow: false,
})
export class BeloCaption {

  @Prop({reflect: true})
  align: 'left' | 'right' | 'center'

  render() {
    return (
      <Host>
        <figcaption class={this.align ? `align-${this.align}` : undefined}>
          <slot></slot>
        </figcaption>
      </Host>
    );
  }

}
