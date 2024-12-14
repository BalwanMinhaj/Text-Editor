const optionsBtn = document.querySelectorAll(".btn");
const advBtn = document.querySelectorAll(".adv-btn");
const fontName = document.getElementById("fontName");
const fontSizeRef = document.getElementById("fontSize");
const linkBtn = document.getElementById("createLink");
const fileInput = document.getElementById('insertImage');
const alignBtns = document.querySelectorAll(".align");
const spacingBtns = document.querySelectorAll(".spacing");
const formatBtns = document.querySelectorAll(".format");
const scriptBtns = document.querySelectorAll(".script");
const listBtns = document.querySelectorAll(".list");
const editorArea = document.getElementById("editor");

let fontList = ["Arial", "Inter", "Lato", "Lexend", "Montserrat", "Noto Serif", "Outfit", "Playfair Display", "Poppins", "Roboto"];

function highlighter(className, needsRemoval) {
    className.forEach(btn => {
        btn.addEventListener('click', () => {
            if (needsRemoval) {
                let alreadyActive = false;
                if (btn.classList.contains('active')) {
                    alreadyActive = true;
                }
                highlighterRemover(className);
                if (!alreadyActive) {
                    btn.classList.add('active');
                }
            } else {
                btn.classList.toggle('active');
            }
        });
    });
}

function highlighterRemover(className) {
    className.forEach(btn => {
        btn.classList.remove('active');
    });
}

fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image")) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            editorArea.appendChild(img);
        };
        
        reader.readAsDataURL(file);
    } else {
        alert("Please select a valid image file.");
    }
});

const initializer = () => {
    highlighter(alignBtns, true);
    highlighter(spacingBtns, true);
    highlighter(scriptBtns, true);
    highlighter(listBtns, true);
    highlighter(formatBtns, false);

    fontList.forEach(val => {
        let option = document.createElement('option');
        option.value = val;
        option.innerHTML = val;
        fontName.appendChild(option);
    });

    let fontSizes = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 72];
    fontSizes.forEach((size) => {
        let option = document.createElement("option");
        option.value = size;
        option.innerHTML = size;
        fontSizeRef.appendChild(option);
    });

    fontSizeRef.value = 16;
};

const modifyText = (command, defaultUI, value) => {
    if (command === "fontSize") {
        document.execCommand("styleWithCSS", false, true);
        document.execCommand(command, defaultUI, "1");
        
        const selectedText = window.getSelection();
        if (selectedText.rangeCount > 0) {
            const span = document.createElement("span");
            span.style.fontSize = value + "px";
            selectedText.getRangeAt(0).surroundContents(span);
        }
    } else {
        document.execCommand(command, defaultUI, value);
    }
};

optionsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        modifyText(btn.id, false, null);
    });
});

fontSizeRef.addEventListener("change", () => {
    modifyText("fontSize", false, fontSizeRef.value);
});

advBtn.forEach(btn => {
    btn.addEventListener('change', () => {
        modifyText(btn.id, false, btn.value);
    });
});

linkBtn.addEventListener('click', () => {
    let userLink = prompt('Enter link');
    if (/http/i.test(userLink)) {
        modifyText(linkBtn.id, false, userLink);
    } else {
        userLink = "http://" + userLink;
        modifyText(linkBtn.id, false, userLink);
    }
});

const sizeBtn = document.querySelector('.fullscreen');
sizeBtn.addEventListener('click', () => {
    if (sizeBtn.classList.contains('ph-arrows-out-simple')) {
        // Switch to fullscreen mode
        sizeBtn.classList.remove('ph-arrows-out-simple');
        sizeBtn.classList.add('ph-arrows-in-simple');
        document.documentElement.requestFullscreen();
    } else {
        // Exit fullscreen mode
        sizeBtn.classList.add('ph-arrows-out-simple');
        sizeBtn.classList.remove('ph-arrows-in-simple');
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }
});

window.onload = initializer;