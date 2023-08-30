// Contenido de AutoType.js (versión adaptada para script estándar)

function AutoType(techArray, targetElementId, speed) {
  this.i = 0;
  this.speed = speed || 50;
  this.tech = techArray || [];
  this.currentIndex = 0;
  this.targetElementId = targetElementId || "demo";
  this.startTyping();
}

AutoType.prototype.autoType = function () {
  if (this.currentIndex < this.tech.length) {
    if (this.i < this.tech[this.currentIndex].length) {
      document.getElementById(this.targetElementId).innerHTML += this.tech[this.currentIndex].charAt(this.i);
      this.i++;
      const _this = this;
      setTimeout(function () {
        _this.autoType();
      }, this.speed);
    } else {
      const _this = this;
      setTimeout(function () {
        _this.eraseText();
      }, this.speed * 3);
    }
  }
};

AutoType.prototype.eraseText = function () {
  if (this.i >= 0) {
    let currentText = this.tech[this.currentIndex].substring(0, this.i);
    document.getElementById(this.targetElementId).innerHTML = currentText;
    this.i--;
    const _this = this;
    setTimeout(function () {
      _this.eraseText();
    }, this.speed);
  } else {
    this.currentIndex = (this.currentIndex + 1) % this.tech.length;
    this.i = 0;
    const _this = this;
    setTimeout(function () {
      _this.autoType();
    }, this.speed);
  }
};

AutoType.prototype.startTyping = function () {
  this.autoType();
};

// Exportar la clase AutoType para uso global (opcional)
window.AutoType = AutoType;
