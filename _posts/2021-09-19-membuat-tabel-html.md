---
layout: post
title: "Cara Membuat Tabel Pada HTML"
date: 2021-09-19 08:00:00 +0700
cover: membuat-tabel-html.png
thumb: membuat-tabel-html-thumb.png
categories: html
---

[Tabel HTML]({{ page.url }}) - Tabel adalah kumpulan data yang disusun berdasarkan baris dan kolom.

Tabel digunakan untuk menampilkan data yang terstruktur, seperti data dari *database*, biasanya akan ditampilkan dalam bentuk tabel.

HTML sudah menyediakan alat-alat khusus untuk membuat tabel, mari kita simak penjelasanya.

## Membuat Tabel

Untuk membuat table pada HTML, terdapat tiga tag utama yang bisa kita gunakan, yaitu

* `table`, untuk memulai tabel
* `tr`, untuk membuat *row* atau baris
* `td`, untuk membuat kolom

Contoh.

```html
<table>
	<tr>
		<td>Jhon</td>
		<td>Jakarta</td>
		<td>Male</td>
	</tr>
	<tr>
		<td>Sarah</td>
		<td>Bandung</td>
		<td>Female</td>
	</tr>
	<tr>
		<td>Yani</td>
		<td>Semarang</td>
		<td>Female</td>
	</tr>
</table>
```

Hasilnya.

***

![Membuat Tabel]({{ site.baseurl }}/assets/img/membuat-tabel.png)

***

Hasil tersebut adalah tampilan *default* tabel pada HTML, untuk membuatnya menjadi lebih rapi dan menarik kita perlu menambahkan beberapa atribut pada tabel tersebut.

## Menambahkan Garis Pada Tabel

