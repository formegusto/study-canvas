var canvas;
var ctx: CanvasRenderingContext2D | null;
window.onload = function () {
  canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (canvas == null || canvas.getContext == null) return;
  ctx = canvas.getContext("2d");
  drawPathRect();
};

function drawPathRect() {
  ctx!.beginPath();
  ctx!.rect(10, 10, 200, 100);
  ctx!.stroke();
}
