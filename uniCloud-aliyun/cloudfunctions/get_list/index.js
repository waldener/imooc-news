'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const {
		name,
		page = 1,
		pageSize = 10,
	} = event
	let matchObj = {}
	if(name !== '全部'){
		matchObj = {classify:name}
	}
	//聚合：更精细化的处理数据 求和 分组 指定哪些字段
	const list = await db.collection('article')
	.aggregate()
	.match(matchObj)
	.project({
		content: 0
	})
	//跳过多少条数据
	.skip(pageSize*(page-1))
	//限制数据数量
	.limit(pageSize)
	.end()
	/* const list = await db.collection('article')
	.field({
		//true 只返回这个字段 false 不返回这个字段
		content:false
	})
	.get() */
	
	//返回数据给客户端
	return {
		code:200,
		msg:'请求数据成功',
		data:list.data
	}
};
