# 新房接口
##### /api/rems/new-housing/add 创建新房
###### method: post
****
##### /api/rems/new-housing/publish/cancel 取消发布（开发商下架）
###### method: post  
###### Request body:
```
{
  "id": "string"
}
```     

****
##### /api/rems/new-housing/discontinue 下架新房 （线上强制下架）
###### method: post
###### Request body:
```
{
  "id": "string",
  "unpublishedReason": "string"
}
```
****

##### /api/rems/new-housing/draft/publish/apply 申请发布新房草稿（上架）
###### method: post
###### Request body:
```
{
  "id": "string"
}
```
****

#####  /api/rems/new-housing/draft/publish/apply/cancel 取消申请发布新房草稿（开发商取消上架）
###### method: post
###### Request body:
```
{
  "id": "string"
}
```

****

##### /api/rems/new-housing/delete 删除新房草稿（删除按钮）
###### method: put
###### Request body
```
{
  "id": "string"
}
```
****


[[_data#^30bdb8| 开发商列表数据模型]]

[[_data#^1246cf | 新房详情数据模型]]

