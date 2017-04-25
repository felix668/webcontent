function pushHistory() {
    var state = {
        title: "title",
        url: "#"
    };
    window.history.pushState(state, "title", "#");
}

window.addEventListener("popstate", function(e) {
    $('.play_video').hide();
    $('.video')[0].pause();
    if($('.voice_close').css('display') == 'none'){
        $('.audio')[0].play();
    }
    webglPlayer.buttonSprite.visible = true;
}, false);

var webglPlayer = {
    //飞船
    firstPoint: {x: 0, y: 0},
    secondPoint: {x: 0, y: 0},
    objectFlag: false,
    nfactor: .5,
    raycaster: null,
    mouse: null,
    feichuan: null,
    maskTimeout:null,
    //通用
    container: null,
    camera: null,
    scene: null,
    renderer: null,
    light: null,
    flag: 1,
    fix: {x: 0, y: 0, z: 0},
    speed: 0,
    oldY: null,
    oldX: null,
    width: null,
    height: null,
    prev: 1,
    earthFlag: false,
    noEarthFlag: true,
    beginClientY: 0,
    endClientY: 0,
    beginClientX: 0,
    endClientX: 0,
    deta: 0,
    detaX: 0,
    rotateXSpeed:0,
    rotateYSpeed:0,
    isfirst: true,
    data: [],
    airSprite: null,
    buttonSprite:null,
    closeSprite:null,
    maskTipSprite:null,
    maskTipSprite1:null,
    maskTipSprite2:null,
    maskSprite:null,
    isLand: false,
    flyFront: false,
    firstPlay:true,
    init: function () {
        var _this = this;
        this.width = 640;
        this.height = window.innerHeight;
        if(this.height > 1140){
            this.height = 1140;
        }
        this.camera = new THREE.PerspectiveCamera(60, this.width / this.height, 0.01, 11000);
        this.camera.position.x = 0;
        this.camera.position.y = 0;

        //todo
        this.camera.position.z = 12000;
        this.camera.lookAt({
            x: 0,
            y: 0,
            z: 0
        });

        this.scene = new THREE.Scene();
        this.mouse = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();
        // A start
        // 第二个参数是光源强度，你可以改变它试一下
        this.light = new THREE.DirectionalLight(0xffffff, 1);
        // 位置不同，方向光作用于物体的面也不同，看到的物体各个面的颜色也不一样
        this.light.position.set(0, 0, 12000);
        this.scene.add(this.light);
        // A end

        $.each(picData, function (key, value) {
            if (key == 'data11') {
                _this.createSpriteOfPic1(value);
            } else if(key == 'data12'){
                _this.data[10] = _this.createSpriteOfPic(value);
            }else if(key == 'data13'){
                _this.data[11] = _this.createSpriteOfPic(value);
            }else {
                _this.data[parseInt(key.substring(4)) - 1] = _this.createSpriteOfPic(value);
            }
        });
        /*  this.data[0] = this.createSpriteOfPic(picData.data1);*/
        for (var i = 0; i < this.data.length; i++) {
            var temp = this.addScene(this.data[i]);

        }


        // model
        var manager = new THREE.LoadingManager();
        manager.onProgress = function (item, loaded, total) {
            console.log(item, loaded, total);
        };
        var onProgress = function (xhr) {
            if (xhr.lengthComputable) {
                /* var percentComplete = xhr.loaded / xhr.total * 100;
                 console.log( Math.round(percentComplete, 2) + '% downloaded' );*/
            }
        };
        var onError = function (xhr) {
        };
        // var texture = new THREE.Texture();
        // var loader = new THREE.ImageLoader(manager);
        // loader.load('images/color.jpg', function (image) {
        //     texture.image = image;
        //     texture.needsUpdate = true;
        // });

        var loader = new THREE.OBJLoader(manager);
        loader.load('models/obj/feichuan01.obj', function (object) {
            object.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material.map = texture;
                }
            });
            _this.feichuan = object;
            _this.feichuan.name = 'flybird';
            _this.feichuan.scale.x = .3;
            _this.feichuan.scale.y = .3;
            _this.feichuan.scale.z = .3;
            _this.feichuan.position.set(0, -5, 3531);
            _this.feichuan.rotation.x += 0.49979000244140576;
            _this.feichuan.rotation.y += 8.771039538574206;
            _this.scene.add(_this.feichuan);

        }, onProgress, onError);

        this.renderer = new THREE.WebGLRenderer({
            antialias: false,
            preserveDrawingBuffer: true
        });
        this.renderer = new THREE.WebGLRenderer({
            antialias: true, //是否开启反锯齿
            preserveDrawingBuffer: true, //是否保存绘图缓冲
            precision: "highp",    //着色精度选择
            preserveDrawingBuffer: true
        });
        this.renderer.shadowMapEnabled = true;
        //this.renderer.setClearColor( 0x000000 );
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);
        //this.renderer.sortObjects = false;
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
        this.container.appendChild(this.renderer.domElement);
        window.addEventListener('resize', this.onWindowResize, false);
        this.animate();
        $(document).bind('touchstart', touchstartEvent);
        $(document).bind('touchmove', touchmoveEvent);
        $(document).bind('touchend', touchendEvent);

        var videoEvent = false;
        function touchstartEvent(event) {
            // if (event.target.nodeName == 'VIDEO') {
            //     videoEvent = true;
            //     return;
            // }
            videoEvent = false;
            event.preventDefault();
            _this.mouse.x = ( event.touches[0].clientX / window.innerWidth ) * 2 - 1;
            _this.mouse.y = -( event.touches[0].clientY / window.innerHeight ) * 2 + 1;
            _this.raycaster.setFromCamera(_this.mouse, _this.camera);
            var intersects = null, intersects1 = null;

            //场景中有飞船
            for (var i = 0; i < _this.scene.children.length; i++) {
                if (_this.scene.children[i].name == 'flybird') {
                    intersects = _this.raycaster.intersectObjects(_this.scene.children[i].children);
                }
            }

            //场景中
            if(intersects){
                if (intersects.length > 0) {        //点击了飞船
                    _this.objectFlag = true;
                    _this.firstPoint.x = event.touches[0].clientX;
                    _this.firstPoint.y = event.touches[0].clientY
                } else {                            //没有点击飞船
                    intersects1 = _this.raycaster.intersectObjects(_this.scene.children);
                    if (intersects1.length > 0 && intersects1[0].object.name == 'button') { //点击了button
                        //这里播放视频
                        var ua = navigator.userAgent.toLowerCase();
                        if (/iphone|ipad|ipod/.test(ua)) {
                            $('.play_video').show();
                        } else if (/android/.test(ua)) {
                            setTimeout(function () {
                                $('.play_video').show();
                            }, 2500);
                        } else {
                            $('.play_video').show();
                        }
                        pushHistory();
                        $('.video')[0].play();
                        $('.audio')[0].pause();
                        wx.ready(function() {
                            WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
                                $('.video')[0].play();
                                $('.audio')[0].pause();
                            });
                        });
                        $('.video')[0].onended = function () {
                            _this.buttonSprite.visible = true;
                            $('.play_video').hide();
                            if($('.voice_close').css('display') == 'none'){
                                $('.audio')[0].play();
                            }
                        };
                    } else if(intersects1.length > 0 && intersects1[0].object.name == 'close'){
                        _this.maskShow = false;
                        _this.isLand1 = true;
                    }else if(intersects1.length > 0 && (intersects1[0].object.name == 'mask' || intersects1[0].object.name == 'maskTip')){       //点击了mask
                        _this.beginClientY = event.touches[0].clientY;
                        _this.beginClientX = event.touches[0].clientX;
                    } else {
                        //飞船前行代码
                        _this.flyFront = true;
                        _this.beginClientY = event.touches[0].clientY;
                    }
                }
            }else {         //飞船没有加载完全
                _this.flyFront = true;
                _this.beginClientY = event.touches[0].clientY;
            }
        }

        function touchmoveEvent(event) {
        }

        function touchendEvent(event) {
            _this.objectFlag = false;
            if(_this.maskShow){
                _this.endClientY = event.changedTouches[0].clientY;
                _this.endClientX = event.changedTouches[0].clientX;
                _this.deta = _this.beginClientY - _this.endClientY;
                _this.detaX = _this.beginClientX - _this.endClientX;
                setSpeed1(_this.detaX, _this.deta);
            }
            if (_this.flyFront && !_this.maskShow) {
                _this.endClientY = event.changedTouches[0].clientY;
                _this.deta = _this.beginClientY - _this.endClientY;
                setSpeed(_this.deta);
                _this.flyFront = false;
            }
        }

        function setSpeed1(detaX ,detaY){
            var absValue , speed = 0,value;
            value = Math.abs(detaX) > Math.abs(detaY) ?  detaX : detaY;
            k = value < 0 ? -1 : 1;
            absValue = Math.abs(value);
            speed = absValue / 100;
            if(Math.abs(detaX) > Math.abs(detaY)){
                _this.rotateYSpeed = k * speed;
                _this.rotateXSpeed = 0;
            }else{
                _this.rotateXSpeed = k * speed;
                _this.rotateYSpeed = 0;
            }
            if(_this.maskTimeout){
                window.clearTimeout(_this.maskTimeout);
            }
           _this.maskTimeout = setTimeout(function(){
                _this.rotateYSpeed = 0;
                _this.rotateXSpeed = 0;
            },2000);

        }

        function setSpeed(value) {
                var absValue = Math.abs(value), speed = 0, k = value < 0 ? -1 : 1;

                var isLandtemp = _this.isLand;
                if (absValue > 20) {
                    absValue = absValue > 200 ? 200 : absValue;
                    speed = absValue / 10;
                    _this.isLand = false;
                }
                _this.speed = k * speed;

            if(_this.camera.position.z == 3020){
                if(k == 1 && absValue > 20){
                    _this.speed = 1;
                }else{
                    _this.isLand = isLandtemp;
                    _this.speed = 0;
                }

            }

        }
    },

    createSpriteOfPic: function (picArray) {
        var _this = this;
        var group = new THREE.Group;
        group.childs = [];
        $.each(picArray, function (k, pic) {
            var g = new THREE.SpriteMaterial({map: (new THREE.TextureLoader).load(pic.url)});
            var sprite = new THREE.Sprite(g);
            sprite.position.set(pic.x, pic.y, pic.z);
            sprite.scale.set(pic.s * pic.w, pic.s * pic.h, 1);
            sprite.name = pic.name;
            group.add(sprite);
            group.childs.push(sprite);

        });
        return group;
    },
    createSpriteOfPic1: function (picArray) {
        var _this = this;
        $.each(picArray, function (k, pic) {
            var g = new THREE.SpriteMaterial({map: (new THREE.TextureLoader).load(pic.url)});
            var sprite = new THREE.Sprite(g);
            sprite.position.set(pic.x, pic.y, pic.z);
            sprite.scale.set(pic.s * pic.w, pic.s * pic.h, 1);
            sprite.name = pic.name;

            if (pic.name == 'air') {
                _this.airSprite = sprite;
                _this.scene.add(_this.airSprite);
            }else if(pic.name == 'button'){
                _this.buttonSprite = sprite;
                _this.scene.add(_this.buttonSprite);
            }else if(pic.name == 'mask'){
                _this.maskSprite = sprite;
                _this.scene.add(_this.maskSprite);
            } else if(pic.name == 'close'){
                _this.closeSprite = sprite;
                _this.scene.add(_this.closeSprite);
            }else if(pic.name == 'maskTip'){
                _this.maskTipSprite = sprite;
                _this.scene.add(_this.maskTipSprite);
            }else if(pic.name == 'maskTip1'){
                _this.maskTipSprite1 = sprite;
                _this.scene.add(_this.maskTipSprite1);
            } else if(pic.name == 'maskTip2'){
                _this.maskTipSprite2 = sprite;
                _this.scene.add(_this.maskTipSprite2);
            } else {
                _this.scene.add(sprite);
            }
        });
    },
    addScene: function (scenes) {
        this.scene.add(scenes);
    },
    addScene10: function () {
        this.scene.add(this.data[9]);
    },
    removeScene10: function () {
        this.scene.remove(this.data[9]);
    },
    updataScene: function () {
        for (var i = 0; i < this.data.length; i++) {
            this.scene.remove(this.data[i]);
        }
        if (this.camera.position.z > 11e3) {
            this.scene.add(this.data[0]);
        } else if (this.camera.position.z > 1e4) {
            this.scene.add(this.data[1]);
        } else if (this.camera.position.z > 9e3) {
            this.isfirst = false;
            this.scene.add(this.data[2]);
        } else if (this.camera.position.z > 8e3) {
            this.scene.add(this.data[3]);
        } else if (this.camera.position.z > 7e3) {
            this.scene.add(this.data[4]);
        } else if (this.camera.position.z > 6e3) {
            this.scene.add(this.data[5]);
        } else if (this.camera.position.z > 5e3) {
            this.scene.add(this.data[6]);
        } else if (this.camera.position.z > 4e3) {
            this.scene.add(this.data[7]);
        } else if (this.camera.position.z > 3e3) {
            this.scene.add(this.data[8]);
        } else if (this.camera.position.z > 2e3) {
            this.scene.add(this.data[9]);
        } else if (this.camera.position.z > 1e3) {
            this.scene.add(this.data[10]);
        }
    },
    conX:0,
    conY:0,
    nX:9800,
    nY:12500,
    sign:[],
    signStepX:[],
    signStepY:[],
    initSignFlag:false,
    firstRemoveFly:true,
    isLand1:false,
    isFirstFlash:true,
    isButtonSpriteFlag:true,
    maskShow:false,
    lastAnimateTime: 0,
    fromLand:false,
    animate: function () {
        var _this = this;
        if(this.buttonSprite && _this.isButtonSpriteFlag){
            this.buttonSprite.visible = false;
            this.isButtonSpriteFlag = false;
        }

        if(this.camera.position.z > 11355){
            this.airSprite.visible = false;
        }else{
            this.airSprite.visible = true;
        }

      /*  if(this.firstPlay == true){
            _this.buttonSprite.visible = false;
        }else{
            _this.buttonSprite.visible = true;
        }*/

        if(this.firstRemoveFly && this.data[9]){
            this.firstRemoveFly = false;
            this.removeScene10();
        }

        // TODO 相机范围  第一页陨石动效
        if(this.data.length > 0){
            for(var i = 0; i < this.data[0].children.length; i++){
                if(this.data[0].children[i].name == 'stone'){
                    var obj = this.data[0].children[i];
                    if(!_this.initSignFlag){
                        if(Math.random() > 0.5){
                            _this.sign[i]= -1;
                            _this.signStepX[i] =  Math.random()*(0.3 + Math.random()*0.2);
                            _this.signStepY[i] =  Math.random()*(0.3 + Math.random()*0.2);
                        }else{
                            _this.sign[i] = 1;
                            _this.signStepX[i] =  Math.random()*(0.4 + Math.random()*0.2);
                            _this.signStepY[i] =  Math.random()*(0.6 + Math.random()*0.2);
                        }
                    }
                    this.conX++;
                    this.conY++;
                    if(this.conX % this.nX < this.nX / 2){
                        obj.position.x +=  _this.sign[i] * _this.signStepX[i];
                    }else{
                        obj.position.x -= _this.sign[i] * _this.signStepX[i];
                        this.conX = this.conX % this.nX;
                    }
                    if(this.conY % this.nY < this.nY / 2){
                        obj.position.y += _this.sign[i] * _this.signStepY[i];
                    }else{
                        obj.position.y -= _this.sign[i] * _this.signStepY[i];
                        this.conY = this.conY % this.nY;
                    }

                }
            }
            _this.initSignFlag = true;
        }

        // TODO 范围？？  星星闪动
        if(this.data.length > 0){
            var now = (new Date()).getTime();
            if (_this.lastAnimateTime == 0) {
                for(var k = 0; k < 5; k++) {
                    _this.data[10].children[k].visible = false;
                    _this.data[10].children[k].ts = now + Math.floor(Math.random() * 200) + 500;
                }
                for(var k = 0; k < 6; k++) {
                    _this.data[11].children[k].visible = false;
                    _this.data[11].children[k].ts = now + Math.floor(Math.random() * 200) + 500;
                }
                _this.lastAnimateTime = now;
            } else {
                for(var k = 0; k < 5; k++) {
                    if (now > _this.data[10].children[k].ts) {
                        _this.data[10].children[k].visible = !_this.data[10].children[k].visible;
                        _this.data[10].children[k].ts = now + Math.floor(Math.random() * 200) + 500;
                    }
                }
                for(var k = 0; k < 6; k++) {
                    if (now > _this.data[11].children[k].ts) {
                        _this.data[11].children[k].visible = !_this.data[10].children[k].visible;
                        _this.data[11].children[k].ts = now + Math.floor(Math.random() * 200) + 500;
                    }
                }
            }
            if(this.isFirstFlash && false){
                //星星闪动

                window.setInterval(function(){
                    _this.data[10].children[0].visible = false;
                    _this.data[11].children[0].visible = false;
                    window.setTimeout(function(){
                        _this.data[10].children[0].visible = true;
                        _this.data[11].children[0].visible = true;
                    },800);
                },3000);
                window.setInterval(function(){
                    window.setTimeout(function(){
                        _this.data[10].children[1].visible = false;
                        _this.data[11].children[1].visible = false;
                        window.setTimeout(function(){
                            _this.data[10].children[1].visible = true;
                            _this.data[11].children[1].visible = true;
                        },400);
                    },600);

                },3000);
                window.setInterval(function(){
                    window.setTimeout(function(){
                        _this.data[10].children[2].visible = false;
                        _this.data[11].children[2].visible = false;
                        window.setTimeout(function(){
                            _this.data[10].children[2].visible = true;
                            _this.data[11].children[2].visible = true;
                        },400);
                    },1400);

                },3000);
                window.setInterval(function(){
                    window.setTimeout(function(){
                        _this.data[10].children[3].visible = false;
                        _this.data[11].children[3].visible = false;
                        window.setTimeout(function(){
                            _this.data[10].children[3].visible = true;
                            _this.data[11].children[3].visible = true;
                        },400);
                    },2000);

                },3000);
                window.setInterval(function(){
                    window.setTimeout(function(){
                        _this.data[10].children[4].visible = false;
                        _this.data[11].children[4].visible = false;
                        window.setTimeout(function(){
                            _this.data[10].children[4].visible = true;
                            _this.data[11].children[4].visible = true;
                        },400);
                    },1000);

                },3000);
                window.setInterval(function(){
                    window.setTimeout(function(){
                        _this.data[10].children[5].visible = false;
                        _this.data[11].children[5].visible = false;
                        window.setTimeout(function(){
                            _this.data[10].children[5].visible = true;
                            _this.data[11].children[5].visible = true;
                        },800);
                    },1700);

                },3000);
                window.setInterval(function(){
                    window.setTimeout(function(){
                        _this.data[10].children[6].visible = false;
                        window.setTimeout(function(){
                            _this.data[10].children[6].visible = true;
                        },400);
                    },400);

                },3000);
            }
            this.isFirstFlash = false;
        }

        //天空位置
        if (this.airSprite) {
            this.airSprite.position.z = this.camera.position.z - 900;
        }



        //飞船着陆状态，模态显示i状态
        if (this.feichuan) {
                this.feichuan.rotation.x -= _this.rotateXSpeed * .01;
                this.feichuan.rotation.y -= _this.rotateYSpeed * 0.02;
                this.feichuan.rotation.z = 0;
        }


        if(this.feichuan){
            if(!this.isLand1 && this.camera.position.z < 3645 && this.camera.position.z > 3630){
                this.camera.position.z = 3636;
                this.isLand = false;
            }else if(this.camera.position.z < 3100){
                this.isLand = true;
            }else{
                this.isLand = false;
            }
        }

        if( this.camera){
            if(this.camera.position.z > 3636){
                this.isLand1 = false;
            }

            if(this.camera.position.z < 3600){
                this.isLand1 = true;
            }

            //暂停突出飞船
            if(!this.isLand1  && this.camera.position.z == 3636){
                this.maskSprite.visible = true;
                _this.maskTipSprite.visible = true;
                setTimeout(function(){
                    _this.maskTipSprite1.visible = true;
                },500);
                setTimeout(function(){
                    _this.maskTipSprite2.visible = true;
                },1000);
                setTimeout(function () {
                    _this.closeSprite.visible = true;
                },1500);

                this.maskShow = true;
            }else{
                this.maskSprite.visible = false;
                this.maskTipSprite.visible = false;
                this.maskTipSprite1.visible = false;
                this.maskTipSprite2.visible = false;
                this.closeSprite.visible = false;
                this.maskShow = false;
            }


        }

        if (this.camera.position.z < 3014) {
            if (this.noEarthFlag) {
                this.addScene10();
                if(this.firstPlay == true){
                    _this.buttonSprite.visible = false;
                }else{
                    _this.buttonSprite.visible = true;
                }
                //this.buttonSprite.visible = true;
                this.noEarthFlag = false;
                this.earthFlag = true;
            }
        } else {
            if (this.earthFlag) {
                this.removeScene10();
                this.buttonSprite.visible = false;
                this.noEarthFlag = true;
                this.earthFlag = false;
            }
        }

        if (this.camera.position.z < 3000) {
            this.camera.position.z = 3000;
            if(this.firstPlay == true){
                // this.firstPlay = false;
                // var ua = navigator.userAgent.toLowerCase();
                // if (/iphone|ipad|ipod/.test(ua)) {
                //     $('.play_video').show();
                // } else if (/android/.test(ua)) {
                //     setTimeout(function () {
                //         $('.play_video').show();
                //     }, 2500);
                // } else {
                //     $('.play_video').show();
                // }

                pushHistory();
                // $('.video')[0].play();
                // $('.audio')[0].pause();
                // wx.ready(function() {
                //     WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
                //         $('.video')[0].play();
                //         $('.audio')[0].pause();
                //     });
                // });
                // $('.video')[0].onended = function () {
                //     _this.buttonSprite.visible = true;
                //     $('.play_video').hide();
                //     if($('.voice_close').css('display') == 'none'){
                //         $('.audio')[0].play();
                //     }
                // };
            }
        }


        if (this.oldY === null) {
            this.oldY = this.camera.rotation.y;
            this.oldX = this.camera.rotation.x;
        }

        var rotationFactory = 0.3;
        if (this.earthFlag) {
            rotationFactory = 0;
        }

        //todo
        this.camera.rotation.y = this.oldY + rotationFactory * (2 * this.fix.x + 0.008);
        this.camera.rotation.x = this.oldX + rotationFactory * (2 * (this.fix.y - 0.292));

        if (this.camera.position.z >= 12e3 && this.speed > 0) {
            this.camera.position.z = 12e3;
            this.speed = 0;
        }

        //相机的位置
        if( this.camera && this.camera.position.z < 3600){
            var k;
            k = this.speed > 0 ? 1 : -1;
            this.camera.position.z = this.camera.position.z + 30 * k;
        }else{
            this.camera.position.z = this.camera.position.z + 5 * this.speed;
        }

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(function () {
            _this.animate();
        });

    },
    onWindowResize: function () {
        this.width = $(window).width();
        this.height = $(window).height();
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.width, this.height);
    },
};
