#

##

```sql
Category
INSERT INTO "public"."Categories" ("id", "name", "createdAt", "updatedAt") VALUES
(1, 'ensiklopedia', '2022-04-27 12:16:58.44008+07', '2022-04-27 12:16:58.44008+07'),
(2, 'pelajaran', '2022-04-27 12:17:22.388589+07', '2022-04-27 12:17:22.388589+07'),
(3, 'life-story / biografi', '2022-04-27 12:18:19.544259+07', '2022-04-27 12:18:19.544259+07'),
(4, 'kesehatan', '2022-04-27 12:18:35.283883+07', '2022-04-27 12:18:35.283883+07'),
(5, 'keuangan', '2022-04-27 12:18:47.75509+07', '2022-04-27 12:18:47.75509+07'),
(6, 'makanan & minuman', '2022-04-27 12:19:04.337253+07', '2022-04-27 12:19:04.337253+07'),
(7, 'novel', '2022-04-27 12:19:19.567835+07', '2022-04-27 12:19:19.567835+07'),
(8, 'komik', '2022-04-27 12:19:44.884439+07', '2022-04-27 12:19:44.884439+07'),
(9, 'lainnya', '2022-04-27 12:19:44.884439+07', '2022-04-27 12:19:44.884439+07');

Books
INSERT INTO "public"."Books" ("id", "title", "alt_title", "author", "publisher", "CategoryId", "bookshelf_code", "stock", "createdAt", "updatedAt") VALUES
(5, 'Popular Indonesia Cuisine: Over 100 Recipes', 'Popular Indonesia Cuisine: Over 100 Recipes (Edisi Bahasa Inggris)', 'Sisca Soewitomo', 'tidak ada publisher', 6, 'AG-04', 10, '2022-04-26 12:36:04.754+07', '2022-04-26 12:36:04.754+07'),
(1, 'Mommyclopedia: 78 Resep MPASI', 'MPASI', 'Meta Herdiana Hanindita', 'tidak ada publisher', 6, 'AG-02', 10, '2022-04-26 12:31:38.52+07', '2022-04-26 12:31:38.52+07'),
(2, 'Laskar Pelangi', 'laskar pelangi', 'Andrea Hirata', 'Bentang Pustaka', 7, 'AI-04', 10, '2022-04-25 11:30:24.008+07', '2022-04-25 11:30:24.008+07'),
(3, 'Sang Pemimpi', 'sang pemimpi', 'Andrea Hirata', 'Bentang Pustaka', 7, 'AI-02', 10, '2022-04-25 17:19:19.316+07', '2022-04-25 17:19:19.316+07'),
(6, 'Dasar Logika Pemrograman Komputer', 'dasar logika pemrograman komputer', 'Abdul Kadir', 'tidak ada publisher', 2, 'AA-04', 10, '2022-04-25 17:21:07.525+07', '2022-04-25 17:21:07.525+07'),
(7, 'Popular Indonesia Cuisine: Over 100 Recipes', 'Popular Indonesia Cuisine: Over 100 Recipes (Edisi Bahasa Inggris)', 'Sisca Soewitomo', 'tidak ada publisher', 6, 'AG-04', 10, '2022-04-26 12:38:52.362+07', '2022-04-26 12:38:52.362+07'),
(8, 'Dasar-Dasar Pemrograman Dengan Python', 'dasar-dasar pemrograman dengan python', 'Wenty Dwi Yuniarti', 'no publisher', 2, 'AB-01', 10, '2022-04-25 17:21:59.415+07', '2022-04-25 17:21:59.415+07'),
(12, 'Investasi Saham ala Fundamentalis Dunia', 'Investasi Saham ala Fundamentalis Dunia', 'Investor Saham Pemula (ISP)', 'tidak ada publisher', 7, 'AF-01', 10, '2022-04-26 12:51:44.01+07', '2022-04-26 12:51:44.01+07');

User
INSERT INTO "public"."Users" ("id", "fullname", "id_card", "type_card", "createdAt", "updatedAt") VALUES
(1, 'Bambang A', '32147658', 'ktp', '2022-04-25 11:40:12.879+07', '2022-04-25 11:40:12.879+07'),
(2, 'Wowo', '3423534', 'sim', '2022-04-26 14:06:31.053+07', '2022-04-26 14:06:31.053+07'),
(4, 'hariotriw', '4562316', 'kartu pelajar', '2022-04-26 14:07:58.543+07', '2022-04-26 14:15:41.968+07');

Receipt
INSERT INTO "public"."Receipts" ("id", "BookId", "UserId", "staff_in_charge", "start_borrowing", "end_borrowing", "status", "createdAt", "updatedAt") VALUES
(5, 2, 1, 'ayu', '2022-04-25 20:03:41.774+07', '2022-04-25 20:03:41.774+07', 'dikembalikan', '2022-04-25 20:06:39.607+07', '2022-04-25 20:06:39.607+07'),
(2, 2, 1, 'wisnu', '2022-04-25 17:23:36.871377+07', NULL, 'dipinjam', '2022-04-25 17:23:36.871377+07', '2022-04-25 17:23:36.871377+07'),
(3, 3, 1, 'wisnu', '2022-04-25 17:23:36.871377+07', '2022-04-25 17:24:24.367407+07', 'dikembalikan', '2022-04-25 17:23:36.871377+07', '2022-04-25 17:23:36.871377+07'),
(11, 12, 4, 'wisnu', '2022-04-24 07:00:00+07', '2022-04-26 07:00:00+07', 'dikembalikan', '2022-04-26 14:59:49.033+07', '2022-04-26 14:59:49.033+07'),
(13, 2, 4, 'wisnu', '2022-04-26 23:26:42.701+07', '2022-04-26 23:38:18.597+07', 'dikembalikan', '2022-04-26 23:26:42.71+07', '2022-04-26 23:38:18.601+07'),
(14, 5, 2, 'ayu', '2022-04-26 23:27:33.998+07', NULL, 'dipinjam', '2022-04-26 23:27:33.999+07', '2022-04-26 23:27:33.999+07'),
(17, 6, 2, 'ayu', '2022-04-14 07:00:00+07', '2022-04-15 07:00:00+07', 'dikembalikan', '2022-04-26 23:47:49.623+07', '2022-04-26 23:47:49.623+07');
```
