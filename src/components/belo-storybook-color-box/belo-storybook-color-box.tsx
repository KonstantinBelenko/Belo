import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'belo-storybook-color-box',
  styleUrl: 'belo-storybook-color-box.css',
})
export class BeloStorybookColorBox {
  @Prop() targetColor: string = "";
  @Prop() gradientColor: string = "";
  @Prop() color: string = "#FFFFFF";
  @Prop() boxTitle: string = "AA 3.51";
  @Prop() subtitle: string = "default";
  @Prop() border: boolean = false;
  @Prop() borderColor: string = "#EBEBEB";
  @Prop() headingColor: string = this.targetColor;

  render() {
    return (
      <belo-box>
        {this.gradientColor}
        <belo-box border-color={this.border && this.borderColor } border-width={this.border ? "2px" : "0px"} bg={this.gradientColor ? this.gradientColor : this.targetColor} w="12vw" h="70px" rounded="6px" display="flex" justify-content="center" align-items="center">
          <belo-text color={this.color} size="20px">{this.boxTitle}</belo-text>
        </belo-box>
    
      <belo-box mt="6px">
        <belo-stack gap="6px">
          <belo-text weight="800">{this.subtitle}</belo-text>
          <belo-text color="#B0B0B0" size="12px">{this.headingColor}</belo-text>
        </belo-stack>
      </belo-box>
    </belo-box>
    );
  }

}
