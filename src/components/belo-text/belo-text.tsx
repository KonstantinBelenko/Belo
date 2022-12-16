import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'belo-text',
  styleUrl: 'belo-text.css',
})
export class BeloText {
  @Prop() size: string = "16px";
  @Prop() color: string = "black";
  @Prop() weight: string = "normal";
  @Prop() align: string = "left";

  render() {
    return (
      <span style={{
        fontSize: this.size,
        color: this.color,
        fontWeight: this.weight,
        textAlign: this.align,
      }}>
        <slot></slot>
      </span>
    );
  }

}
