define([
    'bower_components/nn-nested-text/lib/NestedText',
    'bower_components/require-css/css!bower_components/nn-nested-node/lib/NestedNodeStyle/NestedNodeStyle'
], function(NestedText) {

    function node(text, nested) {
        return { data: { text: text }, nested: nested ? nested : [] };
    }

    var docData = node('Хвойные', [
        node('Сосновые', [
            node('Ель'),
            node('Сосна'),
            node('Кедр'),
            node('Лиственница'),
            node('Пихта'),
            node('Тсуга')
        ]),
        node('Кипарисовые', [
            node('Можжевельник'),
            node('Секвойя'),
            node('Кипарис'),
            node('Туя')
        ])
    ]);

    var nestedTextDoc = NestedText.createDocument(docData);
    var editorBox = document.querySelector('.demo__editor-box');
    var styleMods = { size: '14', theme: 'dark'};
    var render = NestedText.renderToContainer.bind(undefined, editorBox, styleMods);

    nestedTextDoc.addListener('change', render);
    render(nestedTextDoc);

    editorBox.parentElement.addEventListener('click', function(e) {
        editorBox.firstElementChild.focus();
    });

    // todo resolve platform for keymap

});