Untuk menambahkan garis/*border* pada tabel, kita perlu menambahkan atribut `border` yang diisi dengan ketebalan garisnya, pada tag `table`.

Contoh.

```html
<table border="1">
	<tr>
		<td>Jhon</td>
		<td>Jakarta</td>
		<td>Male</td>
	</tr>
	<tr>
		<td>Sarah</td>
		<td>Bandung</td>
		<td>Female</td>
	</tr>
	<tr>
		<td>Yani</td>
		<td>Semarang</td>
		<td>Female</td>
	</tr>
</table>
```

Hasilnya.

***

![Menambahkan Garis Pada Tabel]({{ site.baseurl }}/assets/img/menambahkan-garis-tabel.png)

***

## Mengatur Lebar Tabel

Secara *default*, lebar tabel pada HTML akan menyesuaikan isi dari tabelnya.

Untuk mengaturnya agar lebih konsisten, kita dapat menggunakan atribut `width` yang diisi dengan ukuran lebar tabel pada tag `table`.

Contoh.

```html
<table border="1" width="400px">
	<tr>
		<td>Jhon</td>
		<td>Jakarta</td>
		<td>Male</td>
	</tr>
	<tr>
		<td>Sarah</td>
		<td>Bandung</td>
		<td>Female</td>
	</tr>
	<tr>
		<td>Yani</td>
		<td>Semarang</td>
		<td>Female</td>
	</tr>
</table>
```

Hasilnya.

***

![Mengatur Lebar Tabel]({{ site.baseurl }}/assets/img/mengatur-lebar-tabel.png)

***

## Menambahkan Judul Pada Tabel

Untuk menambahkan judul pada tabel, kita dapat menggunakan tag `th` yang ditambahkan pada baris/row pertama tabel.

Contoh.

```html
<table border="1" width="400px">
	<tr>
		<th>Nama</th>
		<th>Alamat</th>
		<th>Jenis Kelamin</th>
	</tr>
	<tr>
		<td>Jhon</td>
		<td>Jakarta</td>
		<td>Male</td>
	</tr>
	<tr>
		<td>Sarah</td>
		<td>Bandung</td>
		<td>Female</td>
	</tr>
	<tr>
		<td>Yani</td>
		<td>Semarang</td>
		<td>Female</td>
	</tr>
</table>
```

Hasilnya.

***

![Memberikan Judul Pada Tabel]({{ site.baseurl }}/assets/img/memberikan-judul-tabel.png)

***

## Memberikan Warna Pada Tabel

Kita juga dapat memberikan warna latar belakang pada kolom atau baris tabel.

Atribut yang digunakan yaitu `bgcolor` yang diisi dengan nama warnanya.

Contoh.

```html
<table border="1" width="400px">
	<tr bgcolor="red">
		<th>Nama</th>
		<th>Alamat</th>
		<th bgcolor="blue">Jenis Kelamin</th>
	</tr>
	<tr>
		<td>Jhon</td>
		<td>Jakarta</td>
		<td bgcolor="green">Male</td>
	</tr>
	<tr>
		<td>Sarah</td>
		<td>Bandung</td>
		<td>Female</td>
	</tr>
	<tr>
		<td>Yani</td>
		<td>Semarang</td>
		<td>Female</td>
	</tr>
</table>
```

Hasilnya.

***

![Memberikan Warna Pada Tabel]({{ site.baseurl }}/assets/img/memberikan-warna-tabel.png)

***

## Memberikan Jarak Pada Tabel

Seperti yang dilihat pada tabel diatas, jarak antar kolom terlihat sempit, sehingga tabel terlihat kurang rapi.

Untuk itu, kita dapat menambahkan jarak pada kolom dengan menggunakan atribut `cellpading` dengan isi jumlah jaraknya pada tag `table`.

Contoh.

```html
<table border="1" width="400px" cellpadding="8">
	<tr bgcolor="red">
		<th>Nama</th>
		<th>Alamat</th>
		<th bgcolor="blue">Jenis Kelamin</th>
	</tr>
	<tr>
		<td>Jhon</td>
		<td>Jakarta</td>
		<td bgcolor="green">Male</td>
	</tr>
	<tr>
		<td>Sarah</td>
		<td>Bandung</td>
		<td>Female</td>
	</tr>
	<tr>
		<td>Yani</td>
		<td>Semarang</td>
		<td>Female</td>
	</tr>
</table>
```

Hasilnya.

***

![Memberikan Jarak Pada Tabel]({{ site.baseurl }}/assets/img/memberikan-jarak-tabel.png)

***

## Menggabungkan Kolom dan Baris Pada Tabel

Kita juga dapat menggabungkan kolom dan baris yang terdapat pada tabel.

Untuk melakukanya kita dapat menggunakan atribut-atribut berikut pada tag `td` atau `th`.

* `rowspan` untuk menggabungkan baris
* `colspan` untuk menggabungkan kolom

Masing-masing atribut di atas diisi dengan jumlah baris atau kolom yang akan digabungkan.

Contoh.

```html
<table border="1" width="400px" cellpadding="8">
	<tr bgcolor="red">
		<th rowspan="2">Nama</th>
		<th colspan="3" bgcolor="blue">Nilai</th>
	</tr>
	<tr bgcolor="yellow">
		<td>IPA</td>
		<td>IPS</td>
		<td>MTK</td>
	</tr>
	<tr>
		<td>Michael</td>
		<td>90</td>
		<td>80</td>
		<td>70</td>
	</tr>
	<tr>
		<td>Jhon</td>
		<td>80</td>
		<td>75</td>
		<td>90</td>
	</tr>
	<tr>
		<td>Sarah</td>
		<td>70</td>
		<td>90</td>
		<td>65</td>
	</tr>
	<tr>
		<td>Jordi</td>
		<td>80</td>
		<td>75</td>
		<td>90</td>
	</tr>
</table>
```

Hasilnya.

***

![Menggabungkan Tabel]({{ site.baseurl }}/assets/img/menggabungkan-tabel.png)

***

## Referensi

Untuk penjelasan lebih lengkap, silakan kunjungi link berikut.

<a href="https://www.w3schools.com/html/html_tables.asp" target="_blank">HTML Tables</a>