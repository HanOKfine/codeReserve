### 开发商列表
```

 {
        "id": "string",
        "createTime": "2021-11-30T04:59:28.559Z",
        "lastModifyTime": "2021-11-30T04:59:28.559Z",
        "projectIdOfGovernment": "string",
        "name": "string",
        "imageUrl": "string",
        "developerName": "string",
        "address": "string",
        "publishState": 0,
        "publishStateName": "string",
        "IsRecorded": true,
        "changeStatus": 0,
        "changeStatusName": "string",
        "auditComment": "string",
        "projectDraftId": "string",
        "workflowNodeName": "string",
        "divisionCode": "string",
        "districtName": "string",
        "purposeInfos": [
          {
            "purpose": 0,
            "purposeName": "string",
            "referenceUnitPrice": 0
          }
        ],
        "menuIds": "string",
        "isBroker": true,
        "permissionCodes": [
          "string"
        ]
 }


{

	description:

	查找当前用户拥有权限的新房草稿列表

	id

	string($guid)

	获取或设置主键ID

	createTime

	string($date-time)

	创建时间

	lastModifyTime

	string($date-time)

	最后修改时间

	projectIdOfGovernment

	string($guid)  
	nullable: true

	政府平台项目标识码

	name

	string  
	nullable: true

	名字

	imageUrl

	string  
	nullable: true

	图片链接

	developerName

	string  
	nullable: true

	开发商名称

	address

	string  
	nullable: true

	楼盘地址

	publishState

	PublishStateOptionsinteger

	上架状态 0 = 待上架 1 = 已上架 2 = 已下架

	Enum:  
	[ 0, 1, 2 ]

	publishStateName

	string  
	nullable: true

	上架状态 显示名

	IsRecorded

	boolean

	是否已备案

	changeStatus

	DraftChangeStatusOptionsinteger

	草稿变更状态 0 = 无 1 = 未变更 2 = 待审核 3 = 审核通过 4 = 审核不通过

	Enum:  
	[ 0, 1, 2, 3, 4 ]

	changeStatusName

	string  
	nullable: true

	变更状态 显示名

	auditComment

	string  
	nullable: true

	审核意见

	projectDraftId

	string($guid)  
	nullable: true

	项目草稿Id

	workflowNodeName

	string  
	nullable: true

	流程环节 显示名

	divisionCode

	string  
	nullable: true

	行政区编码

	districtName

	string  
	nullable: true

	行政区名称

	purposeInfos

	[  
	nullable: true

	用途信息集

	PurposeInfo2{

	description:

	用途信息

	purpose

	HousingPurposeOptionsinteger

	房屋用途 0 = 无 1 = 住宅 2 = 商铺 3 = 写字楼 4 = 工业 5 = 仓储 6 = 车位 7 = 别墅 8 = 公寓 99 = 其它

	Enum:  
	Array [ 10 ]

	purposeName

	string  
	nullable: true

	用途 显示名

	referenceUnitPrice

	number($decimal)  
	nullable: true

	参考均价（元）

	}]

	menuIds

	string  
	nullable: true

	isBroker

	boolean

	是否是代理的项目

	permissionCodes

	[  
	nullable: true

	用户对该数据拥有的权限Code列表

	string]

}
```

^30bdb8


