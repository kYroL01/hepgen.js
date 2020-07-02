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
    			srcIp: '602d:44c6:f220:8e40::1234',
    			dstIp: 'fbb1:8f70:146e:6fab::12a0',
    			srcPort: 5060,
    	  		dstPort: 5070                
    		},
    		pause: 0,
	        payload:
	        'INVITE sip:hepgen@lge.qxip.ipcx.nl;user=phone SIP/2.0\r\n'+
                'Via: SIP/2.0/UDP [602d:44c6:f220:8e40:0:0:0:1234];branch=z9hG4bK934d.2b60491d4b2268c90e588d8a91e4bba9.0\r\n'+
                'Max-Forwards: 70\r\n'+
                'From: "+31602146974" <sip:+31602146974@[602d:44c6:f220:8e40::1234]>;tag=g4t6aU1XaFr5S\r\n'+
                'To: <sip:+31612366699@lge.qxip.ipcx.nl;user=phone>\r\n'+
                'Call-ID: '+call_id+'\r\n'+
                'CSeq: 1 INVITE\r\n'+
                'Contact: <sip:+31602146974@[602d:44c6:f220:8e40::1234]>\r\n'+
                'Supported: timer, path, replaces\r\n'+
                'Session-Expires: 1800;refresher=uac\r\n'+
                'Min-SE: 1200\r\n'+
                'Privacy: none\r\n'+
                'Content-Type: application/sdp\r\n'+
                'Content-Disposition: session\r\n'+
                'Content-Length: 284\r\n'+
                'User-Agent: HEPGEN-UAC\r\n'+
                'v=0\r\n'+
                'o=FreeSWITCH 1586327319 1586327320 IN IP6 602d:44c6:f220:8e40::1234\r\n'+
                's=FreeSWITCH\r\n'+
                'c=IN IP6 602d:44c6:f220:8e40::5555\r\n'+
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
    			srcIp: 'fbb1:8f70:146e:6fab::12a0',
                dstIp: '602d:44c6:f220:8e40::1234',
    			srcPort: 5070,
    	  		dstPort: 5060
    		},
    		pause: 200,
	        payload:
	        'SIP/2.0 100 Trying\r\n'+
                'Call-ID: '+call_id+'\r\n'+
                'CSeq: 1 INVITE\r\n'+
                'From: "+31602146974" <sip:+31602146974@[602d:44c6:f220:8e40::1234]>;tag=g4t6aU1XaFr5S\r\n'+
                'To: <sip:+31612366699@lge.qxip.ipcx.nl;user=phone>;tag=127.0.0.1alUtKGp-01039+1+e15c0013+8c18051\r\n'+
                'Via: SIP/2.0/UDP [602d:44c6:f220:8e40:0:0:0:1234];branch=z9hG4bK934d.2b60491d4b2268c90e588d8a91e4bba9.0\r\n'+
                'Content-Length: 0\r\n'+
                'Contact: <sip:Fr4nkV1ncentZ4ppa@[fbb1:8f70:146e:6fab:1b11:b6a8:a0d5:12a0];transport=udp>\r\n'+
                'Server: Bluebol 5060 MGC-8 1.2.0.4.SP2.1\r\n'+
                '\r\n\r\n'
        },
        {
            // SIP 180 Ringing
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
                srcIp: 'fbb1:8f70:146e:6fab::12a0',
                dstIp: '602d:44c6:f220:8e40::1234',
    			srcPort: 5070,
    	  		dstPort: 5060
    		},
    		pause: 1000,
	        payload:
	        'SIP/2.0 180 Ringing\r\n'+
                'Call-ID: '+call_id+'\r\n'+
                'CSeq: 1 INVITE\r\n'+
                'From: "+31602146974" <sip:+31602146974@[21a0:m4m4:qx1p:s1p4::1234]>;tag=g4t6aU1XaFr5S\r\n'+
                'To: <sip:+31612366699@lge.qxip.ipcx.nl;user=phone>;tag=127.0.0.1alUtKGp-01039+1+e15c0013+8c18051\r\n'+
                'Via: SIP/2.0/UDP [602d:44c6:f220:8e40:0:0:0:1234];branch=z9hG4bK934d.2b60491d4b2268c90e588d8a91e4bba9.0\r\n'+
                'Content-Length: 285\r\n'+
                'Contact: <sip:Fr4nkV1ncentZ4ppa@[fbb1:8f70:146e:6fab:1b11:b6a8:a0d5:12a0];transport=udp>;oai=yyyyBv6Taw8yS_bWr+owxY+5x_8sYTXY>\r\n'+
                'Content-Type: application/sdp\r\n'+
                'Server: Bluebol 5060 MGC-8 1.2.0.4.SP2.1\r\n'+
                'Allow: INVITE,BYE,ACK,OPTIONS,CANCEL,PRACK,UPDATE\r\n'+
                'P-Early-Media: sendrecv\r\n'+
                'v=0\r\n'+
                'o=- 3795340956 3795340956 IN IP6 oit.k1r0l.qxiphepgenipv6.ipcx.nl\r\n'+
                's=-\r\n'+
                'c=IN IP6 fbb1:8f70:146e:6fab::7777\r\n'+
                't=0 0\r\n'+
                'm=audio 33000 RTP/AVP 8 101\r\n'+
                'a=sendrecv\r\n'+
                'a=ptime:20\r\n'+
                'a=maxptime:30\r\n'+
                'a=rtpmap:8 PCMA/8000\r\n'+
                'a=rtpmap:101 telephone-event/8000\r\n'+
                'a=fmtp:101 0-15\r\n'+
                'a=silenceSupp:off - - - -\r\n'+
                '\r\n\r\n'
        },
        {
            // SIP Response 200 OK
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
                srcIp: 'fbb1:8f70:146e:6fab::12a0',
                dstIp: '602d:44c6:f220:8e40::1234',
    			srcPort: 5070,
    	  		dstPort: 5060
    		},
    		pause: 1200,
	        payload:
	        'SIP/2.0 200 OK\r\n'+
                'From: "+31602146974" <sip:+31602146974@[21a0:m4m4:qx1p:s1p4::1234]>;tag=g4t6aU1XaFr5S\r\n'+
                'To: <sip:+31612366699@lge.qxip.ipcx.nl;user=phone>;tag=127.0.0.1alUtKGp-01039+1+e15c0013+8c18051\r\n'+
                'Via: SIP/2.0/UDP [602d:44c6:f220:8e40:0:0:0:1234];branch=z9hG4bK934d.2b60491d4b2268c90e588d8a91e4bba9.0\r\n'+
	        'Call-ID: '+call_id+'\r\n'+
	        'CSeq: 1 INVITE\r\n'+
	        'User-Agent: HEPGEN-UAS\r\n'+
	        'Allow: INVITE, ACK, CANCEL, OPTIONS, BYE, REFER, SUBSCRIBE, NOTIFY\r\n'+
	        'Supported: replaces path, 100rel, timer\r\n'+
                'Contact: <sip:Fr4nkV1ncentZ4ppa@[fbb1:8f70:146e:6fab:1b11:b6a8:a0d5:12a0];transport=udp>;oai=yyyyBv6Taw8yS_bWr+owxY+5x_8sYTXY>\r\n'+
                'Require: timer\r\n'+
                'Server: Bluebol 5060 MGC-8 1.2.0.4.SP2.1\r\n'+
	        'Content-Type: application/sdp\r\n'+
	        'Content-Length: 285\r\n'+
                'Privacy: none\r\n'+
	        'v=0\r\n'+
                'o=- 3795340956 3795340956 IN IP6 oit.k1r0l.qxiphepgenipv6.ipcx.nl\r\n'+
                's=-\r\n'+
                'c=IN IP6 fbb1:8f70:146e:6fab::7777\r\n'+
                't=0 0ì\r\n'+
                'm=audio 33000 RTP/AVP 8 101\r\n'+
                'a=sendrecv\r\n'+
                'a=ptime:20\r\n'+
                'a=maxptime:30\r\n'+
                'a=rtpmap:8 PCMA/8000\r\n'+
                'a=rtpmap:101 telephone-event/8000\r\n'+
                'a=fmtp:101 0-15\r\n'+
                'a=silenceSupp:off - - - -\r\n'+
	        '\r\n\r\n'
        },
        {
            // SIP ACK
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
                srcIp: '602d:44c6:f220:8e40::1234',
                dstIp: 'fbb1:8f70:146e:6fab::12a0',                
    			srcPort: 5060,
    	  		dstPort: 5070
    		},
    		pause: 1400,
	        payload:
	        'ACK sip:Fr4nkV1ncentZ4ppa@[fbb1:8f70:146e:6fab:1b11:b6a8:a0d5:12a0];transport=udp;oai=yyyyBv6Taw8yS_bWr+owxY+5x_8sYTXY SIP/2.0\r\n'+
                'Via: SIP/2.0/UDP [602d:44c6:f220:8e40:0:0:0:1234];branch=z9hG4bK934d.2b60491d4b2268c90e588d8a91e4bba9.0\r\n'+
                'Max-Forwards: 70\r\n'+
                'From: "+31602146974" <sip:+31602146974@[21a0:m4m4:qx1p:s1p4::1234]>;tag=g4t6aU1XaFr5S\r\n'+
                'To: <sip:+31612366699@lge.qxip.ipcx.nl;user=phone>;tag=127.0.0.1alUtKGp-01039+1+e15c0013+8c18051\r\n'+
                'Call-ID: '+call_id+'\r\n'+
                'CSeq: 1 ACK\r\n'+
                'Contact: <sip:mod_sofia@[602d:44c6:f220:8e40:0:0:0:1234]:5060>\r\n'+
                'Content-Length: 0\r\n'+
                'Allow: INVITE, ACK, BYE, CANCEL, OPTIONS, PRACK\r\n'+
                '\r\n\r\n'
        },
        {
            // SIP BYE
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
                srcIp: '602d:44c6:f220:8e40::1234',
                dstIp: 'fbb1:8f70:146e:6fab::12a0',                
    			srcPort: 5060,
    	  		dstPort: 5070
    		},
    		pause: 1600,
	        payload:
	        'BYE sip:Fr4nkV1ncentZ4ppa@[fbb1:8f70:146e:6fab:1b11:b6a8:a0d5:12a0];transport=udp;oai=yyyyBv6Taw8yS_bWr+owxY+5x_8sYTXY SIP/2.0\r\n'+
                'Via: SIP/2.0/UDP [602d:44c6:f220:8e40:0:0:0:1234];branch=z9hG4bK934d.2b60491d4b2268c90e588d8a91e4bba9.0\r\n'+
                'Max-Forwards: 70\r\n'+
                'From: "+31602146974" <sip:+31602146974@[602d:44c6:f220:8e40::1234]>;tag=g4t6aU1XaFr5S\r\n'+
                'To: <sip:+31612366699@lge.qxip.ipcx.nl;user=phone>;tag=127.0.0.1alUtKGp-01039+1+e15c0013+8c18051\r\n'+
                'Call-ID: '+call_id+'\r\n'+
                'CSeq: 1 BYE\r\n'+
                'Supported: timer, path, replaces\r\n'+
                'Reason: Q.850;cause=16;text="NORMAL_CLEARING"\r\n'+
                'Allow: INVITE, ACK, BYE, CANCEL, OPTIONS, PRACK\r\n'+
                'Content-Length: 0\r\n'+
                'User-Agent: HEPGEN-UAS\r\n'+
                '\r\n\r\n'
        },
        {
            // SIP Response 200 OK (final)
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
                srcIp: 'fbb1:8f70:146e:6fab::12a0',                
                dstIp: '602d:44c6:f220:8e40::1234',
    			srcPort: 5070,
    	  		dstPort: 5060
    		},
    		pause: 1800,
	        payload:
	        'SIP/2.0 200 OK\r\n'+
                'Call-ID: '+call_id+'\r\n'+
	        'CSeq: 1 BYE\r\n'+
                'From: "+31602146974" <sip:+31602146974@[602d:44c6:f220:8e40::1234]>;tag=g4t6aU1XaFr5S\r\n'+
                'To: <sip:+31612366699@lge.qxip.ipcx.nl;user=phone>;tag=127.0.0.1alUtKGp-01039+1+e15c0013+8c18051\r\n'+
                'Via: SIP/2.0/UDP [602d:44c6:f220:8e40:0:0:0:1234];branch=z9hG4bK934d.2b60491d4b2268c90e588d8a91e4bba9.0\r\n'+
	        'User-Agent: HEPGEN-UAS\r\n'+
	        'Allow: INVITE, ACK, CANCEL, OPTIONS, BYE, REFER, SUBSCRIBE, NOTIFY\r\n'+
                'Contact: <sip:Fr4nkV1ncentZ4ppa@[fbb1:8f70:146e:6fab:1b11:b6a8:a0d5:12a0];transport=udp>;oai=yyyyBv6Taw8yS_bWr+owxY+5x_8sYTXY>\r\n'+
                'Require: timer\r\n'+
                'Server: Bluebol 5060 MGC-8 1.2.0.4.SP2.1\r\n'+
	        'Content-Length: 0\r\n'+
                'Supported: replaces, path, 100rel, timer\r\n'+
	        '\r\n\r\n'
        },
    ]
};

// ------------------------------------------------------

module.exports = config;
