import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'belo-button-primary',
  styleUrl: 'belo-button-primary.css',
})
export class BeloButtonPrimary {

  @Prop() disabled: boolean = false;
  @Prop() pill: boolean = false;

  render() {

    return (
      <div>
        {
        this.disabled ?
        (
          <button disabled class={(this.pill ? "pill-primary" : "btn-primary")}><slot /></button>
        ) 
        : 
        (
          <button class={(this.pill ? "pill-primary" : "btn-primary")}><slot /></button>
        )
        }
      </div>        
    );
  }
}
