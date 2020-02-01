module.exports = {
    exportTrailingSlash: true,
    exportPathMap: async function() {
      const paths = {
        '/': { page: '/' },
        '/brand': { page: '/brand' },
        '/franchise': { page: '/franchise' },
        '/menu': { page: '/menu' },
        '/store': { page: '/store' },
        '/notice': { page: '/notice' }
      };
  
      return paths;
    }
  };