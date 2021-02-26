<template>
	<swiper class="home-swiper" @change="change" :current="activeIndex">
		<swiper-item class="swiper-item" v-for="(item,index) in tab" :key="index">
			<list-item :list = "listCatchData[index]" @loadMore="loadMore" :load="load[index]"></list-item>
		</swiper-item>
	</swiper>
</template>

<script>
	import listItem from './list-item.vue'
	export default {
		components:{
			listItem
		},
		props:{
			tab:{
				type:Array,
				default(){
					return []
				}
			},
			activeIndex:{
				type:Number,
				default:0
			},
			
		},
		data(){
			return{
				list:[],
				//由于js的限制 listCatchData[index] = data不会生效
				listCatchData:{},
				load:{},
				pageSize:10
			}
		},
		watch:{
			tab(newVal) {
				if(newVal.length === 0) return
				this.getList(this.activeIndex)
			}
		},
		methods:{
			loadMore(){
				if(this.load[this.activeIndex].loading === 'noMore') return
				this.load[this.activeIndex].page++
				this.getList(this.activeIndex)
			},
			change(e){
				const {current} = e.detail
				this.$emit('change',current)
				//当数据不存在或者长度为0是才去请求数据
				if(!this.listCatchData[current] || this.listCatchData[current].length === 0){
					this.getList(current)
				}
			},
			getList(current){
				if(!this.load[current]){
					this.load[current] = {
						page:1,
						loading:"loading"
					}
				}
				this.$api.get_list({
					name:this.tab[current].name,
					page:this.load[current].page,
					pageSize:this.pageSize
					}).then(res =>{
					// this.list = res.data
					const {data} = res
					if(data.length === 0){
						let oldLoad = {}
						oldLoad.loading = 'noMore'
						oldLoad.page = this.load[current].page
						this.$set(this.load,current,oldLoad)
						this.$forceUpdate()
						console.log(this.load[current].loading)
						return
					}
					let oldList = this.listCatchData[current] || []
					oldList.push(...data)
					//this.listCatchData[current] = res.data
					//数据缓存，数据懒加载
					this.$set(this.listCatchData,current,oldList)
				})
			}
		}
	}
</script>

<style lang="scss">
 .home-swiper{
	 height: 100%;
	 .swiper-item{
		 height: 100%;
		 overflow: hidden;
		 .list-scroll{
			 height: 100%;
		 }
	 }
 }
</style>
