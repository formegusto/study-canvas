var canvas;
var ctx: CanvasRenderingContext2D | null;
window.onload = function () {
  canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (canvas == null || canvas.getContext == null) return;
  ctx = canvas.getContext("2d");
  drawpoly();
};

function drawpoly() {
  ctx!.beginPath();

  ctx!.moveTo(150, 10);
  ctx!.lineTo(250, 150);
  ctx!.lineTo(50, 150);
  ctx!.stroke();
}
