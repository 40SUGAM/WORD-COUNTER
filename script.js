document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("text-input");
    const countButton = document.getElementById("count-button");
    const wordCount = document.getElementById("count");
  
    countButton.addEventListener("click", function () {
      const text = textInput.value;
      const words = text.split(/\s+/).filter((word) => word.length > 0);
      const count = words.length;
      wordCount.textContent = count;
    });
  });
  