import Grid from "./scripts/grid.js";
import Unit from "./scripts/unit.js";
import GridView from "./scripts/grid_view.js"

document.addEventListener("DOMContentLoaded", () =>{
  console.log("working :)")
  window.Grid = Grid;
  window.Unit = Unit;
  window.GridView = GridView;
  const grid = new Grid()
  const gridView = new GridView(grid);
  gridView.start();

  /// Testing Code;
  // let canvas_array = document.getElementsByClassName("game-board");
  // let canvas = canvas_array[0];
  // let ctx = canvas.getContext("2d");
  // ctx.lineWidth = 2;
  // ctx.strokeStyle = "red";
  // ctx.beginPath();
  // ctx.moveTo(200,200);
  // ctx.lineTo(240,240);
  // ctx.stroke();

})