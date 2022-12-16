import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'belo-avatar',
  styleUrl: 'belo-avatar.css',
})
export class BeloAvatar {
  @Prop() image: string = "https://media.licdn.com/dms/image/C4D03AQGIyU5mos4kHg/profile-displayphoto-shrink_800_800/0/1663105376656?e=1676505600&v=beta&t=oJJL8nvIcYA-f6dz7UVoNqb89VaSlUokRUqnyecIujQ";
  @Prop() alt: string = "Placeholder image";
  @Prop() size: "small" | "large" = "small";
  @Prop() badge: "online" | "offline" = "offline";
  @Prop() badgeCounter: number = 3;

  render() {
    return (
      <div style={{width: this.size === "large" ? "64px" : "32px", height: this.size === "large" ? "64px" : "32px"}}>
        
        {/* This div goes over the avatar to allow for a badge */}
        <div style={{position: "absolute", display: "flex", justifyContent: "flex-end", width: this.size === "large" ? "64px" : "32px", height: this.size === "large" ? "64px" : "32px"}}>
          
          {
            // If the badge prop is true, render the badge
            this.badge === "online" && 
            <div style={{display: "flex",  alignItems: "center", justifyContent: "center", backgroundColor: "white", borderRadius: "100%", width: this.size === "large" ? "22px" : "22px", height: this.size === "large" ? "22px" : "22px", marginTop: this.size === "large" ? "-5%" : "-20%", marginRight: this.size === "large" ? "-5%" : "-20%"}}>
              <belo-badge counter={this.badgeCounter !== 0 && this.badgeCounter} />
            </div>
          }

        </div>
        <img style={{borderRadius: "100%", width: "100%"}} src={this.image} />
      </div>
    );
  }

}
