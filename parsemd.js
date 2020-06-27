"use strict";class Options extends Map{constructor(){super();const e=window.location.search.substring(1).split("&");Object.assign(this,Object.assign({},...Object.keys(e).map(function(a,n){const t=e[n].toLowerCase().split("=");return{["_"+t[0]]:decodeURI(t[1])}}).filter(e=>e)))}battle(){return this.hasOwnProperty("_battle")?this._battle.replace(/[^A-za-z0-9]/g,"").toLowerCase():""}campaign(){return this.hasOwnProperty("_campaign")?this._campaign.toLowerCase():""}campaignDir(){const e=this.campaign();return e.length?e+"/":""}campaignXml(){const e=this.campaign();return e.length?"_"+e+".xml":""}chapter(){return this.hasOwnProperty("_chapter")?this._chapter.replace(/[^A-za-z0-9]/g,"").toLowerCase().split("|"):[]}location(){return this.hasOwnProperty("_location")?this._location.replace(/[^A-za-z0-9]/g,"").toLowerCase():""}map(){return this.hasOwnProperty("_map")?this._map.toLowerCase():""}mapXml(){const e=this.map();return e.length?e+".xml":""}region(){return this.hasOwnProperty("_region")?this._region.replace(/[^A-za-z0-9]/g,"").toLowerCase():""}show(){return this.hasOwnProperty("_show")?this._show.replace(/[^xo]/g,"").toLowerCase():""}}function parse(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/^\s*\n\*/gm,"<ul>\n*")).replace(/^(\*.+)\s*\n([^\*])/gm,"$1\n</ul>\n\n$2")).replace(/^\*(.+)/gm,"<li>$1</li>")).replace(/^\s*\n\d\./gm,"<ol>\n1.")).replace(/^(\d\..+)\s*\n([^\d\.])/gm,"$1\n</ol>\n\n$2")).replace(/^\d\.(.+)/gm,"<li>$1</li>")).replace(/^\>(.+)/gm,"<blockquote>$1</blockquote>")).replace(/[\#]{6}([^#|^\<|^\n]+)/g,"<h6>$1</h6>")).replace(/[\#]{5}([^#|^\<|^\n]+)/g,"<h5>$1</h5>")).replace(/[\#]{4}([^#|^\<|^\n]+)/g,"<h4>$1</h4>")).replace(/[\#]{3}([^#|^\<|^\n]+)/g,"<h3>$1</h3>")).replace(/[\#]{2}([^#|^\<|^\n]+)/g,"<h2>$1</h2>")).replace(/((?!&).|^)[\#]{1}(.+)/g,"<h1>$2</h1>")).replace(/^(.+)\n\=+/gm,"<h1>$1</h1>")).replace(/^(.+)\n\-+/gm,"<h2>$1</h2>")).replace(/(\n\t*[ ]*[^\*][^\n]*)((\n\t*[ ]*\*[^\n\*]+)+)(\n\t*[ ]*[^\*][^\n]*)/g,function(e,a,n,t,r){return a+"<ul>"+n+"</ul>"+r})).replace(/^\t*[ ]{0}\*[ ]*([^\*]*)$/gm,function(e,a){return"<li>"+a+"</li>"})).replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g,'<img src="$2" alt="$1" />')).replace(/([@]?)[\[]{2}([^\]\|]+)\|?([^\]\|]+)?[\]]{2}[\(]([^\)]+)[\)]/g,function(e,a,n,t,r){const s=new Options;return t?'<a href="'+window.location.href.split("?")[0]+"?campaign="+s.campaign()+"&map="+r.replace(/[^A-za-z0-9]/g,"").toLowerCase()+"&"+(a?"region":"location")+"="+t.replace(/[^A-za-z0-9]/g,"").toLowerCase()+'" target="_blank">'+n+"</a>":'<a href="'+window.location.href.split("?")[0]+"?campaign="+s.campaign()+"&map="+r.replace(/[^A-za-z0-9]/g,"").toLowerCase()+"&"+(a?"region":"location")+"="+n.replace(/[^A-za-z0-9]/g,"").toLowerCase()+'" target="_blank">'+n+"</a>"})).replace(/([@]?)[\[]{2}([^\]\|]+)\|?([^\]\|]+)?[\]]{2}/g,function(e,a,n,t,r){return t?'<a href="#" onclick="mLinkFire( \''+(a?"region":"location")+"', '"+t.replace(/[^A-za-z0-9]/g,"").toLowerCase()+"');\">"+n+"</a>":'<a href="#" onclick="mLinkFire( \''+(a?"region":"location")+"', '"+n.replace(/[^A-za-z0-9]/g,"").toLowerCase()+"');\">"+n+"</a>"})).replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g,'<a href="$2" title="$4" target="_blank">$1</a>')).replace(/([\'\"\(\s]|^)[\*\_]{2}([^\*]+?)[\*\_]{2}([\'\"\)\,\.\s]|$)/g,"$1<b>$2</b>$3")).replace(/([\'\"\(\s]|^)[\*\_]{1}([^\*\_]+)[\*\_]{1}([\'\"\)\,\.\s]|$)/g,"$1<i>$2</i>$3")).replace(/[\~]{2}([^\~]+)[\~]{2}/g,"<del>$1</del>")).replace(/(㐽|㑇|㑈|㑔|㑩|㓥|㔉|㖊|㖞|㘎|㚯|㛀|㛟|㛠|㛣|㛤|㛿|㟆|㟜|㤘|㧏|㧐|㧑|㧟|㧰|㨫|㭎|㭏|㭣|㭤|㭴|㱩|㱮|㲿|㳔|㳕|[㳠-㳢]|㳽|㶉|㶶|㶽|㺍|㻅|㻏|㻘|䀥|䁖|䂵|䅉|䅪|䇲|䉤|[䌶-䌾]|䍀|䍁|䓕|䗖|䘛|䘞|䙊|䙌|䙓|䜣|䜥|䜧|䜩|䝙|䞌|䞍|䞎|䞐|䟢|[䢀-䢂]|䥺|[䥽-䦃]|䦅|䦶|䦷|䭪|䯃|䯄|䯅|䲝|䲞|䲟|䲠|䲡|䲢|䲣|[䴓-䴙]|䶮|万|与|丑|专|[业-丝]|丢|两|严|丧|个|丰|临|为|丽|举|么|义|乌|乐|乔|习|乡|书|买|乱|争|于|亏|云|亚|产|亩|亲|亵|亸|亿|仅|仆|从|仑|仓|仪|们|价|众|优|会|伛|[伞-伡]|[伣-伧]|伪|伫|体|余|佣|佥|侠|侣|[侥-侪]|侬|俣|俦|[俨-俫]|俭|债|倾|偬|偻|偾|偿|傥|[傧-傩]|僞|儿|克|兑|兖|党|兰|关|兴|兹|养|兽|冁|内|冈|册|写|军|农|冯|冲|决|况|冻|净|准|凉|减|凑|凛|几|凤|凫|凭|凯|击|凿|刍|划|[刘-创]|删|[别-刮]|制|刹|[刽-剀]|剂|剐|剑|剥|剧|劝|办|务|劢|动|[励-劳]|势|勋|勚|匀|匦|匮|区|医|华|协|单|卖|卢|卤|卫|却|厂|厅|历|厉|[压-厍]|厐|厕|厘|厢|厣|厦|厨|厩|厮|县|叁|参|双|发|变|叙|叠|只|台|叶|号|叹|叽|同|后|向|吓|吕|吗|吣|吨|听|启|吴|呐|呒|呓|[呕-呙]|呛|呜|咏|咙|咛|咝|咤|咸|响|[哑-哕]|哗|哙|哜|哝|哟|唛|唝|[唠-唢]|唤|啧|[啬-啰]|啴|啸|喷|喽|喾|嗫|嗳|嘘|嘤|嘱|噜|嚣|团|园|困|囱|围|囵|国|图|圆|圣|圹|场|坂|坏|块|[坚-坠]|[垄-垆]|垒|垦|垩|垫|垭|垱|垲|垴|[埘-埚]|埯|堑|堕|墙|壮|声|壳|壶|壸|处|备|复|够|头|[夸-夺]|奁|奂|奋|奖|奥|奸|[妆-妈]|[妩-妫]|姗|姹|[娄-娈]|娱|娲|娴|[婳-婶]|媪|嫒|嫔|嫱|嬷|孙|学|孪|宁|宝|实|宠|审|宪|宫|宽|宾|寝|对|寻|导|寿|将|尔|尘|尝|尧|尴|尸|尽|层|屃|屉|届|属|屡|屦|屿|岁|岂|[岖-岛]|岭|岽|岿|峄|峡|[峣-峦]|[崂-崄]|崭|嵘|嵚|嵝|巅|巩|巯|币|帅|师|帏|帐|帘|帜|带|帧|帮|帱|帻|帼|幂|干|并|广|庄|庆|庐|庑|库|应|庙|庞|废|廪|开|异|弃|弑|张|弥|弪|弯|弹|强|归|当|录|彝|彦|彨|彻|征|径|徕|御|忆|忏|志|忧|忾|[怀-怆]|怜|总|怼|怿|恋|恒|恳|恶|[恸-恽]|悦|[悫-悯]|惊|[惧-惩]|[惫-惯]|愠|愤|愦|愿|慑|懑|懒|懔|戆|戋|戏|戗|战|戬|戯|户|扑|执|扩|[扪-扬]|扰|抚|抛|抟|[抠-抢]|护|报|担|拟|拢|拣|[拥-择]|挂|[挚-挦]|挽|[捝-损]|[捡-捣]|据|掳|掴|掷|掸|掺|掼|[揽-搂]|搅|携|[摄-摈]|摊|撄|撑|撵|撷|撸|撺|擞|攒|敌|敛|敩|数|斋|斓|斗|斩|断|无|旧|时|旷|旸|昙|[昼-显]|晋|[晒-晖]|暂|暧|术|朴|机|杀|杂|权|杆|条|来|杨|杩|杰|松|板|极|构|枞|枢|枣|枥|枧|枨|枪|枫|枭|柜|柠|柽|栀|栅|[标-栌]|栎|栏|树|栖|栗|样|栾|[桠-桩]|梦|梼|[梾-棂]|椁|椟|椠|椢|椤|椫|椭|楼|榄|榅|[榇-榉]|槚|槛|槟|槠|横|樯|樱|橥|橱|橹|橼|檩|欢|欤|欧|歼|殁|殇|残|殒|殓|殚|殡|殴|毁|毂|毕|毙|毡|毵|氇|气|氢|氩|氲|汇|汉|汤|汹|沈|沟|没|[沣-沪]|泞|注|泪|[泶-泸]|[泺-泾]|洁|洒|洼|浃|[浅-浈]|浊|测|[浍-浕]|涂|涛|[涝-涤]|[润-涩]|淀|渊|[渌-渎]|渐|渑|渔|渗|温|湾|湿|溃|[溅-溇]|滗|滚|[滞-滢]|[滤-滦]|[滨-滪]|漓|漤|潆|潇|潋|潍|潜|潴|澛|澜|濑|濒|灏|灭|灯|灵|灾|灿|炀|炉|炜|炝|点|炼|炽|[烁-烃]|烛|烟|[烦-烩]|[烫-热]|焕|焖|焘|煴|爱|爷|牍|牦|牵|牺|犊|[状-犹]|狈|狝|狞|[独-狲]|猃|猎|猕|猡|[猪-猬]|献|獭|玑|玚|玛|玮|环|现|玱|玺|珐|珑|珰|珲|琏|琐|琼|瑶|瑷|璎|瓒|瓯|电|画|畅|畴|疖|疗|[疟-疡]|[疬-疯]|疱|疴|[症-痉]|痒|痖|痨|痪|痫|瘅|瘆|瘗|瘘|瘪|瘫|瘾|瘿|癞|癣|癫|皑|皱|皲|盏|盐|监|[盖-盘]|眍|眦|眬|着|睁|睐|睑|瞆|瞒|瞩|矫|矶|[矾-码]|砖|砗|砚|砜|砺|砻|砾|础|硁|[硕-硗]|硙|硚|确|硵|硷|碍|碛|碜|碱|礼|祃|祎|祢|祯|祷|祸|禀|禄|禅|离|秃|秆|种|积|称|秽|秾|稆|税|稣|稳|穑|穷|窃|窍|窎|窑|窜|窝|窥|窦|窭|竖|竞|笃|笋|笔|笕|笺|笼|笾|筑|[筚-筝]|筹|筼|签|简|箓|[箦-箫]|篑|篓|篮|篯|篱|簖|籁|籴|类|籼|粜|粝|粤|粪|粮|糁|糇|系|紧|累|絷|[纟-缏]|[缑-缵]|罂|网|罗|罚|罢|罴|羁|羟|[翘-翚]|耢|耧|耸|耻|聂|[聋-聍]|联|聩|聪|肃|肠|肤|肮|肴|[肾-胁]|胆|胜|胡|胧|胨|胪|胫|胶|脉|脍|[脏-脑]|脓|脔|脚|脱|脶|脸|腊|腘|腭|[腻-腾]|膑|臜|致|舆|舍|舣|舰|舱|舻|艰|艳|艺|节|芈|芗|芜|芦|芸|苁|苇|苈|[苋-苏]|苧|苹|范|茎|茏|茑|茔|茕|茧|荆|荐|[荙-荡]|[荣-药]|莅|[莱-莴]|[莶-莺]|莼|萝|[萤-萨]|葱|蒇|蒉|蒋|蒌|蓝|蓟|蓠|蓣|蓥|蓦|蔂|蔷|蔹|蔺|蔼|蕰|蕲|蕴|薮|藓|蘖|虏|虑|虚|虫|虬|虮|[虽-蚃]|蚕|蚬|蛊|蛎|蛏|蛮|[蛰-蛴]|蜕|蜗|蜡|[蝇-蝉]|蝼|蝾|螀|螨|蟏|衅|衔|补|表|衬|衮|[袄-袆]|袜|袭|袯|装|裆|裈|[裢-裥]|褛|褴|襕|[见-觑]|觞|触|觯|訚|詟|誉|誊|[讠-谈]|[谊-谷]|豮|[贝-赣]|赪|赵|赶|趋|趱|趸|跃|跄|跞|[践-跹]|跻|踊|踌|踪|踬|踯|蹑|蹒|蹰|蹿|躏|躜|躯|[车-辚]|辞|辩|辫|边|辽|达|迁|过|迈|运|还|这|[进-迟]|迩|迳|迹|适|选|逊|递|逦|逻|遗|遥|邓|邝|邬|邮|[邹-邻]|郁|郏|郐|郑|郓|郦|郧|郸|酂|酝|酦|酱|酽|酾|酿|采|释|里|鉴|銮|錾|[钅-镶]|长|[门-阛]|队|[阳-阶]|[际-陉]|陕|[陧-险]|随|隐|隶|隽|难|雏|雠|雳|雾|霁|霡|霭|靓|静|面|靥|鞑|鞒|鞯|[韦-韬]|韵|[页-颧]|[风-飚]|飞|飨|餍|[饣-馕]|[马-骧]|髅|髋|髌|鬓|魇|魉|[鱼-鲆]|[鲈-鳣]|[鸟-鹴]|鹾|麦|麸|黄|黉|黡|黩|黪|黾|鼋|鼍|鼗|鼹|齐|齑|[齿-龌]|[龙-龛]|龟)+/g,function(e){return'<span class="lang_zhs">'+e+"</span>"})).replace(/(?:(?!(㐽|㑇|㑈|㑔|㑩|㓥|㔉|㖊|㖞|㘎|㚯|㛀|㛟|㛠|㛣|㛤|㛿|㟆|㟜|㤘|㧏|㧐|㧑|㧟|㧰|㨫|㭎|㭏|㭣|㭤|㭴|㱩|㱮|㲿|㳔|㳕|[㳠-㳢]|㳽|㶉|㶶|㶽|㺍|㻅|㻏|㻘|䀥|䁖|䂵|䅉|䅪|䇲|䉤|[䌶-䌾]|䍀|䍁|䓕|䗖|䘛|䘞|䙊|䙌|䙓|䜣|䜥|䜧|䜩|䝙|䞌|䞍|䞎|䞐|䟢|[䢀-䢂]|䥺|[䥽-䦃]|䦅|䦶|䦷|䭪|䯃|䯄|䯅|䲝|䲞|䲟|䲠|䲡|䲢|䲣|[䴓-䴙]|䶮|万|与|丑|专|[业-丝]|丢|两|严|丧|个|丰|临|为|丽|举|么|义|乌|乐|乔|习|乡|书|买|乱|争|于|亏|云|亚|产|亩|亲|亵|亸|亿|仅|仆|从|仑|仓|仪|们|价|众|优|会|伛|[伞-伡]|[伣-伧]|伪|伫|体|余|佣|佥|侠|侣|[侥-侪]|侬|俣|俦|[俨-俫]|俭|债|倾|偬|偻|偾|偿|傥|[傧-傩]|僞|儿|克|兑|兖|党|兰|关|兴|兹|养|兽|冁|内|冈|册|写|军|农|冯|冲|决|况|冻|净|准|凉|减|凑|凛|几|凤|凫|凭|凯|击|凿|刍|划|[刘-创]|删|[别-刮]|制|刹|[刽-剀]|剂|剐|剑|剥|剧|劝|办|务|劢|动|[励-劳]|势|勋|勚|匀|匦|匮|区|医|华|协|单|卖|卢|卤|卫|却|厂|厅|历|厉|[压-厍]|厐|厕|厘|厢|厣|厦|厨|厩|厮|县|叁|参|双|发|变|叙|叠|只|台|叶|号|叹|叽|同|后|向|吓|吕|吗|吣|吨|听|启|吴|呐|呒|呓|[呕-呙]|呛|呜|咏|咙|咛|咝|咤|咸|响|[哑-哕]|哗|哙|哜|哝|哟|唛|唝|[唠-唢]|唤|啧|[啬-啰]|啴|啸|喷|喽|喾|嗫|嗳|嘘|嘤|嘱|噜|嚣|团|园|困|囱|围|囵|国|图|圆|圣|圹|场|坂|坏|块|[坚-坠]|[垄-垆]|垒|垦|垩|垫|垭|垱|垲|垴|[埘-埚]|埯|堑|堕|墙|壮|声|壳|壶|壸|处|备|复|够|头|[夸-夺]|奁|奂|奋|奖|奥|奸|[妆-妈]|[妩-妫]|姗|姹|[娄-娈]|娱|娲|娴|[婳-婶]|媪|嫒|嫔|嫱|嬷|孙|学|孪|宁|宝|实|宠|审|宪|宫|宽|宾|寝|对|寻|导|寿|将|尔|尘|尝|尧|尴|尸|尽|层|屃|屉|届|属|屡|屦|屿|岁|岂|[岖-岛]|岭|岽|岿|峄|峡|[峣-峦]|[崂-崄]|崭|嵘|嵚|嵝|巅|巩|巯|币|帅|师|帏|帐|帘|帜|带|帧|帮|帱|帻|帼|幂|干|并|广|庄|庆|庐|庑|库|应|庙|庞|废|廪|开|异|弃|弑|张|弥|弪|弯|弹|强|归|当|录|彝|彦|彨|彻|征|径|徕|御|忆|忏|志|忧|忾|[怀-怆]|怜|总|怼|怿|恋|恒|恳|恶|[恸-恽]|悦|[悫-悯]|惊|[惧-惩]|[惫-惯]|愠|愤|愦|愿|慑|懑|懒|懔|戆|戋|戏|戗|战|戬|戯|户|扑|执|扩|[扪-扬]|扰|抚|抛|抟|[抠-抢]|护|报|担|拟|拢|拣|[拥-择]|挂|[挚-挦]|挽|[捝-损]|[捡-捣]|据|掳|掴|掷|掸|掺|掼|[揽-搂]|搅|携|[摄-摈]|摊|撄|撑|撵|撷|撸|撺|擞|攒|敌|敛|敩|数|斋|斓|斗|斩|断|无|旧|时|旷|旸|昙|[昼-显]|晋|[晒-晖]|暂|暧|术|朴|机|杀|杂|权|杆|条|来|杨|杩|杰|松|板|极|构|枞|枢|枣|枥|枧|枨|枪|枫|枭|柜|柠|柽|栀|栅|[标-栌]|栎|栏|树|栖|栗|样|栾|[桠-桩]|梦|梼|[梾-棂]|椁|椟|椠|椢|椤|椫|椭|楼|榄|榅|[榇-榉]|槚|槛|槟|槠|横|樯|樱|橥|橱|橹|橼|檩|欢|欤|欧|歼|殁|殇|残|殒|殓|殚|殡|殴|毁|毂|毕|毙|毡|毵|氇|气|氢|氩|氲|汇|汉|汤|汹|沈|沟|没|[沣-沪]|泞|注|泪|[泶-泸]|[泺-泾]|洁|洒|洼|浃|[浅-浈]|浊|测|[浍-浕]|涂|涛|[涝-涤]|[润-涩]|淀|渊|[渌-渎]|渐|渑|渔|渗|温|湾|湿|溃|[溅-溇]|滗|滚|[滞-滢]|[滤-滦]|[滨-滪]|漓|漤|潆|潇|潋|潍|潜|潴|澛|澜|濑|濒|灏|灭|灯|灵|灾|灿|炀|炉|炜|炝|点|炼|炽|[烁-烃]|烛|烟|[烦-烩]|[烫-热]|焕|焖|焘|煴|爱|爷|牍|牦|牵|牺|犊|[状-犹]|狈|狝|狞|[独-狲]|猃|猎|猕|猡|[猪-猬]|献|獭|玑|玚|玛|玮|环|现|玱|玺|珐|珑|珰|珲|琏|琐|琼|瑶|瑷|璎|瓒|瓯|电|画|畅|畴|疖|疗|[疟-疡]|[疬-疯]|疱|疴|[症-痉]|痒|痖|痨|痪|痫|瘅|瘆|瘗|瘘|瘪|瘫|瘾|瘿|癞|癣|癫|皑|皱|皲|盏|盐|监|[盖-盘]|眍|眦|眬|着|睁|睐|睑|瞆|瞒|瞩|矫|矶|[矾-码]|砖|砗|砚|砜|砺|砻|砾|础|硁|[硕-硗]|硙|硚|确|硵|硷|碍|碛|碜|碱|礼|祃|祎|祢|祯|祷|祸|禀|禄|禅|离|秃|秆|种|积|称|秽|秾|稆|税|稣|稳|穑|穷|窃|窍|窎|窑|窜|窝|窥|窦|窭|竖|竞|笃|笋|笔|笕|笺|笼|笾|筑|[筚-筝]|筹|筼|签|简|箓|[箦-箫]|篑|篓|篮|篯|篱|簖|籁|籴|类|籼|粜|粝|粤|粪|粮|糁|糇|系|紧|累|絷|[纟-缏]|[缑-缵]|罂|网|罗|罚|罢|罴|羁|羟|[翘-翚]|耢|耧|耸|耻|聂|[聋-聍]|联|聩|聪|肃|肠|肤|肮|肴|[肾-胁]|胆|胜|胡|胧|胨|胪|胫|胶|脉|脍|[脏-脑]|脓|脔|脚|脱|脶|脸|腊|腘|腭|[腻-腾]|膑|臜|致|舆|舍|舣|舰|舱|舻|艰|艳|艺|节|芈|芗|芜|芦|芸|苁|苇|苈|[苋-苏]|苧|苹|范|茎|茏|茑|茔|茕|茧|荆|荐|[荙-荡]|[荣-药]|莅|[莱-莴]|[莶-莺]|莼|萝|[萤-萨]|葱|蒇|蒉|蒋|蒌|蓝|蓟|蓠|蓣|蓥|蓦|蔂|蔷|蔹|蔺|蔼|蕰|蕲|蕴|薮|藓|蘖|虏|虑|虚|虫|虬|虮|[虽-蚃]|蚕|蚬|蛊|蛎|蛏|蛮|[蛰-蛴]|蜕|蜗|蜡|[蝇-蝉]|蝼|蝾|螀|螨|蟏|衅|衔|补|表|衬|衮|[袄-袆]|袜|袭|袯|装|裆|裈|[裢-裥]|褛|褴|襕|[见-觑]|觞|触|觯|訚|詟|誉|誊|[讠-谈]|[谊-谷]|豮|[贝-赣]|赪|赵|赶|趋|趱|趸|跃|跄|跞|[践-跹]|跻|踊|踌|踪|踬|踯|蹑|蹒|蹰|蹿|躏|躜|躯|[车-辚]|辞|辩|辫|边|辽|达|迁|过|迈|运|还|这|[进-迟]|迩|迳|迹|适|选|逊|递|逦|逻|遗|遥|邓|邝|邬|邮|[邹-邻]|郁|郏|郐|郑|郓|郦|郧|郸|酂|酝|酦|酱|酽|酾|酿|采|释|里|鉴|銮|錾|[钅-镶]|长|[门-阛]|队|[阳-阶]|[际-陉]|陕|[陧-险]|随|隐|隶|隽|难|雏|雠|雳|雾|霁|霡|霭|靓|静|面|靥|鞑|鞒|鞯|[韦-韬]|韵|[页-颧]|[风-飚]|飞|飨|餍|[饣-馕]|[马-骧]|髅|髋|髌|鬓|魇|魉|[鱼-鲆]|[鲈-鳣]|[鸟-鹴]|鹾|麦|麸|黄|黉|黡|黩|黪|黾|鼋|鼍|鼗|鼹|齐|齑|[齿-龌]|[龙-龛]|龟))([\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]))+/g,function(e){return'<span class="lang_zht">'+e+"</span>"})).replace(/[\/]{3}/g,zhSlash())).replace(/^\s*\n\`\`\`(([^\s]+))?/gm,'<pre class="$2">')).replace(/^\`\`\`\s*\n/gm,"</pre>\n\n")).replace(/[\`]{1}([^\`]+)[\`]{1}/g,"<code>$1</code>")).replace(/^\s*(\n)?(.+)/gm,function(e){return/\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(e)?e:"<p>"+e+"</p>"})).replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm,"$1$2")}function svgParse(e){return e=(e=(e=(e=(e=(e=e.replace(/[\#]{3}([^#|^\<|^\n]+)/g,'<tspan class="h3">$1</tspan>')).replace(/[\#]{2}([^#|^\<|^\n]+)/g,'<tspan class="h2">$1</tspan>')).replace(/((?!&).|^)[\#]{1}([^#|^\<|^\n]+)/g,'<tspan class="h1">$2</tspan>')).replace(/(㐽|㑇|㑈|㑔|㑩|㓥|㔉|㖊|㖞|㘎|㚯|㛀|㛟|㛠|㛣|㛤|㛿|㟆|㟜|㤘|㧏|㧐|㧑|㧟|㧰|㨫|㭎|㭏|㭣|㭤|㭴|㱩|㱮|㲿|㳔|㳕|[㳠-㳢]|㳽|㶉|㶶|㶽|㺍|㻅|㻏|㻘|䀥|䁖|䂵|䅉|䅪|䇲|䉤|[䌶-䌾]|䍀|䍁|䓕|䗖|䘛|䘞|䙊|䙌|䙓|䜣|䜥|䜧|䜩|䝙|䞌|䞍|䞎|䞐|䟢|[䢀-䢂]|䥺|[䥽-䦃]|䦅|䦶|䦷|䭪|䯃|䯄|䯅|䲝|䲞|䲟|䲠|䲡|䲢|䲣|[䴓-䴙]|䶮|万|与|丑|专|[业-丝]|丢|两|严|丧|个|丰|临|为|丽|举|么|义|乌|乐|乔|习|乡|书|买|乱|争|于|亏|云|亚|产|亩|亲|亵|亸|亿|仅|仆|从|仑|仓|仪|们|价|众|优|会|伛|[伞-伡]|[伣-伧]|伪|伫|体|余|佣|佥|侠|侣|[侥-侪]|侬|俣|俦|[俨-俫]|俭|债|倾|偬|偻|偾|偿|傥|[傧-傩]|僞|儿|克|兑|兖|党|兰|关|兴|兹|养|兽|冁|内|冈|册|写|军|农|冯|冲|决|况|冻|净|准|凉|减|凑|凛|几|凤|凫|凭|凯|击|凿|刍|划|[刘-创]|删|[别-刮]|制|刹|[刽-剀]|剂|剐|剑|剥|剧|劝|办|务|劢|动|[励-劳]|势|勋|勚|匀|匦|匮|区|医|华|协|单|卖|卢|卤|卫|却|厂|厅|历|厉|[压-厍]|厐|厕|厘|厢|厣|厦|厨|厩|厮|县|叁|参|双|发|变|叙|叠|只|台|叶|号|叹|叽|同|后|向|吓|吕|吗|吣|吨|听|启|吴|呐|呒|呓|[呕-呙]|呛|呜|咏|咙|咛|咝|咤|咸|响|[哑-哕]|哗|哙|哜|哝|哟|唛|唝|[唠-唢]|唤|啧|[啬-啰]|啴|啸|喷|喽|喾|嗫|嗳|嘘|嘤|嘱|噜|嚣|团|园|困|囱|围|囵|国|图|圆|圣|圹|场|坂|坏|块|[坚-坠]|[垄-垆]|垒|垦|垩|垫|垭|垱|垲|垴|[埘-埚]|埯|堑|堕|墙|壮|声|壳|壶|壸|处|备|复|够|头|[夸-夺]|奁|奂|奋|奖|奥|奸|[妆-妈]|[妩-妫]|姗|姹|[娄-娈]|娱|娲|娴|[婳-婶]|媪|嫒|嫔|嫱|嬷|孙|学|孪|宁|宝|实|宠|审|宪|宫|宽|宾|寝|对|寻|导|寿|将|尔|尘|尝|尧|尴|尸|尽|层|屃|屉|届|属|屡|屦|屿|岁|岂|[岖-岛]|岭|岽|岿|峄|峡|[峣-峦]|[崂-崄]|崭|嵘|嵚|嵝|巅|巩|巯|币|帅|师|帏|帐|帘|帜|带|帧|帮|帱|帻|帼|幂|干|并|广|庄|庆|庐|庑|库|应|庙|庞|废|廪|开|异|弃|弑|张|弥|弪|弯|弹|强|归|当|录|彝|彦|彨|彻|征|径|徕|御|忆|忏|志|忧|忾|[怀-怆]|怜|总|怼|怿|恋|恒|恳|恶|[恸-恽]|悦|[悫-悯]|惊|[惧-惩]|[惫-惯]|愠|愤|愦|愿|慑|懑|懒|懔|戆|戋|戏|戗|战|戬|戯|户|扑|执|扩|[扪-扬]|扰|抚|抛|抟|[抠-抢]|护|报|担|拟|拢|拣|[拥-择]|挂|[挚-挦]|挽|[捝-损]|[捡-捣]|据|掳|掴|掷|掸|掺|掼|[揽-搂]|搅|携|[摄-摈]|摊|撄|撑|撵|撷|撸|撺|擞|攒|敌|敛|敩|数|斋|斓|斗|斩|断|无|旧|时|旷|旸|昙|[昼-显]|晋|[晒-晖]|暂|暧|术|朴|机|杀|杂|权|杆|条|来|杨|杩|杰|松|板|极|构|枞|枢|枣|枥|枧|枨|枪|枫|枭|柜|柠|柽|栀|栅|[标-栌]|栎|栏|树|栖|栗|样|栾|[桠-桩]|梦|梼|[梾-棂]|椁|椟|椠|椢|椤|椫|椭|楼|榄|榅|[榇-榉]|槚|槛|槟|槠|横|樯|樱|橥|橱|橹|橼|檩|欢|欤|欧|歼|殁|殇|残|殒|殓|殚|殡|殴|毁|毂|毕|毙|毡|毵|氇|气|氢|氩|氲|汇|汉|汤|汹|沈|沟|没|[沣-沪]|泞|注|泪|[泶-泸]|[泺-泾]|洁|洒|洼|浃|[浅-浈]|浊|测|[浍-浕]|涂|涛|[涝-涤]|[润-涩]|淀|渊|[渌-渎]|渐|渑|渔|渗|温|湾|湿|溃|[溅-溇]|滗|滚|[滞-滢]|[滤-滦]|[滨-滪]|漓|漤|潆|潇|潋|潍|潜|潴|澛|澜|濑|濒|灏|灭|灯|灵|灾|灿|炀|炉|炜|炝|点|炼|炽|[烁-烃]|烛|烟|[烦-烩]|[烫-热]|焕|焖|焘|煴|爱|爷|牍|牦|牵|牺|犊|[状-犹]|狈|狝|狞|[独-狲]|猃|猎|猕|猡|[猪-猬]|献|獭|玑|玚|玛|玮|环|现|玱|玺|珐|珑|珰|珲|琏|琐|琼|瑶|瑷|璎|瓒|瓯|电|画|畅|畴|疖|疗|[疟-疡]|[疬-疯]|疱|疴|[症-痉]|痒|痖|痨|痪|痫|瘅|瘆|瘗|瘘|瘪|瘫|瘾|瘿|癞|癣|癫|皑|皱|皲|盏|盐|监|[盖-盘]|眍|眦|眬|着|睁|睐|睑|瞆|瞒|瞩|矫|矶|[矾-码]|砖|砗|砚|砜|砺|砻|砾|础|硁|[硕-硗]|硙|硚|确|硵|硷|碍|碛|碜|碱|礼|祃|祎|祢|祯|祷|祸|禀|禄|禅|离|秃|秆|种|积|称|秽|秾|稆|税|稣|稳|穑|穷|窃|窍|窎|窑|窜|窝|窥|窦|窭|竖|竞|笃|笋|笔|笕|笺|笼|笾|筑|[筚-筝]|筹|筼|签|简|箓|[箦-箫]|篑|篓|篮|篯|篱|簖|籁|籴|类|籼|粜|粝|粤|粪|粮|糁|糇|系|紧|累|絷|[纟-缏]|[缑-缵]|罂|网|罗|罚|罢|罴|羁|羟|[翘-翚]|耢|耧|耸|耻|聂|[聋-聍]|联|聩|聪|肃|肠|肤|肮|肴|[肾-胁]|胆|胜|胡|胧|胨|胪|胫|胶|脉|脍|[脏-脑]|脓|脔|脚|脱|脶|脸|腊|腘|腭|[腻-腾]|膑|臜|致|舆|舍|舣|舰|舱|舻|艰|艳|艺|节|芈|芗|芜|芦|芸|苁|苇|苈|[苋-苏]|苧|苹|范|茎|茏|茑|茔|茕|茧|荆|荐|[荙-荡]|[荣-药]|莅|[莱-莴]|[莶-莺]|莼|萝|[萤-萨]|葱|蒇|蒉|蒋|蒌|蓝|蓟|蓠|蓣|蓥|蓦|蔂|蔷|蔹|蔺|蔼|蕰|蕲|蕴|薮|藓|蘖|虏|虑|虚|虫|虬|虮|[虽-蚃]|蚕|蚬|蛊|蛎|蛏|蛮|[蛰-蛴]|蜕|蜗|蜡|[蝇-蝉]|蝼|蝾|螀|螨|蟏|衅|衔|补|表|衬|衮|[袄-袆]|袜|袭|袯|装|裆|裈|[裢-裥]|褛|褴|襕|[见-觑]|觞|触|觯|訚|詟|誉|誊|[讠-谈]|[谊-谷]|豮|[贝-赣]|赪|赵|赶|趋|趱|趸|跃|跄|跞|[践-跹]|跻|踊|踌|踪|踬|踯|蹑|蹒|蹰|蹿|躏|躜|躯|[车-辚]|辞|辩|辫|边|辽|达|迁|过|迈|运|还|这|[进-迟]|迩|迳|迹|适|选|逊|递|逦|逻|遗|遥|邓|邝|邬|邮|[邹-邻]|郁|郏|郐|郑|郓|郦|郧|郸|酂|酝|酦|酱|酽|酾|酿|采|释|里|鉴|銮|錾|[钅-镶]|长|[门-阛]|队|[阳-阶]|[际-陉]|陕|[陧-险]|随|隐|隶|隽|难|雏|雠|雳|雾|霁|霡|霭|靓|静|面|靥|鞑|鞒|鞯|[韦-韬]|韵|[页-颧]|[风-飚]|飞|飨|餍|[饣-馕]|[马-骧]|髅|髋|髌|鬓|魇|魉|[鱼-鲆]|[鲈-鳣]|[鸟-鹴]|鹾|麦|麸|黄|黉|黡|黩|黪|黾|鼋|鼍|鼗|鼹|齐|齑|[齿-龌]|[龙-龛]|龟)+/g,function(e){return'<tspan class="lang_zhs">'+e+"</tspan>"})).replace(/(?:(?!(㐽|㑇|㑈|㑔|㑩|㓥|㔉|㖊|㖞|㘎|㚯|㛀|㛟|㛠|㛣|㛤|㛿|㟆|㟜|㤘|㧏|㧐|㧑|㧟|㧰|㨫|㭎|㭏|㭣|㭤|㭴|㱩|㱮|㲿|㳔|㳕|[㳠-㳢]|㳽|㶉|㶶|㶽|㺍|㻅|㻏|㻘|䀥|䁖|䂵|䅉|䅪|䇲|䉤|[䌶-䌾]|䍀|䍁|䓕|䗖|䘛|䘞|䙊|䙌|䙓|䜣|䜥|䜧|䜩|䝙|䞌|䞍|䞎|䞐|䟢|[䢀-䢂]|䥺|[䥽-䦃]|䦅|䦶|䦷|䭪|䯃|䯄|䯅|䲝|䲞|䲟|䲠|䲡|䲢|䲣|[䴓-䴙]|䶮|万|与|丑|专|[业-丝]|丢|两|严|丧|个|丰|临|为|丽|举|么|义|乌|乐|乔|习|乡|书|买|乱|争|于|亏|云|亚|产|亩|亲|亵|亸|亿|仅|仆|从|仑|仓|仪|们|价|众|优|会|伛|[伞-伡]|[伣-伧]|伪|伫|体|余|佣|佥|侠|侣|[侥-侪]|侬|俣|俦|[俨-俫]|俭|债|倾|偬|偻|偾|偿|傥|[傧-傩]|僞|儿|克|兑|兖|党|兰|关|兴|兹|养|兽|冁|内|冈|册|写|军|农|冯|冲|决|况|冻|净|准|凉|减|凑|凛|几|凤|凫|凭|凯|击|凿|刍|划|[刘-创]|删|[别-刮]|制|刹|[刽-剀]|剂|剐|剑|剥|剧|劝|办|务|劢|动|[励-劳]|势|勋|勚|匀|匦|匮|区|医|华|协|单|卖|卢|卤|卫|却|厂|厅|历|厉|[压-厍]|厐|厕|厘|厢|厣|厦|厨|厩|厮|县|叁|参|双|发|变|叙|叠|只|台|叶|号|叹|叽|同|后|向|吓|吕|吗|吣|吨|听|启|吴|呐|呒|呓|[呕-呙]|呛|呜|咏|咙|咛|咝|咤|咸|响|[哑-哕]|哗|哙|哜|哝|哟|唛|唝|[唠-唢]|唤|啧|[啬-啰]|啴|啸|喷|喽|喾|嗫|嗳|嘘|嘤|嘱|噜|嚣|团|园|困|囱|围|囵|国|图|圆|圣|圹|场|坂|坏|块|[坚-坠]|[垄-垆]|垒|垦|垩|垫|垭|垱|垲|垴|[埘-埚]|埯|堑|堕|墙|壮|声|壳|壶|壸|处|备|复|够|头|[夸-夺]|奁|奂|奋|奖|奥|奸|[妆-妈]|[妩-妫]|姗|姹|[娄-娈]|娱|娲|娴|[婳-婶]|媪|嫒|嫔|嫱|嬷|孙|学|孪|宁|宝|实|宠|审|宪|宫|宽|宾|寝|对|寻|导|寿|将|尔|尘|尝|尧|尴|尸|尽|层|屃|屉|届|属|屡|屦|屿|岁|岂|[岖-岛]|岭|岽|岿|峄|峡|[峣-峦]|[崂-崄]|崭|嵘|嵚|嵝|巅|巩|巯|币|帅|师|帏|帐|帘|帜|带|帧|帮|帱|帻|帼|幂|干|并|广|庄|庆|庐|庑|库|应|庙|庞|废|廪|开|异|弃|弑|张|弥|弪|弯|弹|强|归|当|录|彝|彦|彨|彻|征|径|徕|御|忆|忏|志|忧|忾|[怀-怆]|怜|总|怼|怿|恋|恒|恳|恶|[恸-恽]|悦|[悫-悯]|惊|[惧-惩]|[惫-惯]|愠|愤|愦|愿|慑|懑|懒|懔|戆|戋|戏|戗|战|戬|戯|户|扑|执|扩|[扪-扬]|扰|抚|抛|抟|[抠-抢]|护|报|担|拟|拢|拣|[拥-择]|挂|[挚-挦]|挽|[捝-损]|[捡-捣]|据|掳|掴|掷|掸|掺|掼|[揽-搂]|搅|携|[摄-摈]|摊|撄|撑|撵|撷|撸|撺|擞|攒|敌|敛|敩|数|斋|斓|斗|斩|断|无|旧|时|旷|旸|昙|[昼-显]|晋|[晒-晖]|暂|暧|术|朴|机|杀|杂|权|杆|条|来|杨|杩|杰|松|板|极|构|枞|枢|枣|枥|枧|枨|枪|枫|枭|柜|柠|柽|栀|栅|[标-栌]|栎|栏|树|栖|栗|样|栾|[桠-桩]|梦|梼|[梾-棂]|椁|椟|椠|椢|椤|椫|椭|楼|榄|榅|[榇-榉]|槚|槛|槟|槠|横|樯|樱|橥|橱|橹|橼|檩|欢|欤|欧|歼|殁|殇|残|殒|殓|殚|殡|殴|毁|毂|毕|毙|毡|毵|氇|气|氢|氩|氲|汇|汉|汤|汹|沈|沟|没|[沣-沪]|泞|注|泪|[泶-泸]|[泺-泾]|洁|洒|洼|浃|[浅-浈]|浊|测|[浍-浕]|涂|涛|[涝-涤]|[润-涩]|淀|渊|[渌-渎]|渐|渑|渔|渗|温|湾|湿|溃|[溅-溇]|滗|滚|[滞-滢]|[滤-滦]|[滨-滪]|漓|漤|潆|潇|潋|潍|潜|潴|澛|澜|濑|濒|灏|灭|灯|灵|灾|灿|炀|炉|炜|炝|点|炼|炽|[烁-烃]|烛|烟|[烦-烩]|[烫-热]|焕|焖|焘|煴|爱|爷|牍|牦|牵|牺|犊|[状-犹]|狈|狝|狞|[独-狲]|猃|猎|猕|猡|[猪-猬]|献|獭|玑|玚|玛|玮|环|现|玱|玺|珐|珑|珰|珲|琏|琐|琼|瑶|瑷|璎|瓒|瓯|电|画|畅|畴|疖|疗|[疟-疡]|[疬-疯]|疱|疴|[症-痉]|痒|痖|痨|痪|痫|瘅|瘆|瘗|瘘|瘪|瘫|瘾|瘿|癞|癣|癫|皑|皱|皲|盏|盐|监|[盖-盘]|眍|眦|眬|着|睁|睐|睑|瞆|瞒|瞩|矫|矶|[矾-码]|砖|砗|砚|砜|砺|砻|砾|础|硁|[硕-硗]|硙|硚|确|硵|硷|碍|碛|碜|碱|礼|祃|祎|祢|祯|祷|祸|禀|禄|禅|离|秃|秆|种|积|称|秽|秾|稆|税|稣|稳|穑|穷|窃|窍|窎|窑|窜|窝|窥|窦|窭|竖|竞|笃|笋|笔|笕|笺|笼|笾|筑|[筚-筝]|筹|筼|签|简|箓|[箦-箫]|篑|篓|篮|篯|篱|簖|籁|籴|类|籼|粜|粝|粤|粪|粮|糁|糇|系|紧|累|絷|[纟-缏]|[缑-缵]|罂|网|罗|罚|罢|罴|羁|羟|[翘-翚]|耢|耧|耸|耻|聂|[聋-聍]|联|聩|聪|肃|肠|肤|肮|肴|[肾-胁]|胆|胜|胡|胧|胨|胪|胫|胶|脉|脍|[脏-脑]|脓|脔|脚|脱|脶|脸|腊|腘|腭|[腻-腾]|膑|臜|致|舆|舍|舣|舰|舱|舻|艰|艳|艺|节|芈|芗|芜|芦|芸|苁|苇|苈|[苋-苏]|苧|苹|范|茎|茏|茑|茔|茕|茧|荆|荐|[荙-荡]|[荣-药]|莅|[莱-莴]|[莶-莺]|莼|萝|[萤-萨]|葱|蒇|蒉|蒋|蒌|蓝|蓟|蓠|蓣|蓥|蓦|蔂|蔷|蔹|蔺|蔼|蕰|蕲|蕴|薮|藓|蘖|虏|虑|虚|虫|虬|虮|[虽-蚃]|蚕|蚬|蛊|蛎|蛏|蛮|[蛰-蛴]|蜕|蜗|蜡|[蝇-蝉]|蝼|蝾|螀|螨|蟏|衅|衔|补|表|衬|衮|[袄-袆]|袜|袭|袯|装|裆|裈|[裢-裥]|褛|褴|襕|[见-觑]|觞|触|觯|訚|詟|誉|誊|[讠-谈]|[谊-谷]|豮|[贝-赣]|赪|赵|赶|趋|趱|趸|跃|跄|跞|[践-跹]|跻|踊|踌|踪|踬|踯|蹑|蹒|蹰|蹿|躏|躜|躯|[车-辚]|辞|辩|辫|边|辽|达|迁|过|迈|运|还|这|[进-迟]|迩|迳|迹|适|选|逊|递|逦|逻|遗|遥|邓|邝|邬|邮|[邹-邻]|郁|郏|郐|郑|郓|郦|郧|郸|酂|酝|酦|酱|酽|酾|酿|采|释|里|鉴|銮|錾|[钅-镶]|长|[门-阛]|队|[阳-阶]|[际-陉]|陕|[陧-险]|随|隐|隶|隽|难|雏|雠|雳|雾|霁|霡|霭|靓|静|面|靥|鞑|鞒|鞯|[韦-韬]|韵|[页-颧]|[风-飚]|飞|飨|餍|[饣-馕]|[马-骧]|髅|髋|髌|鬓|魇|魉|[鱼-鲆]|[鲈-鳣]|[鸟-鹴]|鹾|麦|麸|黄|黉|黡|黩|黪|黾|鼋|鼍|鼗|鼹|齐|齑|[齿-龌]|[龙-龛]|龟))([\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]))+/g,function(e){return'<tspan class="lang_zht">'+e+"</tspan>"})).replace(/^\s*(\n)?(.+)/gm,function(e){return/\<(\/)?(h\d|ul|ol|li|blockquote|pre|img|text)/.test(e)?e:'<tspan class="p">'+e+"</tspan>"})}function zhSlash(){return'&nbsp;<span style="display:inline-block;position:relative;left:-4px;-webkit-transform:scale(0.6,0.4);-moz-transform:scale(0.6,0.4);transform:scale(0.6,0.4);letter-spacing:-20px;-webkit-text-stroke:2px rgb(107,55,32);text-stroke:2px rgb(107,55,32);">&#10744;</span>&nbsp;'}