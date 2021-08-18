var canvas;
var ctx: CanvasRenderingContext2D | null;
window.onload = function () {
  canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (canvas == null || canvas.getContext == null) return;
  ctx = canvas.getContext("2d");
  drawline();
};

function drawline() {
  ctx!.beginPath();
  /* moveTo ~ lineTo */
  ctx!.moveTo(20, 100);
  ctx!.lineTo(300, 150);
  ctx!.stroke();
}

/* 보통 아래와 같이 함수로 정의해서 사용하면 편하다. */
function customDrawLine(sx: number, sy: number, ex: number, ey: number) {
  ctx!.beginPath();
  ctx!.moveTo(sx, sy);
  ctx!.lineTo(ex, ey);
  ctx!.stroke();
}
