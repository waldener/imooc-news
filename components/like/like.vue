<template>
	<view class="icons" @click.stop="likeTab">
		<uni-icons type="heart" size="20" color="#f07373"></uni-icons>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			likeTab(){
				console.log('like')
			}
		}
	}
</script>
	
<style>
.icons{
		position:absolute;
		right: 0;
		top: 0;
		display: flex;
		width: 20px;
		height: 20px;
		justify-content: center;
		align-items: center;
	}
</style>
