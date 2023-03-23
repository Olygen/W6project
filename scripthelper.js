class Egg {
    
    generateEgg() {
        // if (i >= maxEggs) return;

        // create an egg element and append the egg element to the container
        let egg = document.createElement('div');
        egg.className = 'egg';
        container.appendChild(egg);

        i++;
    }
};
// eggs generation:
const maxEggs = 20;
let i = 0;
const egg = new Egg();

while (i < maxEggs) {
  egg.generateEgg(); // 
}