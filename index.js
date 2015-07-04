define(['pkg/NestedTextEditor/lib/NestedTextEditor'], function(NestedTextEditor) {

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

    NestedTextEditor.init(docData, document.getElementById('demo'), { theme: 'dark', zoom: 200 });

    // todo platform check

});
