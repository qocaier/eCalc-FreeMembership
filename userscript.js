// ==UserScript==
// @name        eCalc FreeMembership
// @namespace   qocaier
// @description Membership on ecalc.ch for free!
// @match       https://ecalc.ch/motorcalc.php*
// @match       https://ecalc.ch/xcoptercalc.php*
// @match       https://ecalc.ch/fancalc.php*
// @match       https://ecalc.ch/helicalc.php*
// @version     1
// @grant       none
// ==/UserScript==

var isServicePayed = true;
var userStatementAccepted = true;

// Заготовка для построения графика
if (document.URL.slice(0, 32) === "https://ecalc.ch/xcoptercalc.php") {
  var center = document.querySelectorAll("center")[8];
  center.innerHTML = "<strong><span id='rangeTitel'>Расчет дальности</span></strong><br><div id='placeholderRange' style='width: 900px; height: 450px; padding: 0px; position: relative; color: rgb(0, 0, 0);'><canvas class='flot-base' style='direction: ltr; position: absolute; left: 0px; top: 0px; width: 900px; height: 450px;' width='600' height='300'></canvas><div class='flot-text' style='position: absolute; inset: 0px; font-size: smaller; color: rgb(84, 84, 84);'><div class='flot-x-axis flot-x1-axis xAxis x1Axis' style='position: absolute; inset: 0px; display: block;'><div class='flot-tick-label tickLabel' style='position: absolute; top: 419px; left: 21px;'>0.0км/ч<br>0миль/ч</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 419px; left: 98px;'>0.1км/ч<br>0.1миль/ч</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 419px; left: 180px;'>0.2км/ч<br>0.1миль/ч</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 419px; left: 262px;'>0.3км/ч<br>0.2миль/ч</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 419px; left: 344px;'>0.4км/ч<br>0.2миль/ч</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 419px; left: 426px;'>0.5км/ч<br>0.3миль/ч</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 419px; left: 507px;'>0.6км/ч<br>0.4миль/ч</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 419px; left: 589px;'>0.7км/ч<br>0.4миль/ч</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 419px; left: 671px;'>0.8км/ч<br>0.5миль/ч</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 419px; left: 753px;'>0.9км/ч<br>0.6миль/ч</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 419px; left: 835px;'>1.0км/ч<br>0.6миль/ч</div></div><div class='flot-y-axis flot-y1-axis yAxis y1Axis' style='position: absolute; inset: 0px; display: block;'><div class='flot-tick-label tickLabel' style='position: absolute; top: 407px; left: 2px;'>0.0мин</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 363px; left: 2px;'>0.5мин</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 318px; left: 2px;'>1.0мин</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 274px; left: 2px;'>1.5мин</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 230px; left: 2px;'>2.0мин</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 185px; left: 2px;'>2.5мин</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 141px; left: 2px;'>3.0мин</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 97px; left: 2px;'>3.5мин</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 52px; left: 2px;'>4.0мин</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 8px; left: 2px;'>4.5мин</div></div><div class='flot-y-axis flot-y2-axis yAxis y2Axis' style='position: absolute; inset: 0px; display: block;'><div class='flot-tick-label tickLabel' style='position: absolute; top: 400px; left: 867px;'>-1.00m<br>0миль</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 355px; left: 867px;'>-0.78m<br>0миль</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 311px; left: 867px;'>-0.56m<br>0миль</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 267px; left: 867px;'>-0.33m<br>0миль</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 222px; left: 867px;'>-0.11m<br>0миль</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 178px; left: 867px;'>0.11m<br>0миль</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 134px; left: 867px;'>0.33m<br>0миль</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 89px; left: 867px;'>0.56m<br>0миль</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 45px; left: 867px;'>0.78m<br>0миль</div><div class='flot-tick-label tickLabel' style='position: absolute; top: 1px; left: 867px;'>1.00m<br>0миль</div></div></div><canvas class='flot-overlay' style='direction: ltr; position: absolute; left: 0px; top: 0px; width: 900px; height: 450px;' width='600' height='300'></canvas><div class='legend'><div style='position: absolute; width: 187px; height: 73px; bottom: 41px; left: 44px; background-color: rgb(255, 255, 255); opacity: 0.85;'> </div><table style='position:absolute;bottom:41px;left:44px;;font-size:smaller;color:#545454'><tbody><tr><td class='legendColorBox'><div style='border:1px solid #ccc;padding:1px'><div style='width:4px;height:0;border:5px solid rgb(255, 214, 153);overflow:hidden'></div></div></td><td class='legendLabel'>① Полетное время (без возд. сопр)</td></tr><tr><td class='legendColorBox'><div style='border:1px solid #ccc;padding:1px'><div style='width:4px;height:0;border:5px solid rgb(230, 138, 0);overflow:hidden'></div></div></td><td class='legendLabel'>② Дальность (без возд. сопр)</td></tr><tr><td class='legendColorBox'><div style='border:1px solid #ccc;padding:1px'><div style='width:4px;height:0;border:5px solid rgb(40, 40, 164);overflow:hidden'></div></div></td><td class='legendLabel'>③ Дальность (с возд. сопр)</td></tr><tr><td class='legendColorBox'><div style='border:1px solid #ccc;padding:1px'><div style='width:4px;height:0;border:5px solid rgb(194, 194, 240);overflow:hidden'></div></div></td><td class='legendLabel'>④ Полетное время (с возд. сопр)</td></tr></tbody></table></div><div style='position:absolute;left:411px;top:18px;color:#666;font-size:7pt'>(c) by eCalc &nbsp;V2.05</div></div><span id='rangeSpeed'>Воздушная скорость</span>";
}

