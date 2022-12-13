import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'belo-avatar',
  styleUrl: 'belo-avatar.css',
  shadow: true,
})
export class BeloAvatar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
