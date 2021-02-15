// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: Essex-25arrowood.ggsk
// Generated 2021-01-30T12:39:49

function pano2vrSkin(player,base) {
	player.addVariable('show_map', 2, true);
	player.addVariable('stages', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._logo=document.createElement('div');
		el.ggId="LOGO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -1px;';
		hs+='height : 51px;';
		hs+='position : absolute;';
		hs+='right : -49px;';
		hs+='visibility : inherit;';
		hs+='width : 199px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 100%';
		me._logo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._logo.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgODQgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NCA1MDsiIHk9Ij'+
			'BweCI+CiA8cGF0aCBkPSJNMzcsNy4zYzkuMSwwLDE4LjIsMCwyNy4yLDBjMi40LDAsMy4zLDAuOSwzLjMsMy4zYzAsNi44LDAsMTMuNywwLDIwLjVjMCwyLjMtMC45LDMuMi0zLjMsMy4yYy0xOC4yLDAtMzYuNSwwLTU0LjcsMCYjeGE7JiN4OTtjLTIuNCwwLTMuMi0wLjktMy4yLTMuM2MwLTYuOSwwLTEzLjgsMC0yMC42YzAtMi4zLDAuOS0zLjIsMy4yLTMuMkMxOC42LDcuMywyNy44LDcuMywzNyw3LjN6IE0zNywxMC40Yy04LjIsMC0xNi40LDAtMjQuNiwwJiN4YTsmI3g5O2MtMiwwLTMsMS0zLDNjMCw1LDAsOS45LDAsMTQuOWMwLDIuMSwwLjksMy4xLDMuMSwzLjFjMTYuMywwLDMyLjYsMCw0'+
			'OC45LDBjMi4yLDAsMy4xLTAuOSwzLjEtMy4yYzAtNC45LDAtOS44LDAtMTQuNiYjeGE7JiN4OTtjMC0yLjItMC45LTMuMS0zLjEtMy4xQzUzLjIsMTAuNCw0NS4xLDEwLjQsMzcsMTAuNHoiLz4KIDxwYXRoIGQ9Ik01MC45LDQzLjRjLTcuNiwwLTE1LjIsMC0yMi44LDBjLTAuNCwwLTAuOSwwLjEtMS4yLTAuMWMtMC40LTAuMy0xLjEtMC44LTEtMS4yYzAtMC40LDAuNi0wLjksMS4xLTEuMWMwLjMtMC4yLDAuOCwwLDEuMiwwJiN4YTsmI3g5O2MxNC4yLDAsMjguNSwwLDQyLjcsMGMwLjQsMCwwLjgsMCwxLjIsMGMxLjYtMC4xLDIuMy0wLjgsMi4zLTIuNGMwLTQuMywwLTguNiwwLTEzYzAtMi4yLD'+
			'AtNC41LDAtNi43YzAtMC45LDAtMS45LDEuMi0xLjkmI3hhOyYjeDk7YzEuMiwwLDEuMiwxLDEuMiwxLjhjMCw3LjMsMCwxNC42LDAsMjJjMCwyLTAuNywyLjYtMi43LDIuNkM2Ni4zLDQzLjQsNTguNiw0My40LDUwLjksNDMuNHoiLz4KIDxwYXRoIGQ9Ik00Ni43LDM5LjJjLTcuNywwLTE1LjMsMC0yMywwYy0wLjQsMC0wLjgsMC4xLTEuMS0wLjFjLTAuNC0wLjMtMC45LTAuOC0wLjktMS4yYzAtMC40LDAuNS0wLjgsMS0xLjFjMC4zLTAuMiwwLjcsMCwxLjEsMCYjeGE7JiN4OTtjMTQuNSwwLDI4LjksMCw0My40LDBjMi41LDAsMy0wLjYsMy0zYzAtNi40LDAtMTIuNywwLTE5LjFjMC0wLjQtMC4x'+
			'LTAuOCwwLjEtMWMwLjMtMC40LDAuOC0wLjgsMS4zLTAuOGMwLjMsMCwwLjgsMC41LDEsMC45JiN4YTsmI3g5O2MwLjEsMC4yLDAsMC42LDAsMC45YzAsNy4yLDAsMTQuNCwwLDIxLjZjMCwyLjMtMC42LDIuOS0yLjksMi45QzYyLDM5LjIsNTQuMywzOS4yLDQ2LjcsMzkuMnoiLz4KIDxwYXRoIGQ9Ik0zMi4yLDE0LjhjMi4xLDAsNC4yLTAuMiw2LjIsMC4xYzIuNCwwLjMsNCwyLjMsNC4yLDQuNmMwLjMsMy4xLTAuOSw1LjQtMy4yLDYuNGMtMi4zLDEtNC43LDAuNy03LjEsMC42JiN4YTsmI3g5O0MzMi4yLDIyLjUsMzIuMiwxOC43LDMyLjIsMTQuOHogTTM0LjksMTYuN2MwLDIuNiwwLDUsMCw3Lj'+
			'VjMS42LDAuNCwzLjIsMCw0LTEuMmMwLjktMS4zLDEuMS0zLjYsMC4yLTQuOSYjeGE7JiN4OTtDMzguMiwxNi42LDM2LjcsMTYuNSwzNC45LDE2Ljd6Ii8+CiA8cGF0aCBkPSJNMjkuOCwyNi40Yy0wLjksMC0xLjYsMC0yLjYsMGMwLTEuNiwwLTMuMiwwLTQuOGMtMS41LDAtMi45LDAtNC4zLDBjMCwxLjYsMCwzLjEsMCw0LjhjLTAuOSwwLTEuOCwwLTIuNywwJiN4YTsmI3g5O2MwLTMuOSwwLTcuNywwLTExLjdjMC45LDAsMS43LDAsMi43LDBjMCwxLjUsMCwyLjksMCw0LjRjMS40LDAsMi44LDAsNC4zLDBjMC0xLjUsMC0yLjksMC00LjRjMSwwLDEuOCwwLDIuNiwwJiN4YTsmI3g5O0MyOS44LDE4'+
			'LjYsMjkuOCwyMi41LDI5LjgsMjYuNHoiLz4KIDxwYXRoIGQ9Ik01My4zLDI2LjRjLTEsMC0xLjcsMC4xLTIuNCwwYy0wLjMsMC0wLjYtMC40LTAuOC0wLjdjLTAuMy0wLjctMC40LTEuNS0wLjctMi4zQzQ5LjEsMjIsNDguNywyMS43LDQ3LDIyYzAsMS40LDAsMi45LDAsNC40JiN4YTsmI3g5O2MtMSwwLTEuOCwwLTIuNywwYzAtMy45LDAtNy43LDAtMTEuOGMxLjcsMCwzLjQtMC4xLDUsMGMxLjUsMC4xLDIuOCwwLjcsMy4zLDIuM2MwLjQsMS43LTAuMiwzLTEuNCwzLjcmI3hhOyYjeDk7QzUxLjksMjIuNiw1Mi42LDI0LjQsNTMuMywyNi40eiBNNDcuMSwxOS44YzEuMSwwLDIuMSwwLjMsMi43LT'+
			'AuOGMwLjItMC40LDAuMy0xLjIsMC0xLjZjLTAuNi0xLTEuNy0wLjgtMi43LTAuNiYjeGE7JiN4OTtDNDcuMSwxNy43LDQ3LjEsMTguNyw0Ny4xLDE5Ljh6Ii8+Cjwvc3ZnPgo=';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 33px;';
		hs+='left : 76px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._logo.appendChild(me._svg_1);
		me.divSkin.appendChild(me._logo);
		el=me._sidemenu=document.createElement('div');
		el.ggId="sidemenu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 208px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 67px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sidemenu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sidemenu.ggUpdatePosition=function (useTransition) {
		}
		el=me._tliving=document.createElement('div');
		els=me._tliving__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwIDUwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzM5MUQ1NTt9Cgkuc3Qxe2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLnN0MntmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxOTciIHg9IjEuNSIgeT0iMS41IiBoZWlnaHQ9IjQ3Ii8+CiA8L2c+CiA8ZyBjbGFzcz0ic3QxIj4KICA8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjIuNiwxMi4zaDR2MjEuNmg2LjV2My42SDIyLjZWMTIuM3oiLz4KICA8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMzYuOCwxMi4zaDR2MjUuMmgtNFYxMi4zeiIv'+
			'PgogIDxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik01MS42LDMyLjlsMy0yMC42aDMuNmwtMy45LDI1LjJoLTUuOWwtMy45LTI1LjJoNEw1MS42LDMyLjl6Ii8+CiAgPHBhdGggY2xhc3M9InN0MiIgZD0iTTYyLjEsMTIuM2g0djI1LjJoLTRWMTIuM3oiLz4KICA8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNzQuNCwxOS4ydjE4LjJoLTMuNlYxMi4zaDVsNC4xLDE1LjFWMTIuM2gzLjV2MjUuMmgtNC4xTDc0LjQsMTkuMnoiLz4KICA8cGF0aCBjbGFzcz0ic3QyIiBkPSJNOTQuMiwyMy41aDUuNXY4YzAsNC0yLDYuMy01LjksNi4zYy0zLjksMC01LjktMi4zLTUuOS02LjNWMTguNGMwLTQsMi02LjMsNS45LTYuM2'+
			'MzLjksMCw1LjksMi4zLDUuOSw2LjN2Mi40JiN4YTsmI3g5OyYjeDk7SDk2di0yLjdjMC0xLjgtMC44LTIuNS0yLjEtMi41cy0yLjEsMC43LTIuMSwyLjV2MTMuNmMwLDEuOCwwLjgsMi40LDIuMSwyLjRzMi4xLTAuNiwyLjEtMi40di00LjZoLTEuOFYyMy41eiIvPgogIDxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjAuMSwzNy41Yy0wLjItMC42LTAuNC0xLTAuNC0zLjF2LTRjMC0yLjMtMC44LTMuMi0yLjYtMy4yaC0xLjR2MTAuM2gtNFYxMi4zaDZjNC4xLDAsNS45LDEuOSw1LjksNS44djImI3hhOyYjeDk7JiN4OTtjMCwyLjYtMC44LDQuMy0yLjYsNS4xYzIsMC44LDIuNiwyLjcsMi42LDUuNHYz'+
			'LjljMCwxLjIsMCwyLjEsMC40LDMuMUgxMjAuMXogTTExNS44LDE1Ljl2Ny43aDEuNWMxLjUsMCwyLjQtMC42LDIuNC0yLjd2LTIuNSYjeGE7JiN4OTsmI3g5O2MwLTEuOC0wLjYtMi42LTItMi42SDExNS44eiIvPgogIDxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjgsMTguNGMwLTQsMi4xLTYuMyw2LTYuM2MzLjksMCw2LDIuMyw2LDYuM3YxMy4xYzAsNC0yLjEsNi4zLTYsNi4zYy0zLjksMC02LTIuMy02LTYuM1YxOC40eiBNMTMxLjksMzEuNyYjeGE7JiN4OTsmI3g5O2MwLDEuOCwwLjgsMi41LDIuMSwyLjVzMi4xLTAuNywyLjEtMi41VjE4LjFjMC0xLjgtMC44LTIuNS0yLjEtMi41cy0yLjEsMC'+
			'43LTIuMSwyLjVWMzEuN3oiLz4KICA8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTQ0LjIsMTguNGMwLTQsMi4xLTYuMyw2LTYuM3M2LDIuMyw2LDYuM3YxMy4xYzAsNC0yLjEsNi4zLTYsNi4zcy02LTIuMy02LTYuM1YxOC40eiBNMTQ4LjIsMzEuNyYjeGE7JiN4OTsmI3g5O2MwLDEuOCwwLjgsMi41LDIuMSwyLjVzMi4xLTAuNywyLjEtMi41VjE4LjFjMC0xLjgtMC44LTIuNS0yLjEtMi41cy0yLjEsMC43LTIuMSwyLjVWMzEuN3oiLz4KICA8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTY5LjIsMzAuMmwyLjctMTcuOWg1LjV2MjUuMmgtMy43VjE5LjRsLTIuNywxOC4xaC0zLjdsLTMtMTcuOHYxNy44aC0z'+
			'LjVWMTIuM2g1LjVMMTY5LjIsMzAuMnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._tliving__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="T-Living";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tliving.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tliving.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me._tliving.onmouseover=function (e) {
			me._tliving.style[domTransition]='none';
			me._tliving.style.opacity='0.6';
			me._tliving.style.visibility=me._tliving.ggVisible?'inherit':'hidden';
		}
		me._tliving.onmouseout=function (e) {
			me._tliving.style[domTransition]='none';
			me._tliving.style.opacity='1';
			me._tliving.style.visibility=me._tliving.ggVisible?'inherit':'hidden';
		}
		me._tliving.ggUpdatePosition=function (useTransition) {
		}
		me._sidemenu.appendChild(me._tliving);
		el=me._tdining=document.createElement('div');
		els=me._tdining__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwIDUwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzM5MUQ1NTt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjE5NyIgeD0iMS41IiB5PSIxLjUiIGhlaWdodD0iNDciLz4KIDwvZz4KIDxnIGlkPSJURVhUIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjYuMiwxMy4yYzQsMCw2LjEsMi4yLDYuMSw2LjF2MTJjMCw0LTIuMSw2LjEtNi4xLDYuMWgtNS4zVjEzLjJIMjYuMnogTTI0LjYsMzQuMUgyNmMxLjgsMCwyLjYtMC45LDIuNi0zJiN4YTsmI3g5OyYjeDk7VjE5LjZjMC0y'+
			'LTAuOC0zLTIuNi0zaC0xLjRWMzQuMXoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzYuOSwzNy41di0yNGwzLjctMC4zdjI0LjNIMzYuOXoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTMuOSwzNy41bC00LjgtMTYuMUg0OXYxNi4xaC0zLjRWMTMuMmg0LjFMNTQsMjcuN2gwLjFWMTMuMmgzLjV2MjQuM0g1My45eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02Mi41LDM3LjV2LTI0bDMuNy0wLjN2MjQuM0g2Mi41eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik03OS42LDM3LjVsLTQuOC0xNi4xaC0wLjF2MTYuMWgtMy41VjEzLjJoNC4xbDQuMywxNC41aDAuMVYxMy4yaDMuNX'+
			'YyNC4zSDc5LjZ6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTk5LjMsMTguN3YxbC0zLjUsMC45di0xLjVjMC0xLjktMC43LTIuOC0yLjItMi44cy0yLjIsMC45LTIuMiwyLjVWMzJjMCwxLjYsMC43LDIuNSwyLjEsMi41czIuMS0wLjksMi4xLTIuOCYjeGE7JiN4OTsmI3g5O3YtNC4yaC0yLjF2LTMuNGg1LjdWMzJjMCwzLjctMi4xLDUuOC01LjgsNS44cy01LjctMi4xLTUuNy01LjhWMTguN2MwLTMuNywyLjEtNS44LDUuNy01LjhTOTkuMywxNSw5OS4zLDE4Ljd6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTExNi41LDI3LjJoLTEuN3YxMC4zaC0zLjdWMTMuMmg1LjNjNCwwLDYuMSwy'+
			'LjIsNi4xLDYuMVYyMWMwLDIuNi0wLjksNC40LTIuNiw1LjRsMy40LDExLjFoLTMuOUwxMTYuNSwyNy4yeiYjeGE7JiN4OTsmI3g5OyBNMTE0LjgsMjMuOGgxLjVjMS44LDAsMi42LTAuOSwyLjYtM3YtMS4yYzAtMi0wLjgtMy0yLjYtM2gtMS41VjIzLjh6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTEzOC41LDE5djEyLjdjMCwzLjgtMi4zLDYuMS01LjksNi4xcy01LjktMi4zLTUuOS02LjFWMTljMC0zLjgsMi4zLTYuMSw1LjktNi4xUzEzOC41LDE1LjIsMTM4LjUsMTl6JiN4YTsmI3g5OyYjeDk7IE0xMzAuMywxOXYxMi43YzAsMS44LDAuOCwyLjgsMi4yLDIuOHMyLjMtMSwyLjMtMi44Vj'+
			'E5YzAtMS44LTAuOC0yLjgtMi4zLTIuOFMxMzAuMywxNy4yLDEzMC4zLDE5eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNTQuNiwxOXYxMi43YzAsMy44LTIuMyw2LjEtNS45LDYuMXMtNS45LTIuMy01LjktNi4xVjE5YzAtMy44LDIuMy02LjEsNS45LTYuMVMxNTQuNiwxNS4yLDE1NC42LDE5eiYjeGE7JiN4OTsmI3g5OyBNMTQ2LjQsMTl2MTIuN2MwLDEuOCwwLjgsMi44LDIuMiwyLjhzMi4zLTEsMi4zLTIuOFYxOWMwLTEuOC0wLjgtMi44LTIuMy0yLjhTMTQ2LjQsMTcuMiwxNDYuNCwxOXoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTcxLjEsMzcuNVYyMC42SDE3MUwxNjcuNiwz'+
			'NGgtMS41bC0zLjQtMTMuNGgtMC4xdjE2LjloLTMuNVYxMy4yaDQuOGwyLjksMTNoMC4xbDIuOC0xM2g1djI0LjNIMTcxLjF6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._tdining__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="T-Dining";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tdining.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tdining.onclick=function (e) {
			player.openNext("{node2}","");
		}
		me._tdining.onmouseover=function (e) {
			me._tdining.style[domTransition]='none';
			me._tdining.style.opacity='0.6';
			me._tdining.style.visibility=me._tdining.ggVisible?'inherit':'hidden';
		}
		me._tdining.onmouseout=function (e) {
			me._tdining.style[domTransition]='none';
			me._tdining.style.opacity='1';
			me._tdining.style.visibility=me._tdining.ggVisible?'inherit':'hidden';
		}
		me._tdining.ggUpdatePosition=function (useTransition) {
		}
		me._sidemenu.appendChild(me._tdining);
		el=me._tkitchen=document.createElement('div');
		els=me._tkitchen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwIDUwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzM5MUQ1NTt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjE5NyIgeD0iMS41IiB5PSIxLjUiIGhlaWdodD0iNDciLz4KIDwvZz4KIDxnIGlkPSJURVhUIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjIuMywzNy41aC0zLjlsLTMuNi0xMC42bC0xLjYsMi44djcuOWgtMy43VjEzLjJoMy43djEwLjFoMC4xbDUuMS0xMC4xaDMuOGwtNSw5LjZMNjIuMywzNy41eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02NS42LDM3'+
			'LjV2LTI0bDMuNy0wLjN2MjQuM0g2NS42eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04MC4yLDE2Ljd2MjAuOGgtMy43VjE2LjdoLTMuOXYtMy41aDExLjV2My41SDgwLjJ6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTk4LjQsMTguN3YxLjVsLTMuNSwwLjl2LTJjMC0xLjktMC43LTIuOC0yLjEtMi44cy0yLjEsMC45LTIuMSwyLjVWMzJjMCwxLjYsMC43LDIuNSwyLjEsMi41czIuMS0wLjksMi4xLTIuOCYjeGE7JiN4OTsmI3g5O1YyOWwzLjUsMC41VjMyYzAsMy43LTIuMSw1LjgtNS43LDUuOFM4NywzNS43LDg3LDMyVjE4LjdjMC0zLjcsMi4xLTUuOCw1LjctNS44Uzk4LjQsMTUsOT'+
			'guNCwxOC43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMTAuNiwzNy41VjI2LjloLTQuNHYxMC42aC0zLjdWMTMuMmgzLjd2MTAuMmg0LjRWMTMuMmgzLjd2MjQuM0gxMTAuNnoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTIzLDE2LjZ2Ni45aDUuNGwtMC40LDMuNGgtNXY3LjJoNi43djMuNGgtMTAuNFYxMy4yaDEwLjN2My40SDEyM3oiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQyLjIsMzcuNWwtNC44LTE2LjFoLTAuMXYxNi4xaC0zLjVWMTMuMmg0LjFsNC4zLDE0LjVoMC4xVjEzLjJoMy41djI0LjNIMTQyLjJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._tkitchen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="T-Kitchen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tkitchen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tkitchen.onclick=function (e) {
			player.openNext("{node3}","");
		}
		me._tkitchen.onmouseover=function (e) {
			me._tkitchen.style[domTransition]='none';
			me._tkitchen.style.opacity='0.6';
			me._tkitchen.style.visibility=me._tkitchen.ggVisible?'inherit':'hidden';
		}
		me._tkitchen.onmouseout=function (e) {
			me._tkitchen.style[domTransition]='none';
			me._tkitchen.style.opacity='1';
			me._tkitchen.style.visibility=me._tkitchen.ggVisible?'inherit':'hidden';
		}
		me._tkitchen.ggUpdatePosition=function (useTransition) {
		}
		me._sidemenu.appendChild(me._tkitchen);
		el=me._tbathroom=document.createElement('div');
		els=me._tbathroom__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwIDUwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzM5MUQ1NTt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjE5NyIgeD0iMS41IiB5PSIxLjUiIGhlaWdodD0iNDciLz4KIDwvZz4KIDxnIGlkPSJURVhUIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDEuNSwxMy4yYzMuOCwwLDUuOSwyLjIsNS45LDYuMXYwLjVjMCwyLjctMS4xLDQuMy0zLjEsNXYwLjFjMi4zLDAuNywzLjYsMi41LDMuNiw1Ljd2MC44JiN4YTsmI3g5OyYjeDk7YzAsNC0yLjIsNi4xLTYuMSw2LjFoLTUu'+
			'NFYxMy4ySDQxLjV6IE00MCwyMy4yaDEuMmMxLjgsMCwyLjUtMC45LDIuNS0zdi0wLjhjMC0yLTAuNy0yLjktMi4zLTIuOUg0MFYyMy4yeiBNNDAsMzQuMWgxLjYmI3hhOyYjeDk7JiN4OTtjMS44LDAsMi42LTAuOSwyLjYtM3YtMS4zYzAtMi4xLTAuOC0zLjEtMi44LTMuMUg0MFYzNC4xeiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01OS44LDM3LjVMNTksMzJoLTRsLTAuOCw1LjVoLTMuN2w0LjItMjQuM2g0LjdsNC4yLDI0LjNINTkuOHogTTU1LjUsMjguNmgzLjFsLTEuNS0xMC45SDU3TDU1LjUsMjguNnoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNzIsMTYuN3YyMC44aC0zLjdWMT'+
			'YuN2gtMy45di0zLjVoMTEuNXYzLjVINzJ6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTg3LjMsMzcuNVYyNi45SDgzdjEwLjZoLTMuN1YxMy4ySDgzdjEwLjJoNC40VjEzLjJIOTF2MjQuM0g4Ny4zeiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMDEuMSwyNy4yaC0xLjd2MTAuM2gtMy43VjEzLjJoNS4zYzQsMCw2LjEsMi4yLDYuMSw2LjFWMjFjMCwyLjYtMC45LDQuNC0yLjYsNS40bDMuNCwxMS4xSDEwNEwxMDEuMSwyNy4yeiYjeGE7JiN4OTsmI3g5OyBNOTkuNCwyMy44aDEuNWMxLjgsMCwyLjYtMC45LDIuNi0zdi0xLjJjMC0yLTAuOC0zLTIuNi0zaC0xLjVWMjMuOHoiLz4KICA8'+
			'cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTIzLDE5djEyLjdjMCwzLjgtMi4zLDYuMS01LjksNi4xcy01LjktMi4zLTUuOS02LjFWMTljMC0zLjgsMi4yLTYuMSw1LjktNi4xUzEyMywxNS4yLDEyMywxOXogTTExNC44LDE5JiN4YTsmI3g5OyYjeDk7djEyLjdjMCwxLjgsMC44LDIuOCwyLjIsMi44czIuMy0xLDIuMy0yLjhWMTljMC0xLjgtMC44LTIuOC0yLjMtMi44UzExNC44LDE3LjIsMTE0LjgsMTlMMTE0LjgsMTl6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTEzOS4xLDE5djEyLjdjMCwzLjgtMi4zLDYuMS01LjksNi4xcy01LjktMi4zLTUuOS02LjFWMTljMC0zLjgsMi4zLTYuMSw1LjktNi'+
			'4xUzEzOS4xLDE1LjIsMTM5LjEsMTl6JiN4YTsmI3g5OyYjeDk7IE0xMzAuOSwxOXYxMi43YzAsMS44LDAuOCwyLjgsMi4yLDIuOHMyLjMtMSwyLjMtMi44VjE5YzAtMS44LTAuOC0yLjgtMi4zLTIuOFMxMzAuOSwxNy4yLDEzMC45LDE5eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNTUuNiwzNy41VjIwLjZoLTAuMUwxNTIuMiwzNGgtMS41bC0zLjQtMTMuNGgtMC4xdjE2LjloLTMuNVYxMy4yaDQuOGwyLjksMTNoMC4xbDIuOS0xM2g1djI0LjNIMTU1LjZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._tbathroom__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="T-Bathroom";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tbathroom.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tbathroom.onclick=function (e) {
			player.openNext("{node4}","");
		}
		me._tbathroom.onmouseover=function (e) {
			me._tbathroom.style[domTransition]='none';
			me._tbathroom.style.opacity='0.6';
			me._tbathroom.style.visibility=me._tbathroom.ggVisible?'inherit':'hidden';
		}
		me._tbathroom.onmouseout=function (e) {
			me._tbathroom.style[domTransition]='none';
			me._tbathroom.style.opacity='1';
			me._tbathroom.style.visibility=me._tbathroom.ggVisible?'inherit':'hidden';
		}
		me._tbathroom.ggUpdatePosition=function (useTransition) {
		}
		me._sidemenu.appendChild(me._tbathroom);
		el=me._tbed1=document.createElement('div');
		els=me._tbed1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwIDUwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzM5MUQ1NTt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjE5NyIgeD0iMS41IiB5PSIxLjUiIGhlaWdodD0iNDciLz4KIDwvZz4KIDxnPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNy42LDEzLjJjMy44LDAsNS45LDIuMiw1LjksNi4xdjAuNWMwLDIuNy0xLjEsNC4zLTMuMSw1djAuMWMyLjMsMC43LDMuNiwyLjUsMy42LDUuN3YwLjgmI3hhOyYjeDk7JiN4OTtjMCw0LTIuMiw2LjEtNi4xLDYuMWgtNS40VjEzLjJIMzcu'+
			'NnogTTM2LjIsMjMuMmgxLjJjMS44LDAsMi41LTAuOSwyLjUtM3YtMC44YzAtMi0wLjctMi45LTIuMy0yLjloLTEuM3Y2LjdIMzYuMnogTTM2LjIsMzQuMWgxLjYmI3hhOyYjeDk7JiN4OTtjMS44LDAsMi42LTAuOSwyLjYtM3YtMS4zYzAtMi4xLTAuOC0zLjEtMi43LTMuMWgtMS40TDM2LjIsMzQuMUwzNi4yLDM0LjF6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTUxLjcsMTYuNnY2LjloNS40bC0wLjMsMy40aC01djcuMmg2Ljd2My40SDQ4VjEzLjJoMTAuM3YzLjRINTEuN3oiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjcuOCwxMy4yYzQsMCw2LjEsMi4yLDYuMSw2LjF2MTJjMCw0LT'+
			'IuMiw2LjEtNi4xLDYuMWgtNS4zVjEzLjJINjcuOHogTTY2LjIsMzQuMWgxLjVjMS44LDAsMi42LTAuOSwyLjYtMyYjeGE7JiN4OTsmI3g5O1YxOS42YzAtMi0wLjgtMy0yLjYtM2gtMS41VjM0LjF6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTgzLjYsMjcuMmgtMS43djEwLjNoLTMuN1YxMy4yaDUuM2M0LDAsNi4xLDIuMiw2LjEsNi4xVjIxYzAsMi42LTAuOSw0LjQtMi42LDUuNGwzLjQsMTEuMWgtMy45TDgzLjYsMjcuMnomI3hhOyYjeDk7JiN4OTsgTTgxLjksMjMuOGgxLjVjMS44LDAsMi42LTAuOSwyLjYtM3YtMS4yYzAtMi0wLjgtMy0yLjYtM2gtMS41VjIzLjh6Ii8+CiAgPHBhdGgg'+
			'Y2xhc3M9InN0MSIgZD0iTTEwNS41LDE5djEyLjdjMCwzLjgtMi4yLDYuMS01LjksNi4xcy01LjktMi4zLTUuOS02LjFWMTljMC0zLjgsMi4yLTYuMSw1LjktNi4xUzEwNS41LDE1LjIsMTA1LjUsMTl6JiN4YTsmI3g5OyYjeDk7IE05Ny4zLDE5djEyLjdjMCwxLjgsMC44LDIuOCwyLjIsMi44czIuMy0xLDIuMy0yLjhWMTljMC0xLjgtMC44LTIuOC0yLjMtMi44Uzk3LjMsMTcuMiw5Ny4zLDE5eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMjEuNiwxOXYxMi43YzAsMy44LTIuMiw2LjEtNS45LDYuMXMtNS45LTIuMy01LjktNi4xVjE5YzAtMy44LDIuMi02LjEsNS45LTYuMVMxMjEuNiwxNS'+
			'4yLDEyMS42LDE5eiYjeGE7JiN4OTsmI3g5OyBNMTEzLjQsMTl2MTIuN2MwLDEuOCwwLjgsMi44LDIuMiwyLjhzMi4zLTEsMi4zLTIuOFYxOWMwLTEuOC0wLjgtMi44LTIuMy0yLjhTMTEzLjQsMTcuMiwxMTMuNCwxOXoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTM4LjEsMzcuNVYyMC42bDAsMEwxMzQuNywzNGgtMS41bC0zLjQtMTMuNGgtMC4xdjE2LjloLTMuNVYxMy4yaDQuOWwyLjksMTNoMC4xbDIuOS0xM2g1djI0LjNIMTM4LjF6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTE2My44LDM3LjFWMTguNGgtNC40bC0wLjctMi41YzMtMC4yLDUuNC0xLjIsNi4yLTMuMWgyLjZ2MjQu'+
			'M0gxNjMuOHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._tbed1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="T-Bed1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 107px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tbed1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tbed1.onclick=function (e) {
			player.openNext("{node5}","");
		}
		me._tbed1.onmouseover=function (e) {
			me._tbed1.style[domTransition]='none';
			me._tbed1.style.opacity='0.6';
			me._tbed1.style.visibility=me._tbed1.ggVisible?'inherit':'hidden';
		}
		me._tbed1.onmouseout=function (e) {
			me._tbed1.style[domTransition]='none';
			me._tbed1.style.opacity='1';
			me._tbed1.style.visibility=me._tbed1.ggVisible?'inherit':'hidden';
		}
		me._tbed1.ggUpdatePosition=function (useTransition) {
		}
		me._sidemenu.appendChild(me._tbed1);
		el=me._tbed2=document.createElement('div');
		els=me._tbed2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwIDUwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzM5MUQ1NTt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjE5NyIgeD0iMS41IiB5PSIxLjUiIGhlaWdodD0iNDciLz4KIDwvZz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNy42LDEzLjJjMy44LDAsNS45LDIuMiw1LjksNi4xdjAuNWMwLDIuNy0xLjEsNC4zLTMuMSw1djAuMWMyLjMsMC43LDMuNiwyLjUsMy42LDUuN3YwLjgmI3hhOyYjeDk7YzAsNC0yLjIsNi4xLTYuMSw2LjFoLTUuNFYxMy4ySDM3LjZ6IE0zNi4yLDIz'+
			'LjJoMS4yYzEuOCwwLDIuNS0wLjksMi41LTN2LTAuOGMwLTItMC43LTIuOS0yLjMtMi45aC0xLjN2Ni43SDM2LjJ6IE0zNi4yLDM0LjFoMS42JiN4YTsmI3g5O2MxLjgsMCwyLjYtMC45LDIuNi0zdi0xLjNjMC0yLjEtMC44LTMuMS0yLjctMy4xaC0xLjRMMzYuMiwzNC4xTDM2LjIsMzQuMXoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01MS43LDE2LjZ2Ni45aDUuNGwtMC4zLDMuNGgtNXY3LjJoNi43djMuNEg0OFYxMy4yaDEwLjN2My40SDUxLjd6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjcuOCwxMy4yYzQsMCw2LjEsMi4yLDYuMSw2LjF2MTJjMCw0LTIuMiw2LjEtNi4xLDYuMWgtNS'+
			'4zVjEzLjJINjcuOHogTTY2LjIsMzQuMWgxLjVjMS44LDAsMi42LTAuOSwyLjYtMyYjeGE7JiN4OTtWMTkuNmMwLTItMC44LTMtMi42LTNoLTEuNVYzNC4xeiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTgzLjYsMjcuMmgtMS43djEwLjNoLTMuN1YxMy4yaDUuM2M0LDAsNi4xLDIuMiw2LjEsNi4xVjIxYzAsMi42LTAuOSw0LjQtMi42LDUuNGwzLjQsMTEuMWgtMy45TDgzLjYsMjcuMnomI3hhOyYjeDk7IE04MS45LDIzLjhoMS41YzEuOCwwLDIuNi0wLjksMi42LTN2LTEuMmMwLTItMC44LTMtMi42LTNoLTEuNVYyMy44eiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTEwNS41LDE5djEyLjdj'+
			'MCwzLjgtMi4yLDYuMS01LjksNi4xcy01LjktMi4zLTUuOS02LjFWMTljMC0zLjgsMi4yLTYuMSw1LjktNi4xUzEwNS41LDE1LjIsMTA1LjUsMTl6JiN4YTsmI3g5OyBNOTcuMywxOXYxMi43YzAsMS44LDAuOCwyLjgsMi4yLDIuOHMyLjMtMSwyLjMtMi44VjE5YzAtMS44LTAuOC0yLjgtMi4zLTIuOFM5Ny4zLDE3LjIsOTcuMywxOXoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMjEuNiwxOXYxMi43YzAsMy44LTIuMiw2LjEtNS45LDYuMXMtNS45LTIuMy01LjktNi4xVjE5YzAtMy44LDIuMi02LjEsNS45LTYuMVMxMjEuNiwxNS4yLDEyMS42LDE5eiYjeGE7JiN4OTsgTTExMy40LDE5djEyLj'+
			'djMCwxLjgsMC44LDIuOCwyLjIsMi44czIuMy0xLDIuMy0yLjhWMTljMC0xLjgtMC44LTIuOC0yLjMtMi44UzExMy40LDE3LjIsMTEzLjQsMTl6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTM4LjEsMzcuNVYyMC42bDAsMEwxMzQuNywzNGgtMS41bC0zLjQtMTMuNGgtMC4xdjE2LjloLTMuNVYxMy4yaDQuOWwyLjksMTNoMC4xbDIuOS0xM2g1djI0LjNIMTM4LjF6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTY4LjgsMTguMnYwLjljMCwyLjQtMC43LDQuNC0zLDguMmwtNC4xLDYuNWg3LjF2My41aC0xMS4zdi0zLjFsNS40LTguOGMxLjctMi43LDIuMi00LjQsMi4yLTYuNHYtMC41JiN4'+
			'YTsmI3g5O2MwLTEuNi0wLjctMi40LTItMi40cy0yLDAuOC0yLDIuOXYxLjJsLTMuNi0wLjl2LTFjMC0zLjYsMi4xLTUuNyw1LjctNS43QzE2Ni44LDEyLjYsMTY4LjgsMTQuNywxNjguOCwxOC4yeiIvPgo8L3N2Zz4K';
		me._tbed2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="T-Bed2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 137px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tbed2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tbed2.onclick=function (e) {
			player.openNext("{node6}","");
		}
		me._tbed2.onmouseover=function (e) {
			me._tbed2.style[domTransition]='none';
			me._tbed2.style.opacity='0.6';
			me._tbed2.style.visibility=me._tbed2.ggVisible?'inherit':'hidden';
		}
		me._tbed2.onmouseout=function (e) {
			me._tbed2.style[domTransition]='none';
			me._tbed2.style.opacity='1';
			me._tbed2.style.visibility=me._tbed2.ggVisible?'inherit':'hidden';
		}
		me._tbed2.ggUpdatePosition=function (useTransition) {
		}
		me._sidemenu.appendChild(me._tbed2);
		el=me._tbasement=document.createElement('div');
		els=me._tbasement__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwIDUwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzM5MUQ1NTt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHJlY3QgY2xhc3M9InN0MCIgd2lkdGg9IjE5NyIgeD0iMS41IiB5PSIxLjUiIGhlaWdodD0iNDciLz4KIDwvZz4KIDxnIGlkPSJURVhUIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDMuNiwxMy4yYzMuOCwwLDUuOSwyLjIsNS45LDYuMXYwLjVjMCwyLjctMS4yLDQuMy0zLjEsNXYwLjFjMi4zLDAuNywzLjYsMi41LDMuNiw1Ljd2MC44JiN4YTsmI3g5OyYjeDk7YzAsNC0yLjIsNi4xLTYuMSw2LjFoLTUu'+
			'NFYxMy4ySDQzLjZ6IE00Mi4yLDIzLjJoMS4yYzEuOCwwLDIuNS0wLjksMi41LTN2LTAuOGMwLTItMC43LTIuOS0yLjMtMi45aC0xLjNMNDIuMiwyMy4yeiBNNDIuMiwzNC4xJiN4YTsmI3g5OyYjeDk7aDEuNmMxLjgsMCwyLjYtMC45LDIuNi0zdi0xLjNjMC0yLjEtMC44LTMuMS0yLjctMy4xaC0xLjRMNDIuMiwzNC4xeiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02MiwzNy41TDYxLjIsMzJoLTQuMWwtMC44LDUuNWgtMy43bDQuMi0yNC4zaDQuN2w0LjIsMjQuM0g2MnogTTU3LjYsMjguNmgzLjFsLTEuNS0xMC45aC0wLjFMNTcuNiwyOC42eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik'+
			'03OS4zLDE4LjR2MC40bC0zLjUsMC43di0wLjhjMC0xLjctMC42LTIuNC0xLjktMi40Yy0wLjktMC4xLTEuOCwwLjYtMS45LDEuNmMwLDAuMSwwLDAuMywwLDAuNHYwLjUmI3hhOyYjeDk7JiN4OTtjMCwxLjQsMC43LDIuNSwzLjEsNC42YzMuMywzLDQuNCw1LDQuNCw3Ljh2MS4yYzAsMy42LTIuMyw1LjUtNS42LDUuNXMtNS43LTItNS43LTUuNVYzMWwzLjUtMC43VjMyYzAsMS42LDAuOCwyLjQsMi4xLDIuNCYjeGE7JiN4OTsmI3g5O2MxLjEsMCwyLTAuNiwyLTIuM3YtMC44YzAtMS41LTAuNy0yLjYtMy4xLTQuOGMtMy4zLTMtNC40LTUtNC40LTcuNnYtMC42YzAtMy42LDIuMS01LjQsNS41LTUu'+
			'NFM3OS4zLDE0LjgsNzkuMywxOC40eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04Ni42LDE2LjZ2Ni45SDkybC0wLjMsMy40aC01djcuMmg2Ljd2My40SDgyLjlWMTMuMmgxMC4zdjMuNEg4Ni42eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMDkuMywzNy41VjIwLjZoLTAuMUwxMDUuOCwzNGgtMS41bC0zLjQtMTMuNGgtMC4xdjE2LjloLTMuNVYxMy4yaDQuOGwyLjksMTNoMC4xbDIuOC0xM2g1djI0LjNIMTA5LjN6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyMS42LDE2LjZ2Ni45aDUuNGwtMC4zLDMuNGgtNXY3LjJoNi43djMuNEgxMThWMTMuMmgxMC4zdjMuNEgxMjEuNn'+
			'oiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQwLjgsMzcuNUwxMzYsMjEuNGgtMC4xdjE2LjFoLTMuNVYxMy4yaDQuMWw0LjMsMTQuNWgwLjFWMTMuMmgzLjV2MjQuM0gxNDAuOHoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTU1LjQsMTYuN3YyMC44aC0zLjdWMTYuN2gtMy45di0zLjVoMTEuNXYzLjVIMTU1LjR6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._tbasement__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="T-Basement";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 167px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tbasement.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tbasement.onclick=function (e) {
			player.openNext("{node7}","");
		}
		me._tbasement.onmouseover=function (e) {
			me._tbasement.style[domTransition]='none';
			me._tbasement.style.opacity='0.6';
			me._tbasement.style.visibility=me._tbasement.ggVisible?'inherit':'hidden';
		}
		me._tbasement.onmouseout=function (e) {
			me._tbasement.style[domTransition]='none';
			me._tbasement.style.opacity='1';
			me._tbasement.style.visibility=me._tbasement.ggVisible?'inherit':'hidden';
		}
		me._tbasement.ggUpdatePosition=function (useTransition) {
		}
		me._sidemenu.appendChild(me._tbasement);
		el=me._tgarage=document.createElement('div');
		els=me._tgarage__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwIDUwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzM5MUQ1NTt9Cgkuc3Qxe2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLnN0MntmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxOTciIHg9IjEuNSIgeT0iMS41IiBoZWlnaHQ9IjQ3Ii8+CiA8L2c+CiA8ZyBjbGFzcz0ic3QxIj4KICA8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNTUuOCwyMy41aDUuNXY4YzAsNC0yLDYuMy01LjksNi4zYy0zLjksMC01LjktMi4zLTUuOS02LjNWMTguNGMwLTQsMi02LjMsNS45LTYuM2MzLjksMCw1Ljks'+
			'Mi4zLDUuOSw2LjN2Mi40JiN4YTsmI3g5OyYjeDk7aC0zLjd2LTIuN2MwLTEuOC0wLjgtMi41LTIuMS0yLjVzLTIuMSwwLjctMi4xLDIuNXYxMy42YzAsMS44LDAuOCwyLjQsMi4xLDIuNHMyLjEtMC42LDIuMS0yLjR2LTQuNmgtMS44VjIzLjV6Ii8+CiAgPHBhdGggY2xhc3M9InN0MiIgZD0iTTc5LjcsMzcuNWgtNEw3NSwzMi45aC00LjlsLTAuNyw0LjZoLTMuNmw0LTI1LjJoNS44TDc5LjcsMzcuNXogTTcwLjcsMjkuNWgzLjhsLTEuOS0xMi43TDcwLjcsMjkuNXoiLz4KICA8cGF0aCBjbGFzcz0ic3QyIiBkPSJNOTIuOCwzNy41Yy0wLjItMC42LTAuNC0xLTAuNC0zLjF2LTRjMC0yLjMtMC44LT'+
			'MuMi0yLjYtMy4yaC0xLjR2MTAuM2gtNFYxMi4zaDZjNC4xLDAsNS45LDEuOSw1LjksNS44djImI3hhOyYjeDk7JiN4OTtjMCwyLjYtMC44LDQuMy0yLjYsNS4xYzIsMC44LDIuNiwyLjcsMi42LDUuNHYzLjljMCwxLjIsMCwyLjEsMC40LDMuMUg5Mi44eiBNODguNSwxNS45djcuN0g5MGMxLjUsMCwyLjQtMC42LDIuNC0yLjd2LTIuNSYjeGE7JiN4OTsmI3g5O2MwLTEuOC0wLjYtMi42LTItMi42SDg4LjV6Ii8+CiAgPHBhdGggY2xhc3M9InN0MiIgZD0iTTExNC44LDM3LjVoLTRsLTAuNy00LjZoLTQuOWwtMC43LDQuNmgtMy42bDQtMjUuMmg1LjhMMTE0LjgsMzcuNXogTTEwNS44LDI5LjVoMy44'+
			'bC0xLjktMTIuN0wxMDUuOCwyOS41eiIvPgogIDxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUuNiwyMy41aDUuNXY4YzAsNC0yLDYuMy01LjksNi4zYy0zLjksMC01LjktMi4zLTUuOS02LjNWMTguNGMwLTQsMi02LjMsNS45LTYuM2MzLjksMCw1LjksMi4zLDUuOSw2LjMmI3hhOyYjeDk7JiN4OTt2Mi40aC0zLjd2LTIuN2MwLTEuOC0wLjgtMi41LTIuMS0yLjVzLTIuMSwwLjctMi4xLDIuNXYxMy42YzAsMS44LDAuOCwyLjQsMi4xLDIuNHMyLjEtMC42LDIuMS0yLjR2LTQuNmgtMS44VjIzLjV6Ii8+CiAgPHBhdGggY2xhc3M9InN0MiIgZD0iTTE0MC42LDIyLjloNS40djMuNmgtNS40djcuNGg2Lj'+
			'h2My42aC0xMC44VjEyLjNoMTAuOHYzLjZoLTYuOFYyMi45eiIvPgogPC9nPgo8L3N2Zz4K';
		me._tgarage__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="T-Garage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 197px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tgarage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tgarage.onclick=function (e) {
			player.openNext("{node16}","");
		}
		me._tgarage.onmouseover=function (e) {
			me._tgarage.style[domTransition]='none';
			me._tgarage.style.opacity='0.6';
			me._tgarage.style.visibility=me._tgarage.ggVisible?'inherit':'hidden';
		}
		me._tgarage.onmouseout=function (e) {
			me._tgarage.style[domTransition]='none';
			me._tgarage.style.opacity='1';
			me._tgarage.style.visibility=me._tgarage.ggVisible?'inherit':'hidden';
		}
		me._tgarage.ggUpdatePosition=function (useTransition) {
		}
		me._sidemenu.appendChild(me._tgarage);
		el=me._tmbath=document.createElement('div');
		els=me._tmbath__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwIDUwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwODRFOTt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8dGl0bGU+MXN0RkxPT1I8L3RpdGxlPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIyMDAiIGhlaWdodD0iNTAiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMy43LDMwLjdsMi45LTE5LjRoNnYyNy4zaC00LjFWMTkuMWwtMywxOS42aC00LjFsLTMuMi0xOS4zdjE5LjNoLTMuN1YxMS40aDZMMjMuNywzMC43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01MC43LDM4LjdoLTQu'+
			'M2wtMC43LTVoLTUuM2wtMC43LDVoLTMuOWw0LjQtMjcuM2g2LjNMNTAuNywzOC43eiBNNDAuOSwzMEg0NWwtMi0xMy44TDQwLjksMzB6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTU5LjcsMTEuMWM0LjIsMCw2LjMsMi41LDYuMyw2Ljl2MC45aC00LjF2LTEuMWMwLTEuOS0wLjgtMi43LTIuMS0yLjdzLTIuMSwwLjctMi4xLDIuNyYjeGE7JiN4OTsmI3g5O2MwLDUuNiw4LjQsNi43LDguNCwxNC41YzAsNC40LTIuMiw2LjktNi40LDYuOXMtNi40LTIuNS02LjQtNi45di0xLjdoNC4xdjJjMCwyLDAuOSwyLjcsMi4yLDIuN3MyLjItMC43LDIuMi0yLjcmI3hhOyYjeDk7JiN4OTtjMC01LjYtOC'+
			'40LTYuNy04LjQtMTQuNUM1My4zLDEzLjUsNTUuNSwxMS4xLDU5LjcsMTEuMXoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjguNCwxMS40aDEzLjN2My45aC00LjV2MjMuNGgtNC4zVjE1LjNoLTQuNVYxMS40eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04OSwyMi45aDUuOXYzLjlIODl2OGg3LjR2My45SDg0LjdWMTEuNGgxMS43djMuOUg4OVYyMi45eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMDkuMiwzOC43Yy0wLjItMC43LTAuNC0xLjEtMC40LTMuNFYzMWMwLTIuNS0wLjktMy41LTIuOC0zLjVoLTEuNXYxMS4xaC00LjNWMTEuNGg2LjUmI3hhOyYjeDk7JiN4OTtjNC40'+
			'LDAsNi40LDIuMSw2LjQsNi4zdjIuMWMwLDIuOC0wLjksNC42LTIuOCw1LjVjMi4xLDAuOSwyLjgsMywyLjgsNS44djQuMmMwLDEuMywwLDIuMywwLjUsMy4zTDEwOS4yLDM4LjdMMTA5LjIsMzguN3omI3hhOyYjeDk7JiN4OTsgTTEwNC41LDE1LjN2OC40aDEuN2MxLjYsMCwyLjYtMC43LDIuNi0yLjl2LTIuN2MwLTItMC43LTIuOC0yLjItMi44SDEwNC41eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMzcuMSwxNy42djFjMCwyLjgtMC45LDQuNi0yLjgsNS41YzIuMywwLjksMy4yLDMsMy4yLDUuOXYyLjJjMCw0LjItMi4yLDYuNS02LjUsNi41aC02LjdWMTEuNGg2LjUmI3hhOyYjeDk7Ji'+
			'N4OTtDMTM1LjIsMTEuNCwxMzcuMSwxMy40LDEzNy4xLDE3LjZ6IE0xMjguNiwxNS4zdjcuMmgxLjdjMS42LDAsMi42LTAuNywyLjYtMi45di0xLjVjMC0yLTAuNy0yLjgtMi4yLTIuOEgxMjguNnogTTEyOC42LDI2LjR2OC40JiN4YTsmI3g5OyYjeDk7aDIuNWMxLjQsMCwyLjItMC43LDIuMi0yLjd2LTIuNGMwLTIuNS0wLjgtMy4zLTIuOC0zLjNIMTI4LjZ6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTE1NS4yLDM4LjdoLTQuM2wtMC43LTVoLTUuM2wtMC43LDVoLTMuOWw0LjQtMjcuM2g2LjNMMTU1LjIsMzguN3ogTTE0NS40LDMwaDQuMWwtMi4xLTEzLjhMMTQ1LjQsMzB6Ii8+CiAgPHBh'+
			'dGggY2xhc3M9InN0MSIgZD0iTTE1NS42LDExLjRoMTMuM3YzLjloLTQuNXYyMy40aC00LjNWMTUuM2gtNC41VjExLjR6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTE3Ni4yLDM4LjdoLTQuM1YxMS40aDQuM3YxMS43aDQuOVYxMS40aDQuNHYyNy4zaC00LjRWMjdoLTQuOVYzOC43eiIvPgogPC9nPgo8L3N2Zz4K';
		me._tmbath__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="T-Mbath";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 227px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tmbath.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tmbath.onclick=function (e) {
			player.openNext("{node9}","");
		}
		me._tmbath.onmouseover=function (e) {
			me._tmbath.style[domTransition]='none';
			me._tmbath.style.opacity='0.6';
			me._tmbath.style.visibility=me._tmbath.ggVisible?'inherit':'hidden';
		}
		me._tmbath.onmouseout=function (e) {
			me._tmbath.style[domTransition]='none';
			me._tmbath.style.opacity='1';
			me._tmbath.style.visibility=me._tmbath.ggVisible?'inherit':'hidden';
		}
		me._tmbath.ggUpdatePosition=function (useTransition) {
		}
		me._sidemenu.appendChild(me._tmbath);
		el=me._tbed=document.createElement('div');
		els=me._tbed__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwIDUwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwODRFOTt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8dGl0bGU+MXN0RkxPT1I8L3RpdGxlPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIyMDAiIGhlaWdodD0iNTAiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01NCwxNy42djFjMCwyLjgtMC45LDQuNi0yLjgsNS41YzIuMywwLjksMy4yLDMsMy4yLDUuOXYyLjJjMCw0LjItMi4yLDYuNS02LjUsNi41aC02LjdWMTEuNGg2LjUmI3hhOyYjeDk7JiN4OTtDNTIuMSwxMS40LDU0LDEzLjQs'+
			'NTQsMTcuNnogTTQ1LjUsMTUuM3Y3LjJoMS43YzEuNiwwLDIuNi0wLjcsMi42LTIuOXYtMS41YzAtMi0wLjctMi44LTIuMi0yLjhINDUuNXogTTQ1LjUsMjYuNHY4LjRINDgmI3hhOyYjeDk7JiN4OTtjMS40LDAsMi4yLTAuNywyLjItMi43di0yLjRjMC0yLjUtMC44LTMuMy0yLjgtMy4zSDQ1LjV6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTYyLjUsMjIuOWg1Ljl2My45aC01Ljl2OGg3LjR2My45SDU4LjJWMTEuNGgxMS43djMuOWgtNy40VjIyLjl6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTczLjcsMTEuNGg2LjhjNC4zLDAsNi40LDIuNCw2LjQsNi43djEzLjhjMCw0LjQtMi4xLD'+
			'YuNy02LjQsNi43aC02LjhWMTEuNHogTTc4LDE1LjN2MTkuNWgyLjQmI3hhOyYjeDk7JiN4OTtjMS40LDAsMi4yLTAuNywyLjItMi43VjE3LjljMC0xLjktMC44LTIuNy0yLjItMi43SDc4VjE1LjN6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTk5LjcsMzguN2MtMC4yLTAuNy0wLjQtMS4xLTAuNC0zLjRWMzFjMC0yLjUtMC45LTMuNS0yLjgtMy41SDk1djExLjFoLTQuM1YxMS40aDYuNWM0LjQsMCw2LjQsMi4xLDYuNCw2LjMmI3hhOyYjeDk7JiN4OTt2Mi4xYzAsMi44LTAuOSw0LjYtMi44LDUuNWMyLjEsMC45LDIuOCwzLDIuOCw1Ljh2NC4yYzAsMS4zLDAsMi4zLDAuNSwzLjNMOTkuNywz'+
			'OC43TDk5LjcsMzguN3ogTTk1LjEsMTUuM3Y4LjRoMS43JiN4YTsmI3g5OyYjeDk7YzEuNiwwLDIuNi0wLjcsMi42LTIuOXYtMi43YzAtMi0wLjctMi44LTIuMi0yLjhIOTUuMXoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTA3LjMsMTcuOWMwLTQuNCwyLjMtNi45LDYuNS02LjlzNi41LDIuNSw2LjUsNi45djE0LjJjMCw0LjQtMi4zLDYuOS02LjUsNi45cy02LjUtMi41LTYuNS02LjlWMTcuOXomI3hhOyYjeDk7JiN4OTsgTTExMS42LDMyLjRjMCwyLDAuOSwyLjcsMi4yLDIuN3MyLjItMC43LDIuMi0yLjdWMTcuNmMwLTEuOS0wLjktMi43LTIuMi0yLjdzLTIuMiwwLjctMi4yLDIuN1YzMi'+
			'40eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMjMuOSwxNy45YzAtNC40LDIuMy02LjksNi41LTYuOWM0LjIsMCw2LjUsMi41LDYuNSw2Ljl2MTQuMmMwLDQuNC0yLjMsNi45LTYuNSw2LjlzLTYuNS0yLjUtNi41LTYuOSYjeGE7JiN4OTsmI3g5O0MxMjMuOSwzMi4xLDEyMy45LDE3LjksMTIzLjksMTcuOXogTTEyOC4yLDMyLjRjMCwyLDAuOSwyLjcsMi4yLDIuN3MyLjItMC43LDIuMi0yLjdWMTcuNmMwLTEuOS0wLjktMi43LTIuMi0yLjdzLTIuMiwwLjctMi4yLDIuNyYjeGE7JiN4OTsmI3g5O1YzMi40eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNDkuOSwzMC43bDIuOS0xOS40'+
			'aDZ2MjcuM2gtNC4xVjE5LjFsLTMsMTkuNmgtNC4xbC0zLjItMTkuM3YxOS4zaC0zLjdWMTEuNGg2TDE0OS45LDMwLjd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._tbed__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="T-Bed";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 257px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tbed.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tbed.onclick=function (e) {
			player.openNext("{node10}","");
		}
		me._tbed.onmouseover=function (e) {
			me._tbed.style[domTransition]='none';
			me._tbed.style.opacity='0.6';
			me._tbed.style.visibility=me._tbed.ggVisible?'inherit':'hidden';
		}
		me._tbed.onmouseout=function (e) {
			me._tbed.style[domTransition]='none';
			me._tbed.style.opacity='1';
			me._tbed.style.visibility=me._tbed.ggVisible?'inherit':'hidden';
		}
		me._tbed.ggUpdatePosition=function (useTransition) {
		}
		me._sidemenu.appendChild(me._tbed);
		me.divSkin.appendChild(me._sidemenu);
		el=me._smore=document.createElement('div');
		els=me._smore__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJ6LWluIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB5PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMzkxRDU1O3N0cm9rZTojQjVCNUI1O3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjUwLjUiIGN5PSI1MS41IiByPSIzNS41Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjcsNDZINTdWMzZjMC0xLjctMS4zLTMtMy0zaC02Yy0xLjcsMC0zLDEuMy0zLDN2MTBIMzVjLTEuNywwLTMsMS4zLTMsM3Y2YzAsMS43LDEuMywzLDMsM2wwLDBoMTB2MTAmI3hhOyYjeDk7YzAsMS43LDEuMywzLDMsM2g2YzEu'+
			'NywwLDMtMS4zLDMtM1Y1OGgxMGMxLjcsMCwzLTEuMywzLTNsMCwwdi02QzcwLDQ3LjMsNjguNyw0Niw2Nyw0NnoiLz4KPC9zdmc+Cg==';
		me._smore__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._smore__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJ6LWluIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB5PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojQjVCNUI1O3N0cm9rZTojMzkxRDU1O3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDojMzkxRDU1O30KPC9zdHlsZT4KIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjUwLjUiIGN5PSI1MS41IiByPSIzNS41Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjcsNDZINTdWMzZjMC0xLjctMS4zLTMtMy0zaC02Yy0xLjcsMC0zLDEuMy0zLDN2MTBIMzVjLTEuNywwLTMsMS4zLTMsM3Y2YzAsMS43LDEuMywzLDMsM2wwLDBoMTB2MTAmI3hhOyYjeDk7YzAsMS43LDEuMywzLDMsM2g2YzEu'+
			'NywwLDMtMS4zLDMtM1Y1OGgxMGMxLjcsMCwzLTEuMywzLTNsMCwwdi02QzcwLDQ3LjMsNjguNyw0Niw2Nyw0NnoiLz4KPC9zdmc+Cg==';
		me._smore__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="S-more";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 23px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._smore.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._smore.onclick=function (e) {
			var flag=me._sidemenu.ggPositonActive;
			if (player.transitionsDisabled) {
				me._sidemenu.style[domTransition]='none';
			} else {
				me._sidemenu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._sidemenu.ggParameter.rx=0;me._sidemenu.ggParameter.ry=0;
				me._sidemenu.style[domTransform]=parameterToTransform(me._sidemenu.ggParameter);
			} else {
				me._sidemenu.ggParameter.rx=-190;me._sidemenu.ggParameter.ry=0;
				me._sidemenu.style[domTransform]=parameterToTransform(me._sidemenu.ggParameter);
			}
			me._sidemenu.ggPositonActive=!flag;
		}
		me._smore.onmouseover=function (e) {
			me._smore__img.style.visibility='hidden';
			me._smore__imgo.style.visibility='inherit';
			me.elementMouseOver['smore']=true;
		}
		me._smore.onmouseout=function (e) {
			me._smore.style[domTransition]='none';
			me._smore.style.opacity='1';
			me._smore.style.visibility=me._smore.ggVisible?'inherit':'hidden';
			me._smore__img.style.visibility='inherit';
			me._smore__imgo.style.visibility='hidden';
			me.elementMouseOver['smore']=false;
		}
		me._smore.ontouchend=function (e) {
			me.elementMouseOver['smore']=false;
		}
		me._smore.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._smore);
		el=me._markertemplate=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="markertemplate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 642px;';
		hs+='position : absolute;';
		hs+='top : 187px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markertemplate.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_marker_node9=document.createElement('div');
		els=me._tt_marker_node9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_marker_node";
		el.ggDx=8;
		el.ggDy=32;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #0084e9;';
		hs+='background: rgba(0,132,233,0.705882);';
		hs+='border: 2px solid #ff01a2;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_marker_node9.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_marker_node9.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_marker_node9.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_marker_node9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_marker_node9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._tt_marker_node9.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_marker_node9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_marker_node9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_marker_node9.style[domTransition]='';
				if (me._tt_marker_node9.ggCurrentLogicStateVisible == 0) {
					me._tt_marker_node9.style.visibility=(Number(me._tt_marker_node9.style.opacity)>0||!me._tt_marker_node9.style.opacity)?'inherit':'hidden';
					me._tt_marker_node9.ggVisible=true;
				}
				else {
					me._tt_marker_node9.style.visibility="hidden";
					me._tt_marker_node9.ggVisible=false;
				}
			}
		}
		me._tt_marker_node9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 4;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((104-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._markertemplate.appendChild(me._tt_marker_node9);
		me.divSkin.appendChild(me._markertemplate);
		el=me._dmore=document.createElement('div');
		els=me._dmore__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJjb250cmxfbW9yZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMT'+
			'AwOyIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRUYwMzt9Cgkuc3Qxe2ZpbGw6I0ZGMDFBMjt9Cgkuc3Qye2ZpbGw6IzAwODRFOTt9Cjwvc3R5bGU+CiA8dGl0bGU+VC1tb3JlPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03Miw1NC44YzAsMC0xMS0zLjgtMjItMy44cy0yMiwzLjgtMjIsMy44di03LjVMNTAsMzZsMjIsMTEuM1Y1NC44eiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTcyLDYxLjVjMCwwLTExLTMuOC0yMi0zLjhzLTIyLDMuOC0yMiwzLjhWNTRsMjItMTEuM0w3Miw1NFY2MS41eiIvPgogPHBhdGggY2xhc3M9InN0MiIgZD0i'+
			'TTcyLDY4LjFjMCwwLTExLTMuOC0yMi0zLjhzLTIyLDMuOC0yMiwzLjh2LTcuNWwyMi0xMS4zbDIyLDExLjNWNjguMXoiLz4KPC9zdmc+Cg==';
		me._dmore__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="D-more";
		el.ggDx=-2.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -5px;';
		hs+='height : 75px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dmore.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._dmore.onclick=function (e) {
			var flag=me._button_direction.ggPositonActive;
			if (player.transitionsDisabled) {
				me._button_direction.style[domTransition]='none';
			} else {
				me._button_direction.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._button_direction.ggParameter.rx=0;me._button_direction.ggParameter.ry=0;
				me._button_direction.style[domTransform]=parameterToTransform(me._button_direction.ggParameter);
			} else {
				me._button_direction.ggParameter.rx=0;me._button_direction.ggParameter.ry=170;
				me._button_direction.style[domTransform]=parameterToTransform(me._button_direction.ggParameter);
			}
			me._button_direction.ggPositonActive=!flag;
		}
		me._dmore.onmouseover=function (e) {
			me.elementMouseOver['dmore']=true;
		}
		me._dmore.onmouseout=function (e) {
			me._dmore.style[domTransition]='none';
			me._dmore.style.opacity='0.5';
			me._dmore.style.visibility=me._dmore.ggVisible?'inherit':'hidden';
			me.elementMouseOver['dmore']=false;
		}
		me._dmore.ontouchend=function (e) {
			me.elementMouseOver['dmore']=false;
		}
		me._dmore.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._dmore);
		el=me._button_direction=document.createElement('div');
		el.ggId="button_direction";
		el.ggDx=-3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 88px;';
		hs+='height : 62px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 82px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_direction.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_direction.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._dback=document.createElement('div');
		els=me._dback__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJkaXJlY3RfY29udHJsIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMC'+
			'AxMDA7IiB5PSIwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMDA4NEU5O3N0cm9rZTojRkZFRjAzO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDx0aXRsZT5ELWJhY2s8L3RpdGxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTY2LjgsNjguNGwxLjMtMS4zbDEwLDEwYzE0LjQtMTUsMTQuNi0zOC43LDAuMi01My44TDY4LjEsMzMuNGwtMS4zLTEuM0w3NywyMS45Yy0xNS4xLTE0LjUtMzktMTQuNS01NC4xLDAmI3hhOyYjeDk7bDEwLjIsMTAuMmwtMS4zLDEuM0wyMS43LDIzLjJDNy40LDM4LjMsNy41LDYyLDIxLjksNzcuMWwx'+
			'MC0xMGwxLjMsMS4zbC0xMCwxMGMxNSwxNC4yLDM4LjYsMTQuMiw1My42LDBMNjYuOCw2OC40eiBNNTAsNTImI3hhOyYjeDk7Yy0xLjEsMC0yLTAuOS0yLTJzMC45LTIsMi0yczIsMC45LDIsMlM1MS4xLDUyLDUwLDUyeiIvPgo8L3N2Zz4K';
		me._dback__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="D-back";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -48px;';
		hs+='height : 120px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dback.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dback.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._button_direction.appendChild(me._dback);
		el=me._button_hs=document.createElement('div');
		el.ggId="button_hs";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -3px;';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 34px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_hs.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_hs.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hson=document.createElement('div');
		els=me._hson__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._hson__img.setAttribute('src',basePath + 'images/hson.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="HS-on";
		el.ggDx=1.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -2px;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.69999;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hson.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hson.onclick=function (e) {
			me._hson.style[domTransition]='none';
			me._hson.style.visibility='hidden';
			me._hson.ggVisible=false;
			me._hsoff.style[domTransition]='none';
			me._hsoff.style.visibility=(Number(me._hsoff.style.opacity)>0||!me._hsoff.style.opacity)?'inherit':'hidden';
			me._hsoff.ggVisible=true;
			var list=me.findElements("ht_node",false);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.opacity='1';
				e.style.visibility=e.ggVisible?'inherit':'hidden';
			}
			player.changePolygonMode(2);
		}
		me._hson.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._button_hs.appendChild(me._hson);
		el=me._hsoff=document.createElement('div');
		els=me._hsoff__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._hsoff__img.setAttribute('src',basePath + 'images/hsoff.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="HS-off";
		el.ggDx=1.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -2px;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hsoff.onclick=function (e) {
			me._hsoff.style[domTransition]='none';
			me._hsoff.style.visibility='hidden';
			me._hsoff.ggVisible=false;
			me._hson.style[domTransition]='none';
			me._hson.style.visibility=(Number(me._hson.style.opacity)>0||!me._hson.style.opacity)?'inherit':'hidden';
			me._hson.ggVisible=true;
			var list=me.findElements("ht_node",false);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.opacity='0';
				e.style.visibility='hidden';
			}
			player.changePolygonMode(0);
		}
		me._hsoff.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._button_hs.appendChild(me._hsoff);
		me._button_direction.appendChild(me._button_hs);
		el=me._zin=document.createElement('div');
		els=me._zin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJ6LWluIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB5PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojOTk5OTk5O3N0cm9rZTojMDA4NEU5O3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDojMDA4NEU5O30KPC9zdHlsZT4KIDx0aXRsZT5aLWluLTE8L3RpdGxlPgogPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iNTAuNSIgY3k9IjUxLjUiIHI9IjM1LjUiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02Nyw0Nkg1N1YzNmMwLTEuNy0xLjMtMy0zLTNoLTZjLTEuNywwLTMsMS4zLTMsM3YxMEgzNWMtMS43LDAtMywxLjMtMywzdjZjMCwxLjcsMS4zLDMsMywzbDAsMGgxMHYxMCYjeGE7JiN4'+
			'OTtjMCwxLjcsMS4zLDMsMywzaDZjMS43LDAsMy0xLjMsMy0zVjU4aDEwYzEuNywwLDMtMS4zLDMtM2wwLDB2LTZDNzAsNDcuMyw2OC43LDQ2LDY3LDQ2eiIvPgo8L3N2Zz4K';
		me._zin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJ6LWluIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB5PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojOTk5OTk5O3N0cm9rZTojMDA4NEU5O3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KIDx0aXRsZT5aLWluLTE8L3RpdGxlPgogPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iNTAuNSIgY3k9IjUxLjUiIHI9IjM1LjUiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02Nyw0Nkg1N1YzNmMwLTEuNy0xLjMtMy0zLTNoLTZjLTEuNywwLTMsMS4zLTMsM3YxMEgzNWMtMS43LDAtMywxLjMtMywzdjZjMCwxLjcsMS4zLDMsMywzbDAsMGgxMHYxMCYjeGE7JiN4'+
			'OTtjMCwxLjcsMS4zLDMsMywzaDZjMS43LDAsMy0xLjMsMy0zVjU4aDEwYzEuNywwLDMtMS4zLDMtM2wwLDB2LTZDNzAsNDcuMyw2OC43LDQ2LDY3LDQ2eiIvPgo8L3N2Zz4K';
		me._zin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Z-in";
		el.ggDx=-71;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 11px;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zin.onclick=function (e) {
			player.changeFovLog(-5,true);
		}
		me._zin.onmouseover=function (e) {
			me._zin__img.style.visibility='hidden';
			me._zin__imgo.style.visibility='inherit';
			me.elementMouseOver['zin']=true;
			me._tt_enter_plus.logicBlock_visible();
		}
		me._zin.onmouseout=function (e) {
			me._zin__img.style.visibility='inherit';
			me._zin__imgo.style.visibility='hidden';
			me.elementMouseOver['zin']=false;
			me._tt_enter_plus.logicBlock_visible();
		}
		me._zin.ontouchend=function (e) {
			me.elementMouseOver['zin']=false;
			me._tt_enter_plus.logicBlock_visible();
		}
		me._zin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_enter_plus=document.createElement('div');
		els=me._tt_enter_plus__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_plus";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -118px;';
		hs+='position : absolute;';
		hs+='top : 159px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="ZOOM IN";
		el.appendChild(els);
		me._tt_enter_plus.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_plus.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['zin'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_enter_plus.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_enter_plus.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_enter_plus.style[domTransition]='';
				if (me._tt_enter_plus.ggCurrentLogicStateVisible == 0) {
					me._tt_enter_plus.style.visibility=(Number(me._tt_enter_plus.style.opacity)>0||!me._tt_enter_plus.style.opacity)?'inherit':'hidden';
					me._tt_enter_plus.ggVisible=true;
				}
				else {
					me._tt_enter_plus.style.visibility="hidden";
					me._tt_enter_plus.ggVisible=false;
				}
			}
		}
		me._tt_enter_plus.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_enter_plus_white=document.createElement('div');
		els=me._tt_enter_plus_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_plus_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="ZOOM IN";
		el.appendChild(els);
		me._tt_enter_plus_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_plus_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_enter_plus.appendChild(me._tt_enter_plus_white);
		me._zin.appendChild(me._tt_enter_plus);
		me._button_direction.appendChild(me._zin);
		el=me._zout=document.createElement('div');
		els=me._zout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJ6LW91dCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6Izk5OTk5OTtzdHJva2U6I0ZGMDFBMjtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6I0ZGMDFBMjt9Cjwvc3R5bGU+CiA8dGl0bGU+Wi1vdXQtMTwvdGl0bGU+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI1MC41IiBjeT0iNTEuNSIgcj0iMzUuNSIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTMyLDU1di02YzAtMS43LDEuMy0zLDMtM2gzMmMxLjcsMCwzLDEuMywzLDN2NmMwLDEuNy0xLjMsMy0zLDNIMzVDMzMuMyw1OCwzMiw1Ni43LDMyLDU1eiIvPgo8L3N2Zz4K';
		me._zout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJ6LW91dCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6Izk5OTk5OTtzdHJva2U6I0ZGMDFBMjtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8dGl0bGU+Wi1vdXQtMTwvdGl0bGU+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI1MC41IiBjeT0iNTEuNSIgcj0iMzUuNSIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTMyLDU1di02YzAtMS43LDEuMy0zLDMtM2gzMmMxLjcsMCwzLDEuMywzLDN2NmMwLDEuNy0xLjMsMy0zLDNIMzVDMzMuMyw1OCwzMiw1Ni43LDMyLDU1eiIvPgo8L3N2Zz4K';
		me._zout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Z-out";
		el.ggDx=-71;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -35px;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zout.onclick=function (e) {
			player.changeFovLog(5,true);
		}
		me._zout.onmouseover=function (e) {
			me._zout__img.style.visibility='hidden';
			me._zout__imgo.style.visibility='inherit';
			me.elementMouseOver['zout']=true;
			me._tt_enter_minus.logicBlock_visible();
		}
		me._zout.onmouseout=function (e) {
			me._zout__img.style.visibility='inherit';
			me._zout__imgo.style.visibility='hidden';
			me.elementMouseOver['zout']=false;
			me._tt_enter_minus.logicBlock_visible();
		}
		me._zout.ontouchend=function (e) {
			me.elementMouseOver['zout']=false;
			me._tt_enter_minus.logicBlock_visible();
		}
		me._zout.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_enter_minus=document.createElement('div');
		els=me._tt_enter_minus__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_minus";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -278px;';
		hs+='position : absolute;';
		hs+='top : 234px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="ZOOM OUT";
		el.appendChild(els);
		me._tt_enter_minus.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_minus.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['zout'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_enter_minus.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_enter_minus.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_enter_minus.style[domTransition]='';
				if (me._tt_enter_minus.ggCurrentLogicStateVisible == 0) {
					me._tt_enter_minus.style.visibility=(Number(me._tt_enter_minus.style.opacity)>0||!me._tt_enter_minus.style.opacity)?'inherit':'hidden';
					me._tt_enter_minus.ggVisible=true;
				}
				else {
					me._tt_enter_minus.style.visibility="hidden";
					me._tt_enter_minus.ggVisible=false;
				}
			}
		}
		me._tt_enter_minus.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_enter_minus_white=document.createElement('div');
		els=me._tt_enter_minus_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_minus_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="ZOOM OUT";
		el.appendChild(els);
		me._tt_enter_minus_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_minus_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_enter_minus.appendChild(me._tt_enter_minus_white);
		me._zout.appendChild(me._tt_enter_minus);
		me._button_direction.appendChild(me._zout);
		el=me._dup=document.createElement('div');
		els=me._dup__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJ1cCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOyIgeT0iMH'+
			'B4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8dGl0bGU+RC11cC0xPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04MSw2OS45YzAsMC0xNS41LTcuOC0zMS03LjhzLTMxLDcuOC0zMSw3LjhWNTQuNGwzMS0yMy4zbDMxLDIzLjNWNjkuOXoiLz4KPC9zdmc+Cg==';
		me._dup__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._dup__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJ1cCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOyIgeT0iMH'+
			'B4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRUYwMzt9Cjwvc3R5bGU+CiA8dGl0bGU+RC11cC0yPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04MSw2OS45YzAsMC0xNS41LTcuOC0zMS03LjhzLTMxLDcuOC0zMSw3LjhWNTQuNGwzMS0yMy4zbDMxLDIzLjNWNjkuOXoiLz4KPC9zdmc+Cg==';
		me._dup__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="D-up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 27px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dup.onmouseover=function (e) {
			me._dup__img.style.visibility='hidden';
			me._dup__imgo.style.visibility='inherit';
		}
		me._dup.onmouseout=function (e) {
			me._dup__img.style.visibility='inherit';
			me._dup__imgo.style.visibility='hidden';
			me.elementMouseDown['dup']=false;
		}
		me._dup.onmousedown=function (e) {
			me.elementMouseDown['dup']=true;
		}
		me._dup.onmouseup=function (e) {
			me.elementMouseDown['dup']=false;
		}
		me._dup.ontouchend=function (e) {
			me.elementMouseDown['dup']=false;
		}
		me._dup.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._dup);
		el=me._ddown=document.createElement('div');
		els=me._ddown__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJkb3duIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB5PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KIDx0aXRsZT5ELWRvd24tMTwvdGl0bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTksMzEuMWMwLDAsMTUuNSw3LjgsMzEsNy44czMxLTcuOCwzMS03Ljh2MTUuNUw1MCw2OS45TDE5LDQ2LjZWMzEuMXoiLz4KPC9zdmc+Cg==';
		me._ddown__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ddown__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJkb3duIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB5PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZFRjAzO30KPC9zdHlsZT4KIDx0aXRsZT5ELWRvd24tMjwvdGl0bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTksMzEuMWMwLDAsMTUuNSw3LjgsMzEsNy44czMxLTcuOCwzMS03Ljh2MTUuNUw1MCw2OS45TDE5LDQ2LjZWMzEuMXoiLz4KPC9zdmc+Cg==';
		me._ddown__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="D-down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 27px;';
		hs+='position : absolute;';
		hs+='top : 69px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ddown.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ddown.onmouseover=function (e) {
			me._ddown__img.style.visibility='hidden';
			me._ddown__imgo.style.visibility='inherit';
		}
		me._ddown.onmouseout=function (e) {
			me._ddown__img.style.visibility='inherit';
			me._ddown__imgo.style.visibility='hidden';
			me.elementMouseDown['ddown']=false;
		}
		me._ddown.onmousedown=function (e) {
			me.elementMouseDown['ddown']=true;
		}
		me._ddown.onmouseup=function (e) {
			me.elementMouseDown['ddown']=false;
		}
		me._ddown.ontouchend=function (e) {
			me.elementMouseDown['ddown']=false;
		}
		me._ddown.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._ddown);
		el=me._dleft=document.createElement('div');
		els=me._dleft__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJsZWZ0IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB5PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KIDx0aXRsZT5ELWxlZnQtMTwvdGl0bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjkuNCwxOS41YzAsMC03LjgsMTUuNS03LjgsMzFzNy44LDMxLDcuOCwzMUg1My45bC0yMy4zLTMxbDIzLjMtMzFINjkuNHoiLz4KPC9zdmc+Cg==';
		me._dleft__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._dleft__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJsZWZ0IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB5PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZFRjAzO30KPC9zdHlsZT4KIDx0aXRsZT5ELWxlZnQtMjwvdGl0bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjkuNCwxOS41YzAsMC03LjgsMTUuNS03LjgsMzFzNy44LDMxLDcuOCwzMUg1My45bC0yMy4zLTMxbDIzLjMtMzFINjkuNHoiLz4KPC9zdmc+Cg==';
		me._dleft__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="D-left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -6px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dleft.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dleft.onmouseover=function (e) {
			me._dleft__img.style.visibility='hidden';
			me._dleft__imgo.style.visibility='inherit';
		}
		me._dleft.onmouseout=function (e) {
			me._dleft__img.style.visibility='inherit';
			me._dleft__imgo.style.visibility='hidden';
			me.elementMouseDown['dleft']=false;
		}
		me._dleft.onmousedown=function (e) {
			me.elementMouseDown['dleft']=true;
		}
		me._dleft.onmouseup=function (e) {
			me.elementMouseDown['dleft']=false;
		}
		me._dleft.ontouchend=function (e) {
			me.elementMouseDown['dleft']=false;
		}
		me._dleft.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._dleft);
		el=me._dright=document.createElement('div');
		els=me._dright__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJyaWdodCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8dGl0bGU+RC1yaWdodC0xPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMC42LDgxLjVjMCwwLDcuOC0xNS41LDcuOC0zMXMtNy44LTMxLTcuOC0zMWgxNS41bDIzLjMsMzFsLTIzLjMsMzFIMzAuNnoiLz4KPC9zdmc+Cg==';
		me._dright__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._dright__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJyaWdodCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRUYwMzt9Cjwvc3R5bGU+CiA8dGl0bGU+RC1yaWdodC0yPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMC42LDgxLjVjMCwwLDcuOC0xNS41LDcuOC0zMXMtNy44LTMxLTcuOC0zMWgxNS41bDIzLjMsMzFsLTIzLjMsMzFIMzAuNnoiLz4KPC9zdmc+Cg==';
		me._dright__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="D-right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 61px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dright.onmouseover=function (e) {
			me._dright__img.style.visibility='hidden';
			me._dright__imgo.style.visibility='inherit';
		}
		me._dright.onmouseout=function (e) {
			me._dright__img.style.visibility='inherit';
			me._dright__imgo.style.visibility='hidden';
			me.elementMouseDown['dright']=false;
		}
		me._dright.onmousedown=function (e) {
			me.elementMouseDown['dright']=true;
		}
		me._dright.onmouseup=function (e) {
			me.elementMouseDown['dright']=false;
		}
		me._dright.ontouchend=function (e) {
			me.elementMouseDown['dright']=false;
		}
		me._dright.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._dright);
		me.divSkin.appendChild(me._button_direction);
		el=me._cmap=document.createElement('div');
		el.ggId="C-Map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 13px;';
		hs+='height : 260px;';
		hs+='left : -25px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 331px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 100%';
		me._cmap.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._cmap.ggUpdatePosition=function (useTransition) {
		}
		el=me._sidemenu_back=document.createElement('div');
		el.ggId="sidemenu_back";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #9e9e9e;';
		hs+='border : 5px solid #0084e9;';
		hs+='cursor : default;';
		hs+='height : 315px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : -62px;';
		hs+='visibility : inherit;';
		hs+='width : 359px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 100%';
		me._sidemenu_back.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sidemenu_back.ggUpdatePosition=function (useTransition) {
		}
		el=me._map2a=document.createElement('div');
		els=me._map2a__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwIDUwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGMDFBMjt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8dGl0bGU+MXN0RkxPT1I8L3RpdGxlPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIyMDAiIGhlaWdodD0iNTAiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNS45LDE1Yy0xLjQsMC0yLjIsMC43LTIuMiwyLjd2Mi45aC00LjF2LTIuN2MwLTQuNCwyLjItNi45LDYuNC02LjljNC4yLDAsNi40LDIuNSw2LjQsNi45JiN4YTsmI3g5OyYjeDk7YzAsOC42LTguNSwxMS44LTguNSwxNi4z'+
			'YzAsMC4yLDAsMC40LDAsMC42SDQydjMuOUgyOS42di0zLjRjMC04LDguNS05LjQsOC41LTE3LjJDMzguMSwxNS42LDM3LjMsMTUsMzUuOSwxNXoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTAuMSwxOC45djE5LjhoLTMuOVYxMS40aDUuNEw1NiwyNy43VjExLjRoMy44djI3LjNoLTQuNEw1MC4xLDE4Ljl6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTY0LjEsMTEuNGg2LjhjNC4zLDAsNi40LDIuNCw2LjQsNi43djEzLjhjMCw0LjQtMi4xLDYuNy02LjQsNi43aC02LjhWMTEuNHogTTY4LjQsMTUuM3YxOS41aDIuNCYjeGE7JiN4OTsmI3g5O2MxLjQsMCwyLjItMC43LDIuMi0yLjdWMT'+
			'cuOWMwLTEuOS0wLjgtMi43LTIuMi0yLjdINjguNHoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOTkuOSwyMy41aDUuNXYzLjloLTUuNXYxMS4zaC00LjNWMTEuNGgxMS4zdjMuOWgtNy4xVjIzLjV6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTExMC4yLDExLjRoNC4zdjIzLjRoNy4xdjMuOWgtMTEuM1YxMS40eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMjQuMiwxNy45YzAtNC40LDIuMy02LjksNi41LTYuOWM0LjIsMCw2LjUsMi41LDYuNSw2Ljl2MTQuMmMwLDQuNC0yLjMsNi45LTYuNSw2LjljLTQuMiwwLTYuNS0yLjUtNi41LTYuOSYjeGE7JiN4OTsmI3g5O1YxNy45eiBN'+
			'MTI4LjUsMzIuNGMwLDIsMC45LDIuNywyLjIsMi43YzEuNCwwLDIuMi0wLjcsMi4yLTIuN1YxNy42YzAtMS45LTAuOS0yLjctMi4yLTIuN2MtMS40LDAtMi4yLDAuNy0yLjIsMi43VjMyLjR6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTE0MC44LDE3LjljMC00LjQsMi4zLTYuOSw2LjUtNi45czYuNSwyLjUsNi41LDYuOXYxNC4yYzAsNC40LTIuMyw2LjktNi41LDYuOXMtNi41LTIuNS02LjUtNi45VjE3Ljl6JiN4YTsmI3g5OyYjeDk7IE0xNDUuMSwzMi40YzAsMiwwLjksMi43LDIuMiwyLjdjMS40LDAsMi4yLTAuNywyLjItMi43VjE3LjZjMC0xLjktMC45LTIuNy0yLjItMi43Yy0xLjQsMC'+
			'0yLjIsMC43LTIuMiwyLjdWMzIuNHoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTY2LjgsMzguN2MtMC4yLTAuNy0wLjQtMS4xLTAuNC0zLjRWMzFjMC0yLjUtMC45LTMuNS0yLjgtMy41aC0xLjV2MTEuMWgtNC4zVjExLjRoNi41JiN4YTsmI3g5OyYjeDk7YzQuNCwwLDYuNCwyLjEsNi40LDYuM3YyLjFjMCwyLjgtMC45LDQuNi0yLjgsNS41YzIuMSwwLjksMi44LDMsMi44LDUuOHY0LjJjMCwxLjMsMCwyLjMsMC41LDMuM0gxNjYuOHogTTE2Mi4xLDE1LjN2OC40aDEuNyYjeGE7JiN4OTsmI3g5O2MxLjYsMCwyLjYtMC43LDIuNi0yLjl2LTIuN2MwLTItMC43LTIuOC0yLjItMi44SDE2Mi4x'+
			'eiIvPgogPC9nPgo8L3N2Zz4K';
		me._map2a__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map-2a";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 39px;';
		hs+='left : 192px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 153px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map2a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map2a.ggUpdatePosition=function (useTransition) {
		}
		me._sidemenu_back.appendChild(me._map2a);
		el=me._map2=document.createElement('div');
		els=me._map2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJNYXAtVGFicyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOy'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRUYwMzt9Cgkuc3Qxe2ZpbGw6IzAwODRFOTt9Cjwvc3R5bGU+CiA8dGl0bGU+bWFwLTJhPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNy41LDExaDY1LjFjMy42LDAsNi41LDIuOSw2LjUsNi41djY1LjFjMCwzLjYtMi45LDYuNS02LjUsNi41SDE3LjVjLTMuNiwwLTYuNS0yLjktNi41LTYuNVYxNy41JiN4YTsmI3g5O0MxMSwxMy45LDEzLjksMTEsMTcuNSwxMXoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01MCwzMi41Yy0yLjQsMC0zLjgsMS4zLTMuOCw0Ljd2NS4xaC03di00LjZjMC03LjYs'+
			'My44LTExLjksMTEuMS0xMS45czExLDQuMiwxMSwxMS44JiN4YTsmI3g5O2MwLDE0LjktMTQuOCwyMC40LTE0LjgsMjguMWMwLDAuMywwLDAuNywwLjEsMWgxNHY2LjhIMzkuMnYtNS44YzAtMTMuOSwxNC43LTE2LjIsMTQuNy0yOS44QzUzLjksMzMuNiw1Mi40LDMyLjUsNTAsMzIuNXoiLz4KPC9zdmc+Cg==';
		me._map2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJNYXAtVGFicyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOy'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGMDFBMjt9Cgkuc3Qxe2ZpbGw6IzAwODRFOTt9Cjwvc3R5bGU+CiA8dGl0bGU+bWFwLTJiPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNy41LDExaDY1LjFjMy42LDAsNi41LDIuOSw2LjUsNi41djY1LjFjMCwzLjYtMi45LDYuNS02LjUsNi41SDE3LjVjLTMuNiwwLTYuNS0yLjktNi41LTYuNVYxNy41JiN4YTsmI3g5O0MxMSwxMy45LDEzLjksMTEsMTcuNSwxMXoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01MCwzMi41Yy0yLjQsMC0zLjgsMS4zLTMuOCw0Ljd2NS4xaC03di00LjZjMC03LjYs'+
			'My44LTExLjksMTEuMS0xMS45czExLDQuMiwxMSwxMS44JiN4YTsmI3g5O2MwLDE0LjktMTQuOCwyMC40LTE0LjgsMjguMWMwLDAuMywwLDAuNywwLjEsMWgxNHY2LjhIMzkuMnYtNS44YzAtMTMuOSwxNC43LTE2LjIsMTQuNy0yOS44QzUzLjksMzMuNiw1Mi40LDMyLjUsNTAsMzIuNXoiLz4KPC9zdmc+Cg==';
		me._map2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="map-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 57px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map2.onclick=function (e) {
			me._minimapb.style[domTransition]='none';
			me._minimapb.style.visibility='hidden';
			me._minimapb.ggVisible=false;
			me._minimap1.style[domTransition]='none';
			me._minimap1.style.visibility='hidden';
			me._minimap1.ggVisible=false;
			me._minimap2.style[domTransition]='none';
			me._minimap2.style.visibility=(Number(me._minimap2.style.opacity)>0||!me._minimap2.style.opacity)?'inherit':'hidden';
			me._minimap2.ggVisible=true;
			me._mapb1.style[domTransition]='none';
			me._mapb1.style.visibility='hidden';
			me._mapb1.ggVisible=false;
			me._map1a.style[domTransition]='none';
			me._map1a.style.visibility='hidden';
			me._map1a.ggVisible=false;
			me._map2a.style[domTransition]='none';
			me._map2a.style.visibility=(Number(me._map2a.style.opacity)>0||!me._map2a.style.opacity)?'inherit':'hidden';
			me._map2a.ggVisible=true;
		}
		me._map2.onmouseover=function (e) {
			me._map2__img.style.visibility='hidden';
			me._map2__imgo.style.visibility='inherit';
		}
		me._map2.onmouseout=function (e) {
			me._map2__img.style.visibility='inherit';
			me._map2__imgo.style.visibility='hidden';
		}
		me._map2.ggUpdatePosition=function (useTransition) {
		}
		me._sidemenu_back.appendChild(me._map2);
		el=me._map1a=document.createElement('div');
		els=me._map1a__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwIDUwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGMDFBMjt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8dGl0bGU+MXN0RkxPT1I8L3RpdGxlPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIyMDAiIGhlaWdodD0iNTAiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zOCwxNC44YzMuMywwLDQuMS0xLjYsNC43LTMuNGgyLjl2MjcuM2gtNC4zVjE3LjhIMzhWMTQuOHoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTcuNywxMS4xYzQuMiwwLDYuMywyLjUsNi4zLDYuOXYwLjloLTQuMXYt'+
			'MS4xYzAtMS45LTAuOC0yLjctMi4xLTIuN3MtMi4xLDAuNy0yLjEsMi43JiN4YTsmI3g5OyYjeDk7YzAsNS42LDguNCw2LjcsOC40LDE0LjVjMCw0LjQtMi4yLDYuOS02LjQsNi45cy02LjQtMi41LTYuNC02Ljl2LTEuN2g0LjF2MmMwLDIsMC45LDIuNywyLjIsMi43czIuMi0wLjcsMi4yLTIuNyYjeGE7JiN4OTsmI3g5O2MwLTUuNi04LjQtNi43LTguNC0xNC41QzUxLjQsMTMuNSw1My41LDExLjEsNTcuNywxMS4xeiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02Ni40LDExLjRoMTMuM3YzLjloLTQuNXYyMy40aC00LjNWMTUuM2gtNC41VjExLjR6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD'+
			'0iTTk0LjIsMjMuNWg1LjV2My45aC01LjV2MTEuM2gtNC4zVjExLjRoMTEuM3YzLjloLTcuMUw5NC4yLDIzLjVMOTQuMiwyMy41eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMDQuNSwxMS40aDQuM3YyMy40aDcuMXYzLjloLTExLjNMMTA0LjUsMTEuNEwxMDQuNSwxMS40eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMTguNiwxNy45YzAtNC40LDIuMy02LjksNi41LTYuOWM0LjIsMCw2LjUsMi41LDYuNSw2Ljl2MTQuMmMwLDQuNC0yLjMsNi45LTYuNSw2LjlzLTYuNS0yLjUtNi41LTYuOSYjeGE7JiN4OTsmI3g5O0MxMTguNiwzMi4xLDExOC42LDE3LjksMTE4LjYsMTcuOXogTTEy'+
			'Mi45LDMyLjRjMCwyLDAuOSwyLjcsMi4yLDIuN2MxLjQsMCwyLjItMC43LDIuMi0yLjdWMTcuNmMwLTEuOS0wLjktMi43LTIuMi0yLjcmI3hhOyYjeDk7JiN4OTtjLTEuNCwwLTIuMiwwLjctMi4yLDIuN1YzMi40eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMzUuMiwxNy45YzAtNC40LDIuMy02LjksNi41LTYuOXM2LjUsMi41LDYuNSw2Ljl2MTQuMmMwLDQuNC0yLjMsNi45LTYuNSw2LjlzLTYuNS0yLjUtNi41LTYuOVYxNy45eiYjeGE7JiN4OTsmI3g5OyBNMTM5LjUsMzIuNGMwLDIsMC45LDIuNywyLjIsMi43czIuMi0wLjcsMi4yLTIuN1YxNy42YzAtMS45LTAuOS0yLjctMi4yLTIuN3'+
			'MtMi4yLDAuNy0yLjIsMi43VjMyLjR6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTE2MS4xLDM4LjdjLTAuMi0wLjctMC40LTEuMS0wLjQtMy40VjMxYzAtMi41LTAuOS0zLjUtMi44LTMuNWgtMS41djExLjFoLTQuM1YxMS40aDYuNSYjeGE7JiN4OTsmI3g5O2M0LjQsMCw2LjQsMi4xLDYuNCw2LjN2Mi4xYzAsMi44LTAuOSw0LjYtMi44LDUuNWMyLjEsMC45LDIuOCwzLDIuOCw1Ljh2NC4yYzAsMS4zLDAsMi4zLDAuNSwzLjNMMTYxLjEsMzguN0wxNjEuMSwzOC43eiYjeGE7JiN4OTsmI3g5OyBNMTU2LjQsMTUuM3Y4LjRoMS43YzEuNiwwLDIuNi0wLjcsMi42LTIuOXYtMi43YzAtMi0wLjct'+
			'Mi44LTIuMi0yLjhIMTU2LjR6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._map1a__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map-1a";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 39px;';
		hs+='left : 192px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 153px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map1a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map1a.ggUpdatePosition=function (useTransition) {
		}
		me._sidemenu_back.appendChild(me._map1a);
		el=me._map1=document.createElement('div');
		els=me._map1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJNYXAtVGFicyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOy'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRUYwMzt9Cgkuc3Qxe2ZpbGw6IzAwODRFOTt9Cjwvc3R5bGU+CiA8dGl0bGU+bWFwLTFhPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNy41LDExaDY1LjFjMy42LDAsNi41LDIuOSw2LjUsNi41djY1LjFjMCwzLjYtMi45LDYuNS02LjUsNi41SDE3LjVjLTMuNiwwLTYuNS0yLjktNi41LTYuNVYxNy41JiN4YTsmI3g5O0MxMSwxMy45LDEzLjksMTEsMTcuNSwxMXoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00MS44LDMyLjJjNS43LDAsNy0yLjgsOC4yLTUuOWg1djQ3LjJoLTcuNHYtMzZoLTUu'+
			'N0w0MS44LDMyLjJMNDEuOCwzMi4yeiIvPgo8L3N2Zz4K';
		me._map1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJNYXAtVGFicyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOy'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGMDFBMjt9Cgkuc3Qxe2ZpbGw6IzAwODRFOTt9Cjwvc3R5bGU+CiA8dGl0bGU+bWFwLTFiPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNy41LDExaDY1LjFjMy42LDAsNi41LDIuOSw2LjUsNi41djY1LjFjMCwzLjYtMi45LDYuNS02LjUsNi41SDE3LjVjLTMuNiwwLTYuNS0yLjktNi41LTYuNVYxNy41JiN4YTsmI3g5O0MxMSwxMy45LDEzLjksMTEsMTcuNSwxMXoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00MS44LDMyLjJjNS43LDAsNy0yLjgsOC4yLTUuOWg1djQ3LjJoLTcuNHYtMzZoLTUu'+
			'N0w0MS44LDMyLjJMNDEuOCwzMi4yeiIvPgo8L3N2Zz4K';
		me._map1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="map-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map1.onclick=function (e) {
			me._minimapb.style[domTransition]='none';
			me._minimapb.style.visibility='hidden';
			me._minimapb.ggVisible=false;
			me._minimap1.style[domTransition]='none';
			me._minimap1.style.visibility=(Number(me._minimap1.style.opacity)>0||!me._minimap1.style.opacity)?'inherit':'hidden';
			me._minimap1.ggVisible=true;
			me._minimap2.style[domTransition]='none';
			me._minimap2.style.visibility='hidden';
			me._minimap2.ggVisible=false;
			me._mapb1.style[domTransition]='none';
			me._mapb1.style.visibility='hidden';
			me._mapb1.ggVisible=false;
			me._map1a.style[domTransition]='none';
			me._map1a.style.visibility=(Number(me._map1a.style.opacity)>0||!me._map1a.style.opacity)?'inherit':'hidden';
			me._map1a.ggVisible=true;
			me._map2a.style[domTransition]='none';
			me._map2a.style.visibility='hidden';
			me._map2a.ggVisible=false;
		}
		me._map1.onmouseover=function (e) {
			me._map1__img.style.visibility='hidden';
			me._map1__imgo.style.visibility='inherit';
		}
		me._map1.onmouseout=function (e) {
			me._map1__img.style.visibility='inherit';
			me._map1__imgo.style.visibility='hidden';
		}
		me._map1.ggUpdatePosition=function (useTransition) {
		}
		me._sidemenu_back.appendChild(me._map1);
		el=me._mapb1=document.createElement('div');
		els=me._mapb1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwIDUwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0VGRDZCNDtzdHJva2U6IzA3NEQ0MjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzA3NEQ0Mjt9Cjwvc3R5bGU+CiA8dGl0bGU+QkFTRU1FTlQ8L3RpdGxlPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxOTciIHg9IjEuNSIgeT0iMS41IiBoZWlnaHQ9IjQ3Ii8+CiA8L2c+CiA8ZyBpZD0iVEVYVCI+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTQzLjYsMTMuMmMzLjgsMCw1LjksMi4yLDUuOSw2LjF2MC41YzAsMi43LTEuMiw0LjMt'+
			'My4xLDV2MC4xYzIuMywwLjcsMy42LDIuNSwzLjYsNS43djAuOCYjeGE7JiN4OTsmI3g5O2MwLDQtMi4yLDYuMS02LjEsNi4xaC01LjRWMTMuMkg0My42eiBNNDIuMiwyMy4yaDEuMmMxLjgsMCwyLjUtMC45LDIuNS0zdi0wLjhjMC0yLTAuNy0yLjktMi4zLTIuOWgtMS4zTDQyLjIsMjMuMnogTTQyLjIsMzQuMSYjeGE7JiN4OTsmI3g5O2gxLjZjMS44LDAsMi42LTAuOSwyLjYtM3YtMS4zYzAtMi4xLTAuOC0zLjEtMi43LTMuMWgtMS40TDQyLjIsMzQuMXoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjIsMzcuNUw2MS4yLDMyaC00LjFsLTAuOCw1LjVoLTMuN2w0LjItMjQuM2g0LjdsNC4yLD'+
			'I0LjNMNjIsMzcuNXogTTU3LjYsMjguNmgzLjFsLTEuNS0xMC45aC0wLjFMNTcuNiwyOC42JiN4YTsmI3g5OyYjeDk7eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik03OS4zLDE4LjR2MC40bC0zLjUsMC43di0wLjhjMC0xLjctMC42LTIuNC0xLjktMi40Yy0wLjktMC4xLTEuOCwwLjYtMS45LDEuNmMwLDAuMSwwLDAuMywwLDAuNHYwLjUmI3hhOyYjeDk7JiN4OTtjMCwxLjQsMC43LDIuNSwzLjEsNC42YzMuMywzLDQuNCw1LDQuNCw3Ljh2MS4yYzAsMy42LTIuMyw1LjUtNS42LDUuNXMtNS43LTItNS43LTUuNVYzMWwzLjUtMC43VjMyYzAsMS42LDAuOCwyLjQsMi4xLDIuNCYjeGE7JiN4OTsm'+
			'I3g5O2MxLjEsMCwyLTAuNiwyLTIuM3YtMC44YzAtMS41LTAuNy0yLjYtMy4xLTQuOGMtMy4zLTMtNC40LTUtNC40LTcuNnYtMC42YzAtMy42LDIuMS01LjQsNS41LTUuNFM3OS4zLDE0LjgsNzkuMywxOC40eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04Ni42LDE2LjZ2Ni45aDUuNGwtMC4zLDMuNGgtNXY3LjJoNi43djMuNEg4Mi45VjEzLjJoMTAuM3YzLjRIODYuNnoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTA5LjMsMzcuNVYyMC42aC0wLjFMMTA1LjgsMzRoLTEuNWwtMy40LTEzLjRoLTAuMXYxNi45aC0zLjVWMTMuMmg0LjhsMi45LDEzaDAuMWwyLjgtMTNoNXYyNC4zSDEwOS'+
			'4zeiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMjEuNiwxNi42djYuOWg1LjRsLTAuMywzLjRoLTV2Ny4yaDYuN3YzLjRIMTE4VjEzLjJoMTAuM3YzLjRIMTIxLjZ6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTE0MC44LDM3LjVMMTM2LDIxLjRoLTAuMXYxNi4xaC0zLjVWMTMuMmg0LjFsNC4zLDE0LjVoMC4xVjEzLjJoMy41djI0LjNIMTQwLjh6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTE1NS40LDE2Ljd2MjAuOGgtMy43VjE2LjdoLTMuOXYtMy41aDExLjV2My41SDE1NS40eiIvPgogPC9nPgo8L3N2Zz4K';
		me._mapb1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map-b1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 39px;';
		hs+='left : 192px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 153px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mapb1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mapb1.ggUpdatePosition=function (useTransition) {
		}
		me._sidemenu_back.appendChild(me._mapb1);
		el=me._mapb=document.createElement('div');
		els=me._mapb__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJNYXAtVGFicyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOy'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzA3NEQ0MjtzdHJva2U6I0FBODkyRTtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8dGl0bGU+bWFwLWIxPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNy41LDExaDY1LjFjMy42LDAsNi41LDIuOSw2LjUsNi41djY1LjFjMCwzLjYtMi45LDYuNS02LjUsNi41SDE3LjVjLTMuNiwwLTYuNS0yLjktNi41LTYuNVYxNy41JiN4YTsmI3g5O0MxMSwxMy45LDEzLjksMTEsMTcuNSwxMXoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9'+
			'Ik02MiwzNy4xdjEuN2MwLDQuOS0xLjUsOC00LjgsOS41YzQsMS41LDUuNSw1LjEsNS41LDEwLjF2My44YzAsNy4zLTMuOCwxMS4yLTExLjMsMTEuMkgzOS44VjI2LjJINTEmI3hhOyYjeDk7QzU4LjcsMjYuMiw2MiwyOS44LDYyLDM3LjF6IE00Ny4zLDMzdjEyLjVoMi45YzIuOCwwLDQuNS0xLjIsNC41LTV2LTIuNmMwLTMuNC0xLjEtNC45LTMuOC00LjlINDcuM3ogTTQ3LjMsNTIuMnYxNC41aDQuMiYjeGE7JiN4OTtjMi41LDAsMy44LTEuMiwzLjgtNC43VjU4YzAtNC40LTEuNC01LjctNC44LTUuN0w0Ny4zLDUyLjJ6Ii8+Cjwvc3ZnPgo=';
		me._mapb__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._mapb__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJNYXAtVGFicyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOy'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0FBODkyRTtzdHJva2U6IzA3NEQ0MjtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzA3NEQ0Mjt9Cjwvc3R5bGU+CiA8dGl0bGU+bWFwLWIyPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNy41LDExaDY1LjFjMy42LDAsNi41LDIuOSw2LjUsNi41djY1LjFjMCwzLjYtMi45LDYuNS02LjUsNi41SDE3LjVjLTMuNiwwLTYuNS0yLjktNi41LTYuNVYxNy41JiN4YTsmI3g5O0MxMSwxMy45LDEzLjksMTEsMTcuNSwxMXoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9'+
			'Ik02MiwzNy4xdjEuN2MwLDQuOS0xLjUsOC00LjgsOS41YzQsMS41LDUuNSw1LjEsNS41LDEwLjF2My44YzAsNy4zLTMuOCwxMS4yLTExLjMsMTEuMkgzOS44VjI2LjJINTEmI3hhOyYjeDk7QzU4LjcsMjYuMiw2MiwyOS44LDYyLDM3LjF6IE00Ny4zLDMzdjEyLjVoMi45YzIuOCwwLDQuNS0xLjIsNC41LTV2LTIuNmMwLTMuNC0xLjEtNC45LTMuOC00LjlINDcuM3ogTTQ3LjMsNTIuMnYxNC41aDQuMiYjeGE7JiN4OTtjMi41LDAsMy44LTEuMiwzLjgtNC43VjU4YzAtNC40LTEuNC01LjctNC44LTUuN0w0Ny4zLDUyLjJ6Ii8+Cjwvc3ZnPgo=';
		me._mapb__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="map-b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 102px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mapb.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mapb.onclick=function (e) {
			me._minimapb.style[domTransition]='none';
			me._minimapb.style.visibility=(Number(me._minimapb.style.opacity)>0||!me._minimapb.style.opacity)?'inherit':'hidden';
			me._minimapb.ggVisible=true;
			me._minimap1.style[domTransition]='none';
			me._minimap1.style.visibility='hidden';
			me._minimap1.ggVisible=false;
			me._minimap2.style[domTransition]='none';
			me._minimap2.style.visibility='hidden';
			me._minimap2.ggVisible=false;
			me._mapb1.style[domTransition]='none';
			me._mapb1.style.visibility=(Number(me._mapb1.style.opacity)>0||!me._mapb1.style.opacity)?'inherit':'hidden';
			me._mapb1.ggVisible=true;
			me._map1a.style[domTransition]='none';
			me._map1a.style.visibility='hidden';
			me._map1a.ggVisible=false;
			me._map2a.style[domTransition]='none';
			me._map2a.style.visibility='hidden';
			me._map2a.ggVisible=false;
		}
		me._mapb.onmouseover=function (e) {
			me._mapb__img.style.visibility='hidden';
			me._mapb__imgo.style.visibility='inherit';
		}
		me._mapb.onmouseout=function (e) {
			me._mapb__img.style.visibility='inherit';
			me._mapb__imgo.style.visibility='hidden';
		}
		me._mapb.ggUpdatePosition=function (useTransition) {
		}
		me._sidemenu_back.appendChild(me._mapb);
		me._cmap.appendChild(me._sidemenu_back);
		el=me._minimap2=document.createElement('div');
		el.ggId="minimap-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 207px;';
		hs+='left : 48px;';
		hs+='position : absolute;';
		hs+='top : 33px;';
		hs+='visibility : inherit;';
		hs+='width : 275px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 100%';
		me._minimap2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimap2.ggUpdatePosition=function (useTransition) {
		}
		el=me._minimap20=document.createElement('div');
		els=me._minimap20__img=document.createElement('img');
		els.className='ggskin ggskin_minimap20';
		hs=basePath + 'images/minimap20.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="minimap2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -5px;';
		hs+='height : 247px;';
		hs+='left : 56px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._minimap20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimap20.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_node6=document.createElement('div');
		el.ggMarkerNodeId='{node6}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 142px;';
		hs+='position : absolute;';
		hs+='top : 112px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node6.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node6.onclick=function (e) {
			player.openNext('{node6}');
		}
		me._marker_node6.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_marker_node8=document.createElement('div');
		els=me._tt_marker_node8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_marker_node";
		el.ggDx=7;
		el.ggDy=19;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #0084e9;';
		hs+='background: rgba(0,132,233,0.705882);';
		hs+='border: 2px solid #ff01a2;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="HALL";
		el.appendChild(els);
		me._tt_marker_node8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_marker_node8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._tt_marker_node8.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_marker_node8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_marker_node8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_marker_node8.style[domTransition]='';
				if (me._tt_marker_node8.ggCurrentLogicStateVisible == 0) {
					me._tt_marker_node8.style.visibility=(Number(me._tt_marker_node8.style.opacity)>0||!me._tt_marker_node8.style.opacity)?'inherit':'hidden';
					me._tt_marker_node8.ggVisible=true;
				}
				else {
					me._tt_marker_node8.style.visibility="hidden";
					me._tt_marker_node8.ggVisible=false;
				}
			}
		}
		me._tt_marker_node8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 4;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((104-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._marker_node6.appendChild(me._tt_marker_node8);
		me._minimap20.appendChild(me._marker_node6);
		el=me._marker_node7=document.createElement('div');
		el.ggMarkerNodeId='{node7}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 103px;';
		hs+='position : absolute;';
		hs+='top : 69px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node7.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node7.onclick=function (e) {
			player.openNext('{node7}');
		}
		me._marker_node7.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_marker_node7=document.createElement('div');
		els=me._tt_marker_node7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_marker_node";
		el.ggDx=-12;
		el.ggDy=-15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #0084e9;';
		hs+='background: rgba(0,132,233,0.705882);';
		hs+='border: 2px solid #ff01a2;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="ACTIVITY ROOM";
		el.appendChild(els);
		me._tt_marker_node7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_marker_node7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._tt_marker_node7.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_marker_node7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_marker_node7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_marker_node7.style[domTransition]='';
				if (me._tt_marker_node7.ggCurrentLogicStateVisible == 0) {
					me._tt_marker_node7.style.visibility=(Number(me._tt_marker_node7.style.opacity)>0||!me._tt_marker_node7.style.opacity)?'inherit':'hidden';
					me._tt_marker_node7.ggVisible=true;
				}
				else {
					me._tt_marker_node7.style.visibility="hidden";
					me._tt_marker_node7.ggVisible=false;
				}
			}
		}
		me._tt_marker_node7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 4;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((104-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._marker_node7.appendChild(me._tt_marker_node7);
		me._minimap20.appendChild(me._marker_node7);
		el=me._marker_node8=document.createElement('div');
		el.ggMarkerNodeId='{node8}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 92px;';
		hs+='position : absolute;';
		hs+='top : 188px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node8.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node8.onclick=function (e) {
			player.openNext('{node8}');
		}
		me._marker_node8.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_marker_node6=document.createElement('div');
		els=me._tt_marker_node6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_marker_node";
		el.ggDx=6;
		el.ggDy=23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #0084e9;';
		hs+='background: rgba(0,132,233,0.705882);';
		hs+='border: 2px solid #ff01a2;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="MASTER BEDROOM";
		el.appendChild(els);
		me._tt_marker_node6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_marker_node6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._tt_marker_node6.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_marker_node6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_marker_node6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_marker_node6.style[domTransition]='';
				if (me._tt_marker_node6.ggCurrentLogicStateVisible == 0) {
					me._tt_marker_node6.style.visibility=(Number(me._tt_marker_node6.style.opacity)>0||!me._tt_marker_node6.style.opacity)?'inherit':'hidden';
					me._tt_marker_node6.ggVisible=true;
				}
				else {
					me._tt_marker_node6.style.visibility="hidden";
					me._tt_marker_node6.ggVisible=false;
				}
			}
		}
		me._tt_marker_node6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 4;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((104-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._marker_node8.appendChild(me._tt_marker_node6);
		me._minimap20.appendChild(me._marker_node8);
		el=me._marker_node9=document.createElement('div');
		el.ggMarkerNodeId='{node9}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 76px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node9.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node9.onclick=function (e) {
			player.openNext('{node9}');
		}
		me._marker_node9.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_marker_node5=document.createElement('div');
		els=me._tt_marker_node5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_marker_node";
		el.ggDx=0;
		el.ggDy=-18;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #0084e9;';
		hs+='background: rgba(0,132,233,0.705882);';
		hs+='border: 2px solid #ff01a2;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="MASTER BATHROOM";
		el.appendChild(els);
		me._tt_marker_node5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_marker_node5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._tt_marker_node5.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_marker_node5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_marker_node5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_marker_node5.style[domTransition]='';
				if (me._tt_marker_node5.ggCurrentLogicStateVisible == 0) {
					me._tt_marker_node5.style.visibility=(Number(me._tt_marker_node5.style.opacity)>0||!me._tt_marker_node5.style.opacity)?'inherit':'hidden';
					me._tt_marker_node5.ggVisible=true;
				}
				else {
					me._tt_marker_node5.style.visibility="hidden";
					me._tt_marker_node5.ggVisible=false;
				}
			}
		}
		me._tt_marker_node5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 4;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((104-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._marker_node9.appendChild(me._tt_marker_node5);
		me._minimap20.appendChild(me._marker_node9);
		el=me._marker_node10=document.createElement('div');
		el.ggMarkerNodeId='{node10}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 198px;';
		hs+='position : absolute;';
		hs+='top : 72px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node10.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node10.onclick=function (e) {
			player.openNext('{node10}');
		}
		me._marker_node10.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_marker_node4=document.createElement('div');
		els=me._tt_marker_node4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_marker_node";
		el.ggDx=7;
		el.ggDy=-14;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #0084e9;';
		hs+='background: rgba(0,132,233,0.705882);';
		hs+='border: 2px solid #ff01a2;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="BEDROOM";
		el.appendChild(els);
		me._tt_marker_node4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_marker_node4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._tt_marker_node4.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_marker_node4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_marker_node4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_marker_node4.style[domTransition]='';
				if (me._tt_marker_node4.ggCurrentLogicStateVisible == 0) {
					me._tt_marker_node4.style.visibility=(Number(me._tt_marker_node4.style.opacity)>0||!me._tt_marker_node4.style.opacity)?'inherit':'hidden';
					me._tt_marker_node4.ggVisible=true;
				}
				else {
					me._tt_marker_node4.style.visibility="hidden";
					me._tt_marker_node4.ggVisible=false;
				}
			}
		}
		me._tt_marker_node4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 4;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((104-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._marker_node10.appendChild(me._tt_marker_node4);
		me._minimap20.appendChild(me._marker_node10);
		me._minimap2.appendChild(me._minimap20);
		me._cmap.appendChild(me._minimap2);
		el=me._minimap1=document.createElement('div');
		el.ggId="minimap-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 275px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 335px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 100%';
		me._minimap1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimap1.ggUpdatePosition=function (useTransition) {
		}
		el=me._minimap10=document.createElement('div');
		els=me._minimap10__img=document.createElement('img');
		els.className='ggskin ggskin_minimap10';
		hs=basePath + 'images/minimap10.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="minimap1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 247px;';
		hs+='left : 104px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._minimap10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimap10.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_node1=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 171px;';
		hs+='position : absolute;';
		hs+='top : 177px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node1.onclick=function (e) {
			player.openNext('{node1}');
		}
		me._marker_node1.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_marker_node3=document.createElement('div');
		els=me._tt_marker_node3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_marker_node";
		el.ggDx=7;
		el.ggDy=22;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #0084e9;';
		hs+='background: rgba(0,132,233,0.705882);';
		hs+='border: 2px solid #ff01a2;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="FOYER";
		el.appendChild(els);
		me._tt_marker_node3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_marker_node3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._tt_marker_node3.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_marker_node3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_marker_node3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_marker_node3.style[domTransition]='';
				if (me._tt_marker_node3.ggCurrentLogicStateVisible == 0) {
					me._tt_marker_node3.style.visibility=(Number(me._tt_marker_node3.style.opacity)>0||!me._tt_marker_node3.style.opacity)?'inherit':'hidden';
					me._tt_marker_node3.ggVisible=true;
				}
				else {
					me._tt_marker_node3.style.visibility="hidden";
					me._tt_marker_node3.ggVisible=false;
				}
			}
		}
		me._tt_marker_node3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 4;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((104-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._marker_node1.appendChild(me._tt_marker_node3);
		me._minimap10.appendChild(me._marker_node1);
		el=me._marker_node2=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 205px;';
		hs+='position : absolute;';
		hs+='top : 133px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node2.onclick=function (e) {
			player.openNext('{node2}');
		}
		me._marker_node2.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_marker_node2=document.createElement('div');
		els=me._tt_marker_node2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_marker_node";
		el.ggDx=8;
		el.ggDy=21;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #0084e9;';
		hs+='background: rgba(0,132,233,0.705882);';
		hs+='border: 2px solid #ff01a2;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="DINING ROOM";
		el.appendChild(els);
		me._tt_marker_node2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_marker_node2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._tt_marker_node2.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_marker_node2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_marker_node2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_marker_node2.style[domTransition]='';
				if (me._tt_marker_node2.ggCurrentLogicStateVisible == 0) {
					me._tt_marker_node2.style.visibility=(Number(me._tt_marker_node2.style.opacity)>0||!me._tt_marker_node2.style.opacity)?'inherit':'hidden';
					me._tt_marker_node2.ggVisible=true;
				}
				else {
					me._tt_marker_node2.style.visibility="hidden";
					me._tt_marker_node2.ggVisible=false;
				}
			}
		}
		me._tt_marker_node2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 4;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((104-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._marker_node2.appendChild(me._tt_marker_node2);
		me._minimap10.appendChild(me._marker_node2);
		el=me._marker_node3=document.createElement('div');
		el.ggMarkerNodeId='{node3}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 196px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node3.onclick=function (e) {
			player.openNext('{node3}');
		}
		me._marker_node3.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_marker_node1=document.createElement('div');
		els=me._tt_marker_node1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_marker_node";
		el.ggDx=7;
		el.ggDy=23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #0084e9;';
		hs+='background: rgba(0,132,233,0.705882);';
		hs+='border: 2px solid #ff01a2;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="KITCHEN";
		el.appendChild(els);
		me._tt_marker_node1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_marker_node1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._tt_marker_node1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_marker_node1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_marker_node1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_marker_node1.style[domTransition]='';
				if (me._tt_marker_node1.ggCurrentLogicStateVisible == 0) {
					me._tt_marker_node1.style.visibility=(Number(me._tt_marker_node1.style.opacity)>0||!me._tt_marker_node1.style.opacity)?'inherit':'hidden';
					me._tt_marker_node1.ggVisible=true;
				}
				else {
					me._tt_marker_node1.style.visibility="hidden";
					me._tt_marker_node1.ggVisible=false;
				}
			}
		}
		me._tt_marker_node1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 4;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((104-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._marker_node3.appendChild(me._tt_marker_node1);
		me._minimap10.appendChild(me._marker_node3);
		el=me._marker_node4=document.createElement('div');
		el.ggMarkerNodeId='{node4}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 92px;';
		hs+='position : absolute;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node4.onclick=function (e) {
			player.openNext('{node4}');
		}
		me._marker_node4.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_marker_node0=document.createElement('div');
		els=me._tt_marker_node0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_marker_node";
		el.ggDx=5;
		el.ggDy=-15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #0084e9;';
		hs+='background: rgba(0,132,233,0.705882);';
		hs+='border: 2px solid #ff01a2;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="FAMILY ROOM";
		el.appendChild(els);
		me._tt_marker_node0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_marker_node0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._tt_marker_node0.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_marker_node0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_marker_node0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_marker_node0.style[domTransition]='';
				if (me._tt_marker_node0.ggCurrentLogicStateVisible == 0) {
					me._tt_marker_node0.style.visibility=(Number(me._tt_marker_node0.style.opacity)>0||!me._tt_marker_node0.style.opacity)?'inherit':'hidden';
					me._tt_marker_node0.ggVisible=true;
				}
				else {
					me._tt_marker_node0.style.visibility="hidden";
					me._tt_marker_node0.ggVisible=false;
				}
			}
		}
		me._tt_marker_node0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 4;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((104-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._marker_node4.appendChild(me._tt_marker_node0);
		me._minimap10.appendChild(me._marker_node4);
		el=me._marker_node5=document.createElement('div');
		el.ggMarkerNodeId='{node5}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 167px;';
		hs+='position : absolute;';
		hs+='top : 33px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node5.onclick=function (e) {
			player.openNext('{node5}');
		}
		me._marker_node5.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_marker_node=document.createElement('div');
		els=me._tt_marker_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_marker_node";
		el.ggDx=8;
		el.ggDy=-15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #0084e9;';
		hs+='background: rgba(0,132,233,0.705882);';
		hs+='border: 2px solid #ff01a2;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="SUN ROOM";
		el.appendChild(els);
		me._tt_marker_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_marker_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._tt_marker_node.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_marker_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_marker_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_marker_node.style[domTransition]='';
				if (me._tt_marker_node.ggCurrentLogicStateVisible == 0) {
					me._tt_marker_node.style.visibility=(Number(me._tt_marker_node.style.opacity)>0||!me._tt_marker_node.style.opacity)?'inherit':'hidden';
					me._tt_marker_node.ggVisible=true;
				}
				else {
					me._tt_marker_node.style.visibility="hidden";
					me._tt_marker_node.ggVisible=false;
				}
			}
		}
		me._tt_marker_node.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 4;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((104-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._marker_node5.appendChild(me._tt_marker_node);
		me._minimap10.appendChild(me._marker_node5);
		me._minimap1.appendChild(me._minimap10);
		me._cmap.appendChild(me._minimap1);
		el=me._minimapb=document.createElement('div');
		el.ggId="minimap-b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 275px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : hidden;';
		hs+='width : 335px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 100%';
		me._minimapb.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimapb.ggUpdatePosition=function (useTransition) {
		}
		el=me._minimap3=document.createElement('div');
		els=me._minimap3__img=document.createElement('img');
		els.className='ggskin ggskin_minimap3';
		hs=basePath + 'images/minimap3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="minimap3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 247px;';
		hs+='left : 36px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._minimap3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimap3.ggUpdatePosition=function (useTransition) {
		}
		me._minimapb.appendChild(me._minimap3);
		me._cmap.appendChild(me._minimapb);
		me.divSkin.appendChild(me._cmap);
		el=me._map=document.createElement('div');
		els=me._map__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJmdWxsIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB5PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMDA4NEU5O30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KIDx0aXRsZT5NYXAtMTwvdGl0bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTcuNSwxMWg2NS4xYzMuNiwwLDYuNSwyLjksNi41LDYuNXY2NS4xYzAsMy42LTIuOSw2LjUtNi41LDYuNUgxNy41Yy0zLjYsMC02LjUtMi45LTYuNS02LjVWMTcuNSYjeGE7JiN4OTtDMTEsMTMuOSwxMy45LDExLDE3LjUsMTF6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTguNSw1MS45YzIuNywwLDUtMC4xLDcuMiwwYzAuOCwwLDEuNSwwLjMsMiwwLjljMy4yLDUu'+
			'Niw2LjMsMTEuMyw5LjUsMTYuOWMwLjEsMC4zLDAuMSwwLjUsMC4xLDAuOEgyMi45JiN4YTsmI3g5O2MwLjEtMC41LDAuMy0xLDAuNS0xLjVjMi45LTUuMiw1LjgtMTAuMyw4LjctMTUuNmMwLjUtMS4xLDEuNi0xLjgsMi44LTEuNmMyLjUsMC4xLDUsMCw3LjksMGMtMS4yLTIuMy0yLjItNC4yLTMtNi4xJiN4YTsmI3g5O2MtMS44LTMuOC0zLTcuOC0xLjYtMTJjMS44LTUuNiw4LjMtOS41LDE0LjQtOC42YzYuNiwxLDExLjcsNS45LDExLjQsMTJDNjMuOCw0MS4xLDYyLDQ1LjgsNTguNSw1MS45eiBNNTAuOCw1Ny40JiN4YTsmI3g5O2M0LTUuNyw3LjYtMTAuOSw5LjItMTcuMmMxLjEtMy43LTAuNC'+
			'03LjctMy41LTkuOGMtMi45LTIuNC03LTIuNy0xMC4yLTAuN2MtMy40LDEuNy01LjMsNS41LTQuOCw5LjJDNDIuNCw0Ni4xLDQ2LjYsNTEuNSw1MC44LDU3LjQmI3hhOyYjeDk7eiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTUwLjksNDMuOGMtMi41LDAuMS00LjYtMS44LTQuNy00LjNjMC0wLjEsMC0wLjIsMC0wLjJjMC0yLjYsMi4xLTQuNyw0LjYtNC43YzIuNS0wLjEsNC41LDEuOSw0LjYsNC4zJiN4YTsmI3g5O2MwLDAuMSwwLDAuMiwwLDAuM2MwLjIsMi40LTEuNiw0LjQtMy45LDQuNkM1MS4zLDQzLjgsNTEuMSw0My44LDUwLjksNDMuOHoiLz4KPC9zdmc+Cg==';
		me._map__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJmdWxsIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB5PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMDA4NEU5O30KCS5zdDF7ZmlsbDojRkZFRjAzO30KPC9zdHlsZT4KIDx0aXRsZT5NYXAtMjwvdGl0bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTcuNSwxMWg2NS4xYzMuNiwwLDYuNSwyLjksNi41LDYuNXY2NS4xYzAsMy42LTIuOSw2LjUtNi41LDYuNUgxNy41Yy0zLjYsMC02LjUtMi45LTYuNS02LjVWMTcuNSYjeGE7JiN4OTtDMTEsMTMuOSwxMy45LDExLDE3LjUsMTF6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTguNSw1MS45YzIuNywwLDUtMC4xLDcuMiwwYzAuOCwwLDEuNSwwLjMsMiwwLjljMy4yLDUu'+
			'Niw2LjMsMTEuMyw5LjUsMTYuOWMwLjEsMC4zLDAuMSwwLjUsMC4xLDAuOEgyMi45JiN4YTsmI3g5O2MwLjEtMC41LDAuMy0xLDAuNS0xLjVjMi45LTUuMiw1LjgtMTAuMyw4LjctMTUuNmMwLjUtMS4xLDEuNi0xLjgsMi44LTEuNmMyLjUsMC4xLDUsMCw3LjksMGMtMS4yLTIuMy0yLjItNC4yLTMtNi4xJiN4YTsmI3g5O2MtMS44LTMuOC0zLTcuOC0xLjYtMTJjMS44LTUuNiw4LjMtOS41LDE0LjQtOC42YzYuNiwxLDExLjcsNS45LDExLjQsMTJDNjMuOCw0MS4xLDYyLDQ1LjgsNTguNSw1MS45eiBNNTAuOCw1Ny40JiN4YTsmI3g5O2M0LTUuNyw3LjYtMTAuOSw5LjItMTcuMmMxLjEtMy43LTAuNC'+
			'03LjctMy41LTkuOGMtMi45LTIuNC03LTIuNy0xMC4yLTAuN2MtMy40LDEuNy01LjMsNS41LTQuOCw5LjJDNDIuNCw0Ni4xLDQ2LjYsNTEuNSw1MC44LDU3LjQmI3hhOyYjeDk7eiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTUwLjksNDMuOGMtMi41LDAuMS00LjYtMS44LTQuNy00LjNjMC0wLjEsMC0wLjIsMC0wLjJjMC0yLjYsMi4xLTQuNyw0LjYtNC43YzIuNS0wLjEsNC41LDEuOSw0LjYsNC4zJiN4YTsmI3g5O2MwLDAuMSwwLDAuMiwwLDAuM2MwLjIsMi40LTEuNiw0LjQtMy45LDQuNkM1MS4zLDQzLjgsNTEuMSw0My44LDUwLjksNDMuOHoiLz4KPC9zdmc+Cg==';
		me._map__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 50px;';
		hs+='left : 17px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map.onclick=function (e) {
			me._cmap.ggVisible = !me._cmap.ggVisible;
			var flag=me._cmap.ggVisible;
			me._cmap.style[domTransition]='none';
			me._cmap.style.visibility=((flag)&&(Number(me._cmap.style.opacity)>0||!me._cmap.style.opacity))?'inherit':'hidden';
		}
		me._map.onmouseover=function (e) {
			me._map__img.style.visibility='hidden';
			me._map__imgo.style.visibility='inherit';
			me.elementMouseOver['map']=true;
			me._tt_enter_mini.logicBlock_visible();
		}
		me._map.onmouseout=function (e) {
			me._map__img.style.visibility='inherit';
			me._map__imgo.style.visibility='hidden';
			me.elementMouseOver['map']=false;
			me._tt_enter_mini.logicBlock_visible();
		}
		me._map.ontouchend=function (e) {
			me.elementMouseOver['map']=false;
			me._tt_enter_mini.logicBlock_visible();
		}
		me._map.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_enter_mini=document.createElement('div');
		els=me._tt_enter_mini__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_mini";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -48px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="MINI MAP";
		el.appendChild(els);
		me._tt_enter_mini.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_mini.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_enter_mini.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_enter_mini.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_enter_mini.style[domTransition]='';
				if (me._tt_enter_mini.ggCurrentLogicStateVisible == 0) {
					me._tt_enter_mini.style.visibility=(Number(me._tt_enter_mini.style.opacity)>0||!me._tt_enter_mini.style.opacity)?'inherit':'hidden';
					me._tt_enter_mini.ggVisible=true;
				}
				else {
					me._tt_enter_mini.style.visibility="hidden";
					me._tt_enter_mini.ggVisible=false;
				}
			}
		}
		me._tt_enter_mini.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_enter_mini_white=document.createElement('div');
		els=me._tt_enter_mini_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_mini_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="MINI MAP";
		el.appendChild(els);
		me._tt_enter_mini_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_mini_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_enter_mini.appendChild(me._tt_enter_mini_white);
		me._map.appendChild(me._tt_enter_mini);
		me.divSkin.appendChild(me._map);
		el=me._fsexit=document.createElement('div');
		els=me._fsexit__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJmdWxsIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB5PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMzkxRDU1O30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNy41LDExaDY1LjFjMy42LDAsNi41LDIuOSw2LjUsNi41djY1LjFjMCwzLjYtMi45LDYuNS02LjUsNi41SDE3LjVjLTMuNiwwLTYuNS0yLjktNi41LTYuNVYxNy41JiN4YTsmI3g5O0MxMSwxMy45LDEzLjksMTEsMTcuNSwxMXoiLz4KIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNzIsMzAuMyA1OS4zLDMwLjMgNDkuOCw0Mi45IDQwLjMsMzAuMyAyNy42LDMwLjMgNDEuOCw0OS41IDI3LjYsNjguNyA0'+
			'MC4zLDY4LjcgNDkuOCw1Ni4xIDU5LjMsNjguNyAmI3hhOyYjeDk7NzIsNjguNyA1Ny44LDQ5LjUgIi8+Cjwvc3ZnPgo=';
		me._fsexit__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fsexit__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJmdWxsIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB5PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMzkxRDU1O30KCS5zdDF7ZmlsbDojRTRCNEZGO30KPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNy41LDExaDY1LjFjMy42LDAsNi41LDIuOSw2LjUsNi41djY1LjFjMCwzLjYtMi45LDYuNS02LjUsNi41SDE3LjVjLTMuNiwwLTYuNS0yLjktNi41LTYuNVYxNy41JiN4YTsmI3g5O0MxMSwxMy45LDEzLjksMTEsMTcuNSwxMXoiLz4KIDxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNzIsMzAuMyA1OS4zLDMwLjMgNDkuOCw0Mi45IDQwLjMsMzAuMyAyNy42LDMwLjMgNDEuOCw0OS41IDI3LjYsNjguNyA0'+
			'MC4zLDY4LjcgNDkuOCw1Ni4xIDU5LjMsNjguNyAmI3hhOyYjeDk7NzIsNjguNyA1Ny44LDQ5LjUgIi8+Cjwvc3ZnPgo=';
		me._fsexit__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="FS-exit";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fsexit.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._fsexit.onclick=function (e) {
			player.exitFullscreen();
			me._fsexit.style[domTransition]='none';
			me._fsexit.style.visibility='hidden';
			me._fsexit.ggVisible=false;
			me._fsenter.style[domTransition]='none';
			me._fsenter.style.visibility=(Number(me._fsenter.style.opacity)>0||!me._fsenter.style.opacity)?'inherit':'hidden';
			me._fsenter.ggVisible=true;
		}
		me._fsexit.onmouseover=function (e) {
			me._fsexit__img.style.visibility='hidden';
			me._fsexit__imgo.style.visibility='inherit';
			me.elementMouseOver['fsexit']=true;
			me._tt_enter_full0.logicBlock_visible();
		}
		me._fsexit.onmouseout=function (e) {
			me._fsexit__img.style.visibility='inherit';
			me._fsexit__imgo.style.visibility='hidden';
			me.elementMouseOver['fsexit']=false;
			me._tt_enter_full0.logicBlock_visible();
		}
		me._fsexit.ontouchend=function (e) {
			me.elementMouseOver['fsexit']=false;
			me._tt_enter_full0.logicBlock_visible();
		}
		me._fsexit.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_enter_full0=document.createElement('div');
		els=me._tt_enter_full0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_full";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -49px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="EXIT";
		el.appendChild(els);
		me._tt_enter_full0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_full0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['fsexit'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_enter_full0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_enter_full0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_enter_full0.style[domTransition]='';
				if (me._tt_enter_full0.ggCurrentLogicStateVisible == 0) {
					me._tt_enter_full0.style.visibility=(Number(me._tt_enter_full0.style.opacity)>0||!me._tt_enter_full0.style.opacity)?'inherit':'hidden';
					me._tt_enter_full0.ggVisible=true;
				}
				else {
					me._tt_enter_full0.style.visibility="hidden";
					me._tt_enter_full0.ggVisible=false;
				}
			}
		}
		me._tt_enter_full0.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_enter_full_white0=document.createElement('div');
		els=me._tt_enter_full_white0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_full_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="EXIT";
		el.appendChild(els);
		me._tt_enter_full_white0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_full_white0.ggUpdatePosition=function (useTransition) {
		}
		me._tt_enter_full0.appendChild(me._tt_enter_full_white0);
		me._fsexit.appendChild(me._tt_enter_full0);
		me.divSkin.appendChild(me._fsexit);
		el=me._fsenter=document.createElement('div');
		els=me._fsenter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJmdWxsIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB5PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMzkxRDU1O30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDozO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNy41LDExaDY1LjFjMy42LDAsNi41LDIuOSw2LjUsNi41djY1LjFjMCwzLjYtMi45LDYuNS02LjUsNi41SDE3LjVjLTMuNiwwLTYuNS0yLjktNi41LTYuNVYxNy41JiN4YTsmI3g5O0MxMSwxMy45LDEzLjksMTEsMTcuNSwxMXoiLz4KIDxyZWN0IGNsYXNzPSJzdDEiIHdpZHRoPSIzNiIg'+
			'eD0iMjAuNSIgeT0iNDcuNSIgaGVpZ2h0PSIyMiIvPgogPGxpbmUgY2xhc3M9InN0MSIgeTE9IjQ3LjUiIHkyPSIzMS45IiB4MT0iNTYuNSIgeDI9Ijc1LjEiLz4KIDxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iNzcuNSwzNy41IDgxLjUsMjYuNSA3MCwyOC41ICIvPgo8L3N2Zz4K';
		me._fsenter__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fsenter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJmdWxsIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB5PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojQjVCNUI1O30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMzkxRDU1O3N0cm9rZS13aWR0aDozO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZmlsbDojMzkxRDU1O30KPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNy41LDExaDY1LjFjMy42LDAsNi41LDIuOSw2LjUsNi41djY1LjFjMCwzLjYtMi45LDYuNS02LjUsNi41SDE3LjVjLTMuNiwwLTYuNS0yLjktNi41LTYuNVYxNy41JiN4YTsmI3g5O0MxMSwxMy45LDEzLjksMTEsMTcuNSwxMXoiLz4KIDxyZWN0IGNsYXNzPSJzdDEiIHdpZHRoPSIzNiIg'+
			'eD0iMjAuNSIgeT0iNDcuNSIgaGVpZ2h0PSIyMiIvPgogPGxpbmUgY2xhc3M9InN0MSIgeTE9IjQ3LjUiIHkyPSIzMS45IiB4MT0iNTYuNSIgeDI9Ijc1LjEiLz4KIDxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iNzcuNSwzNy41IDgxLjUsMjYuNSA3MCwyOC41ICIvPgo8L3N2Zz4K';
		me._fsenter__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="FS-enter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fsenter.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._fsenter.onclick=function (e) {
			player.enterFullscreen();
			me._fsexit.style[domTransition]='none';
			me._fsexit.style.visibility=(Number(me._fsexit.style.opacity)>0||!me._fsexit.style.opacity)?'inherit':'hidden';
			me._fsexit.ggVisible=true;
			me._fsenter.style[domTransition]='none';
			me._fsenter.style.visibility='hidden';
			me._fsenter.ggVisible=false;
		}
		me._fsenter.onmouseover=function (e) {
			me._fsenter__img.style.visibility='hidden';
			me._fsenter__imgo.style.visibility='inherit';
			me.elementMouseOver['fsenter']=true;
			me._tt_enter_full.logicBlock_visible();
		}
		me._fsenter.onmouseout=function (e) {
			me._fsenter__img.style.visibility='inherit';
			me._fsenter__imgo.style.visibility='hidden';
			me.elementMouseOver['fsenter']=false;
			me._tt_enter_full.logicBlock_visible();
		}
		me._fsenter.ontouchend=function (e) {
			me.elementMouseOver['fsenter']=false;
			me._tt_enter_full.logicBlock_visible();
		}
		me._fsenter.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_enter_full=document.createElement('div');
		els=me._tt_enter_full__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_full";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -49px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="FULLSCREEN";
		el.appendChild(els);
		me._tt_enter_full.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_full.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['fsenter'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_enter_full.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_enter_full.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_enter_full.style[domTransition]='';
				if (me._tt_enter_full.ggCurrentLogicStateVisible == 0) {
					me._tt_enter_full.style.visibility=(Number(me._tt_enter_full.style.opacity)>0||!me._tt_enter_full.style.opacity)?'inherit':'hidden';
					me._tt_enter_full.ggVisible=true;
				}
				else {
					me._tt_enter_full.style.visibility="hidden";
					me._tt_enter_full.ggVisible=false;
				}
			}
		}
		me._tt_enter_full.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_enter_full_white=document.createElement('div');
		els=me._tt_enter_full_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_full_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="FULLSCREEN";
		el.appendChild(els);
		me._tt_enter_full_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_full_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_enter_full.appendChild(me._tt_enter_full_white);
		me._fsenter.appendChild(me._tt_enter_full);
		me.divSkin.appendChild(me._fsenter);
		el=me._tmore=document.createElement('div');
		els=me._tmore__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJjb250cmxfbGVzcyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMT'+
			'AwOyIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRUYwMzt9Cgkuc3Qxe2ZpbGw6I0ZGMDFBMjt9Cgkuc3Qye2ZpbGw6IzAwODRFOTt9Cjwvc3R5bGU+CiA8dGl0bGU+RC1tb3JlPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOCw0OS4zYzAsMCwxMSwzLjgsMjIsMy44czIyLTMuOCwyMi0zLjh2Ny41TDUwLDY4LjFMMjgsNTYuOVY0OS4zeiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTI4LDQyLjdjMCwwLDExLDMuOCwyMiwzLjhzMjItMy44LDIyLTMuOHY3LjVMNTAsNjEuNUwyOCw1MC4yVjQyLjd6Ii8+CiA8cGF0aCBjbGFzcz0ic3QyIiBk'+
			'PSJNMjgsMzZjMCwwLDExLDMuOCwyMiwzLjhTNzIsMzYsNzIsMzZ2Ny41TDUwLDU0LjhMMjgsNDMuNVYzNnoiLz4KPC9zdmc+Cg==';
		me._tmore__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="T-more";
		el.ggDx=-2.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : hidden;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tmore.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._tmore.onclick=function (e) {
			var flag=me._tmore.ggPositonActive;
			if (player.transitionsDisabled) {
				me._tmore.style[domTransition]='none';
			} else {
				me._tmore.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._tmore.ggParameter.rx=0;me._tmore.ggParameter.ry=0;
				me._tmore.style[domTransform]=parameterToTransform(me._tmore.ggParameter);
			} else {
				me._tmore.ggParameter.rx=0;me._tmore.ggParameter.ry=43;
				me._tmore.style[domTransform]=parameterToTransform(me._tmore.ggParameter);
			}
			me._tmore.ggPositonActive=!flag;
		}
		me._tmore.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._toolbar=document.createElement('div');
		el.ggId="toolbar";
		el.ggDx=1.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 6px;';
		hs+='border-radius : 6px;';
		hs+='background : rgba(158,158,158,0.784314);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='height : 101px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -92px;';
		hs+='visibility : inherit;';
		hs+='width : 346px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._toolbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toolbar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._tmore.appendChild(me._toolbar);
		el=me._bbasement=document.createElement('div');
		els=me._bbasement__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwIDUwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0VGRDZCNDtzdHJva2U6IzA3NEQ0MjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzA3NEQ0Mjt9Cjwvc3R5bGU+CiA8dGl0bGU+QkFTRU1FTlQ8L3RpdGxlPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxOTciIHg9IjEuNSIgeT0iMS41IiBoZWlnaHQ9IjQ3Ii8+CiA8L2c+CiA8ZyBpZD0iVEVYVCI+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTQzLjYsMTMuMmMzLjgsMCw1LjksMi4yLDUuOSw2LjF2MC41YzAsMi43LTEuMiw0LjMt'+
			'My4xLDV2MC4xYzIuMywwLjcsMy42LDIuNSwzLjYsNS43djAuOCYjeGE7JiN4OTsmI3g5O2MwLDQtMi4yLDYuMS02LjEsNi4xaC01LjRWMTMuMkg0My42eiBNNDIuMiwyMy4yaDEuMmMxLjgsMCwyLjUtMC45LDIuNS0zdi0wLjhjMC0yLTAuNy0yLjktMi4zLTIuOWgtMS4zTDQyLjIsMjMuMnogTTQyLjIsMzQuMSYjeGE7JiN4OTsmI3g5O2gxLjZjMS44LDAsMi42LTAuOSwyLjYtM3YtMS4zYzAtMi4xLTAuOC0zLjEtMi43LTMuMWgtMS40TDQyLjIsMzQuMXoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjIsMzcuNUw2MS4yLDMyaC00LjFsLTAuOCw1LjVoLTMuN2w0LjItMjQuM2g0LjdsNC4yLD'+
			'I0LjNMNjIsMzcuNXogTTU3LjYsMjguNmgzLjFsLTEuNS0xMC45aC0wLjFMNTcuNiwyOC42JiN4YTsmI3g5OyYjeDk7eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik03OS4zLDE4LjR2MC40bC0zLjUsMC43di0wLjhjMC0xLjctMC42LTIuNC0xLjktMi40Yy0wLjktMC4xLTEuOCwwLjYtMS45LDEuNmMwLDAuMSwwLDAuMywwLDAuNHYwLjUmI3hhOyYjeDk7JiN4OTtjMCwxLjQsMC43LDIuNSwzLjEsNC42YzMuMywzLDQuNCw1LDQuNCw3Ljh2MS4yYzAsMy42LTIuMyw1LjUtNS42LDUuNXMtNS43LTItNS43LTUuNVYzMWwzLjUtMC43VjMyYzAsMS42LDAuOCwyLjQsMi4xLDIuNCYjeGE7JiN4OTsm'+
			'I3g5O2MxLjEsMCwyLTAuNiwyLTIuM3YtMC44YzAtMS41LTAuNy0yLjYtMy4xLTQuOGMtMy4zLTMtNC40LTUtNC40LTcuNnYtMC42YzAtMy42LDIuMS01LjQsNS41LTUuNFM3OS4zLDE0LjgsNzkuMywxOC40eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04Ni42LDE2LjZ2Ni45aDUuNGwtMC4zLDMuNGgtNXY3LjJoNi43djMuNEg4Mi45VjEzLjJoMTAuM3YzLjRIODYuNnoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTA5LjMsMzcuNVYyMC42aC0wLjFMMTA1LjgsMzRoLTEuNWwtMy40LTEzLjRoLTAuMXYxNi45aC0zLjVWMTMuMmg0LjhsMi45LDEzaDAuMWwyLjgtMTNoNXYyNC4zSDEwOS'+
			'4zeiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMjEuNiwxNi42djYuOWg1LjRsLTAuMywzLjRoLTV2Ny4yaDYuN3YzLjRIMTE4VjEzLjJoMTAuM3YzLjRIMTIxLjZ6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTE0MC44LDM3LjVMMTM2LDIxLjRoLTAuMXYxNi4xaC0zLjVWMTMuMmg0LjFsNC4zLDE0LjVoMC4xVjEzLjJoMy41djI0LjNIMTQwLjh6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTE1NS40LDE2Ljd2MjAuOGgtMy43VjE2LjdoLTMuOXYtMy41aDExLjV2My41SDE1NS40eiIvPgogPC9nPgo8L3N2Zz4K';
		me._bbasement__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="b-basement";
		el.ggDx=-109.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -21px;';
		hs+='visibility : hidden;';
		hs+='width : 99px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bbasement.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bbasement.onclick=function (e) {
			player.openNext("{node39}","");
		}
		me._bbasement.onmouseover=function (e) {
			me.elementMouseOver['bbasement']=true;
		}
		me._bbasement.onmouseout=function (e) {
			me._bbasement.style[domTransition]='none';
			me._bbasement.style.opacity='1';
			me._bbasement.style.visibility=me._bbasement.ggVisible?'inherit':'hidden';
			me.elementMouseOver['bbasement']=false;
		}
		me._bbasement.ontouchend=function (e) {
			me.elementMouseOver['bbasement']=false;
		}
		me._bbasement.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._tmore.appendChild(me._bbasement);
		el=me._bfloor1=document.createElement('div');
		els=me._bfloor1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwIDUwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGMDFBMjt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8dGl0bGU+MXN0RkxPT1I8L3RpdGxlPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIyMDAiIGhlaWdodD0iNTAiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zOCwxNC44YzMuMywwLDQuMS0xLjYsNC43LTMuNGgyLjl2MjcuM2gtNC4zVjE3LjhIMzhWMTQuOHoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTcuNywxMS4xYzQuMiwwLDYuMywyLjUsNi4zLDYuOXYwLjloLTQuMXYt'+
			'MS4xYzAtMS45LTAuOC0yLjctMi4xLTIuN3MtMi4xLDAuNy0yLjEsMi43JiN4YTsmI3g5OyYjeDk7YzAsNS42LDguNCw2LjcsOC40LDE0LjVjMCw0LjQtMi4yLDYuOS02LjQsNi45cy02LjQtMi41LTYuNC02Ljl2LTEuN2g0LjF2MmMwLDIsMC45LDIuNywyLjIsMi43czIuMi0wLjcsMi4yLTIuNyYjeGE7JiN4OTsmI3g5O2MwLTUuNi04LjQtNi43LTguNC0xNC41QzUxLjQsMTMuNSw1My41LDExLjEsNTcuNywxMS4xeiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02Ni40LDExLjRoMTMuM3YzLjloLTQuNXYyMy40aC00LjNWMTUuM2gtNC41VjExLjR6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD'+
			'0iTTk0LjIsMjMuNWg1LjV2My45aC01LjV2MTEuM2gtNC4zVjExLjRoMTEuM3YzLjloLTcuMUw5NC4yLDIzLjVMOTQuMiwyMy41eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMDQuNSwxMS40aDQuM3YyMy40aDcuMXYzLjloLTExLjNMMTA0LjUsMTEuNEwxMDQuNSwxMS40eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMTguNiwxNy45YzAtNC40LDIuMy02LjksNi41LTYuOWM0LjIsMCw2LjUsMi41LDYuNSw2Ljl2MTQuMmMwLDQuNC0yLjMsNi45LTYuNSw2LjlzLTYuNS0yLjUtNi41LTYuOSYjeGE7JiN4OTsmI3g5O0MxMTguNiwzMi4xLDExOC42LDE3LjksMTE4LjYsMTcuOXogTTEy'+
			'Mi45LDMyLjRjMCwyLDAuOSwyLjcsMi4yLDIuN2MxLjQsMCwyLjItMC43LDIuMi0yLjdWMTcuNmMwLTEuOS0wLjktMi43LTIuMi0yLjcmI3hhOyYjeDk7JiN4OTtjLTEuNCwwLTIuMiwwLjctMi4yLDIuN1YzMi40eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMzUuMiwxNy45YzAtNC40LDIuMy02LjksNi41LTYuOXM2LjUsMi41LDYuNSw2Ljl2MTQuMmMwLDQuNC0yLjMsNi45LTYuNSw2LjlzLTYuNS0yLjUtNi41LTYuOVYxNy45eiYjeGE7JiN4OTsmI3g5OyBNMTM5LjUsMzIuNGMwLDIsMC45LDIuNywyLjIsMi43czIuMi0wLjcsMi4yLTIuN1YxNy42YzAtMS45LTAuOS0yLjctMi4yLTIuN3'+
			'MtMi4yLDAuNy0yLjIsMi43VjMyLjR6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTE2MS4xLDM4LjdjLTAuMi0wLjctMC40LTEuMS0wLjQtMy40VjMxYzAtMi41LTAuOS0zLjUtMi44LTMuNWgtMS41djExLjFoLTQuM1YxMS40aDYuNSYjeGE7JiN4OTsmI3g5O2M0LjQsMCw2LjQsMi4xLDYuNCw2LjN2Mi4xYzAsMi44LTAuOSw0LjYtMi44LDUuNWMyLjEsMC45LDIuOCwzLDIuOCw1Ljh2NC4yYzAsMS4zLDAsMi4zLDAuNSwzLjNMMTYxLjEsMzguN0wxNjEuMSwzOC43eiYjeGE7JiN4OTsmI3g5OyBNMTU2LjQsMTUuM3Y4LjRoMS43YzEuNiwwLDIuNi0wLjcsMi42LTIuOXYtMi43YzAtMi0wLjct'+
			'Mi44LTIuMi0yLjhIMTU2LjR6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._bfloor1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="b-floor1";
		el.ggDx=-55.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -21px;';
		hs+='visibility : inherit;';
		hs+='width : 99px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bfloor1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bfloor1.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me._bfloor1.onmouseover=function (e) {
			me.elementMouseOver['bfloor1']=true;
		}
		me._bfloor1.onmouseout=function (e) {
			me._bfloor1.style[domTransition]='none';
			me._bfloor1.style.opacity='1';
			me._bfloor1.style.visibility=me._bfloor1.ggVisible?'inherit':'hidden';
			me.elementMouseOver['bfloor1']=false;
		}
		me._bfloor1.ontouchend=function (e) {
			me.elementMouseOver['bfloor1']=false;
		}
		me._bfloor1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._tmore.appendChild(me._bfloor1);
		el=me._bfloor2=document.createElement('div');
		els=me._bfloor2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwIDUwOyIgeT'+
			'0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGMDFBMjt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8dGl0bGU+MXN0RkxPT1I8L3RpdGxlPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIyMDAiIGhlaWdodD0iNTAiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNS45LDE1Yy0xLjQsMC0yLjIsMC43LTIuMiwyLjd2Mi45aC00LjF2LTIuN2MwLTQuNCwyLjItNi45LDYuNC02LjljNC4yLDAsNi40LDIuNSw2LjQsNi45JiN4YTsmI3g5OyYjeDk7YzAsOC42LTguNSwxMS44LTguNSwxNi4z'+
			'YzAsMC4yLDAsMC40LDAsMC42SDQydjMuOUgyOS42di0zLjRjMC04LDguNS05LjQsOC41LTE3LjJDMzguMSwxNS42LDM3LjMsMTUsMzUuOSwxNXoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTAuMSwxOC45djE5LjhoLTMuOVYxMS40aDUuNEw1NiwyNy43VjExLjRoMy44djI3LjNoLTQuNEw1MC4xLDE4Ljl6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTY0LjEsMTEuNGg2LjhjNC4zLDAsNi40LDIuNCw2LjQsNi43djEzLjhjMCw0LjQtMi4xLDYuNy02LjQsNi43aC02LjhWMTEuNHogTTY4LjQsMTUuM3YxOS41aDIuNCYjeGE7JiN4OTsmI3g5O2MxLjQsMCwyLjItMC43LDIuMi0yLjdWMT'+
			'cuOWMwLTEuOS0wLjgtMi43LTIuMi0yLjdINjguNHoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOTkuOSwyMy41aDUuNXYzLjloLTUuNXYxMS4zaC00LjNWMTEuNGgxMS4zdjMuOWgtNy4xVjIzLjV6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTExMC4yLDExLjRoNC4zdjIzLjRoNy4xdjMuOWgtMTEuM1YxMS40eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMjQuMiwxNy45YzAtNC40LDIuMy02LjksNi41LTYuOWM0LjIsMCw2LjUsMi41LDYuNSw2Ljl2MTQuMmMwLDQuNC0yLjMsNi45LTYuNSw2LjljLTQuMiwwLTYuNS0yLjUtNi41LTYuOSYjeGE7JiN4OTsmI3g5O1YxNy45eiBN'+
			'MTI4LjUsMzIuNGMwLDIsMC45LDIuNywyLjIsMi43YzEuNCwwLDIuMi0wLjcsMi4yLTIuN1YxNy42YzAtMS45LTAuOS0yLjctMi4yLTIuN2MtMS40LDAtMi4yLDAuNy0yLjIsMi43VjMyLjR6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTE0MC44LDE3LjljMC00LjQsMi4zLTYuOSw2LjUtNi45czYuNSwyLjUsNi41LDYuOXYxNC4yYzAsNC40LTIuMyw2LjktNi41LDYuOXMtNi41LTIuNS02LjUtNi45VjE3Ljl6JiN4YTsmI3g5OyYjeDk7IE0xNDUuMSwzMi40YzAsMiwwLjksMi43LDIuMiwyLjdjMS40LDAsMi4yLTAuNywyLjItMi43VjE3LjZjMC0xLjktMC45LTIuNy0yLjItMi43Yy0xLjQsMC'+
			'0yLjIsMC43LTIuMiwyLjdWMzIuNHoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTY2LjgsMzguN2MtMC4yLTAuNy0wLjQtMS4xLTAuNC0zLjRWMzFjMC0yLjUtMC45LTMuNS0yLjgtMy41aC0xLjV2MTEuMWgtNC4zVjExLjRoNi41JiN4YTsmI3g5OyYjeDk7YzQuNCwwLDYuNCwyLjEsNi40LDYuM3YyLjFjMCwyLjgtMC45LDQuNi0yLjgsNS41YzIuMSwwLjksMi44LDMsMi44LDUuOHY0LjJjMCwxLjMsMCwyLjMsMC41LDMuM0gxNjYuOHogTTE2Mi4xLDE1LjN2OC40aDEuNyYjeGE7JiN4OTsmI3g5O2MxLjYsMCwyLjYtMC43LDIuNi0yLjl2LTIuN2MwLTItMC43LTIuOC0yLjItMi44SDE2Mi4x'+
			'eiIvPgogPC9nPgo8L3N2Zz4K';
		me._bfloor2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="b-floor2";
		el.ggDx=54.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -21px;';
		hs+='visibility : inherit;';
		hs+='width : 99px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bfloor2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bfloor2.onclick=function (e) {
			player.openNext("{node6}","");
		}
		me._bfloor2.onmouseover=function (e) {
			me.elementMouseOver['bfloor2']=true;
		}
		me._bfloor2.onmouseout=function (e) {
			me._bfloor2.style[domTransition]='none';
			me._bfloor2.style.opacity='1';
			me._bfloor2.style.visibility=me._bfloor2.ggVisible?'inherit':'hidden';
			me.elementMouseOver['bfloor2']=false;
		}
		me._bfloor2.ontouchend=function (e) {
			me.elementMouseOver['bfloor2']=false;
		}
		me._bfloor2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._tmore.appendChild(me._bfloor2);
		me.divSkin.appendChild(me._tmore);
		el=me._contfloor1=document.createElement('div');
		el.ggId="Cont-Floor1";
		el.ggDy=-13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 164px;';
		hs+='position : absolute;';
		hs+='right : -20px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 133px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._contfloor1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._contfloor1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._markerdining=document.createElement('div');
		el.ggMarkerNodeId='P2';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Marker-Dining";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._markerdining.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markerdining.onclick=function (e) {
			player.openNext('P2');
		}
		me._markerdining.ggActivate=function () {
			me._modedining.style[domTransition]='none';
			me._modedining.style.visibility=(Number(me._modedining.style.opacity)>0||!me._modedining.style.opacity)?'inherit':'hidden';
			me._modedining.ggVisible=true;
		}
		me._markerdining.ggDeactivate=function () {
			me._modedining.style[domTransition]='none';
			me._modedining.style.visibility='hidden';
			me._modedining.ggVisible=false;
		}
		me._markerdining.ggUpdatePosition=function (useTransition) {
		}
		me._contfloor1.appendChild(me._markerdining);
		el=me._modedining=document.createElement('div');
		el.ggId="MODE-Dining";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='height : 163px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 99px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._modedining.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._modedining.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._finishdining=document.createElement('div');
		els=me._finishdining__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOy'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzM5MzkzOTtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzIxODY0OTt9Cjwvc3R5bGU+CiA8dGl0bGU+TU9ERS1GPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMC41LDE0aDM5LjFjMy42LDAsNi41LDIuOSw2LjUsNi41djM5LjFjMCwzLjYtMi45LDYuNS02LjUsNi41SDMwLjVjLTMuNiwwLTYuNS0yLjktNi41LTYuNVYyMC41JiN4YTsmI3g5O0MyNCwxNi45LDI2LjksMTQsMzAuNSwxNHoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9'+
			'Ik0yOS45LDc2LjlWODFoMy4xbC0wLjIsMi4xaC0yLjl2Ni40aC0yLjJWNzQuOGg2LjJ2Mi4xSDI5Ljl6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzYsODkuNVY3NWwyLjItMC4ydjE0LjdIMzZ6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDYuMyw4OS41bC0yLjktOS44bDAsMHY5LjhoLTIuMVY3NC44aDIuNWwyLjYsOC44bDAsMHYtOC44aDIuMXYxNC43SDQ2LjN6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTEuNSw4OS41Vjc1bDIuMi0wLjJ2MTQuN0g1MS41eiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTYyLjcsNzh2MC4ybC0yLjEsMC40di0wLjVjMC0xLTAuNC0xLjUtMS'+
			'4yLTEuNWMtMC41LTAuMS0xLDAuMy0xLjEsMC45YzAsMC4xLDAsMC4yLDAsMC4zdjAuMyYjeGE7JiN4OTtjMCwwLjgsMC40LDEuNSwxLjksMi44YzIsMS44LDIuNywzLDIuNyw0Ljd2MC43YzAuMSwxLjctMS4xLDMuMi0yLjgsMy4zYy0wLjIsMC0wLjQsMC0wLjYsMGMtMS43LDAuMS0zLjMtMS4xLTMuNC0yLjkmI3hhOyYjeDk7YzAtMC4yLDAtMC40LDAtMC41di0wLjhsMi4yLTAuNHYxYzAsMSwwLjUsMS41LDEuMywxLjVzMS4yLTAuNCwxLjItMS40di0wLjVjMC0wLjktMC40LTEuNi0xLjktMi45Yy0yLTEuOC0yLjctMy0yLjctNC42di0wLjQmI3hhOyYjeDk7Yy0wLjItMS42LDEtMy4xLDIuNy0z'+
			'LjNjMC4yLDAsMC40LDAsMC42LDBjMS42LTAuMiwzLjEsMSwzLjMsMi43QzYyLjcsNzcuNSw2Mi43LDc3LjgsNjIuNyw3OHoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02OS43LDg5LjV2LTYuNGgtMi43djYuNGgtMi4yVjc0LjhoMi4yVjgxaDIuN3YtNi4ySDcydjE0LjdINjkuN3oiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01MC4xLDIyLjdjLTkuNiwwLTE3LjUsNy44LTE3LjUsMTcuNXM3LjgsMTcuNSwxNy41LDE3LjVzMTcuNS03LjgsMTcuNS0xNy41YzAsMCwwLDAsMCwwJiN4YTsmI3g5O0M2Ny42LDMwLjUsNTkuOCwyMi43LDUwLjEsMjIuN3ogTTQ5LDQ2LjVMNDYuNSw0OWwtMi41LT'+
			'IuNWwtNC43LTQuN2wyLjUtMi41bDQuNyw0LjdsMTIuOS0xMi45bDIuNSwyLjRMNDksNDYuNXoiLz4KPC9zdmc+Cg==';
		me._finishdining__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="finish-dining";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 79px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._finishdining.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._finishdining.onclick=function (e) {
			player.openNext("{node2}","$(cur)");
		}
		me._finishdining.onmouseover=function (e) {
			me.elementMouseOver['finishdining']=true;
		}
		me._finishdining.onmouseout=function (e) {
			me._finishdining.style[domTransition]='none';
			me._finishdining.style.opacity='1';
			me._finishdining.style.visibility=me._finishdining.ggVisible?'inherit':'hidden';
			me.elementMouseOver['finishdining']=false;
		}
		me._finishdining.ontouchend=function (e) {
			me.elementMouseOver['finishdining']=false;
		}
		me._finishdining.ggUpdatePosition=function (useTransition) {
		}
		me._modedining.appendChild(me._finishdining);
		el=me._roughdining=document.createElement('div');
		els=me._roughdining__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOy'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzM5MzkzOTtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzIxODZGRjt9Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6IzIxODZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDx0aXRsZT5NT0RFLVI8L3RpdGxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwLjUsMTRoMzkuMWMzLjYsMCw2LjUsMi45LDYuNSw2LjV2MzkuMWMwLDMuNi0yLjksNi41LTYuNSw2LjVIMzAuNWMtMy42LDAtNi41LTIuOS02'+
			'LjUtNi41VjIwLjUmI3hhOyYjeDk7QzI0LDE2LjksMjYuOSwxNCwzMC41LDE0eiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTMwLjIsODMuM2gtMXY2LjJoLTIuM1Y3NC44aDMuMmMyLjQsMCwzLjcsMS4zLDMuNywzLjd2MWMwLjEsMS4zLTAuNSwyLjUtMS42LDMuMmwyLDYuN0gzMkwzMC4yLDgzLjN6JiN4YTsmI3g5OyBNMjkuMiw4MS4yaDAuOWMxLjEsMCwxLjUtMC42LDEuNS0xLjh2LTAuOGMwLTEuMi0wLjUtMS44LTEuNS0xLjhoLTAuOVY4MS4yeiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTQzLjUsNzguM1Y4NmMwLjIsMS45LTEuMiwzLjUtMywzLjdjLTAuMiwwLTAuNCwwLTAuNiwwYy'+
			'0xLjksMC4xLTMuNS0xLjMtMy42LTMuMWMwLTAuMiwwLTAuNCwwLTAuNnYtNy43JiN4YTsmI3g5O2MtMC4yLTEuOSwxLjItMy41LDMtMy43YzAuMiwwLDAuNCwwLDAuNiwwYzEuOS0wLjEsMy41LDEuMywzLjYsMy4xQzQzLjUsNzcuOSw0My41LDc4LjEsNDMuNSw3OC4zeiBNMzguNSw3OC4zVjg2JiN4YTsmI3g5O2MwLDEuMSwwLjUsMS43LDEuNCwxLjdzMS40LTAuNiwxLjQtMS43di03LjdjMC0xLjEtMC41LTEuNy0xLjQtMS43UzM4LjUsNzcuMiwzOC41LDc4LjNMMzguNSw3OC4zeiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTUzLDg2LjJjMC4yLDEuNy0xLDMuMy0yLjgsMy41Yy0wLjIsMC0w'+
			'LjUsMC0wLjcsMGMtMS43LDAuMi0zLjMtMS4xLTMuNC0yLjhjMC0wLjIsMC0wLjQsMC0wLjdWNzQuOGgyLjJ2MTEuMyYjeGE7JiN4OTtjMCwxLjEsMC41LDEuNSwxLjMsMS41czEuMy0wLjQsMS4zLTEuNVY3NC44SDUzVjg2LjJ6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjIuNyw3OC4xdjAuNmwtMi4xLDAuNXYtMC45YzAtMS4yLTAuNC0xLjctMS4zLTEuN3MtMS4zLDAuNS0xLjMsMS41djhjMCwxLDAuNCwxLjUsMS4zLDEuNXMxLjMtMC41LDEuMy0xLjcmI3hhOyYjeDk7di0yLjVoLTEuM3YtMi4xaDMuNHY0LjhjMC4yLDEuOC0xLjEsMy4zLTIuOSwzLjVjLTAuMiwwLTAuNCwwLTAuNiwwYy'+
			'0xLjgsMC4yLTMuMy0xLjEtMy41LTIuOWMwLTAuMiwwLTAuNCwwLTAuN3YtOC4xJiN4YTsmI3g5O2MtMC4yLTEuOCwxLjEtMy4zLDIuOC0zLjVjMC4yLDAsMC40LDAsMC43LDBjMS44LTAuMiwzLjMsMS4xLDMuNSwyLjlDNjIuNyw3Ny43LDYyLjcsNzcuOSw2Mi43LDc4LjF6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNzAuMyw4OS41di02LjRoLTIuN3Y2LjRoLTIuMlY3NC44aDIuMlY4MWgyLjd2LTYuMmgyLjJ2MTQuN0g3MC4zeiIvPgogPHJlY3QgY2xhc3M9InN0MiIgd2lkdGg9IjIzLjkiIHg9IjQ0LjIiIHk9IjI2LjEiIGhlaWdodD0iNS45Ii8+CiA8cmVjdCBjbGFzcz0ic3QyIiB3aWR0'+
			'aD0iMjMuOSIgeD0iMzEuNSIgeT0iMzMuMSIgaGVpZ2h0PSI2Ii8+CiA8cmVjdCBjbGFzcz0ic3QxIiB3aWR0aD0iMjMuOSIgeD0iNDQuMiIgeT0iNDAiIGhlaWdodD0iNiIvPgogPHJlY3QgY2xhc3M9InN0MiIgd2lkdGg9IjExLjIiIHg9IjMxLjciIHk9IjQwIiBoZWlnaHQ9IjYiLz4KIDxyZWN0IGNsYXNzPSJzdDIiIHdpZHRoPSIxMS4yIiB4PSIzMS43IiB5PSIyNiIgaGVpZ2h0PSI2Ii8+CiA8cmVjdCBjbGFzcz0ic3QxIiB3aWR0aD0iMjMuOSIgeD0iMzEuNSIgeT0iNDciIGhlaWdodD0iNiIvPgogPHJlY3QgY2xhc3M9InN0MSIgd2lkdGg9IjExLjIiIHg9IjU2LjkiIHk9IjMzLjEiIGhlaW'+
			'dodD0iNiIvPgogPHJlY3QgY2xhc3M9InN0MSIgd2lkdGg9IjExLjIiIHg9IjU2LjkiIHk9IjQ3IiBoZWlnaHQ9IjYiLz4KPC9zdmc+Cg==';
		me._roughdining__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="rough-dining";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._roughdining.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._roughdining.onclick=function (e) {
			player.openNext("{node21}","$(cur)");
		}
		me._roughdining.onmouseover=function (e) {
			me.elementMouseOver['roughdining']=true;
		}
		me._roughdining.onmouseout=function (e) {
			me._roughdining.style[domTransition]='none';
			me._roughdining.style.opacity='1';
			me._roughdining.style.visibility=me._roughdining.ggVisible?'inherit':'hidden';
			me.elementMouseOver['roughdining']=false;
		}
		me._roughdining.ontouchend=function (e) {
			me.elementMouseOver['roughdining']=false;
		}
		me._roughdining.ggUpdatePosition=function (useTransition) {
		}
		me._modedining.appendChild(me._roughdining);
		me._contfloor1.appendChild(me._modedining);
		el=me._markerliving1=document.createElement('div');
		el.ggMarkerNodeId='P1';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Marker-Living1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._markerliving1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markerliving1.onclick=function (e) {
			player.openNext('P1');
		}
		me._markerliving1.ggActivate=function () {
			me._modeliving.style[domTransition]='none';
			me._modeliving.style.visibility=(Number(me._modeliving.style.opacity)>0||!me._modeliving.style.opacity)?'inherit':'hidden';
			me._modeliving.ggVisible=true;
		}
		me._markerliving1.ggDeactivate=function () {
			me._modeliving.style[domTransition]='none';
			me._modeliving.style.visibility='hidden';
			me._modeliving.ggVisible=false;
		}
		me._markerliving1.ggUpdatePosition=function (useTransition) {
		}
		me._contfloor1.appendChild(me._markerliving1);
		el=me._modeliving=document.createElement('div');
		el.ggId="MODE-Living";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='height : 163px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 99px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._modeliving.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._modeliving.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._finish1=document.createElement('div');
		els=me._finish1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOy'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzM5MzkzOTtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzIxODY0OTt9Cjwvc3R5bGU+CiA8dGl0bGU+TU9ERS1GPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMC41LDE0aDM5LjFjMy42LDAsNi41LDIuOSw2LjUsNi41djM5LjFjMCwzLjYtMi45LDYuNS02LjUsNi41SDMwLjVjLTMuNiwwLTYuNS0yLjktNi41LTYuNVYyMC41JiN4YTsmI3g5O0MyNCwxNi45LDI2LjksMTQsMzAuNSwxNHoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9'+
			'Ik0yOS45LDc2LjlWODFoMy4xbC0wLjIsMi4xaC0yLjl2Ni40aC0yLjJWNzQuOGg2LjJ2Mi4xSDI5Ljl6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzYsODkuNVY3NWwyLjItMC4ydjE0LjdIMzZ6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDYuMyw4OS41bC0yLjktOS44bDAsMHY5LjhoLTIuMVY3NC44aDIuNWwyLjYsOC44bDAsMHYtOC44aDIuMXYxNC43SDQ2LjN6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTEuNSw4OS41Vjc1bDIuMi0wLjJ2MTQuN0g1MS41eiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTYyLjcsNzh2MC4ybC0yLjEsMC40di0wLjVjMC0xLTAuNC0xLjUtMS'+
			'4yLTEuNWMtMC41LTAuMS0xLDAuMy0xLjEsMC45YzAsMC4xLDAsMC4yLDAsMC4zdjAuMyYjeGE7JiN4OTtjMCwwLjgsMC40LDEuNSwxLjksMi44YzIsMS44LDIuNywzLDIuNyw0Ljd2MC43YzAuMSwxLjctMS4xLDMuMi0yLjgsMy4zYy0wLjIsMC0wLjQsMC0wLjYsMGMtMS43LDAuMS0zLjMtMS4xLTMuNC0yLjkmI3hhOyYjeDk7YzAtMC4yLDAtMC40LDAtMC41di0wLjhsMi4yLTAuNHYxYzAsMSwwLjUsMS41LDEuMywxLjVzMS4yLTAuNCwxLjItMS40di0wLjVjMC0wLjktMC40LTEuNi0xLjktMi45Yy0yLTEuOC0yLjctMy0yLjctNC42di0wLjQmI3hhOyYjeDk7Yy0wLjItMS42LDEtMy4xLDIuNy0z'+
			'LjNjMC4yLDAsMC40LDAsMC42LDBjMS42LTAuMiwzLjEsMSwzLjMsMi43QzYyLjcsNzcuNSw2Mi43LDc3LjgsNjIuNyw3OHoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02OS43LDg5LjV2LTYuNGgtMi43djYuNGgtMi4yVjc0LjhoMi4yVjgxaDIuN3YtNi4ySDcydjE0LjdINjkuN3oiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01MC4xLDIyLjdjLTkuNiwwLTE3LjUsNy44LTE3LjUsMTcuNXM3LjgsMTcuNSwxNy41LDE3LjVzMTcuNS03LjgsMTcuNS0xNy41YzAsMCwwLDAsMCwwJiN4YTsmI3g5O0M2Ny42LDMwLjUsNTkuOCwyMi43LDUwLjEsMjIuN3ogTTQ5LDQ2LjVMNDYuNSw0OWwtMi41LT'+
			'IuNWwtNC43LTQuN2wyLjUtMi41bDQuNyw0LjdsMTIuOS0xMi45bDIuNSwyLjRMNDksNDYuNXoiLz4KPC9zdmc+Cg==';
		me._finish1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="finish-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 79px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._finish1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._finish1.onclick=function (e) {
			player.openNext("{node1}","$(cur)");
		}
		me._finish1.onmouseover=function (e) {
			me.elementMouseOver['finish1']=true;
		}
		me._finish1.onmouseout=function (e) {
			me._finish1.style[domTransition]='none';
			me._finish1.style.opacity='1';
			me._finish1.style.visibility=me._finish1.ggVisible?'inherit':'hidden';
			me.elementMouseOver['finish1']=false;
		}
		me._finish1.ontouchend=function (e) {
			me.elementMouseOver['finish1']=false;
		}
		me._finish1.ggUpdatePosition=function (useTransition) {
		}
		me._modeliving.appendChild(me._finish1);
		el=me._rough1=document.createElement('div');
		els=me._rough1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOy'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzM5MzkzOTtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzIxODZGRjt9Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6IzIxODZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDx0aXRsZT5NT0RFLVI8L3RpdGxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwLjUsMTRoMzkuMWMzLjYsMCw2LjUsMi45LDYuNSw2LjV2MzkuMWMwLDMuNi0yLjksNi41LTYuNSw2LjVIMzAuNWMtMy42LDAtNi41LTIuOS02'+
			'LjUtNi41VjIwLjUmI3hhOyYjeDk7QzI0LDE2LjksMjYuOSwxNCwzMC41LDE0eiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTMwLjIsODMuM2gtMXY2LjJoLTIuM1Y3NC44aDMuMmMyLjQsMCwzLjcsMS4zLDMuNywzLjd2MWMwLjEsMS4zLTAuNSwyLjUtMS42LDMuMmwyLDYuN0gzMkwzMC4yLDgzLjN6JiN4YTsmI3g5OyBNMjkuMiw4MS4yaDAuOWMxLjEsMCwxLjUtMC42LDEuNS0xLjh2LTAuOGMwLTEuMi0wLjUtMS44LTEuNS0xLjhoLTAuOVY4MS4yeiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTQzLjUsNzguM1Y4NmMwLjIsMS45LTEuMiwzLjUtMywzLjdjLTAuMiwwLTAuNCwwLTAuNiwwYy'+
			'0xLjksMC4xLTMuNS0xLjMtMy42LTMuMWMwLTAuMiwwLTAuNCwwLTAuNnYtNy43JiN4YTsmI3g5O2MtMC4yLTEuOSwxLjItMy41LDMtMy43YzAuMiwwLDAuNCwwLDAuNiwwYzEuOS0wLjEsMy41LDEuMywzLjYsMy4xQzQzLjUsNzcuOSw0My41LDc4LjEsNDMuNSw3OC4zeiBNMzguNSw3OC4zVjg2JiN4YTsmI3g5O2MwLDEuMSwwLjUsMS43LDEuNCwxLjdzMS40LTAuNiwxLjQtMS43di03LjdjMC0xLjEtMC41LTEuNy0xLjQtMS43UzM4LjUsNzcuMiwzOC41LDc4LjNMMzguNSw3OC4zeiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTUzLDg2LjJjMC4yLDEuNy0xLDMuMy0yLjgsMy41Yy0wLjIsMC0w'+
			'LjUsMC0wLjcsMGMtMS43LDAuMi0zLjMtMS4xLTMuNC0yLjhjMC0wLjIsMC0wLjQsMC0wLjdWNzQuOGgyLjJ2MTEuMyYjeGE7JiN4OTtjMCwxLjEsMC41LDEuNSwxLjMsMS41czEuMy0wLjQsMS4zLTEuNVY3NC44SDUzVjg2LjJ6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjIuNyw3OC4xdjAuNmwtMi4xLDAuNXYtMC45YzAtMS4yLTAuNC0xLjctMS4zLTEuN3MtMS4zLDAuNS0xLjMsMS41djhjMCwxLDAuNCwxLjUsMS4zLDEuNXMxLjMtMC41LDEuMy0xLjcmI3hhOyYjeDk7di0yLjVoLTEuM3YtMi4xaDMuNHY0LjhjMC4yLDEuOC0xLjEsMy4zLTIuOSwzLjVjLTAuMiwwLTAuNCwwLTAuNiwwYy'+
			'0xLjgsMC4yLTMuMy0xLjEtMy41LTIuOWMwLTAuMiwwLTAuNCwwLTAuN3YtOC4xJiN4YTsmI3g5O2MtMC4yLTEuOCwxLjEtMy4zLDIuOC0zLjVjMC4yLDAsMC40LDAsMC43LDBjMS44LTAuMiwzLjMsMS4xLDMuNSwyLjlDNjIuNyw3Ny43LDYyLjcsNzcuOSw2Mi43LDc4LjF6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNzAuMyw4OS41di02LjRoLTIuN3Y2LjRoLTIuMlY3NC44aDIuMlY4MWgyLjd2LTYuMmgyLjJ2MTQuN0g3MC4zeiIvPgogPHJlY3QgY2xhc3M9InN0MiIgd2lkdGg9IjIzLjkiIHg9IjQ0LjIiIHk9IjI2LjEiIGhlaWdodD0iNS45Ii8+CiA8cmVjdCBjbGFzcz0ic3QyIiB3aWR0'+
			'aD0iMjMuOSIgeD0iMzEuNSIgeT0iMzMuMSIgaGVpZ2h0PSI2Ii8+CiA8cmVjdCBjbGFzcz0ic3QxIiB3aWR0aD0iMjMuOSIgeD0iNDQuMiIgeT0iNDAiIGhlaWdodD0iNiIvPgogPHJlY3QgY2xhc3M9InN0MiIgd2lkdGg9IjExLjIiIHg9IjMxLjciIHk9IjQwIiBoZWlnaHQ9IjYiLz4KIDxyZWN0IGNsYXNzPSJzdDIiIHdpZHRoPSIxMS4yIiB4PSIzMS43IiB5PSIyNiIgaGVpZ2h0PSI2Ii8+CiA8cmVjdCBjbGFzcz0ic3QxIiB3aWR0aD0iMjMuOSIgeD0iMzEuNSIgeT0iNDciIGhlaWdodD0iNiIvPgogPHJlY3QgY2xhc3M9InN0MSIgd2lkdGg9IjExLjIiIHg9IjU2LjkiIHk9IjMzLjEiIGhlaW'+
			'dodD0iNiIvPgogPHJlY3QgY2xhc3M9InN0MSIgd2lkdGg9IjExLjIiIHg9IjU2LjkiIHk9IjQ3IiBoZWlnaHQ9IjYiLz4KPC9zdmc+Cg==';
		me._rough1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="rough-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rough1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rough1.onclick=function (e) {
			player.openNext("{node20}","$(cur)");
		}
		me._rough1.onmouseover=function (e) {
			me.elementMouseOver['rough1']=true;
		}
		me._rough1.onmouseout=function (e) {
			me._rough1.style[domTransition]='none';
			me._rough1.style.opacity='1';
			me._rough1.style.visibility=me._rough1.ggVisible?'inherit':'hidden';
			me.elementMouseOver['rough1']=false;
		}
		me._rough1.ontouchend=function (e) {
			me.elementMouseOver['rough1']=false;
		}
		me._rough1.ggUpdatePosition=function (useTransition) {
		}
		me._modeliving.appendChild(me._rough1);
		me._contfloor1.appendChild(me._modeliving);
		el=me._markerkitchen=document.createElement('div');
		el.ggMarkerNodeId='P3';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Marker-Kitchen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._markerkitchen.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markerkitchen.onclick=function (e) {
			player.openNext('P3');
		}
		me._markerkitchen.ggActivate=function () {
			me._modekitchen.style[domTransition]='none';
			me._modekitchen.style.visibility=(Number(me._modekitchen.style.opacity)>0||!me._modekitchen.style.opacity)?'inherit':'hidden';
			me._modekitchen.ggVisible=true;
		}
		me._markerkitchen.ggDeactivate=function () {
			me._modekitchen.style[domTransition]='none';
			me._modekitchen.style.visibility='hidden';
			me._modekitchen.ggVisible=false;
		}
		me._markerkitchen.ggUpdatePosition=function (useTransition) {
		}
		me._contfloor1.appendChild(me._markerkitchen);
		el=me._modekitchen=document.createElement('div');
		el.ggId="MODE-Kitchen";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='height : 163px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 99px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._modekitchen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._modekitchen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._finishkitchen=document.createElement('div');
		els=me._finishkitchen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOy'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzM5MzkzOTtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzIxODY0OTt9Cjwvc3R5bGU+CiA8dGl0bGU+TU9ERS1GPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMC41LDE0aDM5LjFjMy42LDAsNi41LDIuOSw2LjUsNi41djM5LjFjMCwzLjYtMi45LDYuNS02LjUsNi41SDMwLjVjLTMuNiwwLTYuNS0yLjktNi41LTYuNVYyMC41JiN4YTsmI3g5O0MyNCwxNi45LDI2LjksMTQsMzAuNSwxNHoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9'+
			'Ik0yOS45LDc2LjlWODFoMy4xbC0wLjIsMi4xaC0yLjl2Ni40aC0yLjJWNzQuOGg2LjJ2Mi4xSDI5Ljl6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzYsODkuNVY3NWwyLjItMC4ydjE0LjdIMzZ6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDYuMyw4OS41bC0yLjktOS44bDAsMHY5LjhoLTIuMVY3NC44aDIuNWwyLjYsOC44bDAsMHYtOC44aDIuMXYxNC43SDQ2LjN6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTEuNSw4OS41Vjc1bDIuMi0wLjJ2MTQuN0g1MS41eiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTYyLjcsNzh2MC4ybC0yLjEsMC40di0wLjVjMC0xLTAuNC0xLjUtMS'+
			'4yLTEuNWMtMC41LTAuMS0xLDAuMy0xLjEsMC45YzAsMC4xLDAsMC4yLDAsMC4zdjAuMyYjeGE7JiN4OTtjMCwwLjgsMC40LDEuNSwxLjksMi44YzIsMS44LDIuNywzLDIuNyw0Ljd2MC43YzAuMSwxLjctMS4xLDMuMi0yLjgsMy4zYy0wLjIsMC0wLjQsMC0wLjYsMGMtMS43LDAuMS0zLjMtMS4xLTMuNC0yLjkmI3hhOyYjeDk7YzAtMC4yLDAtMC40LDAtMC41di0wLjhsMi4yLTAuNHYxYzAsMSwwLjUsMS41LDEuMywxLjVzMS4yLTAuNCwxLjItMS40di0wLjVjMC0wLjktMC40LTEuNi0xLjktMi45Yy0yLTEuOC0yLjctMy0yLjctNC42di0wLjQmI3hhOyYjeDk7Yy0wLjItMS42LDEtMy4xLDIuNy0z'+
			'LjNjMC4yLDAsMC40LDAsMC42LDBjMS42LTAuMiwzLjEsMSwzLjMsMi43QzYyLjcsNzcuNSw2Mi43LDc3LjgsNjIuNyw3OHoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02OS43LDg5LjV2LTYuNGgtMi43djYuNGgtMi4yVjc0LjhoMi4yVjgxaDIuN3YtNi4ySDcydjE0LjdINjkuN3oiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01MC4xLDIyLjdjLTkuNiwwLTE3LjUsNy44LTE3LjUsMTcuNXM3LjgsMTcuNSwxNy41LDE3LjVzMTcuNS03LjgsMTcuNS0xNy41YzAsMCwwLDAsMCwwJiN4YTsmI3g5O0M2Ny42LDMwLjUsNTkuOCwyMi43LDUwLjEsMjIuN3ogTTQ5LDQ2LjVMNDYuNSw0OWwtMi41LT'+
			'IuNWwtNC43LTQuN2wyLjUtMi41bDQuNyw0LjdsMTIuOS0xMi45bDIuNSwyLjRMNDksNDYuNXoiLz4KPC9zdmc+Cg==';
		me._finishkitchen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="finish-kitchen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 79px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._finishkitchen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._finishkitchen.onclick=function (e) {
			player.openNext("{node3}","$(cur)");
		}
		me._finishkitchen.onmouseover=function (e) {
			me.elementMouseOver['finishkitchen']=true;
		}
		me._finishkitchen.onmouseout=function (e) {
			me._finishkitchen.style[domTransition]='none';
			me._finishkitchen.style.opacity='1';
			me._finishkitchen.style.visibility=me._finishkitchen.ggVisible?'inherit':'hidden';
			me.elementMouseOver['finishkitchen']=false;
		}
		me._finishkitchen.ontouchend=function (e) {
			me.elementMouseOver['finishkitchen']=false;
		}
		me._finishkitchen.ggUpdatePosition=function (useTransition) {
		}
		me._modekitchen.appendChild(me._finishkitchen);
		el=me._roughkitchen=document.createElement('div');
		els=me._roughkitchen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOy'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzM5MzkzOTtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzIxODZGRjt9Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6IzIxODZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDx0aXRsZT5NT0RFLVI8L3RpdGxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwLjUsMTRoMzkuMWMzLjYsMCw2LjUsMi45LDYuNSw2LjV2MzkuMWMwLDMuNi0yLjksNi41LTYuNSw2LjVIMzAuNWMtMy42LDAtNi41LTIuOS02'+
			'LjUtNi41VjIwLjUmI3hhOyYjeDk7QzI0LDE2LjksMjYuOSwxNCwzMC41LDE0eiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTMwLjIsODMuM2gtMXY2LjJoLTIuM1Y3NC44aDMuMmMyLjQsMCwzLjcsMS4zLDMuNywzLjd2MWMwLjEsMS4zLTAuNSwyLjUtMS42LDMuMmwyLDYuN0gzMkwzMC4yLDgzLjN6JiN4YTsmI3g5OyBNMjkuMiw4MS4yaDAuOWMxLjEsMCwxLjUtMC42LDEuNS0xLjh2LTAuOGMwLTEuMi0wLjUtMS44LTEuNS0xLjhoLTAuOVY4MS4yeiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTQzLjUsNzguM1Y4NmMwLjIsMS45LTEuMiwzLjUtMywzLjdjLTAuMiwwLTAuNCwwLTAuNiwwYy'+
			'0xLjksMC4xLTMuNS0xLjMtMy42LTMuMWMwLTAuMiwwLTAuNCwwLTAuNnYtNy43JiN4YTsmI3g5O2MtMC4yLTEuOSwxLjItMy41LDMtMy43YzAuMiwwLDAuNCwwLDAuNiwwYzEuOS0wLjEsMy41LDEuMywzLjYsMy4xQzQzLjUsNzcuOSw0My41LDc4LjEsNDMuNSw3OC4zeiBNMzguNSw3OC4zVjg2JiN4YTsmI3g5O2MwLDEuMSwwLjUsMS43LDEuNCwxLjdzMS40LTAuNiwxLjQtMS43di03LjdjMC0xLjEtMC41LTEuNy0xLjQtMS43UzM4LjUsNzcuMiwzOC41LDc4LjNMMzguNSw3OC4zeiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTUzLDg2LjJjMC4yLDEuNy0xLDMuMy0yLjgsMy41Yy0wLjIsMC0w'+
			'LjUsMC0wLjcsMGMtMS43LDAuMi0zLjMtMS4xLTMuNC0yLjhjMC0wLjIsMC0wLjQsMC0wLjdWNzQuOGgyLjJ2MTEuMyYjeGE7JiN4OTtjMCwxLjEsMC41LDEuNSwxLjMsMS41czEuMy0wLjQsMS4zLTEuNVY3NC44SDUzVjg2LjJ6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjIuNyw3OC4xdjAuNmwtMi4xLDAuNXYtMC45YzAtMS4yLTAuNC0xLjctMS4zLTEuN3MtMS4zLDAuNS0xLjMsMS41djhjMCwxLDAuNCwxLjUsMS4zLDEuNXMxLjMtMC41LDEuMy0xLjcmI3hhOyYjeDk7di0yLjVoLTEuM3YtMi4xaDMuNHY0LjhjMC4yLDEuOC0xLjEsMy4zLTIuOSwzLjVjLTAuMiwwLTAuNCwwLTAuNiwwYy'+
			'0xLjgsMC4yLTMuMy0xLjEtMy41LTIuOWMwLTAuMiwwLTAuNCwwLTAuN3YtOC4xJiN4YTsmI3g5O2MtMC4yLTEuOCwxLjEtMy4zLDIuOC0zLjVjMC4yLDAsMC40LDAsMC43LDBjMS44LTAuMiwzLjMsMS4xLDMuNSwyLjlDNjIuNyw3Ny43LDYyLjcsNzcuOSw2Mi43LDc4LjF6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNzAuMyw4OS41di02LjRoLTIuN3Y2LjRoLTIuMlY3NC44aDIuMlY4MWgyLjd2LTYuMmgyLjJ2MTQuN0g3MC4zeiIvPgogPHJlY3QgY2xhc3M9InN0MiIgd2lkdGg9IjIzLjkiIHg9IjQ0LjIiIHk9IjI2LjEiIGhlaWdodD0iNS45Ii8+CiA8cmVjdCBjbGFzcz0ic3QyIiB3aWR0'+
			'aD0iMjMuOSIgeD0iMzEuNSIgeT0iMzMuMSIgaGVpZ2h0PSI2Ii8+CiA8cmVjdCBjbGFzcz0ic3QxIiB3aWR0aD0iMjMuOSIgeD0iNDQuMiIgeT0iNDAiIGhlaWdodD0iNiIvPgogPHJlY3QgY2xhc3M9InN0MiIgd2lkdGg9IjExLjIiIHg9IjMxLjciIHk9IjQwIiBoZWlnaHQ9IjYiLz4KIDxyZWN0IGNsYXNzPSJzdDIiIHdpZHRoPSIxMS4yIiB4PSIzMS43IiB5PSIyNiIgaGVpZ2h0PSI2Ii8+CiA8cmVjdCBjbGFzcz0ic3QxIiB3aWR0aD0iMjMuOSIgeD0iMzEuNSIgeT0iNDciIGhlaWdodD0iNiIvPgogPHJlY3QgY2xhc3M9InN0MSIgd2lkdGg9IjExLjIiIHg9IjU2LjkiIHk9IjMzLjEiIGhlaW'+
			'dodD0iNiIvPgogPHJlY3QgY2xhc3M9InN0MSIgd2lkdGg9IjExLjIiIHg9IjU2LjkiIHk9IjQ3IiBoZWlnaHQ9IjYiLz4KPC9zdmc+Cg==';
		me._roughkitchen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="rough-kitchen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._roughkitchen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._roughkitchen.onclick=function (e) {
			player.openNext("{node22}","$(cur)");
		}
		me._roughkitchen.onmouseover=function (e) {
			me.elementMouseOver['roughkitchen']=true;
		}
		me._roughkitchen.onmouseout=function (e) {
			me._roughkitchen.style[domTransition]='none';
			me._roughkitchen.style.opacity='1';
			me._roughkitchen.style.visibility=me._roughkitchen.ggVisible?'inherit':'hidden';
			me.elementMouseOver['roughkitchen']=false;
		}
		me._roughkitchen.ontouchend=function (e) {
			me.elementMouseOver['roughkitchen']=false;
		}
		me._roughkitchen.ggUpdatePosition=function (useTransition) {
		}
		me._modekitchen.appendChild(me._roughkitchen);
		me._contfloor1.appendChild(me._modekitchen);
		el=me._markerbathroom=document.createElement('div');
		el.ggMarkerNodeId='P4';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Marker-Bathroom";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._markerbathroom.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markerbathroom.onclick=function (e) {
			player.openNext('P4');
		}
		me._markerbathroom.ggActivate=function () {
			me._modebathroom.style[domTransition]='none';
			me._modebathroom.style.visibility=(Number(me._modebathroom.style.opacity)>0||!me._modebathroom.style.opacity)?'inherit':'hidden';
			me._modebathroom.ggVisible=true;
		}
		me._markerbathroom.ggDeactivate=function () {
			me._modebathroom.style[domTransition]='none';
			me._modebathroom.style.visibility='hidden';
			me._modebathroom.ggVisible=false;
		}
		me._markerbathroom.ggUpdatePosition=function (useTransition) {
		}
		me._contfloor1.appendChild(me._markerbathroom);
		el=me._modebathroom=document.createElement('div');
		el.ggId="MODE-Bathroom";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='height : 163px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 99px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._modebathroom.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._modebathroom.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._finishbathroom=document.createElement('div');
		els=me._finishbathroom__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOy'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzM5MzkzOTtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzIxODY0OTt9Cjwvc3R5bGU+CiA8dGl0bGU+TU9ERS1GPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMC41LDE0aDM5LjFjMy42LDAsNi41LDIuOSw2LjUsNi41djM5LjFjMCwzLjYtMi45LDYuNS02LjUsNi41SDMwLjVjLTMuNiwwLTYuNS0yLjktNi41LTYuNVYyMC41JiN4YTsmI3g5O0MyNCwxNi45LDI2LjksMTQsMzAuNSwxNHoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9'+
			'Ik0yOS45LDc2LjlWODFoMy4xbC0wLjIsMi4xaC0yLjl2Ni40aC0yLjJWNzQuOGg2LjJ2Mi4xSDI5Ljl6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzYsODkuNVY3NWwyLjItMC4ydjE0LjdIMzZ6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDYuMyw4OS41bC0yLjktOS44bDAsMHY5LjhoLTIuMVY3NC44aDIuNWwyLjYsOC44bDAsMHYtOC44aDIuMXYxNC43SDQ2LjN6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTEuNSw4OS41Vjc1bDIuMi0wLjJ2MTQuN0g1MS41eiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTYyLjcsNzh2MC4ybC0yLjEsMC40di0wLjVjMC0xLTAuNC0xLjUtMS'+
			'4yLTEuNWMtMC41LTAuMS0xLDAuMy0xLjEsMC45YzAsMC4xLDAsMC4yLDAsMC4zdjAuMyYjeGE7JiN4OTtjMCwwLjgsMC40LDEuNSwxLjksMi44YzIsMS44LDIuNywzLDIuNyw0Ljd2MC43YzAuMSwxLjctMS4xLDMuMi0yLjgsMy4zYy0wLjIsMC0wLjQsMC0wLjYsMGMtMS43LDAuMS0zLjMtMS4xLTMuNC0yLjkmI3hhOyYjeDk7YzAtMC4yLDAtMC40LDAtMC41di0wLjhsMi4yLTAuNHYxYzAsMSwwLjUsMS41LDEuMywxLjVzMS4yLTAuNCwxLjItMS40di0wLjVjMC0wLjktMC40LTEuNi0xLjktMi45Yy0yLTEuOC0yLjctMy0yLjctNC42di0wLjQmI3hhOyYjeDk7Yy0wLjItMS42LDEtMy4xLDIuNy0z'+
			'LjNjMC4yLDAsMC40LDAsMC42LDBjMS42LTAuMiwzLjEsMSwzLjMsMi43QzYyLjcsNzcuNSw2Mi43LDc3LjgsNjIuNyw3OHoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02OS43LDg5LjV2LTYuNGgtMi43djYuNGgtMi4yVjc0LjhoMi4yVjgxaDIuN3YtNi4ySDcydjE0LjdINjkuN3oiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01MC4xLDIyLjdjLTkuNiwwLTE3LjUsNy44LTE3LjUsMTcuNXM3LjgsMTcuNSwxNy41LDE3LjVzMTcuNS03LjgsMTcuNS0xNy41YzAsMCwwLDAsMCwwJiN4YTsmI3g5O0M2Ny42LDMwLjUsNTkuOCwyMi43LDUwLjEsMjIuN3ogTTQ5LDQ2LjVMNDYuNSw0OWwtMi41LT'+
			'IuNWwtNC43LTQuN2wyLjUtMi41bDQuNyw0LjdsMTIuOS0xMi45bDIuNSwyLjRMNDksNDYuNXoiLz4KPC9zdmc+Cg==';
		me._finishbathroom__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="finish-bathroom";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 79px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._finishbathroom.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._finishbathroom.onclick=function (e) {
			player.openNext("{node4}","$(cur)");
		}
		me._finishbathroom.onmouseover=function (e) {
			me.elementMouseOver['finishbathroom']=true;
		}
		me._finishbathroom.onmouseout=function (e) {
			me._finishbathroom.style[domTransition]='none';
			me._finishbathroom.style.opacity='1';
			me._finishbathroom.style.visibility=me._finishbathroom.ggVisible?'inherit':'hidden';
			me.elementMouseOver['finishbathroom']=false;
		}
		me._finishbathroom.ontouchend=function (e) {
			me.elementMouseOver['finishbathroom']=false;
		}
		me._finishbathroom.ggUpdatePosition=function (useTransition) {
		}
		me._modebathroom.appendChild(me._finishbathroom);
		el=me._roughbathroom=document.createElement('div');
		els=me._roughbathroom__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOy'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzM5MzkzOTtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzIxODZGRjt9Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6IzIxODZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDx0aXRsZT5NT0RFLVI8L3RpdGxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwLjUsMTRoMzkuMWMzLjYsMCw2LjUsMi45LDYuNSw2LjV2MzkuMWMwLDMuNi0yLjksNi41LTYuNSw2LjVIMzAuNWMtMy42LDAtNi41LTIuOS02'+
			'LjUtNi41VjIwLjUmI3hhOyYjeDk7QzI0LDE2LjksMjYuOSwxNCwzMC41LDE0eiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTMwLjIsODMuM2gtMXY2LjJoLTIuM1Y3NC44aDMuMmMyLjQsMCwzLjcsMS4zLDMuNywzLjd2MWMwLjEsMS4zLTAuNSwyLjUtMS42LDMuMmwyLDYuN0gzMkwzMC4yLDgzLjN6JiN4YTsmI3g5OyBNMjkuMiw4MS4yaDAuOWMxLjEsMCwxLjUtMC42LDEuNS0xLjh2LTAuOGMwLTEuMi0wLjUtMS44LTEuNS0xLjhoLTAuOVY4MS4yeiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTQzLjUsNzguM1Y4NmMwLjIsMS45LTEuMiwzLjUtMywzLjdjLTAuMiwwLTAuNCwwLTAuNiwwYy'+
			'0xLjksMC4xLTMuNS0xLjMtMy42LTMuMWMwLTAuMiwwLTAuNCwwLTAuNnYtNy43JiN4YTsmI3g5O2MtMC4yLTEuOSwxLjItMy41LDMtMy43YzAuMiwwLDAuNCwwLDAuNiwwYzEuOS0wLjEsMy41LDEuMywzLjYsMy4xQzQzLjUsNzcuOSw0My41LDc4LjEsNDMuNSw3OC4zeiBNMzguNSw3OC4zVjg2JiN4YTsmI3g5O2MwLDEuMSwwLjUsMS43LDEuNCwxLjdzMS40LTAuNiwxLjQtMS43di03LjdjMC0xLjEtMC41LTEuNy0xLjQtMS43UzM4LjUsNzcuMiwzOC41LDc4LjNMMzguNSw3OC4zeiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTUzLDg2LjJjMC4yLDEuNy0xLDMuMy0yLjgsMy41Yy0wLjIsMC0w'+
			'LjUsMC0wLjcsMGMtMS43LDAuMi0zLjMtMS4xLTMuNC0yLjhjMC0wLjIsMC0wLjQsMC0wLjdWNzQuOGgyLjJ2MTEuMyYjeGE7JiN4OTtjMCwxLjEsMC41LDEuNSwxLjMsMS41czEuMy0wLjQsMS4zLTEuNVY3NC44SDUzVjg2LjJ6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjIuNyw3OC4xdjAuNmwtMi4xLDAuNXYtMC45YzAtMS4yLTAuNC0xLjctMS4zLTEuN3MtMS4zLDAuNS0xLjMsMS41djhjMCwxLDAuNCwxLjUsMS4zLDEuNXMxLjMtMC41LDEuMy0xLjcmI3hhOyYjeDk7di0yLjVoLTEuM3YtMi4xaDMuNHY0LjhjMC4yLDEuOC0xLjEsMy4zLTIuOSwzLjVjLTAuMiwwLTAuNCwwLTAuNiwwYy'+
			'0xLjgsMC4yLTMuMy0xLjEtMy41LTIuOWMwLTAuMiwwLTAuNCwwLTAuN3YtOC4xJiN4YTsmI3g5O2MtMC4yLTEuOCwxLjEtMy4zLDIuOC0zLjVjMC4yLDAsMC40LDAsMC43LDBjMS44LTAuMiwzLjMsMS4xLDMuNSwyLjlDNjIuNyw3Ny43LDYyLjcsNzcuOSw2Mi43LDc4LjF6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNzAuMyw4OS41di02LjRoLTIuN3Y2LjRoLTIuMlY3NC44aDIuMlY4MWgyLjd2LTYuMmgyLjJ2MTQuN0g3MC4zeiIvPgogPHJlY3QgY2xhc3M9InN0MiIgd2lkdGg9IjIzLjkiIHg9IjQ0LjIiIHk9IjI2LjEiIGhlaWdodD0iNS45Ii8+CiA8cmVjdCBjbGFzcz0ic3QyIiB3aWR0'+
			'aD0iMjMuOSIgeD0iMzEuNSIgeT0iMzMuMSIgaGVpZ2h0PSI2Ii8+CiA8cmVjdCBjbGFzcz0ic3QxIiB3aWR0aD0iMjMuOSIgeD0iNDQuMiIgeT0iNDAiIGhlaWdodD0iNiIvPgogPHJlY3QgY2xhc3M9InN0MiIgd2lkdGg9IjExLjIiIHg9IjMxLjciIHk9IjQwIiBoZWlnaHQ9IjYiLz4KIDxyZWN0IGNsYXNzPSJzdDIiIHdpZHRoPSIxMS4yIiB4PSIzMS43IiB5PSIyNiIgaGVpZ2h0PSI2Ii8+CiA8cmVjdCBjbGFzcz0ic3QxIiB3aWR0aD0iMjMuOSIgeD0iMzEuNSIgeT0iNDciIGhlaWdodD0iNiIvPgogPHJlY3QgY2xhc3M9InN0MSIgd2lkdGg9IjExLjIiIHg9IjU2LjkiIHk9IjMzLjEiIGhlaW'+
			'dodD0iNiIvPgogPHJlY3QgY2xhc3M9InN0MSIgd2lkdGg9IjExLjIiIHg9IjU2LjkiIHk9IjQ3IiBoZWlnaHQ9IjYiLz4KPC9zdmc+Cg==';
		me._roughbathroom__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="rough-bathroom";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._roughbathroom.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._roughbathroom.onclick=function (e) {
			player.openNext("{node23}","$(cur)");
		}
		me._roughbathroom.onmouseover=function (e) {
			me.elementMouseOver['roughbathroom']=true;
		}
		me._roughbathroom.onmouseout=function (e) {
			me._roughbathroom.style[domTransition]='none';
			me._roughbathroom.style.opacity='1';
			me._roughbathroom.style.visibility=me._roughbathroom.ggVisible?'inherit':'hidden';
			me.elementMouseOver['roughbathroom']=false;
		}
		me._roughbathroom.ontouchend=function (e) {
			me.elementMouseOver['roughbathroom']=false;
		}
		me._roughbathroom.ggUpdatePosition=function (useTransition) {
		}
		me._modebathroom.appendChild(me._roughbathroom);
		me._contfloor1.appendChild(me._modebathroom);
		el=me._markerbed1=document.createElement('div');
		el.ggMarkerNodeId='P5';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Marker-Bed1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._markerbed1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markerbed1.onclick=function (e) {
			player.openNext('P5');
		}
		me._markerbed1.ggActivate=function () {
			me._modebed1.style[domTransition]='none';
			me._modebed1.style.visibility=(Number(me._modebed1.style.opacity)>0||!me._modebed1.style.opacity)?'inherit':'hidden';
			me._modebed1.ggVisible=true;
		}
		me._markerbed1.ggDeactivate=function () {
			me._modebed1.style[domTransition]='none';
			me._modebed1.style.visibility='hidden';
			me._modebed1.ggVisible=false;
		}
		me._markerbed1.ggUpdatePosition=function (useTransition) {
		}
		me._contfloor1.appendChild(me._markerbed1);
		el=me._modebed1=document.createElement('div');
		el.ggId="MODE-Bed1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='height : 163px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 99px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._modebed1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._modebed1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._finishbed1=document.createElement('div');
		els=me._finishbed1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOy'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzM5MzkzOTtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzIxODY0OTt9Cjwvc3R5bGU+CiA8dGl0bGU+TU9ERS1GPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMC41LDE0aDM5LjFjMy42LDAsNi41LDIuOSw2LjUsNi41djM5LjFjMCwzLjYtMi45LDYuNS02LjUsNi41SDMwLjVjLTMuNiwwLTYuNS0yLjktNi41LTYuNVYyMC41JiN4YTsmI3g5O0MyNCwxNi45LDI2LjksMTQsMzAuNSwxNHoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9'+
			'Ik0yOS45LDc2LjlWODFoMy4xbC0wLjIsMi4xaC0yLjl2Ni40aC0yLjJWNzQuOGg2LjJ2Mi4xSDI5Ljl6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzYsODkuNVY3NWwyLjItMC4ydjE0LjdIMzZ6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDYuMyw4OS41bC0yLjktOS44bDAsMHY5LjhoLTIuMVY3NC44aDIuNWwyLjYsOC44bDAsMHYtOC44aDIuMXYxNC43SDQ2LjN6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTEuNSw4OS41Vjc1bDIuMi0wLjJ2MTQuN0g1MS41eiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTYyLjcsNzh2MC4ybC0yLjEsMC40di0wLjVjMC0xLTAuNC0xLjUtMS'+
			'4yLTEuNWMtMC41LTAuMS0xLDAuMy0xLjEsMC45YzAsMC4xLDAsMC4yLDAsMC4zdjAuMyYjeGE7JiN4OTtjMCwwLjgsMC40LDEuNSwxLjksMi44YzIsMS44LDIuNywzLDIuNyw0Ljd2MC43YzAuMSwxLjctMS4xLDMuMi0yLjgsMy4zYy0wLjIsMC0wLjQsMC0wLjYsMGMtMS43LDAuMS0zLjMtMS4xLTMuNC0yLjkmI3hhOyYjeDk7YzAtMC4yLDAtMC40LDAtMC41di0wLjhsMi4yLTAuNHYxYzAsMSwwLjUsMS41LDEuMywxLjVzMS4yLTAuNCwxLjItMS40di0wLjVjMC0wLjktMC40LTEuNi0xLjktMi45Yy0yLTEuOC0yLjctMy0yLjctNC42di0wLjQmI3hhOyYjeDk7Yy0wLjItMS42LDEtMy4xLDIuNy0z'+
			'LjNjMC4yLDAsMC40LDAsMC42LDBjMS42LTAuMiwzLjEsMSwzLjMsMi43QzYyLjcsNzcuNSw2Mi43LDc3LjgsNjIuNyw3OHoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02OS43LDg5LjV2LTYuNGgtMi43djYuNGgtMi4yVjc0LjhoMi4yVjgxaDIuN3YtNi4ySDcydjE0LjdINjkuN3oiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01MC4xLDIyLjdjLTkuNiwwLTE3LjUsNy44LTE3LjUsMTcuNXM3LjgsMTcuNSwxNy41LDE3LjVzMTcuNS03LjgsMTcuNS0xNy41YzAsMCwwLDAsMCwwJiN4YTsmI3g5O0M2Ny42LDMwLjUsNTkuOCwyMi43LDUwLjEsMjIuN3ogTTQ5LDQ2LjVMNDYuNSw0OWwtMi41LT'+
			'IuNWwtNC43LTQuN2wyLjUtMi41bDQuNyw0LjdsMTIuOS0xMi45bDIuNSwyLjRMNDksNDYuNXoiLz4KPC9zdmc+Cg==';
		me._finishbed1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="finish-bed1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 79px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._finishbed1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._finishbed1.onclick=function (e) {
			player.openNext("{node5}","$(cur)");
		}
		me._finishbed1.onmouseover=function (e) {
			me.elementMouseOver['finishbed1']=true;
		}
		me._finishbed1.onmouseout=function (e) {
			me._finishbed1.style[domTransition]='none';
			me._finishbed1.style.opacity='1';
			me._finishbed1.style.visibility=me._finishbed1.ggVisible?'inherit':'hidden';
			me.elementMouseOver['finishbed1']=false;
		}
		me._finishbed1.ontouchend=function (e) {
			me.elementMouseOver['finishbed1']=false;
		}
		me._finishbed1.ggUpdatePosition=function (useTransition) {
		}
		me._modebed1.appendChild(me._finishbed1);
		el=me._roughbed1=document.createElement('div');
		els=me._roughbed1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOy'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzM5MzkzOTtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzIxODZGRjt9Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6IzIxODZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDx0aXRsZT5NT0RFLVI8L3RpdGxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwLjUsMTRoMzkuMWMzLjYsMCw2LjUsMi45LDYuNSw2LjV2MzkuMWMwLDMuNi0yLjksNi41LTYuNSw2LjVIMzAuNWMtMy42LDAtNi41LTIuOS02'+
			'LjUtNi41VjIwLjUmI3hhOyYjeDk7QzI0LDE2LjksMjYuOSwxNCwzMC41LDE0eiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTMwLjIsODMuM2gtMXY2LjJoLTIuM1Y3NC44aDMuMmMyLjQsMCwzLjcsMS4zLDMuNywzLjd2MWMwLjEsMS4zLTAuNSwyLjUtMS42LDMuMmwyLDYuN0gzMkwzMC4yLDgzLjN6JiN4YTsmI3g5OyBNMjkuMiw4MS4yaDAuOWMxLjEsMCwxLjUtMC42LDEuNS0xLjh2LTAuOGMwLTEuMi0wLjUtMS44LTEuNS0xLjhoLTAuOVY4MS4yeiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTQzLjUsNzguM1Y4NmMwLjIsMS45LTEuMiwzLjUtMywzLjdjLTAuMiwwLTAuNCwwLTAuNiwwYy'+
			'0xLjksMC4xLTMuNS0xLjMtMy42LTMuMWMwLTAuMiwwLTAuNCwwLTAuNnYtNy43JiN4YTsmI3g5O2MtMC4yLTEuOSwxLjItMy41LDMtMy43YzAuMiwwLDAuNCwwLDAuNiwwYzEuOS0wLjEsMy41LDEuMywzLjYsMy4xQzQzLjUsNzcuOSw0My41LDc4LjEsNDMuNSw3OC4zeiBNMzguNSw3OC4zVjg2JiN4YTsmI3g5O2MwLDEuMSwwLjUsMS43LDEuNCwxLjdzMS40LTAuNiwxLjQtMS43di03LjdjMC0xLjEtMC41LTEuNy0xLjQtMS43UzM4LjUsNzcuMiwzOC41LDc4LjNMMzguNSw3OC4zeiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTUzLDg2LjJjMC4yLDEuNy0xLDMuMy0yLjgsMy41Yy0wLjIsMC0w'+
			'LjUsMC0wLjcsMGMtMS43LDAuMi0zLjMtMS4xLTMuNC0yLjhjMC0wLjIsMC0wLjQsMC0wLjdWNzQuOGgyLjJ2MTEuMyYjeGE7JiN4OTtjMCwxLjEsMC41LDEuNSwxLjMsMS41czEuMy0wLjQsMS4zLTEuNVY3NC44SDUzVjg2LjJ6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjIuNyw3OC4xdjAuNmwtMi4xLDAuNXYtMC45YzAtMS4yLTAuNC0xLjctMS4zLTEuN3MtMS4zLDAuNS0xLjMsMS41djhjMCwxLDAuNCwxLjUsMS4zLDEuNXMxLjMtMC41LDEuMy0xLjcmI3hhOyYjeDk7di0yLjVoLTEuM3YtMi4xaDMuNHY0LjhjMC4yLDEuOC0xLjEsMy4zLTIuOSwzLjVjLTAuMiwwLTAuNCwwLTAuNiwwYy'+
			'0xLjgsMC4yLTMuMy0xLjEtMy41LTIuOWMwLTAuMiwwLTAuNCwwLTAuN3YtOC4xJiN4YTsmI3g5O2MtMC4yLTEuOCwxLjEtMy4zLDIuOC0zLjVjMC4yLDAsMC40LDAsMC43LDBjMS44LTAuMiwzLjMsMS4xLDMuNSwyLjlDNjIuNyw3Ny43LDYyLjcsNzcuOSw2Mi43LDc4LjF6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNzAuMyw4OS41di02LjRoLTIuN3Y2LjRoLTIuMlY3NC44aDIuMlY4MWgyLjd2LTYuMmgyLjJ2MTQuN0g3MC4zeiIvPgogPHJlY3QgY2xhc3M9InN0MiIgd2lkdGg9IjIzLjkiIHg9IjQ0LjIiIHk9IjI2LjEiIGhlaWdodD0iNS45Ii8+CiA8cmVjdCBjbGFzcz0ic3QyIiB3aWR0'+
			'aD0iMjMuOSIgeD0iMzEuNSIgeT0iMzMuMSIgaGVpZ2h0PSI2Ii8+CiA8cmVjdCBjbGFzcz0ic3QxIiB3aWR0aD0iMjMuOSIgeD0iNDQuMiIgeT0iNDAiIGhlaWdodD0iNiIvPgogPHJlY3QgY2xhc3M9InN0MiIgd2lkdGg9IjExLjIiIHg9IjMxLjciIHk9IjQwIiBoZWlnaHQ9IjYiLz4KIDxyZWN0IGNsYXNzPSJzdDIiIHdpZHRoPSIxMS4yIiB4PSIzMS43IiB5PSIyNiIgaGVpZ2h0PSI2Ii8+CiA8cmVjdCBjbGFzcz0ic3QxIiB3aWR0aD0iMjMuOSIgeD0iMzEuNSIgeT0iNDciIGhlaWdodD0iNiIvPgogPHJlY3QgY2xhc3M9InN0MSIgd2lkdGg9IjExLjIiIHg9IjU2LjkiIHk9IjMzLjEiIGhlaW'+
			'dodD0iNiIvPgogPHJlY3QgY2xhc3M9InN0MSIgd2lkdGg9IjExLjIiIHg9IjU2LjkiIHk9IjQ3IiBoZWlnaHQ9IjYiLz4KPC9zdmc+Cg==';
		me._roughbed1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="rough-bed1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._roughbed1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._roughbed1.onclick=function (e) {
			player.openNext("{node24}","$(cur)");
		}
		me._roughbed1.onmouseover=function (e) {
			me.elementMouseOver['roughbed1']=true;
		}
		me._roughbed1.onmouseout=function (e) {
			me._roughbed1.style[domTransition]='none';
			me._roughbed1.style.opacity='1';
			me._roughbed1.style.visibility=me._roughbed1.ggVisible?'inherit':'hidden';
			me.elementMouseOver['roughbed1']=false;
		}
		me._roughbed1.ontouchend=function (e) {
			me.elementMouseOver['roughbed1']=false;
		}
		me._roughbed1.ggUpdatePosition=function (useTransition) {
		}
		me._modebed1.appendChild(me._roughbed1);
		me._contfloor1.appendChild(me._modebed1);
		el=me._markerbed2=document.createElement('div');
		el.ggMarkerNodeId='P6';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Marker-Bed2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._markerbed2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markerbed2.onclick=function (e) {
			player.openNext('P6');
		}
		me._markerbed2.ggActivate=function () {
			me._modebed2.style[domTransition]='none';
			me._modebed2.style.visibility=(Number(me._modebed2.style.opacity)>0||!me._modebed2.style.opacity)?'inherit':'hidden';
			me._modebed2.ggVisible=true;
		}
		me._markerbed2.ggDeactivate=function () {
			me._modebed2.style[domTransition]='none';
			me._modebed2.style.visibility='hidden';
			me._modebed2.ggVisible=false;
		}
		me._markerbed2.ggUpdatePosition=function (useTransition) {
		}
		me._contfloor1.appendChild(me._markerbed2);
		el=me._modebed2=document.createElement('div');
		el.ggId="MODE-Bed2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='height : 163px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 99px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._modebed2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._modebed2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._finishbed2=document.createElement('div');
		els=me._finishbed2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOy'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzM5MzkzOTtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzIxODY0OTt9Cjwvc3R5bGU+CiA8dGl0bGU+TU9ERS1GPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMC41LDE0aDM5LjFjMy42LDAsNi41LDIuOSw2LjUsNi41djM5LjFjMCwzLjYtMi45LDYuNS02LjUsNi41SDMwLjVjLTMuNiwwLTYuNS0yLjktNi41LTYuNVYyMC41JiN4YTsmI3g5O0MyNCwxNi45LDI2LjksMTQsMzAuNSwxNHoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9'+
			'Ik0yOS45LDc2LjlWODFoMy4xbC0wLjIsMi4xaC0yLjl2Ni40aC0yLjJWNzQuOGg2LjJ2Mi4xSDI5Ljl6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzYsODkuNVY3NWwyLjItMC4ydjE0LjdIMzZ6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDYuMyw4OS41bC0yLjktOS44bDAsMHY5LjhoLTIuMVY3NC44aDIuNWwyLjYsOC44bDAsMHYtOC44aDIuMXYxNC43SDQ2LjN6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTEuNSw4OS41Vjc1bDIuMi0wLjJ2MTQuN0g1MS41eiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTYyLjcsNzh2MC4ybC0yLjEsMC40di0wLjVjMC0xLTAuNC0xLjUtMS'+
			'4yLTEuNWMtMC41LTAuMS0xLDAuMy0xLjEsMC45YzAsMC4xLDAsMC4yLDAsMC4zdjAuMyYjeGE7JiN4OTtjMCwwLjgsMC40LDEuNSwxLjksMi44YzIsMS44LDIuNywzLDIuNyw0Ljd2MC43YzAuMSwxLjctMS4xLDMuMi0yLjgsMy4zYy0wLjIsMC0wLjQsMC0wLjYsMGMtMS43LDAuMS0zLjMtMS4xLTMuNC0yLjkmI3hhOyYjeDk7YzAtMC4yLDAtMC40LDAtMC41di0wLjhsMi4yLTAuNHYxYzAsMSwwLjUsMS41LDEuMywxLjVzMS4yLTAuNCwxLjItMS40di0wLjVjMC0wLjktMC40LTEuNi0xLjktMi45Yy0yLTEuOC0yLjctMy0yLjctNC42di0wLjQmI3hhOyYjeDk7Yy0wLjItMS42LDEtMy4xLDIuNy0z'+
			'LjNjMC4yLDAsMC40LDAsMC42LDBjMS42LTAuMiwzLjEsMSwzLjMsMi43QzYyLjcsNzcuNSw2Mi43LDc3LjgsNjIuNyw3OHoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02OS43LDg5LjV2LTYuNGgtMi43djYuNGgtMi4yVjc0LjhoMi4yVjgxaDIuN3YtNi4ySDcydjE0LjdINjkuN3oiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01MC4xLDIyLjdjLTkuNiwwLTE3LjUsNy44LTE3LjUsMTcuNXM3LjgsMTcuNSwxNy41LDE3LjVzMTcuNS03LjgsMTcuNS0xNy41YzAsMCwwLDAsMCwwJiN4YTsmI3g5O0M2Ny42LDMwLjUsNTkuOCwyMi43LDUwLjEsMjIuN3ogTTQ5LDQ2LjVMNDYuNSw0OWwtMi41LT'+
			'IuNWwtNC43LTQuN2wyLjUtMi41bDQuNyw0LjdsMTIuOS0xMi45bDIuNSwyLjRMNDksNDYuNXoiLz4KPC9zdmc+Cg==';
		me._finishbed2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="finish-bed2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 79px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._finishbed2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._finishbed2.onclick=function (e) {
			player.openNext("{node6}","$(cur)");
		}
		me._finishbed2.onmouseover=function (e) {
			me.elementMouseOver['finishbed2']=true;
		}
		me._finishbed2.onmouseout=function (e) {
			me._finishbed2.style[domTransition]='none';
			me._finishbed2.style.opacity='1';
			me._finishbed2.style.visibility=me._finishbed2.ggVisible?'inherit':'hidden';
			me.elementMouseOver['finishbed2']=false;
		}
		me._finishbed2.ontouchend=function (e) {
			me.elementMouseOver['finishbed2']=false;
		}
		me._finishbed2.ggUpdatePosition=function (useTransition) {
		}
		me._modebed2.appendChild(me._finishbed2);
		el=me._roughbed2=document.createElement('div');
		els=me._roughbed2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOy'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzM5MzkzOTtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzIxODZGRjt9Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6IzIxODZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDx0aXRsZT5NT0RFLVI8L3RpdGxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwLjUsMTRoMzkuMWMzLjYsMCw2LjUsMi45LDYuNSw2LjV2MzkuMWMwLDMuNi0yLjksNi41LTYuNSw2LjVIMzAuNWMtMy42LDAtNi41LTIuOS02'+
			'LjUtNi41VjIwLjUmI3hhOyYjeDk7QzI0LDE2LjksMjYuOSwxNCwzMC41LDE0eiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTMwLjIsODMuM2gtMXY2LjJoLTIuM1Y3NC44aDMuMmMyLjQsMCwzLjcsMS4zLDMuNywzLjd2MWMwLjEsMS4zLTAuNSwyLjUtMS42LDMuMmwyLDYuN0gzMkwzMC4yLDgzLjN6JiN4YTsmI3g5OyBNMjkuMiw4MS4yaDAuOWMxLjEsMCwxLjUtMC42LDEuNS0xLjh2LTAuOGMwLTEuMi0wLjUtMS44LTEuNS0xLjhoLTAuOVY4MS4yeiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTQzLjUsNzguM1Y4NmMwLjIsMS45LTEuMiwzLjUtMywzLjdjLTAuMiwwLTAuNCwwLTAuNiwwYy'+
			'0xLjksMC4xLTMuNS0xLjMtMy42LTMuMWMwLTAuMiwwLTAuNCwwLTAuNnYtNy43JiN4YTsmI3g5O2MtMC4yLTEuOSwxLjItMy41LDMtMy43YzAuMiwwLDAuNCwwLDAuNiwwYzEuOS0wLjEsMy41LDEuMywzLjYsMy4xQzQzLjUsNzcuOSw0My41LDc4LjEsNDMuNSw3OC4zeiBNMzguNSw3OC4zVjg2JiN4YTsmI3g5O2MwLDEuMSwwLjUsMS43LDEuNCwxLjdzMS40LTAuNiwxLjQtMS43di03LjdjMC0xLjEtMC41LTEuNy0xLjQtMS43UzM4LjUsNzcuMiwzOC41LDc4LjNMMzguNSw3OC4zeiIvPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTUzLDg2LjJjMC4yLDEuNy0xLDMuMy0yLjgsMy41Yy0wLjIsMC0w'+
			'LjUsMC0wLjcsMGMtMS43LDAuMi0zLjMtMS4xLTMuNC0yLjhjMC0wLjIsMC0wLjQsMC0wLjdWNzQuOGgyLjJ2MTEuMyYjeGE7JiN4OTtjMCwxLjEsMC41LDEuNSwxLjMsMS41czEuMy0wLjQsMS4zLTEuNVY3NC44SDUzVjg2LjJ6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjIuNyw3OC4xdjAuNmwtMi4xLDAuNXYtMC45YzAtMS4yLTAuNC0xLjctMS4zLTEuN3MtMS4zLDAuNS0xLjMsMS41djhjMCwxLDAuNCwxLjUsMS4zLDEuNXMxLjMtMC41LDEuMy0xLjcmI3hhOyYjeDk7di0yLjVoLTEuM3YtMi4xaDMuNHY0LjhjMC4yLDEuOC0xLjEsMy4zLTIuOSwzLjVjLTAuMiwwLTAuNCwwLTAuNiwwYy'+
			'0xLjgsMC4yLTMuMy0xLjEtMy41LTIuOWMwLTAuMiwwLTAuNCwwLTAuN3YtOC4xJiN4YTsmI3g5O2MtMC4yLTEuOCwxLjEtMy4zLDIuOC0zLjVjMC4yLDAsMC40LDAsMC43LDBjMS44LTAuMiwzLjMsMS4xLDMuNSwyLjlDNjIuNyw3Ny43LDYyLjcsNzcuOSw2Mi43LDc4LjF6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNzAuMyw4OS41di02LjRoLTIuN3Y2LjRoLTIuMlY3NC44aDIuMlY4MWgyLjd2LTYuMmgyLjJ2MTQuN0g3MC4zeiIvPgogPHJlY3QgY2xhc3M9InN0MiIgd2lkdGg9IjIzLjkiIHg9IjQ0LjIiIHk9IjI2LjEiIGhlaWdodD0iNS45Ii8+CiA8cmVjdCBjbGFzcz0ic3QyIiB3aWR0'+
			'aD0iMjMuOSIgeD0iMzEuNSIgeT0iMzMuMSIgaGVpZ2h0PSI2Ii8+CiA8cmVjdCBjbGFzcz0ic3QxIiB3aWR0aD0iMjMuOSIgeD0iNDQuMiIgeT0iNDAiIGhlaWdodD0iNiIvPgogPHJlY3QgY2xhc3M9InN0MiIgd2lkdGg9IjExLjIiIHg9IjMxLjciIHk9IjQwIiBoZWlnaHQ9IjYiLz4KIDxyZWN0IGNsYXNzPSJzdDIiIHdpZHRoPSIxMS4yIiB4PSIzMS43IiB5PSIyNiIgaGVpZ2h0PSI2Ii8+CiA8cmVjdCBjbGFzcz0ic3QxIiB3aWR0aD0iMjMuOSIgeD0iMzEuNSIgeT0iNDciIGhlaWdodD0iNiIvPgogPHJlY3QgY2xhc3M9InN0MSIgd2lkdGg9IjExLjIiIHg9IjU2LjkiIHk9IjMzLjEiIGhlaW'+
			'dodD0iNiIvPgogPHJlY3QgY2xhc3M9InN0MSIgd2lkdGg9IjExLjIiIHg9IjU2LjkiIHk9IjQ3IiBoZWlnaHQ9IjYiLz4KPC9zdmc+Cg==';
		me._roughbed2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="rough-bed2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._roughbed2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._roughbed2.onclick=function (e) {
			player.openNext("{node25}","$(cur)");
		}
		me._roughbed2.onmouseover=function (e) {
			me.elementMouseOver['roughbed2']=true;
		}
		me._roughbed2.onmouseout=function (e) {
			me._roughbed2.style[domTransition]='none';
			me._roughbed2.style.opacity='1';
			me._roughbed2.style.visibility=me._roughbed2.ggVisible?'inherit':'hidden';
			me.elementMouseOver['roughbed2']=false;
		}
		me._roughbed2.ontouchend=function (e) {
			me.elementMouseOver['roughbed2']=false;
		}
		me._roughbed2.ggUpdatePosition=function (useTransition) {
		}
		me._modebed2.appendChild(me._roughbed2);
		me._contfloor1.appendChild(me._modebed2);
		me.divSkin.appendChild(me._contfloor1);
		el=me._button_help=document.createElement('div');
		els=me._button_help__img=document.createElement('img');
		els.className='ggskin ggskin_button_help';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAKQUlEQVRogeVbe2hU2R3+7p1XZuIrZhM1RhcsrZtYtRWrQVelWqOwW4SgpWI1/cNHFIQKUnx0V0WpjQWlWrCgBCrVBTFifKOi0U2CYl0NrprYNBo1yWgeZibOzH2de/rHuWfumXFXcOaapOwPDnde98z55vud3/OMRCnFD0nk/l5AX8sPDrA7lZskSXJ6He8tqW7FlAA7JJJwlZKeczSm8NgRY9NfgDlA2VqDy7ry1ykAAsCwholE8ClLfwAWgXoA+KzhhQ2aANAAKABU6zGxRlqg+9poiWB9AAYByDp16tRvW1tbj/f29t6JRCKP29raLtbW1v5x+PDhH1mfyQDTAhm26qcmlNL3HmkC9gIYDGDUsGHDJjY0NFyMxWJUURSqKAqNRCI0FArRzs5O2t'+
			'jY+G1hYeEUAKOsezwccCrrppT2KcMS7L3qBzD0zJkzfxg9evQCAJBlGS6XCy6XCwBACIHf75+we/futWAs+2CrfMrS1yotgzEcKCsrm1BQUPB70zQBMFcny2w5pmnCMAxomoZRo0bNw9tqnbL0tdHigP3z58+fZxiGDDB2ZVmOA9V1HYqiQFEUuFyuEWAa4QEDnJb0JWBusFwAfD6fb6SqqiCEAAAMwwAAaJqGaDSKWCyGWCyGSCQSs9aZvsFC3zPMQcsdHR0hVVWh6zp0XY8zrGlaHKyu62htbX0M5oocCTz6eg9TWEHElStXviGEQFVVRCIRhMNhhEIhhEIh9Pb2ctDq4cOHvwLzxQaYH05L+hIwB0sAaEePHn3U0NDwNcDUWVVVRKNRRKNRKIoCTdPIuXPnjly7dq0RQAR28JGeX0zFr6aYPEhghicAIAtALoBR'+
			'Bw4c+N2cOXN+bZqmV1EUqKqKlpaW/1RUVPyrurr6LoAggA4APQBiYMBpqvFAXwHmMbIHzL0MBgOdAyAbwNBZs2aNzcrK8p8+fboJQC+A1wC6AHSDgY1CYHmgAk5OEjjgAIAh1hgM5nbcYGAUMMC9AMLWlYM1YKn0QEsPRaAea3jBwHLA/uXLl388cuTI7PPnz7968OBBGAzUG2v0gu3dGAAdDhgsAB8klpZgJweDwdR2LIBPdu/evfTevXvHuru7n+u6TvmIxWL0yZMnj3bs2LEewM8BjLPuy8T3+OBUY2knAXNWeaw8DEAegJ/s27evtKOjo1HTtDhIwzCoYRhU0zQaiURoV1cXff78+ZuysrLfWICzwbThOz1JfwMW1TdgLXbsjBkzftHc3HxR13XKwRJCqGmalFJKTdOkmqbRcDhMX758SVtaWmhNTc11AIUARl'+
			'hzfWc42Z/ZEmfWBSsxADBo8+bNky5dunRizJgxC0zTjP9QkiTFjR6/UkrjyYLf7//EmsNnzeloAS1do8UXkwD28OHDn5aWlv5dkqQh4XA4dPXq1Zu5ubn506ZNmwAAbrf9tWLCoGkadF33wLbaaScLyeKElXaBqbIfwKD9+/cXlZaWHpQkKfPFixcP586de7C5udlbXFxccPLkyQmAnR0RQkAIiQPWdR2vX7/utuZ0nF0gPcBcjblvzSwvL5+yZs2afwDIbG9vf1hUVPTnYDDoBjCkuLg4n6s2z4E5WE3TOLtob29/Zs3vWMIgihMq7QbgKykpGbl27dr9lNIhr169aiwqKvoiGAwSMOa1hQsXThJv5MA5s3zcvn37Lmy/O6AAixGUd+/evV/KspwXCoValy5durW1tTVsvY8VK1YUjB49Oo9XNSRJAqX0LXVWVVU5'+
			'fvz4N2AByAcBnS7DMgA5JyfHnZWVNT8ajXbt2rVr040bN9qF+T2lpaVzOFgOWASraRoMw8Djx4/vdnV1hcDSQQ7YTHONCZIuwwBAOzo6tLNnz66urq5uP3To0EswVmQA/nHjxvknTpxYxIt03BWJdStd10EIwaVLl67hQ4STgqQDmOe3BgB12bJlV4X5XGB+NLB169a5Ho/HJ7JrmiYIIQnGqqenp6uysrIeLFHgDDvKLuAcYAWMDe5KeCfBM2PGjAXi3gWQYKy4Ot+/f/8WWNLAAfMWy4DawyZs1TNg1509ADzr16+flJubO46zK8ty3FgJgQZM00RVVZWozgmpoJPiBGCxdMMDBu6qPuPs8v2bHFkZhoG2trbmmzdvPgEDrMBW5wEFWGxjiiGmC4BvzJgxw8ePHz9LBCu6ItFY3blzpw6J6vxB9i/gXBGPW+V4TL'+
			'1t27aFXq/XLxorUZ2FoR85cqQaDDBn13HrzMUpwDwI8YJFVoGZM2d+xntFonUWQ0lCCJqamuqDwWAnGLsK2P79IOoMOFvi4ez6V69e/dOcnJwfcXXmxkq0zrzTUFtb+zUYu9z3mkg8EcBlwJwAEJMIH4BASUnJ598XWfFhmiai0Wj42LFj/4ZtmU3Y4So3hvzqiDjFMK92ZGRmZg4uKCiYJbILIMFg8X5SY2PjbVVV38CqNcMOWJKPPAyoVgvPmLwA/Nu3b/9lIBAYKrILsGCDD4AVAaqqqq4jMWjJqKurW0gIaaqtrf3UmtOZzr8l6QJO6AgCCMyePXtBsjrzehIH63K50N3d/fzixYv/Bdu3MoCMEydO/Gr69On/NE0zu62tjZd2Ha16OKHS3Dpn5OfnZ+Xn5/8smV0ukiTB5XLB4/GgpqamDjZY365duwoXLVr0'+
			'N8MwPO3t7deWLFnyCA40wJPFyRKPb926dUVut9sjMiyKJElwu90ghNCKiop6617fxo0bf7xhw4a/6Lo+KBwOd65ataocNtABFUtzdfYAyJg8efIU/obILq9Y8h8hEomEm5ubNQC+lStXTtiyZcuXhJBBb968Ce3cuXPT5cuXu5B4Rssxo+VEiSfOcF5eXiEhJG6RxQMqhJC40QoEApllZWUTZ86cmT1v3rxiXde94XA4XF5e/sXBgwcbYZ/P4j1hx1hOt5nmAWunfAQgv6mp6bzP5/N5vV74fL54OVbMjnjiIH5vLBbr3L59+58qKysbAITAuoW9sP3zW6D7q5kWb5rl5eUFKKU+TdPiCT4/xpAcP3PGJUlCMBh8sGnTpj319fXPwLqFYdhZkyNNcFEcCy17enpUXddN0zRl0WCJ6aAIllJK6urqzmzevPkoWB+4B4'+
			'xdnjXxyMtRSRdwvOoRjUbVlpaW+yNGjJjM92tydMVff/r06cOKioqvbt261QCgE6z53QM7YxKZddRKp7uH3WDtlWEAcqdOnTpxz549f/V6vdkim1b9Sm1oaPj2+vXrNRcuXKgH6+x3g4EN4W01Bt4Btr9OAPAIaxCA4QBG5OXljV28ePHs3Nzcjz0ez+Bnz54FX7x4Eayurm4IhULcGIWEwTMlBYkndd65sP4CnHxuY5g1hsA+PUfBIioFjEVxiBWO9yra9eeRBxNMDSPWYxXM0vJ2J69satZ7Cmw/mwz0g//FxolDLTz44AUALxiz/OSrWM7VYYNMC2h/MsxzV37VYNen+S/Dj/Dzz/UZo8nilB8WqxIE7y7P9Os/w5ysaQ0YUO+SlPbw/7P8D+HgPCVBep76AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAKPklEQVRogeVba0xV2RX+zvvcFwg+QDQomGirVekYozXji2FwyDha30Zj00yMQtRoYppM2jqiVZMOJsaqM0QJPm5M+eEPYw3yh1p1gi2djCEVR1BrfEVeF7kgcF/nnP7YZ5+zuVrb4R64TGYlO/eK3MP+WN9a+1trbTjDMPBjMj7ZGxhu+9EBFgfzIY7jnN7H97bBhuKgADtkHPPKxf2botGZ944km2QBpgB5cw+C+Uq/bgDQAMTMpWMg+EFbMgCzQCUAirlk2KA1ABEAIQBh871mroRADzdgFqwCwA3Ae+jQoRVTp07d6PF4pkmSlBKNRh8EAoGaXbt2fRkMBoMA+kDAG0jQ09xggj+BpMXB9qrX5/ONKS8vLxszZswyABAEYcAKhUKNJSUlv2pubn'+
			'4J4DUI6BgAY7BJazgBcyCxKgPwAkg/ffr0b3Jzcz8VBAGiKEKSJIiiCJ7nrZ/T1NRUsXHjxi8AvALQC0Jx/YeSpXkQwO4NGzbMmDZt2q95noeiKHC5XFAUBYIgAAA0TYOmaZgyZcoHAL4E0A/iYR6E1oOyZAF2LV68+ANFUXhJkuB2u+HxeKCqKgRBgK7riEajiEQikCQpA4ALJBSERDcwnIBpwhIAKKmpqZmqqkJRFHi9Xni9XiiKAp7noWkawuEweJ5HT09Pv7lPHvZZPWhLVpbme3t7g6qqgoKWZRmSJFnxK4oiDMNAW1tbM0hWdkR4DLeWpseKfuPGjW9ZoIIggOM4GIYBjuMgCAIMwwiXlZX9GSRRxUDO4YRsOAFTsBqAyMWLF79rbm6+RcECRB/Tpeu65vf7L1y+fLkJJDtT8ZGYp9kf8v+uQRoHkrBGAcgB'+
			'MA/ALysrKy+9evUqHIlEjFgsZkSjUaOxsbF5zZo1nwP4BMBcAJPNzynmcwa1b8Mwhu0cphpZAqAC8AFIAzAWwGgAqYWFhdkZGRkuv9//EEAPyLkbANAJoAtEbVleHqnCI75IoIDdAFLM5QM5dkQQMCEQwD0Aus1XCjYGk9IjTXiwQCVzySBgKWDX8uXLJ2VmZo6+detWW1NTUzcIqNfm6gGJ3X4AUTiQsICh8TCVkFRGqiAedG/btu3nc+fO/SQjI2Ohz+ebKMsyFEWBqqro7e29f+XKlS8PHz78NYAgbM+GYRcM1mZHAqXpFwXYBYIbgHfPnj2/KCws/K3L5ZpqGAZ4nocgCNZxJIoiRFEEx3G9x48f//TMmTPfgICm2fkNKZlswJTCFKwLgCcvLy/jyJEjfxg7duwyXSd7pmDpos+i+2hvb7+5dOnSEpCE1QPi4T'+
			'fonMwYZsHKMMEWFxfPLCkpOaWqarau65ag4HkeoihagAFSKMRiMWiahrS0tJ+AMOM1CKUdbaAlCpilsQyTwmVlZe+vX7/+pCRJKX19fcG6urq/p6enT8zLy5tBqUxlpGEYlnaORCKIRCKUIbT146g54WGWxt7Dhw/P37Jly1eqqnpaWlruFRUVffX48WM5Pz//p36/f4YoilAUBazCikajAAhNw+FwJ+yk53h7NBHAbMyqADylpaXvFRcXl7tcLk9nZ+e9JUuWHGlpaREBpBQUFExkaU2TlSkjra+1trY+NZ/vWMHAWqJamoPZn1qxYkXmzp07/+Tz+VL6+vqa5s+fv6+lpeU1zCbckiVLZsViMSvZ8DwPnuetpEV/EXV1dXdgn7sjCjCroOQTJ058npqamhWNRl+sW7fud8+fP+8GEQ39GzZsyEpPT8/SNA00W1Nj'+
			'dW4kEglVVFR8C3IUDQnoRGOYB8CPGzdOzMrK+tAwjMD+/fs/u379+kvm+dLq1asXx2IxK2Y5jrNKQUppXdfR2Nh4p7W1NQjCCgp40O2ct1miMQwARltbW+Tq1avbamtrX548ebIVxCs8AFd2drYrJydnvqZpVpxSKrNgDcPApUuXrmMI5CRriQCm9W0MQHjVqlV/ZZ4nwFRaxcXF+RzHKWyiooJD13VQmnd2dgYqKioaYMvJKBz2LuAc4BCIN+hRQicJ0uzZs5cBGNCGpdSm3tU0DfX19f+ALTZoh8OR8QpricawDpt6MdgzIgmAtHnz5lmjRo3KpWJDlmWqma341TQNhmHg3LlzLJ0HlIJOmhOA2dYNFQwiACU/P/9jnucHgH0bnZ88efLv2traxyCAQ7DpPKIAs2NMVmIKAJTMzMz0yZMnL6RUZuUkgAGAb968WY'+
			'eBdB6S+AWca+LRrGxp6uLi4o8URXGJoghZli0PU/1M4zcajUaPHTv2N9izoyHJztScAkxFCK2W3Hl5eR+zYOO7k9S7d+/ebXj27FkH7AkhrX+H5LaNky0eqzxcu3btz9LT06fEe5fKSArWMAzU1NTcAvEuPXt1DLwRQG3E3ABgiwgFgLugoGA5m5nZRjulsq7r6O7u7j516tQ3sDOzDluusrNgx+LZKQ/TZp3qcrl8ubm5C1mw7AiUxq9hGLhz584/Q6HQaxCwBmzBEn/lYUSNWmjFJANw7dixY6nb7U59G53jpeSFCxduYKBoUa9du/ZRIBB4WFtb+775TAEODdIAZzoe1kQQgHvOnDnL3paZ4+n84sWLZ5cvX34EErc8APX8+fOL5s2bVy6KohQIBGhrl3rZEXOC0jQ7q5mZmWlZWVl5bBvnv9G5pqamDjZYZd++'+
			'fdNXrlx5XJIkqbOz8/r69eu/g+1dx8yJh1kJa9OmTfMlYgN0M9uZNI8ko7y8vMH8rLJnz55Ze/fuPaGqqlfX9Y7t27f/kdmbo8dTooApnSUA6vTp099jlRX1Lntng+d5BIPB7kePHkUAKFu3bp1x8ODBMo/HkwogeODAgc+qq6sDGHhHy7Gk5UQMWx6eMGHCdAo4/jiiSUsQBKSlpXl27do1c9GiRaOLiooKFUWRY7FYd2lp6b6jR482wb6fRWfCjnk50Ua8BDIMGwNgYn19fbXb7Va8Xi9SUlLgdruhKIr1OaqwqPCg3g+FQh27d+/+/dmzZ++DTBy6QJrw9Hx+A3SyGvHW0Gz8+PFut9utsNmZSknrm01PsxR/+vRp45YtW764ffv2U5BpYTfsqsmZIThjjknLrq6usCRJuizLPJuoWKMZmk74q6ur/7J27dqLIG'+
			'OVLhDv0qrprTOlRC3RpGV1Pfr7+8Pt7e3/YosEOkJhl6ZpaGhouLd69epSE2wHyND7FYh3Bwy+4XCWTjSGRZDxyigA4xYsWDDT7/eXpaWljY6fH4VCoXB9ff3dqqqqrysrKxtAQFKgdFLI0hh4B9hkTQ+pwvICSAeQMWnSpOySkpJFOTk5k7xer+/BgwctDx8+bKmqqrrf0dFBk1GQWbRSovco/ydYIHmA4+9tjDJXCuzbcwaIogqBeJFdbIfjezXtkjku1UFo2Gu+D4PEogLCANrZjJj/F4J9zsYDHfI/sXFiIB5/xUEG8Sy97M22c6OwQSYENJkeprUrfY3A7k/T3wy9wk+/b9g8Gm9OncNsV0LDu9szSf3LMCd7WiMG1LtsUDH8Q7b/AMuHCqEoqivrAAAAAElFTkSuQmCC';
		me._button_help__img.ggOverSrc=hs;
		el.ggId="button_help";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 11px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 17px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_help.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_help.onclick=function (e) {
			me._screen_tint.ggVisible = !me._screen_tint.ggVisible;
			var flag=me._screen_tint.ggVisible;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility=((flag)&&(Number(me._screen_tint.style.opacity)>0||!me._screen_tint.style.opacity))?'inherit':'hidden';
			me._help.ggVisible = !me._help.ggVisible;
			var flag=me._help.ggVisible;
			me._help.style[domTransition]='none';
			me._help.style.visibility=((flag)&&(Number(me._help.style.opacity)>0||!me._help.style.opacity))?'inherit':'hidden';
		}
		me._button_help.onmouseover=function (e) {
			me._button_help__img.src=me._button_help__img.ggOverSrc;
		}
		me._button_help.onmouseout=function (e) {
			me._button_help__img.src=me._button_help__img.ggNormalSrc;
		}
		me._button_help.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_help);
		el=me._screen_tint=document.createElement('div');
		el.ggId="screen_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 5000px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 5000px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screen_tint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screen_tint);
		el=me._help=document.createElement('div');
		el.ggId="help";
		el.ggDx=0;
		el.ggDy=-31;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : #391d55;';
		hs+='border : 5px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 213px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 395px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._help.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._help.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._clickndrag=document.createElement('div');
		els=me._clickndrag__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjAwIDEzNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwMCAxMzU7Ii'+
			'B5PSIwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZGlzcGxheTpub25lO30KCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojODk4OTg5O30KCS5zdDJ7ZmlsbDojRTRCNEZGO30KCS5zdDN7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KIDxnIGNsYXNzPSJzdDAiIGlkPSJMYXllcl8xXzFfIj4KICA8cmVjdCBjbGFzcz0ic3QxIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEzNSIvPgogPC9nPgogPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSI3My42LDMyLjMgODIuOCw0My42IDczLjYsNTQuOCAiLz4KIDxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iMzUuOSw1NC44IDI2Ljcs'+
			'NDMuNiAzNS45LDMyLjMgIi8+CiA8cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjQzLjYsMjQuNyA1NC44LDE1LjUgNjYsMjQuNyAiLz4KIDxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iNjYsNjIuNCA1NC44LDcxLjYgNDMuNiw2Mi40ICIvPgogPHBhdGggY2xhc3M9InN0MyIgZD0iTTQ5LjgsMzUuM2wtMS4zLDEuM2w0LjMsNC4zbDMuMS0zLjFsMC42LDAuNmwtNi45LDYuOUw0OSw0NC43bDMuMS0zLjFsLTQuMy00LjNsLTEuMywxLjMmI3hhOyYjeDk7Yy0xLjQsMS40LTEuNSwzLjUtMC4yLDQuOGw4LjYsOC42YzEuMywxLjMsMy40LDEuMiw0LjgtMC4ybDMuMS0zLjFjMS40LTEuNCwxLj'+
			'UtMy41LDAuMi00LjhsLTguNi04LjYmI3hhOyYjeDk7QzUzLjQsMzMuOCw1MS4yLDMzLjksNDkuOCwzNS4zeiIvPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MyIgZD0iTTI4LjQsOTEuNWMtMC44LDAuOC0xLjksMS4yLTMuMywxLjJjLTIuOSwwLTUtMi4yLTUtNC43YzAtMi42LDItNC43LDQuOS00LjdjMiwwLDMuMiwxLDMuNCwxLjNsLTAuOSwxLjImI3hhOyYjeDk7JiN4OTtjLTAuNi0wLjYtMS41LTAuOS0yLjYtMC45Yy0xLjgsMC0zLDEuNC0zLDMuM2MwLDEuOCwxLjUsMy4yLDMuMiwzLjJjMS40LDAsMi4yLTAuNSwyLjUtMC44TDI4LjQsOTEuNXoiLz4KICA8cGF0aCBjbGFzcz0ic3QzIiBkPSJN'+
			'MjkuNSw5Mi41di05LjhoMS42djkuOEgyOS41eiIvPgogIDxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0zMi41LDg0LjNjMC0wLjYsMC40LTEsMS0xczEsMC40LDEsMXMtMC40LDEtMSwxUzMyLjUsODQuOSwzMi41LDg0LjN6IE0zMi43LDkyLjV2LTYuMWgxLjZ2Ni4xSDMyLjd6Ii8+CiAgPHBhdGggY2xhc3M9InN0MyIgZD0iTTQxLjIsOTEuOGMtMC4yLDAuMi0xLDAuOC0yLjQsMC44Yy0xLjgsMC0zLjItMS40LTMuMi0zLjJjMC0xLjksMS40LTMuMywzLjMtMy4zYzEsMCwxLjgsMC41LDIuMSwwLjdMNDAuNCw4OCYjeGE7JiN4OTsmI3g5O2MtMC4yLTAuMi0wLjctMC41LTEuNS0wLjVjLTAuOSwwLTEuOC'+
			'wwLjctMS44LDJjMCwxLjEsMC44LDIsMS44LDJjMC44LDAsMS41LTAuNSwxLjctMC42TDQxLjIsOTEuOHoiLz4KICA8cGF0aCBjbGFzcz0ic3QzIiBkPSJNNDYuMSw5Mi41bC0yLjItMi43djIuN2gtMS42di05LjhoMS42djYuMWwxLjktMi40aDEuOWwtMi40LDIuOGwyLjksMy4zSDQ2LjF6Ii8+CiAgPHBhdGggY2xhc3M9InN0MyIgZD0iTTU3LjgsOTIuNWwtMC44LTFjLTAuMywwLjQtMC45LDEuMS0yLDEuMWMtMS40LDAtMi41LTEuMS0yLjUtMi41YzAtMS4xLDAuNy0xLjksMS40LTIuMiYjeGE7JiN4OTsmI3g5O2MtMC4xLTAuMi0wLjMtMC41LTAuMy0wLjljMC0wLjgsMC42LTEuNSwxLjUtMS41'+
			'YzAuOCwwLDEuMywwLjUsMS41LDAuN2wtMC43LDAuN2MtMC4yLTAuMS0wLjUtMC40LTAuOC0wLjRjLTAuMiwwLTAuNSwwLjEtMC41LDAuNSYjeGE7JiN4OTsmI3g5O2MwLDAuMiwwLjIsMC41LDAuNCwwLjdoMi40bC0wLjIsMC45aC0xLjRsMy40LDMuOUM1OS4yLDkyLjUsNTcuOCw5Mi41LDU3LjgsOTIuNXogTTU0LjUsODguN2MtMC4zLDAuMS0xLDAuNS0xLDEuNCYjeGE7JiN4OTsmI3g5O3MwLjgsMS41LDEuNSwxLjVjMC44LDAsMS4yLTAuNiwxLjQtMC44TDU0LjUsODguN3oiLz4KICA8cGF0aCBjbGFzcz0ic3QzIiBkPSJNNjQuMSw5Mi41di05LjFoMi44YzIuNywwLDQuOSwxLjYsNC45LDQuNX'+
			'MtMi4xLDQuNS01LjIsNC41TDY0LjEsOTIuNUw2NC4xLDkyLjV6IE02Ni45LDkwLjkmI3hhOyYjeDk7JiN4OTtjMS43LDAsMy4xLTAuOCwzLjEtM2MwLTEuNy0xLjItMy0yLjktM2gtMS4zdjZINjYuOXoiLz4KICA8cGF0aCBjbGFzcz0ic3QzIiBkPSJNNzMuMSw5Mi41di02LjFoMS42djFjMC4xLTAuMywwLjYtMS4xLDEuMy0xLjFjMC42LDAsMC45LDAuMiwxLjEsMC4zbC0wLjUsMS41Yy0wLjItMC4xLTAuNS0wLjMtMC44LTAuMyYjeGE7JiN4OTsmI3g5O2MtMC43LDAtMS4xLDAuOC0xLjEsMS41djMuNGgtMS42VjkyLjV6Ii8+CiAgPHBhdGggY2xhc3M9InN0MyIgZD0iTTgyLjgsOTEuOWMtMC41'+
			'LDAuNC0xLjQsMC44LTIuOCwwLjhjLTEuOSwwLTIuNy0xLTIuNy0yLjJjMC0xLjQsMS4zLTEuOSwyLjUtMS45YzAuNCwwLDEuMiwwLjEsMS41LDAuNHYtMC42JiN4YTsmI3g5OyYjeDk7YzAtMC41LTAuNC0wLjktMS4yLTAuOWMtMC44LDAtMS41LDAuMy0xLjcsMC40TDc4LDg2LjdjMC42LTAuMywxLjMtMC41LDIuMy0wLjVjMiwwLDIuNiwxLDIuNiwyLjVMODIuOCw5MS45TDgyLjgsOTEuOXogTTgxLjMsOTAmI3hhOyYjeDk7JiN4OTtjLTAuMy0wLjItMC44LTAuNC0xLjMtMC40Yy0wLjYsMC0xLjEsMC4zLTEuMSwwLjhjMCwwLjYsMC41LDEsMS4yLDFjMC41LDAsMC45LTAuMSwxLjItMC4zQzgxLj'+
			'MsOTEuMSw4MS4zLDkwLDgxLjMsOTB6Ii8+CiAgPHBhdGggY2xhc3M9InN0MyIgZD0iTTg4LjQsOTJjLTAuNCwwLjQtMS4xLDAuNy0xLjUsMC43Yy0xLjUsMC0yLjktMS4yLTIuOS0zLjJjMC0yLjEsMS42LTMuMiwzLjQtMy4yYzEuMywwLDIsMC4zLDIuNiwwLjZ2NiYjeGE7JiN4OTsmI3g5O2MwLDIuMy0xLjYsMy0zLDNzLTIuNC0wLjUtMi44LTAuOGwwLjYtMS4yYzAuMywwLjIsMS4xLDAuNiwyLjEsMC42YzAuOCwwLDEuNC0wLjQsMS40LTEuNXYtMUg4OC40eiBNODguNCw4Ny42JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC4xLTAuNi0wLjItMS0wLjJjLTAuOSwwLTEuOCwwLjUtMS44LDEuOWMwLDAu'+
			'OCwwLjUsMiwxLjUsMmMwLjYsMCwxLjEtMC4zLDEuMy0wLjdWODcuNnoiLz4KICA8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMzIuOCwxMDYuOVYxMDJoLTEuMnYtMS4yaDEuMnYtMi4xaDEuNnYyLjFoMS41djEuMmgtMS41djQuOUgzMi44eiIvPgogIDxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0zOS43LDEwN2MtMS45LDAtMy4zLTEuNC0zLjMtMy4yYzAtMS44LDEuNS0zLjMsMy40LTMuM3MzLjMsMS41LDMuMywzLjNTNDEuNSwxMDcsMzkuNywxMDd6IE00MS4zLDEwMy44JiN4YTsmI3g5OyYjeDk7YzAtMS4yLTAuNy0yLTEuNi0yYy0xLDAtMS43LDAuOC0xLjcsMmMwLDEuMSwwLjgsMiwxLjcsMkM0MC43LD'+
			'EwNS44LDQxLjMsMTA1LDQxLjMsMTAzLjh6Ii8+CiAgPHBhdGggY2xhc3M9InN0MyIgZD0iTTU1LjksMTA2LjlsLTAuNS00LjZsLTMuMSw1bC0zLjEtNC45bC0wLjQsNC42SDQ3bDEuMi05LjNsNC4xLDYuNmw0LjEtNi42bDEuMiw5LjNMNTUuOSwxMDYuOUw1NS45LDEwNi45eiIvPgogIDxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik02MS45LDEwN2MtMS45LDAtMy4zLTEuNC0zLjMtMy4yYzAtMS44LDEuNS0zLjMsMy40LTMuM3MzLjMsMS41LDMuMywzLjNTNjMuOCwxMDcsNjEuOSwxMDd6IE02My42LDEwMy44JiN4YTsmI3g5OyYjeDk7YzAtMS4yLTAuNy0yLTEuNi0yYy0xLDAtMS43LDAuOC0xLjcsMmMw'+
			'LDEuMSwwLjgsMiwxLjcsMlM2My42LDEwNSw2My42LDEwMy44eiIvPgogIDxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik02OC40LDEwN2wtMi45LTYuMmgxLjdsMS4zLDNjMC4xLDAuMiwwLjMsMC42LDAuMywwLjhsMCwwYzAuMS0wLjIsMC4yLTAuNiwwLjMtMC44bDEuMy0zSDcybC0yLjksNi4ySDY4LjR6Ii8+CiAgPHBhdGggY2xhc3M9InN0MyIgZD0iTTc4LjMsMTA2LjNjLTAuMywwLjMtMS4zLDAuOC0yLjYsMC44Yy0yLDAtMy40LTEuMy0zLjQtMy4yYzAtMS45LDEuNC0zLjMsMy4zLTMuM2MyLDAsMywxLjUsMywzLjJ2MC42aC00LjcmI3hhOyYjeDk7JiN4OTtjMC4yLDEuMSwxLjIsMS40LDIuMiwxLj'+
			'RjMC45LDAsMS42LTAuNCwxLjgtMC42TDc4LjMsMTA2LjN6IE03NywxMDMuMmMwLTAuOC0wLjUtMS40LTEuNC0xLjRzLTEuNSwwLjUtMS43LDEuNEg3N3oiLz4KIDwvZz4KIDxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iMTQwLjksMjQuNyAxNTIuMSwxNS41IDE2My4zLDI0LjcgIi8+CiA8cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjE2My4zLDYyLjQgMTUyLjEsNzEuNiAxNDAuOSw2Mi40ICIvPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MyIgZD0iTTEzNy42LDkwLjJjMC41LDAuNCwxLjMsMSwyLjMsMWMwLjksMCwxLjQtMC40LDEuNC0xLjFjMC0xLjktNC0xLjYtNC00LjRjMC0xLjYs'+
			'MS41LTIuNSwzLTIuNSYjeGE7JiN4OTsmI3g5O2MxLjQsMCwyLjQsMC45LDIuNiwxLjFsLTAuOCwxLjNjLTAuNS0wLjUtMS4xLTAuOC0xLjctMC44Yy0wLjYsMC0xLjIsMC4zLTEuMiwwLjljMCwxLjYsNC4xLDEuMiw0LjEsNC40YzAsMS40LTEuMiwyLjctMy40LDIuNyYjeGE7JiN4OTsmI3g5O2MtMS4zLDAtMi42LTAuOC0zLjEtMS4zTDEzNy42LDkwLjJ6Ii8+CiAgPHBhdGggY2xhc3M9InN0MyIgZD0iTTE0OS43LDkxLjhjLTAuMiwwLjItMSwwLjgtMi40LDAuOGMtMS44LDAtMy4yLTEuNC0zLjItMy4yYzAtMS45LDEuNC0zLjMsMy4zLTMuM2MxLDAsMS44LDAuNSwyLjEsMC43TDE0OSw4OCYjeG'+
			'E7JiN4OTsmI3g5O2MtMC4yLTAuMi0wLjctMC41LTEuNS0wLjVjLTAuOSwwLTEuOCwwLjctMS44LDJjMCwxLjEsMC44LDIsMS44LDJjMC44LDAsMS41LTAuNSwxLjctMC42TDE0OS43LDkxLjh6Ii8+CiAgPHBhdGggY2xhc3M9InN0MyIgZD0iTTE1MC44LDkyLjV2LTYuMWgxLjZ2MWMwLjEtMC4zLDAuNi0xLjEsMS4zLTEuMWMwLjYsMCwwLjksMC4yLDEuMSwwLjNsLTAuNSwxLjVjLTAuMi0wLjEtMC41LTAuMy0wLjgtMC4zJiN4YTsmI3g5OyYjeDk7Yy0wLjcsMC0xLjEsMC44LTEuMSwxLjV2My40aC0xLjZWOTIuNXoiLz4KICA8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTU4LjQsOTIuNmMtMS45LDAt'+
			'My4zLTEuNC0zLjMtMy4yYzAtMS44LDEuNS0zLjMsMy40LTMuM3MzLjMsMS41LDMuMywzLjNDMTYxLjgsOTEuMiwxNjAuMyw5Mi42LDE1OC40LDkyLjZ6JiN4YTsmI3g5OyYjeDk7IE0xNjAuMSw4OS40YzAtMS4yLTAuNy0yLTEuNi0yYy0xLDAtMS43LDAuOC0xLjcsMmMwLDEuMSwwLjgsMiwxLjcsMlMxNjAuMSw5MC42LDE2MC4xLDg5LjR6Ii8+CiAgPHBhdGggY2xhc3M9InN0MyIgZD0iTTE2Myw5Mi41di05LjhoMS42djkuOEgxNjN6Ii8+CiAgPHBhdGggY2xhc3M9InN0MyIgZD0iTTE2Ni4xLDkyLjV2LTkuOGgxLjZ2OS44SDE2Ni4xeiIvPgogIDxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xMjkuNC'+
			'wxMDYuOVYxMDJoLTEuMnYtMS4yaDEuMnYtMi4xaDEuNnYyLjFoMS41djEuMkgxMzF2NC45SDEyOS40eiIvPgogIDxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xMzYuMywxMDdjLTEuOSwwLTMuMy0xLjQtMy4zLTMuMmMwLTEuOCwxLjUtMy4zLDMuNC0zLjNzMy4zLDEuNSwzLjMsMy4zUzEzOC4xLDEwNywxMzYuMywxMDd6IE0xMzcuOSwxMDMuOCYjeGE7JiN4OTsmI3g5O2MwLTEuMi0wLjctMi0xLjYtMmMtMSwwLTEuNywwLjgtMS43LDJjMCwxLjEsMC44LDIsMS43LDJDMTM3LjMsMTA1LjgsMTM3LjksMTA1LDEzNy45LDEwMy44eiIvPgogIDxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xNDMsMTA2LjlsNS03'+
			'LjVoLTR2LTEuNWg3bC01LDcuNWg1djEuNUgxNDN6Ii8+CiAgPHBhdGggY2xhc3M9InN0MyIgZD0iTTE1NSwxMDdjLTEuOSwwLTMuMy0xLjQtMy4zLTMuMmMwLTEuOCwxLjUtMy4zLDMuNC0zLjNzMy4zLDEuNSwzLjMsMy4zUzE1Ni45LDEwNywxNTUsMTA3eiBNMTU2LjcsMTAzLjgmI3hhOyYjeDk7JiN4OTtjMC0xLjItMC43LTItMS42LTJjLTEsMC0xLjcsMC44LTEuNywyYzAsMS4xLDAuOCwyLDEuNywyQzE1NiwxMDUuOCwxNTYuNywxMDUsMTU2LjcsMTAzLjh6Ii8+CiAgPHBhdGggY2xhc3M9InN0MyIgZD0iTTE2Mi41LDEwN2MtMS45LDAtMy4zLTEuNC0zLjMtMy4yYzAtMS44LDEuNS0zLjMsMy'+
			'40LTMuM3MzLjMsMS41LDMuMywzLjNTMTY0LjQsMTA3LDE2Mi41LDEwN3ogTTE2NC4yLDEwMy44JiN4YTsmI3g5OyYjeDk7YzAtMS4yLTAuNy0yLTEuNi0yYy0xLDAtMS43LDAuOC0xLjcsMmMwLDEuMSwwLjgsMiwxLjcsMkMxNjMuNSwxMDUuOCwxNjQuMiwxMDUsMTY0LjIsMTAzLjh6Ii8+CiAgPHBhdGggY2xhc3M9InN0MyIgZD0iTTE3NC42LDEwNi45VjEwM2MwLTAuNy0wLjMtMS4xLTAuOS0xLjFjLTAuNiwwLTEuMSwwLjQtMS4zLDAuNnY0LjNoLTEuNnYtMy45YzAtMC43LTAuMy0xLTAuOS0xJiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0xLjEsMC40LTEuMywwLjd2NC4zSDE2N3YtNi4xaDEuNnYw'+
			'LjZjMC4zLTAuMywxLTAuOCwxLjktMC44YzEsMCwxLjMsMC42LDEuNSwwLjljMC41LTAuNCwxLjMtMC45LDIuMi0wLjkmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMiwwLjcsMiwyLjJ2NC4xQzE3Ni4yLDEwNi45LDE3NC42LDEwNi45LDE3NC42LDEwNi45eiIvPgogPC9nPgogPHBhdGggY2xhc3M9InN0MyIgZD0iTTE1Ny4xLDMwLjdoLTkuOGMtNC4zLDAtNy44LDMuMi03LjgsNy4ydjE4LjdIMTY1VjM3LjhDMTY0LjksMzMuOSwxNjEuNCwzMC43LDE1Ny4xLDMwLjd6IE0xNjAuOCw0OS4zaC0xNy41JiN4YTsmI3g5O3YtMS4yaDguMnYtMy41Yy0wLjYsMC0xLjItMC41LTEuMi0xLjJ2LTdjMC0wLjYsMC'+
			'41LTEuMiwxLjItMS4ydi0zLjVoMS4ydjMuNWMwLjYsMCwxLjIsMC41LDEuMiwxLjJ2N2MwLDAuNi0wLjUsMS4yLTEuMiwxLjJ2My41JiN4YTsmI3g5O2g4LjJMMTYwLjgsNDkuM0wxNjAuOCw0OS4zeiIvPgo8L3N2Zz4K';
		me._clickndrag__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="clickndrag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 221px;';
		hs+='left : 34px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 329px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._clickndrag.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._clickndrag.ggUpdatePosition=function (useTransition) {
		}
		me._help.appendChild(me._clickndrag);
		el=me._bcloseclickndrag=document.createElement('div');
		els=me._bcloseclickndrag__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJleGl0IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB5PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRTRCNEZGO30KPC9zdHlsZT4KIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNzYsMjcgNjAuNSwyNyA0OC44LDQyLjQgMzcuMSwyNyAyMS42LDI3IDM5LDUwLjUgMjEuNiw3NCAzNy4xLDc0IDQ4LjgsNTguNiA2MC41LDc0IDc2LDc0IDU4LjYsNTAuNSAmI3hhOyYjeDk7Ii8+Cjwvc3ZnPgo=';
		me._bcloseclickndrag__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._bcloseclickndrag__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJleGl0IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB5PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KIDx0aXRsZT54LXdoaXRlPC90aXRsZT4KIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNzYsMjcgNjAuNSwyNyA0OC44LDQyLjQgMzcuMSwyNyAyMS42LDI3IDM5LDUwLjUgMjEuNiw3NCAzNy4xLDc0IDQ4LjgsNTguNiA2MC41LDc0IDc2LDc0IDU4LjYsNTAuNSAmI3hhOyYjeDk7Ii8+Cjwvc3ZnPgo=';
		me._bcloseclickndrag__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="b-close-clickndrag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 343px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bcloseclickndrag.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bcloseclickndrag.onclick=function (e) {
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._help.style[domTransition]='none';
			me._help.style.visibility='hidden';
			me._help.ggVisible=false;
		}
		me._bcloseclickndrag.onmouseover=function (e) {
			me._bcloseclickndrag__img.style.visibility='hidden';
			me._bcloseclickndrag__imgo.style.visibility='inherit';
		}
		me._bcloseclickndrag.onmouseout=function (e) {
			me._bcloseclickndrag__img.style.visibility='inherit';
			me._bcloseclickndrag__imgo.style.visibility='hidden';
		}
		me._bcloseclickndrag.ggUpdatePosition=function (useTransition) {
		}
		me._help.appendChild(me._bcloseclickndrag);
		me.divSkin.appendChild(me._help);
		me._markertemplate.ggMarkerNormal=null;
		me._markertemplate.ggMarkerInstances.push(null);
		me._markertemplate.ggMarkerActive=null;
		me._markertemplate.ggMarkerInstances.push(null);
		for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
			me._markertemplate.ggMarkerInstances.push(me._markertemplate.childNodes[i]);
		}
		me._markertemplate.callChildLogicBlocks_active = function(){
			if(me._markertemplate.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._markertemplate.ggMarkerInstances.length; i++) {
					if((me._markertemplate.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._markertemplate)>=0 && i==1) || (activeNodeMarker.indexOf(me._markertemplate)<0 && i==0) || (i>1))) {
					if (me._markertemplate.ggMarkerInstances[i].logicBlock_visible) {
						me._markertemplate.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._markertemplate.callChildLogicBlocks_active();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node6);
		me._marker_node6__normal = clonedNormalElement._marker_normal;
		me._marker_node6__normal.style.visibility='inherit';
		me._marker_node6__normal.style.left='0px';
		me._marker_node6__normal.style.top='0px';
		me._marker_node6.ggMarkerNormal=me._marker_node6__normal;
		me._marker_node6.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node6);
		me._marker_node6__active= clonedActiveElement._marker_active;
		me._marker_node6__active.style.visibility='hidden';
		me._marker_node6__active.style.left='0px';
		me._marker_node6__active.style.top='0px';
		me._marker_node6.ggMarkerActive=me._marker_node6__active;
		me._marker_node6.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node6.firstChild) {
			me._marker_node6.insertBefore(me._marker_node6__active,me._marker_node6.firstChild);
		} else {
			me._marker_node6.appendChild(me._marker_node6__active);
		}
		if (me._marker_node6.firstChild) {
			me._marker_node6.insertBefore(me._marker_node6__normal,me._marker_node6.firstChild);
		} else {
			me._marker_node6.appendChild(me._marker_node6__normal);
		}
		for (var i = 0; i < me._marker_node6.childNodes.length; i++) {
			me._marker_node6.ggMarkerInstances.push(me._marker_node6.childNodes[i]);
		}
		me._marker_node6.callChildLogicBlocks_active = function(){
			if(me._marker_node6.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node6.ggMarkerInstances.length; i++) {
					if((me._marker_node6.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node6)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node6)<0 && i==0) || (i>1))) {
					if (me._marker_node6.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node6.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node6.callChildLogicBlocks_active();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node7);
		me._marker_node7__normal = clonedNormalElement._marker_normal;
		me._marker_node7__normal.style.visibility='inherit';
		me._marker_node7__normal.style.left='0px';
		me._marker_node7__normal.style.top='0px';
		me._marker_node7.ggMarkerNormal=me._marker_node7__normal;
		me._marker_node7.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node7);
		me._marker_node7__active= clonedActiveElement._marker_active;
		me._marker_node7__active.style.visibility='hidden';
		me._marker_node7__active.style.left='0px';
		me._marker_node7__active.style.top='0px';
		me._marker_node7.ggMarkerActive=me._marker_node7__active;
		me._marker_node7.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node7.firstChild) {
			me._marker_node7.insertBefore(me._marker_node7__active,me._marker_node7.firstChild);
		} else {
			me._marker_node7.appendChild(me._marker_node7__active);
		}
		if (me._marker_node7.firstChild) {
			me._marker_node7.insertBefore(me._marker_node7__normal,me._marker_node7.firstChild);
		} else {
			me._marker_node7.appendChild(me._marker_node7__normal);
		}
		for (var i = 0; i < me._marker_node7.childNodes.length; i++) {
			me._marker_node7.ggMarkerInstances.push(me._marker_node7.childNodes[i]);
		}
		me._marker_node7.callChildLogicBlocks_active = function(){
			if(me._marker_node7.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node7.ggMarkerInstances.length; i++) {
					if((me._marker_node7.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node7)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node7)<0 && i==0) || (i>1))) {
					if (me._marker_node7.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node7.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node7.callChildLogicBlocks_active();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node8);
		me._marker_node8__normal = clonedNormalElement._marker_normal;
		me._marker_node8__normal.style.visibility='inherit';
		me._marker_node8__normal.style.left='0px';
		me._marker_node8__normal.style.top='0px';
		me._marker_node8.ggMarkerNormal=me._marker_node8__normal;
		me._marker_node8.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node8);
		me._marker_node8__active= clonedActiveElement._marker_active;
		me._marker_node8__active.style.visibility='hidden';
		me._marker_node8__active.style.left='0px';
		me._marker_node8__active.style.top='0px';
		me._marker_node8.ggMarkerActive=me._marker_node8__active;
		me._marker_node8.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node8.firstChild) {
			me._marker_node8.insertBefore(me._marker_node8__active,me._marker_node8.firstChild);
		} else {
			me._marker_node8.appendChild(me._marker_node8__active);
		}
		if (me._marker_node8.firstChild) {
			me._marker_node8.insertBefore(me._marker_node8__normal,me._marker_node8.firstChild);
		} else {
			me._marker_node8.appendChild(me._marker_node8__normal);
		}
		for (var i = 0; i < me._marker_node8.childNodes.length; i++) {
			me._marker_node8.ggMarkerInstances.push(me._marker_node8.childNodes[i]);
		}
		me._marker_node8.callChildLogicBlocks_active = function(){
			if(me._marker_node8.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node8.ggMarkerInstances.length; i++) {
					if((me._marker_node8.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node8)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node8)<0 && i==0) || (i>1))) {
					if (me._marker_node8.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node8.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node8.callChildLogicBlocks_active();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node9);
		me._marker_node9__normal = clonedNormalElement._marker_normal;
		me._marker_node9__normal.style.visibility='inherit';
		me._marker_node9__normal.style.left='0px';
		me._marker_node9__normal.style.top='0px';
		me._marker_node9.ggMarkerNormal=me._marker_node9__normal;
		me._marker_node9.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node9);
		me._marker_node9__active= clonedActiveElement._marker_active;
		me._marker_node9__active.style.visibility='hidden';
		me._marker_node9__active.style.left='0px';
		me._marker_node9__active.style.top='0px';
		me._marker_node9.ggMarkerActive=me._marker_node9__active;
		me._marker_node9.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node9.firstChild) {
			me._marker_node9.insertBefore(me._marker_node9__active,me._marker_node9.firstChild);
		} else {
			me._marker_node9.appendChild(me._marker_node9__active);
		}
		if (me._marker_node9.firstChild) {
			me._marker_node9.insertBefore(me._marker_node9__normal,me._marker_node9.firstChild);
		} else {
			me._marker_node9.appendChild(me._marker_node9__normal);
		}
		for (var i = 0; i < me._marker_node9.childNodes.length; i++) {
			me._marker_node9.ggMarkerInstances.push(me._marker_node9.childNodes[i]);
		}
		me._marker_node9.callChildLogicBlocks_active = function(){
			if(me._marker_node9.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node9.ggMarkerInstances.length; i++) {
					if((me._marker_node9.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node9)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node9)<0 && i==0) || (i>1))) {
					if (me._marker_node9.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node9.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node9.callChildLogicBlocks_active();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node10);
		me._marker_node10__normal = clonedNormalElement._marker_normal;
		me._marker_node10__normal.style.visibility='inherit';
		me._marker_node10__normal.style.left='0px';
		me._marker_node10__normal.style.top='0px';
		me._marker_node10.ggMarkerNormal=me._marker_node10__normal;
		me._marker_node10.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node10);
		me._marker_node10__active= clonedActiveElement._marker_active;
		me._marker_node10__active.style.visibility='hidden';
		me._marker_node10__active.style.left='0px';
		me._marker_node10__active.style.top='0px';
		me._marker_node10.ggMarkerActive=me._marker_node10__active;
		me._marker_node10.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node10.firstChild) {
			me._marker_node10.insertBefore(me._marker_node10__active,me._marker_node10.firstChild);
		} else {
			me._marker_node10.appendChild(me._marker_node10__active);
		}
		if (me._marker_node10.firstChild) {
			me._marker_node10.insertBefore(me._marker_node10__normal,me._marker_node10.firstChild);
		} else {
			me._marker_node10.appendChild(me._marker_node10__normal);
		}
		for (var i = 0; i < me._marker_node10.childNodes.length; i++) {
			me._marker_node10.ggMarkerInstances.push(me._marker_node10.childNodes[i]);
		}
		me._marker_node10.callChildLogicBlocks_active = function(){
			if(me._marker_node10.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node10.ggMarkerInstances.length; i++) {
					if((me._marker_node10.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node10)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node10)<0 && i==0) || (i>1))) {
					if (me._marker_node10.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node10.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node10.callChildLogicBlocks_active();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node1);
		me._marker_node1__normal = clonedNormalElement._marker_normal;
		me._marker_node1__normal.style.visibility='inherit';
		me._marker_node1__normal.style.left='0px';
		me._marker_node1__normal.style.top='0px';
		me._marker_node1.ggMarkerNormal=me._marker_node1__normal;
		me._marker_node1.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node1);
		me._marker_node1__active= clonedActiveElement._marker_active;
		me._marker_node1__active.style.visibility='hidden';
		me._marker_node1__active.style.left='0px';
		me._marker_node1__active.style.top='0px';
		me._marker_node1.ggMarkerActive=me._marker_node1__active;
		me._marker_node1.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node1.firstChild) {
			me._marker_node1.insertBefore(me._marker_node1__active,me._marker_node1.firstChild);
		} else {
			me._marker_node1.appendChild(me._marker_node1__active);
		}
		if (me._marker_node1.firstChild) {
			me._marker_node1.insertBefore(me._marker_node1__normal,me._marker_node1.firstChild);
		} else {
			me._marker_node1.appendChild(me._marker_node1__normal);
		}
		for (var i = 0; i < me._marker_node1.childNodes.length; i++) {
			me._marker_node1.ggMarkerInstances.push(me._marker_node1.childNodes[i]);
		}
		me._marker_node1.callChildLogicBlocks_active = function(){
			if(me._marker_node1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node1.ggMarkerInstances.length; i++) {
					if((me._marker_node1.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node1)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node1)<0 && i==0) || (i>1))) {
					if (me._marker_node1.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node1.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node1.callChildLogicBlocks_active();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node2);
		me._marker_node2__normal = clonedNormalElement._marker_normal;
		me._marker_node2__normal.style.visibility='inherit';
		me._marker_node2__normal.style.left='0px';
		me._marker_node2__normal.style.top='0px';
		me._marker_node2.ggMarkerNormal=me._marker_node2__normal;
		me._marker_node2.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node2);
		me._marker_node2__active= clonedActiveElement._marker_active;
		me._marker_node2__active.style.visibility='hidden';
		me._marker_node2__active.style.left='0px';
		me._marker_node2__active.style.top='0px';
		me._marker_node2.ggMarkerActive=me._marker_node2__active;
		me._marker_node2.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node2.firstChild) {
			me._marker_node2.insertBefore(me._marker_node2__active,me._marker_node2.firstChild);
		} else {
			me._marker_node2.appendChild(me._marker_node2__active);
		}
		if (me._marker_node2.firstChild) {
			me._marker_node2.insertBefore(me._marker_node2__normal,me._marker_node2.firstChild);
		} else {
			me._marker_node2.appendChild(me._marker_node2__normal);
		}
		for (var i = 0; i < me._marker_node2.childNodes.length; i++) {
			me._marker_node2.ggMarkerInstances.push(me._marker_node2.childNodes[i]);
		}
		me._marker_node2.callChildLogicBlocks_active = function(){
			if(me._marker_node2.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node2.ggMarkerInstances.length; i++) {
					if((me._marker_node2.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node2)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node2)<0 && i==0) || (i>1))) {
					if (me._marker_node2.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node2.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node2.callChildLogicBlocks_active();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node3);
		me._marker_node3__normal = clonedNormalElement._marker_normal;
		me._marker_node3__normal.style.visibility='inherit';
		me._marker_node3__normal.style.left='0px';
		me._marker_node3__normal.style.top='0px';
		me._marker_node3.ggMarkerNormal=me._marker_node3__normal;
		me._marker_node3.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node3);
		me._marker_node3__active= clonedActiveElement._marker_active;
		me._marker_node3__active.style.visibility='hidden';
		me._marker_node3__active.style.left='0px';
		me._marker_node3__active.style.top='0px';
		me._marker_node3.ggMarkerActive=me._marker_node3__active;
		me._marker_node3.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node3.firstChild) {
			me._marker_node3.insertBefore(me._marker_node3__active,me._marker_node3.firstChild);
		} else {
			me._marker_node3.appendChild(me._marker_node3__active);
		}
		if (me._marker_node3.firstChild) {
			me._marker_node3.insertBefore(me._marker_node3__normal,me._marker_node3.firstChild);
		} else {
			me._marker_node3.appendChild(me._marker_node3__normal);
		}
		for (var i = 0; i < me._marker_node3.childNodes.length; i++) {
			me._marker_node3.ggMarkerInstances.push(me._marker_node3.childNodes[i]);
		}
		me._marker_node3.callChildLogicBlocks_active = function(){
			if(me._marker_node3.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node3.ggMarkerInstances.length; i++) {
					if((me._marker_node3.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node3)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node3)<0 && i==0) || (i>1))) {
					if (me._marker_node3.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node3.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node3.callChildLogicBlocks_active();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node4);
		me._marker_node4__normal = clonedNormalElement._marker_normal;
		me._marker_node4__normal.style.visibility='inherit';
		me._marker_node4__normal.style.left='0px';
		me._marker_node4__normal.style.top='0px';
		me._marker_node4.ggMarkerNormal=me._marker_node4__normal;
		me._marker_node4.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node4);
		me._marker_node4__active= clonedActiveElement._marker_active;
		me._marker_node4__active.style.visibility='hidden';
		me._marker_node4__active.style.left='0px';
		me._marker_node4__active.style.top='0px';
		me._marker_node4.ggMarkerActive=me._marker_node4__active;
		me._marker_node4.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node4.firstChild) {
			me._marker_node4.insertBefore(me._marker_node4__active,me._marker_node4.firstChild);
		} else {
			me._marker_node4.appendChild(me._marker_node4__active);
		}
		if (me._marker_node4.firstChild) {
			me._marker_node4.insertBefore(me._marker_node4__normal,me._marker_node4.firstChild);
		} else {
			me._marker_node4.appendChild(me._marker_node4__normal);
		}
		for (var i = 0; i < me._marker_node4.childNodes.length; i++) {
			me._marker_node4.ggMarkerInstances.push(me._marker_node4.childNodes[i]);
		}
		me._marker_node4.callChildLogicBlocks_active = function(){
			if(me._marker_node4.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node4.ggMarkerInstances.length; i++) {
					if((me._marker_node4.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node4)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node4)<0 && i==0) || (i>1))) {
					if (me._marker_node4.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node4.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node4.callChildLogicBlocks_active();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node5);
		me._marker_node5__normal = clonedNormalElement._marker_normal;
		me._marker_node5__normal.style.visibility='inherit';
		me._marker_node5__normal.style.left='0px';
		me._marker_node5__normal.style.top='0px';
		me._marker_node5.ggMarkerNormal=me._marker_node5__normal;
		me._marker_node5.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node5);
		me._marker_node5__active= clonedActiveElement._marker_active;
		me._marker_node5__active.style.visibility='hidden';
		me._marker_node5__active.style.left='0px';
		me._marker_node5__active.style.top='0px';
		me._marker_node5.ggMarkerActive=me._marker_node5__active;
		me._marker_node5.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node5.firstChild) {
			me._marker_node5.insertBefore(me._marker_node5__active,me._marker_node5.firstChild);
		} else {
			me._marker_node5.appendChild(me._marker_node5__active);
		}
		if (me._marker_node5.firstChild) {
			me._marker_node5.insertBefore(me._marker_node5__normal,me._marker_node5.firstChild);
		} else {
			me._marker_node5.appendChild(me._marker_node5__normal);
		}
		for (var i = 0; i < me._marker_node5.childNodes.length; i++) {
			me._marker_node5.ggMarkerInstances.push(me._marker_node5.childNodes[i]);
		}
		me._marker_node5.callChildLogicBlocks_active = function(){
			if(me._marker_node5.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node5.ggMarkerInstances.length; i++) {
					if((me._marker_node5.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node5)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node5)<0 && i==0) || (i>1))) {
					if (me._marker_node5.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node5.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node5.callChildLogicBlocks_active();
		me._markerdining.ggMarkerNormal=null;
		me._markerdining.ggMarkerInstances.push(null);
		me._markerdining.ggMarkerActive=null;
		me._markerdining.ggMarkerInstances.push(null);
		for (var i = 0; i < me._markerdining.childNodes.length; i++) {
			me._markerdining.ggMarkerInstances.push(me._markerdining.childNodes[i]);
		}
		me._markerliving1.ggMarkerNormal=null;
		me._markerliving1.ggMarkerInstances.push(null);
		me._markerliving1.ggMarkerActive=null;
		me._markerliving1.ggMarkerInstances.push(null);
		for (var i = 0; i < me._markerliving1.childNodes.length; i++) {
			me._markerliving1.ggMarkerInstances.push(me._markerliving1.childNodes[i]);
		}
		me._markerkitchen.ggMarkerNormal=null;
		me._markerkitchen.ggMarkerInstances.push(null);
		me._markerkitchen.ggMarkerActive=null;
		me._markerkitchen.ggMarkerInstances.push(null);
		for (var i = 0; i < me._markerkitchen.childNodes.length; i++) {
			me._markerkitchen.ggMarkerInstances.push(me._markerkitchen.childNodes[i]);
		}
		me._markerbathroom.ggMarkerNormal=null;
		me._markerbathroom.ggMarkerInstances.push(null);
		me._markerbathroom.ggMarkerActive=null;
		me._markerbathroom.ggMarkerInstances.push(null);
		for (var i = 0; i < me._markerbathroom.childNodes.length; i++) {
			me._markerbathroom.ggMarkerInstances.push(me._markerbathroom.childNodes[i]);
		}
		me._markerbed1.ggMarkerNormal=null;
		me._markerbed1.ggMarkerInstances.push(null);
		me._markerbed1.ggMarkerActive=null;
		me._markerbed1.ggMarkerInstances.push(null);
		for (var i = 0; i < me._markerbed1.childNodes.length; i++) {
			me._markerbed1.ggMarkerInstances.push(me._markerbed1.childNodes[i]);
		}
		me._markerbed2.ggMarkerNormal=null;
		me._markerbed2.ggMarkerInstances.push(null);
		me._markerbed2.ggMarkerActive=null;
		me._markerbed2.ggMarkerInstances.push(null);
		for (var i = 0; i < me._markerbed2.childNodes.length; i++) {
			me._markerbed2.ggMarkerInstances.push(me._markerbed2.childNodes[i]);
		}
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;  // }
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseOver['smore']) {
			me._smore.style[domTransition]='none';
			me._smore.style.opacity='0.7';
			me._smore.style.visibility=me._smore.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['dmore']) {
			if (player.transitionsDisabled) {
				me._dmore.style[domTransition]='none';
			} else {
				me._dmore.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._dmore.style.opacity='1';
			me._dmore.style.visibility=me._dmore.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseDown['dup']) {
			player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['ddown']) {
			player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['dleft']) {
			player.changePanLog(1,true);
		}
		if (me.elementMouseDown['dright']) {
			player.changePanLog(-1,true);
		}
		if (me.elementMouseOver['bbasement']) {
			me._bbasement.style[domTransition]='none';
			me._bbasement.style.opacity='0.7';
			me._bbasement.style.visibility=me._bbasement.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['bfloor1']) {
			me._bfloor1.style[domTransition]='none';
			me._bfloor1.style.opacity='0.7';
			me._bfloor1.style.visibility=me._bfloor1.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['bfloor2']) {
			me._bfloor2.style[domTransition]='none';
			me._bfloor2.style.opacity='0.7';
			me._bfloor2.style.visibility=me._bfloor2.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['finishdining']) {
			me._finishdining.style[domTransition]='none';
			me._finishdining.style.opacity='0.7';
			me._finishdining.style.visibility=me._finishdining.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['roughdining']) {
			me._roughdining.style[domTransition]='none';
			me._roughdining.style.opacity='0.7';
			me._roughdining.style.visibility=me._roughdining.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['finish1']) {
			me._finish1.style[domTransition]='none';
			me._finish1.style.opacity='0.7';
			me._finish1.style.visibility=me._finish1.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['rough1']) {
			me._rough1.style[domTransition]='none';
			me._rough1.style.opacity='0.7';
			me._rough1.style.visibility=me._rough1.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['finishkitchen']) {
			me._finishkitchen.style[domTransition]='none';
			me._finishkitchen.style.opacity='0.7';
			me._finishkitchen.style.visibility=me._finishkitchen.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['roughkitchen']) {
			me._roughkitchen.style[domTransition]='none';
			me._roughkitchen.style.opacity='0.7';
			me._roughkitchen.style.visibility=me._roughkitchen.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['finishbathroom']) {
			me._finishbathroom.style[domTransition]='none';
			me._finishbathroom.style.opacity='0.7';
			me._finishbathroom.style.visibility=me._finishbathroom.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['roughbathroom']) {
			me._roughbathroom.style[domTransition]='none';
			me._roughbathroom.style.opacity='0.7';
			me._roughbathroom.style.visibility=me._roughbathroom.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['finishbed1']) {
			me._finishbed1.style[domTransition]='none';
			me._finishbed1.style.opacity='0.7';
			me._finishbed1.style.visibility=me._finishbed1.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['roughbed1']) {
			me._roughbed1.style[domTransition]='none';
			me._roughbed1.style.opacity='0.7';
			me._roughbed1.style.visibility=me._roughbed1.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['finishbed2']) {
			me._finishbed2.style[domTransition]='none';
			me._finishbed2.style.opacity='0.7';
			me._finishbed2.style.visibility=me._finishbed2.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['roughbed2']) {
			me._roughbed2.style[domTransition]='none';
			me._roughbed2.style.opacity='0.7';
			me._roughbed2.style.visibility=me._roughbed2.ggVisible?'inherit':'hidden';
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 656px;';
		hs+='position : absolute;';
		hs+='top : 125px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openUrl(me.hotspot.url,"_blank");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._tt_ht_node.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_image=document.createElement('div');
		els=me._ht_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzI1IDM5OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyNSAzOTk7Ii'+
			'B5PSIwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTtzdHJva2U6IzM5MUQ1NTtzdHJva2Utd2lkdGg6OTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzNBMTk1NTtzdHJva2Utd2lkdGg6MjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjk7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0M3tvcGFjaXR5OjAuNDtmaWxsOnVybCgjU1ZHSURfMl8pO30KCS5zdDR7ZmlsbDojRkZGRkZGO3N0cm9rZTojMzgxRDU1O3N0cm9rZS13aWR0'+
			'aDo2O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDV7ZmlsbDojMzgxRDU1O30KCS5zdDZ7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDo1O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDxyYWRpYWxHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9IlNWR0lEXzFfIiBjeD0iMTUzLjQ0OTEiIGN5PSIxOTAuOTkiIHI9IjEzNi4yMDM3IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuOTgwMSAwIDAgMC45ODE0IDEyLjA5NyAxMi4wNTc4KSI+CiAgPHN0b3Agb2Zmc2V0PSIwLjM3MyIgc3R5bGU9InN0b3AtY29sb3I6IzhGNTlBMy'+
			'IvPgogIDxzdG9wIG9mZnNldD0iMC40OTMxIiBzdHlsZT0ic3RvcC1jb2xvcjojOEE1NEEwIi8+CiAgPHN0b3Agb2Zmc2V0PSIwLjYyOTYiIHN0eWxlPSJzdG9wLWNvbG9yOiM3RDQ3OTciLz4KICA8c3RvcCBvZmZzZXQ9IjAuNzczNSIgc3R5bGU9InN0b3AtY29sb3I6IzY3MzA4OSIvPgogIDxzdG9wIG9mZnNldD0iMC43ODkzIiBzdHlsZT0ic3RvcC1jb2xvcjojNjQyRDg3Ii8+CiAgPHN0b3Agb2Zmc2V0PSIwLjg0MzciIHN0eWxlPSJzdG9wLWNvbG9yOiM2QTM0OEIiLz4KICA8c3RvcCBvZmZzZXQ9IjAuOTIwNSIgc3R5bGU9InN0b3AtY29sb3I6IzdDNDY5NyIvPgogIDxzdG9wIG9mZnNldD0i'+
			'MC45ODIzIiBzdHlsZT0ic3RvcC1jb2xvcjojOEY1QUE0Ii8+CiA8L3JhZGlhbEdyYWRpZW50PgogPGVsbGlwc2UgY2xhc3M9InN0MCIgcng9IjEzMy41IiByeT0iMTMzLjciIGN4PSIxNjIuNSIgY3k9IjE5OS41Ii8+CiA8ZWxsaXBzZSBjbGFzcz0ic3QxIiByeD0iMTMzLjUiIHJ5PSIxMzMuNyIgY3g9IjE2Mi41IiBjeT0iMTk5LjUiLz4KIDxlbGxpcHNlIGNsYXNzPSJzdDIiIHJ4PSIxMzMuNSIgcnk9IjEzMy43IiBjeD0iMTYyLjUiIGN5PSIxOTkuNSIvPgogPHJhZGlhbEdyYWRpZW50IGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iU1ZHSURfMl8iIGN4PSIxOTIuNzk0NCIgY3'+
			'k9Ii0xNzUuNDM3OCIgcj0iNTMuMjE5IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuODcwMiAtMC43NDIxIDEuOTk5NCAyLjM1NTIgMzkyLjc1MTQgNjg5Ljk3NjIpIj4KICA8c3RvcCBvZmZzZXQ9IjUuNjMwMTgyZS0wMiIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRiIvPgogIDxzdG9wIG9mZnNldD0iMC4xNjQ0IiBzdHlsZT0ic3RvcC1jb2xvcjojRjlGOUZBO3N0b3Atb3BhY2l0eTowLjY1MTgiLz4KICA8c3RvcCBvZmZzZXQ9IjAuMjczNyIgc3R5bGU9InN0b3AtY29sb3I6I0VERUVFRjtzdG9wLW9wYWNpdHk6MC4zIi8+CiAgPHN0b3Agb2Zmc2V0PSIwLjI4MzUiIHN0eWxlPSJzdG9w'+
			'LWNvbG9yOiNFMUUyRTM7c3RvcC1vcGFjaXR5OjAuMjcyNSIvPgogIDxzdG9wIG9mZnNldD0iMC4zMDEiIHN0eWxlPSJzdG9wLWNvbG9yOiNDM0M0QzQ7c3RvcC1vcGFjaXR5OjAuMjIzMiIvPgogIDxzdG9wIG9mZnNldD0iMC4zMjQxIiBzdHlsZT0ic3RvcC1jb2xvcjojOTE5MTkyO3N0b3Atb3BhY2l0eTowLjE1NzgiLz4KICA8c3RvcCBvZmZzZXQ9IjAuMzUyMSIgc3R5bGU9InN0b3AtY29sb3I6IzRDNEM0RDtzdG9wLW9wYWNpdHk6Ny44OTEwNDZlLTAyIi8+CiAgPHN0b3Agb2Zmc2V0PSIwLjM4MDEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDAwMDA7c3RvcC1vcGFjaXR5OjAiLz4KIDwvcmFkaW'+
			'FsR3JhZGllbnQ+CiA8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTUyLjksNzAuMWMwLDAsMjguMS0xMy40LDc5LDMzLjJjNTkuMSw1NC4xLTQuMyw5NC41LTI5LjcsMTA3LjdDMTc2LjksMjI0LjEsMTUyLjksNzAuMSwxNTIuOSw3MC4xeiIvPgogPGc+CiAgPGc+CiAgIDxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xNzQuNSwxNTYuOXY4My45YzAsMTAtMC43LDE3LjUtMi4xLDIyLjRjLTEuNCw1LjYtMy44LDEwLjMtNy4xLDE0LjJjLTYuNSw3LjctMTUuMiwxMS41LTI2LDExLjUmI3hhOyYjeDk7JiN4OTsmI3g5O2MtOC4yLDAtMTUuOC0yLjEtMjIuOS02LjRsOS42LTE2LjdjNC44LDMuMiw5LjIsNC44LDEz'+
			'LjMsNC44YzUuOCwwLDkuOC0yLjIsMTIuMS02LjZjMi4zLTQuNCwzLjUtMTIuMiwzLjUtMjMuMnYtODMuOUgxNzQuNXoiLz4KICA8L2c+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0NCIgZD0iTTExNi43LDE1Ni45aDE5djgxLjhoLTE5di04LjZjLTcuOCw3LjMtMTYuMSwxMC45LTI1LjEsMTAuOWMtMTEuMywwLTIwLjYtNC4xLTI4LTEyLjMmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNy4zLTguMy0xMS0xOC44LTExLTMxLjJjMC0xMi4zLDMuNy0yMi41LDExLTMwLjdjNy4zLTguMiwxNi41LTEyLjMsMjcuNS0xMi4zYzkuNSwwLDE4LDMuOSwyNS42LDExLjhWMTU2Ljl6IE03MS45LD'+
			'E5Ny41JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCw3LjgsMi4xLDE0LjIsNi4zLDE5LjJjNC4zLDUsOS43LDcuNSwxNi4zLDcuNWM3LDAsMTIuNi0yLjQsMTYuOS03LjJjNC4zLTUsNi41LTExLjMsNi41LTE5YzAtNy43LTIuMi0xNC02LjUtMTkmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNC4zLTQuOS05LjktNy4zLTE2LjgtNy4zYy02LjUsMC0xMS45LDIuNS0xNi4zLDcuNEM3NC4xLDE4NC4xLDcxLjksMTkwLjIsNzEuOSwxOTcuNXoiLz4KICA8L2c+CiA8L2c+CiA8Zz4KICA8cG9seWdvbiBjbGFzcz0ic3Q1IiBwb2ludHM9IjE5NC4xLDExOC4xIDE0NS41LDE0MC4zIDE0NS41LDk1LjkgJiN4OTsiLz4K'+
			'ICA8cG9seWdvbiBjbGFzcz0ic3Q2IiBwb2ludHM9IjE5NC4xLDExOC4xIDE0NS41LDE0MC4zIDE0NS41LDk1LjkgJiN4OTsiLz4KIDwvZz4KIDxnPgogIDxnPgogICA8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMjMzLjQsMTU0LjdjMTcuMSwwLDI3LjksOC4zLDM0LjIsMTguMWwtMTQuNiw3LjljLTMuOC01LjgtMTAuOS0xMC40LTE5LjYtMTAuNGMtMTUsMC0yNS45LDExLjUtMjUuOSwyNy4yJiN4YTsmI3g5OyYjeDk7JiN4OTtzMTAuOSwyNy4yLDI1LjksMjcuMmM3LjYsMCwxNC4yLTMuMSwxNy44LTYuM3YtMTBoLTIydi0xNS4xaDM5LjR2MzEuNmMtOC40LDkuNC0yMC4yLDE1LjYtMzUuMiwxNS42Yy'+
			'0yNC4yLDAtNDQtMTYuOS00NC00Mi45JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTg5LjUsMTcxLjMsMjA5LjMsMTU0LjcsMjMzLjQsMTU0Ljd6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : -23px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -38px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image.onmouseover=function (e) {
			me.elementMouseOver['ht_node_image']=true;
		}
		me._ht_node_image.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._ht_node_image.style[domTransition]='none';
			} else {
				me._ht_node_image.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._ht_node_image.style.opacity='0.5';
			me._ht_node_image.style.visibility=me._ht_node_image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['ht_node_image']=false;
		}
		me._ht_node_image.ontouchend=function (e) {
			me.elementMouseOver['ht_node_image']=false;
		}
		me._ht_node_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_image);
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggDx=-3;
		el.ggDy=28;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #391d55;';
		hs+='border: 2px solid #b5b5b5;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style[domTransition]='';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
			}
		}
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 4;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((104-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node.appendChild(me._tt_ht_node);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['ht_node_image']) {
					if (player.transitionsDisabled) {
						me._ht_node_image.style[domTransition]='none';
					} else {
						me._ht_node_image.style[domTransition]='all 500ms ease-out 0ms';
					}
					me._ht_node_image.style.opacity='1';
					me._ht_node_image.style.visibility=me._ht_node_image.ggVisible?'inherit':'hidden';
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinElement_marker_active_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._marker_active=document.createElement('div');
		els=me._marker_active__img=document.createElement('img');
		els.className='ggskin ggskin_marker_active';
		hs=basePath + 'images/marker_active.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_active.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_active.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement_marker_normal_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._marker_normal=document.createElement('div');
		els=me._marker_normal__img=document.createElement('img');
		els.className='ggskin ggskin_marker_normal';
		hs=basePath + 'images/marker_normal.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker_normal";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_normal.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_normal.ggUpdatePosition=function (useTransition) {
		}
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	player.addListener('changenode', function(args) { me._markertemplate.callChildLogicBlocks_active();me._marker_node6.callChildLogicBlocks_active();me._marker_node7.callChildLogicBlocks_active();me._marker_node8.callChildLogicBlocks_active();me._marker_node9.callChildLogicBlocks_active();me._marker_node10.callChildLogicBlocks_active();me._marker_node1.callChildLogicBlocks_active();me._marker_node2.callChildLogicBlocks_active();me._marker_node3.callChildLogicBlocks_active();me._marker_node4.callChildLogicBlocks_active();me._marker_node5.callChildLogicBlocks_active(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};