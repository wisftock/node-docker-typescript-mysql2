create database if not exists dockernode;

use dockernode;

drop table if not exists users;

create table users( 
   id bigint not null auto_increment primary key,
   first_name varchar(255) default null, 
   last_name varchar(255) default null,
   email varchar(255) unique default null, 
   address varchar(255) default null, 
   phone varchar(255) default null, 
   isActive tinyint default null, 
   image_url varchar(255) default null, 
   role varchar(255) default null,
   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)