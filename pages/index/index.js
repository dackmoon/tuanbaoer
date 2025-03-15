// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    colors: ['#FF9F43', '#FF6B6B', '#4834D4', '#6AB04C', '#686DE0', '#FF9F43'],
    // 轮播图数据
    swiperList: [
      {
        id: 1,
        imageUrl: 'https://7072-prod-1gra11xn834ed9aa-1347862742.tcb.qcloud.la/static/images/1.jpg?sign=99060d76ec47d076b677a9567c439c68&t=1742004122', // 图片地址预留，稍后手动修改
        
      },
      {
        id: 2,
        imageUrl: 'https://7072-prod-1gra11xn834ed9aa-1347862742.tcb.qcloud.la/static/images/2.jpg?sign=6b1dc781b314c9a840936d3f6fe7b2de&t=1742006305', // 图片地址预留，稍后手动修改
        
      },
      {
        id: 3,
        imageUrl: 'https://7072-prod-1gra11xn834ed9aa-1347862742.tcb.qcloud.la/static/images/3.jpg?sign=d5be03ca3e4a823838fc4b3bc233f855&t=1742006333', // 图片地址预留，稍后手动修改
        
      }
    ]
  },
  
  // 导航到指定页面
  navigateTo(e) {
    const page = e.currentTarget.dataset.page;
    console.log('Navigating to page:', page);
    
    if (page === 'schedule') {
      wx.switchTab({
        url: '/pages/schedule/schedule'
      });
    } else if (page === 'record') {
      wx.switchTab({
        url: '/pages/record/record'
      });
    } else {
      // 对于非tabBar页面，使用navigateTo
      wx.navigateTo({
        url: `/pages/${page}/${page}`
      });
    }
  },
  
  // 显示开发中提示
  showDeveloping() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none',
      duration: 2000
    });
  },
  
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  onRefresh() {
    // 模拟刷新
    setTimeout(() => {
      wx.showToast({
        title: '刷新成功',
        icon: 'success',
        duration: 1000
      });
      this.setData({
        triggered: false
      });
    }, 1000);
  }
})
