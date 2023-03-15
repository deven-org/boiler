module.exports = {
  plugins: [
    'removeComments',
    'removeUselessDefs',
    'removeXMLNS',
    'removeXMLProcInst',
    'cleanupIds',
    'removeDimensions',
    {
      name: 'convertColors',
      params: {
        currentColor: true,
      },
    },
  ],
};
