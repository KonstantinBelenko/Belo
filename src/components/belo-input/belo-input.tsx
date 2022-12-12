import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'belo-input',
  styleUrl: 'belo-input.css',
  shadow: false,
})
export class BeloInput {

@Prop({reflect : true})
hint: 'true' | 'false';

@Prop({reflect: true})
hinttext;

@Prop({reflect:true})
label;

@Prop({reflect:true})
placeholder;

@Prop({reflect:true})
disabled;

@Prop({reflect:true})
required;

  render() {
    return (
      <Host>
          <div class={this.disabled ? `full-input ${this.disabled}` : `full-input ${this.required}`}>
            <input type='text' name='name' placeholder={this.placeholder} class={this.disabled ? `${this.disabled}-text ${this.disabled}` : `${this.required} ${this.required}-focused`}></input>
            <label htmlfor='name' id='label' class={`${this.disabled}-tetx ${this.required}-text`}>{this.label}</label>
          </div>
          <p class={this.hint ? `hint-${this.hint} ${this.disabled}-text` :  `${this.disabled}-text`}>{this.hinttext}</p>
      </Host>
    );
  }

}

