create table s_user (
    id varchar(36),
    username varchar(255) not null,
    password varchar(255) not null,
    primary key (id),
    unique (username)
);
