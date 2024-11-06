window.onload = () => {
    let canvas = document.getElementById('board');
    let context = canvas.getContext('2d');
    let hoveredColorTextBox = document.getElementById('hoveredColor');
    let clickedColorTextBox = document.getElementById('clickedColor');

    let image = new Image();
    image.src = 'assets/stock.jpg';
    image.onload = () => {
        console.log('loaded');
        canvas.width = image.width;
        canvas.height = image.height;        
        
        context.drawImage(image, 0, 0);
    }

    canvas.addEventListener('mousemove', (e) => {
        let x = e.offsetX;
        let y = e.offsetY;

        let pixel = context.getImageData(x, y, 1, 1);
        console.log(pixel);

        let r = pixel.data[0];
        let g = pixel.data[1];
        let b = pixel.data[2];

        let color = `rgb(${r},${g},${b})`;
        hoveredColorTextBox.style.backgroundColor = color;
    })

    canvas.addEventListener('click', (e) => {
        let x = e.offsetX;
        let y = e.offsetY;

        let pixel = context.getImageData(x, y, 1, 1);
        console.log(pixel);

        let r = pixel.data[0];
        let g = pixel.data[1];
        let b = pixel.data[2];

        let color = `rgb(${r},${g},${b})`;
        clickedColorTextBox.style.backgroundColor = color;
    })
}