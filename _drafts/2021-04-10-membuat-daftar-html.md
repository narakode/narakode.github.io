---
layout: post
title: "Cara Membuat Daftar di HTML"
date: 2021-04-10 12:43:00 +0700
cover: membuat-daftar-html.png
thumb: membuat-daftar-html-thumb.png
categories: html
---

Lanjut belajar HTML, kali ini kita akan belajar cara untuk membuat daftar di HTML.

Ada beberapa tag yang ada di HTML untuk membuat daftar.

Langsung saja saya akan menjelaskanya satu persatu.

## Ordered List / Daftar Berurutan

Ordered List atau `ol` merupakan daftar yang urutanya berurutan, ditandai dengan simbol seperti angka, abjad, dan romawi.

Daftar ini dibuat dengan menggunakan tag `ol`, kemudian isi daftarnya dengan tag `li`.

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

Untuk mengganti simbol pada daftarnya, kita dapat menggunakan atribut `type`, dengan value nama simbolnya.

Berikut daftar simbol yang dapat digunakan.

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

Kita juga dapat mengatur titik awal/nomer awal daftar, dengan menggunakan atribut `start`, diisi dengan nomer awal/titik awal.

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

Selanjutnya ada unordered list atau `ul` yang memiliki fungsi membuat daftar dengan urutan yang tidak berurutan.

Daftar ini ditandai dengan simbol seperti kotak, lingkaran, atau lingkaran hitam.

Daftar ini dibuat dengan tag `ul` yang diisi dengan daftarnya menggunakan atribute `li`.

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

Untuk mengganti simbol pada daftar, gunakan atribute `type` dan diisi degan jenis simbolnya.

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

Daftar ini digunakan untuk membuat daftar yang memiliki struktur dan penjelasan didalamnya.

Untuk membuatnya terdapat tiga tag yang digunakan, yaitu `dl` sebagai wadah dari daftarnya, `dt` sebagai judulnya, dan `dd` sebagai penjelasan dari daftar tersebut.

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