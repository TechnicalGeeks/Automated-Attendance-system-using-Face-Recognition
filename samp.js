ServerResponse {
    _events: [Object: null prototype] {
      finish: [ [Function: bound resOnFinish], [Function: onevent] ],
      end: [Function: onevent]
    },
    _eventsCount: 2,
    _maxListeners: undefined,
    outputData: [],
    outputSize: 0,
    writable: true,
    _last: false,
    chunkedEncoding: false,
    shouldKeepAlive: true,
    useChunkedEncodingByDefault: true,
    sendDate: true,
    _removedConnection: false,
    _removedContLen: false,
    _removedTE: false,
    _contentLength: null,
    _hasBody: true,
    _trailer: '',
    finished: false,
    _headerSent: false,
    socket: Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: null,
      _readableState: ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        emitClose: false,
        autoDestroy: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null,
        [Symbol(kPaused)]: false
      },
      readable: true,
      _events: [Object: null prototype] {
        end: [Array],
        timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
        error: [Array],
        close: [Array],
        drain: [Function: bound socketOnDrain],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause]
      },
      _eventsCount: 8,
      _maxListeners: undefined,
      _writableState: WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        afterWriteTickInfo: null,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        emitClose: false,
        autoDestroy: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object]
      },
      writable: true,
      allowHalfOpen: true,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: Server {
        insecureHTTPParser: undefined,
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 2,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        maxHeadersCount: null,
        headersTimeout: 40000,
        _connectionKey: '4:127.0.0.1:3011',
        [Symbol(IncomingMessage)]: [Function: IncomingMessage],
        [Symbol(ServerResponse)]: [Function: ServerResponse],
        [Symbol(kCapture)]: false,
        [Symbol(asyncId)]: 37
      },
      _server: Server {
        insecureHTTPParser: undefined,
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 2,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        maxHeadersCount: null,
        headersTimeout: 40000,
        _connectionKey: '4:127.0.0.1:3011',
        [Symbol(IncomingMessage)]: [Function: IncomingMessage],
        [Symbol(ServerResponse)]: [Function: ServerResponse],
        [Symbol(kCapture)]: false,
        [Symbol(asyncId)]: 37
      },
      timeout: 120000,
      parser: HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: bound onParserExecute],
        _headers: [],
        _url: '',
        socket: [Circular],
        incoming: [IncomingMessage],
        outgoing: null,
        maxHeaderPairs: 2000,
        _consumed: true,
        onIncoming: [Function: bound parserOnIncoming],
        parsingHeadersStart: 1632290580909
      },
      on: [Function: socketListenerWrap],
      addListener: [Function: socketListenerWrap],
      prependListener: [Function: socketListenerWrap],
      _paused: false,
      _httpMessage: [Circular],
      _peername: { address: '127.0.0.1', family: 'IPv4', port: 51041 },
      [Symbol(asyncId)]: 78,
      [Symbol(kHandle)]: TCP {
        reading: true,
        onconnection: null,
        _consumed: true,
        [Symbol(owner)]: [Circular]
      },
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: Timeout {
        _idleTimeout: 120000,
        _idlePrev: [TimersList],
        _idleNext: [Timeout],
        _idleStart: 19676,
        _onTimeout: [Function: bound ],
        _timerArgs: undefined,
        _repeat: null,
        _destroyed: false,
        [Symbol(refed)]: false,
        [Symbol(asyncId)]: 79,
        [Symbol(triggerId)]: 78
      },
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    connection: Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: null,
      _readableState: ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        emitClose: false,
        autoDestroy: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null,
        [Symbol(kPaused)]: false
      },
      readable: true,
      _events: [Object: null prototype] {
        end: [Array],
        timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
        error: [Array],
        close: [Array],
        drain: [Function: bound socketOnDrain],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause]
      },
      _eventsCount: 8,
      _maxListeners: undefined,
      _writableState: WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        afterWriteTickInfo: null,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        emitClose: false,
        autoDestroy: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object]
      },
      writable: true,
      allowHalfOpen: true,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: Server {
        insecureHTTPParser: undefined,
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 2,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        maxHeadersCount: null,
        headersTimeout: 40000,
        _connectionKey: '4:127.0.0.1:3011',
        [Symbol(IncomingMessage)]: [Function: IncomingMessage],
        [Symbol(ServerResponse)]: [Function: ServerResponse],
        [Symbol(kCapture)]: false,
        [Symbol(asyncId)]: 37
      },
      _server: Server {
        insecureHTTPParser: undefined,
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 2,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        maxHeadersCount: null,
        headersTimeout: 40000,
        _connectionKey: '4:127.0.0.1:3011',
        [Symbol(IncomingMessage)]: [Function: IncomingMessage],
        [Symbol(ServerResponse)]: [Function: ServerResponse],
        [Symbol(kCapture)]: false,
        [Symbol(asyncId)]: 37
      },
      timeout: 120000,
      parser: HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: bound onParserExecute],
        _headers: [],
        _url: '',
        socket: [Circular],
        incoming: [IncomingMessage],
        outgoing: null,
        maxHeaderPairs: 2000,
        _consumed: true,
        onIncoming: [Function: bound parserOnIncoming],
        parsingHeadersStart: 1632290580909
      },
      on: [Function: socketListenerWrap],
      addListener: [Function: socketListenerWrap],
      prependListener: [Function: socketListenerWrap],
      _paused: false,
      _httpMessage: [Circular],
      _peername: { address: '127.0.0.1', family: 'IPv4', port: 51041 },
      [Symbol(asyncId)]: 78,
      [Symbol(kHandle)]: TCP {
        reading: true,
        onconnection: null,
        _consumed: true,
        [Symbol(owner)]: [Circular]
      },
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: Timeout {
        _idleTimeout: 120000,
        _idlePrev: [TimersList],
        _idleNext: [Timeout],
        _idleStart: 19676,
        _onTimeout: [Function: bound ],
        _timerArgs: undefined,
        _repeat: null,
        _destroyed: false,
        [Symbol(refed)]: false,
        [Symbol(asyncId)]: 79,
        [Symbol(triggerId)]: 78
      },
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    _header: null,
    _onPendingData: [Function: bound updateOutgoingData],
    _sent100: false,
    _expect_continue: false,
    req: IncomingMessage {
      _readableState: ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: true,
        endEmitted: true,
        reading: false,
        sync: false,
        needReadable: false,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        emitClose: true,
        autoDestroy: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null,
        [Symbol(kPaused)]: false
      },
      readable: false,
      _events: [Object: null prototype] {
        end: [Function: resetHeadersTimeoutOnReqEnd]
      },
      _eventsCount: 1,
      _maxListeners: undefined,
      socket: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        readable: true,
        _events: [Object: null prototype],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: true,
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        timeout: 120000,
        parser: [HTTPParser],
        on: [Function: socketListenerWrap],
        addListener: [Function: socketListenerWrap],
        prependListener: [Function: socketListenerWrap],
        _paused: false,
        _httpMessage: [Circular],
        _peername: [Object],
        [Symbol(asyncId)]: 78,
        [Symbol(kHandle)]: [TCP],
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: Timeout {
          _idleTimeout: 120000,
          _idlePrev: [TimersList],
          _idleNext: [Timeout],
          _idleStart: 19676,
          _onTimeout: [Function: bound ],
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: false,
          [Symbol(refed)]: false,
          [Symbol(asyncId)]: 79,
          [Symbol(triggerId)]: 78
        },
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0
      },
      connection: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        readable: true,
        _events: [Object: null prototype],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: true,
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        timeout: 120000,
        parser: [HTTPParser],
        on: [Function: socketListenerWrap],
        addListener: [Function: socketListenerWrap],
        prependListener: [Function: socketListenerWrap],
        _paused: false,
        _httpMessage: [Circular],
        _peername: [Object],
        [Symbol(asyncId)]: 78,
        [Symbol(kHandle)]: [TCP],
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: Timeout {
          _idleTimeout: 120000,
          _idlePrev: [TimersList],
          _idleNext: [Timeout],
          _idleStart: 19676,
          _onTimeout: [Function: bound ],
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: false,
          [Symbol(refed)]: false,
          [Symbol(asyncId)]: 79,
          [Symbol(triggerId)]: 78
        },
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0
      },
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      headers: {
        host: 'localhost:3011',
        connection: 'keep-alive',
        'content-length': '46',
        'cache-control': 'max-age=0',
        'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'http://localhost:3011',
        'upgrade-insecure-requests': '1',
        dnt: '1',
        'content-type': 'application/x-www-form-urlencoded',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        referer: 'http://localhost:3011/signUp',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9,hi;q=0.8'
      },
      rawHeaders: [
        'Host',
        'localhost:3011',
        'Connection',
        'keep-alive',
        'Content-Length',
        '46',
        'Cache-Control',
        'max-age=0',
        'sec-ch-ua',
        '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        'sec-ch-ua-mobile',
        '?0',
        'sec-ch-ua-platform',
        '"Windows"',
        'Origin',
        'http://localhost:3011',
        'Upgrade-Insecure-Requests',
        '1',
        'DNT',
        '1',
        'Content-Type',
        'application/x-www-form-urlencoded',
        'User-Agent',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',
        'Accept',
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site',
        'same-origin',
        'Sec-Fetch-Mode',
        'navigate',
        'Sec-Fetch-User',
        '?1',
        'Sec-Fetch-Dest',
        'document',
        'Referer',
        'http://localhost:3011/signUp',
        'Accept-Encoding',
        'gzip, deflate, br',
        'Accept-Language',
        'en-US,en;q=0.9,hi;q=0.8'
      ],
      trailers: {},
      rawTrailers: [],
      aborted: false,
      upgrade: false,
      url: '/signUp',
      method: 'POST',
      statusCode: null,
      statusMessage: null,
      client: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        readable: true,
        _events: [Object: null prototype],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: true,
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        timeout: 120000,
        parser: [HTTPParser],
        on: [Function: socketListenerWrap],
        addListener: [Function: socketListenerWrap],
        prependListener: [Function: socketListenerWrap],
        _paused: false,
        _httpMessage: [Circular],
        _peername: [Object],
        [Symbol(asyncId)]: 78,
        [Symbol(kHandle)]: [TCP],
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: Timeout {
          _idleTimeout: 120000,
          _idlePrev: [TimersList],
          _idleNext: [Timeout],
          _idleStart: 19676,
          _onTimeout: [Function: bound ],
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: false,
          [Symbol(refed)]: false,
          [Symbol(asyncId)]: 79,
          [Symbol(triggerId)]: 78
        },
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0
      },
      _consuming: true,
      _dumped: false,
      next: [Function: next],
      baseUrl: '',
      originalUrl: '/signUp',
      _parsedUrl: Url {
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: null,
        query: null,
        pathname: '/signUp',
        path: '/signUp',
        href: '/signUp',
        _raw: '/signUp'
      },
      params: {},
      query: {},
      res: [Circular],
      body: [Object: null prototype] {
        username: 'rushabporwal29',
        role: '1',
        password: '123456'
      },
      _body: true,
      length: undefined,
      _startAt: [ 90640, 618434099 ],
      _startTime: 2021-09-22T06:03:00.910Z,
      _remoteAddress: '127.0.0.1',
      route: Route { path: '/signUp', stack: [Array], methods: [Object] },
      [Symbol(kCapture)]: false
    },
    locals: [Object: null prototype] {},
    _startAt: undefined,
    _startTime: undefined,
    writeHead: [Function: writeHead],
    __onFinished: [Function: listener] { queue: [ [Function: logRequest] ] },
    [Symbol(kCapture)]: false,
    [Symbol(kNeedDrain)]: false,
    [Symbol(corked)]: 0,
    [Symbol(kOutHeaders)]: [Object: null prototype] {
      'x-powered-by': [ 'X-Powered-By', 'Express' ]
    }
  }