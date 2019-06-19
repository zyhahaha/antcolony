'use strict';

module.exports = {

    debug: true,

    // TODO:绑定address
    //address:'127.0.0.1',

    // redis相关
    redisHost: '127.0.0.1', // 服务器
    redisPort: 6379,
    // redisAuth: '123456',

    // mongodb相关
    mongodbHost: '106.12.138.191', // 服务器
    mongodbPort: 27017,
    mongodbDatabase: 'antcolony',
    mongodbUserName: 'antcolony',
    mongodbPassword: '123456',

    elasticsearchHost: '127.0.0.1:9200', // 127.0.0.1:9200

    // bootstrap dht
    //'bootstrapAddress': 'dht.transmissionbt.com',
    bootstrapAddress: 'router.utorrent.com',
    bootstrapPort: 6881,

    // remoteNodes数量限制
    remoteNodesLimit: 100000,

    // 单个worker内存限制
    memoryLimit: {
        'worker': '65',
        'male': '45',
        'female': '60'
    },

    // 保留多少天的热度
    hotCounts: 14,

    worker: {
        3000: {
            sended: true, // 是否发送find_node
            cycle: 20 // 周期，每隔多少毫秒发送一次find_node。值越小，频率越高
        },
        3001: {
            sended: true,
            cycle: 20
        },
        3002: {
            sended: true,
            cycle: 20
        },
        3003: {
            sended: true,
            cycle: 20
        },
        3004: {
            sended: true,
            cycle: 20
        }
    }
};
