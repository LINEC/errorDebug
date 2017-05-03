/**
 * Created by yx on 2017/5/3.
 */
var template = require('art-template');

var data = {list: ["aui", "test"]};
var html = template(__dirname + '/index/main', data);