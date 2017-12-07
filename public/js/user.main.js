var posInt = /^\d+$/;

var num_rows = 100;

$(document).ready(function () {
    $('#navbar').on('click', '#user-game-type-select .game-type-item', userSelectGameType);

    $('#user-sidebar').on('change', '#bet_type_group_id', changeBetTypeGroup);

    pageMain();
    pageUserGame();
    pageHome();
    pageBets();
    pageFinances();

    update_close_nums();
    setInterval('update_close_nums()', 66000);

    updateGlobalClock();
    setInterval('updateGlobalClock()', 1000);

    setInterval('loadGameTypes()', 66000);
});

function userSelectGameType(e) {
    e.preventDefault();

    var url = window.location;
    var pathname = getLocation(url).pathname;

    window.location = pathname + '?game_type_id=' + $(this).attr('data-id');
}

function pageMain() {
    $('#close-num-refresh').on('click', update_close_nums);
}

function pageUserGame() {
    $('#content').on('click', '.toggle-game-group', toggleGameGroup);
}

function checkGameGroupSetting() {
    var game_groups = Cookies.get('game-groups');
    if (game_groups !== undefined) {
        game_groups = JSON.parse(game_groups);
        $.each(game_groups, function (key, value) {
            var c = value ? 'fa-minus' : 'fa-plus';
            if (value == false) {
                $('.toggle-game-group[data-id="' + key + '"]').removeClass('fa-minus').addClass('fa-plus');
                $('[data-game-group-id="' + key + '"]').addClass('hidden');
            }
        });
    }
}

function toggleGameGroup(e) {
    var game_groups = Cookies.get('game-groups');

    if (game_groups == undefined)
        game_groups = {};
    else
        game_groups = JSON.parse(game_groups);

    game_groups[$(this).data('id')] = $(this).hasClass('fa-plus');
    Cookies.set('game-groups', JSON.stringify(game_groups));
    $('[data-game-group-id="' + $(this).data('id') + '"]').toggleClass('hidden', !$(this).hasClass('fa-plus'));

    if ($(this).hasClass('fa-plus')) {
        $(this).removeClass('fa-plus').addClass('fa-minus');
    } else {
        $(this).removeClass('fa-minus').addClass('fa-plus');
    }
}

function pageHome() {
    $('#content').on('click', '#down3-tode2', d3t2_clicked);
    $('#content').on('click', '#door', door_clicked);
    $('#content').on('click', '#bulk', bulk_clicked);
    $('#content').on('change', '.input-number', betInput_change);
    $('#content').on('keyup', '.input-all', betInput_keyup);
    $('#content').on('click', 'tr[data-check-num] input', btnCheckNum);
    $('#content').on('click', '.btn-ok', btnOk_clicked);
    $('#content').on('click', '.btn-bulk-ok', btnBulkOk_clicked);
    $('#content').on('click', '.btn-delete', btnDelete_clicked);
    $('#content').on('click', '#btn-submit-bet', submitBet);
    $('#content').on('click', '#btn-clear-bet', clearBet);
    $('#content').on('click', '#btn-submit-import', submitImport);
    $('#content').on('click', '#btn-clear-import', clearImport);
    $('#content').on('click', '#copy', copy);
    $('#content').on('change', '#bill-number', loadBill);
    $('#content').on('input', '.input-0, .input-1, .input-2, .input-3, .input-4, .input-5', calcSum);

    $('#content').on('click', '.rand-num', function (e) {
        e.preventDefault();

        var num = '';
        if ($(this).data('num') == 4)
            num = Math.floor(Math.random() * 9000) + 1000;
        if ($(this).data('num') == 5)
            num = Math.floor(Math.random() * 90000) + 10000;
        if ($(this).data('num') == 6)
            num = Math.floor(Math.random() * 900000) + 100000;

        $('#bet-table .input-number').each(function () {
            if ($(this).val().length === 0) {
                $(this).val(num).trigger('keyup').trigger('change');
                return false;
            }
        });
    });
}

function calcSum() {
    var sum = 0;
    $('.input-0, .input-1, .input-2, .input-3, .input-4, .input-5').each(function (key, val) {
        num = Number($(this).val());
        sum += isNaN(num) ? 0 : num;
    });
    $('#bill-sum').html(sum);
}

function pageBets() {
    $('#content').on('click', '#btn-search-bets', filterBets);
    $('#content').on('change', '#table-format', updateTableFormat);
    $('#content').on('click', '#btn-csv-download', downloadCsv);
}

