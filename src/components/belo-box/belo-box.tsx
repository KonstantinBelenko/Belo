import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'belo-box',
  styleUrl: 'belo-box.css',
})
export class BeloBox {

  @Prop() display: string = "block";
  @Prop() fd: string;
  @Prop() fw: string = "nowrap"
  @Prop() alignItems: string = "";
  @Prop() justifyContent: string = "";
  @Prop() alignContent: string = "";
  @Prop() gap: string = "0";
  @Prop() w: string = "auto";
  @Prop() h: string = "auto";
  @Prop() m: string = "0";
  @Prop() mt: string = "0";
  @Prop() ml: string = "0";
  @Prop() mr: string = "0";
  @Prop() mb: string = "0";
  @Prop() p: string = "0";
  @Prop() pt: string = "0";
  @Prop() pb: string = "0";
  @Prop() pl: string = "0";
  @Prop() pr: string = "0";
  @Prop() bg: string = "#FFFFFF";
  @Prop() shadow: string = "";
  @Prop() rounded: string = "0";
  @Prop() borderStyle: string = "solid";
  @Prop() borderColor: string = "";
  @Prop() borderWidth: string = "0";
  @Prop() color: string = "";
  @Prop() maxW: string = "";
  @Prop() maxH: string = "";
  @Prop() minW: string = "";
  @Prop() minH: string = "";

  render() {
    return (
      <div style={{
        display: this.display,
        flexWrap: this.fw,
        flexDirection: this.fd,
        gap: this.gap,
        width: this.w,
        height: this.h,
        margin: this.m,
        marginTop: this.mt,
        marginLeft: this.ml,
        marginRight: this.mr,
        marginBottom: this.mb,
        paddingTop: this.pt,
        paddingBottom: this.pb,
        paddingLeft: this.pl,
        paddingRight: this.pr,
        padding: this.p,
        alignItems: this.alignItems,
        justifyContent: this.justifyContent,
        alignContent: this.alignContent,
        backgroundColor: this.bg,
        boxShadow: this.shadow,
        borderRadius: this.rounded,
        borderStyle: this.borderStyle,
        borderColor: this.borderColor,
        borderWidth: this.borderWidth,
        color: this.color,
        maxWidth: this.maxW,
        maxHeight: this.maxH,
        minWidth: this.minW,
        minHeight: this.minH,
      }}>
        <slot />
      </div>
    );
  }

}
