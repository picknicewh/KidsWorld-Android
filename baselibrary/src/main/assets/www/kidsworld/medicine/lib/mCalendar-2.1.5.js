!function(t){var e=document,a="ontouchstart"in t?"touchstart":"click",r="ontouchstart"in t?"touchstart":"mousedown",n="ontouchmove"in t?"touchmove":"mousemove",s="ontouchend"in t?"touchend":"mouseup",d=t.requestAnimationFrame||t.webkitRequestAnimationFrame,o=t.cancelAnimationFrame||t.webkitCancelAnimationFrame,l="transform"in e.createElement("div").style?"transform":"webkitTransform";t.mCalendar=function(t){var e=this;if(t){if(t.setDate){e.getDate=t.setDate;var a=t.setDate.substr(0,4),n=parseInt(t.setDate.substr(5,2))-1,s=t.setDate.substr(8,2);n=n<10?"0"+n:n,e.Date=new Date(a,n,s),e.today={day:e.Date.getDay(),date:e.Date.getDate(),month:e.Date.getMonth(),year:e.Date.getFullYear()},e.todayformat=new Date(e.today.year,e.today.month,e.today.date)}t.toBind&&t.toBind.addEventListener(r,function(){e.open(),arguments[0].preventDefault()}),t.multiple&&(e.multiple=!0),t.callback&&"function"==typeof t.callback&&(e.hasCallback=!0,e.callback=t.callback)}e.handlerStart=Date.now(),e.currentIndex=e.preIndex=1,e.startX=0,e.endX=0,e.layout(),e.countbox=e.byClass(e.calendar,"countbox"),e.tables=e.byTag(e.dategroup,"table"),e.yearArrows_l=e.byClass(e.countbox[0],"l-arrows")[0],e.yearArrows_r=e.byClass(e.countbox[0],"r-arrows")[0],e.dateArrows_l=e.byClass(e.countbox[1],"l-arrows")[0],e.dateArrows_r=e.byClass(e.countbox[1],"r-arrows")[0],e.yearNum=e.byClass(e.calendar,"count-number")[0],e.monthNum=e.byClass(e.calendar,"count-number")[1],e.cancelBtn=e.byClass(e.calendar,"cancel-btn")[0],e.finishBtn=e.byClass(e.calendar,"finish-btn")[0],e.currentDate={date:e.today.date,day:e.today.day,month:e.today.month,year:e.today.year},e.outputDate="",e.init()},t.mCalendar.prototype.byClass=function(t,e){return t.getElementsByClassName(e)},t.mCalendar.prototype.byTag=function(t,e){return t.getElementsByTagName(e)},t.mCalendar.prototype.htmlStrJson={header:'<div class="countbox"><span class="l-arrows">&lt;</span><span class="count-number">2000年</span><span class="r-arrows">&gt;</span></div><div class="countbox"><span class="l-arrows">&lt;</span><span class="count-number">00月</span><span class="r-arrows">&gt;</span></div><div class="btn-item"><span class="btn cancel-btn">取消</span><span class="btn finish-btn">完成</span></div>',dayHeader:"<thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead>"},t.mCalendar.prototype.createElement=function(t,e){var a=document.createElement(t);return e.className&&this.addClass(a,e.className),e.appendToEl.appendChild(a),a},t.mCalendar.prototype.hasClass=function(t,e){var e=e||"";return 0!=e.replace(/\s/g,"").length&&new RegExp(" "+e+" ").test(" "+t.className+" ")},t.mCalendar.prototype.addClass=function(e,a){t.mCalendar.prototype.hasClass(e,a)||(e.className+=" "+a)},t.mCalendar.prototype.removeClass=function(e,a){if(t.mCalendar.prototype.hasClass(e,a)){for(var r=" "+e.className.replace(/[\t\r\n]/g,"")+" ";r.indexOf(" "+a+" ")>=0;)r=r.replace(" "+a+" "," ");e.className=r.replace(/^\s+|\s+$/g,"")}},t.mCalendar.prototype.close=function(t){var t=t||this;t.addClass(t.calendar,"calendar-hide")},t.mCalendar.prototype.open=function(t){var t=t||this;t.removeClass(t.calendar,"calendar-hide")},t.mCalendar.prototype.dates=[],t.mCalendar.prototype.months=[],t.mCalendar.prototype.Date=new Date,t.mCalendar.prototype.today={day:t.mCalendar.prototype.Date.getDay(),date:t.mCalendar.prototype.Date.getDate(),month:t.mCalendar.prototype.Date.getMonth(),year:t.mCalendar.prototype.Date.getFullYear()},t.mCalendar.prototype.tablelength=3,t.mCalendar.prototype.rows=6,t.mCalendar.prototype.cols=7,t.mCalendar.prototype.tdslengh=42,t.mCalendar.prototype.layout=function(){var t=this.createElement("div",{appendToEl:document.body,className:"calendar"}),e=(this.createElement("div",{appendToEl:t,className:"mask"}),this.createElement("div",{appendToEl:t,className:"container"})),a=this.createElement("div",{appendToEl:e,className:"calendar-header"}),r=this.createElement("div",{appendToEl:e,className:"calendar-body"}),n=this.createElement("div",{appendToEl:r,className:"week-header"}),s=this.createElement("table",{appendToEl:n}),d=this.createElement("div",{appendToEl:r,className:"date-group"});a.innerHTML=this.htmlStrJson.header,s.innerHTML=this.htmlStrJson.dayHeader,this.calendar=t,this.dategroup=d,this.addClass(this.calendar,"calendar-hide");for(var o=this.width=this.calendar.offsetWidth,l=0;l<this.tablelength;l++){for(var i=this.createElement("table",{appendToEl:d}),c=this.createElement("tbody",{appendToEl:i}),h=0;h<this.rows;h++)for(var u=this.createElement("tr",{appendToEl:c}),m=0;m<this.cols;m++){this.createElement("td",{appendToEl:u})}this.translateX(i,-o+o*l)}},t.mCalendar.prototype.switchDate=function(t,e,a){var a=a||250,r=this;if(!(Date.now()-r.handlerStart<a)){if(r.endX+=r.width*t,r.currentDate[e]+=t*-1,r.currentDate.month<0?(r.currentDate.year-=1,r.currentDate.month=11):r.currentDate.month>11&&(r.currentDate.year+=1,r.currentDate.month=0),r.currentIndex+=t*-1,r.currentIndex>r.tablelength-1?r.currentIndex=0:r.currentIndex<0&&(r.currentIndex=r.tablelength-1),r.tables[r.preIndex].removeAttribute("aria-show"),r.tables[r.currentIndex].setAttribute("aria-show","true"),t===-1)var n=r.currentIndex+1>r.tablelength-1?0:r.currentIndex+1;else if(1===t)var n=r.currentIndex-1<0?r.tablelength-1:r.currentIndex-1;r.translateX(r.tables[r.preIndex],-r.endX+r.width*t),r.translateX(r.tables[n],-r.endX+r.width*t*-1),r.translateX(r.tables[r.currentIndex],-r.endX),"year"===e?(r.drawDate(r.tables[r.preIndex],r.currentDate.year-t*-1,r.currentDate.month),r.drawDate(r.tables[n],r.currentDate.year+t*-1,r.currentDate.month)):"month"===e&&(r.drawDate(r.tables[r.preIndex],r.currentDate.year,r.currentDate.month-t*-1),r.drawDate(r.tables[n],r.currentDate.year,r.currentDate.month+t*-1)),r.drawDate(r.tables[r.currentIndex],r.currentDate.year,r.currentDate.month),r.scrollX({endX:r.endX,duration:a,callback:function(){r.startX=r.endX}}),r.update(),r.preIndex=r.currentIndex,r.handlerStart=Date.now()}},t.mCalendar.prototype.select=function(){var t=this;t.bindselect=function(){function e(t){var e=0;for(var a in t)t[a]&&e++;return e}var a=arguments[0],r=a.target.parentElement;if(r&&"td"==r.nodeName.toLowerCase()){var n=r.getAttribute("aria-date");if(!t.hasClass(r,"ui-datepicker-unselectable")){var s=e(t.selectedDates);if(t.multiple)if(t.hasClass(r,"active")&&t.selectedDates[n])t.removeClass(r,"active"),t.selectedDates[n]=null;else{if(s>=5)return;t.addClass(r,"active"),t.selectedDates[n]=n}else{for(var d=0;d<this.tdsAllLen;d++)t.removeClass(t.alltds[d],"active");t.addClass(r,"active"),t.selectedDates.single=n}}}}},t.mCalendar.prototype.translateX=function(t,e){t.style[l]="translate3d("+e+"px,0,0)"},t.mCalendar.prototype.scrollX=function(t){function e(){return i/l>=1?(d?o(a.timer):clearTimeout(a.timer),a.timer=null,void(t.callback&&t.callback())):(i=Math.min(l,Date.now()-c),r=n+(s-n)/l*i,a.startX=r,a.translateX(a.dategroup,r),void(a.timer=d?d(e):setTimeout(e,0)))}var a=this;d?o(a.timer):clearTimeout(a.timer);var r=0,n=a.startX,s=t.endX,l=t.duration||250,i=0,c=Date.now();e()},t.mCalendar.prototype.swipeX=function(){function t(){var t=arguments[0].touches?arguments[0].touches[0]:arguments[0];touchmoveX=t.pageX,gapX=touchmoveX-a,d=touchmoveX>moveendX?1:-1,moveendX&&(e.startX+=touchmoveX-moveendX),e.translateX(e.dategroup,e.startX),moveendX=t.pageX,arguments[0].preventDefault()}var e=this,a=touchmoveX=moveendX=gapX=0,d=0;e.dategroup.addEventListener(r,function(){var r=arguments[0].touches?arguments[0].touches[0]:arguments[0];a=r.pageX,e.calendar.addEventListener(n,t,!1),arguments[0].preventDefault()},!1),e.calendar.addEventListener(s,function(){Math.abs(gapX)>10?e.switchDate(d,"month"):(0==Math.abs(gapX)&&e.bindselect(arguments[0]),Math.abs(gapX)>0&&!e.hasClass(arguments[0].target,"l-arrows")&&!e.hasClass(arguments[0].target,"r-arrows")&&e.scrollX({endX:e.endX,duration:200,callback:function(){e.startX=e.endX}})),e.calendar.removeEventListener(n,t),a=touchmoveX=moveendX=gapX=0})},t.mCalendar.prototype.drawDate=function(t,e,a){var r=this.byTag(t,"tbody")[0],e=e,a=a;a<0?(e-=1,a=11):a>11&&(e+=1,a=0);var n=1,s=new Date(e,a+1,0).getDate(),d=new Date(e,a,1).getDay(),o=new Date(e,a,0).getDate()-d+1,l=1,i="",c=[],h=new Date,u={date:h.getDate(),month:h.getMonth(),year:h.getFullYear()};if(e<u.year||e==u.year&&a<u.month)for(var m=0;m<this.tdslengh;m++)m<d?(c.push("<td class='mendDay ui-datepicker-unselectable' aria-date="+(a-1<0?e-1:e)+"-"+this.months[a-1<0?11:a-1]+"-"+this.dates[o-1]+"><div>"+o+"</div></td>"),o++):n>s?(c.push("<td class='mendDay ui-datepicker-unselectable' aria-date="+(a+1>11?e+1:e)+"-"+this.months[a+1>11?0:a+1]+"-"+this.dates[l-1]+"><div>"+l+"</div></td>"),l++):(c.push("<td class='ui-datepicker-unselectable' aria-date="+e+"-"+this.months[a]+"-"+this.dates[n-1]+"><div>"+n+"</div></td>"),n++);else if(e==u.year&&a==u.month)for(var m=0;m<this.tdslengh;m++)m<d?(c.push("<td class='mendDay ui-datepicker-unselectable' aria-date="+(a-1<0?e-1:e)+"-"+this.months[a-1<0?11:a-1]+"-"+this.dates[o-1]+"><div>"+o+"</div></td>"),o++):m<u.date+d-1?(c.push("<td class='ui-datepicker-unselectable' aria-date="+e+"-"+this.months[a]+"-"+this.dates[n-1]+"><div>"+n+"</div></td>"),n++):n>s?(c.push("<td class='mendDay' aria-date="+(a+1>11?e+1:e)+"-"+this.months[a+1>11?0:a+1]+"-"+this.dates[l-1]+"><div>"+l+"</div></td>"),l++):(c.push("<td aria-date="+e+"-"+this.months[a]+"-"+this.dates[n-1]+"><div>"+n+"</div></td>"),n++);else for(var m=0;m<this.tdslengh;m++)m<d?(c.push("<td class='mendDay' aria-date="+(a-1<0?e-1:e)+"-"+this.months[a-1<0?11:a-1]+"-"+this.dates[o-1]+"><div>"+o+"</div></td>"),o++):n>s?(c.push("<td class='mendDay' aria-date="+(a+1>11?e+1:e)+"-"+this.months[a+1>11?0:a+1]+"-"+this.dates[l-1]+"><div>"+l+"</div></td>"),l++):(c.push("<td aria-date="+e+"-"+this.months[a]+"-"+this.dates[n-1]+"><div>"+n+"</div></td>"),n++);for(var p=0;p<this.rows;p++){for(var y="",v=p*this.cols;v<p*this.cols+this.cols;v++)y+=c[v];i+="<tr>"+y+"</tr>"}r.innerHTML=i},t.mCalendar.prototype.update=function(){this.yearNum.innerHTML=this.currentDate.year+"年",this.monthNum.innerHTML=1==String(this.currentDate.month+1).length?"0"+(this.currentDate.month+1)+"月":this.currentDate.month+1+"月";for(var t=0;t<this.tdsAllLen;t++)for(var e in this.selectedDates)this.alltds[t].getAttribute("aria-date")==this.selectedDates[e]&&this.addClass(this.alltds[t],"active")},t.mCalendar.prototype.init=function(){for(var e=this,r=1;r<=31;r++)r<10&&(r="0"+r),r=String(r),t.mCalendar.prototype.dates.push(r);for(var r=1;r<=12;r++)r<10&&(r="0"+r),r=String(r),t.mCalendar.prototype.months.push(r);e.alltds=e.byTag(e.calendar,"td"),e.tdsAllLen=e.alltds.length,e.ariaToday=e.today.year+"-"+e.months[e.today.month]+"-"+e.dates[this.today.date-1],e.selectedDates={},e.multiple?e.selectedDates[e.ariaToday]=e.ariaToday:e.selectedDates.single=e.ariaToday,e.translateX(e.dategroup,e.startX),e.swipeX(),e.dategroup.style.height=e.byTag(e.dategroup,"tbody")[0].offsetHeight+"px";for(var r=0;r<e.tablelength;r++)e.drawDate(e.tables[r],e.currentDate.year,e.currentDate.month-1+r);e.tables[1].setAttribute("aria-show","true"),e.update(),e.dateArrows_l.addEventListener(a,function(){e.switchDate(1,"month")},!1),e.dateArrows_r.addEventListener(a,function(){e.switchDate(-1,"month")},!1),e.yearArrows_l.addEventListener(a,function(){e.switchDate(1,"year")},!1),e.yearArrows_r.addEventListener(a,function(){e.switchDate(-1,"year")},!1),e.select(),e.cancelBtn.addEventListener("click",function(){e.close(e)},!1),e.finishBtn.addEventListener("click",function(){e.close(e);var t=[];for(var a in e.selectedDates)e.selectedDates[a]&&t.push(e.selectedDates[a]);e.outputDate=1==t.length?t:t.sort().join(";   "),e.hasCallback&&e.callback()},!1)}}(window);