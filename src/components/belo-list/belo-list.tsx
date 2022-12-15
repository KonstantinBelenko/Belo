import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'belo-list',
  styleUrl: 'belo-list.css',
  shadow: true,
})
export class BeloList {

  render() {
    return (
      <Host>
        <ol>
          <belo-list-item label="Item Label" description="nfrjenfierjofn"></belo-list-item>
          <belo-list-item label="Item Label" description="nfrjenfierjofn"></belo-list-item>
        </ol>
      </Host>
    );
  }

}
