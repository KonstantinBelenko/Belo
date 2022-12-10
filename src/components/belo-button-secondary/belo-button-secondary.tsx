import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'belo-button-secondary',
  styleUrl: 'belo-button-secondary.css',
})
export class BeloButtonSecondary {

  @Prop() disabled: boolean = false;
  @Prop() pill: boolean = false;

  render() {

    return (
      <div>
        {
        this.disabled ?
        (
          <button disabled class={(this.pill ? "pill-secondary" : "btn-secondary")}><slot /></button>
        ) 
        : 
        (
          <button class={(this.pill ? "pill-secondary" : "btn-secondary")}><slot /></button>
        )
        }
      </div>        
    );
  }
}
