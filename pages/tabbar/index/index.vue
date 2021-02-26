<template>
	<view class="home">
		<navbar></navbar>
		<tab :list="tabList" @tab='tab' :tabIndex="tabIndex"></tab>
		<view class="home-list">
			<list :tab="tabList" @change="change" :activeIndex="activeIndex"></list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList:[],
				tabIndex:0,
				activeIndex:0
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			getLabel(){
				this.$api.get_label().then(res => {
					const {data} = res
					data.unshift({
						name:'全部'
					})
					this.tabList = data
				})
				/* uniCloud.callFunction({
					name:'get_label',
				}).then((res) => {
					const {result} = res
					this.tabList = result.data
				}) */
			},
			tab({item,index}){
				this.activeIndex = index
				this.tabIndex = index
			},
			change(current){
				this.tabIndex = current
				this.activeIndex = current
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		display: flex;
	}
	.home{
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		.home-list{
			flex: 1;
			box-sizing: border-box;
		}
	}
</style>
