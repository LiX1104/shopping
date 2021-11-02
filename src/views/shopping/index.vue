<template>
  <div class="home">
      <div id="app">
          <div id="header">
              <div class="tab_title">
                <h4>小米手机</h4>
              </div>
              <router-link to="/cart" class="tab_shopping">购物车({{name}})</router-link>
              <div class="clear"></div>
          </div>
          <div id="bodyer">
              <div class="bodys" v-for="(item,index) in list" :key="index">
                <div class='bodys_img'>	
				 		      <img :src="item.image" alt="">
				 	      </div>
				 	      <div class='bodys_content'>
				 		        <h5 class='bodys_name'>{{item.title}}</h5>
						        <div class='bodys_title'>{{item.xingneng}}</div>
						        <div style="color:red" class='bodys_pice'>￥：{{item.price}}</div>
						        <div class='btn' @click="add(index)"><span>加入购物车</span></div>
				 	      </div>
              </div>
          </div>
          
      </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
	data(){
		return{
			name:0
		}
	},
  computed: {
    ...mapState(['list']),
	
  },
  created (){
    this.$store.dispatch('getList')
  },
  methods: {
	  ...mapMutations(['setChuanzhi']),
	  add(k){
		  this.name++;
		  console.log(this.list[k]);
		  this.setChuanzhi(this.list[k])

	  }
  },
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
    .home{
      width: 85%;
      height: 499px;
    }
    #app{
      width: 100%;
      background: #fff;
    }
    #app>#header{
      width: 100%;
      height: 50px;
      background-color: #EA7E30;
      display: flex;
	  flex-wrap: nowrap;
    }

    .tab_title{
      width: 78%;
      line-height: 50px;
    }
    .tab_title>h4{
      font-size: 20px;
      color: white;
	  margin-left: 30%;
    }
    .tab_shopping{
      width: 22%;
      line-height: 50px;
      font-size: 16px;
      color: white;
    }
    .clear{
      clear: both;
    }


  #bodyer{
		width:100%;
		height: 499px;
        overflow: scroll;
	}
	.bodys{
		width:100%;
		height:140px;
		border-bottom:0.01rem solid #ccc;
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
		font-size:.1rem;
		display:inline-block;
		/* margin-top:0.06rem; */
	}
	.bodys_pice{
		width:100%;
		height:20px;
		text-align: left;
		display:inline-block;
		margin-top:6px;
	}
	.btn{
		width:80px;
		height:35px;
		line-height: 35px;
		background-color: red;
		color: white;
		font-size: 14px;
		position: relative;
		left: 640px;
		top: 10px;
	}
</style>
