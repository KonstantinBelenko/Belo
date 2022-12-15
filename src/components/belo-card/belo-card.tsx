import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'belo-card',
  styleUrl: 'belo-card.css',
})
export class BeloCard {
  @Prop() image: string = "https://media.revistaad.es/photos/62c2be405044c23fff61d3ec/master/w_1600%2Cc_limit/The%2520Boot%2520-%2520New%2520Zealand.jpg";
  @Prop() alt: string = "Placeholder image";
  @Prop() title: string = "Placeholder title";
  @Prop() footer: string = "Footer content";
  @Prop() content: string = "Placeholder content";

  render() {
    return (
      <div style={{width: "342px", height: "400px"}} class="card-container" tabIndex={0}>
        <belo-box w='342px' h='305px'>
          <img src={this.image} alt={this.alt} class="card-image" />
        </belo-box>

        <belo-stack gap='10px'>
          
          <belo-stack gap='2px'>
            <h2 style={{marginBottom: "0px", fontWeight: "bold"}}>{this.title}</h2> 
            <span style={{margin: "0px", padding: "0px", color: "#717171ff"}}>{this.content}</span>
          </belo-stack>
          
          <h5 style={{margin: "0px", fontSize:"14px"}}>{this.footer}</h5>
        </belo-stack>

      </div>
    );
  }

}
