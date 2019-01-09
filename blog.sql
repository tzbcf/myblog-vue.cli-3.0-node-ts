# Host: 127.0.0.1  (Version 5.5.53)
# Date: 2019-01-09 17:28:35
# Generator: MySQL-Front 6.0  (Build 2.20)


#
# Structure for table "users_article_details"
#

CREATE TABLE `users_article_details` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL DEFAULT '' COMMENT '用户名',
  `type` varchar(255) NOT NULL DEFAULT '' COMMENT '文章类型',
  `title` varchar(255) NOT NULL DEFAULT '' COMMENT '文章标题',
  `content` text NOT NULL COMMENT '文章内容',
  `createTime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updateTime` datetime DEFAULT '0000-00-00 00:00:00' COMMENT '更新修改时间',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COMMENT='文章内容表';

#
# Structure for table "users_details"
#

CREATE TABLE `users_details` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `authority` tinyint(3) DEFAULT '0' COMMENT '权限',
  `createTime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updateTime` datetime DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='用户详情';
