module.exports = {
    chainWebpack: config => {
        config
        .plugin('html')
        .tap(args => {
          args[0].title = 'Биоритмы человека'
          return args
        })
      },
    configureWebpack: {
       
    },
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}