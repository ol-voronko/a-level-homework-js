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

  #hexColor(color) {
    if (color) {
      return color.toString(16).toUpperCase().padStart(2, 0);
    }
  }

  get hex() {
    return `#${this.#hexColor(this.#r)}${this.#hexColor(
      this.#g
    )}${this.#hexColor(this.#b)}`;
  }
  set hex(newHex) {
    if (newHex.match(/^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/)) {
      this.#r = parseInt(newHex.slice(1, 3), 16);
      this.#g = parseInt(newHex.slice(3, 5), 16);
      this.#b = parseInt(newHex.slice(5, 7), 16);
    } else {
      throw new SyntaxError();
    }
  }
}

class RGBA extends RGB {
  #a;

  get a() {
    return this.#a;
  }
  set a(newA) {
    if (!isNaN(newA) && typeof newA === "number") {
      if (newA >= 0 && newA <= 1) {
        return (this.#a = newA);
      } else {
        throw new RangeError();
      }
    }
  }

  get hex() {
    if (this.#a) {
      return (
        super.hex +
        Math.round(this.#a * 255)
          .toString(16)
          .toUpperCase()
      );
    } else {
      return super.hex;
    }
  }

  set hex(newHex) {
    const newHex2 = newHex.slice(0, 7);
    const alpha = newHex.slice(7, 9);

    if (newHex2.match(/^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/)) {
      if (alpha) {
        super.hex = newHex2;
        this.#a = (parseInt(alpha, 16) / 255).toFixed(2);
      } else {
        super.hex;
      }
    } else {
      throw new SyntaxError();
    }
  }

  get rgba() {
    return `rgba(${super.r},${super.g},${super.b},${this.#a})`;
  }

  set rgba(newRGBA) {
    this.#a = +newRGBA.split(",").pop().slice(0, -1);
    let arrRGB = newRGBA.split(",");
    arrRGB.pop();
    let rgb = (arrRGB.join() + ")").replace("rgba", "rgb");
    let rgbMatch = rgb.match(
      /^(rgb)?\(?([01]?\d\d?|2[0-4]\d|25[0-5])(\W+)([01]?\d\d?|2[0-4]\d|25[0-5])\W+(([01]?\d\d?|2[0-4]\d|25[0-5])\)?)$/
    );
    if (rgbMatch) {
      super.rgb = rgb;
    } else {
      throw new SyntaxError("RGBA");
    }
  }
  set color(newColor) {
    if (newColor.startsWith("#")) {
      this.hex = newColor;
    } else if (newColor.startsWith("rgba(")) {
      this.rgba = newColor;
    } else if (newColor.startsWith("rgb(")) {
      super.rgb = newColor;
    } else {
      throw new SyntaxError();
    }
  }
}

const rgba = new RGBA();

rgba.hex = "#80808080";
console.log(rgba.a); //0.5
console.log(rgba.rgba); //rgba(128,128,128,0.5)
rgba.r = 192;
rgba.a = 0.25;
console.log(rgba.hex); //#C0808040

rgba.color = "rgba(1,2,3,0.70)";
rgba.b *= 10;
console.log(rgba.hex); //#01021EB3
