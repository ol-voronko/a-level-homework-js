class RGB {
  #r;
  #g;
  #b;

  #hexColor(color) {
    if (color) {
      return color.toString(16).toUpperCase().padStart(2, 0);
    }
  }
  get r() {
    return this.#r;
  }

  set r(newR) {
    if (!isNaN(newR) && typeof newR === "number") {
      if (newR >= 0 && newR <= 255) {
        return (this.#r = newR);
      } else {
        throw new RangeError("Помилка в кольорі r");
      }
    }
  }

  get g() {
    return this.#g;
  }

  set g(newG) {
    if (!isNaN(newG) && typeof newG === "number") {
      if (newG >= 0 && newG <= 255) {
        return (this.#g = newG);
      } else {
        throw new RangeError("Помилка в кольорі g");
      }
    }
  }

  get b() {
    return this.#b;
  }
  set b(newB) {
    if (!isNaN(newB) && typeof newB === "number") {
      if (newB >= 0 && newB <= 255) {
        return (this.#b = newB);
      } else {
        throw new RangeError("Помилка в кольорі b");
      }
    }
  }

  get rgb() {
    const rgb = `rgb(${this.#r},${this.#g},${this.#b})`;
    return rgb;
  }

  set rgb(newRgb) {
    const rgbMatch = newRgb.match(
      /^(rgb)?\(?([01]?\d\d?|2[0-4]\d|25[0-5])(\W+)([01]?\d\d?|2[0-4]\d|25[0-5])\W+(([01]?\d\d?|2[0-4]\d|25[0-5])\)?)$/
    );
    if (rgbMatch) {
      this.#r = +rgbMatch[2];
      this.#g = +rgbMatch[4];
      this.#b = +rgbMatch[6];
    } else {
      throw new SyntaxError();
    }
  }

  get hex() {
    // Можна і так

    // return `#${this.#r.toString(16).toUpperCase().padStart(2, 0)}${this.#g
    //   .toString(16).toUpperCase()
    //   .padStart(2, 0)}${this.#b.toString(16).toUpperCase().padStart(2, 0)}`;

    // Але так мабуть краще?
    return `#${this.#hexColor(this.#r)}${this.#hexColor(
      this.#g
    )}${this.#hexColor(this.#b)}`;
  }
  set hex(newHex) {
    if (newHex.match(/^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/)) {
      this.#r = parseInt(newHex.slice(1, 3), 16);
      this.#g = parseInt(newHex.slice(3, 5), 16);
      this.#b = parseInt(newHex.slice(5, 7), 16);
    } else {
      throw new SyntaxError();
    }
  }
}
const rgb = new RGB();
rgb.r = 15;
rgb.g = 128;
rgb.b = 192;
console.log(rgb.hex); //#0F80C0
console.log(rgb.rgb); //rgb(15,128,192)
rgb.hex = "#2030FF";

console.log(rgb.rgb);
rgb.rgb = "rgb(100, 90, 50)";
console.log(rgb.r, rgb.g, rgb.b);
