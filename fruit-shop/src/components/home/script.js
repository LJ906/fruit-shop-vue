export default {
  data () {
    return {
      bannerPic: [
        {
          path: '/home',
          id: '1',
          imgUrl: require('../../assets/images/banner_1.jpg')
        },
        {
          path: '/home',
          id: '2',
          imgUrl: require('../../assets/images/banner_2.jpg')
        },
        {
          path: '/home',
          id: '3',
          imgUrl: require('../../assets/images/banner_1.jpg')
        }
      ],
      navList: ['水果', "水果", '蔬菜',  '蔬菜', '推荐'],
      curNavIndex: 0,
      cateList: [
        {
          cateId: 1,
          cateName: '苹果',
          catePic: require('../../assets/images/cate_1.jpg')
        },{
          cateId: 2,
          cateName: '葡萄',
          catePic: require('../../assets/images/cate_2.jpg')
        },{
          cateId: 3,
          cateName: '荔枝',
          catePic: require('../../assets/images/cate_3.jpg')
        }, {
          cateId: 4,
          cateName: '猕猴桃',
          catePic: require('../../assets/images/cate_4.jpg')
        },
        {
          cateId: 5,
          cateName: '猕猴桃',
          catePic: require('../../assets/images/cate_5.jpg')
        },{
          cateId: 6,
          cateName: '猕猴桃',
          catePic: require('../../assets/images/cate_6.jpg')
        },{
          cateId: 7,
          cateName: '猕猴桃',
          catePic: require('../../assets/images/cate_7.jpg')
        },{
          cateId: 8,
          cateName: '猕猴桃',
          catePic: require('../../assets/images/cate_8.jpg')
        }
      ],
      recommendList: [
        {
          proId: 1,
          proName: '赣州脐橙（一级）4粒装',
          proPic: require('../../assets/images/pro1.jpg'),
          oldPrice: '30.00',
          newPrice: '25.80',
          proCount: '200kg'
        },
        {
          proId: 2,
          proName: '山东红富士苹果',
          proPic: require('../../assets/images/pro2.jpg'),
          oldPrice: '30.00',
          newPrice: '25.80',
          proCount: '200kg'
        },
        {
          proId: 3,
          proName: '进口香蕉（一级 有礼盒）',
          proPic: require('../../assets/images/pro3.jpg'),
          oldPrice: '10.00',
          newPrice: '8.80',
          proCount: '200kg'
        },
        {
          proId: 4,
          proName: '进口香蕉（一级 有礼盒）',
          proPic: require('../../assets/images/pro4.jpg'),
          oldPrice: '10.00',
          newPrice: '8.80',
          proCount: '200kg'
        },
        {
          proId: 5,
          proName: '进口香蕉（一级 有礼盒）',
          proPic: require('../../assets/images/pro5.jpg'),
          oldPrice: '10.00',
          newPrice: '8.80',
          proCount: '200kg'
        }
      ],
      selected: ''
    }
  },
  created () {

  },
  methods: {
    // 跳转分类列表页
    handleShowCateList(item) {
      console.log(item.cateId);
      // 点击跳转到 分类列表页
      // 参数 cateId
    }
  }
}
