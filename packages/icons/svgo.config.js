const config = {
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

export default config;
