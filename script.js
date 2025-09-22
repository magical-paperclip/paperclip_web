function switchTheme() {
    document.body.classList.toggle('dark-mode');
}

function hideTable() {
    var table = document.querySelector('table');
    if (table.style.display == 'none') {
        table.style.display = 'table';
    } else {
        table.style.display = 'none';
    }
}

var clicks = 0;
function countClicks() {
    clicks++;
    document.getElementById("visit-count").textContent = clicks;
    
    if (clicks == 5) {
        alert("wow you clicked 5 times");
    }
}

function changeStatus() {
    var status = document.getElementById("plan-status");
    var options = ["step 1", "step 2", "step 3", "done"];
    
    var current = 0;
    for (var i = 0; i < options.length; i++) {
        if (status.textContent == options[i]) {
            current = i;
            break;
        }
    }
    
    var next = (current + 1) % options.length;
    status.textContent = options[next];
}

function highlightStuff() {
    var items = document.querySelectorAll('th, h2, strong');
    for (var i = 0; i < items.length; i++) {
        if (items[i].style.backgroundColor) {
            items[i].style.backgroundColor = '';
        } else {
            items[i].style.backgroundColor = 'yellow';
        }
    }
}

function showTime() {
    var now = new Date();
    var timeText = now.toLocaleTimeString();
    document.getElementById('time-until').textContent = timeText;
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("page loaded");
    
    var imgs = document.querySelectorAll("img");
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", function() {
            if (this.style.border) {
                this.style.border = '';
            } else {
                this.style.border = '3px solid red';
            }
        });
    }
    
    showTime();
    setInterval(showTime, 1000);
});

window.addEventListener("load", function() {
    countClicks();
});