<template>
  <div class="about">
      <div class="content">
          <div class="header">
            <router-link to="/about/sy" class="tab_shopping">返回</router-link>
            <div class="tab_title">
                <h4>购物车</h4>
            </div>
            <div class="clear"></div>
          </div>

          <div id="bodyer">
              <div class="bodys" v-for="(item,k) in chuanzhi" :key="k">
                <div class='bodys_img'>
				 		      <img :src="item.image" alt="">
				 	      </div>
				 	      <div class='bodys_content'>
				 		        <h5 class='bodys_name'>{{item.title}}</h5>
						        <div class='bodys_title'>{{item.xingneng}}</div>
						        <div style="color:red" class='bodys_pice'>￥：{{item.price}}</div>
						        <div class='num'>
                        <div class="input_sub" @click="jian(k)">-</div>
                        <div class="input_num">{{item.shuliang}}</div>
                        <div class="input_add" @click="jia(k)">+</div>
                    </div>
				 	      </div>
              </div>
          </div>

          <div class="footer">
            <div class="footer_price">总价：￥{{zj}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {
  data(){
    return{
        
    }
  },
  computed: {
    ...mapState(['chuanzhi']),
    zj(){ 
      let i = 0;
      this.chuanzhi.forEach(a=>{
        i += a.price*a.shuliang
      })
      return i
    }
  },
  created (){
    this.$store.dispatch('getList')
  },
  methods: {
    jia(k){
      console.log(k);
      if(this.chuanzhi[k].shuliang <100){
        this.chuanzhi[k].shuliang++
      }
    },
    jian(k){
      if(this.chuanzhi[k].shuliang >1){
        this.chuanzhi[k].shuliang--
      }
    }
  }
}
</script>

<style scoped>
    *{
      margin: 0;
      padding: 0;
      list-style: none;
    }
    a{
      text-decoration: none;
    }
    .about{
      width: 85%;
    }
    .content{
      width: 100%;
      height: auto;
    }
    .header{
      width: 100%;
      height: 50px;
      line-height: 50px;
      margin: 0 auto;
      background-color: #EA7E30;
      display: flex;
    }
    .tab_shopping{
      width: 22%;
      line-height: 50px;
      font-size: 16px;
      color: white;
    }
    .tab_title{
      width: 78%;
      flex-wrap: nowrap;
      line-height: 50px;
    }
    .tab_title>h4{
      font-size: 20px;
      color: white;
      padding-right: 20%;
    }
    .clear{
      clear: both;
    }

    #bodyer{
		width:100%;
		height:449px;
        overflow: scroll;
        background: white;
	}
	.bodys{
		width:100%;
		height:140px;
		border-bottom:1px solid #ccc;
		margin-top:10px;
		display: flex;
	}
	.bodys_img{
		width:30%;
		height:120px;
	}
	.bodys_img>img{
		height:100%;
	}
	.bodys_content{
		width:70%;
		height:120px;
		display: flex;
		flex-direction: column;
    justify-content: flex-end;
		
	}
	.bodys_name{
		width:100%;
		height:30px;
		text-align: left;
		line-height:30px;
    font-size: 18px;
	}
	.bodys_title{
		width:100%;
		height:30px;
		text-align: left;
		line-height:30px;
		overflow:hidden;
		overflow: hidden;
		text-overflow:ellipsis; white-space: nowrap;
		font-size:10px;
		display:inline-block;
	}
	.bodys_pice{
		width:100%;
		height:20px;
		text-align: left;
		display:inline-block;
		margin-top:6px;
	}
	.num{
		width:100px;
		height:35px;
		line-height: 35px;
    display: flex;
		/* border:0.01rem solid red; */
    position: relative;
		left: 640px;
		top: 10px;
	}
  .input_sub{
    width: 33%;
    background-color: red;
  }
  .input_num{
    width: 34%;
    background-color: white;
    border:1px solid red;
  }
  .input_add{
    width: 33%;
    background-color: red;
  }

  .footer{
    width: 100%;
    height: 50px;
    line-height: 50px;
    /* border: 0.01rem solid red; */
    display: flex;
    justify-content: flex-end;
    background-color: #EA7E30;
    
  }
  .footer_price{
     margin-right: 30px;
     font-size: 20px;
     color: white;
    
  }
</style>

