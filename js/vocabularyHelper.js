(function () {
    'use strict';

    $(document).ready(function() {

        // Set the list initially to 'a'
        setWordList("a");

        $('#aWordsLink').click(function () {
            setWordList("a");
        });

        $('#bWordsLink').click(function () {
            setWordList("b");
        });

        $('#cWordsLink').click(function () {
            setWordList("c");
        });

        $('#dWordsLink').click(function () {
            setWordList("d");
        });

        $('#eWordsLink').click(function () {
            setWordList("e");
        });

        $('#gWordsLink').click(function () {
            setWordList("g");
        });

        $('#hWordsLink').click(function () {
            setWordList("h");
        });

        $('#iWordsLink').click(function () {
            setWordList("i");
        });

        $('#jWordsLink').click(function () {
            setWordList("j");
        });

        $('#kWordsLink').click(function () {
            setWordList("k");
        });

        $('#lWordsLink').click(function () {
            setWordList("l");
        });

        $('#mWordsLink').click(function () {
            setWordList("m");
        });

        $('#nWordsLink').click(function () {
            setWordList("n");
        });

        $('#oWordsLink').click(function () {
            setWordList("o");
        });

        $('#pWordsLink').click(function () {
            setWordList("p");
        });

        $('#rWordsLink').click(function () {
            setWordList("r");
        });

        $('#sWordsLink').click(function () {
            setWordList("s");
        });

        $('#tWordsLink').click(function () {
            setWordList("t");
        });

        $('#uWordsLink').click(function () {
            setWordList("u");
        });

        $('#vWordsLink').click(function () {
            setWordList("v");
        });

        $('#wWordsLink').click(function () {
            setWordList("w");
        });

        $('#yWordsLink').click(function () {
            setWordList("y");
        });
    });

    var a_words = [];
    var b_words = [];
    var c_words = [];
    var d_words = [];
    var e_words = [];
    var g_words = [];
    var h_words = [];
    var i_words = [];
    var j_words = [];
    var k_words = [];
    var l_words = [];
    var m_words = [];
    var n_words = [];
    var o_words = [];
    var p_words = [];
    var r_words = [];
    var s_words = [];
    var t_words = [];
    var u_words = [];
    var v_words = [];
    var w_words = [];
    var y_words = [];

    function setWordList(letterArrayToLoad) {

        $('#vocabTable').empty(); // Remove previous content
        $('#vocabTable').append("Loading....");

        switch(letterArrayToLoad) {
            case "a":
                if (a_words.length === 0) {
                    loadLetterArray('a');
                }
                else {
                    // Array is already populated
                    loadHtml(a_words);
                }
                break;
            case "b":
                if (b_words.length === 0) {
                    loadLetterArray('b');
                }
                else {
                    // Array is already populated
                    loadHtml(b_words);
                }
                break;
            case "c":
                if (c_words.length === 0) {
                    loadLetterArray('c');
                }
                else {
                    // Array is already populated
                    loadHtml(c_words);
                }
                break;
            case "d":
                if (d_words.length === 0) {
                    loadLetterArray('d');
                }
                else {
                    // Array is already populated
                    loadHtml(d_words);
                }
                break;
            case "e":
                if (e_words.length === 0) {
                    loadLetterArray('e');
                }
                else {
                    // Array is already populated
                    loadHtml(e_words);
                }
                break;
            case "g":
                if (g_words.length === 0) {
                    loadLetterArray('g');
                }
                else {
                    // Array is already populated
                    loadHtml(g_words);
                }
                break;
            case "h":
                if (h_words.length === 0) {
                    loadLetterArray('h');
                }
                else {
                    // Array is already populated
                    loadHtml(h_words);
                }
                break;
            case "i":
                if (i_words.length === 0) {
                    loadLetterArray('i');
                }
                else {
                    // Array is already populated
                    loadHtml(i_words);
                }
                break;
            case "j":
                if (j_words.length === 0) {
                    loadLetterArray('j');
                }
                else {
                    // Array is already populated
                    loadHtml(j_words);
                }
                break;
            case "k":
                if (k_words.length === 0) {
                    loadLetterArray('k');
                }
                else {
                    // Array is already populated
                    loadHtml(k_words);
                }
                break;
            case "l":
                if (l_words.length === 0) {
                    loadLetterArray('l');
                }
                else {
                    // Array is already populated
                    loadHtml(l_words);
                }
                break;
            case "m":
                if (m_words.length === 0) {
                    loadLetterArray('m');
                }
                else {
                    // Array is already populated
                    loadHtml(m_words);
                }
                break;
            case "n":
                if (n_words.length === 0) {
                    loadLetterArray('n');
                }
                else {
                    // Array is already populated
                    loadHtml(n_words);
                }
                break;
            case "o":
                if (o_words.length === 0) {
                    loadLetterArray('o');
                }
                else {
                    // Array is already populated
                    loadHtml(o_words);
                }
                break;
            case "p":
                if (p_words.length === 0) {
                    loadLetterArray('p');
                }
                else {
                    // Array is already populated
                    loadHtml(p_words);
                }
                break;
            case "r":
                if (r_words.length === 0) {
                    loadLetterArray('r');
                }
                else {
                    // Array is already populated
                    loadHtml(r_words);
                }
                break;
            case "s":
                if (s_words.length === 0) {
                    loadLetterArray('s');
                }
                else {
                    // Array is already populated
                    loadHtml(s_words);
                }
                break;
            case "t":
                if (t_words.length === 0) {
                    loadLetterArray('t');
                }
                else {
                    // Array is already populated
                    loadHtml(t_words);
                }
                break;
            case "u":
                if (u_words.length === 0) {
                    loadLetterArray('u');
                }
                else {
                    // Array is already populated
                    loadHtml(u_words);
                }
                break;
            case "v":
                if (v_words.length === 0) {
                    loadLetterArray('v');
                }
                else {
                    // Array is already populated
                    loadHtml(v_words);
                }
                break;
            case "w":
                if (w_words.length === 0) {
                    loadLetterArray('w');
                }
                else {
                    // Array is already populated
                    loadHtml(w_words);
                }
                break;
            case "y":
                if (y_words.length === 0) {
                    loadLetterArray('y');
                }
                else {
                    // Array is already populated
                    loadHtml(y_words);
                }
                break;
        }

    }

    function loadHtml(arrayToLoad) {
        var tableHtml = '<table class="table table-striped table-bordered">' +
            '<thead>' +
            '<td><strong>Word</strong></td>' +
            '<td><strong>Pronounciation</strong></td>' +
            '<td><strong>Definition</strong></td>' +
            '<td><strong>Mando&#39;a Script</strong></td>' +
            '</thead>' +
            '<tbody>';
        var content = generateTable(arrayToLoad);

        tableHtml = tableHtml + content + '</tbody></table>';
        $('#vocabTable').empty(); // Remove previous content
        $('#vocabTable').append(tableHtml);
    }

    function generateTable(wordArray) {
        var content = '';

        for (var i = 0; i < wordArray.length; i++) {
            content += '<tr>' +
                       '<td class="col-md-2 col-sm-1">' + wordArray[i].word + '</td>' +
                       '<td class="col-md-2 col-sm-1">' + wordArray[i].pronunciation + '</td>' +
                       '<td class="col-md-2 col-sm-1">' + wordArray[i].definition + '</td>' +
                       '<td class="script col-md-2 col-sm-1">' + wordArray[i].word + '</td>' +
                       '</tr>';
        }

        return content;
    }
    
    function loadLetterArray(letterToLoad) {
        var jsonFile = "data/vocab/" + letterToLoad + "_vocab.json";
        $.getJSON(jsonFile, function (data) {
            switch (letterToLoad) {
                case 'a':
                    a_words = data.items;
                    loadHtml(a_words);
                    break;
                case 'b':
                    b_words = data.items;
                    loadHtml(b_words);
                    break;
                case 'c':
                    c_words = data.items;
                    loadHtml(c_words);
                    break;
                case 'd':
                    d_words = data.items;
                    loadHtml(d_words);
                    break;
                case 'e':
                    e_words = data.items;
                    loadHtml(e_words);
                    break;
                case 'g':
                    g_words = data.items;
                    loadHtml(g_words);
                    break;
                case 'h':
                    h_words = data.items;
                    loadHtml(h_words);
                    break;
                case 'i':
                    i_words = data.items;
                    loadHtml(i_words);
                    break;
                case 'j':
                    j_words = data.items;
                    loadHtml(j_words);
                    break;
                case 'k':
                    k_words = data.items;
                    loadHtml(k_words);
                    break;
                case 'l':
                    l_words = data.items;
                    loadHtml(l_words);
                    break;
                case 'm':
                    m_words = data.items;
                    loadHtml(m_words);
                    break;
                case 'n':
                    n_words = data.items;
                    loadHtml(n_words);
                    break;
                case 'o':
                    o_words = data.items;
                    loadHtml(o_words);
                    break;
                case 'p':
                    p_words = data.items;
                    loadHtml(p_words);
                    break;
                case 'r':
                    r_words = data.items;
                    loadHtml(r_words);
                    break;
                case 's':
                    s_words = data.items;
                    loadHtml(s_words);
                    break;
                case 't':
                    t_words = data.items;
                    loadHtml(t_words);
                    break;
                case 'u':
                    u_words = data.items;
                    loadHtml(u_words);
                    break;
                case 'v':
                    v_words = data.items;
                    loadHtml(v_words);
                    break;
                case 'w':
                    w_words = data.items;
                    loadHtml(w_words);
                    break;
                case 'y':
                    y_words = data.items;
                    loadHtml(y_words);
                    break;
            };
        });
    }
})();