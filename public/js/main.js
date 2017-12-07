Array.prototype.unique = function () {
    var o = {}, i, l = this.length, r = [];
    for (i = 0; i < l; i += 1) o[this[i]] = this[i];
    for (i in o) r.push(o[i]);
    return r;
};

var posInt = /^\d+$/;
var numeric = /^-?\d+\.?\d*$/;

var days = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
var months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];

var max_credit = 0;
var used_credit = 0;
var credit_balance = 0;

var dateRangeOptions = {
    startDate: moment(),
    endDate: moment(),
    dateLimit: { days: 99 },
    ranges: {
        'วันนี้': [moment(), moment()],
        'เมื่อวาน': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        '3 วันล่าสุด': [moment().subtract(2, 'days'), moment()],
        '7 วันล่าสุด': [moment().subtract(6, 'days'), moment()],
    },
    buttonClasses: ['btn btn-default'],
    applyClass: 'btn-sm btn-primary',
    cancelClass: 'btn-sm',
    format: 'DD/MM/YYYY',
    separator: ' - ',
    locale: {
        applyLabel: 'ตกลง',
        cancelLabel: 'ปิด',
        fromLabel: 'จาก',
        toLabel: 'ถึง',
        customRangeLabel: 'เลือกเอง',
        daysOfWeek: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
        monthNames: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
        firstDay: 1
    }
};

var en_bet_types = ['up3', 'down3', 'tode3', 'up2', 'down2', 'tode2', 'up1', 'down1'];
var th_bet_types = {
    'up3': '3 ตัวบน',
    'down3': '3 ตัวล่าง',
    'tode3': '3 ตัวโต๊ด',
    'up2': '2 ตัวบน',
    'down2': '2 ตัวล่าง',
    'tode2': '2 ตัวโต๊ด',
    'up1': 'วิ่งบน',
    'down1': 'วิ่งล่าง',
};

var game_type_specific_urls = [
    '/games',
    '/news',
    '/mobile-news',
    '/users/take-list',
];

var game_specific_urls = [
    '/welcome',
    '/balance',

    '/items/overall',
    '/items/of-number',
    '/items/by-type',
    '/items/by-member',
    '/items/of-member',
    '/items/cancelled',
    '/cancel',
    '/items/settings',
    '/items/default-settings',
    '/items/limit-settings',

    '/reports/by-member',
    '/reports/of-member',
    '/reports/by-type',
    '/reports/winning',
    '/reports/winning-test',

    '/sys-rep/graphs'
];

var navbar_urls = [
    '/welcome',
    '/password'
];

var navbar_breadcrumbs = {
    '/welcome': 'ยินดีต้อนรับ',
    '/password': 'รหัสผ่าน',
};

var sidebar_urls = [
    '/',

    '/home',
    '/mobile-bet',
    '/bets',
    '/bet-results',
    '/awards',
    '/info',
    '/financial/transactions',
    '/financial/requests',

    '/items/overall',
    '/items/by-type',
    '/items/by-member',
    '/items/by-date',
    '/cancel',
    '/items/settings',
    '/items/default-settings',
    '/items/limit-settings',

    '/users',
    '/users/create',
    '/users/edit',
    '/users/edit1',
    '/users/edit2',
    '/users/edit3',
    '/users/edit4',
    '/users/online',
    '/users/take-list',

    '/shop/bills',
    '/shop/members',

    '/reports/by-member',
    '/reports/by-type',
    '/reports/by-date',
    '/reports/winning',
    '/reports/winning-test',
    '/reports/game-results',

    '/transfers',
    '/transfers2',

    '/credit',
    '/withdraw/requests',
    '/financial/transactions/self',
    '/financial/transactions/members',
    '/financial/transactions/show',

    '/aliases/all',
    '/aliases/manage',
    '/aliases/activity',

    '/game-type-groups',
    '/game-types',
    '/games',
    '/games/by-date',
    '/bulk-insert',
    '/bulk-edit-result',
    '/copy',
    '/news',
    '/mobile-news',
    '/payouts',
    '/system-settings',
    '/setting-logs',
    '/sys-rep/latest-users',
    '/special-tools',
    '/help',
];

var eq_urls = [
    '/items/by-type',
    '/items/of-number',
    '/items/of-member',
    '/items/cancelled',
    '/reports/by-type',
    '/reports/of-member',
    '/reports/of-member',
    '/history/show',
    '/aliases/create',
    '/aliases/edit',
];

var eq_urls2 = {
    '/items/by-type': '/items/by-member',
    '/items/of-number': '/items/overall',
    '/items/of-member': '/items/by-member',
    '/items/cancelled': '/cancel',
    '/reports/by-type': '/reports/by-member',
    '/reports/by-type': '/reports/by-member',
    '/reports/of-member': '/reports/by-member',
    '/history/show': '/history/list',
    '/aliases/create': '/aliases/manage',
    '/aliases/edit': '/aliases/manage',
}

Array.prototype.unique = function () {
    var o = {}, i, l = this.length, r = [];
    for (i = 0; i < l; i += 1) o[this[i]] = this[i];
    for (i in o) r.push(o[i]);
    return r;
};

var current_pathname = '';

(function (window, undefined) {

    var History = window.History; // do not forget to use "H", instead of "h"

    if (!History.enabled) {
        return false;
    }

    loadContent(window.location);

    History.Adapter.bind(window, 'statechange', function () {
        var State = History.getState();
        if (statechangeReload) {
            loadContent(State.cleanUrl);
        }
        statechangeReload = 1;
    });

})(window);

$(document).ready(function () {
    $('#content').on('click', 'a.ajax', function (e) {
        e.preventDefault();
        History.pushState({ 'time': new Date().getTime() }, '', $(this).attr('href'));
    });

    $('#navbar').on('click', 'a.ajax', function (e) {
        e.preventDefault();
        History.pushState({ 'time': new Date().getTime() }, '', $(this).attr('href'));
    });

    $('#sidebar a').on('click touchstart', function (e) {
        var url = $(this).attr('href');
        if (url == '#') return;

        e.preventDefault();
        e.stopImmediatePropagation();

        if (url.indexOf('/logout') != -1)
            window.location.href = url;

        History.pushState({ 'time': new Date().getTime() }, '', url);
    });

    $('#sidebar').on('click', 'button.btn-ajax', function (e) {
        e.preventDefault();

        History.pushState({ 'time': new Date().getTime() }, '', $(this).attr('data-href'));
    });

    $('#navbar').on('click', '#game-type-select .game-type-item', selectGameType);
    $('#navbar').on('click', '.game-item', selectGame);
    $('#navbar #user-toggle-list').on('click', 'a', function () {

    });

    pagePassword();
    pageOverall();
    pageItemByType();
    pageItemByDate();
    pageCancelled();
    pageReportByType();
    pageReportByDate();
    pageSettings();
    pageLimitSettings();
    pageDefaultSettings();
    pageUser();
    pageUserCreate();
    pageUserEdit();
    pageShopBill();
    pageMoney();
    pageFinancialTransactions();
    pageAlias();
    pageAliasEdit();
    pageGameTypeGroup();
    pageGameTypeGroupEdit();
    pageGameType();
    pageGameTypeEdit();
    pageGame();
    pageGameEdit();
    pageGameEditResult();
    pageGameEditReturn();
    pageBulkInsert();
    pageNews();
    pageNewsEdit();
    pageMobileNews();
    pageMobileNewsEdit();
    pagePayout();
    pagePayoutEdit();
    pageSystemSettingEdit();
    pageUserBet();
    pageCancel();
    pageSettingLogs();

    $('#content').on('click', '#input-checkbox-detail', function (e) { $('.span-detail').toggle(); });
    $('#content').on('click', '#input-checkbox-name', function (e) {
        if ($(this).data('target') == 'page') {
            $('#content').find('.span-name').toggle();
        } else {
            $(this).closest('table').find('.span-name').toggle();
        }
    });
    $('#content').on('click', ':not(.dataTables_paginate) .pagination a', function (e) {
        e.preventDefault();
        if ($(this).parents('.dataTables_paginate').length) {
            return;
        }
        History.pushState({ 'time': new Date().getTime() }, '', $(this).attr('href'));
    });

    $('#content').on('submit', '.js-ajax-form', ajaxFormSubmit);

    $('#content').on('click', '.js-delete', jsDelete);
    $('#content').on('click', '.js-restore', jsRestore);
});

var statechangeReload = 1;
function pushState(url, reload) {
    if (reload !== undefined && reload == false) {
        statechangeReload = 0;
    }

    History.pushState({ 'time': new Date().getTime() }, '', url);
}

function loadGameTypes() {
    $.get('/load-game-types', function (result) {
        if (result.success) {
            $('.game-type-item').removeClass('running closed blink');
            $.each(result.data, function (key, value) {
                var game_type_id = value.game_type_id;
                var running = value.running;
                var closed = value.closed;
                var blink = value.blink;

                var item = $('.game-type-item[data-id="' + game_type_id + '"]');
                if (running) item.addClass('bg-green3');
                if (closed) item.addClass('bg-dark');
                if (blink) item.addClass('blink');
            });
        }
    });
}

function selectGameType(e) {
    e.preventDefault();

    current_game_type_id = $(this).attr('data-id');
    $('#navbar-game-type-title').text($(this).text());
    $('#navbar-game-title').text('กำลังโหลด...');
    $('#game-select').html('');

    $.get('/load-games/' + $(this).attr('data-id'), function (result) {
        if (result.error) {

        }
        if (result.success) {
            var html = '';
            var i = 0;
            $.each(result.games, function (key, value) {
                current_game_id = key;
                $('#navbar-game-title').text(value);
                html = '<li><a href="#" class="game-item" data-id="' + key + '">' + value + '</a></li>' + html;
                i++;
            });

            if (result.current_game_id) {
                current_game_id = result.current_game_id;
                $('#navbar-game-title').text(result.games[current_game_id]);
            }

            if (i == 0) {
                current_game_id = 0;
                $('#navbar-game-title').text('ไม่พบงวดหวย');
            }
            else
                $('#game-select').html(html);

            updateGameSpecificPage();
        }
    });
}

function selectGame(e) {
    e.preventDefault();

    current_game_id = $(this).attr('data-id');
    $('#navbar-game-title').text($(this).text());
    updateGameSpecificPage();
}

function updateGameSpecificPage() {
    if (current_pathname.indexOf('/') != 0) {
        current_pathname = '/' + current_pathname;
    }

    for (var i = game_type_specific_urls.length - 1; i >= 0; i--) {
        if (current_pathname.indexOf(game_type_specific_urls[i]) == 0) {
            loadContent(current_pathname);
            return;
        }
    };

    for (var i = game_specific_urls.length - 1; i >= 0; i--) {
        if (current_pathname.indexOf(game_specific_urls[i]) == 0) {
            loadContent(current_pathname);
            return;
        }
    };
}

function pagePassword() {
    $('#content').on('submit', '#update-password-form', function (e) {
        e.preventDefault();

        var old_password = $('#old-password').val();
        var new_password = $('#new-password').val();
        var new_password2 = $('#new-password2').val();

        if (old_password == '' || new_password == '' || new_password2 == '') {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }

        if (new_password != new_password2) {
            alert('รหัสผ่านใหม่ไม่ตรงกัน');
            return;
        }

        data = {
            'old_password': old_password,
            'new_password': new_password,
            'new_password2': new_password2,
        };

        $('#btn-update-password').prop('disabled', true);
        $.post('/password', data, function (result) {
            if (result.success === true) {
                alert(result.msg);
            }
        }).always(function () {
            $('#btn-update-password').prop('disabled', false);
        });
    });
}

function pageOverall() {
    $('#content').on('change', '.update-trigger', function () {
        overallData = [];
        isOverallDataEmpty = true;
        getOverallData();
    });
    $('#content').on('click', '#btn-refresh', getOverallData);
}

function pageItemByType() {
    $('#content').on('change', '#item-payout-filter', itemPayoutChange);
}

function pageItemByDate() {
    $('#content').on('click', '#btn-item-by-date', loadItemsByDate);
}

function pageCancelled() {
    $('#content').on('submit', '.js-form-submit', function (e) {
        e.preventDefault();

        var url = $(this).attr('action') + '?' + $(this).serialize();

        History.pushState({ 'time': new Date().getTime() }, '', url);
    });
}

function pageReportByType() {
    $('#content').on('change', '#report-payout-filter', reportPayoutChange);
}

function pageReportByDate() {
    $('#content').on('submit', '#filter-form2', loadReportsByDate);

    $('#content').on('click', '.group', toggleGroup);

    $('#content').on('click', '#panel-toggle', function () {
        $('#game-type-checkboxes').toggle();
    });

    $('#content').on('change', '#filter-form2 #select-month', function () {
        $('#filter-form2 input[value="month"]').prop('checked', true);
    });

    $('#content').on('change', '#filter-form2 #input-from, #filter-form2 #input-to', function () {
        $('#filter-form2 input[value="range"]').prop('checked', true);
    });
}

