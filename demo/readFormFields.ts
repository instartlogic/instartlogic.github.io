function GetSelectorForElement(el) {
  const queryParts = [];
  let curElement = el;

  while (curElement && curElement.parentNode) {
    if (curElement.id) {
      queryParts.unshift(`#${curElement.id}`);
      break;
    } else {
      if (curElement.ownerDocument && (curElement === curElement.ownerDocument.documentElement || curElement === curElement.ownerDocument.body)) {
        queryParts.unshift(curElement.tagName.toLowerCase());
      } else {
        let tagName = curElement.tagName.toLowerCase();
        const siblings = curElement.parentNode.children;
        let i = 0;
        for (; i < siblings.length; i++) {
          if (curElement === siblings[i]) {
            break;
          }
        }
        queryParts.unshift(`${tagName}:nth-child(${i + 1})`);
      }
      curElement = curElement.parentElement;
    }
  }
  return queryParts.join(' > ');
}

function highlightForm (el) {
  el.style.border = '2px solid #22a5f7';
}

function recoverForm (el, ori) {
  el.style.border = ori;
}

function ReadCookies() {
  var cookies = document.cookie;
  var coolist = cookies.split(' ');
  if (document.getElementById('ins_cookies').innerHTML !== '') {
    document.getElementById('ins_cookies').innerHTML = '';
  } else {
    for (const cookie of coolist) {
      let content = cookie.split('=');
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = "javascript:void(0)";
      li.appendChild(a);
      var span = document.createElement('span');
      span.innerHTML = content[0];
      a.appendChild(span);
      var textBox = document.createElement('div');
      textBox.className = content[1] ? "ins_secret" : "ins_novalue";
      textBox.innerHTML = content[1] || "NO VALUE";
      textBox.title = content[1] || "NO VALUE";
      a.appendChild(textBox);
      document.getElementById("ins_cookies").appendChild(li);
    }
    document.getElementById('ins_cookies').appendChild(li);
  }
}

function ReadInputs() {
  var elements = document.querySelectorAll('input, select');
  for (var i = 0; i < elements.length; i++) {
    let element = elements[i] as HTMLInputElement & {__il?: any};
    if (element.__il) {
      element.__il.className = element.value ? "ins_secret" : "ins_novalue";
      element.__il.innerHTML = element.value || "NO VALUE";
    } else {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = "javascript:void(0)";
      li.appendChild(a);
      let span = document.createElement('span');
      span.innerHTML = GetSelectorForElement(element);
      a.appendChild(span);
      let textBox = document.createElement('div');
      let value = element.value;
      textBox.className = value ? "ins_secret" : "ins_novalue";
      textBox.innerHTML = value || "NO VALUE";
      element.__il = textBox;
      a.appendChild(textBox);
      let oriBorder = element.style.border;
      a.onmouseenter = function() {highlightForm(element)};
      a.onmouseleave = function() {recoverForm(element, oriBorder)}
      document.getElementById("ins_elemList").appendChild(li);
    }
  }
}
(function () {
  'use strict';

  var style = document.createElement('style');
  style.innerHTML = `
._instart-field-container {
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: #063553;
    border-radius: 6px 0 0 6px;
    padding: 10px 15px;
    font-family: Open Sans,sans-serif;
    font-size: 12px;
    width: 260px;
    z-index: 1020;
    max-height: 500px;
    overflow: auto;
}

._instart-field-container a {
    color: #b8bfca
}

._instart-field-container ol {
    padding: 15px 0 0 10px;
    list-style: none;
    margin-top: 5px
}

._instart-field-container ol li {
    margin-bottom: 10px;
    color: #b8bfca
}

._instart-field-container ol li a {
    margin: 0;
    width: 220px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block
}

._instart-field-container ol li a:hover {
  text-decoration: none;
}

._instart-field-container ol li a span>em {
    font-style: normal;
    text-decoration: none;
    padding: 0 10px 0 2px
}
.logo-container {
    display: block
    position: relative;
}

.logo-container .ilogo {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAkCAMAAAA0AnPTAAAAclBMVEUDNVMEmv8DM08DMU0EnP8CS3kDN1cDj+wCOlwCcbsCOVoEl/oCZKUDiuUCX5sDNVQDh98CZqcCVYoCR3IElPQDhNsBXJYCWI8CT4ECRG0En/8DgdUDfc4Cc74CP2UCPmICeMcCbrYCYqECQWgCaq8Caa3C2C+DAAABG0lEQVQ4y7XT2XKFIAwGYAgREdz33bO07/+KraBTPaNw1dzJfPMnE4F8VtIlxFWidhroBu4yrFEFuHIefcgcMYXCSDhMgBRjZiWtopT6M1iGkSn+GpysU2dUl7UbhNqo/BKBkPCHyivEvGpKDkjFAOcMxuMS8XlsR4OFHQATTbWeYgb6wAyOUS2ZyRJFE/gUqa7XhpT5TOO3NnzOn9FuYti3baL6cqw7qXvJfNBn4Ua8yBA6vIpZ8H3m2kf6tRPfpI4tZwDHH14FBA4Eo4awzwVJfiLj+2KL50YBv/2ve0pAbgls5MHviUhR726xXbJsNaq1Xh9ZrcPYHw/LKS07uyEy7Sfmeqchti4DXiSIyyzfxFncS9xIaPMf9QPULAuOuQgT1QAAAABJRU5ErkJggg==")
}

.ilogoEmpty {
  display: inline-block;
  width: 30px;
  height: 30px;
}

.logo-container .title-container {
    position: absolute;
    top: 15px;
    left: 55px;
}

.title-cookie {
    position: relative;
}

.logo-container .title {
    color: #22a5f7;
    font-size: 16px
}

.cookieTitle {
  color: #22a5f7;
  font-size: 16px;
  padding-top: 10px
}

.subtitle {
  color: #22a5f7;
  font-size: 16px;
  padding-top: 15px;
}

.logo-container .subtitle {
    color: #b8bfca
}

div.ins_secret {
  color: #fdbbbb;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

div.ins_novalue {
  color: #c3f1d2;
}
`;
  document.head.appendChild(style);
  var div = document.createElement('div');
  div.className = "_instart-field-container";
  document.body.appendChild(div);
  div.innerHTML = '<a href="https://www.instart.com" class="logo-container" title="Show detected fields"><div class="ilogo"></div><div class="title-container"><div class="title">Form and cookie control</div></div></a><div class="subtitle">Reading form fields</div><div><ol id="ins_elemList"></ol></div>';
  div.innerHTML += '<div><div><div class="title-cookie" id="showCookie"><div class="cookieTitle">Reading Cookies</div><div></div></div></div><div><ol id="ins_cookies"></ol></div>';
  document.getElementById('showCookie').onclick = function () {
    ReadCookies();
  }
  ReadInputs();
  setInterval(ReadInputs, 2000);
})();
