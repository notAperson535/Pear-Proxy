self.__uv$config = {
    prefix: '/sw/', 
    bare: '/bare/', 
    encodeUrl: Ultraviolet.codec.xor.encode, 
    decodeUrl: Ultraviolet.codec.xor.decode, 
    handler: '/uv/uv.handler.js', 
    bundle: '/uv/uv.bundle.js', 
    config: '/uv/uv.config.js', 
    sw: '/uv.sw.js', 
};