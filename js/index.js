    let valueInput = document.querySelector(`#value`);
    valueInput.addEventListener(`input`, function () {
        valueInput.value = valueInput.value.toLowerCase();
    });

    let resultsNode = document.querySelector(`#results`);
    let readedInput = document.querySelector(`#readed`);
    let dtheme = document.querySelector(`#dtheme`);
    let kataGENNode = document.querySelector(`#kataGEN`);
    let cryptcodeNode = document.querySelector(`#cryptcode`);

    let switchInput = document.querySelector(`#theme`);
    switchInput.addEventListener(`click`, function () {
        if (switchInput.checked) {
            dtheme.classList.toggle(`dtheme`);
            kataGENNode.classList.toggle(`dtheme`);
        } else {
            dtheme.classList.remove(`dtheme`);
            kataGENNode.classList.remove(`dtheme`);
        };
    });

    let btnNode = document.querySelector(`#btn`);
    btnNode.addEventListener(`click`, function () {
        let crypt = valueInput.value;
        let link = ` <a href="">kataGEN</a>`;
        crypt = crypt.replaceAll(`kataGEN`, `Твой ключ: `);
        crypt = crypt.replaceAll(`sdaj032nksz..z.k32+!dfam++31--yeaeas`, `Сообщение: Да это будущий KataGEN`);
        crypt = crypt.replaceAll(`а`, `f`);
        crypt = crypt.replaceAll(`б`, `d`);
        crypt = crypt.replaceAll(`в`, `s`);
        crypt = crypt.replaceAll(`г`, `z`);
        crypt = crypt.replaceAll(`д`, `y`);
        crypt = crypt.replaceAll(`е`, `u`);
        crypt = crypt.replaceAll(`ё`, `t`);
        crypt = crypt.replaceAll(`ж`, `k`);
        crypt = crypt.replaceAll(`з`, `p`);
        crypt = crypt.replaceAll(`и`, `m`);
        crypt = crypt.replaceAll(`й`, `a`);
        crypt = crypt.replaceAll(`к`, `b`);
        crypt = crypt.replaceAll(`л`, `q`);
        crypt = crypt.replaceAll(`м`, `w`);
        crypt = crypt.replaceAll(`н`, `e`);
        crypt = crypt.replaceAll(`о`, `i`);
        crypt = crypt.replaceAll(`п`, `o`);
        crypt = crypt.replaceAll(`р`, `l`);
        crypt = crypt.replaceAll(`с`, `n`);
        crypt = crypt.replaceAll(`т`, `h`);
        crypt = crypt.replaceAll(`у`, `g`);
        crypt = crypt.replaceAll(`ф`, `j`);
        crypt = crypt.replaceAll(`х`, `t`);
        crypt = crypt.replaceAll(` `, `v`);
        resultsNode.innerHTML = crypt + link;
        valueInput.value = ``;
        if (crypt.includes(`Тsiavbqюч:v`) && readedInput.checked) {
            let key = ` <a href="key.txt" download="key.txt">download key</a>
    `;
            resultsNode.innerHTML += key;
        };
    });

    let twobtnNode = document.querySelector(`#twobtn`);
    twobtnNode.addEventListener(`click`, function () {
        let link = ` <a href="">kataGEN</a>`
        let crypt = valueInput.value;
        crypt = crypt.replaceAll(`v`, ` `);
        crypt = crypt.replaceAll(`t`, `х`);
        crypt = crypt.replaceAll(`j`, `ф`);
        crypt = crypt.replaceAll(`g`, `у`);
        crypt = crypt.replaceAll(`h`, `т`);
        crypt = crypt.replaceAll(`n`, `с`);
        crypt = crypt.replaceAll(`l`, `р`);
        crypt = crypt.replaceAll(`o`, `п`);
        crypt = crypt.replaceAll(`i`, `о`);
        crypt = crypt.replaceAll(`e`, `н`);
        crypt = crypt.replaceAll(`w`, `м`);
        crypt = crypt.replaceAll(`q`, `л`);
        crypt = crypt.replaceAll(`b`, `к`);
        crypt = crypt.replaceAll(`a`, `й`);
        crypt = crypt.replaceAll(`m`, `и`);
        crypt = crypt.replaceAll(`p`, `з`);
        crypt = crypt.replaceAll(`k`, `ж`);
        crypt = crypt.replaceAll(`t`, `ё`);
        crypt = crypt.replaceAll(`u`, `е`);
        crypt = crypt.replaceAll(`y`, `д`);
        crypt = crypt.replaceAll(`z`, `г`);
        crypt = crypt.replaceAll(`s`, `в`);
        crypt = crypt.replaceAll(`d`, `б`);
        crypt = crypt.replaceAll(`f`, `а`);
        crypt = crypt.replaceAll(`жйхйGEN`, `${link}`);
        resultsNode.innerHTML = crypt;
        valueInput.value = ``;
    });