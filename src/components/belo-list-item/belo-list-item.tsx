import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'belo-list-item',
  styleUrl: 'belo-list-item.css',
  shadow: false,
})
export class BeloListItem {

  @Prop({reflect:true})
  label;

  @Prop({reflect:true})
  description;

  render() {
    return (
      <Host>
        <li>
          <belo-header size="2">{this.label}</belo-header>
          <belo-p>{this.description}</belo-p>
        </li>
      </Host>
    );
  }

}
