// HEPGEN-JS SETTINGS for the IPv6 scenario
// ------------------------------------------------------

var call_id = Math.random().toString(36).substring(7) + '@0:0:0:0:0:0:0:1';

var config = {
    NAME: 'SIP Session + All Reports',
    HEP_SERVER: '127.0.0.1',
    HEP_PORT: 9060,
    HEP_ID: '2001',
    HEP_AUTH: 'myHep',
    // the Messages to send
    MESSAGES: [
        {
            // SIP INVITE
    		rcinfo: {
    			type: 'HEP',
    			version: 3,
    			payload_type: 1,
    			captureId: '2001',
    			capturePass: 'myHep',
    			ip_family: 10,
    			protocol: 17,
    			proto_type: 1,
    			correlation_id: call_id,
    			srcIp: '21a0:m4m4:qx1p:s1p4::1234',
    			dstIp: 'bl4k:s4bb:l3dd:z3pp:jim1:hdrx:p1nk:fl0y',
    			srcPort: 5060,
    	  		dstPort: 5070
    		},
    		pause: 0,
            payload:
                'INVITE sip:hepgen@lge.qxip.ipcx.nl;user=phone SIP/2.0\r\n'+
                'Via: SIP/2.0/UDP [21A0:M4M4:QX1P:S1P4:0:0:0:1234];branch=z9hG4bK934d.2b60491d4b2268c90e588d8a91e4bba9.0\r\n'+
                'Max-Forwards: 70\r\n'+
                'From: "+31602146974" <sip:+31602146974@[21a0:m4m4:qx1p:s1p4::1234]>;tag=g4t6aU1XaFr5S\r\n'+
                'To: <sip:+31612366699@lge.qxip.ipcx.nl;user=phone>\r\n'+
                'Call-ID: '+call_id+'\r\n'+
                'CSeq: 1 INVITE\r\n'+
                'Contact: <sip:+31602146974@[21a0:m4m4:qx1p:s1p4::1234]>\r\n'+
                'Supported: timer, path, replaces\r\n'+
                'Session-Expires: 1800;refresher=uac\r\n'+
                'Min-SE: 1200\r\n'+
                'Privacy: none\r\n'+
                'Content-Type: application/sdp\r\n'+
                'Content-Disposition: session\r\n'+
                'Content-Length: 284\r\n'+
                'User-Agent: HEPGEN-UAC\r\n'+
                'v=0\r\n'+
                'o=FreeSWITCH 1586327319 1586327320 IN IP6 21a0:m4m4:qx1p:s1p4::1234\r\n'+
                's=FreeSWITCH\r\n'+
                'c=IN IP6 21a0:m4m4:qx1p:s1p4::1234\r\n'+
                't=0 0\r\n'+
                'm=audio 44555 RTP/AVP 8 0 101\r\n'+
                'a=rtpmap:8 PCMA/8000\r\n'+
                'a=rtpmap:0 PCMU/8000\r\n'+
                'a=rtpmap:101 telephone-event/8000\r\n'+
                'a=fmtp:101 0-16\r\n'+
                'a=sendrecv\r\n'+
                'a=rtcp:20811\r\n'+
                'a=ptime:20\r\n'+
                '\r\n\r\n'
        },
        {
            // SIP Response 100 Trying
    		rcinfo: {
    			type: 'HEP',
    			version: 3,
    			payload_type: 1,
    			captureId: '2001',
    			capturePass: 'myHep',
    			ip_family: 10,
    			protocol: 17,
    			proto_type: 1,
    			correlation_id: call_id,
    			srcIp: 'bl4k:s4bb:l3dd:z3pp:jim1:hdrx:p1nk:fl0y',
    			dstIp: 'c1a0:m4m4:qx1p:s1p4:1234',
    			srcPort: 5070,
    	  		dstPort: 5060                
    		},
    		pause: 200,
            payload: 'TODO'
        },
        {
            // SIP Request
    		rcinfo: {
    			type: 'HEP',
    			version: 3,
    			payload_type: 1,
    			captureId: '2001',
    			capturePass: 'myHep',
    			ip_family: 10,
    			protocol: 17,
    			proto_type: 1,
    			correlation_id: call_id,
    			srcIp: 'c1a0:m4m4:qx1p:s1p4:1234',
    			dstIp: 'bl4k:s4bb:l3dd:z3pp:jim1:hdrx:p1nk:fl0y',
    			srcPort: 5060,
    	  		dstPort: 5070
    		},
    		pause: 1000,
            payload: 'OPTIONS sip:0:0:0:0:0:0:0:1 SIP/2.0\nCall-ID: '+call_id+'\nCSeq: 9999 OPTIONS\nFrom: <sip:nodejs@127.0.0.1>;tag=2628881569\nTo: <sip:nodejs@127.0.0.1>\nVia: SIP/2.0/UDP c1a0:m4m4:qx1p:s1p4:0:0:0:1234:5060;branch=z9hG4bK9b82aa8fb4c7705466a3456dfff7f384333332\nMax-Forwards: 70\nUser-Agent: HEPGEN-UAC\nContent-Length: 0\r\n\r\n'
        },
        
        {
            // SIP Response
    		rcinfo: {
    			type: 'HEP',
    			version: 3,
    			payload_type: 1,
    			captureId: '2001',
    			capturePass: 'myHep',
    			ip_family: 10,
    			protocol: 17,
    			proto_type: 1,
    			correlation_id: call_id,
    			srcIp: 'bl4k:s4bb:l3dd:z3pp:jim1:hdrx:p1nk:fl0y',
    			dstIp: 'c1a0:m4m4:qx1p:s1p4:1234',
    			srcPort: 5070,
    	  		dstPort: 5060
    		},
    		pause: 1200,
            payload:
	            'SIP/2.0 200 OK\r\n'+
	            'Via: SIP/2.0/UDP c1a0:m4m4:qx1p:s1p4:0:0:0:1234:5060;branch=z9hG4bK3365.2469d7e5f9b74442c0453dffe9b89adf.0;rport=5060\r\n'+
	            'From: <sip:nodejs@127.0.0.1>;transport=UDP>;tag=2628881569\r\n'+
	            'To: <sip:nodejs@127.0.0.1>;tag=as6db2fc4d\r\n'+
	            'Call-ID: '+call_id+'_b2b-1\r\n'+
	            'CSeq: 10 INVITE\r\n'+
	            'User-Agent: HEPGEN-UAS\r\n'+
	            'Allow: INVITE, ACK, CANCEL, OPTIONS, BYE, REFER, SUBSCRIBE, NOTIFY\r\n'+
	            'Supported: replaces path, 100rel, timer\r\n'+
	            'Contact: <sip:nodejs@127.0.0.1>\r\n'+
                'Server: Goooogle- 5060 MGC-8 1.2.0.4.SP2.1\r\n'+
	            'Content-Type: application/sdp\r\n'+
	            'Content-Length: 285\r\n'+
	            'v=0'+
                'o=- 3795340956 3795340956 IN IP6 oit.k1r0l.qxiphepgenipv6.ipcx.be'+
                's=-'+
                'c=IN IP6 bl4k:s4bb:l3dd:z3pp:jim1:hdrx:p1nk:fl0y'+
                't=0 0ì'+
                'm=audio 36914 RTP/AVP 8 101'+
                'a=sendrecv'+
                'a=ptime:20'+
                'a=maxptime:30'+
                'a=rtpmap:8 PCMA/8000'+
                'a=rtpmap:101 telephone-event/8000'+
                'a=fmtp:101 0-15'+
                'a=silenceSupp:off - - - -'+
	            '\r\n\r\n'
        },
    ]
};

// ------------------------------------------------------

module.exports = config;
