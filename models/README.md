#

## Command geerate model

```bash

npx sequelize-cli model:generate --name Book --attributes title:string,alt_title:string,author:string,category:integer,bookshelf_code:string,stock:integer

npx sequelize-cli model:generate --name User --attributes fullname:string,id_card:integer,type_card:string

npx sequelize-cli model:generate --name Receipt --attributes book_id:integer,borrower_id:integer,staff_in_charge:string,start_borrowing:date,end_borrowing:date,status:string


```

```sql
Books
INSERT INTO "public"."Books" ("id", "title", "alt_title", "author", "publisher", "category", "bookshelf_code", "stock", "createdAt", "updatedAt") VALUES
(3, 'Sang Pemimpi', 'sang pemimpi', 'Andrea Hirata', 'Bentang Pustaka', 7, 'AI-02', 10, '2022-04-25 17:19:19.316+07', '2022-04-25 17:19:19.316+07'),
(5, 'Dasar-Dasar Pemrograman Dengan Python', 'dasar-dasar pemrograman dengan python', 'Wenty Dwi Yuniarti', 'no publisher', 2, 'AB-01', 10, '2022-04-25 17:21:59.415+07', '2022-04-25 17:21:59.415+07'),
(4, 'Dasar Logika Pemrograman Komputer', 'dasar logika pemrograman komputer', 'Abdul Kadir', 'no publisher', 2, 'AA-04', 10, '2022-04-25 17:21:07.525+07', '2022-04-25 17:21:07.525+07'),
(2, 'Laskar Pelangi', 'laskar pelangi', 'Andrea Hirata', 'Bentang Pustaka', 7, 'AI-04', 10, '2022-04-25 11:30:24.008+07', '2022-04-25 11:30:24.008+07');

Users
INSERT INTO "public"."Users" ("id", "fullname", "id_card", "type_card", "createdAt", "updatedAt") VALUES
(1, 'Bambang A', '32147658', 'ktp', '2022-04-25 11:40:12.879+07', '2022-04-25 11:40:12.879+07'),
(2, 'Tatang B', '32747658', 'ktp', '2022-04-25 11:40:36.581+07', '2022-04-25 11:40:36.581+07');

Receipt
INSERT INTO "public"."Receipts" ("id", "book_id", "borrower_id", "staff_in_charge", "start_borrowing", "end_borrowing", "status", "createdAt", "updatedAt") VALUES
(3, 5, 2, 'ayu', '2022-04-25 17:25:20.260099+07', NULL, 'dipinjam', '2022-04-25 17:25:20.260099+07', '2022-04-25 17:25:20.260099+07'),
(1, 2, 1, 'wisnu', '2022-04-25 17:23:36.871377+07', NULL, 'dipinjam', '2022-04-25 17:23:36.871377+07', '2022-04-25 17:23:36.871377+07'),
(2, 3, 1, 'wisnu', '2022-04-25 17:23:36.871377+07', '2022-04-25 17:24:24.367407+07', 'dikembalikan', '2022-04-25 17:23:36.871377+07', '2022-04-25 17:23:36.871377+07');
```
