import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'belo-input',
  styleUrl: 'belo-input.css',
  shadow: false,
})
export class BeloInput {

@Prop({reflect : true})
hint: boolean;

@Prop({reflect: true})
hinttext;

@Prop({reflect:true})
label;

@Prop({reflect:true})
placeholder;

@Prop({reflect:true})
disabled: boolean;

@Prop({reflect:true})
required: boolean;

  render() {
    return (
      <Host>
          <div class={this.disabled ? `full-input disabled` : `full-input ${this.required ? `required` : ``}`}>
            <input type='text' name='name' placeholder={this.placeholder} class={this.disabled ? `disabled-text disabled` : `${this.required ? `required` : ``} ${this.required ? `required` : ``}-focused`}></input>
            <label htmlfor='name' id='label' class={this.disabled ? `disabled-text` : ``}>{this.label}</label>
          </div>
          <p class={this.hint ? `hint-true ${this.disabled}-text` :  `${this.disabled}-text`}>{this.hint ? this.hinttext : ``}</p>
      </Host>
    );
  }

}

