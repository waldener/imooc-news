<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view :style="{height: statusBarHeight + 'px'}"></view>
			<view class="navbar-content" :style="{height: navBarHeight + 'px',width: windosWidth + 'px'}">
				<view class="navbar-search">
					<view class="navbar-search">
						<view class="navbar-search-icon">
							<uni-icons type="search" size="16" color="#999"></uni-icons>
						</view>
						<view class="navbar-search-text">
							uni-app vue
						</view>
					</view>
				</view>
			</view>
		</view>
		<view :style="{height: statusBarHeight + navBarHeight + 'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight:20,
				navBarHeight:45,
				windosWidth:375
			};
		},
		created() {
			//获取手机系统信息
			const info = uni.getSystemInfoSync()
			//获取状态栏高度
			this.statusBarHeight = info.statusBarHeight
			this.windosWidth = info.windowWidth
			
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			//获取胶囊位置
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			//console.log(menuButtonInfo)
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)
			this.windosWidth = menuButtonInfo.left
			// #endif
		}
	}
</script>

<style lang="scss">
	.navbar {
		.navbar-fixed{
			position: fixed;
			top: 0;
			right: 0;
			z-index: 99;
			width: 100%;
			background-color: $mk-base-color;
			.navbar-content{
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 15px;
				box-sizing: border-box;
				height: 45px;
				.navbar-search{
					display: flex;
					align-items: center;
					width: 100%;
					height: 30px;
					padding: 0 10px;
					border-radius: 30px;
					background-color: #fff;
					.navbar-search-icon{
						margin-right: 10px;
					}
					.navbar-search-text{
						font-size: 12px;
						color: #999;
					}
				}
			}
		}
	}
</style>