function itemPayoutChange() {
    History.pushState({ 'time': new Date().getTime() }, '', '/items/by-type/' + $(this).val());
}

function reportPayoutChange() {
    History.pushState({ 'time': new Date().getTime() }, '', '/reports/by-type/' + $(this).val());
}

function loadItemsByDate() {
    var date_begin = $('#date-begin').val();
    var date_end = $('#date-end').val();
    var game_type = $('input[name="game-types"').val();
    // loadContent('/items/by-date/0/'+game_type+'/'+date_begin+'/'+date_end);
    History.pushState({ 'time': new Date().getTime() }, '', '/items/by-date/0/' + game_type + '/' + date_begin + '/' + date_end);
}

function loadReportsByDate(e) {
    e.preventDefault();
    var form = $(this).closest('form');
    var id = $(this).attr('data-id');
    var url = form.attr('action');
    var filter = form.find('[name="filter"]:checked').val();
    var game_types = [];

    $('#game-type-checkboxes input.item:checked').each(function () {
        game_types.push($(this).val());
    });

    if (game_types.length == 0) {
        alert('กรุณาเลือกชนิดหวย');
        return;
    }

    url += '/' + filter;
    if (filter == 'month') {
        url += '/' + form.find('[name="month"]').val();
    } else if (filter == 'range') {
        url += '/' + form.find('[name="from"]').val() + '/' + form.find('[name="to"]').val();
    }

    url += '?list=' + encodeURIComponent(game_types);

    History.pushState({ 'time': new Date().getTime() }, '', url);

    // var id = $(this).attr('data-id');
    // var date_begin = $('#date-begin').val();
    // var date_end = $('#date-end').val();
    // var game_types = [];

    // $('#game-type-checkboxes input.item:checked').each(function() {
    //   game_types.push($(this).val());
    // });

    // if (game_types.length == 0) {
    //   alert('กรุณาเลือกชนิดหวย');
    //   return;
    // }

    // History.pushState({'time': new Date().getTime()}, '', '/reports/by-date/'+id+'/'+date_begin+'/'+date_end+'?list='+encodeURIComponent(game_types));
}

function toggleGroup() {
    var checked = $(this).prop('checked');

    $('#game-type-checkboxes input.group-' + $(this).val()).prop('checked', checked);
}

var overallTime = 60;
var overallTimeout = null;
function overallRefresh() {
    if (overallTime > 1) {
        $('#overall-timer').text('รีเฟรชใน ' + overallTime + ' วินาที');
        overallTimeout = setTimeout('overallRefresh()', 1000);
        overallTime--;
    } else {
        $('#overall-timer').text('กำลังโหลด...');
        getOverallData();
        overallTime = 60;
    }
}

var isOverallDataEmpty = true;
var overallData = [];

function getOverallData() {
    $('#overall-timer').text('กำลังโหลด...');
    $('#btn-refresh').prop('disabled', true);
    clearTimeout(overallTimeout);
    overallTime = 60;

    var data = {};

    data.kind = $('#show-kind').val();
    data.num_rows = $('#show-num-rows').val();
    data.order = $('#show-order').val();
    data.filter = $('#show-filter').val();
    data.game_id = current_game_id;

    var user_id = $('input[name=user_id]').val();

    $.get('/items/get-overall-data/' + user_id + '?_=' + new Date().getTime(), data, function (result) {
        if (result.error) {
            $('#content .page-header').nextAll().html('').removeClass('alert alert-info');
            $('#content .page-header').after('<div class="alert alert-danger no-margin-top"><h3 class="no-margin">' + result.error + '</h3></div>');
        }

        if (!result.success)
            return;

        var btg_id_lookups = [];
        $.each(result.bet_type_ids, function (key, bet_type_ids) {
            for (var i = bet_type_ids.length - 1; i >= 0; i--) {
                btg_id_lookups[bet_type_ids[i]] = key;
            };
        });

        overallTimeout = setTimeout('overallRefresh()');
        $('#btn-refresh').prop('disabled', false);

        var sum_buy = [],
            sum_com = [],
            sum_take = [],
            sum_pay = [];

        for (var i = result.bet_type_group_ids.length - 1; i >= 0; i--) {
            sum_buy[result.bet_type_group_ids[i]] = 0;
            sum_com[result.bet_type_group_ids[i]] = 0;
            sum_take[result.bet_type_group_ids[i]] = 0;
            sum_pay[result.bet_type_group_ids[i]] = 0;
        };

        // buy
        $.each(result.sum_buy, function (key, value) {
            $('.buy-' + key).text(value);
            sum_buy[btg_id_lookups[key]] += value * 1;
        });

        // com
        $.each(result.sum_com, function (key, value) {
            $('.com-' + key).text(value * -1);
            sum_com[btg_id_lookups[key]] += value * 1;
        });

        // take
        $.each(result.sum_take, function (key, value) {
            $('.take-' + key).text(value);
            sum_take[btg_id_lookups[key]] += value * 1;
        });

        // pay
        $.each(result.max_predict, function (key, value) {
            $('.pay-' + key).text(value * -1);
            sum_pay[btg_id_lookups[key]] += value * 1;
        });

        for (var i = result.bet_type_group_ids.length - 1; i >= 0; i--) {
            var key = result.bet_type_group_ids[i];
            $('.sum-buy-' + key).html(sum_buy[key]);
            $('.sum-com-' + key).html(sum_com[key] * -1);
            $('.sum-take-' + key).html(sum_take[key]);
            $('.sum-pay-' + key).html(sum_pay[key] * -1);
        }

        // data
        if (overallData.length == 0) {
            isOverallDataEmpty = true;
            overallData = result.data;
        } else {
            isOverallDataEmpty = false;
        }

        for (var btg_key = 0; btg_key < result.bet_type_group_ids.length; btg_key++) {
            var btg_id = result.bet_type_group_ids[btg_key];
            var tbody = $('[data-bet-type-group-id="' + btg_id + '"]');
            tbody.empty();

            $.each(result.count, function (key, value) {
                if (value > max_num_row)
                    max_num_row = value;
            });

            var max_num_row = 0;
            for (var j = 0; j < result.bet_type_ids[btg_id].length; j++) {
                var bt_id = result.bet_type_ids[btg_id][j];
                if (result.count[bt_id] > max_num_row) {
                    max_num_row = result.count[bt_id];
                }
            }

            for (var i = 0; i < max_num_row; i++) {
                var tr = $('<tr>');
                tr.append('<td class="align-center">' + (i + 1) + '</td>');

                for (var j = 0; j < result.bet_type_ids[btg_id].length; j++) {
                    var bt_id = result.bet_type_ids[btg_id][j];
                    if (result.data[bt_id] === undefined)
                        continue;

                    var col = result.data[bt_id][i];
                    if (!col) {
                        tr.append($('<td>'));
                        continue;
                    }

                    var td = $('<td>');
                    var col = result.data[bt_id][i];
                    var n = col.n;
                    var n2 = col.n2;
                    var t = col.t;
                    var m = col.m;

                    if (result.winning.length != 0) {
                        if ($.inArray(n + '', result.winning[bt_id]) != -1) {
                            td.addClass('flash');
                        }
                    }

                    var style = '';
                    if (data.kind == 'item') {
                        style = 'n0';
                        if (m == true)
                            style += ' bolder deep-red'
                    } else {
                        style = 'n0c bolder';
                    }

                    if (isOverallDataEmpty == false) {
                        var oldData = overallData[bt_id][i];
                        if (oldData === undefined || col.t != oldData.t)
                            td.addClass('data-changed');
                    }

                    td.append('<span class="num pull-left bolder"><a href="/items/of-number/' + bt_id + '/' + n + '" class="ajax">' + (n2 || n) + '</a></span>');
                    td.append('<span class="take pull-right ' + style + '">' + t + '</span>');
                    tr.append(td);
                }

                tbody.append(tr);
            }
        }

        overallData = result.data;

        $.each($('.n0'), function (key, value) {
            $(this).html(n0($(this).text()));
        });
        $.each($('.n2'), function (key, value) {
            $(this).html(n2($(this).text()));
        });
        $.each($('.n0c'), function (key, value) {
            $(this).html(n0c($(this).text()));
        });
        $.each($('.n2c'), function (key, value) {
            $(this).html(n2c($(this).text()));
        });
    });
}

function multiUpdateBetLimit(e) {
    var collection = { 'data': [] };

    var table = $(this).closest('table');

    var list = table.find('input:checkbox:checked').map(function () { return this.value; }).get();

    $.each(list, function (key, id) {
        if (!posInt.test(id)) return;

        var data = {};

        data['game_type_id'] = id;
        var container = table.find('.bet-limit-container-' + data['game_type_id']);
        data['bet_type_group_id'] = container.data('bet-type-group-id');

        container.find('[class^=limit-]:enabled').each(function (key, val) {
            var bet_type_id = $(val).data('bet-type-id');
            data['limit_' + bet_type_id] = $(val).val().replace(/,/g, '');
        });

        table.find('.success, .error').addClass('hidden');

        collection['data'].push(data);
    });

    $.ajax({
        url: '/multi-update-bet-limit',
        method: 'put',
        data: collection,
        success: function (result) {
            if (!result.success) return;

            $.each(result.data, function (key, data) {
                var container = $('.bet-limit-container-' + data.game_type_id);

                $.each(data.success_list, function (key, value) {
                    container.find('input[name=' + value + ']').parent().find('.success').removeClass('hidden');
                })

                $.each(data.error_list, function (key, value) {
                    container.find('input[name=' + value + ']').parent().find('.error').removeClass('hidden');
                    container.find('input[name=' + value + ']').parent().find('.success').addClass('hidden');
                });
            });
        }
    });
}

function pageSettings() {
    $('#content').on('click', '#toggle-bet-close-time', toggleBetCloseTime);
    $('#content').on('click', '#btn-update-open-time', updateOpenTime);
    $('#content').on('click', '#btn-update-close-time', updateCloseTime);

    $('#content').on('click', '.btn-add-number-limit', addNumberLimit);
    $('#content').on('click', '.btn-update-number-limit', updateNumberLimit);
    $('#content').on('click', '.btn-delete-number-limit', deleteNumberLimit);

    $('#content').on('click', '.btn-refresh-closed-numbers', refreshClosedClicked);
}

function toggleBetCloseTime() {
    $('#bet-close-time-table').toggle();
}

function updateOpenTime() {
    var data = {};

    data.open_same_company = $('#open-same-company').prop('checked') == true ? 1 : 0;
    data.days = $('#days').val();

    var td = $(this).closest('td');
    td.removeClass('bg-success');
    td.find('success').addClass('hidden');

    $.ajax({
        url: '/update-open-time/' + current_game_id,
        method: 'put',
        data: data,
        success: function (result) {
            if (result.error) {
                alert(result.error);
                return;
            }

            if (!result.success)
                return;

            td.addClass('bg-success');
            td.find('.success').removeClass('hidden');

            if (result.days) $('#days').val(result.days);
        }
    });
}

function updateCloseTime() {
    var data = {};

    data.same_company = $('#same-company').prop('checked') == true ? 1 : 0;
    data.close_time_hh = $('#close-time-hh').val();
    data.close_time_mm = $('#close-time-mm').val();

    var td = $(this).closest('td');
    td.removeClass('bg-success');
    td.find('success').addClass('hidden');

    $.ajax({
        url: '/update-close-time/' + current_game_id,
        method: 'put',
        data: data,
        success: function (result) {
            if (result.error) {
                alert(result.error);
                return;
            }

            if (!result.success)
                return;

            td.addClass('bg-success');
            td.find('.success').removeClass('hidden');

            if (result.close_time_hh) $('#close-time-hh').val(result.close_time_hh * 1);
            if (result.close_time_mm) $('#close-time-mm').val(result.close_time_mm * 1);
        }
    });
}

function addNumberLimit(e) {
    e.preventDefault();

    var bet_type_id = $(this).attr('data-bet-type-id');

    var game_type_id = $(this).attr('data-game-type-id') !== undefined ? $(this).attr('data-game-type-id') : null;
    var prefix = game_type_id != null ? 'g' + game_type_id + '-' : '';

    var data = {};
    data.game_id = current_game_id;
    data.bet_type_id = bet_type_id;
    data.number = $(this).closest('form').find('#' + prefix + 'number-limit-' + bet_type_id).val();
    data.limit = $(this).closest('form').find('#' + prefix + 'value-limit-' + bet_type_id).val();
    data.game_type_id = game_type_id;

    $.ajax({
        url: '/add-bet-number-limit',
        method: 'post',
        data: data,
        success: function (result) {
            if (!result.success) {
                alert(result)
                return;
            }

            var prefix = (result.game_type_id != null && result.game_type_id != '') ? 'g' + result.game_type_id + '-' : '';
            $('#' + prefix + 'number-limit-' + bet_type_id).val('').focus();
            renderNumberLimit(bet_type_id, result.data, result.success_list, result.game_type_id);
        }
    });
}

