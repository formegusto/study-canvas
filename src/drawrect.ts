var canvas;
var ctx: CanvasRenderingContext2D | null;
window.onload = function () {
  canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (canvas == null || canvas.getContext == null) return;
  ctx = canvas.getContext("2d");
  drawrect();
};

function drawrect() {
  ctx!.strokeRect(10, 10, 100, 100);
  ctx!.fillRect(120, 10, 200, 100);
  ctx!.clearRect(170, 40, 80, 40);
}
