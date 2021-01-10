// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       msg:'今天学习小程序',
       arr:['a','b','c','d','e'],
       num:0,
       objarr:[{
         name: 'zhangsan',
         age: 22
       },
       {
        name: 'zhangsan',
        age: 22
      },
      {
        name: 'zhangsan',
        age: 22
      },{
        name: 'zhangsan',
        age: 22
      },{
        name: 'zhangsan',
        age: 22
      },{
        name: 'zhangsan',
        age: 22
      },]
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
        console.log('用户下拉，刷新数据');
        setTimeout(()=>{
          wx.stopPullDownRefresh({
            success: (res) => {},
          })
        },100)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
          console.log('到底了，更新数据');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})