function updateNumberLimit(e) {
    e.preventDefault();

    var bet_type_id = $(this).attr('data-bet-type-id');

    var game_type_id = $(this).attr('data-game-type-id') !== undefined ? $(this).attr('data-game-type-id') : null;
    var prefix = game_type_id != null ? 'g' + game_type_id + '-' : '';

    var data = {};
    data.game_id = current_game_id;
    data.bet_type_id = bet_type_id;
    data.number = [];
    data.limit = $('#' + prefix + 'edit-limit-' + bet_type_id).val();
    data.game_type_id = game_type_id;

    tbody = $('#' + prefix + 'tbody-limit-' + bet_type_id);
    tbody.find('.limit-checkbox:checked').each(function () {
        data.number.push($(this).attr('data-number'));
    });

    if (data.number.length == 0)
        return;

    $.ajax({
        url: '/update-bet-number-limit',
        method: 'put',
        data: data,
        success: function (result) {
            if (!result.success) {
                alert(result)
                return;
            }

            var prefix = (result.game_type_id != null && result.game_type_id != '') ? 'g' + result.game_type_id + '-' : '';
            renderNumberLimit(bet_type_id, result.data, result.success_list, result.game_type_id);
        }
    });
}

function deleteNumberLimit(e) {
    e.preventDefault();

    var bet_type_id = $(this).attr('data-bet-type-id');

    var game_type_id = $(this).attr('data-game-type-id') !== undefined ? $(this).attr('data-game-type-id') : null;
    var prefix = game_type_id != null ? 'g' + game_type_id + '-' : '';

    var data = {};
    data.game_id = current_game_id;
    data.bet_type_id = bet_type_id;
    data.number = [];
    data.game_type_id = game_type_id;

    tbody = $('#' + prefix + 'tbody-limit-' + bet_type_id);
    tbody.find('.limit-checkbox:checked').each(function () {
        data.number.push($(this).attr('data-number'));
    });

    if (data.number.length == 0)
        return;

    $.ajax({
        url: '/delete-bet-number-limit',
        method: 'delete',
        data: data,
        success: function (result) {
            if (!result.success) {
                alert(result)
                return;
            }

            var prefix = (result.game_type_id != null && result.game_type_id != '') ? 'g' + result.game_type_id + '-' : '';
            renderNumberLimit(bet_type_id, result.data, result.success_list, result.game_type_id);
        }
    });
}

function renderNumberLimit(bet_type_id, data, success_list, game_type_id) {
    var prefix = (game_type_id != null && game_type_id != '') ? 'g' + game_type_id + '-' : '';

    var tbody = $('#' + prefix + 'tbody-limit-' + bet_type_id);
    tbody.empty();

    tbody.closest('table').find('.check-all').prop('checked', false);

    if (data.length == 0) {
        tbody.append('<tr class="align-center align-middle"><td colspan="2" class="bigger-110">ไม่มีข้อมูล</td></tr>');
        return;
    }

    $.each(data, function (key, value) {
        var tr = $('<tr>');
        tr.append('<td><input class="limit-checkbox" type="checkbox" data-number="' + value.number + '"></td>');

        if ($.inArray(value.number, success_list) != -1)
            tr.append('<td class="am bg-success">' + (value.name || value.number) + ' = ' + value.limit + '<i class="ace-icon fa fa-check bigger-120 green success pull-right"></i></td>');
        else
            tr.append('<td class="am">' + (value.name || value.number) + ' = ' + value.limit + '</td>');

        tbody.append(tr);
    });

    var data_default_game_type = (game_type_id != null && game_type_id != '') ? 'data-game-type-id="' + game_type_id + '"' : '';

    var tr = $('<tr>');
    tr.append('<td colspan="2" class="align-center"><input type="text" class="form-control input-sm max-width-75 inline lighter" id="' + prefix + 'edit-limit-' + bet_type_id + '">'
        + ' <button class="btn btn-primary btn-xs bigger-110 btn-update-number-limit" data-bet-type-id="' + bet_type_id + '" ' + data_default_game_type + '>แก้ไข</button>'
        + ' <button class="btn btn-primary btn-xs bigger-110 btn-delete-number-limit" data-bet-type-id="' + bet_type_id + '" ' + data_default_game_type + '>ลบ</button></td>');
    tbody.append(tr);
}

function refreshClosedClicked(e) {
    e.preventDefault();
    getClosedNumbers();
}

var closedTime = 60;
var closedTimeout = null;
function closedRefresh() {
    if (closedTime > 0) {
        $('.closed-timer').text('รีเฟรชใน ' + closedTime + ' วินาที');
        closedTimeout = setTimeout('closedRefresh()', 1000);
        closedTime--;
    } else {
        $('.closed-timer').text('กำลังโหลด...');
        getClosedNumbers();
        closedTime = 60;
    }
}

function getClosedNumbers() {
    $('.closed-timer').text('กำลังโหลด...');
    $('.btn-refresh-closed-numbers').prop('disabled', true);
    clearTimeout(closedTimeout);
    closedTime = 60;

    var data = {};

    data.game_id = current_game_id;

    $.get('/get-closed-numbers', data, function (result) {
        if (!result.success)
            return;

        closedTimeout = setTimeout('closedRefresh()');
        $('.btn-refresh-closed-numbers').prop('disabled', false);

        var btg_id_lookups = [];
        $.each(result.bet_type_ids, function (key, bet_type_ids) {
            for (var i = bet_type_ids.length - 1; i >= 0; i--) {
                btg_id_lookups[bet_type_ids[i]] = key;
            };
        });

        // data
        var max_num_rows = [];
        $.each(result.bet_type_group_ids, function (key, btg_id) {
            max_num_rows[btg_id] = 0;
        });

        $.each(result.count, function (key, value) {
            var btg_id = btg_id_lookups[key];
            if (value > max_num_rows[btg_id])
                max_num_rows[btg_id] = value;
        });

        for (var btg_id = 1; btg_id < max_num_rows.length; btg_id++) {
            var tbody = $('#tbody-closed-numbers-' + btg_id);
            tbody.empty();

            for (var i = 0; i < max_num_rows[btg_id]; i++) {
                var bt_id = result.bet_type_ids[btg_id];
                var tr = $('<tr>');

                $.each(result.bet_type_ids[btg_id], function (key, bt_id) {
                    var col = result.data[bt_id][i];
                    if (!col) {
                        tr.append($('<td>'));
                        return;
                    }

                    var td = $('<td>');
                    var col = result.data[bt_id][i];
                    var n = col.n;
                    var n2 = col.n2;
                    var t = col.t;

                    td.append('<span class="num pull-left deep-blue bolder">' + (n2 || n) + '</span>');
                    td.append('<span class="take deep-red pull-right ' + (data.kind == 'item' ? 'n0' : 'n0c bolder') + '">' + t + '</span>');
                    tr.append(td);
                });

                tbody.append(tr);
            }
        }
    });
}

function pageLimitSettings() {
    $('#content').on('input', '.input-copy', function () {
        var text = $(this).val();
        var type = $(this).attr('data-type');
        var trs = $('.bet-limit-container');

        $.each(trs, function (key, tr) {
            if ($(tr).find('input[type="checkbox"]').prop('checked') == true) {
                $(tr).find('.limit-' + type).val(text);
            }
        });
    });

    $('#content').on('click', '.btn-update-bet-limit', function () {
        var tr = $(this).closest('tr');
        var data = {};

        data.game_type_id = $(this).data('game-type-id');
        data.bet_type_group_id = $(this).data('bet-type-group-id');

        $(this).closest('tr').find('input[type="text"]').each(function (key, val) {
            data[$(val).attr('name')] = $(val).val();
        });

        $('.error').addClass('hidden');
        $('.success').addClass('hidden');

        $.ajax({
            url: '/update-bet-limit',
            method: 'put',
            data: data
        }).success(function (res) {
            if (res.error_inputs) {
                $.each(res.error_inputs, function (key, val) {
                    tr.find('.input-group-' + val + ' .error').removeClass('hidden');
                });
            }

            if (res.success_inputs) {
                $.each(res.success_inputs, function (key, val) {
                    tr.find('.input-group-' + val + ' .success').removeClass('hidden');
                });
            }
        });
    });

    $('#content').on('click', '.btn-multi-update-bet-limit', multiUpdateBetLimit);
}

function pageDefaultSettings() {
    // $('#content').on('click', '#btn-copy-to-gov', copyToGov);
    // $('#content').on('click', '#btn-copy-to-stock', copyToStock);

    $('#content').on('click', '#btn-copy-default-number-limits', copyDefaultNumberLimits);
    $('#content').on('click', '#btn-delete-default-number-limits', deleteDefaultNumberLimits);
}

function copyDefaultNumberLimits(e) {
    e.preventDefault();

    var data = {};
    data.game_type_ids = [];
    $('#game-type-list input[type="checkbox"]').each(function () {
        if ($(this).prop('checked')) {
            data.game_type_ids.push($(this).val());
        }
    });

    if (data.game_type_ids.length == 0) {
        alert('กรุณาเลือกชนิดหวย');
        return;
    }

    if (confirm("งวดล่วงหน้าของชนิดหวยที่เลือก จะถูกล้างข้อมูลก่อนการคัดลอก\nยืนยันทำการคัดลอก?")) {

        $.ajax({
            url: '/copy-default-number-limits',
            type: 'post',
            data: data,
            success: function (result) {
                if (result.error) {
                    alert(result.error);
                }
                if (result.success) {
                    alert(result.success);
                }
            }
        }).fail(function () {
            // alert('เกิดข้อผิดพลาด');
        });
    }
}

function deleteDefaultNumberLimits(e) {
    e.preventDefault();

    var data = {};
    data.game_type_ids = [];
    $('#game-type-list input[type="checkbox"]').each(function () {
        if ($(this).prop('checked')) {
            data.game_type_ids.push($(this).val());
        }
    });

    if (data.game_type_ids.length == 0) {
        alert('กรุณาเลือกชนิดหวย');
        return;
    }

    if (confirm("งวดล่วงหน้าของชนิดหวยที่เลือก จะถูกล้างข้อมูล\nยืนยันการล้างข้อมูล?")) {

        $.ajax({
            url: '/delete-default-number-limits',
            type: 'delete',
            data: data,
            success: function (result) {
                if (result.error) {
                    alert(result.error);
                }
                if (result.success) {
                    alert(result.success);
                }
            }
        }).fail(function () {
            // alert('เกิดข้อผิดพลาด');
        });
    }
}

function copyToGov(e) {
    e.preventDefault();

    if (confirm('คัดลอกไปยังหวยรัฐ?')) {
        $.ajax({
            url: '/copy-to/1',
            type: 'get',
            success: function (result) {
                if (result.error) {
                    alert(result.error);
                }
                if (result.success) {
                    alert(result.success);
                }
            }
        }).fail(function () {
            // alert('เกิดข้อผิดพลาด');
        });
    }
}


function copyToStock(e) {
    e.preventDefault();

    if (confirm('คัดลอกไปยังหวยหุ้น?')) {
        $.ajax({
            url: '/copy-to/0',
            type: 'get',
            success: function (result) {
                if (result.error) {
                    alert(result.error);
                }
                if (result.success) {
                    alert(result.success);
                }
            }
        }).fail(function () {
            // alert('เกิดข้อผิดพลาด');
        });
    }
}

function pageUser() {
    $('#content').on('change', '.users-filter-status', function (e) {
        if ($('.users-filter-status').val() == 4) {
            $('.users-table tbody tr').show();
        } else {
            $('.users-table tbody tr').hide();
            $('.users-table tbody tr[data-status="' + $('.users-filter-status').val() + '"]').show();
        }
    });

    $('#content').on('change', '.users-filter-order', function (e) {
        var href = '/users?status=' + $('.users-filter-status').val() + '&order=' + $('.users-filter-order').val();
        History.pushState({ 'time': new Date().getTime() }, '', href);
    });
}

