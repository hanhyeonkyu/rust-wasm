const js = import("@alexhan/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});
