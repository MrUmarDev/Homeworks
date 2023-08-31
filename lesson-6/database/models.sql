create extension if not exists "uuid-ossp";
create table admins(
    id serial primary key,
    username varchar(32) not null,
    email varchar(32) not null,
    password varchar(32) not null,
    is_active boolean default true
);

create table contact_us(
    id serial primary key,
    name varchar not null,
    phone_number varchar not null,
    email varchar not null,
    message varchar not null,
    is_viewed boolean default false
);

create table services(
    id serial primary key,
    title text not null,
    description text not null,
    photos_id int REFERENCES photos(photo_id),
    is_active boolean not null,
    created_at timestamptz default current_timestamp,
    deleted_at timestamptz,
    updated_at timestamptz
);

create table photos(
    photo_id serial primary key,
    url text not null
);

create table blogs(
    id serial primary key,
    title text not null,
    description text not null,
    photos_id int REFERENCES photos(photo_id),
    is_active boolean not null,
    created_at timestamptz default current_timestamp,
    updated_at timestamptz default current_timestamp,
    deleted_at timestamptz
);

create table feedbacks(
    id uuid default uuid_generate_v4(),
    name varchar not null,
    description varchar not null,
    photos_id int REFERENCES photos(photo_id)
);

create table gallery(
    id uuid default uuid_generate_v4(),
    url varchar not null
);

create table subscriptions(
    id uuid default uuid_generate_v4(),
    email varchar not null
);