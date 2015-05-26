#redi介绍
开源 C语言 支持网络访问 基于内存 可持久化到硬盘
key-value
##特点
1.远程字典，并且允许其它应用程序通过TCP协议访问字典中的内容。
2.redis key-value数据库。
3.内存数据库 亦可支持持久化
4.支持多种数据类型 String字符串 hash哈希 list链表 set无序集合 zset有序集合
#语法
redis-cli.exe --h123.57.143.189
##字符串
基本的数据类型，可以存储任意类型的字符串，包括二进制。
set 设置一个值
get 获取一个值
incr 增加1
incrby num  count 为num增加count值
incrbyfloat
strlen key 获取键对应的值的长度
##哈希类型 h = hash
hset 设置值
hmset 设置多个值
hget 获取值 
hgetall 获取所有值
hdel 删除值


