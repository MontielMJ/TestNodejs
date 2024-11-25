--CREATE DATABASE WebStore
use WebStore
CREATE TABLE products(
    id int IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2),
    quantity int,
    description text
);


USE [WebStore]
GO
INSERT INTO [dbo].[products]
           ([name]
           ,[price]
           ,[quantity]
           ,[description])
     VALUES
           ('Teclado'
           ,2000
           ,8
           ,'teclado gaming')