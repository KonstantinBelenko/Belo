import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'belo-flex',
  styleUrl: 'belo-flex.css',
  shadow: true,
})
export class BeloFlex {
  @Prop() direction: 'row' | 'column' = 'row';
  @Prop() wrap: 'wrap' | 'nowrap' = 'nowrap';
  @Prop() alignItems: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' = 'stretch';
  @Prop() justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' = 'flex-start';
  @Prop() alignContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' = 'stretch';
  @Prop() gap: string = "0";

  render() {
    return (
      <belo-box 
        display='flex'
        fd={this.direction}
        fw={this.wrap}
        alignItems={this.alignItems}
        justifyContent={this.justifyContent}
        alignContent={this.alignContent}
        gap={this.gap}
      >
        <slot></slot>
      </belo-box>
    );
  }

}
