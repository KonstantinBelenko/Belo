import { Component, h, Prop, State } from "@stencil/core";


@Component({
  tag: "belo-text-area",
  styleUrl: 'belo-text-area.css',
  shadow: false
})
export class BeloTextArea{
  @State() count = 0;

  @Prop({reflect: true})
  maxlength;

  @Prop({reflect:true})
  placeholder;

  @Prop({reflect:true})
  disabled: boolean;

  onTextareaInput(event: any) {
    // Update the character count
    this.count = event.target.value.length;
    console.log(this.count)

    // Check if the character count has reached the limit
    if (this.count === 500) {
      // Do something here, such as displaying a message or disabling the textarea
    }
  }


  render() {
    return (
      <div>
        <textarea maxlength={this.maxlength} placeholder={this.placeholder} class={this.disabled ? `disabled-text disabled` : ``} onInput={event => this.onTextareaInput(event)}>
        </textarea>
        <p>{this.count}/{this.maxlength}</p>
      </div>
    );
  }

  
}
