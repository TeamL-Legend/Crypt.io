let bagNode = document.querySelector(`#bag`);
bagNode.addEventListener(`click`, function () {
    let shopmenu = `<div class="shopmenu">
<div class="textshopmenu">
<span>Купить свои шифры: <button id="btnclose" class="btnclose"><img src="assets/close_14112.png" width="15px"></button><br><a class="shophref" href="">Условия покупки</a></span>
</div>
<div class="shopimg">
<img src="assets/123123.jpg" alt="" width="200px" height="200px">
</div>
<div class="shopbtn">
<a class="shopsucces" href="">Подтвердите покупку</a>
<input type="checkbox" class="form-check_input">
<button id="shopbtn" class="btn btn-secondary">Купить</button>
</div>
</div>
`;
    kataGENNode.innerHTML = shopmenu;
    cryptcodeNode.innerHTML = ``;
    resultsNode.innerHTML = ``;
    kataGENNode.classList.remove(`kataGEN`);
    kataGENNode.classList.remove(`animate_animated`);
    kataGENNode.classList.remove(`animate__fadeInUpBig`);
    cryptcodeNode.classList.remove(`cryptcode`);

let btncloseNode = document.querySelector(`#btnclose`);
btncloseNode.addEventListener(`click`, function () {
    kataGENNode.classList.add(`kataGEN`);
    kataGENNode.classList.add(`animate_animated`);
    kataGENNode.classList.add(`animate__fadeInUpBig`);
    cryptcodeNode.classList.add(`cryptcode`);
    resultsNode.innerHTML = `<span id="results">Криптуется только слова в нижнем регистре</span>`;
    cryptcodeNode.innerHTML = `<div id="cryptcode" class="cryptcode">
            <input id="value" type="text" class="form-control animate_animated animate__fadeInUpBig"
                placeholder="Введите то что хотите зашифровать, криптовать"><br>
            <button id="btn" class="btn btn-secondary animate_animated animate__fadeInUpBig">Криптовать</button>
            <button id="twobtn" class="btn btn-secondary animate_animated animate__fadeInUpBig">Декриптовать</button>
        </div>`;
    kataGENNode.innerHTML = `<div id="kataGEN" class="kataGEN animate_animated animate__fadeInUpBig">kataGEN</div>`;
});
});
