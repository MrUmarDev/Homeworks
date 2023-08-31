
create table users(
    user_id serial primary key,
    username varchar(32) not null,
    password varchar(32) not null,
    email varchar not null,
    balance int default 0,
    created_at timestamptz default current_timestamp,
    updated_at timestamptz,
    deleted_at timestamptz
);
create table services(
    service_id serial primary key,
    service_name varchar(32) not null,
    price float not null,
    owner_id int REFERENCES users(user_id),
    created_at timestamptz default current_timestamp,
    updated_at timestamptz,
    deleted_at timestamptz
);
create table transactions(
    id serial primary key,
    from_id int REFERENCES users(user_id),
    to_id int REFERENCES services(service_id),
    quantity float not null,
    created_at timestamptz default current_timestamp
);