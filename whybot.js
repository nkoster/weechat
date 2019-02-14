weechat.register("whybot", "WhyBot", "6.6.6", "GPL3", "WhyBot Script", "", "");

function timer_cb(data, remaining_calls) {
    weechat.print(weechat.current_buffer(), data);
    return weechat.WEECHAT_RC_OK;
}

weechat.hook_timer(5000, 0, 1, "timer_cb", "WhyBot: all backdoors are open.");

function vv_cb(data, buffer, args) {
    weechat.print(weechat.current_buffer(), "(-:\thello " + args)
    return weechat.WEECHAT_RC_OK
}

weechat.hook_command('vv', 'WHOIS user', 'host', '', '', 'vv_cb', '');

function join_cb(data, signal, signal_data) {
    weechat.print(weechat.current_buffer(),"(-:\t" + signal + " " + signal_data);
    return weechat.WEECHAT_RC_OK
}
weechat.hook_signal("*,irc_in2_join", "join_cb", "");

function priv_cb(data, signal, signal_data) {
    var sd = signal_data.toString().split(' ');
    var msg = sd.slice(3).toString();
    msg = msg.substr(1);
    if (sd[2][0] === '#') {
        weechat.print(weechat.current_buffer(), '(-:\tchannel message');
    } else {
        weechat.print(weechat.current_buffer(), '(-:\tprivate message from ' +
            sd[2].substr(0, sd[2].length - 1) + ' ' + msg);
    }
    weechat.print(weechat.current_buffer(),'(-:\t\"' + signal_data + '"');
    return weechat.WEECHAT_RC_OK
}
weechat.hook_signal("*,irc_in2_privmsg", "priv_cb", "");

weechat.print(weechat.current_buffer(), "WhyBot");
