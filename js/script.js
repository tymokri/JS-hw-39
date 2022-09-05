'use strict';

( () => {
    const cols = 10;
    const rows = 10;
    const parent = document.querySelector('div');

    const createTable = (parent, cols, rows) => {
        let table = document.createElement('table');

        for(let i = 0; i < rows;  i += 1) {
            let tr = document.createElement('tr');

            for(let j = 0; j < cols;  j += 1) {
                let td = document.createElement('td');

                tr.appendChild(td);

                td.innerText = '' + (10 * i + 1 + j);
            }
            table.appendChild(tr);
        }
        parent.appendChild(table);
    }
    createTable(parent, cols, rows);

} ) ();