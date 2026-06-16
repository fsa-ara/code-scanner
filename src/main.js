import { CodeScanner } from './CodeScanner';

const cs = new CodeScanner('CodeScanner');

const main = document.getElementById('main');
const result = document.getElementById('result');
const code = result.querySelector('p');
const list = document.getElementById('list');
const scnr = document.getElementById('CodeScanner');
const btnStrt = document.getElementById('start');
const btnRstrt = document.getElementById('restart');
const btnAdd = document.getElementById('add');
const btnDelete = document.getElementById('delete');
const btnShow = document.getElementById('show');
const dialog = document.getElementById('codeList');
const codeList = dialog.querySelector('ul');
const btnCloseDialog = document.getElementById('closeList');

let resCode = [];

const restart = () => {
    result.classList.replace('visible', 'invisible');
    scnr.classList.replace('invisible', 'visible');

    resCode.pop();

    cs.start();
};

const addCode = () => {
    result.classList.replace('visible', 'invisible');
    scnr.classList.replace('invisible', 'visible');

    cs.start();
};

const deleteAll = () => {
    if (confirm('Are you sure?')) resCode = [];
};

const showList = () => {
    codeList.replaceChildren();
    resCode.forEach((v, i, a) => {
        const li = document.createElement('li');
        li.textContent = `id ${i}: ${v}`;
        codeList.append(li);
    });
    dialog.showModal();
};

const closeList = () => dialog.close();

btnStrt.addEventListener('click', () => {
    main.classList.replace('visible', 'invisible');
    scnr.classList.replace('invisible', 'visible');

    cs.start();
    cs.cancel();

    cs.listener('onScan', (e) => {
        scnr.classList.replace('visible', 'invisible');
        cs.stop();

        const codeExists = resCode.includes(e.detail.code);

        if (!codeExists) resCode.push(e.detail.code);

        result.classList.replace('invisible', 'visible');
        code.textContent = !codeExists
            ? resCode[resCode.length - 1]
            : 'Code exists!';
    });

    cs.listener('onReturn', () => {
        main.classList.replace('invisible', 'visible');
        scnr.classList.replace('visible', 'invisible');

        cs.stop();
    });
});

btnRstrt.addEventListener('click', restart);
btnAdd.addEventListener('click', addCode);
btnDelete.addEventListener('click', deleteAll);
btnShow.addEventListener('click', showList);
btnCloseDialog.addEventListener('click', closeList);
