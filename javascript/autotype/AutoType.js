class AutoType {
  constructor(techArray, targetElementId, speed) {
    this.i = 0;
    this.speed = speed || 50;
    this.tech = techArray || [];
    this.currentIndex = 0;
    this.targetElementId = targetElementId || "demo";
    this.targetElement = document.getElementById(this.targetElementId);
    this.originalHtml = this.targetElement.innerHTML;
    this.startTyping();
  }

  autoType() {
    if (this.currentIndex < this.tech.length) {
      if (this.i < this.tech[this.currentIndex].length) {
        const newText = this.targetElement.innerHTML + this.tech[this.currentIndex].charAt(this.i);
        this.targetElement.innerHTML = newText;
        this.i++;
        setTimeout(() => this.autoType(), this.speed);
      } else {
        setTimeout(() => this.eraseText(), this.speed * 3);
      }
    }
  }

  eraseText() {
    if (this.i >= 0) {
      let currentText = this.tech[this.currentIndex].substring(0, this.i);
      this.targetElement.innerHTML = currentText;
      this.i--;
      setTimeout(() => this.eraseText(), this.speed);
    } else {
      this.currentIndex = (this.currentIndex + 1) % this.tech.length;
      this.i = 0;
      setTimeout(() => this.autoType(), this.speed);
    }
  }

  startTyping() {
    this.autoType();
  }
}

export default AutoType;
