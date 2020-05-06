'use strict';
const description = document.getElementById('description');
const input = document.getElementById('figure');
const button = document.getElementById('button');
const errorDivided = document.getElementById('num-error');

var questionLength;
var startFlg = false;
var ans;
var turn;

button.onclick = () => 
{
    removeAllChildren(errorDivided);
    if (!startFlg)
    {
        questionLength = parseInt(input.value);
        if (isNaN(questionLength) || questionLength < 1)
        {
            addChildWithText(errorDivided, '問題数は1以上の整数にしてください');
            errorDivided.firstChild.className = 'error';
        }
        else
        {
            gameProceed();
        }
    }
    else
    {
        if (input.value == ans)
        {
            gameProceed();
        }
        else
        {
            addChildWithText(errorDivided, '答えが間違っています。');
            errorDivided.firstChild.className = 'error';
        }
    }
    
}

function gameProceed()
{
    input.value = '';
    
    if (!startFlg)
    {
        button.innerText = 'GO';
        input.value = '';
        startFlg = true;
        turn = 0;
    }

    turn++;
    if (turn <= questionLength)
    {
        var x1 = getRandomInt(1, 9);
        var x2 = getRandomInt(1, 9);
        ans = x1 + x2;
        description.innerText = x1 + ' + ' + x2 + ' = ?';
    
    }
    else
    {
        removeAllChildren(errorDivided);
        addChildWithText(errorDivided, 'クリア!!');
        description.innerText = '問題数を入力して「スタート」をクリック';
        startFlg = false;
        button.innerText = 'スタート';
    
    }
    
}

/**
 * エレメントの子要素を全て削除
 * @param {HTMLElement} element 
 */
function removeAllChildren(element)
{
    while (element.firstChild)
    {
        element.removeChild(element.firstChild);
    }
}

/**
 * エレメントの子要素としてテキストを入れたpタグを追加
 * @param {HTMLElement} parent 
 * @param {String} text 
 */
function addChildWithText(parent, text)
{
    var child = document.createElement('p');
    child.innerText = text;
    parent.appendChild(child);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }