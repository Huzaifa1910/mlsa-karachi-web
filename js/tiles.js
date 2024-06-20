document.addEventListener("DOMContentLoaded", () => {
    const tileContainer = document.getElementById('tileContainer');
    const imageFolder = 'images'; // Folder containing your images
    const imageCount = 10; // Number of images available
    const tileCount = 25; // Number of tiles to create

    const images = Array.from({ length: imageCount }, (_, i) => `${imageFolder}/image${i + 1}.png`);
    console.log(images);
    
    function getRandomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function getRandomSubset(arr, count) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function flipTile(tile) {
        tile.classList.toggle('flip');
    }

    const tiles = [];

    // Create the tiles
    for (let i = 0; i < tileCount; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.innerHTML = `
            <div class="inner">
                <div class="front"></div>
                <div class="back" style="background-image: url('${getRandomItem(images)}')"></div>
            </div>
        `;

        // Randomly assign dark theme color to some tiles
        if (Math.random() > 0.5) {
            tile.querySelector('.front').style.backgroundColor = 'var(--dark-theme-color)';
        }

        tileContainer.appendChild(tile);
        tiles.push(tile);
    }

    // Flip a random subset of tiles every 3 seconds
    setInterval(() => {
        const randomTiles = getRandomSubset(tiles, Math.floor(Math.random() * tileCount) + 1);
        randomTiles.forEach(flipTile);
    }, 3000);
});
