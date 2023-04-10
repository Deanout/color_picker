import { Controller } from "@hotwired/stimulus";
import "@melloware/coloris/dist/coloris.css";
import Coloris from "@melloware/coloris";

// Connects to data-controller="colors"
export default class extends Controller {
  connect() {
    Coloris.init();
    Coloris({ el: "#post_font_color" });
    Coloris({ el: "#post_background_color", themeMode: "dark" });

    Coloris.setInstance(".font_color", {
      swatchesOnly: true,
      swatches: ["#264653", "#2a9d8f", "#e9c46a"],
      theme: "pill",
      themeMode: "dark",
    });

    Coloris.setInstance(".background_color", {
      swatchesOnly: false,
      swatches: ["#264653", "#2a9d8f", "#e9c46a"],
    });
  }
}
