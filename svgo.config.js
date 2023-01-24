module.exports = {
  plugins: [
    'removeComments',
    'removeUselessDefs',
    'removeXMLNS',
    'removeXMLProcInst',
    'cleanupIds',
    {
      name: 'convertColors',
      params: {
        currentColor: true,
      },
    },
  ],
};
