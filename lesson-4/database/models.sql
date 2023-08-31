CREATE TABLE USERS(
    id serial primary key,
    username VARCHAR(32) not null,
    password VARCHAR(32) not null,
    email VARCHAR(32) not null,
    status boolean default true,
    created_at timestamp without time zone default current_timestamp,
    deleted_at timestamp without time zone,
    updated_at timestamp without time zone
);
insert into USERS(username, password, email, status)values('anaa','3525255','anna@example.com',true);