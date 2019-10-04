function GetSelectorForElement(el) {
    var queryParts = [];
    var curElement = el;
    while (curElement && curElement.parentNode) {
        if (curElement.id) {
            queryParts.unshift("#" + curElement.id);
            break;
        }
        else {
            if (curElement.ownerDocument && (curElement === curElement.ownerDocument.documentElement || curElement === curElement.ownerDocument.body)) {
                queryParts.unshift(curElement.tagName.toLowerCase());
            }
            else {
                var tagName = curElement.tagName.toLowerCase();
                var siblings = curElement.parentNode.children;
                var i = 0;
                for (; i < siblings.length; i++) {
                    if (curElement === siblings[i]) {
                        break;
                    }
                }
                queryParts.unshift(tagName + ":nth-child(" + (i + 1) + ")");
            }
            curElement = curElement.parentElement;
        }
    }
    return queryParts.join(' > ');
}
function highlightForm(el) {
    el.style.border = '2px solid #22a5f7';
}
function recoverForm(el, ori) {
    el.style.border = ori;
}
function ReadCookies() {
    var cookies = document.cookie;
    var coolist = cookies.split(' ');
    if (document.getElementById('ins_cookies').innerHTML !== '') {
        document.getElementById('ins_cookies').innerHTML = '';
    }
    else {
        for (var _i = 0, coolist_1 = coolist; _i < coolist_1.length; _i++) {
            var cookie = coolist_1[_i];
            var content = cookie.split('=');
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
    var _loop_1 = function () {
        var element = elements[i];
        if (element.__il) {
            element.__il.className = element.value ? "ins_secret" : "ins_novalue";
            element.__il.innerHTML = element.value || "NO VALUE";
        }
        else {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = "javascript:void(0)";
            li.appendChild(a);
            var span = document.createElement('span');
            span.innerHTML = GetSelectorForElement(element);
            a.appendChild(span);
            var textBox = document.createElement('div');
            var value = element.value;
            textBox.className = value ? "ins_secret" : "ins_novalue";
            textBox.innerHTML = value || "NO VALUE";
            element.__il = textBox;
            a.appendChild(textBox);
            var oriBorder_1 = element.style.border;
            a.onmouseenter = function () { highlightForm(element); };
            a.onmouseleave = function () { recoverForm(element, oriBorder_1); };
            document.getElementById("ins_elemList").appendChild(li);
        }
    };
    for (var i = 0; i < elements.length; i++) {
        _loop_1();
    }
}
(function () {
    'use strict';
    var style = document.createElement('style');
    style.innerHTML = "\n._instart-field-container {\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    background-color: #063553;\n    border-radius: 6px 0 0 6px;\n    padding: 10px 15px;\n    font-family: Open Sans,sans-serif;\n    font-size: 12px;\n    width: 260px;\n    z-index: 1020;\n    max-height: 500px;\n    overflow: auto;\n}\n\n._instart-field-container a {\n    color: #b8bfca\n}\n\n._instart-field-container ol {\n    padding: 15px 0 0 10px;\n    list-style: none;\n    margin-top: 5px\n}\n\n._instart-field-container ol li {\n    margin-bottom: 10px;\n    color: #b8bfca\n}\n\n._instart-field-container ol li a {\n    margin: 0;\n    width: 220px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    display: block\n}\n\n._instart-field-container ol li a:hover {\n  text-decoration: none;\n}\n\n._instart-field-container ol li a span>em {\n    font-style: normal;\n    text-decoration: none;\n    padding: 0 10px 0 2px\n}\n.logo-container {\n    display: block\n    position: relative;\n}\n\n.logo-container .ilogo {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAkCAMAAAA0AnPTAAAAclBMVEUDNVMEmv8DM08DMU0EnP8CS3kDN1cDj+wCOlwCcbsCOVoEl/oCZKUDiuUCX5sDNVQDh98CZqcCVYoCR3IElPQDhNsBXJYCWI8CT4ECRG0En/8DgdUDfc4Cc74CP2UCPmICeMcCbrYCYqECQWgCaq8Caa3C2C+DAAABG0lEQVQ4y7XT2XKFIAwGYAgREdz33bO07/+KraBTPaNw1dzJfPMnE4F8VtIlxFWidhroBu4yrFEFuHIefcgcMYXCSDhMgBRjZiWtopT6M1iGkSn+GpysU2dUl7UbhNqo/BKBkPCHyivEvGpKDkjFAOcMxuMS8XlsR4OFHQATTbWeYgb6wAyOUS2ZyRJFE/gUqa7XhpT5TOO3NnzOn9FuYti3baL6cqw7qXvJfNBn4Ua8yBA6vIpZ8H3m2kf6tRPfpI4tZwDHH14FBA4Eo4awzwVJfiLj+2KL50YBv/2ve0pAbgls5MHviUhR726xXbJsNaq1Xh9ZrcPYHw/LKS07uyEy7Sfmeqchti4DXiSIyyzfxFncS9xIaPMf9QPULAuOuQgT1QAAAABJRU5ErkJggg==\")\n}\n\n.ilogoEmpty {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n}\n\n.logo-container .title-container {\n    position: absolute;\n    top: 15px;\n    left: 55px;\n}\n\n.title-cookie {\n    position: relative;\n}\n\n.logo-container .title {\n    color: #22a5f7;\n    font-size: 16px\n}\n\n.cookieTitle {\n  color: #22a5f7;\n  font-size: 16px;\n  padding-top: 10px\n}\n\n.subtitle {\n  color: #22a5f7;\n  font-size: 16px;\n  padding-top: 15px;\n}\n\n.logo-container .subtitle {\n    color: #b8bfca\n}\n\ndiv.ins_secret {\n  color: #fdbbbb;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\ndiv.ins_novalue {\n  color: #c3f1d2;\n}\n";
    document.head.appendChild(style);
    var div = document.createElement('div');
    div.className = "_instart-field-container";
    document.body.appendChild(div);
    div.innerHTML = '<a href="https://www.instart.com" class="logo-container" title="Show detected fields"><div class="ilogo"></div><div class="title-container"><div class="title">Form and cookie control</div></div></a><div class="subtitle">Reading form fields</div><div><ol id="ins_elemList"></ol></div>';
    div.innerHTML += '<div><div><div class="title-cookie" id="showCookie"><div class="cookieTitle">Reading Cookies</div><div></div></div></div><div><ol id="ins_cookies"></ol></div>';
    document.getElementById('showCookie').onclick = function () {
        ReadCookies();
    };
    ReadInputs();
    setInterval(ReadInputs, 2000);
})();
