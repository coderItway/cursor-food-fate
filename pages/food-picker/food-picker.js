const { getRandomFood, getMultipleRandomFoods } = require('../../utils/foodUtils');

Page({
  data: {
    selectedFood: '',
    multipleOptions: [],
    isAnimating: false,
    hasPicked: false  // 添加标记，表示是否已经抽取过
  },

  onLoad() {
    // 页面加载时的初始化
  },

  // 随机抽取一个食物
  pickRandomFood() {
    if (this.data.isAnimating) return;
    
    this.setData({ 
      isAnimating: true,
      selectedFood: '' // 清空之前的结果
    });
    
    // 模拟动画效果
    setTimeout(() => {
      const food = getRandomFood();
      this.setData({
        selectedFood: food,
        isAnimating: false,
        hasPicked: true  // 设置已抽取标记
      });
    }, 800);
  },

  // 获取多个选项
  getMultipleOptions() {
    if (this.data.isAnimating) return;
    
    this.setData({ 
      isAnimating: true,
      multipleOptions: [] // 清空之前的结果
    });
    
    setTimeout(() => {
      const options = getMultipleRandomFoods(3);
      this.setData({
        multipleOptions: options,
        isAnimating: false
      });
    }, 800);
  }
});