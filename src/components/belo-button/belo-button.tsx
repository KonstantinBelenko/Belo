import { Component, h } from '@stencil/core';

@Component({
  tag: 'belo-button',
  styleUrl: 'belo-button.css',
  shadow: true,
})
export class BeloButton {

  render() {
    return (
      <button class="btn"><slot /></button>
    );
  }

}
