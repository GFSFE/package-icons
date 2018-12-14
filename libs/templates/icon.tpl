@font-face {
  font-family: "{{fontName}}";
  src: url("./{{font}}.eot?t={{timestamp}}");
  src: url("./{{font}}.woff?t={{timestamp}}") format("woff"),
  url("./{{font}}.ttf?t={{timestamp}}") format("truetype"),
  url("./{{font}}.svg#font?t={{timestamp}}") format("svg");
  font-weight: normal;
  font-style: normal;
}

[class^="{{classPrefix}}"], [class*=" {{classPrefix}}"] {
  font-family: "{{fontName}}" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;

  /* Icon Font Rendering Better */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

{{mainContent}}
