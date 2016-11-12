exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    css: `
      ${config.css || ''}
      .header_header {
        display: none;
      }
      .terms_terms {
        margin-top: 0px;
      }
    `
  });
}
