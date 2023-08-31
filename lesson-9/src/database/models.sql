create extension "uuid-ossp";
create table company(
    company_id uuid default uuid_generate_v4() primary key,
    company_name varchar not null,
    founded_year text not null,
    owner_id uuid REFERENCES users(user_id),
    created_at timestamptz default current_timestamp,
    updated_at timestamptz,
    deleted_at timestamptz
);
create table users(
    user_id uuid default uuid_generate_v4() primary key,
    username varchar(64) not null,
    first_name varchar(64) not null,
    last_name varchar(64) not null,
    password varchar not null,
    country text not null,
    balance float not null,
    created_at timestamptz default current_timestamp,
    updated_at timestamptz,
    deleted_at timestamptz
);
create table services(
    service_id uuid default uuid_generate_v4() primary key,
    service_name text not null,
    price int not null,
    isActive boolean default true,
    company_id uuid REFERENCES company(company_id),
    created_at timestamptz default current_timestamp,
    updated_at timestamptz,
    deleted_at timestamptz
);
create table promo_codes(
    promo_id uuid default uuid_generate_v4() primary key,
    promo_code varchar not null,
    cashback float not null,
    status boolean default false,
    service_id uuid REFERENCES services(service_id),
    user_id uuid REFERENCES users(user_id),
    isActive boolean default true,
    expires_date date default current_date,
    created_at timestamptz default current_timestamp,
    updated_at timestamptz,
    deleted_at timestamptz
);