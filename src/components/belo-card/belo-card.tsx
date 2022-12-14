import { Component, Host, h, Prop } from '@stencil/core';



@Component({
  tag: 'belo-card',
  styleUrl: 'belo-card.css',
  shadow: false,
})
export class BeloCard {

  @Prop({reflect:true})
  image;

  @Prop({reflect : true})
  header;

  @Prop({reflect:true})
  content;

  @Prop({reflect:true})
  footer;


  render() {
    return (
      <Host>
        <div tabIndex={0}>
          <belo-box w='342px' h='305px'>
            <img src={this.image} alt="" />
          </belo-box>
          <belo-stack direction='column' gap='10px'>
            <belo-stack direction='column' gap='2px'>
              <belo-header size='4' align='left'>{this.header}</belo-header>
              <belo-p>{this.content}{}</belo-p>
              </belo-stack>
            <belo-header size='5'>{this.footer}</belo-header>
          </belo-stack>
        </div>
      </Host>
    );
  }

}
