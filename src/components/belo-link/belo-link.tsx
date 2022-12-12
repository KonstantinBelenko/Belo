import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'belo-link',
  styleUrl: 'belo-link.css',
  shadow: false,
})
export class BeloLink {

  @Prop({reflect:true})
  link;

  render() {
    return (
      <Host>
        <a href={this.link}><slot></slot></a>
      </Host>
    );
  }

}
