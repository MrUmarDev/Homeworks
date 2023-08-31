create table users(
    user_id serial primary key,
    username varchar(32) not null,
    password varchar(32) not null,
    email varchar not null,
    created_at timestamptz default current_timestamp,
    updated_at timestamptz,
    deleted_at timestamptz
);
create table workers(
    worker_id serial primary key,
    fullname varchar(64) not null,
    email varchar(64) not null,
    password varchar(32) not null,
    role boolean default true,
    is_active boolean default true,
    created_at timestamptz default current_timestamp,
    updated_at timestamptz,
    deleted_at timestamptz
);
create table history(
    id serial primary key,
    worker_id int REFERENCES workers(worker_id),
    product_id int REFERENCES products(product_id),
    kg float not null,
    count float not null,
    sell_price float default 0,
    buy_price float default 0,
    date_created timestamp default current_timestamp,
    created_at timestamp default current_timestamp,
    updated_at timestamp,
    deleted_at timestamp
);
create table products(
    product_id serial primary key,
    name varchar(255) NOT NULL,
    kg float not null,
    count float not null,
    buy_price float default 0,
    total_sumBuy float default 0,
    sell_price float default 0,
    total_sumSell float default 0,
    category_id int REFERENCES categories(category_id),
    is_active boolean default true
);
create table categories(
    category_id serial primary key,
    name varchar(255)
);