function filterBets() {
    var tbody = $('#bets-table tbody');
    var tfoot = $('#bets-table tfoot');
    var qty = 0, com = 0, sum_prize = 0, total = 0;
    var bill_id = [], number = [], payout, prize;

    if ($('#bill_id').val() == '')
        bill_id = [];
    else
        bill_id = $('#bill_id').val().replace(/ /g, '').split(',');

    if ($('#number').val() == '')
        number = [];
    else
        number = $('#number').val().replace(/ /g, '').split(',');

    payout = $('#payout').val();
    prize = $('#prize').val();
    remark = $('#remark').val();

    tbody.find('tr').each(function () {
        row_bill_id = $(this).attr('data-bill-id');
        row_number = $(this).attr('data-number');
        row_payout = $(this).attr('data-payout');
        row_prize = $(this).attr('data-prize');
        row_remark = $(this).attr('data-remark');


        var show = true;
        if (bill_id.length != 0 && $.inArray(row_bill_id, bill_id) == -1) show = false;
        if (number.length != 0 && $.inArray(row_number, number) == -1) show = false;
        if (payout != 0 && row_payout != payout) show = false;
        if (prize != 0 && row_prize != prize) show = false;
        if (remark != '' && row_remark != remark) show = false;

        if (show) {
            $(this).show();
            qty += $(this).find('.qty').text().replace(/,/g, '') * 1;
            com += $(this).find('.com').text().replace(/,/g, '') * 1;
            sum_prize += $(this).find('.prize').text().replace(/,/g, '') * 1;
            total += $(this).find('.total').text().replace(/,/g, '') * 1;
        } else {
            $(this).hide();
        }
    });

    tfoot.find('.qty').html(n2(qty));
    tfoot.find('.com').html(n2(com));
    tfoot.find('.prize').html(n2c(sum_prize));
    tfoot.find('.total').html(n2c(total));

    tfoot.find('.prize.dark-blue').html('รอผล');
    tfoot.find('.prize.red').html('ยกเลิก');
}

function updateTableFormat() {
    if ($(this).val() == 'full') {
        $('#bets-table').removeClass('small');
        $('#footer-span').attr('colspan', 8);
    } if ($(this).val() == 'small') {
        $('#bets-table').addClass('small');
        $('#footer-span').attr('colspan', 4);
    }
}

function downloadCsv() {
    var data = [];

    $('#bets-table tbody tr:visible').each(function () {
        data += $(this).find('.c1').text() + ','
        data += $(this).find('.c2').text() + ','
        data += $(this).find('.c3').text() + ','
        data += $(this).find('.c4').text() + ','
        data += $(this).find('.c21').text() + ','
        data += $(this).find('.c5').text() + ','
        data += $(this).find('.c6').text() + ','
        data += $(this).find('.c7').text() + ','
        data += '"' + $(this).find('.c8').text() + '",'
        data += '"' + $(this).find('.c9').text() + '",'
        data += '"' + $(this).find('.c10').text() + '",'
        data += '"' + $(this).find('.c11').text() + '",'
        data += '"' + $(this).find('.c12').text() + '"\n'
    });

    $('#bets-table tfoot tr').each(function () {
        data += ',,,,,,,รวม,'
        data += '"' + $(this).find('.c1').text() + '",'
        data += '"' + $(this).find('.c2').text() + '",'
        data += '"' + $(this).find('.c3').text() + '",'
        data += '"' + $(this).find('.c4').text() + '",'
        data += '"' + $(this).find('.c5').text() + '"\n'
    });

    $('#csv-data').val(data);
    $('#csv-form').submit();
}

function pageFinances() {
    $('#content').on('click', '.load-bets', loadBets);
}

function d3t2_clicked() {
    $('.all-tr').each(function () {
        maskInput($(this));
    })
}

function door_clicked() {
    $('#special-bet-table').toggle();
}

function bulk_clicked() {
    $('#bulk-table').toggle();
}

function betInput_change() {
    maskInput($(this).closest('tr'));

    var num = $(this).val();
    if (!posInt.test(num))
        return;

    clearBetable();

    checkNum(num);
}

function btnCheckNum() {
    var num = $(this).closest('tr').data('check-num');

    if (num == '') {
        return;
    }

    clearBetable();

    checkNum(num);
}

function checkNum(num) {
    var bet_type_group_id = $('#bet_type_group').val()

    $.getJSON('/check-num/' + current_game_type_id + '/' + num + '/' + bet_type_group_id, function (data) {
        if (!data.success) {
            return;
        }

        $('#betable-number[data-clearable=1]').html(num);

        for (var i = 0; i < data.col; i++) {
            var qty = data[i];
            if (qty == 'close' || qty == undefined) {
                $('#betable-' + i).html('ปิดรับ');
            } else {
                $('#betable-' + i).html(qty == '-' ? '&#8211;' : n0(qty));
            }
        }
    });
}

function clearBetable() {
    $('#betable-number[data-clearable=1]').html('&#8211;');
    $('#betable-0').html('&#8211;');
    $('#betable-1').html('&#8211;');
    $('#betable-2').html('&#8211;');
    $('#betable-3').html('&#8211;');
    $('#betable-4').html('&#8211;');
    $('#betable-5').html('&#8211;');
}

function betInput_keyup(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key == 13) {
        var n = $('input:text').length;
        var nextIndex = $('input:text').index(this) + 1;
        if (nextIndex < n) {
            if ($('input:text')[nextIndex].getAttribute('disabled') == null) {
                $('input:text')[nextIndex].focus();
            } else {
                nextIndex++;
                if (nextIndex < n) {
                    $('input:text')[nextIndex].focus();
                }
            }
        }
    }
    auto_show_lines();
}

