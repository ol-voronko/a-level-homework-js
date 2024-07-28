class RGB {
  #r;
  #g;
  #b;

  get r() {
    return this.#r;
  }

  set r(newR) {
    if (!isNaN(newR) && typeof newR === "number") {
      if (newR >= 0 && newR <= 255) {
        return (this.#r = newR);
      } else {
        throw new RangeError();
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
        throw new RangeError();
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
        throw new RangeError();
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
    return `#${this.#r.toString(16).padStart(2, 0)}${this.#g
      .toString(16)
      .padStart(2, 0)}${this.#b.toString(16).padStart(2, 0)}`;
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
rgb.r = 16;
rgb.g = 10;
rgb.b = 150;
console.log(rgb.hex); //#0F80C0
console.log(rgb.rgb); //rgb(15,128,192)
rgb.hex = "#2030FF";

console.log(rgb.rgb);
rgb.rgb = "vccvrgb(100, 90, 50)";
console.log(rgb.r, rgb.g, rgb.b);
