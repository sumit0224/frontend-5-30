let root = document.querySelector("#root");
let watch = document.querySelector("#timer")
let startBtn = document.querySelector("#start")
let stopBtn = document.querySelector("#stop")
let resetBtn = document.querySelector("#reset")

let timer = 0;
let intervalId = null;


// Convert time to readable format
const findTime = () => {
    let ms = timer % 100;
    let sec = Math.floor(timer / 100) % 60;
    let min = Math.floor(timer / 6000);

    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}:${String(ms).padStart(2, "0")}`;
};

// Start timer
const start = () => {
    if (intervalId !== null) return; // prevent multiple intervals

    
    startBtn.disabled = true;
    stopBtn.disabled = false
    intervalId = setInterval(() => {
        timer += 1;
        startBtn.textContent = "⏸️"
        watch.innerText = findTime()

    }, 10);
};

// Stop timer
const stop = () => {
    startBtn.disabled = false;
    stopBtn.disabled = true
    clearInterval(intervalId);
    intervalId = null;
};

// Reset timer
const reset = () => {
    startBtn.disabled = false;
    stop();
    stopBtn.disabled = false
    timer = 0;
    watch.innerText = "00:00:00"
};

startBtn.addEventListener("click", () => {
    start()
})
stopBtn.addEventListener("click", () => {
    stop()
})
resetBtn.addEventListener("click", () => {
    reset()
})

console.log("hell".padStart(6, "+"))