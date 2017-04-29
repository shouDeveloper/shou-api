## 后台调用接口说明

约定返回数据格式同意为json格式，有data和err两个字段，如果没有错误，err可不填写，如果有错，err可以为布尔值
或者为一个对象，这个对象message字段有错误信息，data字段里面的ret属性一般是携带详细数据信息,如果不需要urp
验证的接口一般不含有ret字段，数据直接在data字段。

## 通用接口

### 登录

```
{
    url:"/api/login",
    method:"POST",
    data:{
        username,
        urppassword
    }
}
//res
{
    data:{
        pass:true/false
        username   
    }
}
```

### 获取最新成绩

```
{
    url:"/api/newAchi",
    method:"POST",
    data:{
        username,
        urppassword
    },
    origin:"urp"
}
//res
{
    err:"",//false or 暂时没有出成绩
     //没有出成绩数组为空
    data:{
        ret:[
            {
                kch:"课程号",
                kxh:"课序号",
                kcm:"课程名",
                kcywm:"课程英文名",
                xf:"学分",
                kcsx:"课程属性",
                cj:"成绩"
            }
        ],
        pass:true/false
    }
}
```

### 获取以前成绩

```
{
    url:"/api/newAchi",
    method:"POST",
    data:{
        username,
        urppassword,
        type:"cache/fresh"
    },
    origin:"urp"
}
//res

{
    data:{
        pass:true/false, //账号密码是否正确
        type:"cache/fresh",
        ret:[
            {
                title:"第几学期",
                content:[
                    [
                        "课程号","课序号","课程名","英文名","学分","课程性质","成绩"
                    ]
                ]
            }
        ]
    },
    err:true/false
}
```

### 获取课程表

```
{
    url:"/api/curri,
    method:"POST",
    origin:"urp",
    data:{
        username,
        urppassword,
        type
    }
}
//res
{
    err:true/false,
    data:{
        ret:[
            []  //课表二维数组
        ],
        pass,
        type
    }
}
```

### 通讯录

```
{
    url:"/api/address",
    method:"GET/POST/UPDATE",
    data:{
        keywords
    }
    origin:"app"
    //当为get时候需要keywords参数，可根据姓名，手机号查询
}
//res
{
    err:true/false,
    data:[  //为get时候显示
        {
            _id:"",
            name:"姓名",
            email:"邮箱",
            number:"电话号",
            mobile:"手机号",
            position:"职位"
        }
    ]
}
```

### 获取详细信息

```
{
    url:"/api/infoPlus,
    method:"POST",
    origin:"urp",
    data:{
        username,
        urppassword,
        type:"cache/fresh"
    }
}
//res
{
    err:true/false,
    data:{
        ret:{
            name,
            idCard,
            national,
            highSchoolName,
            highSchoolExam,
            address,
            parents,
            college,
            major,
            className,
            room,
            political,
            pic//图片名称
        },
        pass:,
        type
    }
}
//在获取infoPlus过程中会获取校园卡照片，保存成"学号".jpg格式在public/pic下
//若图片已存在，则不会重新获取图片
```

### 获取考试安排

```
{
    url:"/api/examDate",
    method:"POST",
    date:{
        username,
        urppassword
    }
}
//res

{
    err:,
    data:{
        ret:[
            ["考试名","小区","教学楼","教室","课程","考试周次","考试星期","时间","座位号","准考证号"]
        ],
        pass:,
    }
}
```

### 获取新闻列表

```
{
    url:"api/newsList",
    method:"get",
    query:{
        pn:1,//默认为1
        type:"yw" //默认为yw要闻，mtjj媒体聚焦，xsjz学术讲座，xsqy学术前沿，tzgg通知公告
    },
    origin:"offical site"
}
//res
{
    err:{},
    data:{
        list:[
            {
                time:"",
                title:"",
                href:""
            }
        ]
    }
}
```

### 获取新闻详情

```
{
    url:"api/newsDetail",
    method:"get",
    query:{
        url:"为新闻列表项的  href "
    },
    origin:"offical site"
}
//res
{
    err:{},
    data:{
        list:[], //文章数组
        title:"文章名",
        meta:"文章信息"
    }
}
```

### 获取校历

```
{
    url:"/api/schoolDate",
    method:"GET"
}
//res
{
    err,
    data:{
        schoolDate:[
            {
                title:"2016-2017",
                pic:[
                    "图片1","图片2"
                ]
            }
        ]
    }
}
```

### 搜索Class
```
{
    url:'/api/searchClass',
    method:"POST",
    data:{
        keywords
    }
}
//res
{
    err,
    data:{
        list:[
            { //示例
                "semester": "2013-1",  
                "__v": 0,
                "kcsx": "必修",
                "bj": "2010海管1",
                "zc": "9-12周",
                "dd": "未知",
                "sj": "全天实践",
                "xf": "2",
                "js": "林志锋,褚晓琳,林全玲,唐议",
                "kxh": "01",
                "kch": "1706114",
                "xy": "未知"
            }
        ]
    }
}
```
