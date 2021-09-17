---
layout: post
title: "Cara Membuat Daftar atau List Pada HTML"
date: 2021-09-17 07:30:00 +0700
cover: membuat-daftar-html.png
thumb: membuat-daftar-html-thumb.png
categories: html
---

[Daftar atau List HTML]({{ page.url }}) - Daftar adalah catatan nama atau hal (kata-kata, nama orang, barang, dsb) yang disusun berderet dari atas ke bawah.

Pada halaman website, daftar sering dijumpai untuk menampilkan informasi-informasi tertentu.

Daftar pada HTML terdapat beberapa jenis, berikut penjelasanya.

## Ordered List / Daftar Berurutan

*Ordered List* atau `ol` adalah daftar yang urutanya berurutan, ditandai dengan simbol seperti angka, abjad, romawi, dsb.

Daftar ini bisa dibuat dengan menggunakan tag `ol` sebagai wadahnya, kemudian isi daftarnya menggunakan tag `li`.

Contoh

```html
<ol>
	<li>PHP</li>
	<li>Javascript</li>
	<li>Java</li>
	<li>Python</li>
</ol>
```

Hasilnya

***

![Ordered List]({{ site.baseurl }}/assets/img/ordered-list.png)

***

### Mengganti Simbol

Untuk mengganti simbol pada daftarnya, kita bisa menggunakan atribut `type`, dengan value/isi nama simbolnya.

Berikut daftar simbol yang bisa digunakan.

* __a__, daftar dengan simbol abjad huruf kecil berurutan dari a-z.
* __A__,  daftar dengan simbol abjad huruf kapital berurutan dari A-Z.
* __1__, daftar degnan simbol angka dari 1, 2, 3, dst.
* __i__, daftar degnan simbol angka romawi kecil.
* __I__, daftar degnan simbol angka romawi besar.

Contoh

```html
<ol type="I">
	<li>PHP</li>
	<li>Javascript</li>
	<li>Java</li>
	<li>Python</li>
</ol>
```

Hasilnya

***

![Ordered List Simbol]({{ site.baseurl }}/assets/img/ordered-list-simbol.png)

***

### Mengatur Titik Awal Daftar

Kita juga bisa mengatur titik awal/nomer awal daftar, dengan menggunakan atribut `start`, yang diisi dengan nomer awal/titik awal.

Contoh

```html
<ol type="I" start="4">
	<li>PHP</li>
	<li>Javascript</li>
	<li>Java</li>
	<li>Python</li>
</ol>
```

Hasilnya

***

![Ordered List Titik Awal]({{ site.baseurl }}/assets/img/ordered-list-titik-awal.png)

***

### Membalikan Urutan Daftar

Selain mengatur titik awal, kita juga dapat membalikan urutan daftarnya dengan atribute `reversed`.

Contoh

```html
<ol type="I" reversed>
	<li>PHP</li>
	<li>Javascript</li>
	<li>Java</li>
	<li>Python</li>
</ol>
```

Hasilnya

***

![Mengembalikan Urutan Daftar]({{ site.baseurl }}/assets/img/ordered-list-reversed.png)

***

## Unordered List / Daftar Tidak Berurutan

Selanjutnya ada *unordered list* atau `ul` yang memiliki fungsi membuat daftar dengan urutan yang tidak berurutan.

Daftar ini ditandai dengan simbol seperti kotak, lingkaran, lingkaran hitam, dsb.

Daftar ini dibuat dengan tag `ul` sebagai wadahnya, yang diisi dengan daftarnya menggunakan tag `li`.

Contoh

```html
<ul>
	<li>PHP</li>
	<li>Javascript</li>
	<li>Java</li>
	<li>Python</li>
</ul>
```

Hasilnya

***

![Daftar Tidak Berurutan]({{ site.baseurl }}/assets/img/unordered-list.png)

***

### Mengganti Simbol

Untuk mengganti simbol pada daftar, gunakan atribute `type` dan diisi dengan jenis simbolnya.

Berikut daftar simbolnya.

* __disc__, daftar dengan simbol lingkaran hitam
* __circle__, daftar dengan simbol lingkaran
* __square__, daftar dengan simbol lingkaran kotak
* __none__, daftar tanpa simbol

Contoh

```html
<ul type="square">
	<li>PHP</li>
	<li>Javascript</li>
	<li>Java</li>
	<li>Python</li>
</ul>
```

Hasilnya

***

![Daftar Tidak Berurutan Simbol]({{ site.baseurl }}/assets/img/unordered-list-type.png)

***

## Description List

Daftar ini digunakan untuk membuat daftar yang memiliki struktur berupa judul dan penjelasan/deskripsi didalamnya.

Untuk membuatnya terdapat tiga tag yang digunakan, yaitu `dl` (*description list*) sebagai wadah dari daftarnya, `dt` (*description title*) sebagai judulnya, dan `dd` (*description detail*) sebagai penjelasan/deskripsi dari daftar tersebut.

Contoh

```html
<dl>
	<dt>HTML</dt>
	<dd>Hypertext Markup Language</dd>
	<dt>CSS</dt>
	<dd>Cascading Style Sheet</dd>
	<dt>PHP</dt>
	<dd>PHP : Hypertext Preprocessor</dd>
</dl>
```

Hasilnya

***

![Description List]({{ site.baseurl }}/assets/img/description-list.png)

***