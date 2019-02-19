import weechat
import urllib2

weechat.register("whybot", "WhyBot", "6.6.6", "GPL3", "WhyBot Script", "", "")

weechat.prnt("", "WhyBotje")

def timer_cb(data, remaining_calls):
    weechat.prnt(weechat.current_buffer(), "%s" % data)
    return weechat.WEECHAT_RC_OK

weechat.hook_timer(20000, 0, 1, "timer_cb", "tr::\twhy???")

def tr_cb(data, buffer, args):
    a = args.split(' ')
    if len(a) < 2:
        weechat.prnt(weechat.current_buffer(), "tr::\tUsage /tr lang[,lang] text")
        return weechat.WEECHAT_RC_OK
    o = 'nl'
    l = a[0]
    ol = l.split(',')
    tl = ol[0]
    if len(ol) > 1:
        o = ol[1]
    t = ' '.join(a[1:])
    url = 'https://translate.googleapis.com/translate_a/single' + \
        '?client=gtx&sl=' + o + '&tl=' + tl + '&dt=t&q=' + t
    url = url.replace(' ', '%20')
    req = urllib2.Request(url)
    req.add_header('User-Agent', 'Mozilla/5.0')
    response = urllib2.urlopen(req)
    html = response.read()
    weechat.command(weechat.current_buffer(), "%s" % html.split('"')[1])
    return weechat.WEECHAT_RC_OK

weechat.hook_command('tr', 'Translate', 'host', '', '', 'tr_cb', '')