function btnOk_clicked(e) {
    e.preventDefault();

    var reg = /^\d+$/;
    var d_num = $('#special-num').val();
    var d_up = $('#special-up').val();
    var d_down = $('#special-down').val();
    var d_tode = $('#special-tode').val();

    if (d_up == '' && d_down == '' && d_tode == '') {
        alert('ต้องกรอก บน, ล่าง, โต๊ด อย่างน้อยหนึ่งช่อง');
        return;
    }

    if (d_num != '' && !posInt.test(d_num)) {
        alert('หมายเลข ต้องเป็นตัวเลขเท่านั้น');
        return;
    }

    if (d_up != '' && !posInt.test(d_up)) {
        alert('บน ต้องเป็นตัวเลขเท่านั้น');
        return;
    }

    if (d_down != '' && !posInt.test(d_down)) {
        alert('ล่าง ต้องเป็นตัวเลขเท่านั้น');
        return;
    }

    if (d_tode != '' && !posInt.test(d_tode)) {
        alert('โต๊ด ต้องเป็นตัวเลขเท่านั้น');
        return;
    }

    var d_len = d_num.length;
    var d_type = '';
    if (d_len == 0) {
        alert('ต้องกรอกตัวเลข (1-2 ตัว = 6 ประตู, 3 ตัว = 19 ประตู)');
        return;
    } else if (d_len == 1 || d_len == 2) {
        d_type = 19;
    } else if (d_len == 3) {
        d_type = 6;
    }

    // check duplicate digits: 123 -> 12, 13, 23
    // if (d_type == 6 && (d_num[0] == d_num[1] || d_num[0] == d_num[2] || d_num[1] == d_num[2])) {
    //     alert('เลขห้ามซ้ำกัน');
    //     return;
    // }

    var start = 1;
    var count = 0;
    for (var i = 1; i <= num_rows; i++) {
        var val = $('#input-number-row-' + i).val();
        if (val == '') {
            count++;
        } else {
            start = i + 1;
            count = 0;
        }

        if (count == d_type)
            break;
    }

    if (start + d_type - 1 > num_rows) {
        alert('ไม่มีช่องว่างติดกัน ' + d_type + ' แถว');
        return;
    }

    list = [];
    if (d_type == 6) {
        list.push(d_num[0] + d_num[1] + d_num[2]);
        list.push(d_num[0] + d_num[2] + d_num[1]);
        list.push(d_num[1] + d_num[0] + d_num[2]);
        list.push(d_num[1] + d_num[2] + d_num[0]);
        list.push(d_num[2] + d_num[0] + d_num[1]);
        list.push(d_num[2] + d_num[1] + d_num[0]);
        list = $.unique(list)
    } else if (d_type == 19) {
        for (var i = 0; i < 10; i++) {
            list.push(d_num[0] + i);
        }
        for (var i = 0; i < 10; i++) {
            if (i == d_num[0]) {
                continue;
            }

            list.push(i + d_num[0]);
        }
    }

    for (var i = start; i < start + list.length; i++) {
        var val = $('#input-number-row-' + i).val(list[i - start]);
        var val = $('#input-0-row-' + i).val(d_up);
        var val = $('#input-1-row-' + i).val(d_down);
        var val = $('#input-2-row-' + i).val(d_tode);
    }

    $('#special-num').val('');
    $('#special-up').val('');
    $('#special-down').val('');
    $('#special-tode').val('');

    $('#door').click();

    d3t2_clicked();
    auto_show_lines();
    calcSum();
}

