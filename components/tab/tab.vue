<template>
	<view class="tab">
		<scroll-view scroll-x="true" class="tab-scroll">
			<view class="tab-scroll__box">
				<view class="tab-scroll__item" v-for="(item,index) in list" :key="index" @click="clickTab(item,index)" :class="{active:activeIndex === index}">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			},
			tabIndex:{
				type:Number,
				default:0
			}
		},
		data(){
			return{
				activeIndex:0,
				
			}
		},
		watch:{
			tabIndex(newVal){
				this.activeIndex = newVal
			}
		},
		methods:{
			clickTab(item,index){
				this.activeIndex = index
				this.$emit('tab',{
					item,
					index
				})
			}
		}
	}
</script>

<style lang="scss">
	.tab{
		width: 100%;
		display: flex;
		background-color: #FFFFFF;
		border-bottom: 1px #f5f5f5 solid;
		box-sizing: border-box;
		.tab-scroll{
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;
			.tab-scroll__box{
				display: flex;
				align-items: center;
				flex-wrap: nowrap;
				height: 45px;
				box-sizing: border-box;
				.tab-scroll__item{
					flex-shrink: 0;
					padding: 0 10px;
					color: #333333;
					font-size: 14px;
					&.active{
						color: $mk-base-color;
					}
				}
			}
		}
		.tab-icons{
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 45px;
			&::after{
				position: absolute;
				content: '';
				top: 12px;
				bottom: 12px;
				left: 0;
				width: 1px;
				background-color: #ddd;
			}
		}
	}
</style>