function pageUserCreate() {
    $('#content').on('submit', '#create-user-form', function (e) {
        e.preventDefault();
        postContent($(this));
        $('body,html').animate({
            scrollTop: 0
        }, 0);
    });

    $('#content').on('change', '#user_type', function () {
        var max = $('#sum-share-take').val();

        $('#share').html('');
        $('#take').html('');

        if ($(this).val() == 1) {
            $('#is-shop-container').removeClass('jquery-hide');

            $('#share').append('<option value="0">0%</option>');

            for (var i = max; i >= 0; i -= 0.5) {
                $('#take').append('<option value="' + parseFloat(i).toFixed(1) + '">' + parseFloat(i).toFixed(1) + '%</option>');
            };
        } else {
            $('#is-shop-container').addClass('jquery-hide');

            for (var i = max; i >= 0; i -= 0.5) {
                $('#share').append('<option value="' + parseFloat(i).toFixed(1) + '">' + parseFloat(i).toFixed(1) + '%</option>');
            };

            for (var i = max; i >= 0; i -= 0.5) {
                if (i == 0)
                    $('#take').append('<option value="' + parseFloat(i).toFixed(1) + '" selected>' + parseFloat(i).toFixed(1) + '%</option>');
                else
                    $('#take').append('<option value="' + parseFloat(i).toFixed(1) + '">' + parseFloat(i).toFixed(1) + '%</option>');
            };
        }
    });

    $('#content').on('change', '#share', function () {
        $('#take').html('');

        var max = $('#sum-share-take').val();
        var share = $('#share').val();
        for (var i = max - share; i >= 0; i -= 0.5) {
            $('#take').append('<option value="' + parseFloat(i).toFixed(1) + '">' + parseFloat(i).toFixed(1) + '%</option>');
        };
    });

    $('#content').on('change', '#take', function () {
        if ($('#user_type').val() == 1) return;

        // $('#share').val($('#sum-share-take').val() - $(this).val());
    });

    $('#content').on('change', '#user-bet-copy', function (e) {
        $.get('/user-bet-settings', { id: $(this).val() }, function (result) {
            data = $.parseJSON(result);
            $.each(data, function (key, val) {
                $('input[name="' + key + '"]').val(n00(val));
            });
        }).fail(function () {
            alert('เกิดข้อผิดพลาด ในการคัดลอกข้อมูลการแทง');
        });
    });

    $('#content').on('change', '#user-payout-copy', function (e) {
        $.get('/user-payout-settings', { id: $(this).val() }, function (result) {
            data = $.parseJSON(result);
            for (var i = data.length - 1; i >= 0; i--) {
                var payout_id = data[i].payout_id;
                $.each(data[i], function (key, val) {
                    if (key == 'active') {
                        $('input[type="checkbox"][name="payout_active[' + payout_id + ']"]').prop('checked', val == 1 ? true : false);
                    }

                    if (key.indexOf("_") != -1) {
                        var col = key.substring(0, key.lastIndexOf("_"));
                        var id = key.substring(key.lastIndexOf("_") + 1);

                        if (col == 'btg_active') {
                            $('input[type="checkbox"][name="' + col + '[' + payout_id + '][' + id + ']"]').prop('checked', val == 1 ? true : false);
                        } else {
                            $('input[name="' + col + '[' + payout_id + '][' + id + ']"]').val(val);
                        }
                    }
                });
            };
        }).fail(function () {
            alert('เกิดข้อผิดพลาด ในการคัดลอกคอมมิชชั่นและอัตราจ่าย');
        });
    });
}

function pageUserEdit() {
    $('#content').on('change', '#users-edit-order', function (e) {
        var href = $(this).val();

        History.pushState({ 'time': new Date().getTime() }, '', href);
    });

    $('#content').on('change', '#users-edit-filter', function (e) {
        var status = $(this).val();
        $('#content table tbody tr').hide();
        if (status != 4) {
            $('#content table tbody tr').each(function () {
                var tr = $('table tbody tr[data-status="' + status + '"]').show();
            });
        } else {
            $('#content table tbody tr').show();
        }
    });

    $('#content').on('click', '.fill-input', function (e) {
        e.preventDefault();
        $(this).closest('th').find('input').val($(this).text());
    });

    /* edit */
    $('#content').on('input', '.simple input', function () {
        setEdited($(this).closest('tr'));
    });

    $('#content').on('change', '.simple select', function () {
        setEdited($(this).closest('tr'));
    });

    $('#content').on('change', '.simple input[type=checkbox]', function () {
        setEdited($(this).closest('tr'));
    });

    $('#content').on('change', '.share select', function () {
        var max = $('#sum-share-take').val();
        var share = $(this).val();

        var tr = $(this).closest('tr');

        tr.find('.take select').html('');
        for (var i = max - share; i >= 0; i -= 0.5) {
            tr.find('.take select').append('<option value="' + parseFloat(i).toFixed(1) + '">' + parseFloat(i).toFixed(1) + '%</option>');
        };
    });

    $('#content').on('change', '.take select', function () {
        if ($(this).closest('tr').attr('data-user-type-id') == 1)
            return;

        // var max = $('#sum-share-take').val();
        // $(this).closest('tr').find('.share select').val(max - $(this).val());
    });

    /* check all */
    $('#content').on('click', '.enable-check-all .check-all', function () {
        var checked = this.checked;
        $(this).closest('table').find('input[type=checkbox]').each(function () {
            $(this).prop('checked', checked);
        });
    });

    $('#content').on('click', '.enable-check-all input[type=checkbox]:not(.check-all)', function () {
        var check_all_btn = $(this).closest('table').find('thead').find('input:first');
        var tbody = $(this).closest('tbody');

        var total = tbody.find('input[type=checkbox]:not(.check-all)').length;
        var checked = tbody.find('input[type=checkbox]:not(.check-all):checked').length;

        if (total == checked) {
            check_all_btn.prop('checked', true);
        } else {
            check_all_btn.prop('checked', false);
        }
    });

    $('#content').on('click', '#users-edit-tab-content .check-row', toggleRow);

    /* save */
    $('#content').on('click', '.simple .btn-save', function (e) {
        e.preventDefault();
        saveSimple($(this).closest('tr'));
    });

    $('#content').on('click', '.complex .btn-save', function (e) {
        e.preventDefault();
        saveComplex($(this).closest('div'));
    });

    // $('#content').on('click', '.complex .btn-save-active', function(e) {
    //   e.preventDefault();
    //   saveActive($(this).closest('div'));
    // });

    // $('#content').on('click', '.complex .btn-save-gtg-active', function(e) {
    //   e.preventDefault();
    //   saveGtgActive($(this).closest('div'));
    // });

    $('#content').on('click', '.complex .btn-save-shop', function (e) {
        e.preventDefault();
        saveShop($(this).closest('div'));
    });

    $('#content').on('click', '.complex .btn-save-cancel', function (e) {
        e.preventDefault();
        saveCancel($(this).closest('div'));
    });

    /* clear */
    $('#content').on('click', '.simple .btn-cancel', function (e) {
        e.preventDefault();
        var tr = $(this).closest('tr');
        clearEdited(tr);
        tr.find('.share select').trigger('change')
        clearEdited(tr);
    });

    $('#content').on('click', '.complex .btn-cancel', function (e) {
        e.preventDefault();
        clearComplex($(this).closest('div'));
    });

    $('#content').on('change', '.js-users__copy-payout-settings', function (e) {
        if ($(this).val() == 0) {
            $('input[type="text"]').each(function (key, input) {
                $(input).val('');
            });
            return;
        }

        $.get('/users/copy-payout-settings/' + $(this).val(), function (res) {
            $.each(res.data, function (key, val) {
                var payout = $('#payout_' + val.payout_id);
                var com = $('#com_' + val.payout_id);
                var bundle = $('#bundle_' + val.payout_id);

                payout.find('input[type="text"]:enabled').each(function (key, input) {
                    var input = $(input);
                    input.val(val[input.attr('name')]);
                });

                com.find('input[type="text"]:enabled').each(function (key, input) {
                    var input = $(input);
                    input.val(val[input.attr('name')]);
                });

                bundle.find('input[type="text"]:enabled').each(function (key, input) {
                    var input = $(input);
                    input.val(val[input.attr('name')]);
                });
            });
        });
    });
}

function validateUserEdit(form) {
    var vals = [];
    var valid = false;

    form.find('.bg-success').removeClass('bg-success');

    $('input[name="member_ids[]"]:checked').each(function () {
        vals.push($(this).val());
    });

    if (!vals.length) {
        // return false;
    }

    if ($.inArray(form.find('[name="action"]').val(), ['min', 'max', 'max_per_num', 'payout', 'com']) !== -1) {
        form.find('[type="text"]').each(function (key, input) {
            if ($(input).val() != '') {
                valid = true;
            }
        });
    }

    if ($.inArray(form.find('[name="action"]').val(), ['bundle']) !== -1) {
        form.find('select').each(function (key, input) {
            if ($(input).val() != -1) {
                valid = true;
            }
        });
    }

    if (form.find('[name="action"]').val() == 'gtg_active') {
        if (form.find('[name="active"]').val() != -1) {
            valid = true;
        }
    }

    if (form.find('[name="action"]').val() == 'btg_visibility') {
        $.each(bet_type_groups, function (key, val) {
            if (form.find('[name="btg_visible_' + val.id + '"]').val() != -1) {
                valid = true;
            }
        });
    }

    if (form.find('[name="action"]').val() == 'payout_active') {
        if (form.find('[name="active"]').val() != -1) {
            valid = true;
        }

        $.each(bet_type_groups, function (key, val) {
            if (form.find('[name="btg_active_' + val.id + '"]').val() != -1) {
                valid = true;
            }
        });
    }

    if (form.find('[name="action"]').val() == 'shop') {
        if (form.find('[name="shop_status"]').val() != -1) {
            valid = true;
        }

        if (form.find('[name="bill_lifespan"]').val() != '') {
            valid = true;
        }
    }

    return valid;
}

function setEdited(tr) {
    tr.addClass('bg-info');
    tr.find('.control button').show();
}

function clearEdited(tr) {
    tr.removeClass('bg-info');
    tr.find('input, select').each(function () {
        $(this).val($(this).attr('data-old'));
    })
    tr.find('input[type="checkbox"]').each(function () {
        $(this).prop('checked', $(this).attr('data-old') == 1);
    })
    tr.find('.control button').hide();
}

function setSaved(tr, result) {
    tr.removeClass('bg-info');
    tr.addClass('bg-success');
    tr.find('.control button').hide();

    $.each(result, function (key, value) {
        tr.find('input[name=' + key + '], select[name=' + key + ']').attr('data-old', value);
    });
}

function saveSimple(tr) {
    var data = {};
    data.action = tr.closest('div.tab-pane').attr('id');
    data.id = tr.data('parent-id');
    data.member_id = tr.data('member-id');

    tr.find('input, select').each(function () {
        data[$(this).attr('name')] = $(this).val();
    })

    tr.find('input[type=checkbox]').each(function () {
        data[$(this).attr('name')] = $(this).is(':checked') == true ? 1 : 0;
    })

    $.ajax({
        url: '/users/edit/' + data.id,
        method: 'put',
        data: data
    }).success(function (result) {
        if (!result.success) {
            alert(result.msg);
            return;
        }

        setSaved(tr, result);

        if (data.action == 'password') {
            tr.find('[name="password"]').each(function () {
                $(this).val('');
            });
        }
    });
}

function saveComplex(div) {
    div.find('tbody td').removeClass('bg-success');

    var data = {};
    data.div = div.attr('id');
    data.action = div.attr('data-action');
    data.payout_id = div.attr('data-payout-id');
    data.bet_type = div.attr('data-bet-type');
    data.id = div.attr('data-parent-id');
    data.ids = [];
    data.cols = [];
    data.col_vals = [];

    div.find('tbody input:checkbox:checked').each(function () {
        data.ids.push($(this).val());
    });

    div.find('thead input[type=text]').each(function () {
        if ($(this).val() !== '') {
            data[$(this).attr('name')] = $(this).val();
            data.cols.push($(this).attr('data-col'));
            data.col_vals.push($(this).val());
        }
    });

    if (data.ids.length == 0 || data.cols.length == 0) return;

    $.post('/users/edit/' + data.id, data, function (result) {

        if (result.error) {
            alert(result.error)
        } else {
            setSavedComplex(result);
        }
    }).done(function () {

    }).fail(function () {
        // alert('เกิดข้อผิดพลาด');
    });
}

function setSavedComplex(data) {
    var div = $('#' + data.div);
    div.find('.btn-cancel').trigger('click');

    $.each(data.ids, function (key, value) {
        $.each(data.cols, function (key2, value2) {
            div.find('tr[data-id=' + value + ']')
                .find('td[data-col=' + value2 + ']')
                .text(data.col_vals[key2])
                .addClass('bg-success');
        });
    });
}

function clearComplex(div, all) {
    div.find('tbody td').removeClass('bg-success');
    div.find('input:checkbox').prop('checked', false).prop('indeterminate', false);
    div.find('input:text').val('');
    div.find('select').val(0);

    div.find('select[name="shop_status"]').val(null);
}

