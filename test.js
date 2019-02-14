weechat.register("test_js", "FlashCode", "1.0", "GPL3", "Test script", "", "");

function timer_cb(data, remaining_calls) {
    weechat.print("", data);
    return weechat.WEECHAT_RC_OK;
}

weechat.hook_timer(5000, 0, 1, "timer_cb", "huuuuuu");

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

weechat.hook_command('vv', 'WHOIS user', 'host', '', '', 'vv_cb', '');

function priv_cb(data, signal, signal_data) {
    weechat.print(weechat.current_buffer(),"(-:\t" + signal + " " + signal_data);
    return weechat.WEECHAT_RC_OK
}
weechat.hook_signal("*,irc_in2_privmsg", "priv_cb", "");

weechat.print("", "Hello, from javascript script!");
