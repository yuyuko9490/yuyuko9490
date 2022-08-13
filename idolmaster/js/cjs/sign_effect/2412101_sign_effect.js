(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.reflect_mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("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");
	this.shape.setTransform(0.0133,0.0308);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect_mask, new cjs.Rectangle(-81.1,-157.1,162.3,314.29999999999995), null);


(lib.reflect_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// standard
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],0,297.1,0.1,-297).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect_inner, new cjs.Rectangle(0,0,300,1200), null);


(lib.glitter_inner_sphere = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,0.522,1],0,0,0,0,0,51.4).s().p("AlhFhQiSiSAAjPQAAjPCSiSQCSiSDPAAQDPAACSCSQCTCSAADPQAADPiTCSQiSCTjPAAQjPAAiSiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter_inner_sphere, new cjs.Rectangle(-50,-50,100,100), null);


(lib.reflect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// main
	this.lighter_tgt = new lib.reflect_inner();
	this.lighter_tgt.name = "lighter_tgt";
	this.lighter_tgt.parent = this;
	this.lighter_tgt.setTransform(0,-143.2,0.5757,0.5757,0,0,-20.0011);
	this.lighter_tgt.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.lighter_tgt).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect, new cjs.Rectangle(0,-202.2,162.3,404.5), null);


(lib.reflect_container_cjs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{flash:20});

	// timeline functions:
	this.frame_0 = function() {
		
		this.preview.visible = false;
		
	}
	this.frame_20 = function() {
		
		this.play();
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(19));

	// preview
	this.preview = new lib.reflect();
	this.preview.name = "preview";
	this.preview.parent = this;
	this.preview.setTransform(-0.5,-0.1,1,1,0,0,0,-0.5,-0.1);
	this.preview.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.preview).wait(39));

	// reflect
	this.instance = new lib.reflect();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,359.55,1,1,0,0,0,-0.5,0.1);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regY:-0.1,y:-0.1},9,cjs.Ease.get(-1)).to({regY:0.1,y:-359.35},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-561.7,162.3,1123.4);


(lib.glitter_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.glitter_inner_sphere();
	this.instance.parent = this;
	this.instance.setTransform(0,0.05,1.5,0.0862,-45);

	this.instance_1 = new lib.glitter_inner_sphere();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.3342,0.3342);

	this.instance_2 = new lib.glitter_inner_sphere();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-0.05,1.5,0.0862,45);

	this.instance_3 = new lib.glitter_inner_sphere();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter_inner, new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001), null);


(lib.glitter = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// flare
	this.lighter_tgt = new lib.glitter_inner();
	this.lighter_tgt.name = "lighter_tgt";
	this.lighter_tgt.parent = this;
	this.lighter_tgt.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.lighter_tgt).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter, new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001), null);


(lib.reflect_wrapper_2412101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cjs
	this.reflect = new lib.reflect_container_cjs();
	this.reflect.name = "reflect";
	this.reflect.parent = this;
	this.reflect.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.reflect).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect_wrapper_2412101, new cjs.Rectangle(0,-202.2,162.3,404.5), null);


(lib.glitter_container_cjs = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{loop:20});

	// timeline functions:
	this.frame_0 = function() {
		
		this.gotoAndPlay( Math.floor( Math.random() * 20 ) );
		
		//
		//_visible = false;
		//gotoAndPlay( random( 20 ) + 1 );
	}
	this.frame_20 = function() {
		
		
		//
		//_visible = true;
	}
	this.frame_50 = function() {
		
		this.gotoAndPlay( 0 );
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(30).call(this.frame_50).wait(1));

	// mc
	this.lux = new lib.glitter();
	this.lux.name = "lux";
	this.lux.parent = this;

	this.instance = new lib.glitter();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lux}]}).to({state:[]},1).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},9).to({state:[]},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({scaleX:0.7333,scaleY:0.7333,alpha:0.75},9,cjs.Ease.get(0.5)).to({scaleX:0.7,scaleY:0.7,alpha:0},9,cjs.Ease.get(-0.5)).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001);


(lib.glitter_wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cjs
	this.instance = new lib.glitter_container_cjs();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter_wrapper, new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001), null);


(lib.sign_effect_2412101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glitter
	this.instance = new lib.glitter_wrapper();
	this.instance.parent = this;
	this.instance.setTransform(465.45,582.6);

	this.instance_1 = new lib.glitter_wrapper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(602.25,357.3);

	this.instance_2 = new lib.glitter_wrapper();
	this.instance_2.parent = this;
	this.instance_2.setTransform(490.05,445.6);

	this.instance_3 = new lib.glitter_wrapper();
	this.instance_3.parent = this;
	this.instance_3.setTransform(530.75,518.25,0.7247,0.7247);

	this.instance_4 = new lib.glitter_wrapper();
	this.instance_4.parent = this;
	this.instance_4.setTransform(571.5,434.3,0.6923,0.6923);

	this.instance_5 = new lib.glitter_wrapper();
	this.instance_5.parent = this;
	this.instance_5.setTransform(617.85,574.5,0.6599,0.6599);

	this.instance_6 = new lib.glitter_wrapper();
	this.instance_6.parent = this;
	this.instance_6.setTransform(580.9,533.7);

	this.instance_7 = new lib.glitter_wrapper();
	this.instance_7.parent = this;
	this.instance_7.setTransform(486.05,349.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// mask_idn
	this.reflect_mask = new lib.reflect_mask();
	this.reflect_mask.name = "reflect_mask";
	this.reflect_mask.parent = this;
	this.reflect_mask.setTransform(541.85,461.8);
	this.reflect_mask.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.reflect_mask).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(311.5104,309.4942);

	// reflect
	this.reflect_wrapper = new lib.reflect_wrapper_2412101();
	this.reflect_wrapper.name = "reflect_wrapper";
	this.reflect_wrapper.parent = this;
	this.reflect_wrapper.setTransform(460.7,461.8);

	var maskedShapeInstanceList = [this.reflect_wrapper];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.reflect_wrapper).wait(1));

}).prototype = getMCSymbolPrototype(lib.sign_effect_2412101, new cjs.Rectangle(32,162.1,626.4,747.6999999999999), null);


(lib.replace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sign
	this.sign_effect = new lib.sign_effect_2412101();
	this.sign_effect.name = "sign_effect";
	this.sign_effect.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.sign_effect).wait(1));

}).prototype = getMCSymbolPrototype(lib.replace, new cjs.Rectangle(0,0,658.4,800), null);


// stage content:
(lib._2412101_sign_effect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// replace
	this.instance = new lib.replace();
	this.instance.parent = this;
	this.instance.setTransform(329.2,332,1,1,0,0,0,329.2,332);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(729.4,659.6,-71,4.5);
// library properties:
lib.properties = {
	id: '_2412101_sign_effect',
	width: 640,
	height: 800,
	fps: 18,
	color: "#333333",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['_2412101_sign_effect'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;