create table s_user (
    id varchar(36),
    username varchar(255) not null,
    password varchar(255) not null,
    fullname varchar(255) not null,
    email varchar(255) not null,
    nomor_hp varchar(100) not null,
    primary key (id),
    unique (username),
    unique (email)
);
