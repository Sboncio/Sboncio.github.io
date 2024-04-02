document.addEventListener("DOMContentLoaded", function() {
    const text_subtitle = "Software Developer, Amateur Roboticist, Determined to do something good.";
    const speed = 50; // Speed of typing in milliseconds
    const typingContainer = document.getElementById("typed-text");
    const typingContainerCurrently = document.getElementById("typed-text-currently");
    let i = 0;
    let j = 0;

    function typeWriter() {
        if (i < text_subtitle.length) {
            typingContainer.innerHTML += text_subtitle.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});