function btnBulkOk_clicked(e) {
    e.preventDefault();

    var input = $('#bulk-row').val();

    if (input == '') {
        alert('กรุณากรอกเลข');
        return;
    }

    input = input.replace(/\n/g, ' ');
    input = input.replace(/\./g, ' ');
    input = input.replace(/,/g, ' ');
    input = input.replace(/ +(?= )/g, '');
    input = input.split(' ');

    var reg = /^\d+$/;
    var row = input.length;
    var n1 = $('#bulk-col1').val();
    var n2 = $('#bulk-col2').val();
    var n3 = $('#bulk-col3').val();

    if (n1 == '' && n2 == '' && n3 == '') {
        alert('ต้องกรอก ราคา อย่างน้อยหนึ่งช่อง');
        return;
    }

    if (n1 != '' && !posInt.test(n1)) {
        alert('ราคา ต้องเป็นตัวเลขเท่านั้น');
        return;
    }

    if (n2 != '' && !posInt.test(n2)) {
        alert('ราคา ต้องเป็นตัวเลขเท่านั้น');
        return;
    }

    if (n3 != '' && !posInt.test(n3)) {
        alert('ราคา ต้องเป็นตัวเลขเท่านั้น');
        return;
    }

    var start = 1;
    var count = 0;
    for (var i = 1; i <= num_rows; i++) {
        var val = $('#input-number-row-' + i).val();
        var val2 = $('#input-0-row-' + i).val();
        var val3 = $('#input-1-row-' + i).val();
        var val4 = $('#input-2-row-' + i).val();
        if (val == '' && val2 == '' && val3 == '' && val4 == '') {
            count++;
        } else {
            start = i + 1;
            count = 0;
        }

        if (count == row)
            break;
    }

    if (start + row - 1 > num_rows) {
        alert('ไม่มีช่องว่างติดกัน ' + row + ' แถว');
        return;
    }

    // list = [];
    // if (d_type == 6) {
    //     list.push(d_num[0] + d_num[1] + d_num[2]);
    //     list.push(d_num[0] + d_num[2] + d_num[1]);
    //     list.push(d_num[1] + d_num[0] + d_num[2]);
    //     list.push(d_num[1] + d_num[2] + d_num[0]);
    //     list.push(d_num[2] + d_num[0] + d_num[1]);
    //     list.push(d_num[2] + d_num[1] + d_num[0]);
    // } else if (d_type == 19) {
    //     for (var i = 0; i < 10; i++) {
    //         list.push(d_num[0] +  i);
    //     }
    //     for (var i = 0; i < 10; i++) {
    //         if (i == d_num[0]) {
    //             continue;
    //         }

    //         list.push(i + d_num[0]);
    //     }
    // }

    var key = 0;
    for (var i = start; i < start + row; i++) {
        $('#input-number-row-' + i).val(input[key++]);
        $('#input-0-row-' + i).val(n1);
        $('#input-1-row-' + i).val(n2);
        $('#input-2-row-' + i).val(n3);
    }

    $('#bulk-row').val('');
    $('#bulk-col1').val('');
    $('#bulk-col2').val('');
    $('#bulk-col3').val('');

    if ($('#close-bulk-ok').prop('checked') == false) {
        $('#bulk').click();
    }

    d3t2_clicked();
    auto_show_lines();
    calcSum();
}

function btnDelete_clicked(e) {
    e.preventDefault();
    clearRow($(this).closest('tr'));
}

function maskInput(tr) {
    var d3t2 = $('#down3-tode2').prop('checked');
    var val = tr.find('.input-number').val();
    var len = val == '' ? 0 : val.length;

    tr.find('.input-all').prop('disabled', false);

    if (len > 0) {
        for (var i = 0; i < 6; i++) {
            tr.find('.input-' + i).prop('disabled', true);
            if (current_bet_types[len] && current_bet_types[len][i] == 1) {
                tr.find('.input-' + i).prop('disabled', false);
            }
        }
    }

    if (len == 1) {
        tr.find('.input-2').prop('disabled', true);
    }
    if (!d3t2) {
        if (len == 2) {
            tr.find('.input-2').prop('disabled', true);
        }
        if (len == 3) {
            tr.find('.input-1').prop('disabled', true);
        }
    }

    if (current_game_type_id != 1 && len == 3) {
        tr.find('.input-1').prop('disabled', true);
    }
}

function clearRow(tr) {
    tr.find('input:not(.immutable)').val('').prop('disabled', false);
    tr.find('input:first').focus();
    auto_show_lines();
}

function submitBet() {
    if ($('#door').prop('checked')) {
        alert('ทำการปิดช่องกรอก 6 ประตู / 19 ประตู ก่อน');
        return;
    }

    if ($('#bulk').prop('checked')) {
        alert('ทำการปิดช่อง แทงเร็ว ก่อน');
        return;
    }

    var reg = /^\d+$/;
    var data = {};
    var bet_list = [];
    var send_count = 0;
    for (var i = 1; i <= num_rows; i++) {
        if (!$('#input-number-row-' + i).length) {
            continue;
        }

        var val = $('#input-number-row-' + i).val().trim();
        var len = val.length;
        if (posInt.test(val)) {
            var col1 = $('#input-0-row-' + i).val();
            var col2 = $('#input-1-row-' + i).val();
            var col3 = $('#input-2-row-' + i).val();
            var col4 = $('#input-3-row-' + i).val();
            var col5 = $('#input-4-row-' + i).val();
            var col6 = $('#input-5-row-' + i).val();

            col1 = typeof col1 === 'string' ? col1.trim() : col1;
            col2 = typeof col2 === 'string' ? col2.trim() : col2;
            col3 = typeof col3 === 'string' ? col3.trim() : col3;
            col4 = typeof col4 === 'string' ? col4.trim() : col4;
            col5 = typeof col5 === 'string' ? col5.trim() : col5;
            col6 = typeof col6 === 'string' ? col6.trim() : col6;

            if (col1 != '' || col2 != '' || col3 != '' || col4 != '' || col5 != '' || col6 != '') {
                bet_list.push({ i: i, num: val, 0: col1, 1: col2, 2: col3, 3: col4, 4: col5, 5: col6 });
                send_count++;
            }
        }
    }

    if (send_count == 0) {
        alert('ไม่มีรายการแทง กรุณาตรวจสอบข้อมูล');
        return;
    }

    freeze_all();

    data.bet_list = bet_list;
    data.payout = $('#payout').val();
    data.bet_type_group = $('#bet_type_group').val();
    data.remark = $('#remark').val();
    data.allow_dupe = $('#allow-dupe').val();

    $('#btn-submit-bet').html('กำลังประมวลผล...');
    $('#bet-table-foot').spin({ color: '#428bca', radius: 42, length: 0, width: 16 });

    $.ajax({
        type: "POST",
        url: "/store/" + current_game_type_id,
        data: data,
        success: function (data) {
            if (data.error) {
                if (data.dupe) {
                    if (confirm(data.error)) {
                        $('#allow-dupe').val(1);
                        freeze_all(false);
                        $('#btn-submit-bet').click();
                    } else {
                        freeze_all(false);
                        // $('#btn-clear-bet').click();
                    }
                } else {
                    alert(data.error);
                }
                if (data.type) {
                    freeze_all(false);
                }
            }

            if (data.type) {
                freeze_all(false);
            }

            if (data.success) {
                $('#failed-table').show();

                $('#btn-submit-import').prop('disabled', false);
                $('#btn-clear-bet').prop('disabled', false);

                update_bet_list();
            }

            if (data.error_inputs)
                renderErrorInput(data.error_inputs);
            if (data.tokens)
                renderTokens(data.tokens);

            $('#btn-submit-bet').html($('#btn-submit-bet').data('text'));
            $('#bet-table-foot').spin(false);

            if (data.member_summary) {
                renderMemberSummary(data.member_summary);
            }
        },
        error: function () {
            alert('การเชื่อมต่อผิดพลาด โปรดยืนยันการแทงอีกครั้ง');
            $('#btn-submit-bet').html($('#btn-submit-bet').data('text'));
            freeze_all(false);
            $('#bet-table-foot').spin(false);
        },
        complete: function () {
            $('#allow-dupe').val(0);
        }
    });
}

