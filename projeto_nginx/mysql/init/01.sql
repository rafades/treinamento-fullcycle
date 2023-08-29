grant all on *.* to 'root'@'%';

use ngnix_usuario;

create table usuario (
    id bigint not null auto_increment,
    nome VARCHAR(255) default 'desconhecido',
    primary key(`id`)
);