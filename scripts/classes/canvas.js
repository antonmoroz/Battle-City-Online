define(function () {
    function Canvas(lowCanvasId, topCanvasId) {
        this.topCanvas = document.getElementById(topCanvasId);
        this.lowCanvas = document.getElementById(lowCanvasId);

        this.topCanvasContext = this.topCanvas.getContext("2d");
        this.lowCanvasContext = this.lowCanvas.getContext("2d");

        this.spriteImg = document.getElementById("sprite");

        this.scale = 5;
    }

    Canvas.prototype.init = function () {
        this.topCanvas.setAttribute("width", window.innerWidth);
        this.topCanvas.setAttribute("height", window.innerHeight);

        this.lowCanvas.setAttribute("width", window.innerWidth);
        this.lowCanvas.setAttribute("height", window.innerHeight);
    };

    Canvas.prototype.drawOnTopCanvas = function (sx, sy, sWidth, sHeight, dx, dy) {
        this._draw(this.topCanvasContext, sx, sy, sWidth, sHeight, dx, dy);
    };

    Canvas.prototype.drawOnLowCanvas = function (sx, sy, sWidth, sHeight, dx, dy) {
        this._draw(this.lowCanvasContext, sx, sy, sWidth, sHeight, dx, dy);
    };

    Canvas.prototype._draw = function (ctx, sx, sy, sWidth, sHeight, dx, dy) {
        ctx.drawImage(this.spriteImg, sx, sy, sWidth, sHeight, dx, dy, sWidth * this.scale, sHeight * this.scale);
    };

    Canvas.prototype.clearTopCanvas = function () {
        this._clearCanvas(this.topCanvas, this.topCanvasContext);
    };

    Canvas.prototype.clearLowCanvas = function () {
        this._clearCanvas(this.lowCanvas, this.lowCanvasContext);
    };

    Canvas.prototype._clearCanvas = function (canvas, ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    return Canvas;
});