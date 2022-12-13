import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'belo-button',
  styleUrl: 'belo-button.css',
  shadow: true,
})
export class BeloButton {
  @Prop() variant: string = "primary";
  @Prop() disabled: boolean = false;
  @Prop() pill: boolean = false;

  render() {

    return (
      <div>
          <button disabled={this.disabled} class={(this.pill ? `pill-${this.variant}` : `btn-${this.variant}`)}><slot /></button>
      </div>        
    );
  }
}