function renderErrorInput(list) {
    var tbody = $('#failed-table tbody');
    tbody.html('');

    var lines = list.lines;
    for (var line = 0; line < lines.length; line++) {
        i = lines[line];

        if (list[i]['e'] == undefined) {
            continue;
        }

        var tr = '<tr class="item">';
        tr += '<td class="ac bigger-120 n">' + list[i]['n'] + '</td>';
        for (var j = 0; j < list.col; j++) {
            tr += '<td class="ac bigger-120 col' + j + '">' + list[i][j] + '</td>';
        }
        tr += '</tr>';
        tbody.append(tr);

        var tr = '<tr class="error"><td colspan="99">';
        for (var j = 0; j < list[i]['e'].length; j++) {
            tr += '<i class="ace-icon fa fa-caret-right blue"></i> ' + list[i]['e'][j] + '<br>';
        }
        tr += '</td></tr>';
        tbody.append(tr);
    }
}

function renderTokens(tokens) {
    var reg = /^\d+$/;

    $.each(tokens, function (x, row) {
        $.each(row, function (y, col) {
            var col_name = [0, 1, 2, 3, 4, 5][y];
            var show = row[y] == 0 ? '.error' : (row[y] == 1 ? '.success' : '.pending');
            $('#input-' + col_name + '-row-' + x).parent().find(show).removeClass('hidden');
        });
    });
}

function clearBet() {
    // if (!$('#down3-tode2').prop('checked')) $('#down3-tode2').trigger('click');
    // if ($('#door').prop('checked')) $('#door').trigger('click');

    $('#payout').prop('disabled', false);
    $('#down3-tode2').prop('disabled', false);
    $('#door').prop('disabled', false);
    $('#bulk').prop('disabled', false);
    clearBetable();
    $('#bet-table input:not(.immutable)').val('');
    $('#bet-table input').prop('disabled', false);
    $('#bet-table .success, #bet-table .pending, #bet-table .error').addClass('hidden');
    $('#btn-submit-bet').prop('disabled', false);
    $('.btn-delete').show();
    $('#special-bet-table input').val('').prop('disabled', false);
    $('.btn-ok').show();
    $('#failed-table').hide();

    auto_show_lines();
    calcSum();
}

