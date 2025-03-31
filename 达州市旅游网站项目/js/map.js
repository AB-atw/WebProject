var map = new BMapGL.Map('container'); // 创建Map实例
map.centerAndZoom(new BMapGL.Point(107.502262, 31.209484), 10); // 初始化地图,设置中心点坐标和地图级别
map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
map.addControl(scaleCtrl);
var zoomCtrl = new BMapGL.ZoomControl();  // 添加缩放控件
map.addControl(zoomCtrl);

// 创建定位控件
var locationControl = new BMapGL.LocationControl({
    // 控件的停靠位置（可选，默认左上角）
    anchor: BMAP_ANCHOR_TOP_RIGHT,
    // 控件基于停靠位置的偏移量（可选）
    offset: new BMapGL.Size(20, 20)
});
// 将控件添加到地图上
map.addControl(locationControl);

// 添加定位事件
locationControl.addEventListener("locationSuccess", function(e){
    var address = '';
    address += e.addressComponent.province;
    address += e.addressComponent.city;
    address += e.addressComponent.district;
    address += e.addressComponent.street;
    address += e.addressComponent.streetNumber;
    alert("当前定位地址为：" + address);
});
locationControl.addEventListener("locationError",function(e){
    alert(e.message);
});



// 创建城市选择控件
var cityControl = new BMapGL.CityListControl({
    // 控件的停靠位置（可选，默认左上角）
    anchor: BMAP_ANCHOR_TOP_LEFT,
    // 控件基于停靠位置的偏移量（可选）
    offset: new BMapGL.Size(10, 5)
});
// 将控件添加到地图上
map.addControl(cityControl);