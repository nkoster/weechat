# -*- coding: utf-8 -*-
import weechat

check_interval = 1000

channels = [
    [ '#cybar', 0 ],
    [ '#cyberworld', 0 ]
]

weechat.register('rxtx', 'Channel limiter', '0.02', 'GPL3', 'Channel Limiter', '', '')

def cl_cmd_cb(data, signal):
    global channels
    for channel in channels:
        buffer = weechat.info_get("irc_buffer", "ircnet," + channel[0])
        new_count = weechat.string_eval_expression("${buffer.nicklist_count}", {"buffer": buffer}, {}, {})
        if channel[1] != new_count:
            weechat.command(buffer, '/mode ' + channel[0] + ' +l ' + new_count)
            channel[1] = new_count
    return weechat.WEECHAT_RC_OK

weechat.hook_timer(check_interval, 0, 0, 'cl_cmd_cb', '')