### 新房详情
```
{
  "status": 0,
  "message": "string",
  "result": {
    "projectId": "string",
    "draftId": "string",
    "changeStatus": 0,
    "IsRecorded": true,
    "name": "string",
    "divisionCode": "string",
    "townId": "string",
    "townCode": 0,
    "address": "string",
    "developerName": "string",
    "greeningRate": 0,
    "floorAreaRatio": 0,
    "landArea": 0,
    "builtUpArea": 0,
    "propertyCompany": "string",
    "propertyCompanyTel": "string",
    "underlyingPropertyPrice": 0,
    "multiStoreyPropertyPrice": 0,
    "highStoreyPropertyPrice": 0,
    "commercialPropertyPrice": 0,
    "officePropertyPrice": 0,
    "businessCircle": "string",
    "saleAddress": "string",
    "saleTel": "string",
    "brief": "string",
    "feature": "string",
    "features": [
      0
    ],
    "garageCount": 0,
    "garageRatio": "1:1.2",
    "renderingPictures": [
      "string"
    ],
    "renderingPicturesOfBackup": [
      "string"
    ],
    "layoutInfos": [
      {
        "layoutId": "string",
        "draftId": "string",
        "name": "string",
        "imageUrl": "string",
        "grossFloorArea": 0,
        "bedrooms": 0,
        "halls": 0,
        "kitchens": 0,
        "toilets": 0,
        "orderNo": 0
      }
    ],
    "purposes": [
      0
    ],
    "purposeInfos": [
      {
        "purposeId": "string",
        "draftId": "string",
        "purpose": 0,
        "referenceUnitPrice": 0,
        "propertyRightsLimitedYears": 0,
        "latestDeliver": "2021-11-30T04:57:48.116Z",
        "grossFloorArea": "string",
        "buildingsPlanned": 0,
        "householdsPlanned": 0,
        "elevatorHouseholdRatio": "一梯四户",
        "decorationDegree": "string",
        "decorationDegrees": [
          0
        ],
        "decorationType": "string",
        "decorationTypes": [
          0
        ],
        "buildingType": "string",
        "buildingTypes": [
          0
        ],
        "buildingStructOfShape": 1,
        "electricityType": 0,
        "waterType": 1,
        "gasPrice": 1,
        "heatingType": 1,
        "imageUrl": "string",
        "renderingPictures": [
          "string"
        ],
        "renderingVideos": [
          {
            "previewUrl": "string",
            "resourceUrl": "string"
          }
        ],
        "renderingVRs": [
          {
            "previewUrl": "string",
            "resourceUrl": "string"
          }
        ],
        "passengerElevators": 0,
        "goodsElevators": 0,
        "planInfo": {
          "planId": "string",
          "draftId": "string",
          "projectPlanType": 0,
          "statePlan": "string",
          "statePlans": [
            0
          ],
          "supportingFacilities": "string",
          "supportingFacilityArr": [
            0
          ]
        },
        "layoutInfos": [
          {
            "layoutId": "string",
            "draftId": "string",
            "name": "string",
            "imageUrl": "string",
            "grossFloorArea": 0,
            "bedrooms": 0,
            "halls": 0,
            "kitchens": 0,
            "toilets": 0,
            "orderNo": 0
          }
        ]
      }
    ],
    "permissionCodes": [
      "string"
    ]
  }
}


{

	description:

	projectId

	string($guid)

	项目Id

	draftId

	string($guid)  
	nullable: true

	草稿Id

	changeStatus

	DraftChangeStatusOptionsinteger

	草稿变更状态 0 = 无 1 = 未变更 2 = 待审核 3 = 审核通过 4 = 审核不通过

	Enum:  
	Array [ 5 ]

	IsRecorded

	boolean

	是否已备案

	name

	string  
	nullable: true

	名字

	divisionCode

	string  
	nullable: true

	行政区编码

	townId

	string($guid)  
	nullable: true

	街道Id

	townCode

	integer($int32)  
	nullable: true

	街道编码

	address

	string  
	nullable: true

	楼盘地址

	developerName

	string  
	nullable: true

	开发商名称

	greeningRate

	number($decimal)  
	nullable: true

	绿化率

	floorAreaRatio

	number($decimal)  
	nullable: true

	容积率

	landArea

	number($decimal)  
	nullable: true

	占地面积

	builtUpArea

	number($decimal)  
	nullable: true

	建筑面积

	propertyCompany

	string  
	nullable: true

	物业公司名字

	propertyCompanyTel

	string  
	nullable: true

	物业电话

	underlyingPropertyPrice

	number($decimal)  
	nullable: true

	低层物业费 元/平方米

	multiStoreyPropertyPrice

	number($decimal)  
	nullable: true

	多层物业费

	highStoreyPropertyPrice

	number($decimal)  
	nullable: true

	高层物业费

	commercialPropertyPrice

	number($decimal)  
	nullable: true

	商业物业费

	officePropertyPrice

	number($decimal)  
	nullable: true

	办公物业费

	businessCircle

	string  
	nullable: true

	所属商圈

	saleAddress

	string  
	nullable: true

	售楼地址

	saleTel

	string  
	nullable: true

	售楼电话

	brief

	string  
	nullable: true

	简介

	feature

	string  
	nullable: true

	特色 多值之间','分隔 1:低单价 2:低总价 3:开发区 4:公交直达 5:近地铁 6:近主干道 7:商业中心 8:品牌地产 9:学区房 10:小户型

	features

	[...]

	garageCount

	integer($int32)  
	nullable: true

	汽车位及车位总套数

	garageRatio

	string  
	nullable: true  
	example: 1:1.2

	车位配比

	renderingPictures

	[...]

	renderingPicturesOfBackup

	[...]

	layoutInfos

	[...]

	purposes

	[...]

	purposeInfos

	[...]

	permissionCodes

	[...]

}


```

^1246cf
