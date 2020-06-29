proxy: {
    "/api": {
      target: "http://127.0.0.1:8081",   // 要请求的后台地址
      ws: true,    // 启用websockets
      changeOrigin: true,    // 是否跨域
      pathRewrite: {   
        "^/api": "/"          // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替
      }
    }
