define(function () {
    function Canvas(lowCanvasId, topCanvasId) {
        this.topCanvas = document.getElementById(topCanvasId);
        this.lowCanvas = document.getElementById(lowCanvasId);

        this.topCanvasContext = this.topCanvas.getContext("2d");
        this.lowCanvasContext = this.lowCanvas.getContext("2d");

        this.spriteImg = document.getElementById("sprite");

        this.scale = 5;

        this.draw = function (sx, sy, sWidth, sHeight, dx, dy) {
            this.topCanvasContext.drawImage(this.spriteImg, sx, sy, sWidth, sHeight, dx, dy, sWidth * this.scale, sHeight * this.scale);
        };

        this.clear = function () {
            this.topCanvasContext.clearRect(0, 0, this.topCanvas.width, this.topCanvas.height);
        };
    }

    return Canvas;
});