// Удаление рекламы и прочих баннеров
function unvisibleObjects(objects) {
  for (let idx in objects) {
    objects[idx].style = "display: none;";
  }
}
function removeObjects() {
  var body = document.querySelector("body");
  body.style = "";
  body.className = "";
  var remove = [document.getElementById("modalMessage"), document.getElementById("modalConfirm"), document.getElementById("ad-container")];
  var headers = document.getElementsByClassName("header");
  for (let idx in headers) {
    remove.push(headers[idx]);
  }
  unvisibleObjects(remove);
}

// Разблокировка полей
function ableObjects(objects) {
  for (let idx in objects) {
    if (objects[idx] && objects[idx].disabled) {
      objects[idx].removeAttribute("disabled");
    }
  }
}
function hackInputs() {
  var inputs = document.getElementsByTagName("input");
  var akks = document.getElementById("inBCell").options;
  var regs = document.getElementById("inEType").options;
  var mots = document.getElementById("inMType").options;
  var disabledInputs = [];
  for (let idx in inputs) {
    disabledInputs.push(inputs[idx]);
  }
  for (let idx in akks) {
    if (akks[idx].value !== "-1" && akks[idx].value === "na") {
      akks[idx].value = akks[idx].text;
      disabledInputs.push(akks[idx]);
    }
  }
  for (let idx in regs) {
    if (regs[idx].value !== "-1" && regs[idx].value === "na") {
      regs[idx].value = String(idx);
      disabledInputs.push(regs[idx]);
    }
  }
  let mot_num = "";
  for (let idx in mots) {
    if (mots[idx].value !== "-1" && mots[idx].value !== "na") {
      let c = mots[idx].value
      if (c) {
        c = c.split("|");
        mot_num = c[0];
        break;
      }
    }
  }
  for (let idx in mots) {
    if (mots[idx].value !== "-1" && mots[idx].value === "na") {
      let c = mots[idx].text;
      if (c) {
        c = c.split(' ');
        mots[idx].value = mot_num + "|" + c.slice(0,-1).join(' ');
        disabledInputs.push(mots[idx]);
      }
    }
  }
  disabledInputs.push(document.getElementById("inMLimitType"));
  ableObjects(disabledInputs);
}

// Кастомная функция калькулятора
function hackedCalculateHandler() {
  var withCustom = true;
  document.getElementById("inMKv").setAttribute("disabled", "");
  calculate();
}

// Замена функции калькулятора на кастомную
function hackCalculate() {
  var btn = document.getElementsByName("btnCalculate")[0];
  btn.removeAttribute("onclick");
  btn.removeEventListener("click", calculate);
  btn.addEventListener("click", hackedCalculateHandler, true);
}

setInterval(hackInputs, 100);
setInterval(removeObjects, 100);
hackCalculate();
