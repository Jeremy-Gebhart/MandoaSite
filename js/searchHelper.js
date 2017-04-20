(function () {
    'use strict';

    $(document).ready(function() {

        $('#searchResults').click(function () {
            searchForEnglishWord($('#searchText').val());
        });
    });

    var a_words = [];
    var b_words = [];
    var c_words = [];
    var d_words = [];
    var e_words = [];
    var f_words = [];
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
    var q_words = [];
    var r_words = [];
    var s_words = [];
    var t_words = [];
    var u_words = [];
    var v_words = [];
    var w_words = [];
    var x_words = [];
    var y_words = [];

    function searchForEnglishWord(englishWord) {
        var firstLetter = englishWord.charAt(0);
        var foundWord = "";

        switch(firstLetter) {
            case 'a':
                if (a_words.length === 0) {
                    loadLetterArray('a');
                }
                foundWord = searchForWord(a_words, englishWord);
                break;
            case 'b':
                if (b_words.length === 0) {
                    loadLetterArray('b');
                }
                foundWord = searchForWord(b_words, englishWord);
                break;
            case 'c':
                if (c_words.length === 0) {
                    loadLetterArray('c');
                }
                foundWord = searchForWord(c_words, englishWord);
                break;
            case 'd':
                if (d_words.length === 0) {
                    loadLetterArray('d');
                }
                foundWord = searchForWord(d_words, englishWord);
                break;
            case 'e':
                if (e_words.length === 0) {
                    loadLetterArray('e');
                }
                foundWord = searchForWord(e_words, englishWord);
                break;
            case 'f':
                if (f_words.length === 0) {
                    loadLetterArray('f');
                }
                foundWord = searchForWord(f_words, englishWord);
                break;
            case 'g':
                if (g_words.length === 0) {
                    loadLetterArray('g');
                }
                foundWord = searchForWord(g_words, englishWord);
                break;
            case 'h':
                if (h_words.length === 0) {
                    loadLetterArray('h');
                }
                foundWord = searchForWord(h_words, englishWord);
                break;
            case 'i':
                if (i_words.length === 0) {
                    loadLetterArray('i');
                }
                foundWord = searchForWord(i_words, englishWord);
                break;
            case 'j':
                if (j_words.length === 0) {
                    loadLetterArray('j');
                }
                foundWord = searchForWord(j_words, englishWord);
                break;
            case 'k':
                if (k_words.length === 0) {
                    loadLetterArray('k');
                }
                foundWord = searchForWord(k_words, englishWord);
                break;
            case 'l':
                if (l_words.length === 0) {
                    loadLetterArray('l');
                }
                foundWord = searchForWord(l_words, englishWord);
                break;
            case 'm':
                if (m_words.length === 0) {
                    loadLetterArray('m');
                }
                foundWord = searchForWord(m_words, englishWord);
                break;
            case 'n':
                if (n_words.length === 0) {
                    loadLetterArray('n');
                }
                foundWord = searchForWord(n_words, englishWord);
                break;
            case 'o':
                if (o_words.length === 0) {
                    loadLetterArray('o');
                }
                foundWord = searchForWord(o_words, englishWord);
                break;
            case 'p':
                if (p_words.length === 0) {
                    loadLetterArray('p');
                }
                foundWord = searchForWord(p_words, englishWord);
                break;
            case 'q':
                if (q_words.length === 0) {
                    loadLetterArray('q');
                }
                foundWord = searchForWord(q_words, englishWord);
                break;
            case 'r':
                if (r_words.length === 0) {
                    loadLetterArray('r');
                }
                foundWord = searchForWord(r_words, englishWord);
                break;
            case 's':
                if (s_words.length === 0) {
                    loadLetterArray('s');
                }
                foundWord = searchForWord(s_words, englishWord);
                break;
            case 't':
                if (t_words.length === 0) {
                    loadLetterArray('t');
                }
                foundWord = searchForWord(t_words, englishWord);
                break;
            case 'u':
                if (u_words.length === 0) {
                    loadLetterArray('u');
                }
                foundWord = searchForWord(u_words, englishWord);
                break;
            case 'v':
                if (v_words.length === 0) {
                    loadLetterArray('v');
                }
                foundWord = searchForWord(v_words, englishWord);
                break;
            case 'w':
                if (w_words.length === 0) {
                    loadLetterArray('w');
                }
                foundWord = searchForWord(w_words, englishWord);
                break;
            case 'x':
                if (x_words.length === 0) {
                    loadLetterArray('x');
                }
                foundWord = searchForWord(x_words, englishWord);
                break;
            case 'y':
                if (y_words.length === 0) {
                    loadLetterArray('y');
                }
                foundWord = searchForWord(y_words, englishWord);
                break;
        }
        if (foundWord) {
            loadHtml(foundWord);
        }

    }

    function searchForWord(list, word) {

        var foundWord = [];

        for (var i = 0; i < list.length; i++) {
            if (list[i].indexOf(word)) {
                foundWord.push(list[i]);
                break;
            }
        }

        return foundWord;
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
        var jsonFile = "data/search/" + letterToLoad + "_words.json";
        $.ajax({
            type: "GET",
            url: jsonFile,
            dataType: 'json',
            success: function (data) {
                alert(data);
                switch (letterToLoad) {
                    case 'a':
                        a_words = data.items;
                        break;
                    case 'b':
                        b_words = data.items;
                        break;
                    case 'c':
                        c_words = data.items;
                        break;
                    case 'd':
                        d_words = data.items;
                        break;
                    case 'e':
                        e_words = data.items;
                        break;
                    case 'f':
                        f_words = data.items;
                        break
                    case 'g':
                        g_words = data.items;
                        break;
                    case 'h':
                        h_words = data.items;
                        break;
                    case 'i':
                        i_words = data.items;
                        break;
                    case 'j':
                        j_words = data.items;
                        break;
                    case 'k':
                        k_words = data.items;
                        break;
                    case 'l':
                        l_words = data.items;
                        break;
                    case 'm':
                        m_words = data.items;
                        break;
                    case 'n':
                        n_words = data.items;
                        break;
                    case 'o':
                        o_words = data.items;
                        break;
                    case 'p':
                        p_words = data.items;
                        break;
                    case 'q':
                        q_words = data.items;
                        break;
                    case 'r':
                        r_words = data.items;
                        break;
                    case 's':
                        s_words = data.items;
                        break;
                    case 't':
                        t_words = data.items;
                        break;
                    case 'u':
                        u_words = data.items;
                        break;
                    case 'v':
                        v_words = data.items;
                        break;
                    case 'w':
                        w_words = data.items;
                        break;
                    case 'y':
                        y_words = data.items;
                        break;
                };
            }, // End of success handler
            error: function (data) {
                alert(data.responseText);
            }
        });
    }

})();