define(['bower_components/nn-nested-text/lib/NestedText'], function(NestedText) {

    function node(text, nested) {
        return { data: { text: text }, nested: nested ? nested : [] };
    }

    var docData = node('Деревья', [
        node('Хвойные', [
            node('Сосновые', [
                node('Сосна'),
                node('Ель'),
                node('Кедр'),
                node('Лиственница'),
                node('Пихта')
            ]),
            node('Кипарисовые', [
                node('Кипарис'),
                node('Можжевельник'),
                node('Секвойя')

            ])
        ]),
        node('Плодовые', [
            node('Розовые', [
                node('Яблоня'),
                node('Груша'),
                node('Айва'),
                node('Слива', [
                    node('Слива домашняя'),
                    node('Алыча'),
                    node('Вишня'),
                    node('Черешня'),
                    node('Абрикос'),
                    node('Персик'),
                    node('Миндаль')
                ])
            ])
        ])
    ]);

    var nestedTextDoc = NestedText.createDocument(docData);
    var editorBox = document.querySelector('.demo__editor-box');
    var styleMods = { size: '14', theme: 'dark' };
    var render = NestedText.renderToContainer.bind(undefined, editorBox, styleMods);

    nestedTextDoc.addListener('change', render);
    render(nestedTextDoc);

    editorBox.parentElement.addEventListener('click', function(e) {
        editorBox.firstElementChild.focus();
    });

    // страница прокрутится, когда редактор сфокусирует узел, возвращаем прокрутку обратно
    setTimeout(function() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }, 100);

    if (navigator.platform.indexOf('Mac') != -1) {
        document.body.className = 'mac';
    }

});
