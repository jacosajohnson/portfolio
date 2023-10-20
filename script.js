const titleElement = document.getElementById('animated-title');
const titlePlaceholder = document.getElementById('title-placeholder');
const titleText = "Hi, I'm Jacosa Johnson";
const typeSpeed = 100; // Typing speed in milliseconds
const deleteSpeed = 50; // Deleting speed in milliseconds

function typeAndDelete() {
  
  titleElement.textContent = ''; // Clear the title
  typeTitle(0);
  titleElement.style.display = 'block';
  titlePlaceholder.style.display = 'none';
}

function typeTitle(index) {
  if (index < titleText.length) {
    titleElement.textContent += titleText.charAt(index);
    setTimeout(() => typeTitle(index + 1), typeSpeed);
  } else {
    setTimeout(deleteTitle, 1000); // Wait for 1 second before deleting
  }
}

function deleteTitle() {
  const currentText = titleElement.textContent;
  if (currentText.length > 0) {
    titleElement.textContent = currentText.slice(0, -1);
    setTimeout(deleteTitle, deleteSpeed);
  } else {
    setTimeout(typeAndDelete, 1000); // Wait for 1 second before repeating
  }
}

typeAndDelete();
