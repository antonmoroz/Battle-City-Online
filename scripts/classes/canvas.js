define(function () {
    function Canvas(lowCanvasId, topCanvasId) {
        this.topCanvas = document.getElementById(topCanvasId);
        this.lowCanvas = document.getElementById(lowCanvasId);

        this.topCanvasContext = this.topCanvas.getContext("2d");
        this.lowCanvasContext = this.lowCanvas.getContext("2d");
    }

    return Canvas;
});