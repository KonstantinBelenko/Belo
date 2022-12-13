import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'belo-text',
  styleUrl: 'belo-text.css',
  shadow: true,
})
export class BeloText {
  @Prop() size: string = "16px";
  @Prop() color: string = "black";
  @Prop() weight: string = "normal";

  render() {
    return (
      <span style={{
        fontSize: this.size,
        color: this.color,
        fontWeight: this.weight
      }} class="text">
        <slot></slot>
      </span>
    );
  }

}
