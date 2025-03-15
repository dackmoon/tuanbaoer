// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log();

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },

  onLoad() {
    // 检查是否已登录
    const userInfo = wx.getStorageSync('userInfo')
    if (!userInfo) {
      // 如果未登录，则跳转到登录页面
      wx.navigateTo({
        url: '/pages/login/login'
      })
    }
  },

  
  onShow() {
    // 检查是否已登录
    const userInfo = wx.getStorageSync('userInfo')
    if (!userInfo) {
      // 如果未登录，则跳转到登录页面
      wx.navigateTo({
        url: '/pages/login/login'
      })
    }
  },

  onHide() {
    // 在页面隐藏时清除用户信息
    wx.removeStorageSync('userInfo')
  },  

  globalData: {
    userInfo: null
  }
})