// function saveGtgActive(div) {
//   div.find('tbody td').removeClass('bg-success');

//   var data               = {};
//   data.div               = div.attr('id');
//   data.action            = div.attr('data-action');
//   data.game_type_group_id = div.attr('data-game-type-group-id');
//   data.id                = div.attr('data-parent-id');
//   data.ids               = [];
//   data.active            = div.find('select[name=active]').val();

//   div.find('tbody input:checkbox:checked').each(function() {
//     data.ids.push($(this).val());
//   });


//   if (data.ids.length == 0 || data.active == 0) return;

//   $.post('/users/edit/'+data.id, data, function(result) {
//     if(result.error) {
//       alert(result.error)
//     } else {
//       setSavedActive(result);
//     }
//   });
// }

// function saveActive(div) {
//   div.find('tbody td').removeClass('bg-success');

//   var data       = {};
//   data.div       = div.attr('id');
//   data.action    = div.attr('data-action');
//   data.payout_id = div.attr('data-payout-id');
//   data.id        = div.attr('data-parent-id');
//   data.ids       = [];
//   data.active    = div.find('select[name=active]').val();

//   div.find('tbody input:checkbox:checked').each(function() {
//     data.ids.push($(this).val());
//   });

//   if (data.ids.length == 0 || data.active == 0) return;

//   $.post('/users/edit/'+data.id, data, function(result) {

//     if(result.error) {
//       alert(result.error)
//     } else {
//       setSavedActive(result);
//     }
//   }).done(function() {

//   }).fail(function() {
//     // alert('เกิดข้อผิดพลาด');
//   });
// }

function setSavedActive(data) {
    var div = $('#' + data.div);
    div.find('.btn-cancel').trigger('click');

    $.each(data.ids, function (key, value) {
        div.find('tr[data-id=' + value + ']')
            .find('td[data-col]')
            .text(data.active == 1 ? 'เปิด' : 'ปิด')
            .addClass('bg-success');
    });
}

function saveShop(div) {
    div.find('tbody td').removeClass('bg-success');

    var data = {};
    data.action = div.attr('data-action');
    data.parent_id = div.attr('data-parent-id');
    data.ids = [];

    var shop_status = div.find('select[name="shop_status"]').val();
    if (shop_status != '') {
        data.shop_status = div.find('select[name="shop_status"]').val();
    }

    var bill_lifespan = div.find('input[name="bill_lifespan"]').val();
    if (bill_lifespan != '') {
        data.bill_lifespan = div.find('input[name="bill_lifespan"]').val();
    }

    div.find('tbody input:checkbox:checked').each(function () {
        data.ids.push($(this).val());
    });

    if (data.ids.length == 0 || (data.shop_status == undefined && data.bill_lifespan == undefined)) return;

    $.post('/users/edit/' + data.parent_id, data, function (res) {
        if (res.error) {
            if (res.message) {
                alert(res.message);
            } else {
                alert(res.error);
            }
        }

        if (res.success) {
            setSavedShop(res.data);
        }
    });
}

function setSavedShop(data) {
    var div = $('[data-action="' + data.action + '"]');
    div.find('.btn-cancel').trigger('click');

    $.each(data.ids, function (key, value) {
        var tr = div.find('tr[data-id=' + value + ']');

        if (data.shop_status != undefined) {
            tr.find('td[data-attr="shop_status"]')
                .text(data.shop_status)
                .addClass('bg-success');
        }

        if (data.bill_lifespan != undefined) {
            tr.find('td[data-attr="bill_lifespan"]')
                .text(data.bill_lifespan)
                .addClass('bg-success');
        }
    });
}

function saveCancel(div) {
    div.find('tbody td').removeClass('bg-success');

    var data = {};
    data.action = div.attr('data-action');
    data.parent_id = div.attr('data-parent-id');
    data.ids = [];

    var cancel_in = div.find('input[name="cancel_in"]').val();
    if (cancel_in != '') {
        data.cancel_in = div.find('input[name="cancel_in"]').val();
    }

    var cancel_before = div.find('input[name="cancel_before"]').val();
    if (cancel_before != '') {
        data.cancel_before = div.find('input[name="cancel_before"]').val();
    }

    var cancel_gb_count = div.find('input[name="cancel_gb_count"]').val();
    if (cancel_gb_count != '') {
        data.cancel_gb_count = div.find('input[name="cancel_gb_count"]').val();
    }

    var cancel_gbbl_count = div.find('input[name="cancel_gbbl_count"]').val();
    if (cancel_gbbl_count != '') {
        data.cancel_gbbl_count = div.find('input[name="cancel_gbbl_count"]').val();
    }

    div.find('tbody input:checkbox:checked').each(function () {
        data.ids.push($(this).val());
    });

    if (data.ids.length == 0 || (data.cancel_in == undefined && data.cancel_before == undefined && data.cancel_gb_count == undefined && data.cancel_gbbl_count == undefined)) return;

    $.post('/users/edit/' + data.parent_id, data, function (res) {
        if (res.error) {
            if (res.message) {
                alert(res.message);
            } else {
                alert(res.error);
            }
        }

        if (res.success) {
            setSavedCancel(res.data);
        }
    });
}

function setSavedCancel(data) {
    var div = $('[data-action="' + data.action + '"]');
    div.find('.btn-cancel').trigger('click');

    $.each(data.ids, function (key, value) {
        var tr = div.find('tr[data-id=' + value + ']');

        if (data.cancel_in != undefined) {
            tr.find('td[data-attr="cancel_in"]')
                .text(data.cancel_in)
                .addClass('bg-success');
        }

        if (data.cancel_before != undefined) {
            tr.find('td[data-attr="cancel_before"]')
                .text(data.cancel_before)
                .addClass('bg-success');
        }

        if (data.cancel_gb_count != undefined) {
            tr.find('td[data-attr="cancel_gb_count"]')
                .text(data.cancel_gb_count)
                .addClass('bg-success');
        }

        if (data.cancel_gbbl_count != undefined) {
            tr.find('td[data-attr="cancel_gbbl_count"]')
                .text(data.cancel_gbbl_count)
                .addClass('bg-success');
        }
    });
}

function toggleRow() {
    var tr = $(this).closest('tr');
    var checked = $(this).prop('checked');
    tr.find('input[type="checkbox"]').prop('checked', checked);

}

function loadAjaxData(selector, url) {
    $(selector).widget_box('reload');
    $.get(url, function (data) {
        $(selector).replaceWith(data);
    }).always(function () {
        $(selector).trigger('reloaded.ace.widget');
    });
}

function pageShopBill() {
    $('#content').on('change', '.toggle-print-status', togglePrintStatus);
    $('#content').on('submit', '#form-search-bill', searchBill);

    $('#content').on('click', '.bill-confirm', confirmBill);
    $('#content').on('click', '.bill-cancel', cancelBill);
    $('#content').on('click', '.bill-print', printBill);
    $('#content').on('click', '.bill-pay', payBill);
}

function checkPrintStatus() {
    var print_status = Cookies.get('print-status');
    if (print_status !== undefined) {
        print_status = JSON.parse(print_status);
        $.each(print_status, function (key, value) {
            $('#' + key).val(value);
            if (value == undefined) {
                $('#' + key).val(2);
            }
        });
    }
}

function togglePrintStatus(e) {
    var print_status = Cookies.get('print-status');

    if (print_status == undefined)
        print_status = {};
    else
        print_status = JSON.parse(print_status);

    print_status[$(this).attr('id')] = $(this).val();
    Cookies.set('print-status', JSON.stringify(print_status));
}

function searchBill(e) {
    e.preventDefault();

    History.pushState({ 'time': new Date().getTime() }, '', '/shop/bills/' + $('#bill_id').val());
}

function confirmBill(e) {
    e.preventDefault();

    if (!confirm('ยืนยันโพย?')) return;

    $.get($(this).attr('href'), updateBillCallback);
}

function cancelBill(e) {
    e.preventDefault();

    if (!confirm('ยกเลิกโพย?')) return;

    $.get($(this).attr('href'), updateBillCallback);
}

function updateBillCallback(res) {
    if (res.msg != undefined) {
        alert(res.msg);
    }

    if (res.success === true) {
        var tr = $('#table-bills tr[data-id="' + res.id + '"]');
        tr.find('td[data-expires-in]').attr('data-expires-in', 0);
        tr.find('.bill-action').html('');
        tr.addClass('bg-dark');

        if (res.confirmed_at) {
            tr.attr('data-confirmed-at', res.confirmed_at);
        }

        if (res.deleted_at) {
            tr.attr('data-deleted-at', res.deleted_at);
            tr.find('.bill-qty').html('0.00');
            tr.find('.bill-com').html('0.00');
            tr.find('.bill-total').html('0.00');
        }
    }

    if (res.print === true) {
        var new_window = window.open(res.print_url + '?bill1_type=' + $('#bill-type').val() + '&bill2_type=' + $('#bill2-type').val());
    }

    if (res.error) {
        alert(res.error);
    }
}

function payBill(e) {
    e.preventDefault();

    if (!confirm('จ่ายเงินให้ลูกค้า?')) return;

    $.get($(this).attr('href'), payBillCallback);
}

function payBillCallback(res) {
    if (res.msg != undefined) {
        alert(res.msg);
    }

    if (res.success === true) {
        var tr = $('#table-bills tr[data-id="' + res.id + '"]');

        tr.addClass('bg-dark');

        var html = '<a href="' + res.print_url + '" class="bill-print"><img src="/img/printer.png"></a> จ่ายแล้ว';
        tr.find('.bill-prize').html(html);
    }

    if (res.print === true) {
        var new_window = window.open(res.print_url + '?bill1_type=' + $('#bill-type').val() + '&bill2_type=' + $('#bill2-type').val());
    }

    if (res.error) {
        alert(res.error);
    }
}

function billTimer() {
    table_bills.find('tbody tr').each(function (key, val) {
        var tr = $(this);
        var td = $(this).find('[data-expires-in]');
        var seconds = td.attr('data-expires-in') - 1;

        if (seconds > 0) {
            td.attr('data-expires-in', seconds)
                .text(dateTimeHI(seconds))
                .addClass('alert-danger deep-red bolder');
        } else {
            var text = 'ยกเลิกแล้ว';
            var classes = 'deep-red';
            if (tr.attr('data-confirmed-at') != '') {
                text = 'ยืนยันแล้ว';
                classes = ' deep-green';
            }

            td.attr('data-expires-in', 0)
                .text(text)
                .removeClass('alert-danger deep-red bolder')
                .addClass(classes);

            tr.find('.bill-action').html('');
        }
    });

    billTimeout = setTimeout('billTimer()', 1000);
}

function dateTimeHI(seconds) {
    var m = Math.floor(seconds / 60 % 60);
    var s = Math.floor(seconds % 60);

    return withZero(m) + ':' + withZero(s);
}

function printBill(e) {
    e.preventDefault();

    var newWindow = window.open($(this).attr('href') + '?bill1_type=' + $('#bill-type').val() + '&bill2_type=' + $('#bill2-type').val());
}

function pageMoney() {
    $('#content').on('click', '#money-table .btn-load-balance', loadBalanceBox);
    $('#content').on('click', '#money-table .btn-save-balance', transferBalance);
    $('#content').on('click', '#money-table .btn-return-balance', returnBalanceBox);
    $('#content').on('click', '#money-table .btn-multi-transfer', multiTransfer);

    $('#content').on('click', '#money-table .btn-load-credit', loadCreditBox);
    $('#content').on('click', '#money-table .btn-save-credit', updateCredit);
    $('#content').on('click', '#money-table .btn-return-credit', returnCreditBox);

    $('#content').on('change', '.user-order', function (e) {
        var href = window.location.href.split('?')[0];

        href += '?order=' + $(this).val();

        History.pushState({ 'time': new Date().getTime() }, '', href);
    });

    $('#content').on('change', '.user-filter', function (e) {
        var status = $(this).val();
        if (status == 4) {
            $('#content table tbody tr').show();
        } else {
            $('#content table tbody tr').each(function () {
                var tr = $('table tbody tr[data-id="' + $(this).attr('data-id') + '"]');
                if (tr.attr('data-status') == status) {
                    tr.show();
                } else {
                    tr.hide();
                    // tr.find('input[type="checkbox"]').prop('checked', false);
                }
            });
        }
    });
}