function submitImport() {
    var reg = /^\d+$/;

    var data = [];
    // var text = $.trim($('#import-text').val());
    var text = $('#import-text').val().replace(/^[ \n\x0B\f\r]+|[ \n\x0B\f\r]+$/g, '');
    var lines = text.split('\n');
    var valid = true;

    if (lines.length > num_rows) {
        alert('ข้อมูลมากเกินไป (จำกัด ' + num_rows + ' แถว)');
        return;
    }

    for (var i = 0; i < lines.length; i++) {
        var tokens = lines[i].split('\t');

        if (tokens.length <= 1 || tokens.length > 7) {
            valid = false;
            break;
        }

        // not integer OR is hypen
        var n = tokens[0] == '-' ? '' : tokens[0];
        var col0 = tokens[1] == '-' ? '' : tokens[1];
        var col1 = tokens[2] == '-' ? '' : tokens[2];
        var col2 = tokens[3] == '-' ? '' : tokens[3];
        var col3 = tokens[4] == '-' ? '' : tokens[4];
        var col4 = tokens[5] == '-' ? '' : tokens[5];
        var col5 = tokens[6] == '-' ? '' : tokens[6];

        data.push({ n: n, col0: col0, col1: col1, col2: col2, col3: col3, col4: col4, col5: col5 });
    };

    if (valid) {
        clearBet();
    } else {
        $('#import-success').hide();
        $('#import-error').show();
        return;
    }

    tmp_data = [];
    if ($('#merge-import').val() == 1) {
        $.each(data, function (key, value) {
            var found = false;
            $.each(tmp_data, function (tmp_key, tmp_value) {
                if (tmp_value['n'] == value['n']) {
                    found = true;
                    tmp_data[tmp_key]['col0'] = parseInt(tmp_data[tmp_key]['col0']) + parseInt(value['col0']);
                    tmp_data[tmp_key]['col1'] = parseInt(tmp_data[tmp_key]['col1']) + parseInt(value['col1']);
                }
            });

            if (!found) {
                tmp_data.push(value);
            }
        });

        data = tmp_data;
    }

    $.each(data, function (key, value) {
        var index = key + 1;
        if ($('#merge-import').val() == 1) {
            if (value.n == 'สูง' || value.n == 'คู่') {
                index = 1;
            } else if (value.n == 'ต่ำ' || value.n == 'คี่') {
                index = 2
            }
        }
        $('#input-number-row-' + index).val(value.n);
        $('#input-0-row-' + index).val(value.col0);
        $('#input-1-row-' + index).val(value.col1);
        $('#input-2-row-' + index).val(value.col2);
        $('#input-3-row-' + index).val(value.col3);
        $('#input-4-row-' + index).val(value.col4);
        $('#input-5-row-' + index).val(value.col5);
    });

    $('#import-text').val('');
    $('#import-success').show();
    $('#import-error').hide();
    auto_show_lines();
}

function clearImport() {
    $('#import-text').val('');
}

function copy(e) {
    e.preventDefault();

    $('#tab-import').trigger('click');

    var data = [];
    $('#failed-table .item').each(function () {
        var n = $(this).find('.n').text();

        data += n + '\t';

        for (var i = 0; i < 6; i++) {
            var v = $(this).find('.col' + i).text();
            data += v + '\t';
        }

        data += '\n';
    });

    data = data.replace(/\t\n/g, '\n');

    $('#import-text').val(data);
}

function loadBill() {
    update_bet_list($('#bill-number').val());
}

function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    /* Fix for IE parseFloat(0.55).toFixed(0) = 0; */
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function n0(num) {
    return number_format(num, 0, ".", ",");
}

function n00(num) {
    return number_format(num, 0, ".", "");
}

function n2(num) {
    return number_format(num, 2, ".", ",");
}

function n0c(num) {
    if (num < 0) {
        return negative(n0(num));
    } else if (num > 0) {
        return positive(n0(num));
    } else {
        return n0(num);
    }
}

function n2c(num) {
    if (num < 0) {
        return negative(n2(num));
    } else if (num > 0) {
        return positive(n2(num));
    } else {
        return n2(num);
    }
}

function positive(num) {
    return '<span class="positive">' + num + '<span>';
}

function negative(num) {
    return '<span class="negative">' + num + '<span>';
}

function renderMemberSummary(result) {
    $('#member-credit').html(n0(result['credit']));
    $('#member-used').html(n0c(result['used']));
    $('#member-remain').html(n0(result['remain']));

    $('#member-credit').html(n0(result['max_credit']));
    $('#member-bet').html(n0(result['bet_balance']));
    $('#member-available').html(n0(result['available']));

    $('#member-total-bet').html(n0(result['total_bet']));
    $('#member-total-com').html(n0(result['total_com']));
}

function update_close_nums(e) {
    if (e !== undefined)
        e.preventDefault();

    $('#close-num-box').html('กำลังโหลด...');
    $.getJSON('/closed-nums/' + current_game_type_id + '/' + $('#bet_type_group_id').val(), function (result) {
        if (result.success) {
            if (result.alive != true) {
                alert('มีการล็อคอินซ้อน หรือสถานะผู้ใช้งานถูกเปลี่ยน');
                window.location = '/logout';
                return;
            }
        }

        if (result.success) {
            $('#member-credit').html(n0(result['credit']));
            $('#member-used').html(n0c(result['used']));
            $('#member-remain').html(n0(result['remain']));

            $('#member-credit').html(n0(result['max_credit']));
            $('#member-bet').html(n0(result['bet_balance']));
            $('#member-available').html(n0(result['available']));

            $('#member-total-bet').html(n0(result['total_bet']));
            $('#member-total-com').html(n0(result['total_com']));

            if (result.closed == true) {
                $('#close-num-box').html('ปิดรับ');
                return;
            }

            var closed_nums = result.closed_nums;
            var count = 0;

            if (!closed_nums) {
                return;
            }

            var btg_id_lookups = [];
            $.each(result.bet_type_ids, function (key, bet_type_ids) {
                for (var i = bet_type_ids.length - 1; i >= 0; i--) {
                    btg_id_lookups[bet_type_ids[i]] = key;
                };
            });

            $('#close-num-box').empty();

            $.each(closed_nums, function (key, value) {
                var btg_id = btg_id_lookups[key];

                var title_label = '<div class="ac bolder bigger-120" data-closed-btg-id="' + btg_id + '">' + bet_types[key] + '</div>';
                if (value == 'all') {
                    $('#close-num-box').append(title_label + '<span class="label width-100" data-closed-btg-id="' + btg_id + '">ทั้งหมด</span>');
                    count++;
                }

                if ($.isArray(value) && value.length > 0) {
                    value.sort();
                    value = $.unique(value);
                    $('#close-num-box').append(title_label);
                    $.each(value, function (i, num) {
                        if (current_bet_type_group !== 'undefined') {
                            if (current_bet_type_group == 5 && num == 1) num = 'สูง'
                            if (current_bet_type_group == 5 && num == 2) num = 'ต่ำ'
                            if (current_bet_type_group == 6 && num == 3) num = 'คู่'
                            if (current_bet_type_group == 6 && num == 4) num = 'คี่'
                        }
                        $('#close-num-box').append('<span class="label" data-closed-btg-id="' + btg_id + '">' + num + '</span>');
                        count++;
                    });
                }
            });

            filterClosed();
        }
    });
}

