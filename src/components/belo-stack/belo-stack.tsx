import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'belo-stack',
  styleUrl: 'belo-stack.css',
  shadow: true,
})
export class BeloStack {
  @Prop() orientation: 'row' | 'column' = 'column';

  render() {
    return (
      <div class='stack' style={{ flexDirection: this.orientation }}>
        <slot></slot>
      </div>
    );
  }

}
