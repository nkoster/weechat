weechat.register('whybot', 'WhyBot', '6.6.6', 'GPL3', 'WhyBot Script', '', '');

function buffer_input_cb() {
    weechat.print(buffer, 'INPUT');
    return weechat.WEECHAT_RC_OK;
}

function buffer_close_cb() {
    weechat.print(buffer, 'CLOSE');
    return weechat.WEECHAT_RC_OK;
}

var buffer = weechat.buffer_new('whybot', 'buffer_input_cb', '', 'buffer_close_cb', '');
weechat.buffer_set(buffer, 'title', 'whybot data buffer');
weechat.buffer_set(buffer, "localvar_set_no_log", "1");

function timer_cb(data, remaining_calls) {
    weechat.print(weechat.current_buffer(), data);
    return weechat.WEECHAT_RC_OK;
}

weechat.hook_timer(20000, 0, 1, "timer_cb", "WhyBot: all backdoors are open.");

function vv_cb(data, buffer, args) {
    weechat.print(weechat.current_buffer(), "(-:\thello " + args)
    return weechat.WEECHAT_RC_OK
}
weechat.hook_command('vv', 'WHOIS user', 'host', '', '', 'vv_cb', '');

function join_cb(data, signal, signal_data) {
    weechat.print(buffer, "(-:\t" + signal + " " + signal_data);
    return weechat.WEECHAT_RC_OK
}
weechat.hook_signal("*,irc_in2_join", "join_cb", "");

function priv_cb(data, signal, signal_data) {
    var sd = signal_data.toString().split(' ');
    var msg = sd.slice(3).toString();
    msg = msg.substr(1);
    if (sd[2][0] === '#') {
        weechat.print(buffer, '(-:\tchannel message');
    } else {
        weechat.print(buffer, '(-:\tprivate message from ' +
            sd[2].substr(0, sd[2].length - 1) + ' ' + msg);
    }
    weechat.print(buffer,'(-:\t"' + signal_data + '"');
    return weechat.WEECHAT_RC_OK
}
weechat.hook_signal("*,irc_in2_privmsg", "priv_cb", "");

function quit_cb(data, signal, signal_data) {
    weechat.print(buffer, '(-:\t' + signal + ' ' + signal_data);
    return weechat.WEECHAT_RC_OK
}
weechat.hook_signal('*,irc_in2_quit', 'quit_cb', '');

weechat.print(weechat.current_buffer(), "WhyBotje");