function changeBetTypeGroup() {
    filterClosed();

    current_bet_type_group = $('#bet_type_group_id').val();
    $.get('/bet-div/' + current_bet_type_group + '?game_type_id=' + current_game_type_id).success(function (res) {
        $('#bet-div').replaceWith(res);
        $('#bet_type_group_id').val(current_bet_type_group);
    });

    update_bet_list();
}

function filterClosed() {
    current_bet_type_group = $('#bet_type_group_id').val();
    if (current_bet_type_group == 3) {
        current_bet_type_group = 1
    } else if (current_bet_type_group == 4) {
        current_bet_type_group = 2
    }
    $('[data-closed-btg-id]').hide();
    var items = $('[data-closed-btg-id="' + current_bet_type_group + '"]');
    items.show();

    $('.no-closed').remove();
    if (items.length == 0) {
        $('#close-num-box').append('<span class="no-closed">ไม่มีหมายเลขปิดรับ</span>');
    }
}

function freeze_all(action) {
    if (action == undefined) {
        action = true;
    }

    $('#payout').prop('disabled', action);
    $('#down3-tode2').prop('disabled', action);
    $('#door').prop('disabled', action);
    $('#bulk').prop('disabled', action);
    $('#bet-table input').prop('disabled', action);
    $('#btn-submit-bet').prop('disabled', action);
    $('#special-bet-table input').prop('disabled', action);
    $('#btn-submit-import').prop('disabled', action);
    $('#btn-clear-bet').prop('disabled', action);

    if (action == true) {
        $('.btn-ok').hide();
        $('.btn-delete').hide();
    } else {
        $('.btn-ok').show();
        $('.btn-delete').show();
    }
}

function auto_show_lines() {
    var this_line = 0;
    for (var i = num_rows; i >= 1; i--) {
        if ($('#input-number-row-' + i).val() != '' || $('#input-0-row-' + i).val() != '' || $('#input-1-row-' + i).val() != '' || $('#input-2-row-' + i).val() != '') {
            this_line = i;
            break;
        }
    }
    var show_to = this_line + 5;
    if (show_to > num_rows) {
        show_to = num_rows;
    }
    for (var i = 1; i <= show_to; i++) {
        $('#tr-row-' + i).show();
    }
    for (var i = show_to + 1; i <= num_rows; i++) {
        $('#tr-row-' + i).hide();
    }
}

function update_bet_list(bill_id) {
    if (bill_id == undefined) {
        bill_id = 0;
    }

    $.getJSON('/bet-list/' + current_bet_type_group + '/' + current_game_type_id + '/' + bill_id, function (data) {
        if (data.success) {
            if (data.bills.length == 0) {
                $('#bill-number').html('<option value="0">-</option>');
            } else {
                var html = '';
                var i = 0;
                $.each(data.bills, function (key, game_bill) {
                    i++;
                    var selected = (game_bill.id == bill_id) ? 'selected="selected"' : '';
                    var deleted = (game_bill.deleted_at != null) ? ' - ยกเลิกแล้ว' : '';
                    var remark = (game_bill.remark != '') ? ' - ' + game_bill.remark : '';
                    html = '<option value="' + game_bill.id + '" ' + selected + '>โพยที่ ' + i + ' - รหัส ' + game_bill.id + remark + deleted + '</option>' + html;
                });
                $('#bill-number').html(html);
            }

            $('#bill-id').text('');
            $('#bill-time').text('');
            $('#bill-payout').text('');
            $('#bill-btg-name').text('');
            $('#bill-remark').text('');
            $('#bill-sum-table-name').text('');

            if (data.bill) {
                $('#bill-id').text(data.bill.number);
                $('#bill-time').text(data.bill.time);
                $('#bill-payout').text(data.bill.payout);
                $('#bill-btg-name').text(data.bill.btg_name);
                $('#bill-remark').text(data.bill.remark);
                $('#bill-sum-table-name').text(data.sum_table_name);
            }

            if (data.brief_lines)
                renderBetList(data.brief_lines, data.payout);
            if (data.sum_lines)
                renderSummary(data.sum_lines, data.bet_cols);

            if (data.is_bundle)
                $('.bundle-col').show();
            else
                $('.bundle-col').hide();
        }
    });
}

