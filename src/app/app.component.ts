import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-work';
  onmousedown = function(event) {
    let ship = document.getElementById("ship");
    let shiftX = event.clientX - ship.getBoundingClientRect().left;
    let shiftY = event.clientY - ship.getBoundingClientRect().top;

    ship.style.position = 'absolute';
    document.body.append(ship);

    if (shiftX  < 0){
      ship.style.transform = "scaleX(-1)";
      ship.style.webkitTransform= "scaleX(-1)";
    }

    moveAt(event.pageX, event.pageY);

    // moves the ship at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      ship.style.left = pageX - shiftX + 'px';
      ship.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    // move the ship on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // drop the ship, remove unneeded handlers
    ship.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ship.onmouseup = null;
    };

  };

  ondragstart = function() {
    return false;
  };
}
