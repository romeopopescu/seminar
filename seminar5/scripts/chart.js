window.onload = function () {
    let canvas = document.getElementById('chartCanvas');
    let context = canvas.getContext('2d');

    let width = canvas.width;
    let height = canvas.height;

    let yIncrement = 100;
    let xIncrement = 100;

    let data = [];

    function generateRandomNumber() {
        return parseInt(Math.random() * height);
    }

    for (let i = 0; i <= width / 20; i++) {
        data[i] = generateRandomNumber();
    }

    function drawHorizontalGridLines() {
        context.strokeStyle = 'white';
        context.lineWidth = 1;
        
        for (let i = yIncrement; i < height; i += yIncrement) {
            context.beginPath();
            context.moveTo(0, i);
            context.lineTo(width, i);
            context.stroke();
        }
        
    }

    function drawVerticalGridLines() {
        context.strokeStyle = 'white';
        context.lineWidth = 1;

        for (let i = xIncrement; i < width; i += xIncrement) {
            context.beginPath();
            context.moveTo(i, 0);
            context.lineTo(i, height);
            context.stroke();
        }
    }
    console.log(data);

    function drawLineChart() {
        context.lineWidth = 5;
        context.strokeStyle = 'black';
        context.beginPath();
        context.moveTo(0, height - data[0]);
        for (let i = 1; i < data.length; i++) {
            context.lineTo(i * 20, height - data[i]);
        }
        context.stroke();
    }

    const clearCanvas = () => {
        context.clearRect(0, 0, width, height);
    }

    const drawYAxisValues = () => {

        for (let i = yIncrement; i <= height; i += yIncrement) {
            context.fillText(height - i, 5, i - 5);
        }
    }

    const drawXAxisValues = () => {
        for (let i = xIncrement; i <= width; i += xIncrement) {
            context.fillText(i, i, height - 5);
        }
    }

    let x = 0;
    let y = 0;
    let xDirection = 1;
    let yDirection = 1;
    function drawPongBall() {
        context.fillStyle = 'green';
        context.fillRect(x, y, 20, 20);
        //hit the bottom margin

        if (y + 20 >= height) {
            yDirection *= -1;
        }
        // if (x + 20)
    }

    function drawChart() {
        //clear canvas
        clearCanvas();
        //draw horizontal grid lines
        drawHorizontalGridLines();
        //draw vertical grid lines
        drawVerticalGridLines();
        //type X axis values
        drawXAxisValues();

        //type Y axis values
        drawYAxisValues();
        //draw the actual chart
        //drawLineChart();
        drawPongBall();

    }

     setInterval(() => {
         let newValue = generateRandomNumber();
         data.push(newValue);
         data.shift();
        drawChart();
     }, 10)
    drawChart();
}