function loadBalanceBox(e) {
    e.preventDefault();
    var id = $(this).closest('tr').attr('data-id');
    var action = $(this).attr('data-action');

    $.get('/transfers/load/' + id + '/' + action, function (data) {
        closeAllCreditBox();
        closeAllBalanceBox();

        var tr = $('#money-table tr[data-id="' + data.member_id + '"]');
        var balance_box = tr.find('[data-balance]');
        var action_box = tr.find('.action-balance');

        tr.addClass('bg-info');

        var n2c = (numeric.test(data.parent_balance)) ? 'n2c' : '';

        var html = ''
            + '<span class="text-h5 bolder">' + data.lang.parent_balance + ' :</span>'
            + '<div class="text-h4 pv-5 bolder align-right ' + n2c + '">' + data.parent_balance + '</div>'
            + '<span class="text-h5 bolder">' + data.lang.member_pending + ' :</span>'
            + '<div class="text-h4 pv-5 bolder align-right n2c">' + data.member_pending + '</div>'
            + '<span class="text-h5 bolder">' + data.lang.amount + ' :</span>'
            + '<input type="text" class="amount form-control">';
        balance_box.html(html);
        balance_box.attr('data-balance', data.member_pending);

        action_box.find('.btn-save-balance').attr('data-action', data.action);
        action_box.find('.main-action-balance').hide();
        action_box.find('.sub-action-balance').show();

        // applyColor();
    });
}

function transferBalance(e) {
    e.preventDefault();
    var tr = $(this).closest('tr');
    var data = {};

    data.id = tr.attr('data-id');
    data.action = tr.find('.btn-save-balance').attr('data-action');
    data.amount = tr.find('.amount').val();

    $.post('/transfer', data, function (result) {
        if (result.error) {
            alert(result.error);
        }
        if (result.success) {
            alert(result.message);
            updateAccountSummary();
            closeBalanceBox(result.id, result.pending_balance);
            $('.sum-pending-balance').text(result.sum_pending_balance);
            applyColor();
        }
    });
}

function returnBalanceBox(e) {
    e.preventDefault();
    var id = $(this).closest('tr').attr('data-id');
    closeBalanceBox(id);
    applyColor();
}

function closeBalanceBox(id, amount) {
    var tr = $('tr[data-id="' + id + '"]');
    var balance_box = tr.find('[data-balance]');
    var action_box = tr.find('.action');

    tr.removeClass('bg-info');

    var amount = (typeof amount === undefined) ? balance_box.attr('data-balance') : amount;
    balance_box.attr('data-balance', amount);

    balance_box.html('<div class="align-right n2c">' + balance_box.attr('data-balance') + '</div>');

    action_box.find('.main-action').show();
    action_box.find('.sub-action').hide();
}

function closeAllBalanceBox() {
    $('#money-table tbody tr').each(function (key, value) {
        closeBalanceBox($(value).attr('data-id'));
    });
}

function multiTransfer() {
    var data = {};

    data.id_list = [];

    $('#money-table').find('.success').each(function () {
        $(this).addClass('hidden');
    });

    $('#money-table').find('input[type=checkbox]:checked').each(function () {
        if ($(this).val() != 0) data.id_list.push($(this).val());
    });

    if (data.id_list.length == 0) {
        alert('เลือกสมาชิกก่อน');
        return;
    }

    $('.btn-multi-transfer').prop('disabled', true);
    $.post('/transfer-list', data, function (result) {
        if (result.error) {
            alert(result.error);
            return;
        }

        if (result.success) {
            updateAccountSummary();
            loadContent(current_pathname);
            alert(result.message);
            $('.sum-pending-balance').text(result.sum_pending_balance);
        }
    }).fail(function () {
        // alert('เกิดข้อผิดพลาด');
    }).always(function () {
        $('input[type=checkbox]').prop('checked', false);
        $('.btn-multi-transfer').prop('disabled', false);
    });
}

function loadCreditBox(e) {
    e.preventDefault();
    var id = $(this).closest('tr').attr('data-id');

    $.get('/credit/load/' + id, function (data) {
        closeAllCreditBox();
        closeAllBalanceBox();

        var tr = $('#money-table tr[data-id="' + data.member_id + '"]');
        var credit_box = tr.find('[data-credit]');
        var action_box = tr.find('.action-credit');

        tr.addClass('bg-info');

        var n2c = (typeof data.lang.max_credit == 'string' || data.lang.max_credit instanceof String) ? '' : 'n2c';

        var html = ''
            + '<input type="text" name="new_credit" class="new-credit form-control">'
            + '<div class="align-right deep-red">' + data.lang.min_credit + '</div>'
            + '<div class="align-right deep-red">' + data.lang.max_credit + '</div>'
            ;
        credit_box.html(html);
        credit_box.attr('data-credit', data.member_balance);

        action_box.find('.main-action-credit').hide();
        action_box.find('.sub-action-credit').show();
    });
}

function updateCredit(e) {
    e.preventDefault();
    var data = {};

    var tr = $(this).closest('tr');
    data.id = tr.attr('data-id');
    data.new_credit = tr.find('input[name="new_credit"]').val();

    $.post('/credit/update/' + data.id, data, function (data) {
        if (data.error) {
            alert(data.error);
            return;
        }

        if (data.success) {
            alert(data.message);
            updateAccountSummary();
            closeCreditBox(data.id, data.credit);
            applyColor();
        }
    });
}

function returnCreditBox(e) {
    e.preventDefault();
    var id = $(this).closest('tr').attr('data-id');
    closeCreditBox(id);
    applyColor();
}

function closeCreditBox(id, credit) {
    var tr = $('tr[data-id="' + id + '"]');
    var credit_box = tr.find('[data-credit]');
    var action_box = tr.find('.action');

    tr.removeClass('bg-info');

    var credit = (typeof credit === undefined) ? credit_box.attr('data-credit') : credit;
    credit_box.attr('data-credit', credit);

    credit_box.html('<div class="align-right n0">' + credit_box.attr('data-credit') + '</div>');

    action_box.find('.main-action-credit').show();
    action_box.find('.sub-action-credit').hide();
}

function closeAllCreditBox() {
    $('#money-table tbody tr').each(function (key, value) {
        closeCreditBox($(value).attr('data-id'));
    });
}

function pageFinancialTransactions() {
    $('#content').on('change', '.member-list', function () {
        History.pushState({ 'time': new Date().getTime() }, '', $(this).val());
    });

    $('#content').on('click', '#tab-financial-requests a', function () {
        History.pushState({ 'time': new Date().getTime() }, '', $(this).attr('data-url'));
    });

    $('#content').on('change', '#filter-form #select-month', function () {
        $('#filter-form input[value="month"]').prop('checked', true);
    });

    $('#content').on('change', '#filter-form #input-from, #filter-form #input-to', function () {
        $('#filter-form input[value="range"]').prop('checked', true);
    });

    $('#content').on('submit', '#filter-form', function (e) {
        e.preventDefault();
        var form = $(this);
        var url = form.attr('action');
        var filter = form.find('[name="filter"]:checked').val();

        url += '/' + filter;
        if (filter == 'month') {
            url += '/' + form.find('[name="month"]').val();
        } else if (filter == 'range') {
            url += '/' + form.find('[name="from"]').val() + '/' + form.find('[name="to"]').val();
        }

        History.pushState({ 'time': new Date().getTime() }, '', url);
    });
}

function pageAlias() {
    $('#content').on('submit', '#create-alias-form', function (e) {
        e.preventDefault();
        postContent($(this));
        $('body,html').animate({
            scrollTop: 0
        }, 0);
    });

    $('#content').on('click', '#alias-table .btn-delete', function (e) {
        e.preventDefault();

        var tr = $(this).closest('tr'),
            id = tr.attr('data-id');

        if (confirm('ลบผู้ช่วย?')) {
            $.ajax({
                url: '/alias/' + id,
                type: 'delete',
                success: function (result) {
                    if (result.error) {
                        alert(result.error);
                        return;
                    }
                    loadAjaxData('#alias-table-container', '/ajax-alias');
                }
            }).fail(function () {
                // alert('เกิดข้อผิดพลาด');
            });
        }
    });
}

function pageAliasEdit() {
    $('#content').on('submit', '#edit-alias-form', function (e) {
        e.preventDefault();
        putContent($(this));
        $('body,html').animate({
            scrollTop: 0
        }, 0);
    })
}

function pageGameTypeGroup() {
    $('#content').on('submit', '#create-game-type-group-form', function (e) {
        e.preventDefault();
        postContent($(this), '#game-type-groups-container', '/ajax-game-type-groups');
    });

    $('#content').on('click', '#game-type-groups .btn-delete', function (e) {
        e.preventDefault();
        var tr = $(this).closest('tr');
        var id = tr.attr('data-id');
        var title = tr.find('.title').text();
        var result = confirm('ลบกลุ่มหวย ' + title + '?');

        if (result) {
            $.ajax({
                url: 'game-type-groups/' + id,
                type: 'delete',
                success: function (result) {
                    if (result.error) {
                        alert(result.error);
                        return;
                    }
                    loadAjaxData('#game-type-groups-container', '/ajax-game-type-groups');
                }
            }).fail(function () {
                // alert('เกิดข้อผิดพลาด');
            });
        }
    });
}

function pageGameTypeGroupEdit() {
    $('#content').on('submit', '#edit-game-type-group-form', function (e) {
        e.preventDefault();
        putContent($(this));
    });
}

function pageGameType() {
    $('#content').on('submit', '#create-game-type-form', function (e) {
        e.preventDefault();
        postContent($(this), '#game-types-container', '/ajax-game-types');
    });

    $('#content').on('click', '#game-types .btn-delete', function (e) {
        e.preventDefault();
        var tr = $(this).closest('tr');
        var id = tr.attr('data-id');
        var title = tr.find('.title').text();
        var result = confirm('ลบชนิดหวย ' + title + '?');

        if (result) {
            $.ajax({
                url: 'game-types/' + id,
                type: 'delete',
                success: function (result) {
                    if (result.error) {
                        alert(result.error);
                        return;
                    }
                    loadAjaxData('#game-types-container', '/ajax-game-types');
                }
            }).fail(function () {
                // alert('เกิดข้อผิดพลาด');
            });
        }
    });

    $('#content').on('click', '#game-types .btn-restore', function (e) {
        e.preventDefault();
        var tr = $(this).closest('tr');
        var id = tr.attr('data-id');
        var title = tr.find('.title').text();
        var result = confirm('กู้คืน ' + title + '?');

        if (result) {
            $.ajax({
                url: 'game-types/restore/' + id,
                type: 'put',
                success: function (result) {
                    if (result.error) {
                        alert(result.error);
                        return;
                    }
                    loadAjaxData('#game-types-container', '/ajax-game-types');
                }
            }).fail(function () {
                // alert('เกิดข้อผิดพลาด');
            });
        }
    });
}

function pageGameTypeEdit() {
    $('#content').on('submit', '#edit-game-type-form', function (e) {
        e.preventDefault();
        putContent($(this));
    });
}

function pageGame() {
    $('#content').on('submit', '#create-game-form', function (e) {
        e.preventDefault();
        postContent($(this), '#games-container', '/ajax-games?game_type_id=' + current_game_type_id);
    });

    $('#content').on('click', '#games .btn-close', function (e) {
        e.preventDefault();
        var tr = $(this).closest('tr');
        var id = tr.attr('data-id');
        var title = tr.find('.title').text();

        if (confirm('ปิดงวดหวย ' + title + '?')) {
            $.ajax({
                url: '/games/edit-status/' + $(this).attr('data-id'),
                type: 'put',
                data: { 'status': 3 },
                success: function (result) {
                    if (result.error) {
                        alert(result.error);
                    }
                    if (result.success) {
                        var url = ($('#ref').length != 0) ? $('#ref').val() : '/ajax-games?game_type_id=' + current_game_type_id;
                        loadAjaxData('#games-container', url);
                    }
                }
            }).fail(function () {
                // alert('เกิดข้อผิดพลาด');
            });
        }
    });

    $('#content').on('click', '#games .btn-delete', function (e) {
        e.preventDefault();
        var tr = $(this).closest('tr');
        var id = tr.attr('data-id');
        var title = tr.find('.title').text();
        var result = confirm('ลบงวดหวย ' + title + '?');

        if (result) {
            $.ajax({
                url: '/games/' + id,
                type: 'delete',
                success: function (result) {
                    if (result.error) {
                        alert(result.error);
                        return;
                    }
                    var url = ($('#ref').length != 0) ? $('#ref').val() : '/ajax-games?game_type_id=' + current_game_type_id;
                    loadAjaxData('#games-container', url);
                }
            }).fail(function () {
                // alert('เกิดข้อผิดพลาด');
            });
        }
    });
}

function pageGameEdit() {
    $('#content').on('submit', '#edit-game-form', function (e) {
        e.preventDefault();
        putContent($(this));
    });
}

