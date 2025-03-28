// 食物列表
const foodList = [
  '火锅',
  '烤肉',
  '麻辣烫',
  '炒菜',
  '寿司',
  '披萨',
  '汉堡',
  '面条',
  '盖浇饭',
  '粥',
  '饺子',
  '包子',
  '烧烤',
  '炸鸡',
  '沙拉',
  '三明治',
  '寿司',
  '韩式料理',
  '日式料理',
  '泰式料理'
];

/**
 * 随机抽取一个食物选项
 * @returns {string} 随机抽取的食物名称
 */
const getRandomFood = () => {
  const randomIndex = Math.floor(Math.random() * foodList.length);
  return foodList[randomIndex];
};

/**
 * 获取多个随机食物选项
 * @param {number} count 需要获取的食物数量
 * @returns {string[]} 随机食物选项数组
 */
const getMultipleRandomFoods = (count = 3) => {
  const shuffled = [...foodList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

module.exports = {
  getRandomFood,
  getMultipleRandomFoods,
  foodList
}; 