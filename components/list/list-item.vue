<template>
	<list-scroll class="list-scroll" @loadMore="loadMore">
		<list-card v-for="item in list" :key="item._id" :item="item"></list-card>
		<uni-load-more v-if="list.length > 7 || list.length === 0" :status="load.loading" iconType="snow"></uni-load-more>
	</list-scroll>
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
			load:{
				type:Object,
				default(){
					return {
						loading:'loading'
					}
				}
			}
			
		},
		methods:{
			loadMore(){
				this.$emit('loadMore')
			}
		}
	}
</script>

<style>
	.list-scroll{
				 height: 100%;
	}
</style>