function pageGameEditResult() {
    $('#content').on('click', '#calc-result', function (e) {
        var f3_up3 = $('[name="f3_up3"]').val();
        var up3 = $('[name="up3"]').val();

        if (f3_up3 != '') {
            $('[name="hl1"]').val(f3_up3.charAt(0) >= 5 ? 1 : 2);
            $('[name="hl2"]').val(f3_up3.charAt(1) >= 5 ? 1 : 2);
            $('[name="hl3"]').val(f3_up3.charAt(2) >= 5 ? 1 : 2);
        } else {
            $('[name="hl1"]').val(0);
            $('[name="hl2"]').val(0);
            $('[name="hl3"]').val(0);
        }

        if (up3 != '') {
            $('[name="hl4"]').val(up3.charAt(0) >= 5 ? 1 : 2);
            $('[name="hl5"]').val(up3.charAt(1) >= 5 ? 1 : 2);
            $('[name="hl6"]').val(up3.charAt(2) >= 5 ? 1 : 2);
        } else {
            $('[name="hl4"]').val(0);
            $('[name="hl5"]').val(0);
            $('[name="hl6"]').val(0);
        }

        if (f3_up3 != '') {
            $('[name="eo1"]').val(f3_up3.charAt(0) % 2 == 0 ? 3 : 4);
            $('[name="eo2"]').val(f3_up3.charAt(1) % 2 == 0 ? 3 : 4);
            $('[name="eo3"]').val(f3_up3.charAt(2) % 2 == 0 ? 3 : 4);
        } else {
            $('[name="eo1"]').val(0);
            $('[name="eo2"]').val(0);
            $('[name="eo3"]').val(0);
        }

        if (up3 != '') {
            $('[name="eo4"]').val(up3.charAt(0) % 2 == 0 ? 3 : 4);
            $('[name="eo5"]').val(up3.charAt(1) % 2 == 0 ? 3 : 4);
            $('[name="eo6"]').val(up3.charAt(2) % 2 == 0 ? 3 : 4);
        } else {
            $('[name="eo4"]').val(0);
            $('[name="eo5"]').val(0);
            $('[name="eo6"]').val(0);
        }

        if (f3_up3 != '' && up3 != '') {
            $('[name="f4"]').val(f3_up3.charAt(2) + up3);
            $('[name="f5"]').val(f3_up3.charAt(1) + f3_up3.charAt(2) + up3);
            $('[name="f6"]').val(f3_up3 + up3);
        } else {
            $('[name="f4"]').val('');
            $('[name="f5"]').val('');
            $('[name="f6"]').val('');
        }
    });

    $('#content').on('submit', '#edit-game-result-form', function (e) {
        e.preventDefault();

        var form = $(this);
        var data = form.serialize();

        $('#btn-update-game-result').prop('disabled', true);
        $('#info').removeClass('hidden');
        $('#error').addClass('hidden');
        $('#success').addClass('hidden');

        $.ajax({
            url: form.attr('action'),
            type: 'put',
            data: data,
            success: function (result) {
                if (result.error) {
                    $('#info').addClass('hidden');
                    $('#error').html(result.error.join('<br>')).hide().removeClass('hidden').fadeIn();
                    $('#success').addClass('hidden');
                }
                if (result.success) {
                    $('#info').addClass('hidden');
                    $('#error').addClass('hidden');
                    $('#success').html(result.success).removeClass('hidden');
                }
            }
        }).fail(function () {
            // alert('เกิดข้อผิดพลาด');
        }).always(function () {
            $('#btn-update-game-result').prop('disabled', false);
        });
    });
}

function pageGameEditReturn() {
    $('#content').on('submit', '#edit-game-return-form', function (e) {
        e.preventDefault();
        putContent($(this));
    });
}

function pageBulkInsert() {
    $('#content').on('submit', '#bulk-create-game-form', function (e) {
        e.preventDefault();

        var data = $(this).serialize();

        $.ajax({
            url: '/bulk-insert',
            data: data,
            type: 'post',
            success: function (result) {
                if (result.error) {
                    alert(result.error.join('\n'));
                    return;
                }
                if (result.success == true) {
                    $('#bulk-insert-result').html(result.html);
                }
            }
        }).fail(function () {
            // alert('เกิดข้อผิดพลาด');
        });
    });

    $('#content').on('click', '#bulk-check-all', function (e) {
        e.preventDefault();
        $(this).closest('.widget-box').find('input[type=checkbox]').prop('checked', true);
    });

    $('#content').on('click', '#bulk-uncheck-all', function (e) {
        e.preventDefault();
        $(this).closest('.widget-box').find('input[type=checkbox]').prop('checked', false);
    });
}

function pageNews() {
    $('#content').on('submit', '#create-news-form', function (e) {
        e.preventDefault();
        postContent($(this), '#news-container', '/ajax-news?game_type_id=' + current_game_type_id);
    });

    $('#content').on('change', '#create-news-form #is_global', function (e) {
        if ($(this).val() == 0) {
            $('#game_type').removeClass('hidden');
        } else {
            $('#game_type').addClass('hidden');
        }
    });

    $('#content').on('click', '#news .btn-delete', function (e) {
        e.preventDefault();

        var tr = $(this).closest('tr'),
            id = tr.attr('data-id');

        if (confirm('ลบข่าว?')) {
            $.ajax({
                url: 'news/' + id,
                type: 'delete',
                success: function (result) {
                    if (result.error) {
                        alert(result.error);
                        return;
                    }
                    loadAjaxData('#news-container', '/ajax-news?game_type_id=' + current_game_type_id);
                }
            }).fail(function () {
                // alert('เกิดข้อผิดพลาด');
            });
        }
    });
}

function pageNewsEdit() {
    $('#content').on('submit', '#edit-news-form', function (e) {
        e.preventDefault();
        putContent($(this));
    });
}

function pageMobileNews() {
    $('#content').on('submit', '#create-mobile-news-form', function (e) {
        e.preventDefault();

        var data = new FormData($(this)[0]);

        postContentWithFile($(this), '#mobile-news-container', '/ajax-mobile-news?game_type_id=' + current_game_type_id, 'post', data);
    });

    $('#content').on('change', '#create-mobile-news-form #is_global', function (e) {
        if ($(this).val() == 0) {
            $('#game_type').removeClass('hidden');
        } else {
            $('#game_type').addClass('hidden');
        }
    });

    $('#content').on('click', '#mobile-news .btn-delete', function (e) {
        e.preventDefault();

        var tr = $(this).closest('tr'),
            id = tr.attr('data-id');

        if (confirm('ลบข่าว?')) {
            $.ajax({
                url: 'mobile-news/' + id,
                type: 'delete',
                success: function (result) {
                    if (result.error) {
                        alert(result.error);
                        return;
                    }
                    loadAjaxData('#mobile-news-container', '/ajax-mobile-news?game_type_id=' + current_game_type_id);
                }
            }).fail(function () {
                // alert('เกิดข้อผิดพลาด');
            });
        }
    });
}

function pageMobileNewsEdit() {
    $('#content').on('submit', '#edit-mobile-news-form', function (e) {
        e.preventDefault();

        var data = new FormData($(this)[0]);

        postContentWithFile($(this), null, null, 'post', data);
    });
}

function pagePayout() {
    $('#content').on('submit', '.form-create-payout', ajaxFormSubmit);
}

function jsDelete(e) {
    e.preventDefault();

    if (!confirm('ลบข้อมูล?')) {
        return;
    }

    $(this).closest('.widget-body').widget_box('reload');

    $.ajax({
        url: $(this).attr('href'),
        type: 'DELETE',
        success: function () {
            pushState(window.location.href);
        }
    });
}

function jsRestore(e) {
    e.preventDefault();

    if (!confirm('กู้คืนข้อมูล?')) {
        return;
    }

    $(this).closest('.widget-body').widget_box('reload');

    $.ajax({
        url: $(this).attr('href'),
        type: 'PUT',
        success: function () {
            pushState(window.location.href);
        }
    });
}

function pagePayoutEdit() {
    $('#content').on('submit', '#edit-payout-form', function (e) {
        e.preventDefault();
        putContent($(this));
    });
}

function pageSystemSettingEdit() {
    // $('#content').on('submit', '#edit-system-setting-form', function(e) {
    //   e.preventDefault();

    //   var form = $(this);
    //   var data = form.serialize();

    //   form.find('.widget-box').widget_box('reload');

    //   $.ajax({
    //     url: '/system-settings',
    //     type: 'put',
    //     data: data,
    //     success: function(result) {
    //       if (result.error) {
    //         alert(result.error);
    //       } else {
    //         alert(result.success);
    //       }
    //     }
    //   }).fail(function() {
    //     // alert('เกิดข้อผิดพลาด');
    //   }).always(function() {
    //     form.find('.widget-box').trigger('reloaded.ace.widget');
    //   });
    // });

    // $('#content').on('submit', '.js-ajax-form', function(e) {
    //   e.preventDefault();

    //   var form = $(this);

    //   $.ajax({
    //     url: form.attr('action'),
    //     type: form.attr('data-method'),
    //     data: form.serialize(),
    //     success: function(result) {
    //       if (result.success) {
    //         alert(result.msg);
    //       }

    //       if (result.error) {
    //         alert(result.msg);
    //       }
    //     }
    //   });
    // });
}

function pageUserBet() {
    $('#content').on('click', '.toggle-search-form', function (e) {
        e.preventDefault();
        $('#search-form').toggle();
    });
}

function pageCancel() {
    $('#content').on('submit', '.form-cancel-search', searchCancel);
    $('#content').on('submit', '.form-cancel-bills', ajaxFormSubmit);
    $('#content').on('submit', '.form-cancel-bill-lines', ajaxFormSubmit);
}

function searchCancel(e) {
    e.preventDefault();

    var data = $(this).serialize();
    data += '&game_id=' + current_game_id;

    if (!$('#username').val()) {
        alert('ต้องกรอกชื่อผู้ใช้');
        return;
    }

    $.get($(this).attr('action'), data, function (result) {
        $('#search-result').html(result);
    });
}

function ajaxFormSubmit(e) {
    e.preventDefault();

    var form = $(this);

    $('.error').addClass('hidden');
    $('.success').addClass('hidden');

    $('#error').addClass('hidden');
    $('#info').hide().removeClass('hidden').fadeIn();
    $('#success').addClass('hidden');

    var data = $(this).serialize();

    if (form.data('before')) {
        if (!window[form.data('before')](form)) {
            return;
        }
    }

    $.ajax({
        url: $(this).attr('action'),
        method: $(this).data('method'),
        data: data,
        success: window[$(this).data('callback')]
    }).success(function (res) {
        if (form.data('feedback') == 'alert') {
            if ($.isArray(res.msg)) {
                alert(res.msg.join('\n'));
            } else {
                alert(res.msg);
            }
        } else if (form.data('feedback') == 'mixed') {
            if (!res.success) {
                if ($.isArray(res.msg)) {
                    alert(res.msg.join('\n'));
                } else {
                    alert(res.msg);
                }
                return;
            }

            if (res.data) {
                $.each(res.data.member_ids, function (member_key, member_id) {
                    $.each(res.data.cols, function (key, val) {
                        $('.table-' + res.data.table + '-row-' + member_id + '-col-' + key).html(val).addClass('bg-success');
                    });
                });
            }

            if (form.data('after') == 'reset') {
                form.trigger('reset');
            }
        } else {
            if (!res.success) {
                $('#info').addClass('hidden');
                $('#success').addClass('hidden');
                $('#error').html(res.msg.join('<br>')).hide().removeClass('hidden').fadeIn();
            }
        }

        if (res.error_inputs) {
            $.each(res.error_inputs, function (key, val) {
                form.find('.input-group-' + val + ' .error').removeClass('hidden');
            });
        }

        if (res.success_inputs) {
            $.each(res.success_inputs, function (key, val) {
                form.find('.input-group-' + val + ' .success').removeClass('hidden');
            });
        }

        if (res.success && res.redirect) {
            History.pushState({ 'time': new Date().getTime() }, '', res.redirect);
        }
    });
}

function cancelBillsCallback(result) {
    if (result.success == false) {
        alert(result.message);
        return;
    }

    if (result.success) {
        alert(result.message);
    }

    $('.cancelled-gb-count').text(result.count);

    $.each(result.ids, function (key, val) {
        $('[data-game-bill-id="' + val + '"] .qty').text('0.00');
        $('[data-game-bill-id="' + val + '"] .com').text('0.00');
        $('[data-game-bill-id="' + val + '"] .total').text('0.00');
        $('[data-game-bill-id="' + val + '"] .status').text('ยกเลิกแล้ว');
    });
}

function cancelBillLinesCallback(result) {
    if (result.success == false) {
        alert(result.message);
        return;
    }

    if (result.success) {
        alert(result.message);
    }

    $('.cancelled-gbbl-count').text(result.count);

    $.each(result.ids, function (key, val) {
        $('[data-game-bill-brief-line-id="' + val + '"] .status').text('ยกเลิกแล้ว');
    });
}

