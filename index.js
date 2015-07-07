define(['bower_components/nn-nested-text/lib/NestedText'], function(NestedText) {

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
    var container = document.getElementById('demo');
    var styleMods = { theme: 'dark', zoom: 200, compact: true };
    var render = NestedText.renderToContainer.bind(undefined, container, styleMods);

    nestedTextDoc.addListener('change', render);
    render(nestedTextDoc);

    // todo resolve platform for keymap

});
