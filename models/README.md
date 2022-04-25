#

## Command geerate model

```bash

npx sequelize-cli model:generate --name Book --attributes title:string,alt_title:string,author:string,category:integer,bookshelf_code:string,stock:integer

npx sequelize-cli model:generate --name User --attributes fullname:string,id_card:integer,type_card:string

npx sequelize-cli model:generate --name Receipt --attributes book_id:integer,borrower_id:integer,staff_in_charge:string,start_borrowing:date,start_borrowing:date,status:string


```
