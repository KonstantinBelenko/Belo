import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'belo-stack',
  styleUrl: 'belo-stack.css',
  shadow: true,
})
export class BeloStack {
  @Prop() direction: 'row' | 'column' = 'column';
  @Prop() gap: string = "0";

  render() {
    return (
      <belo-box display='flex' fd={this.direction} gap={this.gap}>
        <slot></slot>
      </belo-box>        
    );
  }

}
