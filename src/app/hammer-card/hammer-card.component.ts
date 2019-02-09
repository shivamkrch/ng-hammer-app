import { Component } from "@angular/core";

import * as kf from "./keyframes";
import { trigger, transition, animate, keyframes } from "@angular/animations";

@Component({
  selector: "hammer-card",
  templateUrl: "./hammer-card.component.html",
  styleUrls: ["./hammer-card.component.css"],
  animations: [
    trigger("cardAnimator", [
      transition("* => wobble", animate(1000, keyframes(kf.wobble))),
      transition("* => swing", animate(1000, keyframes(kf.swing))),
      transition("* => jello", animate(1000, keyframes(kf.jello))),
      transition(
        "* => zoomOutRight",
        animate(1000, keyframes(kf.zoomOutRight))
      ),
      transition(
        "* => slideOutLeft",
        animate(1000, keyframes(kf.slideOutLeft))
      ),
      transition(
        "* => rotateOutUpRight",
        animate(1000, keyframes(kf.rotateOutUpRight))
      ),
      transition("* => flipOutY", animate(1000, keyframes(kf.flipOutY)))
    ])
  ]
})
export class HammerCardComponent {
  animationState: string;

  startAnimation(state) {
    console.log(state);
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = "";
  }
}