function renderBetList(list, payout) {
    var tbody = $('#brief-table tbody');
    var line_count = [];

    var sum_bundle = 0,
        sum_qty = 0,
        sum_com = 0,
        sum_total = 0;

    tbody.html('');

    $.each(list, function (key, value) {
        if (!line_count[value.game_bill_id])
            line_count[value.game_bill_id] = 0;
        line_count[value.game_bill_id]++;
    });

    var counter = 0;
    $.each(list, function (key, value) {
        counter++;

        deleted = (value.deleted_at != null) ? 'bg-lightred' : '';
        var tr = $('<tr class="' + deleted + '">');

        // var rowspan = line_count[value.game_bill_id];
        // if (counter == 1)
        //     tr.append('<td class="ac" rowspan="'+rowspan+'">'+value.game_bill_id+'</td>')
        //         .append('<td class="ac" rowspan="'+rowspan+'">'+value.created_at.substr(11, 5)+'</td>')
        //         .append('<td class="ac" rowspan="'+rowspan+'">'+payout[value.payout_id]+'</td>')

        // tr.append('<td class="ac" data-number="'+value.number+'">'+value.number+'</td>')
        //     .append('<td class="ac">'+value.created_at.substr(11, 5)+'</td>')
        //     .append('<td class="ac bolder">'+payout[value.payout_id]+'</td>')

        tr.append('<td class="ac dark-blue">' + bet_types[value.bet_type_id] + '</td>')
            .append('<td class="ac dark-blue bolder">' + (value.name || value.num) + '</td>')
            .append('<td class="align-right bundle-col">' + n2(value.qty / value.bundle) + '</td>')
            .append('<td class="align-right">' + n2(value.qty) + '</td>')
            .append('<td class="align-right">' + n2(value.com) + '</td>')
            .append('<td class="align-right"><b>' + n2c(value.total) + '</b></td>');

        tbody.prepend(tr);

        if (value.deleted_at == null) {
            sum_bundle += value.qty / value.bundle * 1.0;
            sum_qty += value.qty * 1.0;
            sum_com += value.com * 1.0;
            sum_total += value.total * 1.0;
        }

        if (counter == line_count[value.game_bill_id])
            counter = 0;
    });

    $('#sum-bundle').html(n2(sum_bundle));
    $('#sum-qty').html(n2(sum_qty));
    $('#sum-com').html(n2(sum_com));
    $('#sum-total').html(n2c(sum_total));
}

function renderSummary(list, bet_cols) {
    var table = $('#sum-table');
    var thead_tr = table.find('thead tr');
    var tbody = table.find('tbody');
    var tfoot_tr = table.find('tfoot tr');
    thead_tr.find('.dynamic').remove();
    tbody.html('');
    tfoot_tr.find('.dynamic').remove();

    col_count = bet_cols.length;

    $.each(bet_cols, function (key, value) {
        thead_tr.append('<th class="ac dynamic">' + value + '</th>');
        tfoot_tr.append('<td class="ac bolder dynamic" id="sum-' + (key + 1) + '">0</td>');
    });

    var col_1 = 0,
        col_2 = 0,
        col_3 = 0,
        col_4 = 0,
        col_5 = 0,
        col_6 = 0;

    tbody.html('');

    var counter = 1;
    $.each(list, function (key, value) {

        var tr = $('<tr>');

        tr.append('<td class="ac">' + counter + '</td>')
            .append('<td class="ac dark-blue bolder">' + (value.name || key) + '</td>')
            .append('<td class="ac">' + n0(value.col_1) + '</td>')
            .append('<td class="ac">' + n0(value.col_2) + '</td>')
            .append('<td class="ac">' + n0(value.col_3) + '</td>');

        if (col_count > 3) tr.append('<td class="ac">' + n0(value.col_4) + '</td>')
        if (col_count > 4) tr.append('<td class="ac">' + n0(value.col_5) + '</td>')
        if (col_count > 5) tr.append('<td class="ac">' + n0(value.col_6) + '</td>')

        tbody.append(tr);

        col_1 += value.col_1 * 1;
        col_2 += value.col_2 * 1;
        col_3 += value.col_3 * 1;
        if (col_count > 3) col_4 += value.col_4 * 1;
        if (col_count > 4) col_5 += value.col_5 * 1;
        if (col_count > 5) col_6 += value.col_6 * 1;

        counter++;
    });

    $('#sum-1').html(n0(col_1));
    $('#sum-2').html(n0(col_2));
    $('#sum-3').html(n0(col_3));
    if (col_count > 3) $('#sum-4').html(n0(col_4));
    if (col_count > 4) $('#sum-5').html(n0(col_5));
    if (col_count > 5) $('#sum-6').html(n0(col_6));
}


//ปุ่มสถานะ ปิดรับ (สีส้ม)
// function loadBets(e) {
//     e.preventDefault();

//     $.get('/bets/' + $(this).attr('data-id'), function (data) {
//         if (data.success) {
//             $('#bets').html(data.html);
//         }
//     });
// }