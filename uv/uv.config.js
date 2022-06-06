self.__uv$config = {
    prefix: '/service/', 
    bare: '/Pear-Proxy/', 
    encodeUrl: Ultraviolet.codec.xor.encode, 
    decodeUrl: Ultraviolet.codec.xor.decode, 
    handler: '/uv/uv.handler.js', 
    bundle: '/uv/uv.bundle.js', 
    config: '/uv/uv.config.js', 
    sw: '/sw.js', 
};