// function cancelBet(e) {
//   e.preventDefault();

//   var data = {};
//   data.game_id = current_game_id;
//   data.ids = [];

//   $('.bet-cancel:checked').each(function(key, value) {
//     data.ids.push($(value).attr('data-id'))
//   });

//   var ans = confirm('ยกเลิกรายการแทง?');
//   if (!ans) return;

//   $.post('/cancel', data, function(result) {
//     if (result.success) {
//       $.each(data.ids, function(key, id) {
//         $('input[data-id='+id+']').replaceWith('ยกเลิกแล้ว');
//       });
//     }
//     if (result.error) {
//       alert(result.error);
//     }
//   });
// }

function pageSettingLogs() {
    $('#content').on('submit', '#form-setting-logs', function (e) {
        e.preventDefault();

        var username = $('#username').val();

        $.get($(this).attr('action') + '/' + username, function (data) {
            if (data.error) {
                alert(data.error);
                return;
            }

            var tbody = $('#table-setting-logs tbody');
            var html = '';
            $.each(data, function (key, value) {
                html += '<tr>'
                    + '<td>' + (key + 1) + '</td>'
                    + '<td>' + value.created_at + '</td>'
                    + '<td>' + value.username + '</td>'
                    + '<td>' + value.desc + '</td>'
                    + '</tr>';
            });
            tbody.html(html);
        });
    });
}

function withCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function withZero(num) {
    return (num < 10) ? '0' + num : num;
}

function updateGlobalClock() {
    var now = new Date();
    now.setTime(now.getTime() - time_diff);
    // $('#global-clock').text('วัน' + days[now.getDay()] + 'ที่ ' + withZero(now.getDate()) + ' '
    $('#global-clock').text('วันที่ ' + withZero(now.getDate()) + ' '
        + months[now.getMonth()] + ' ' + (now.getFullYear() + 543) + ' เวลา ' + withZero(now.getHours())
        + ':' + withZero(now.getMinutes()) + ':' + withZero(now.getSeconds()));

    $('.global-clock').text('วันที่ ' + withZero(now.getDate()) + ' '
        + months[now.getMonth()] + ' ' + (now.getFullYear() + 543) + ' เวลา ' + withZero(now.getHours())
        + ':' + withZero(now.getMinutes()) + ':' + withZero(now.getSeconds()));
}

var pageBeingLoaded = false;
function loadContent(url, params) {
    if (pageBeingLoaded) {
        return;
    }

    pageBeingLoaded = true;

    clearTimeout(overallTimeout);
    clearTimeout(closedTimeout);

    var pathname = getLocation(url).pathname;
    current_pathname = pathname;

    if (pathname.indexOf('/') != 0) {
        pathname = '/' + pathname;
    }

    var qs = getLocation(url).search.replace('?', '');
    var ajax_path = pathname + '?_=' + new Date().getTime();
    ajax_path += '&' + qs;

    if (params != null)
        ajax_path += '&' + params;

    var append = '';
    if (pathname.indexOf('/') != 0) {
        pathname = '/' + pathname;
    }

    for (var i = game_type_specific_urls.length - 1; i >= 0; i--) {
        if (pathname.indexOf(game_type_specific_urls[i]) == 0) {
            append = '&game_type_id=' + current_game_type_id;
            ajax_path += append;
            break;
        }
    };

    for (var i = game_specific_urls.length - 1; i >= 0; i--) {
        if (pathname.indexOf(game_specific_urls[i]) == 0) {
            append = '&game_type_id=' + current_game_type_id;
            append = '&game_id=' + current_game_id;
            ajax_path += append;
            break;
        }
    };

    if (pathname.indexOf('/items/overall') == 0) {
        overallData = [];
        isOverallDataEmpty = true;
    }

    $('#spin').spin({ color: '#428bca', radius: 42, length: 0, width: 16, top: '96px' });

    $('.mobile-bet-hide').removeClass('hidden');
    $('#payout-box').detach().prependTo('#payout-box-container');
    $('#close-box').detach().prependTo('#close-box-container');
    $('[name="viewport"]').attr('content', 'width=1366, initial-scale=1.0')

    $.get(ajax_path, function (data) {
        $('#content').html(data);
        updateBreadcrumbs(pathname);

        if (pathname.indexOf('/games') == 0) {
            $('.select-game-hide').addClass('hidden');
            $('.invert-select-game-hide').removeClass('hidden');
        } else {
            $('.select-game-hide').removeClass('hidden');
            $('.invert-select-game-hide').addClass('hidden');
        }

        if (pathname === '/mobile-bet') {
            $('.mobile-bet-hide').addClass('hidden')
            $('#payout-box').detach().prependTo('#sidebar-box')
            $('#close-box').detach().prependTo('#under-table-box')
            $('[name="viewport"]').attr('content', 'initial-scale=1.0')
        }

        $('#spin').spin(false);
    }).fail(function () {
        // alert('เกิดข้อผิดพลาด');
    }).always(function () {
        pageBeingLoaded = false
    });
}

function postContent(form, selector, ajax_url) {
    form.find('button[type=submit]').attr('disabled', 'disabled');

    var url = form.attr('action');
    var data = form.serialize();

    $('#success').addClass('hidden');
    $('#error').addClass('hidden');
    $('#info').hide().removeClass('hidden').fadeIn();

    $.post(url, data, function (result) {
        if (result.error) {
            $('#info').addClass('hidden');
            $('#success').addClass('hidden');
            $('#error').html(result.error.join('<br>')).hide().removeClass('hidden').fadeIn();
        }

        if (result.success) {
            form.trigger('reset');

            if (selector && ajax_url) {
                loadAjaxData(selector, ajax_url);
            }

            $('#info').addClass('hidden');
            $('#success').html(result.success).hide().removeClass('hidden').fadeIn();
            $('#error').addClass('hidden');
        }
    }).fail(function () {
        // alert('เกิดข้อผิดพลาด');
    }).always(function () {
        form.find('button[type=submit]').removeAttr('disabled');
    });
}

function postContentWithFile(form, selector, ajax_url, type, data) {
    form.find('button[type=submit]').attr('disabled', 'disabled');

    var url = form.attr('action');
    console.log(data)

    $('#success').addClass('hidden');
    $('#error').addClass('hidden');
    $('#info').hide().removeClass('hidden').fadeIn();

    $.ajax({
        url: url,
        type: type,
        data: data,
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: false,
        success: function (result) {
            if (result.error) {
                $('#info').addClass('hidden');
                $('#success').addClass('hidden');
                $('#error').html(result.error.join('<br>')).hide().removeClass('hidden').fadeIn();
            }

            if (result.success) {
                if (result.reset) {
                    form.trigger('reset');
                }

                if (selector && ajax_url) {
                    loadAjaxData(selector, ajax_url);
                }

                $('#info').addClass('hidden');
                $('#success').html(result.success).hide().removeClass('hidden').fadeIn();
                $('#error').addClass('hidden');
            }
        }
    }).fail(function () {
        // alert('เกิดข้อผิดพลาด');
    }).always(function () {
        form.find('button[type=submit]').removeAttr('disabled');
    });
}

function putContent(form) {
    form.find('button[type=submit]').attr('disabled', 'disabled');

    var url = form.attr('action');
    var data = form.serialize();

    $.ajax({
        url: url,
        type: 'put',
        data: data,
        success: function (result) {
            if (result.error) {
                $('#success').addClass('hidden');
                $('#error').html(result.error.join('<br>')).hide().removeClass('hidden').fadeIn();
            } else {
                $('#error').addClass('hidden');
                $('#success').html(result.success).hide().removeClass('hidden').fadeIn();
            }
        }
    }).fail(function () {
        // alert('เกิดข้อผิดพลาด');
    }).always(function () {
        form.find('button[type=submit]').removeAttr('disabled');
    });
}

function updateBreadcrumbs(pathname) {
    var new_active = '';
    if (pathname.indexOf('/') != 0) {
        pathname = '/' + pathname;
    }

    // navbar urls
    for (var i = sidebar_urls.length - 1; i >= 0; i--) {
        if (pathname.indexOf(navbar_urls[i]) == 0) {
            renderNavbarBreadcrumbs(navbar_urls[i]);
            return;
        }
    };

    // eq url: of-member -> by-member
    for (var i = sidebar_urls.length - 1; i >= 0; i--) {
        if (pathname.indexOf(eq_urls[i]) == 0) {
            pathname = eq_urls2[eq_urls[i]];
            break;
        }
    };

    // sidebar urls
    for (var i = sidebar_urls.length - 1; i >= 0; i--) {
        if (pathname.indexOf(sidebar_urls[i]) == 0) {
            new_active = $('#sidebar').find('a[data-url$="' + sidebar_urls[i] + '"]');
            break;
        }
    };

    if (pathname === '/mobile-bet') {
        $('.mobile-bet-hide').addClass('hidden');
    } else {
        $('.mobile-bet-hide').removeClass('hidden');
    }

    $('.nav-list li.active').removeClass('active');

    new_active.addClass('active');
    var li = new_active.parents('.nav-list li');
    li.addClass('active');

    var breadcrumb_items = [];

    $(new_active).parents('.nav-list li').each(function () {
        $(this).find('.submenu').removeClass('nav-hide').addClass('nav-show').show();

        var link = $(this).find('> a');
        var text = link.text();
        var href = link.attr('href');
        breadcrumb_items.push({ 'text': text, 'href': href });
    })

    $('#breadcrumbs').find('li:not(:first)').remove();
    for (var i = breadcrumb_items.length - 1; i >= 0; i--) {
        var item = breadcrumb_items[i];
        $('#breadcrumbs').append('<li>' + item.text + '</li>');
    }
}

function renderNavbarBreadcrumbs(pathname) {
    $('#breadcrumbs').find('li:not(:first)').remove();
    $('#breadcrumbs').append('<li>' + navbar_breadcrumbs[pathname] + '</li>');
}

function updateAccountSummary() {
    if (!$('#account-summary').length)
        return;

    $.get('/account-summary', function (result) {
        if (result.success) {
            if (result.alive != true) {
                alert('มีการล็อคอินซ้อน หรือสถานะผู้ใช้งานถูกเปลี่ยน');
                window.location = '/logout';
                return;
            }
        }

        $('#credit_balance').text(result.credit_balance);
        if (isNaN(result.cash_balance * 1)) {
            $('#cash_balance').text(result.cash_balance);
        } else {
            $('#cash_balance').html(n0c(result.cash_balance));
        }
        $('#available').text(result.available);

        $('#max_credit').text(result.max_credit);
        $('#used_credit').text(result.used_credit);
        $('#credit_balance').text(result.credit_balance);
        $('#member_count').text(result.member_count);
        $('#member_online').text(result.member_online);
    }).fail(function () {
        // alert('เกิดข้อผิดพลาด ในการอัปเดต Account Summary');
    });
}

function getLocation(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
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
    var num = num.replace(/,/g, '');
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
    var num = num.replace(/,/g, '');
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

function applyColor() {
    $.each($('.n0'), function (key, value) {
        $(this).html(n0($(this).text()));
    });
    $.each($('.n2c'), function (key, value) {
        $(this).html(n2c($(this).text()));
    });
}

function addParameter(url, parameterName, parameterValue, atStart/*Add param before others*/) {
    replaceDuplicates = true;
    if (url.indexOf('#') > 0) {
        var cl = url.indexOf('#');
        urlhash = url.substring(url.indexOf('#'), url.length);
    } else {
        urlhash = '';
        cl = url.length;
    }
    sourceUrl = url.substring(0, cl);

    var urlParts = sourceUrl.split("?");
    var newQueryString = "";

    if (urlParts.length > 1) {
        var parameters = urlParts[1].split("&");
        for (var i = 0; (i < parameters.length); i++) {
            var parameterParts = parameters[i].split("=");
            if (!(replaceDuplicates && parameterParts[0] == parameterName)) {
                if (newQueryString == "")
                    newQueryString = "?";
                else
                    newQueryString += "&";
                newQueryString += parameterParts[0] + "=" + (parameterParts[1] ? parameterParts[1] : '');
            }
        }
    }
    if (newQueryString == "")
        newQueryString = "?";

    if (atStart) {
        newQueryString = '?' + parameterName + "=" + parameterValue + (newQueryString.length > 1 ? '&' + newQueryString.substring(1) : '');
    } else {
        if (newQueryString !== "" && newQueryString != '?')
            newQueryString += "&";
        newQueryString += parameterName + "=" + (parameterValue ? parameterValue : '');
    }
    return urlParts[0] + newQueryString + urlhash;
};