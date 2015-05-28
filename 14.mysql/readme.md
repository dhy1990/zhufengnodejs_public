#简介
1. mysql多用户，多线程的数据库服务器。
2. 它使用的是SQL Structure query languar 结构化查询语言。
3. 速度快，使用方便，查询复杂查询语言。
4. 它可以跨平台。
#安装
http://dev.mysql.com/downloads/mysql/
https://www.apachefriends.org/zh_cn/index.html
http://www.phpmyadmin.net/home_page/downloads.php
http://www.navicat.com/cht/download
#数据库
##创建数据库
create database if not exists school default charset utf8;
##显示数据库
show databases like 'school%';
##使用数据库
use school;
##删除数据库
drop database if exists school;
#数据库表
##创建表
create table  tname(colname type 
是否不可以为空 默认值 是否自动增长 是否主键
[not null|null] [default default value]
[auto_increment] [primary key])
create table user(id int,name varchar(32));




