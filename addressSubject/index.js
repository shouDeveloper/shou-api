var db = require('../lib/db');
var fs = require('fs');

fs.readFile("./addressSubject/address.json", function(err, data) {
    if (err) {
        console.error(err);
    } else {
		var count="0";
        data = data.toString();
        var json = JSON.parse(data);
        var tmp = [];
        json.forEach((item) => {
			count++;
            var { name, email, number, mobile, position } = item;
            var s = new db.Address({
                name,
                email,
                number,
                mobile,
                position
            });
            tmp.push(s.save())
        });
        Promise.all(tmp).then((res) => {
            return new Promise((resolve, reject) => {
                fs.readFile("./addressSubject/subject.json", function(err, data) {
                    if (err) {
                        reject(err);
                    } else {
                        data = data.toString();
                        var json = JSON.parse(data);
                        resolve(json);
                    }
                })
            }).then((json) => {
                var tmp2 = [];
                json.forEach((item) => {
					count++;
                    var { semester, kcsx, bj, dd, sj, xf, js, kxh, kcm, kch, xy } = item;
                    var s = new db.Subject({
                        semester,
                        kcsx,
                        bj,
                        dd,
                        sj,
                        xf,
                        js,
                        kxh,
                        kcm,
                        kch,
                        xy
                    });
                    tmp2.push(s.save());
                });
                return Promise.all(tmp2);
            })
        }).then((res) => {
            console.log("通讯录和课程查询添加到数据库成功","共保存了："+count+"数据");
            process.exit();
        }).catch((err) => {
            console.error(err);
        })
    }
})